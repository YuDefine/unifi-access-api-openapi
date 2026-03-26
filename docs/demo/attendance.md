# Attendance Demo

This demo fetches **door opening logs** from your UniFi Access console and aggregates them into a daily attendance report — first entry = clock in, last entry = clock out.

<HostConfig />

::: tip
Your API token needs the `view:system_log` and `view:user` permission scopes.
:::

<AttendanceDemo />

## ERP Integration

To automate this as a daily job in your ERP system:

```python
import requests
from datetime import datetime, timedelta

BASE = "https://{host}:12445/api/v1/developer"
HEADERS = {"Authorization": "Bearer <TOKEN>"}

yesterday = datetime.now().replace(hour=0, minute=0, second=0) - timedelta(days=1)
since = int(yesterday.timestamp())
until = since + 86400 - 1

page = 1
all_logs = []
while True:
    resp = requests.post(
        f"{BASE}/system/logs",
        params={"page_num": page, "page_size": 100},
        json={"topic": "door_openings", "since": since, "until": until},
        headers=HEADERS, verify=False
    )
    data = resp.json()["data"]
    all_logs.extend(data["hits"])
    if len(all_logs) >= data["total"]:
        break
    page += 1

# Parse attendance: first/last entry per user
from collections import defaultdict
attendance = defaultdict(list)
for log in all_logs:
    src = log["_source"]
    uid = src["actor"]["id"]
    attendance[uid].append(src["event"]["published"])

for uid, times in attendance.items():
    times.sort()
    clock_in = datetime.fromtimestamp(times[0])
    clock_out = datetime.fromtimestamp(times[-1])
    print(f"{uid}: in={clock_in}, out={clock_out}")
```
