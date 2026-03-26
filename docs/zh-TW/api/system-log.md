# 系統日誌

此處的 API 用於系統日誌管理。


## 主題參考

| 參數 | 說明 |
| --- | --- |
| all | 取得所有日誌。 |
| door_openings | 取得門開啟日誌。 |
| critical | 取得裝置重啟、刪除、離線狀態及偵測的日誌。 |
| updates | 取得裝置更新日誌。 |
| device_events | 取得裝置上線狀態、裝置更新、存取政策同步，以及門禁排程啟用與停用的日誌。 |
| admin_activity | 取得管理員活動日誌，例如存取政策更新、設定變更及使用者管理。 |
| visitor | 取得訪客相關操作的日誌。 |

### 事件結構

事件：關於事件的基本資訊。

| 鍵 | 值（範例） |
| --- | --- |
| Type | access.door.unlock |
| Display Message | Access Granted (Remote) |
| Result | ACCESS |
| Published | 1701087091000 |
| Tag | access |

操作者：關於事件操作者的資訊。

| 鍵 | 值 |
| --- | --- |
| ID | [Actor ID] |
| Type | user |
| Display Name | [Display Name] |
| Alternate ID | [Alternate ID] |
| Alternate Name | [Alternate Name] |
| Avatar | [Avatar] |
| SSO Picture | [SSO Picture] |

驗證：認證資訊。

| 鍵 | 值 |
| --- | --- |
| Credential Provider | REMOTE_THROUGH_UAH |
| Issuer | [Issuer] |

目標：與事件關聯的附加資訊。請注意，每個事件包含不同的屬性。

| Type | ID | Display Name | Alternate ID | Alternate Name |
| --- | --- | --- | --- | --- |
| UAH | 7483c2773855 | UA-HUB-3855 | [Alternate ID] | [Alternate Name] |
| device_config | door_entry_method | entry/exit | [Alternate ID] | [Alternate Name] |
| door | e4978b83-203d-4015-97df-b86efc91cb0c | Door 3855 | [Alternate ID] | [Alternate Name] |
| floor | 04ddb371-457f-44ae-b8cc-8e96bcee5de4 | 1F | [Alternate ID] | [Alternate Name] |
| building | e622671e-89a5-11ee-8897-76acb95e28d5 | UDM Pro | [Alternate ID] | [Alternate Name] |

## 取得系統日誌


此 API 可讓您取得系統日誌。

請求 URL: /api/v1/developer/system/logs
權限金鑰: view:system_log
方法: POST


### 請求範例: Shell/cURL
```bash
curl '{host}/api/v1/developer/system/logs?page_size=1&page_num=25'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--data {
    "topic": "door_openings",
    "since": 1690770546,
    "until": 1690771546,
    "actor_id": "3e1f196e-c97b-4748-aecb-eab5e9c251b2"
}
```

### 回應主體
```json
{
  "code": "SUCCESS",
  "data": {
    "hits": [
      {
        "@timestamp": "2023-07-11T12:11:27Z",
        "_id": "",
        "_source": {
          "actor": {
            "alternate_id": "",
            "alternate_name": "",
            "display_name": "N/A",
            "id": "",
            "type": "user"
          },
          "authentication": {
            "credential_provider": "NFC",
            "issuer": "6FC02554"
          },
          "event": {
            "display_message": "Access Denied / Unknown (NFC)",
            "published": 1689077487000,
            "reason": "",
            "result": "BLOCKED",
            "type": "access.door.unlock"
          },
          "target": [
            {
              "alternate_id": "",
              "alternate_name": "",
              "display_name": "UA-HUB-3855",
              "id": "7483c2773855",
              "type": "UAH"
            }
          ]
        },
        "tag": "access"
      }
    ],
    "page": 1,
    "total": 4
  }
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 用於驗證與存取控制所需的 Token。 |

### 查詢參數

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| page_num | F | String | 分頁中的目前頁碼。 | 1 |
| page_size | F | String | 每頁的日誌數量。 | 25 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| topic | T | String | 依主題取得不同的系統日誌。enum topic{critical, door_openings, updates, device_events, admin_activity, visitor} | door_openings |
| since | F | Integer | 日誌取得的起始時間。 | 1689304925 |
| until | F | Integer | 日誌取得的結束時間。 | 1689804925 |
| actor_id | F | String | 操作者（使用者、訪客及裝置）的身分 ID。 | 3e1f196e-c97b-4748-aecb-eab5e9c251b2 |

### 回應主體

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| actor | T | Object | 關於事件操作者的資訊。 |
| event | T | Object | 關於事件的基本資訊。 |
| authentication | F | Object | 認證資訊。 |
| target | F | Array[Object] | 與事件關聯的附加資訊，例如更新資訊。 |

## 匯出系統日誌


此 API 可讓您將系統日誌匯出為 CSV 檔案。

請求 URL: /api/v1/developer/system/logs/export
權限金鑰: view:system_log
方法: POST
UniFi Access 需求: 1.20.11 或更新版本


### 請求範例: Shell/cURL

```bash
curl '{host}/api/v1/developer/system/logs/export'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--data {}
    "topic": "door_openings",
    "since": 1690770546,
    "until": 1690771546,
    "timezone": "America/New_York",
    "actor_id": "3e1f196e-c97b-4748-aecb-eab5e9c251b2"
}'
--insecure
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 用於驗證與存取控制所需的 Token。 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| topic | T | String | 依主題取得不同的系統日誌。enum topic {critical, door_openings, updates, device_events, admin_activity, visitor} | door_openings |
| since | T | Integer | 日誌取得的起始時間。 | 1689304925 |
| until | T | Integer | 日誌取得的結束時間。請注意 since 與 until 的期間不能超過一個月。 | 1689804925 |
| timezone | T | String | 用於格式化時間的時區。 | America/New_York |
| actor_id | F | String | 操作者（使用者、訪客及裝置）的身分 ID。 | 3e1f196e-c97b-4748-aecb-eab5e9c251b2 |

## 取得系統日誌中的資源


此 API 可讓您取得系統日誌中的資源。

請求 URL: /api/v1/developer/system/logs/resource/:id
權限金鑰: view:system_log
方法: GET
UniFi Access 需求: 1.24.6 或更新版本


### 回應範例

```json
{
  "code": "SUCCESS",
  "msg": "success",
  "data": {
    "video_record": "/activities_resource/video/1708424638_f24a7b67-c584-4e22-a7b8-074f0fa93da0.mp4",
    "video_record_thumbnail": "/activities_resource/thumbnail/1708424638_a6d1fa60-d895-4d4c-a40c-447f97c8824f.jpg",
    "created_at": "2024-02-20T18:23:58+08:00",
    "updated_at": "2024-02-20T18:23:58+08:00"
  }
}
```

### 請求範例: Shell/cURL

```bash
curl '{host}/api/v1/developer/system/logs/resource/0418d6a38f00-b6906057-2a90-4426-835c-b5b172381fec'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--insecure
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 用於驗證與存取控制所需的 Token。 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| Id | T | String | 資源 ID 從系統日誌中分類為 &#x27;activities_resource&#x27; 類型的目標取得。 | &quot;target&quot;: {&quot;type&quot;: &quot;activities_resource&quot;,&quot;id&quot;: &quot;0418d6a38f00-b6906057-2a90-4426-835c-b5b172381fec&quot;,&quot;display_name&quot;: &quot;Resource&quot;,&quot;alternate_id&quot;: &quot;&quot;, &quot;alternate_name&quot;: &quot;&quot;}] |

## 取得系統日誌中的靜態資源

此 API 可讓您取得系統日誌中的靜態資源。

請求 URL: /api/v1/developer/system/static/:path
權限金鑰: view:system_log
方法: GET
UniFi Access 需求: 1.24.6 或更新版本

### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 用於驗證與存取控制所需的 Token。 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| path | T | String | 資源路徑，目前支援 /ayar、/capture 及 activities_resource。 |  |

```yaml
### avatar resource
curl '{host}/api/v1/developer/system/static/ avatar/dalaceb6-20ba-4285-a6b1-c4f2bf7161f8'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--insecure
### preview resource
curl '{host}/api/v1/developer/system/static-preview/1700707333_9660da3a-06c8-459d-8cc9-24889d13fba5.png'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--insecure
### capture video resource
curl '{host}/api/v1/developer/system/static/activities_resource/video/1708402379_92746868-5c69-4a11-9d4c-33f03785d741.jpg'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--insecure
### capture thumbnail resource
curl
'{host}/api/v1/developer/system/static/activities_resource/thumbail/1708402379_92746868-5c69-4a11-9d4c-33f03785d741.jpg'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--insecure
```
