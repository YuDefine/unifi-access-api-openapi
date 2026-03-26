# 出勤紀錄 Demo

此 Demo 從 UniFi Access 主機擷取**門禁開啟紀錄**，彙整為每日出勤報表 — 每人當天第一筆 = 上班打卡，最後一筆 = 下班打卡。

<HostConfig />

::: tip
API Token 需具備 `view:system_log` 及 `view:user` 權限範圍。
:::

<AttendanceDemo />

## ERP 整合範例

作為 ERP 系統的每日排程工作：

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

# 解析出勤：每人的第一筆 / 最後一筆紀錄
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
    print(f"{uid}: 上班={clock_in}, 下班={clock_out}")
```
