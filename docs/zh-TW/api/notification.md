# 通知

> 此處的 API 用於 Webhook 與 WebSocket。


## 取得通知 [WebSocket]


此 API 可讓您取得通知，例如門鈴通知。

請求 URL: /api/v1/developer/devices/notifications
權限金鑰: view:device
協定: WebSocket
方法: GET
UniFi Access 需求: 1.20.11 或更新版本


### 請求範例: wscat

```bash
wscat \
    --no-check \
    -C wss://192.168.1.1:12445/api/v1/developer/devices/notifications \
    -H "Authorization: Bearer qoFJM******9YQX0+g+g" \
    -H "Upgrade: websocket" \
    -H "Connection: Upgrade"
```

### WebSocket 酬載

門鈴響起時: [access.remote_view]

```json
{
  "event": "access.remote_view",
  "receiver_id": "",
  "event_object_id": "535b6125-860c-489a-b0a1-0ba01906afa9",
  "save_to_history": false,
  "data": {
    "channel": "4513899f-0370-4116-9731-63a6b0feea23",
    "token": "6dff120f-2688-497d-856f-0ca08b383d1d",
    "device_id": "e4388386be1d",
    "device_type": "UA-G2-PRO",
    "device_name": "UA-G2-PRO-BE1D",
    "door_name": "Door 236b",
    "controller_id": "68d79a1f494f",
    "floor_name": "1F",
    "request_id": "J0FeDJc8ZNzHjxr1SUIP6GLQDjAkdZFp",
    "clear_request_id": "",
    "in_or_out": "in",
    "create_time": 1694771479,
    "reason_code": 0,
    "door_guard_ids": [
      "daa10301-7744-4623-a90e-372718af1d41",
      "9d526114-70ce-49ec-8655-81767ffb3eb4",
      "c003514f-60bb-4aa3-9150-cd361b1458a0",
      "0d6273e4-9b54-4b91-b7f8-40d0d41780c1",
      "f395f473-e6ea-4232-a45f-9ec20c813e96",
      "c52f9920-be17-4357-936c-47d94dad753a",
      "8ed10bf7-8f5e-4b68-98da-76d2f315d515",
      "e4de9c92-e385-4b31-8cfc-8e9d192c0e10",
      "2159ac55-a1d9-42f3-ba2b-6c87cf5ea383"
    ],
    "connected_uah_id": "e4388384236b",
    "room_id": "WR-e4388386be1d-3YSCjtuV5VuyfLT46mUXnnY2q5KQfKxx",
    "host_device_mac": "68D79A1F494B"
  }
}
```

門鈴狀態變更: [access.remote_view.change]

| reason_code | 說明 |
|---|---|
| 105 | 門鈴逾時。 |
| 106 | 管理員拒絕開門。 |
| 107 | 管理員成功解鎖門。 |
| 108 | 訪客取消門鈴。 |
| 400 | 門鈴已被另一位管理員接聽。 |

管理員遠端開門: [access.data.device.remote_unlock]

```json
{
  "event": "access.data.device.remote_unlock",
  "receiver_id": "",
  "event_object_id": "e4388384236b",
  "save_to_history": false,
  "data": {
    "unique_id": "5d600936-8618-4f2d-a1b7-d786865b70ba",
    "name": "Door 236b",
    "up_id": "913a35bc-66c9-4293-a617-846dd2e285ed",
    "timezone": "",
    "location_type": "door",
    "extra_type": "",
    "full_name": "UDR-ML - 1F - Door 236b",
    "level": 0,
    "work_time": "[]",
    "work_time_id": "",
    "extras": {
      "uah-input_state_dps": "off",
      "uah-wiring_state_dps-neg": "off",
      "uah-wiring_state_dps-pos": "off"
    }
  }
}
```


## 支援的 Webhook 事件列表 [Webhook]

> 若要啟用 Webhook 事件，您必須註冊 Webhook 端點。註冊後，UniFi Access 會在事件發生時，將即時事件資料推送至您應用程式的 Webhook 端點。UniFi Access 使用 HTTPS 將這些 Webhook 事件發送至您的應用程式，傳遞包含 JSON 物件的 JSON 酬載。

| 事件/操作 | 說明 |
|---|---|
| access.doorbell.incoming | 門鈴響起（來電）時觸發。 |
| access.doorbell.completed | 門鈴事件被接受、拒絕或取消時觸發。 |
| access.doorbell.incoming.REN | 透過請求進入 (REN) 按鈕啟動的門鈴觸發。 |
| access.device.dps_status | 表示門位感測器 (DPS) 狀態變更。 |
| access.door.unlock | 所有門解鎖事件時觸發。 |
| access.device.emergency_status | 表示緊急模式狀態變更。 |
| access.unlock_schedule.activate | 解鎖排程啟用時觸發。 |
| access.unlock_schedule.deactivate | 解鎖排程停用時觸發。 |
| access.temporary_unlock.start | 臨時解鎖開始時觸發。 |
| access.temporary_unlock.end | 臨時解鎖結束時觸發。 |
| access.visitor.status.changed | 表示訪客的狀態已變更。 |

> 注意: unlock_schedule.activate、unlock_schedule.deactivate、temporary_unlock.start、temporary_unlock.end、visitor.status.changed UniFi Access 需求: 3.3.10 或更新版本

## 取得 Webhook 端點列表 [Webhook]


此 API 可讓您取得可用的 Webhook 端點。

請求 URL: /api/v1/developer/webhooks/endpoints
權限金鑰: view:webhook
方法: GET
UniFi Access 需求: 2.2.10 或更新版本


### 請求範例: Shell/cURL

```bash
curl '{{host}}/api/v1/developer/webhooks/endpoints'
    -H 'Authorization: Bearer wHFmHR******kD6wHg'
    -H 'accept: application/json'
    -H 'content-type: application/json'
    --insecure
```

### 回應範例

```json
{
  "code": "SUCCESS",
  "data": [
    {
      "endpoint": "http://192.168.1.1:8080",
      "events": [
        "access.doorbell.incoming",
        "access.doorbell.completed",
        "access.doorbell.incoming.REN",
        "access.device.dps_status",
        "access.door.unlock"
      ],
      "id": "1a639160-a7c8-45cb-8789-50dfd255a0fe",
      "name": "subscription events",
      "secret": "6601f1243d2ff70f",
      "headers": {
        "key": "value"
      }
    }
  ],
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 用於驗證與存取控制所需的 Token。 |

### 回應主體

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| id | T | String | 端點的身分 ID。 |
| endpoint | T | String | Webhook 事件發送至的 HTTPS URL。 |
| name | T | String | Webhook 訂閱的名稱。 |
| secret | T | String | 用於驗證來自 UniFi Access 事件的密鑰。 |
| events | T | Array[String] | 要訂閱的事件列表。 |
| headers | F | Object&lt;String, String&gt; | 轉發請求至端點服務的自訂標頭。 |

## 新增 Webhook 端點 [Webhook]


此 API 可讓您新增 Webhook 端點。

請求 URL: /api/v1/developer/webhooks/endpoints
權限金鑰: edit:webhook
方法: POST
UniFi Access 需求: 2.2.10 或更新版本


### 請求範例: Shell/cURL

```bash
curl -XPOST '{{host}}/api/v1/developer/webhooks/endpoints'
    -H 'Authorization: Bearer wHFmHR******kD6wHg'
    -H 'accept: application/json'
    -H 'content-type: application/json'
    --data '{
        "name": "subscription events",
        "endpoint": "http://192.168.1.1:8080",
        "events": [
            "access.doorbell.incoming",
            "access.doorbell.completed",
            "access.doorbell.incoming.REN",
            "access.device.dps_status",
            "access.door.unlock"
        ],
        "headers": {
            "key": "value"
        }
    }'
    --insecure
```

### 回應範例

```json
{
  "code": "SUCCESS",
  "data": {
    "endpoint": "http://192.168.1.1:8080",
    "events": [
      "access.doorbell.incoming",
      "access.doorbell.completed",
      "access.doorbell.incoming.REN",
      "access.device.dps_status",
      "access.door.unlock"
    ],
    "id": "a22ee283-c91f-432b-9d0f-e89bcccad4be",
    "name": "subscription events",
    "secret": "1a7c9c6a69bb5a1e",
    "headers": {
      "key": "value"
    }
  },
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 用於驗證與存取控制所需的 Token。 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| endpoint | T | String | Webhook 事件發送至的 HTTPS URL。注意：為安全起見，建議使用 HTTPS。 |
| name | T | String | Webhook 訂閱的名稱。 |
| events | T | Array[String] | 要訂閱的事件列表。 |
| headers | F | Object&lt;String, String&gt; | 轉發請求至端點服務的自訂標頭。 |

## 更新 Webhook 端點 [Webhook]


此 API 可讓您更新可用的 Webhook 端點。

請求 URL: /api/v1/developer/webhooks/endpoints/:id
權限金鑰: edit:webhook
方法: PUT
UniFi Access 需求: 2.2.10 或更新版本


### 請求範例: Shell/cURL

```bash
curl -XPUT '{{host}}/api/v1/developer/webhooks/endpoints/a22ee283-c91f-432b-9d0f-e89bcccad4be'
    -H 'Authorization: Bearer wHFmHR******kD6wHg'
    -H 'accept: application/json'
    -H 'content-type: application/json'
    --data '{
        "name": "subscription events",
        "endpoint": "http://192.168.1.1:8080",
        "events": [
            "access.doorbell.incoming",
            "access.doorbell.completed",
            "access.doorbell.incoming.REN",
            "access.device.dps_status",
            "access.door.unlock",
            "access.device.emergency_status"
        ],
        "headers": {
            "key": "value"
        }
    }'
    --insecure
```

### 回應範例

```json
{
  "code": "SUCCESS",
  "data": {
    "endpoint": "http://192.168.1.1:8080",
    "events": [
      "access.doorbell.incoming",
      "access.doorbell.completed",
      "access.doorbell.incoming.REN",
      "access.device.dps_status",
      "access.door.unlock"
    ],
    "id": "a22ee283-c91f-432b-9d0f-e89bcccad4be",
    "name": "subscription events",
    "secret": "1a7c9c6a69bb5a1e",
    "headers": {
      "key": "value"
    }
  },
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 用於驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| id | T | String | 端點的身分 ID。 | a22ee283-c91f-432b-9d0f-e89bcccad4be |

### 請求主體

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| endpoint | T | String | Webhook 事件發送至的 HTTPS URL。 |
| name | T | String | Webhook 訂閱的名稱。 |
| events | T | Array[String] | 要訂閱的事件列表。 |
| headers | F | Object&lt;String, String&gt; | 轉發請求至端點服務的自訂標頭。 |

## 刪除 Webhook 端點 [Webhook]


此 API 可讓您刪除可用的 Webhook 端點。

請求 URL: /api/v1/developer/webhooks/endpoints/:id
權限金鑰: edit:webhook
方法: DELETE
UniFi Access 需求: 2.2.10 或更新版本


### 請求範例: Shell/cURL

```bash
curl -XDELETE '{{host}}/api/v1/developer/webhooks/endpoints/a22ee283-c91f-432b-9d0f-e89bcccad4be'
    -H 'Authorization: Bearer wHFmHR******kD6wHg'
    -H 'accept: application/json'
    --insecure
```

### 回應範例

```json
{
  "code": "SUCCESS",
  "data": null,
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 用於驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| id | T | String | 端點的身分 ID。 | a22ee283-c91f-432b-9d0f-e89bcccad4be |

## 允許 Webhook 端點擁有者接收 Webhook 事件 [Webhook]

以下範例示範如何接收 Webhook 訊息。請注意，secret 需要調整為指定的 secret。這些僅為範例；在實際使用中，應使用 HTTPS 和自訂 URL。

請求 URL: 您的 Webhook 端點
方法: POST
UniFi Access 需求: 2.2.10 或更新版本

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| Signature | T | String | 包含請求時間 (t) 和簽章 (v1) | t=1695902233,v1=a7ea8840af212767d7795481bed914a9f2ea7241d35212b597bec13aa4bfa06b |

> 完整的 Webhook 酬載範例及 Go/Rust/Python 處理 Webhook 請求的程式碼範例，請參閱官方 PDF 文件。
