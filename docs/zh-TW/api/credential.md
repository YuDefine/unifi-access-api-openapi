# 憑證

此處的 API 用於管理 PIN 碼、NFC 卡及其他相關憑證。


## 產生 PIN 碼


此 API 讓您產生 PIN 碼。PIN 碼可指派給訪客或使用者，指派後即可用於解鎖門禁。

| 請求 URL | `/api/v1/developer/credentials/pin_codes` |
| :--- | :--- |
| 權限金鑰 | `view:credential` |
| 方法 | `POST` |


### 請求範例: Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl --location --request POST '{host}/api/v1/developer/credentials/pin_codes'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'Content-Type: application/json'
--data ''
--insecure
```

### 回應範例

```json
{
  "code": "SUCCESS",
  "data": "67203419",
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

### 回應主體

| 參數 | 必填 | 型別 | 說明 | 相關 API | 用途 |
| --- | --- | --- | --- | --- | --- |
| data | T | String | PIN 碼 | /api/v1/developer/users; /api/v1/developer/visitors | 將 PIN 碼指派給已建立的使用者或訪客。 |

## 註冊 NFC 卡


喚醒 UA 讀取器並建立工作階段以註冊 NFC 卡。

| 請求 URL | `/api/v1/developer/credentials/nfc_cards/sessions` |
| :--- | :--- |
| 權限金鑰 | `edit:credential` |
| 方法 | `POST` |


### 請求範例

```bash
curl '{host}/api/v1/developer/credentials/nfc_cards sessions'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--data-raw '{"device_id": "0418d6a2bb7a", "reset_ua_card": false}'
--insecure
```

### 回應範例

```json
{
  "code": "SUCCESS",
  "msg": "success",
  "data": {
    "session_id": "e8a97c52-6676-4c48-8589-bd518afc4094"
  }
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| device_id | T | String | 裝置的識別 ID。 | 從 API /api/v1/developer/devices 取得。 |
| reset_ua_card | F | Boolean |  | 此選項允許您重設已在其他站點註冊的 NFC 卡。 |

### 回應主體

| 參數 | 必填 | 型別 | 說明 | 相關 API | 用途 |
| --- | --- | --- | --- | --- | --- |
| session_id | T | String | 用於註冊 NFC 卡的工作階段。 | #6.3 /api/v1/developer/credentials/nfc_cards/sections/{session_id} | NFC 卡輪詢結果。 |

## 取得 NFC 卡註冊狀態


此 API 讓您輪詢 UA 讀取器以取得 NFC 卡註冊狀態及產生的卡片 Token。

| 請求 URL | `/api/v1/developer/credentials/nfc_cards/sessions/:id` |
| :--- | :--- |
| 權限金鑰 | `edit:credential` |
| 方法 | `GET` |


### 回應範例
```json
{
  "code": "SUCCESS",
  "msg": "success",
  "data": {
    "card_id": "014A3151",
    "token": "821f90b262e90c5c0fbcdf3d6d2f3b94cc015d6e8104ab4fb96e4c8b8e90cb7"
  }
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 相關 API | 如何取得？ |
| --- | --- | --- | --- | --- | --- |
| id | T | String | 工作階段 #6.2 的 ID。 | /api/v1/developer/users; /api/v1/developer/visitors | 從 API #6.2 取得 session id |

### 回應主體

| 參數 | 必填 | 型別 | 說明 | 相關 API | 用途 |
| --- | --- | --- | --- | --- | --- |
| token | T | String | 唯一的 NFC 卡 Token。 | /api/v1/developer/users; /api/v1/developer/visitors | 產生的卡片 Token 用於綁定至使用者或訪客。 |
| card_id | T | String | NFC 卡的顯示 ID。 |  |  |

```bash
GET /api/v1/developer/credentials/nfc_cards/sections/e8a97c52-6676-4c48-8589-bd518afc4094
```

## 移除 NFC 卡註冊工作階段


此 API 讓您移除為註冊 NFC 卡而建立的工作階段。

| 請求 URL | `/api/v1/developer/credentials/nfc_cards/sessions/:id` |
| :--- | :--- |
| 權限金鑰 | `edit:credential` |
| 方法 | `DELETE` |


### 請求範例

```
DELETE /api/v1/developer/credentials/nfc_cards/sessions/e8a97c52-6676-4c48-8589-bd518afc4094
```

```json
{
  "code": "SUCCESS",
  "msg": "success",
  "data": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 相關 API | 如何取得？ |
| --- | --- | --- | --- | --- | --- |
| id | T | String | 工作階段 #6.2 的 ID。 | /api/v1/developer/users; /api/v1/developer/visitors | 從 API #6.2 取得 session id |

## NFC 卡註冊流程圖

enroll-nfc-card

## NFC 卡結構

| 參數 | 型別 | 說明 |
| --- | --- | --- |
| token | String | NFC 卡的識別 Token。 |
| display_id | String | NFC 卡的顯示 ID。 |
| status | String | NFC 卡的狀態。enum status
{assigned, pending, disable, deleted, loss} |
| alias | String | NFC 卡的慣用名稱。 |
| card_type | String | NFC 卡的類型。 |
| user_id | String | NFC 卡擁有者的 ID。 |
| user_type | String | 擁有者的類型。enum user_type {USER,VISITOR} |
| user | Object | NFC 卡的擁有者。 |
| user.id | String | 使用者的識別 ID。 |
| user.first_name | String | 使用者的名字。 |
| user.last_name | String | 使用者的姓氏。 |
| user.name | String | 使用者的全名。 |

## 取得 NFC 卡


此 API 允許您取得 NFC 卡詳情。

| 請求 URL | `/api/v1/developer/credentials/nfc_cards/tokens/:token` |
| :--- | :--- |
| 權限金鑰 | `view:credential` |
| 方法 | `GET` |
| UniFi Access 需求 | 版本 1.22.16 或更新 |


### 回應範例

```json
{
  "code": "SUCCESS",
  "data": {
    "alias": "",
    "card_type": "ua_card",
    "display_id": "100005",
    "note": "100005",
    "status": "assigned",
    "token": "f77d69b08eaf5eb5d647ac1a0a73580f1b27494b345f40f54fa022a8741fa15c",
    "user": {
      "avatar": "",
      "first_name": "H",
      "id": "e0051e08-c4d5-43db-87c8-a9b19cb66513",
      "last_name": "L",
      "name": "H L"
    },
    "user_id": "e0051e08-c4d5-43db-87c8-a9b19cb66513",
    "user_type": "USER"
  },
  "msg": "success"
}
```

### 請求範例

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XGET
'{host}/api/v1/developer/credentials/nfc_cards/tokens/f77d69b08eaf5eb5d647ac1a0a73580f1b27
494b345f40f54fa022a8741fa15c'
-H 'Authorization: Bearer wHFmHR*****KD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--insecure
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 範例 | 如何取得？ |
| --- | --- | --- | --- | --- | --- |
| token | T | String | NFC 卡的 Token。 | 821f90b262e90c5c0fbcdfd3d6d2f3b94cc015d6e8104ab4fb96e4c8b8e90cb7 | 從 API #6.3
#6.8 取得 |

### 回應主體

結構: NFC 卡結構

## 取得所有 NFC 卡


此 API 允許您取得所有 NFC 卡。

| 請求 URL | `/api/v1/developer/credentials/nfc_cards/tokens` |
| :--- | :--- |
| 權限金鑰 | `view:credential` |
| 方法 | `GET` |
| UniFi Access 需求 | 版本 1.22.16 或更新 |


### 回應範例

```json
{
  "code": "SUCCESS",
  "data": [
    {
      "alias": "",
      "card_type": "ua_card",
      "display_id": "100004",
      "note": "100004",
      "status": "assigned",
      "token": "9e24cdfafebeb63e58fd02c5f67732b478948e5793d31124239597d9a86b30dc4",
      "user": {
        "avatar": "",
        "first_name": "H",
        "id": "e0051e08-c4d5-43db-87c8-a9b19cb66513",
        "last_name": "L",
        "name": "H L"
      },
      "user_id": "e0051e08-c4d5-43db-87c8-a9b19cb66513",
      "user_type": "USER"
    },
    {
      "alias": "F77D69B03",
      "card_type": "ua_card",
      "display_id": "100005",
      "note": "100005",
      "status": "assigned",
      "token": "f77d69b08eaf5eb5d647ac1a0a73580f1b27494b345f40f54fa022a8741fa15c",
      "user": {
        "avatar": "",
        "first_name": "H2",
        "id": "34dc90a7-409f-4bf8-a5a8-1c59535a21b9",
        "last_name": "L",
        "name": "H2 L"
      },
      "user_id": "34dc90a7-409f-4bf8-a5a8-1c59535a21b9",
      "user_type": "VISITOR"
    }
  ],
  "msg": "success",
  "pagination": {
    "page_num": 1,
    "page_size": 2,
    "total": 2
  }
}
```

### 請求範例

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XGET '{host}/api/v1/developer/credentials/nfc_cards/tokens?page_num=1&page_size=12' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--insecure
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

### 查詢參數

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| page_num | F | String | 分頁中的目前頁碼。 | 1 |
| page_size | F | String | 每頁的使用者數量。 | 25 |

### 回應主體

結構: NFC 卡結構

## 刪除 NFC 卡


此 API 允許您刪除 NFC 卡。

| 請求 URL | `/api/v1/developer/credentials/nfc_cards/tokens/:token` |
| :--- | :--- |
| 權限金鑰 | `edit:credential` |
| 方法 | `DELETE` |
| UniFi Access 需求 | 版本 1.22.16 或更新 |


### 回應範例
```json
{
  "code": "SUCCESS",
  "data": "success",
  "msg": "success"
}
```

### 請求範例

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XDELETE
'{host}/api/v1/developer/credentials/nfc_cards/tokens/f77d69b08eaf5eb5d647ac1a0a73580f1b27
494b345f40f54fa022a8741fa15c'
-H 'Authorization: Bearer wHFmHR*****KD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--insecure
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 範例 | 如何取得？ |
| --- | --- | --- | --- | --- | --- |
| token | T | String | NFC 卡的 Token。 | 821f90b262e90c5c0fbcdf3d6d2f3b94cc015d6e8104ab4fb96e4c8b8e90cb7 | 從 API #6.3 #6.8 取得 |

## 更新 NFC 卡


此 API 允許您更新 NFC 卡。

| 請求 URL | `/api/v1/developer/credentials/nfc_cards/tokens/:token` |
| :--- | :--- |
| 權限金鑰 | `edit:credential` |
| 方法 | `PUT` |
| UniFi Access 需求 | 版本 3.1.30 或更新 |


### 回應範例

```json
{
  "code": "SUCCESS",
  "data": "success",
  "msg": "success"
}
```

### 請求範例

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XPUT \
'{host}/api/v1/developer/credentials/nfc_cards/tokens/f77d69b08eaf5eb5d647ac1a0a73580f1b27494b345f40f54fa022a8741fa15c' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data '{
    "alias": "New Alias"
}' \
--insecure
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 範例 | 如何取得？ |
| --- | --- | --- | --- | --- | --- |
| token | T | String | NFC 卡的 Token。 | 821f90b262e90c5c0fbcdfd3d6d2f3b94cc015d6e8104ab4fb96e4c8b8e90cb7 | 從 API #6.3
#6.8 取得 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 相關 API | 如何取得？ |
| --- | --- | --- | --- | --- | --- |
| alias | F | String | NFC 卡的別名。 |  |  |

## Touch Pass 結構

| 參數 | 型別 | 說明 |
| --- | --- | --- |
| activated_at | Object | 憑證啟用的時間戳記。 |
| card_id | String | 卡片的識別碼。 |
| card_name | String | 卡片的顯示名稱。 |
| expired_at | Object | 憑證到期的時間戳記。 |
| id | String | 憑證記錄的唯一識別碼。 |
| last_activity | String | 最後一次活動或使用的時間戳記。 |
| status | String | enum status {ACTIVE, PENDING, SUSPENDED, INACTIVE, EXPIRED} Touch Pass 的狀態。 |
| user_avatar | String | 使用者頭像圖片的 URL。 |
| user_email | String | 使用者的電子郵件地址。 |
| user_id | String | 使用者的唯一識別碼。 |
| user_name | String | 使用者的全名。 |
| user_status | String | enum user_status {ACTIVE, PENDING, UNLINK} 使用者帳號的狀態。 |
| bundles | Array[Object] | 指派給使用者的行動憑證套件列表。 |
| bundles[].bundle_id | String | 行動憑證套件的唯一識別碼。 |
| bundles[].bundle_status | String | enum bundle_status {ACTIVE, SUSPENDED} 套件的狀態。 |
| bundles[].device_id | String | 與套件連結的裝置識別碼。 |
| bundles[].device_name | String | 連結裝置的顯示名稱。 |
| bundles[].device_type | Integer | 代表裝置類型的代碼。 |
| bundles[].source | String | enum source {google, apple} 行動憑證的來源平台。 |

## 取得 Touch Pass 列表


此 API 允許您取得依狀態篩選的 Touch Pass 列表。

| 請求 URL | `/api/v1/developer/credentials/touch_passes` |
| :--- | :--- |
| 權限金鑰 | `view:credential` |
| 方法 | `GET` |
| UniFi Access 需求 | 版本 3.2.20 或更新 |
注意: 若 user_status 為 UNLINK，表示關聯的使用者已不再連結（即該使用者被視為遺失或已從系統移除）。


### 回應範例

```json
{
  "code": "SUCCESS",
  "data": [
    {
      "bundles": [],
      "card_id": "F8AD-3A41-787D-4D30",
      "card_name": "",
      "id": "31fa3c4e-4a42-4021-a3f9-6ae08610cf32",
      "last_activity": "2025-04-03T07:29:13+01:00",
      "status": "PENDING",
      "user_avatar": "https://****.svc.ui.com/186b07b1-fa13-49b5-8954-399d1b9c5285",
      "user_email": "example@ui.com",
      "user_id": "472cabd2-0634-4e85-9e8d-5a73b500516a",
      "user_name": "Example Name",
      "user_status": "ACTIVE"
    },
    {
      "bundles": [],
      "card_id": "057B-D703-0C6D-4AC9",
      "card_name": "",
      "id": "0e297aea-2b66-434c-a3bc-4f26314ed509",
      "last_activity": "2025-04-03T07:29:13+01:00",
      "status": "PENDING",
      "user_avatar": "https://****.svc.ui.com/9c11e195-ad37-4d79-955d-4c07645aeeda",
      "user_email": "example@ui.com",
      "user_id": "2b96d25e-f4be-4383-9b90-73741a985ef1",
      "user_name": "test name",
      "user_status": "ACTIVE"
    },
    {
      "bundles": [],
      "card_id": "DDEA-906E-DBAF-49A1",
      "card_name": "",
      "id": "ff6abef9-ca97-4aa6-b6a8-e07c6896d541",
      "last_activity": "2025-04-03T07:29:13+01:00",
      "status": "PENDING",
      "user_avatar": "https://****.svc.ui.com/e1392d90-9973-4e40-AA83-02edb8ef1a73",
      "user_email": "example@ui.com",
      "user_id": "c16941d1-a4c0-429e-8960-9cf126b96878",
      "user_name": "Example Name",
      "user_status": "ACTIVE"
    }
  ],
  "msg": "success",
  "pagination": {
    "page_num": 1,
    "page_size": 3,
    "total": 3
  }
}
```

### 請求範例

```bash
curl --location --request GET
'https://192.168.1.1:12445/api/v1/developer/credentials/touch_passes?
page_num=1&page_size=10&status=PENDING'
--header 'Authorization: Bearer wHFmHR*****kD6wHg'
--header 'Content-Type: application/json' \
--insecure
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

### 查詢參數

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| page_num | F | String | 分頁中的目前頁碼。 | 1 |
| page_size | F | String | 每頁的 Touch Pass 數量。 | 10 |
| status | F | String | enum status {ACTIVE, PENDING, SUSPENDED, INACTIVE} 依通行證狀態篩選結果。 | PENDING |

### 回應主體

結構: Touch Pass 結構

## 搜尋 Touch Pass


此 API 允許您使用篩選條件（例如卡片 ID）搜尋 Touch Pass。

| 請求 URL | `/api/v1/developer/credentials/touch_passes/search` |
| :--- | :--- |
| 權限金鑰 | `view:credential` |
| 方法 | `GET` |
| UniFi Access 需求 | 版本 3.2.20 或更新 |
注意: 若 user_status 為 UNLINK，表示關聯的使用者已不再連結（即該使用者被視為遺失或已從系統移除）。


### 回應範例

```json
{
  "code": "SUCCESS",
  "data": [
    {
      "bundles": [],
      "card_id": "057B-D703-0C6D-4AC9",
      "card_name": "",
      "id": "0e297aea-2b66-434c-a3bc-4f26314ed509",
      "last_activity": "2025-04-03T07:29:13+01:00",
      "status": "PENDING",
      "user_avatar": "https://******.svc.u1.com/9c11e195-ad37-4d79-955d-4c07645aeeda",
      "user_email": "example@ui.com",
      "user_id": "2b96d25e-f4be-4383-9b90-73741a985ef1",
      "user_name": "Test Name",
      "user_status": "ACTIVE"
    }
  ],
  "msg": "success"
}
```

### 請求範例

```bash
curl --location --request GET
'https://192.168.1.1:12445/api/v1/developer/credentials/touch_passes/search?condition=057B'
\--header 'Authorization: Bearer wHFmHR*****kD6wHg' \
--header 'Content-Type: application/json' \
--insecure
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

### 查詢參數

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| condition | T | String | 搜尋條件（例如 card_id、user_name） | 057B, Example Name |

### 回應主體

結構: Touch Pass 結構

## 取得所有可指派的 Touch Pass


此 API 允許您取得所有已暫停或未啟用、可重新指派的 Touch Pass。

| 請求 URL | `/api/v1/developer/credentials/touch_passes/assignable` |
| :--- | :--- |
| 權限金鑰 | `view:credential` |
| 方法 | `GET` |
| UniFi Access 需求 | 版本 3.2.20 或更新 |


### 回應範例

```json
{
  "code": "SUCCESS",
  "data": [
    {
      "bundles": [],
      "card_id": "0007-130C-4845-4A01",
      "card_name": "",
      "id": "2d75e424-6171-4e86-900b-AA696fb05893",
      "last_activity": "2025-04-09T13:40:28+08:00",
      "status": "INACTIVE",
      "user_avatar": "",
      "user_email": "",
      "user_id": "",
      "user_name": "",
      "user_status": ""
    },
    {
      "bundles": [],
      "card_id": "70A3-2FAD-181B-4CC9",
      "card_name": "",
      "id": "c83b69ff-1992-4e7f-9287-1e6a161adeea",
      "last_activity": "2025-04-09T13:40:28+08:00",
      "status": "INACTIVE",
      "user_avatar": "",
      "user_email": "",
      "user_id": "",
      "user_name": "",
      "user_status": ""
    }
  ],
  "msg": "success"
}
```

### 請求範例

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl --location --request GET
'https://192.168.1.1:12445/api/v1/developer/credentials/touch_passes/assignable' \
--header 'Authorization: Bearer wHFmHR*****kD6wHg' \
--header 'Content-Type: application/json' \
--insecure
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

### 回應主體

| 參數 | 型別 | 說明 |
| --- | --- | --- |
| id | String | Touch Pass 的唯一識別碼。 |
| card_id | String | 與 Touch Pass 關聯的卡片 ID。 |
| card_name | String | 卡片的選用名稱。 |
| last_activity | String | 最後記錄的活動時間戳記。 |
| status | String | enum status {SUSPENDED, INACTIVE} Touch Pass 的狀態。 |
| user_id | String | 使用者的唯一識別碼（若未指派則為空）。 |
| user_name | String | 使用者的全名（若未指派則為空）。 |
| user_email | String | 使用者的電子郵件（若未指派則為空）。 |
| user_status | String | 使用者的狀態（若未指派則為空）。 |
| user_avatar | String | 使用者頭像的 URL（若未指派則為空）。 |
| bundles | Array | 保留供未來使用（目前始終為空）。 |

## 更新 Touch Pass


此 API 允許您更新 Touch Pass 的卡片名稱、修改其狀態（ACTIVE / SUSPENDED），以及解除綁定裝置（bundle_status: DISABLED）。

| 請求 URL | `/api/v1/developer/credentials/touch_passes/:id` |
| :--- | :--- |
| 權限金鑰 | `edit:credential` |
| 方法 | `PUT` |
| UniFi Access 需求 | 版本 3.2.20 或更新 |
注意: 若 user_status 為 UNLINK，表示關聯的使用者已不再連結（即該使用者被視為遺失或已從系統移除）。


### 回應範例

```json
{
  "code": "SUCCESS",
  "data": {
    "activated_at": {},
    "bundles": [],
    "card_id": "7880-C192-AF0E-4306",
    "card_name": "test",
    "expired_at": {},
    "id": "1d64d2b8-a8b0-4c73-9d49-4922ad0cacb9",
    "last_activity": "2025-04-09T17:58:18+08:00",
    "status": "SUSPENDED",
    "user_avatar": "",
    "user_email": "example@ui.com",
    "user_id": "1f57be2b-f721-4ea3-b1d1-626815b468f0",
    "user_name": "Test Name",
    "user_status": "ACTIVE"
  },
  "msg": "success"
}
```

### 請求範例


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 範例 | 如何取得？ |
| --- | --- | --- | --- | --- | --- |
| id | T | String | 要更新的 Touch Pass ID。 | 1d64d2b8-a8b0-4c73-9d49-4922ad0cab9 | 從 API /api/v1/developer/credentials/touch_passes/search 取得 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| card_name | F | String | 卡片名稱或別名。 |  |
| status | F | String | enum status {ACTIVE, SUSPENDED} 卡片狀態。 |  |
| bundles | F | Arrayobject | 要停用（移除）的套件列表。每個套件物件為必填。 | 從 API /api/v1/developer/credentials/touch_passes/search 取得 |
| bundles[].bundle_id | T | String | 要停用的套件 ID。 |  |
| bundles[].bundle_status | T | String | enum bundle_status {DISABLED} 支援解除綁定裝置。 |  |

### 回應主體

| 參數 | 型別 | 說明 |
| --- | --- | --- |
| activated_at | Object | 憑證啟用的時間戳記。 |
| card_id | String | 卡片的識別碼。 |
| card_name | String | 卡片的顯示名稱。 |
| expired_at | Object | 憑證到期的時間戳記。 |
| id | String | 憑證記錄的唯一識別碼。 |
| last_activity | String | 最後一次活動或使用的時間戳記。 |
| status | String | enum status {ACTIVE, PENDING, SUSPENDED, INACTIVE, EXPIRED} Touch Pass 的狀態。 |
| user_avatar | String | 使用者頭像圖片的 URL。 |
| user_email | String | 使用者的電子郵件地址。 |
| user_id | String | 使用者的唯一識別碼。 |
| user_name | String | 使用者的全名。 |
| user_status | String | enum user_status {ACTIVE, PENDING, UNLINK} 使用者帳號的狀態。 |
| bundles | Array[Object] | 指派給使用者的行動憑證套件列表。 |
| bundles[].bundle_id | String | 行動憑證套件的唯一識別碼。 |
| bundles[].bundle_status | String | enum bundle_status {ACTIVE, SUSPENDED} 套件的狀態。 |
| bundles[].device_id | String | 與套件連結的裝置識別碼。 |
| bundles[].device_name | String | 連結裝置的顯示名稱。 |
| bundles[].device_type | Integer | 代表裝置類型的代碼。 |
| bundles[].source | String | enum source {google, apple} 行動憑證的來源平台。 |

### 更新卡片名稱與更新 Touch Pass 狀態

**更新卡片名稱與狀態**

```bash
curl --location --request PUT \
'https://192.168.1.1:12445/api/v1/developer/credentials/touch_passes/1d64d2b8-a8b0-4c73-9d49-4922ad0cab9' \
--header 'Authorization: Bearer wHFmHR*****kD6wHg' \
--header 'Content-Type: application/json' \
--data '{
    "card_name": "test",
    "status": "SUSPENDED"
}'
```

**解除綁定裝置**

```bash
curl --location --request PUT \
'https://192.168.1.1:12445/api/v1/developer/credentials/touch_passes/1d64d2b8-a8b0-4c73-9d49-4922ad0cacb9' \
--header 'Authorization: Bearer wHFmHR*****kD6wHg' \
--header 'Content-Type: application/json' \
--data '{
    "bundles": [
        {
            "bundle_id": "DAPLODe22212d0-a70e-4649-ae19-c0e745d65335",
            "bundle_status": "DISABLED"
        }
    ]
}'
```

## 取得 Touch Pass 詳情


此 API 使用 ID 擷取特定 Touch Pass 的詳細資訊。

| 請求 URL | `/api/v1/developer/credentials/touch_passes/:id` |
| :--- | :--- |
| 權限金鑰 | `view:credential` |
| 方法 | `GET` |
| UniFi Access 需求 | 版本 3.2.20 或更新 |
注意: 若 user_status 為 UNLINK，表示關聯的使用者已不再連結（即該使用者被視為遺失或已從系統移除）。

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

| 參數 | 必填 | 型別 | 說明 | 範例 | 如何取得？ |
| --- | --- | --- | --- | --- | --- |
| id | T | String | Touch Pass 的 ID。 | c83b69ff-1992-4e7f-9287-1e6a161adeea | 從 API /api/v1/developer/credentials/touch_passes/search 取得 |


### 回應範例
```json
{
  "code": "SUCCESS",
  "data": {
    "activated_at": {},
    "bundles": [
      {
        "bundle_id": "caf6bd5b-6b8d-409a-b500-977a0f02b181",
        "bundle_status": "ACTIVE",
        "device_id": "device-id-1",
        "device_name": "Test Android",
        "device_type": 20,
        "source": "google"
      }
    ],
    "card_id": "70A3-2FAD-181B-4CC9",
    "card_name": "",
    "expired_at": {},
    "id": "c83b69ff-1992-4e7f-9287-1e6a161adeea",
    "last_activity": "2025-04-09T17:49:20+08:00",
    "status": "ACTIVE",
    "user_avatar": "",
    "user_email": "example@ui.com",
    "user_id": "3e763e5d-6804-437d-ae8d-3fee74119b80",
    "user_name": "Example Name",
    "user_status": "ACTIVE"
  },
  "msg": "success"
}
```

### 請求範例

```bash
curl --location --request GET \
'https://192.168.1.1:12445/api/v1/developer/credentials/touch_passes/c83b69ff-1992-4e7f-9287-1e6a161adeea' \
--header 'Authorization: Bearer wHFmHR*****kD6wHg' \
--header 'Content-Type: application/json'
```


## 購買 Touch Pass


此 API 允許您購買新的 Touch Pass。使用此 API 前，請確保已在 Access 網頁應用程式中設定有效的付款方式。

| 請求 URL | `/api/v1/developer/credentials/touch_passes` |
| :--- | :--- |

| 權限金鑰 | `edit:credential` |
| :--- | :--- |
| 方法 | `POST` |
| UniFi Access 需求 | 版本 3.2.20 或更新 |


### 回應範例

```json
{
  "code": "SUCCESS",
  "data": {
    "bundles": [],
    "card_id": "F8AD-3A41-787D-4D30",
    "card_name": "",
    "id": "31fa3c4e-4a42-4021-a3f9-6ae08610cf32",
    "last_activity": "2025-04-03T10:28:42+01:00",
    "status": "INACTIVE",
    "user_avatar": "",
    "user_email": "",
    "user_id": "",
    "user_name": "",
    "user_status": ""
  },
  "msg": "success"
}
```

### 請求範例

```bash
curl --location 'https://192.168.1.1:12445/api/v1/developer/credentials/touch_passes' \
--header 'Authorization: Bearer wHFmHR*****kD6wHg' \
--header 'Content-Type: application/json' \
--data '{ "count": 2 }'
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| count | T | Int | 要購買的 Touch Pass 總數。 | 手動輸入 |

### 回應主體

| 參數 | 型別 | 說明 |
| --- | --- | --- |
| id | String | 新購買的 Touch Pass ID。 |
| card_id | String | 指派給通行證的卡片 ID。 |
| card_name | String | 卡片別名或名稱。初始為空。 |
| status | String | 購買後 Touch Pass 的初始狀態（INACTIVE）。 |
| last_activity | String | 最後一次活動或使用的時間戳記。 |
| bundles | Array | 預設為空陣列。 |
| user_id | String | 空字串；Touch Pass 尚未指派給任何使用者。 |
| user_name | String | 空字串；Touch Pass 尚未指派給任何使用者。 |
| user_email | String | 空字串；Touch Pass 尚未指派給任何使用者。 |
| user_avatar | String | 空字串。 |
| user_status | String | 空字串。 |

## 下載 QR Code 圖片


此 API 允許您依 ID 下載 QR Code 圖片。

| 請求 URL | `/api/v1/developer/credentials/qr_codes/download/:visitor_id` |
| :--- | :--- |
| 權限金鑰 | `view:credential` |
| 方法 | `GET` |
| UniFi Access 需求 | 版本 3.3.10 或更新 |


### 請求範例: Shell/cURL

```bash
curl --location --request GET
'https://192.168.1.1:12445/api/v1/developer/credentials/qr_codes/download/15a90692-6f3b-4e1c-9886-bcd15e9c3f2d' \
--header 'Authorization: Bearer s4KgshBaoXTwXwFAHLPwDw' \
--header 'Content-Type: application/json' \
--output visitor_qr_code.png \
--insecure
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| visitor_id | T | String | 要下載的訪客 ID。 | 從 API /api/v1/developer/visitors 取得 |

## 匯入第三方 NFC 卡


此 API 允許您透過上傳 CSV 檔案將第三方 NFC 卡 ID 匯入 Access 系統。

| 請求 URL | `/api/v1/developer/credentials/nfc_cards/import` |
| :--- | :--- |
| 權限金鑰 | `edit:credential` |
| 方法 | `POST` |
| UniFi Access 需求 | 版本 3.3.10 或更新 |


### 請求範例: Shell/cURL

```bash
curl --location 'https://192.168.1.1:12445/api/v1/developer/credentials/nfc_cards/import' \
--header 'Authorization: Bearer NvrB7qunKOFi/HcIjUMF0w' \
--form 'file=@"/Documents/ufcs.csv'"
```

### 回應範例

```json
{
  "code": "SUCCESS",
  "data": [
    {
      "alias": "alias1",
      "nfc_id": "068E2836",
      "token": "e0d473463b421f472f81baf0dbec7c066a5cca48bde4f7d40199d8aa15f9fc21"
    },
    {
      "alias": "alias2",
      "nfc_id": "068E2839",
      "token": "6d29a729b99fdf5c1e1138deafc4c29a7c8567d10e1b298300a33b7d1dd4f05c"
    },
    {
      "alias": "alias3",
      "nfc_id": "068E2838",
      "token": "082ff5a1d22c7488da657185d213979c987418416d8b99cd471346407d265130"
    }
  ],
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| file | T | File | 包含 NFC ID 或選填別名的 CSV 檔案。 |

### CSV 格式

```csv
068E2836, alias1
068E2839, alias2
068E2838, alias3
```

注意: 068E2836 為第三方卡片的 NFC ID 範例。NFC ID 以大寫十六進位表示。別名欄位必須唯一。重複的別名將導致匯入失敗。若回傳的 Token 為空，表示該記錄匯入失敗。
