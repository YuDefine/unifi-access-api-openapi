<script setup lang="ts">
import { ref, computed } from 'vue'
import { useHostConfig } from '../composables/useHostConfig'

const { host, apiKey } = useHostConfig()

const loading = ref(false)
const error = ref('')
const logs = ref<any[]>([])
const users = ref<Map<string, { name: string; employeeNumber: string }>>(new Map())

// Default to yesterday
const today = new Date()
const yesterday = new Date(today)
yesterday.setDate(yesterday.getDate() - 1)
const dateStr = ref(yesterday.toISOString().slice(0, 10))

// Filter: specific door
const doorFilter = ref('')
const availableDoors = computed(() => {
  const doors = new Set<string>()
  for (const log of logs.value) {
    const targets = log._source?.target || []
    for (const t of targets) {
      if (t.display_name) doors.add(t.display_name)
    }
  }
  return Array.from(doors).sort()
})

interface AttendanceRecord {
  userId: string
  userName: string
  employeeNumber: string
  firstTime: number
  lastTime: number
  firstDoor: string
  lastDoor: string
  totalEntries: number
  credential: string
}

const attendance = computed(() => {
  const map = new Map<string, AttendanceRecord>()

  for (const log of logs.value) {
    const src = log._source
    if (!src?.actor?.id) continue

    const doorName = src.target?.[0]?.display_name || ''
    if (doorFilter.value && doorName !== doorFilter.value) continue

    const userId = src.actor.id
    const ts = src.event?.published || 0
    const credential = src.authentication?.credential_provider || ''

    if (!map.has(userId)) {
      const userInfo = users.value.get(userId)
      map.set(userId, {
        userId,
        userName: src.actor.display_name || userInfo?.name || userId.slice(0, 8),
        employeeNumber: userInfo?.employeeNumber || '',
        firstTime: ts,
        lastTime: ts,
        firstDoor: doorName,
        lastDoor: doorName,
        totalEntries: 1,
        credential,
      })
    } else {
      const rec = map.get(userId)!
      rec.totalEntries++
      if (ts < rec.firstTime) {
        rec.firstTime = ts
        rec.firstDoor = doorName
      }
      if (ts > rec.lastTime) {
        rec.lastTime = ts
        rec.lastDoor = doorName
      }
    }
  }

  return Array.from(map.values()).sort((a, b) => a.userName.localeCompare(b.userName))
})

function formatTime(ts: number) {
  if (!ts) return '-'
  return new Date(ts * 1000).toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
}

function formatDuration(first: number, last: number) {
  if (!first || !last || first === last) return '-'
  const diff = last - first
  const h = Math.floor(diff / 3600)
  const m = Math.floor((diff % 3600) / 60)
  return `${h}h ${m}m`
}

async function apiFetch(path: string, options?: RequestInit) {
  const base = host.value
  const url = `${base}${path}`
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(apiKey.value ? { Authorization: `Bearer ${apiKey.value}` } : {}),
  }
  const res = await fetch(url, { ...options, headers })
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`)
  return res.json()
}

async function fetchUsers() {
  try {
    let page = 1
    const map = new Map<string, { name: string; employeeNumber: string }>()
    while (true) {
      const res = await apiFetch(`/api/v1/developer/users?page_num=${page}&page_size=100`)
      if (res.code !== 'SUCCESS') break
      const items = res.data?.data || res.data || []
      if (!Array.isArray(items) || items.length === 0) break
      for (const u of items) {
        const name = [u.first_name, u.last_name].filter(Boolean).join(' ') || u.alias || u.id
        map.set(u.id, { name, employeeNumber: u.employee_number || '' })
      }
      const total = res.data?.pagination?.total || 0
      if (page * 100 >= total) break
      page++
    }
    users.value = map
  } catch {
    // Users fetch is optional, proceed without
  }
}

async function fetchLogs() {
  if (!host.value || !apiKey.value) {
    error.value = 'Please configure Host and API Key first (use the settings panel in the navigation bar).'
    return
  }

  loading.value = true
  error.value = ''
  logs.value = []

  try {
    // Parse selected date
    const d = new Date(dateStr.value + 'T00:00:00')
    const since = Math.floor(d.getTime() / 1000)
    const until = since + 86400 - 1

    // Fetch users in parallel
    await fetchUsers()

    // Fetch all log pages
    let page = 1
    const allHits: any[] = []
    while (true) {
      const res = await apiFetch(
        `/api/v1/developer/system/logs?page_num=${page}&page_size=100`,
        {
          method: 'POST',
          body: JSON.stringify({ topic: 'door_openings', since, until }),
        }
      )
      if (res.code !== 'SUCCESS') {
        throw new Error(res.msg || `API error: ${res.code}`)
      }
      const hits = res.data?.hits || []
      allHits.push(...hits)
      const total = res.data?.total || 0
      if (allHits.length >= total || hits.length === 0) break
      page++
    }

    logs.value = allHits
  } catch (e: any) {
    error.value = e.message || String(e)
  } finally {
    loading.value = false
  }
}

async function exportCSV() {
  if (attendance.value.length === 0) return
  const header = 'Employee #,Name,First In,First Door,Last Out,Last Door,Duration,Entries,Credential'
  const rows = attendance.value.map(r =>
    [
      r.employeeNumber,
      r.userName,
      formatTime(r.firstTime),
      r.firstDoor,
      formatTime(r.lastTime),
      r.lastDoor,
      formatDuration(r.firstTime, r.lastTime),
      r.totalEntries,
      r.credential,
    ].map(v => `"${v}"`).join(',')
  )
  const csv = [header, ...rows].join('\n')
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `attendance_${dateStr.value}.csv`
  a.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="attendance-demo">
    <div class="controls">
      <div class="control-group">
        <label>Date</label>
        <input v-model="dateStr" type="date" class="control-input" />
      </div>
      <div class="control-group" v-if="availableDoors.length > 0">
        <label>Filter Door</label>
        <select v-model="doorFilter" class="control-input">
          <option value="">All Doors</option>
          <option v-for="d in availableDoors" :key="d" :value="d">{{ d }}</option>
        </select>
      </div>
      <div class="control-actions">
        <button class="btn-primary" :disabled="loading" @click="fetchLogs">
          {{ loading ? 'Loading...' : 'Fetch Attendance' }}
        </button>
        <button class="btn-secondary" :disabled="attendance.length === 0" @click="exportCSV">
          Export CSV
        </button>
      </div>
    </div>

    <div v-if="error" class="error-box">{{ error }}</div>

    <div v-if="!loading && logs.length > 0" class="summary">
      Found <strong>{{ logs.length }}</strong> door opening events,
      <strong>{{ attendance.length }}</strong> unique users on {{ dateStr }}.
    </div>

    <div v-if="attendance.length > 0" class="table-wrap">
      <table class="attendance-table">
        <thead>
          <tr>
            <th>Employee #</th>
            <th>Name</th>
            <th>First In</th>
            <th>Door</th>
            <th>Last Out</th>
            <th>Door</th>
            <th>Duration</th>
            <th>Entries</th>
            <th>Credential</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in attendance" :key="r.userId">
            <td class="emp-cell">{{ r.employeeNumber || '-' }}</td>
            <td class="name-cell">{{ r.userName }}</td>
            <td class="time-cell">{{ formatTime(r.firstTime) }}</td>
            <td class="door-cell">{{ r.firstDoor }}</td>
            <td class="time-cell">{{ formatTime(r.lastTime) }}</td>
            <td class="door-cell">{{ r.lastDoor }}</td>
            <td class="duration-cell">{{ formatDuration(r.firstTime, r.lastTime) }}</td>
            <td class="count-cell">{{ r.totalEntries }}</td>
            <td class="cred-cell">{{ r.credential }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="!loading && logs.length === 0 && !error" class="empty-state">
      Configure your Host and API Key above, select a date, then click <strong>Fetch Attendance</strong>.
    </div>
  </div>
</template>

<style scoped>
.attendance-demo {
  margin: 16px 0;
}

.controls {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: flex-end;
  padding: 16px 20px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  margin-bottom: 16px;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.control-group label {
  font-size: 12px;
  font-weight: 600;
  color: var(--vp-c-text-2);
}

.control-input {
  font-size: 13px;
  font-family: var(--vp-font-family-mono);
  padding: 6px 10px;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  outline: none;
  transition: border-color 0.2s;
}

.control-input:focus {
  border-color: var(--vp-c-brand-1);
}

.control-actions {
  display: flex;
  gap: 8px;
  margin-left: auto;
}

.btn-primary, .btn-secondary {
  font-size: 13px;
  font-weight: 500;
  padding: 6px 16px;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.btn-primary {
  background: var(--vp-c-brand-1);
  color: var(--vp-c-white);
}

.btn-primary:hover:not(:disabled) {
  background: var(--vp-c-brand-2);
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-secondary {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-border);
}

.btn-secondary:hover:not(:disabled) {
  border-color: var(--vp-c-brand-1);
}

.btn-secondary:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.error-box {
  padding: 12px 16px;
  background: var(--vp-c-danger-soft);
  color: var(--vp-c-danger-1);
  border-radius: 8px;
  font-size: 13px;
  margin-bottom: 16px;
}

.summary {
  font-size: 13px;
  color: var(--vp-c-text-2);
  margin-bottom: 12px;
}

.table-wrap {
  overflow-x: auto;
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
}

.attendance-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}

.attendance-table th {
  text-align: left;
  padding: 10px 12px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  border-bottom: 1px solid var(--vp-c-border);
  white-space: nowrap;
}

.attendance-table td {
  padding: 8px 12px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.attendance-table tbody tr:last-child td {
  border-bottom: none;
}

.attendance-table tbody tr:hover {
  background: var(--vp-c-bg-soft);
}

.emp-cell {
  font-family: var(--vp-font-family-mono);
  font-size: 12px;
  color: var(--vp-c-text-2);
}

.name-cell {
  font-weight: 500;
}

.time-cell {
  font-family: var(--vp-font-family-mono);
  font-size: 12px;
}

.door-cell {
  color: var(--vp-c-text-2);
  font-size: 12px;
}

.duration-cell {
  font-family: var(--vp-font-family-mono);
  font-size: 12px;
  color: var(--vp-c-brand-1);
}

.count-cell {
  text-align: center;
}

.cred-cell {
  font-size: 12px;
  color: var(--vp-c-text-3);
}

.empty-state {
  text-align: center;
  padding: 40px 20px;
  color: var(--vp-c-text-3);
  font-size: 14px;
}

@media (max-width: 640px) {
  .controls {
    flex-direction: column;
    align-items: stretch;
  }
  .control-actions {
    margin-left: 0;
  }
}
</style>
