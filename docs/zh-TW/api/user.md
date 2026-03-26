# 使用者

此處的 API 用於管理使用者，包括處理其基本資訊以及指派 NFC 卡、PIN 碼和存取策略。


## 結構定義

| 參數 | 型別 | 說明 |
| --- | --- | --- |
| Id | String | 使用者的識別 ID。 |
| first_name | String | 使用者的名字。 |
| last_name | String | 使用者的姓氏。 |
| full_name | String | 使用者的全名。 |
| alias | String | 使用者的偏好名稱。 |
| user_email | String | 使用者的電子郵件。UniFi Access 需求：1.22.16 或更新版本 |
| email_status | String | 使用者電子郵件的狀態。 |
| phone | String | 使用者的聯絡電話。 |
| employee_number | String | 使用者的員工編號。 |
| onboard_time | Integer | 使用者到職日期。 |
| nfc_cards | Array[Object] | 與綁定 NFC 卡關聯的 Token。 |
| nfc_cards[].id | String | NFC 卡的顯示 ID。 |
| nfc_cards[].token | String | 唯一的 NFC 卡 Token。 |
| license_plates[].id | String | 車牌的唯一 ID。 |
| license_plates[].credential | String | 車牌號碼。 |
| license_plates[].credential_type | String | 憑證類型，應為 "license"。 |
| license_plates[].credential_status | String | 憑證狀態 enum credential_status {active, deactivate}。 |
| pin_code | Object | 與綁定 PIN 碼關聯的 Token。 |
| pin_code.token | String | 使用者用於開門的 PIN 雜湊碼憑證。 |
| access_policy_ids | Array&lt;String] | 存取策略 ID 的集合。 |
| access_policies | Array[Object] | 指派給使用者的所有策略。 |
| status | String | enum status {ACTIVE, PENDING, DEACTIVATED}
ACTIVE：使用者帳戶為啟用狀態。
PENDING：新的管理員帳戶已被 SSO 帳戶邀請，但邀請尚未被接受。DEACTIVATED：帳戶已被停用。 |
| touch_pass | Array[Object] | 指派給使用者的 Touch Pass，一個使用者只能指派一個 Touch Pass。 |

## 使用者註冊


此 API 允許您註冊新使用者。

請求 URL：/api/v1/developer/users
權限金鑰：edit:user
方法：POST


### 回應範例

```json
{
  "code": "SUCCESS",
  "msg": "success",
  "data": {
    "first_name": "Fist Name",
    "last_name": "Last Name",
    "id": "37f2b996-c2c5-487b-aa22-8b453ff14a4b",
    "user_email": "example@*.com"
  }
}
```

### 請求範例

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl '{host}/api/v1/developer/users'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--data-raw \
{
    "first_name":"H",
    "last_name":"L",
    "employee_number":"100000",
    "onboard_time":1689150139,
    "user_email":"example@*.com"
}'
--insecure
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 身份驗證與存取控制所需的 Token。 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 範例 | 如何取得？ |
| --- | --- | --- | --- | --- | --- |
| first_name | T | String | 使用者的名字。 |  |  |
| last_name | T | String | 使用者的姓氏。 |  |  |
| user_email | F | String | 使用者的電子郵件。UniFi Access 需求：1.22.16 或更新版本 |  |  |
| employee_number | F | String | 使用者的員工編號。若不需要更新，請省略此參數。 |  |  |
| onboard_time | F | Integer | 使用者到職日期。 | 1689150139 |  |

### 回應主體

*完整欄位定義請參閱回應結構。*

## 更新使用者


此 API 允許您更新使用者資訊。

請求 URL：/api/v1/developer/users/:id
權限金鑰：edit:user
方法：PUT


### 回應範例

```json
{
  "code": "SUCCESS",
  "data": null,
  "msg": "success"
}
```

### 請求範例

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XPUT '{host}}/api/v1/developer/user'
-H 'Authorization:Bearer wHFmHR*****kD6wHg'
-H 'accept:application/json'
-H 'content-type:application/json'
--data-raw {'
    "first_name":"H",
    "last_name":"L",
    "employee_number":"",
    "user_email":"example@*.com",
    "pin_code":"",
    "onboard_time":1689150139,
    "status":"ACTIVE"
}
--insecure
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 身份驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| id | T | String | 使用者的識別 ID。 | 348e868e-534a-4ace-ba77-ce80394e31e3 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 範例 | 如何取得？ |
| --- | --- | --- | --- | --- | --- |
| first_name | F | String | 使用者的名字。 |  |  |
| last_name | F | String | 使用者的姓氏。 |  |  |
| user_email | F | String | 使用者的電子郵件。UniFi Access 需求：1.22.16 或更新版本 |  |  |
| employee_number | F | String | 使用者的員工編號。 |  |  |
| onboard_time | F | Integer | 使用者到職日期。 | 1689150139 |  |
| status | F | String | 使用者的狀態。 | "ACTIVE" "DEACTIVATED" |  |

### 回應主體

*完整欄位定義請參閱回應結構。*

## 取得使用者


此 API 允許您取得使用者詳細資訊。

請求 URL：/api/v1/developer/users/:id
權限金鑰：view:user
方法：GET


### 回應範例

```json
{
  "code": "SUCCESS",
  "data": {
    "access_policies": [
      {
        "id": "edbc80df-3698-49fd-8b53-f1867f104947",
        "name": "test",
        "resources": [
          {
            "id": "d5573467-d6b3-4e8f-8e48-8a322b91664a",
            "type": "door_group"
          },
          {
            "id": "5c496423-6d25-4e4f-8cdf-95ad5135188a",
            "type": "door_group"
          },
          {
            "id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
            "type": "door"
          }
        ],
        "schedule_id": "73facd6c-839e-4521-a4f4-c07e1d44e748"
      }
    ],
    "access_policy_ids": [
      "edbc80df-3698-49fd-8b53-f1867f104947"
    ],
    "employee_number": "",
    "first_name": "******",
    "id": "17d2f099-99df-429b-becb-1399a6937e5a",
    "last_name": "L",
    "user_email": "example@*.com",
    "touch_pass": {
      "activated_at": {},
      "bundles": [
        {
          "bundle_id": "caf6bd5b-6b8d-409a-b500-977a0f02b181",
          "bundle_status": "SUSPENDED",
          "device_id": "device-id-1",
          "device_name": "Example Android",
          "device_type": 20,
          "source": "google"
        }
      ],
      "card_id": "70A3-2FAD-181B-4CC9",
      "card_name": "Test",
      "expired_at": {},
      "id": "c83b69ff-1992-4e7f-9287-1e6a161adeea",
      "last_activity": "2025-04-10T00:46:20+08:00",
      "status": "SUSPENDED",
      "user_avatar": "",
      "user_email": "example@ui.com",
      "user_id": "3e763e5d-6804-437d-ae8d-3fee74119b80",
      "user_name": "Example Name",
      "user_status": "ACTIVE"
    },
    "nfc_cards": [
      {
        "id": "100001",
        "token": "d27822fc682b478dc637c6db01813e465174df6e54ca515d8427db623cfda1d0",
        "type": "ua_card"
      }
    ],
    "license_plates": [
      {
        "credential": "jq178",
        "credential_status": "active",
        "credential_type": "license",
        "id": "5cac1825-f5e9-410d-a32e-a1fb9fc83b92"
      }
    ],
    "onboard_time": 1689047588,
    "pin_code": {
      "token": "5f742ee4424e5a7dd265de3461009b9ebafa1fb9d6b15018842055cc0466ac56"
    },
    "status": "ACTIVE"
  },
  "msg": "success"
}
```

### 請求範例

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XGET '{host}/api/v1/developer/users/348e868e-534a-4ace-ba77-ce80394e31e3? expand[]=access_policy'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--insecure
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 身份驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| id | T | String | 使用者的識別 ID。 | 348e868e-534a-4ace-ba77-ce80394e31e3 |

### 查詢參數

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| expand[] | F | Boolean | 決定是否回傳指派給使用者的存取策略（選填）。 | expand\|=access_policy |

### 回應主體

*完整欄位定義請參閱回應結構。*

## 取得所有使用者


此 API 允許您取得所有使用者。

請求 URL：/api/v1/developer/users
權限金鑰：view:user
方法：GET


### 回應範例

```json
{
  "code": "SUCCESS",
  "data": [
    {
      "access_policies": [
        {
          "id": "73f15cab-c725-4a76-a419-a4026d131e96",
          "name": "Default Admin Policy",
          "resources": [
            {
              "id": "d5573467-d6b3-4e8f-8e48-8a322b91664a",
              "type": "door_group"
            },
            {
              "id": "5c496423-6d25-4e4f-8cdf-95ad5135188a",
              "type": "door_group"
            }
          ],
          "schedule_id": "73facd6c-839e-4521-a4f4-c07e1d44e748"
        }
      ],
      "access_policy_ids": [
        "73f15cab-c725-4a76-a419-a4026d131e96"
      ],
      "employee_number": "",
      "first_name": "UniFi",
      "id": "83569f9b-0096-48ab-b2e4-5c9a598568a8",
      "last_name": "User",
      "touch_pass": {
        "activated_at": {},
        "bundles": [
          {
            "bundle_id": "caf6bd5b-6b8d-409a-b500-977a0f02b181",
            "bundle_status": "SUSPENDED",
            "device_id": "device-id-1",
            "device_name": "Example Android",
            "device_type": 20,
            "source": "google"
          }
        ],
        "card_id": "70A3-2FAD-181B-4CC9",
        "card_name": "Test",
        "expired_at": {},
        "id": "c83b69ff-1992-4e7f-9287-1e6a161adeea",
        "last_activity": "2025-04-10T00:46:20+08:00",
        "status": "SUSPENDED",
        "user_avatar": "",
        "user_email": "example@ui.com",
        "user_id": "3e763e5d-6804-437d-ae8d-3fee74119b80",
        "user_name": "Example Name",
        "user_status": "ACTIVE"
      },
      "user_email": "",
      "nfc_cards": [],
      "license_plates": [
        {
          "credential": "jq178",
          "credential_status": "active",
          "credential_type": "license",
          "id": "5cac1825-f5e9-410d-a32e-a1fb9fc83b92"
        }
      ],
      "onboard_time": 0,
      "pin_code": null,
      "status": "ACTIVE"
    },
    {
      "access_policies": [
        {
          "id": "c1682fb8-ef6e-4fe2-aa8a-b6f29df753ff",
          "name": "policy_1690272668035",
          "resources": [
            {
              "id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
              "type": "door"
            }
          ],
          "schedule_id": "0616ef06-b807-4372-9ae0-7a87e12e4019"
        }
      ],
      "access_policy_ids": [
        "c1682fb8-ef6e-4fe2-aa8a-b6f29df753ff"
      ],
      "employee_number": "",
      "first_name": "Tttttt",
      "id": "3a3ba57a-796e-46e0-b8f3-478bb70a114d",
      "last_name": "Tttt",
      "nfc_cards": [],
      "onboard_time": 1689048000,
      "pin_code": null,
      "status": "ACTIVE"
    }
  ],
  "msg": "success",
  "pagination": {
    "page_num": 1,
    "page_size": 97,
    "total": 97
  }
}
```

### 請求範例

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XGET '{host}/api/v1/developer/users?page_num=1&page_size=25&expand[]=access_policy'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--insecure
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 身份驗證與存取控制所需的 Token。 |

### 查詢參數

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| expand[] | F | Boolean | 決定是否回傳指派給使用者的存取策略（選填）。 | expand\|=access_policy |
| page_num | F | String | 分頁中的目前頁碼。 | 1 |
| page_size | F | String | 每頁的使用者數量。 | 25 |

## 指派存取策略給使用者


請求 URL：/api/v1/developer/users/:id/access_policies
權限金鑰：edit:user
方法：PUT


### 請求範例：Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash

### 回應範例

```json
{
  "code": "SUCCESS",
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 身份驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| id | T | String | 使用者的識別 ID。 | 從 API /api/v1/developer/users 取得 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| access_policy_ids | T | Array:String | 多個策略 ID 的集合。 | 從 API /api/v1/developer/access_policies 取得 |

### Assign access policies to user
curl -XPUT '{host}/api/v1/developer/users/38857332-7a5e-4bb6-8837-651b2a47cea5/access_policies' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data-raw '{ "access_policy_ids": ["03895c7f-9f53-4334-812b-5db9c122c109", "3b6bcb0c-7498-44cf-8615-00a96d824cbe"] }' \
--insecure
```

```bash

### Remove all access policies from user
curl -XPUT '{host}/api/v1/developer/users/38857332-7a5e-4bb6-8837-651b2a47cea5/access_policies' \
-H 'Authorization: Bearer wHFmHR******kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data-raw '{ "access_policy_ids": [] }' \
--insecure
```

## 指派 NFC 卡給使用者


請求 URL：/api/v1/developer/users/:id/nfc_cards
權限金鑰：edit:user
方法：PUT


### 請求範例：Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XPUT '{host}/api/v1/developer/users/17d2f099-99df-429b-becb-1399a6937e5a/nfc_cards'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--data-raw {'
    "token": "d27822fc682b478dc637c6db01813e465174df6e54ca515d8427db623cfda1d0",
    "force_add": true}
```

### 回應範例

```json
{
  "code": "SUCCESS",
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 身份驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| id | T | String | 使用者的識別 ID。 | 從 API /api/v1/developer/users 取得 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| token | T | String | NFC 卡的 Token。 | 從 API /api/v1/developer/nfc_cards sessions/{session_id} 取得 |
| force_add | F | Boolean | 決定是否覆寫已指派的 NFC 卡。 | true or false |

## 取消指派使用者的 NFC 卡


請求 URL：/api/v1/developer/users/:id/nfc_cards/delete
權限金鑰：edit:user
方法：PUT


### 請求範例：Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XDELETE '{host}/api/v1/developer/users/17d2f099-99df-429b-becb-1399a6937e5a/nfc_cards/delete'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
-d '{
    "token": "d27822fc682b478dc637c6db01813e465174df6e54ca515d8427db623cfda1d0"
}
--insecure
```

### 回應範例

```json
{
  "code": "SUCCESS",
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 身份驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| id | T | String | 使用者的識別 ID。 | 從 API /api/v1/developer/users 取得 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| token | T | String | NFC 卡的 Token。 | 從 API /api/v1/developer/users 取得 |

## 指派 PIN 碼給使用者


請求 URL：/api/v1/developer/users/:id/pin_codes
權限金鑰：edit:user
方法：PUT


### 請求範例：Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XPUT '{host}/api/v1/developer/users/17d2f099-99df-429b-becb-1399a6937e5a/pin_codes'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--data-raw {'
    "pin_code": "57301208"
}
--insecure
```

### 回應範例

```json
{
  "code": "SUCCESS",
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 身份驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| id | T | String | 使用者的識別 ID。 | 從 API /api/v1/developer/users 取得 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| pin_code | T | String | 為使用者產生用於開門的 PIN 碼。 | 從 API /api/v1/developer/pin_codes 取得 |

## 取消指派使用者的 PIN 碼


請求 URL：/api/v1/developer/users/:id/pin_codes
權限金鑰：edit:user
方法：DELETE


### 請求範例：Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XDELETE '{host}/api/v1/developer/users/17d2f099-99df-429b-becb-1399a6937e5a/pin_codes'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--insecure
```

### 回應範例

```json
{
  "code": "SUCCESS",
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 身份驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| id | T | String | 使用者的識別 ID。 | 從 API /api/v1/developer/users 取得 |

## 建立使用者群組


請求 URL：/api/v1/developer/user_groups
權限金鑰：edit:user
方法：POST
UniFi Access 需求：2.2.6 或更新版本
API version: v1


### 請求範例：Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XPOST '{host}/api/v1/developer/user_groups'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--data-raw {'
    "name": "Group Name",
    "up_id": "013d05d3-7262-4908-ba69-badbbbfb8f5a6"
}
--insecure
```

### 回應範例

```json
{
  "code": "SUCCESS",
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 身份驗證與存取控制所需的 Token。 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| name | T | String | 群組的名稱。 |  |
| up_id | F | String | 父群組 ID（選填） | 從 API /api/v1/developer/user_groups 取得 |

## 取得所有使用者群組


請求 URL：/api/v1/developer/user_groups
權限金鑰：view:user
方法：GET
UniFi Access 需求：2.2.6 或更新版本
API version: v1


### 請求範例：Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XGET '{host}/api/v1/developer/developer/user_groups'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
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
      "full_name": "Group Name",
      "id": "75011ee6-b7ab-4927-9d9f-dd08ef0a3199",
      "name": "Group Name",
      "up_id": "a27899fc-a2d1-4797-8d4d-86118f8555f3",
      "up_ids": [
        "a27899fc-a2d1-4797-8d4d-86118f8555f3"
      ]
    }
  ],
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 身份驗證與存取控制所需的 Token。 |

## 取得使用者群組


請求 URL：/api/v1/developer/user_groups/:id
權限金鑰：view:user
方法：GET
UniFi Access 需求：2.2.6 或更新版本
API version: v1


### 請求範例：Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XGET '{host}/api/v1/developer/developer/user_groups/75011ee6-b7ab-4927-9d9f-dd08ef0a3199'
-H 'Authorization: Bearer wHFmHR*****KD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--insecure
```

### 回應範例

```json
{
  "code": "SUCCESS",
  "data": {
    "full_name": "Group Name",
    "id": "75011ee6-b7ab-4927-9d9f-dd08ef0a3199",
    "name": "Group Name",
    "up_id": "a27899fc-a2d1-4797-8d4d-86118f8555f3",
    "up_ids": [
      "a27899fc-a2d1-4797-8d4d-86118f8555f3"
    ]
  },
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 身份驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| id | T | String | 使用者群組的識別 ID。 | 從 API /api/v1/developer/user_groups 取得 |

## 更新使用者群組


請求 URL：/api/v1/developer/user_groups/:id
權限金鑰：edit:user
方法：PUT
UniFi Access 需求：2.2.6 或更新版本
API version: v1


### 請求範例：Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XPUT '{host}/api/v1/developer/user_groups/75011ee6-b7ab-4927-9d9f-dd08ef0a3199'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--data-raw {'
    "name": "Group Name",
    "up_id": "013d05d3-7262-4908-ba69-badbbb8f5a6"
}
--insecure
```

### 回應範例

```json
{
  "code": "SUCCESS",
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 身份驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| id | T | String | 使用者群組的識別 ID。 | 從 API /api/v1/developer/user_groups 取得 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| name | T | String | 群組的名稱。 |  |
| up_id | F | String | 父群組 ID | 從 API /api/v1/developer/user_groups 取得 |

## 刪除使用者群組


請求 URL：/api/v1/developer/user_groups/:id
權限金鑰：edit:user
方法：DELETE
UniFi Access 需求：2.2.6 或更新版本
API version: v1


### 請求範例：Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XDELETE '{host}/api/v1/developer/developer/user_groups/75011ee6-b7ab-4927-9d9f-dd08ef0a3199'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--insecure
```

### 回應範例

```json
{
  "code": "SUCCESS",
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 身份驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| id | T | String | 使用者群組的識別 ID。 | 從 API /api/v1/developer/user_groups 取得 |

## 指派使用者至使用者群組


請求 URL：/api/v1/developer/user_groups/:id/users
權限金鑰：edit:user
方法：POST
UniFi Access 需求：2.2.6 或更新版本
API version: v1


### 請求範例：Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XPOST '{host}/api/v1/developer/user_groups/75011ee6-b7ab-4927-9d9f-dd08ef0a3199/users' \
-H 'Authorization: Bearer wHFmHR******kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data-raw '["7c6e9102-acb7-4b89-8ed4-7561e6fb706c", "fd63bc4c-52e0-4dbf-a699-e1233339c73b"]' \
--insecure
```

### 回應範例

```json
{
  "code": "SUCCESS",
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 身份驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| id | T | String | 使用者群組的識別 ID。 | 從 API /api/v1/developer/user_groups 取得 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
|  | T | Array:String | 使用者的識別 ID。 | 從 API /api/v1/developer/users 取得 |

## 從使用者群組取消指派使用者


請求 URL：/api/v1/developer/user_groups/:id/users/delete
權限金鑰：edit:user
方法：POST
UniFi Access 需求：2.2.6 或更新版本
API version: v1


### 請求範例：Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XPOST '{host}/api/v1/developer/user_groups/75011ee6-b7ab-4927-9d9f-dd08ef0a3199/users/delete' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data-raw '["7c6e9102-acb7-4b89-8ed4-7561e6fb706c", "fd63bc4c-52e0-4dbf-a699-e1233339c73b"]' \
--insecure
```

### 回應範例

```json
{
  "code": "SUCCESS",
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 身份驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| id | T | String | 使用者群組的識別 ID。 | 從 API /api/v1/developer/user_groups 取得 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
|  | T | Array:String | 使用者的識別 ID。 | 從 API /api/v1/developer/users 取得 |

## 取得使用者群組中的使用者


此 API 允許您僅取得使用者群組中的使用者，不包含子群組中的使用者。

請求 URL：/api/v1/developer/user_groups/:id/users
權限金鑰：view:user
方法：GET
UniFi Access 需求：2.2.6 或更新版本
API version: v1


### 請求範例：Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XGET '{host}/api/v1/developer/user_groups/23676a54-382e-4121-AA80-878d2d9bacaa/users'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
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
      "alias": "",
      "avatar_relative_path": "",
      "email": "*@*.com",
      "email_status": "UNVERIFIED",
      "employee_number": "1000000",
      "first_name": "",
      "full_name": "",
      "id": "27aa91ac-2924-43d4-82e1-24b6a570d29e",
      "last_name": "Chen",
      "onboard_time": 1689150139,
      "phone": "",
      "status": "ACTIVE",
      "user_email": "",
      "username": ""
    }
  ],
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 身份驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| id | T | String | 使用者群組的識別 ID。 | 從 API /api/v1/developer/user_groups 取得 |

### 回應主體

*完整欄位定義請參閱回應結構。*

## 取得使用者群組中的所有使用者


此 API 允許您取得使用者群組中的所有使用者，包含子群組中的使用者。

請求 URL：/api/v1/developer/user_groups/:id/users/all
權限金鑰：view:user
方法：GET
UniFi Access 需求：2.2.6 或更新版本
API version: v1


### 請求範例：Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XGET '{host}'/api/v1/developer/user_groups/23676a54-382e-4121-AA80-878d2d9bacaa/users/all'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
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
      "alias": "",
      "avatar_relative_path": "",
      "email": "@*.com",
      "email_status": "UNVERIFIED",
      "employee_number": "1000000",
      "first_name": "",
      "full_name": "",
      "id": "27aa91ac-2924-43d4-82e1-24b6a570d29e",
      "last_name": "Chen",
      "onboard_time": 1689150139,
      "phone": "",
      "status": "ACTIVE",
      "user_email": "",
      "username": ""
    }
  ],
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 身份驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| id | T | String | 使用者群組的識別 ID。 | 從 API /api/v1/developer/user_groups 取得 |

### 回應主體

*完整欄位定義請參閱回應結構。*

## 取得指派給使用者的存取策略


此 API 允許您取得指派給使用者的存取策略。

請求 URL：/api/v1/developer/users/:id/access_policies
權限金鑰：view:user
方法：GET
UniFi Access 需求：2.2.6 或更新版本
API version: v1


### 請求範例：Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XGET '{host}/users/27aa91ac-2924-43d4-82e1-24b6a570d29e/access_policies? only_user_policies=false' -H 'Authorization: Bearer wHFmHR*****kD6wHg' -H 'accept: application/json' -H 'content-type: application/json' --insecure
```

### 回應範例

```json
{
  "code": "SUCCESS",
  "data": [
    {
      "id": "89a4ca95-1502-4ae7-954f-d986b67afe5c",
      "name": "Default Site Policy",
      "resources": [
        {
          "id": "fd2a06e2-81af-4cf4-9bd5-8bceb5e7b7d7",
          "type": "door_group"
        }
      ],
      "schedule_id": "6b79d12a-2a6e-4463-949c-f1a98fff40d2"
    },
    {
      "id": "bbe48a65-2ac1-4bf6-bd65-bc8f9ee7fb75",
      "name": "Access Policy Name",
      "resources": [],
      "schedule_id": "f7414bcd-f0cc-4d3e-811a-b5ac75f7ddb8"
    }
  ],
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 身份驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| id | T | String | 使用者的識別 ID。 | 從 API /api/v1/developer/users 取得 |

### 查詢參數

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| only_user_policies | F | Boolean | 若 'only_user_policies' 設為 false，則顯示使用者所屬群組的所有策略。若設為 true，則僅顯示直接指派給使用者的策略。 | only_user_policies=true |

### 回應主體

*完整欄位定義請參閱回應結構。*

## 指派存取策略給使用者群組


此 API 用於將存取策略指派給使用者群組。

請求 URL：/api/v1/developer/user_groups/:id/access_policies
權限金鑰：edit:user
方法：PUT
UniFi Access 需求：2.2.6 或更新版本
API version: v1


### 請求範例：Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XPUT '{host}/user_groups/23676a54-382e-4121-AA80-878d2d9bacaa/access_policies'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--data '{
    "access_policy_ids": [
        "bbe48a65-2ac1-4bf6-bd65-bc8f9ee7fb75"
    ]
}
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
| Authorization | T | String | 身份驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| id | T | String | 使用者群組的識別 ID。 | 從 API /api/v1/developer/user_groups 取得 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| access_policy_ids | T | Array:String | 存取策略的識別 ID。 | 從 API /api/v1/developer/access_policies 取得 |

## 取得指派給使用者群組的存取策略


此 API 允許您取得指派給使用者群組的存取策略。

請求 URL：/api/v1/developer/user_groups/:id/access_policies
權限金鑰：view:user
方法：GET
UniFi Access 需求：2.2.6 或更新版本
API version: v1


### 請求範例：Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XGET '{host}/user_groups/23676a54-382e-4121-AA80-878d2d9bacaa/access_policies'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
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
      "id": "89a4ca95-1502-4ae7-954f-d986b67afe5c",
      "name": "Default Site Policy",
      "resources": [
        {
          "id": "fd2a06e2-81af-4cf4-9bd5-8bceb5e7b7d7",
          "type": "door_group"
        }
      ],
      "schedule_id": "6b79d12a-2a6e-4463-949c-f1a98fff40d2"
    },
    {
      "id": "bbe48a65-2ac1-4bf6-bd65-bc8f9ee7fb75",
      "name": "Access Policy Name",
      "resources": [],
      "schedule_id": "f7414bcd-f0cc-4d3e-811a-b5ac75f7ddb8"
    }
  ],
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 身份驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| id | T | String | 使用者群組的識別 ID。 | 從 API /api/v1/developer/user_groups 取得 |

### 回應主體

*完整欄位定義請參閱回應結構。*

## 刪除使用者


此 API 允許您刪除狀態為停用的使用者。

請求 URL：/api/v1/developer/users/:id
權限金鑰：edit:user
方法：DELETE
UniFi Access 需求：3.1.30 或更新版本
API version: v1
注意：僅可刪除已停用的使用者。


### 請求範例：Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XDELETE '{host}/api/v1/developer/developer/users/348e868e-534a-4ace-ba77-ce80394e31e3'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--insecure
```

### 回應範例

```json
{
  "code": "SUCCESS",
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 身份驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| id | T | String | 使用者的識別 ID。 | 從 API /api/v1/developer/users 取得 |

## 搜尋使用者


此 API 允許您搜尋所有使用者。

請求 URL：/api/v1/developer/users/search
權限金鑰：view:user
方法：GET
UniFi Access 需求：3.1.30 或更新版本


### 回應範例

```json
{
  "code": "SUCCESS",
  "data": [
    {
      "alias": "",
      "avatar_relative_path": "/avatar/186b07b1-fa13-49b5-8954-399d1b9c5285",
      "email": "User1@*.com",
      "email_status": "VERIFIED",
      "employee_number": "",
      "first_name": "Name",
      "full_name": "Full Name",
      "id": "472cabd2-0634-4e85-9e8d-5a73b500516a",
      "last_name": "Last Name",
      "nfc_cards": [],
      "onboard_time": 0,
      "phone": "",
      "pin_code": null,
      "status": "ACTIVE",
      "user_email": "User1@*.com",
      "username": ""
    }
  ]
}
```

### 請求範例

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XGET '{host}/api/v1/developer/users/search?keyword=Name&user_id=472cabd2-0634-4e85-9e8d-5a73b500516a&user_id=21472b1d-AA3a-4f2c-855e-0ec3dcaaeb5a&only_admin=false&status=ACTIVE&status=DEACTIVATED&page_size=10&page_num=1' -H 'Authorization: Bearer wHFmHR*****kD6wHg' -H 'accept: application/json' -H 'content-type: application/json' --insecure
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 身份驗證與存取控制所需的 Token。 |

### 查詢參數

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| keyword | F | String | 決定是否回傳指派給使用者的存取策略（選填）。 | keyword=Name |
| user_id | F | String | 支援按多個使用者識別 ID 篩選。 | user_id=472cabd2-0634-4e85-9e8d-5a73b500516a&amp;user_id=21472b1d-aa3a-4f2c-855e-0ec3dcaaeb5a |
| only_admin | F | Boolean | 篩選僅顯示管理員使用者。 | only_admin=false |
| status | F | String | 支援按多個使用者狀態篩選。 | status=ACTIVE&amp;status=DEACTIVATED&amp;status=PENDING |
| page_num | F | String | 分頁中的目前頁碼。 | 1 |
| page_size | F | String | 每頁的使用者數量。 | 25 |

### 回應主體

*完整欄位定義請參閱回應結構。*

## 指派 Touch Pass 給使用者


此 API 將暫停或未啟用的 Touch Pass 指派給特定使用者。

請求 URL：/api/v1/developer/users/:user_id/touch_passes/:touch_pass_id
權限金鑰：edit:user
方法：PUT
UniFi Access 需求：Version 3.2.20 或更新版本


### 回應範例

```json
{
  "code": "SUCCESS",
  "data": {
    "bundles": [],
    "card_id": "104D-2E7D-0CF9-45B9",
    "card_name": "",
    "id": "e9a8e5ad-0afd-4abf-a9ce-9535df6bc00d",
    "last_activity": "2025-04-09T18:44:47+08:00",
    "status": "PENDING",
    "user_avatar": "",
    "user_email": "example@ui.com",
    "user_id": "cadb8707-a2c1-4407-a904-24868bf4aad9",
    "user_name": "Example Name",
    "user_status": ""
  },
  "msg": "success"
}
```

### 請求範例

```bash
curl --location --request PUT '{host}/api/v1/developer/users/cadb8707-a2c1-4407-a904-24868bf4aad9/touch_passes/e9a8e5ad-0afd-4abf-a9ce-9535df6bc00d' \
--header 'Authorization: Bearer wHFmHR*****kD6wHg' \
--data ''
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 身份驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 範例 UUID | 如何取得？ |
| --- | --- | --- | --- | --- | --- |
| user_id | T | String | 指派 Touch Pass 的使用者 ID。 | cadb8707-a2c1-4407-a904-24868bf4aad9 | 從 API /api/v1/developer/users 取得 |
| touch_pass_id | T | String | Touch Pass ID。 | e9a8e5ad-0afd-4abf-a9ce-9535df6bc00d | 從 API /api/v1/developer/credentials/touch_passes/assignable 取得 |

### 回應主體

| 參數 | 型別 | 說明 |
| --- | --- | --- |
| id | String | Touch Pass ID。 |
| card_id | String | 與 Touch Pass 關聯的卡片 ID。 |
| card_name | String | 卡片名稱或別名。 |
| status | String | enum status {PENDING} 指派後的 Touch Pass 狀態。 |
| last_activity | String | 最後活動的時間戳記（ISO 8601 格式）。 |
| bundles | Array | 保留供未來使用。目前始終為空陣列。 |
| user_id | String | 指派 Touch Pass 的使用者 ID。 |
| user_name | String | 使用者的全名。 |
| user_email | String | 使用者的電子郵件地址。 |
| user_status | String | 使用者帳戶的狀態（若無法取得則為空）。 |
| user_avatar | String | 使用者的頭像圖片 URL（若無法取得則為空）。 |

## 取消指派使用者的 Touch Pass


此 API 從特定使用者取消指派 Touch Pass。

請求 URL：/api/v1/developer/users/:user_id/touch_passes/:touch_pass_id
權限金鑰：edit:user
方法：DELETE
UniFi Access 需求：Version 3.2.20 或更新版本


### 回應範例

```json
{
  "code": "SUCCESS",
  "data": {
    "bundles": [],
    "card_id": "104D-2E7D-0CF9-45B9",
    "card_name": "",
    "id": "e9a8e5ad-0afd-4abf-a9ce-9535df6bc00d",
    "last_activity": "2025-04-09T18:46:27+08:00",
    "status": "INACTIVE",
    "user_avatar": "",
    "user_email": "",
    "user_id": "",
    "user_name": "",
    "user_status": "ACTIVE"
  },
  "msg": "success"
}
```

### 請求範例

```bash
curl --location --request DELETE 'https://192.168.1.1:12445/api/v1/developer/users/cadb8707-a2c1-4407-a904-24868bf4aad9/touch_passes/e9a8e5ad-0afd-4abf-a9ce-9535df6bc00d' \
--header 'Authorization: Bearer wHFmHR*****kD6wHg' \
--data ''
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 身份驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 範例 UUID | 如何取得？ |
| --- | --- | --- | --- | --- | --- |
| user_id | T | String | 要取消指派 Touch Pass 的使用者 ID。 | cadb8707-a2c1-4407-a904-24868bf4aad9 | 從 API /api/v1/developer/users 取得 |
| touch_pass_id | T | String | 要取消指派的 Touch Pass ID。 | e9a8e5ad-0afd-4abf-a9ce-9535df6bc00d | 從 API /api/v1/developer/credentials/touch_passes 取得 |

### 回應主體

| 參數 | 型別 | 說明 |
| --- | --- | --- |
| id | String | Touch Pass ID。 |
| card_id | String | 與 Touch Pass 關聯的卡片 ID。 |
| card_name | String | 卡片名稱或別名。 |
| status | String | enum status {SUSPENDED, INACTIVE} 取消指派後的 Touch Pass 狀態。 |
| last_activity | String | 最後活動的時間戳記（ISO 8601 格式）。 |
| bundles | Array | 保留供未來使用。目前始終為空陣列。 |
| user_id | String | 取消指派後為空字串。 |
| user_name | String | 取消指派後為空字串。 |
| user_email | String | 取消指派後為空字串。 |
| user_avatar | String | 取消指派後為空字串。 |
| user_status | String | enum user_status {ACTIVE, PENDING} 取消指派時使用者的狀態。 |

## 批次指派 Touch Pass 給使用者


此 API 允許使用電子郵件地址將未指派的 Touch Pass 指派給使用者。

請求 URL：/api/v1/developer/users/touch_passes/assign
權限金鑰：edit:user
方法：PUT
UniFi Access 需求：Version 3.2.20 或更新版本


### 回應範例

```json
{
  "code": "SUCCESS",
  "data": [
    {
      "bundles": [],
      "card_id": "05FD-99C6-1876-4EF9",
      "card_name": "",
      "id": "fdb79d4-c113-4893-9a3b-b61836b5108d",
      "last_activity": "2025-04-09T13:40:28+08:00",
      "status": "PENDING",
      "user_avatar": "https://192.168.1.1/proxy/users/public/avatar/5b7e0cef-dba1-415b-8ee7-7efb440645c1",
      "user_email": "example@ui.com",
      "user_id": "ed34ad8b-9d34-48a8-b110-0ddc5f1e6055",
      "user_name": "Example Name",
      "user_status": ""
    }
  ],
  "msg": "success"
}
```

### 請求範例

```bash
curl --location --request PUT \
'https://192.168.1.1:12445/api/v1/developer/users/touch_passes/assign' \
--header 'Authorization: Bearer wHFmHR*****kD6wHg' \
--header 'Content-Type: application/json' \
--data '{
    "ids": ["ed34ad8b-9d34-48a8-b110-0ddc5f1e6055"],
    "emails": {
        "ed34ad8b-9d34-48a8-b110-0ddc5f1e6055": "example@ui.com"
    }
}'
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 身份驗證與存取控制所需的 Token。 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| ids | T | Array of Strings | 要指派 Touch Pass 的使用者 ID 列表。 | 從 API /api/v1/developer/users 取得 |
| emails | F | Object (Map) | 使用者的電子郵件。 |  |

### 回應主體

| 參數 | 型別 | 說明 |
| --- | --- | --- |
| id | String | Touch Pass ID。 |
| card_id | String | 與 Touch Pass 關聯的卡片 ID。 |
| card_name | String | 卡片名稱或別名。 |
| status | String | enum status {PENDING} 指派後的 Touch Pass 狀態。 |
| last_activity | String | 最後活動的時間戳記（ISO 8601 格式）。 |
| bundles | Array | 保留供未來使用。目前始終為空陣列。 |
| user_id | String | 指派 Touch Pass 的使用者 ID。 |
| user_name | String | 使用者的全名。 |
| user_email | String | 使用者的電子郵件地址。 |
| user_status | String | 使用者帳戶的狀態（若無法取得則為空）。 |
| user_avatar | String | 使用者的頭像圖片 URL（若無法取得則為空）。 |

## 指派車牌號碼給使用者


此 API 允許您指派一個或多個車牌號碼給特定使用者。

請求 URL：/api/v1/developer/users/:id/license_plates
權限金鑰：edit:user
方法：PUT
UniFi Access 需求：Version 3.3.10 或更新版本


### 請求範例：Shell/cURL

```bash
curl --location --request PUT 'https://192.168.1.1:12445/api/v1/developer/users/d0beeccd-0f5e-4606-9d6e-764e19685e27/license_plates' \
--header 'Authorization: Bearer vPUhdytCPDvt/+dSLlGTjw' \
--header 'Content-Type: application/json' \
--data '["abcd5", "efge36"]' \
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
| Authorization | T | String | 身份驗證與存取控制所需的 Bearer Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| id | T | String | 使用者的唯一 ID | 從 /api/v1/developer/users 取得 |

### 請求主體

要指派給使用者的車牌字串陣列。

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| - | T | Array of Strings | 車牌號碼列表 |

## 取消指派使用者的車牌號碼


此 API 允許您取消指派使用者的車牌號碼。

請求 URL：/api/v1/developer/users/:user_id/license_plates/:license_plate_id
權限金鑰：edit:user
方法：DELETE
UniFi Access 需求：Version 3.3.10 或更新版本


### 請求範例：Shell/cURL

```bash
curl --location --request DELETE 'https://192.168.1.1:12445/api/v1/developer/users/d0beeecd-0f5e-4606-9d6e-764e19685e27/license_plates/74f3c466-c564-4035-aebd-fd383ebebcc6a' \
--header 'Authorization: Bearer vPUhdtCPDvt/+dSLlGTjw'
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
| Authorization | T | String | 身份驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 範例 UUID | 如何取得？ |
| --- | --- | --- | --- | --- | --- |
| user_id | T | String | 要取消指派車牌號碼的使用者 ID。 | d0beecccd-0f5e-4606-9d6e-764e19685e27 | 從 API /api/v1/developer/users 取得 |
| licenseplate_id | T | String | 要取消指派的車牌號碼 ID。 | 74f3c466-c564-4035-aebd-fd383ebebcc6a | 從 API /api/v1/developer/users 取得 |

## 上傳使用者個人資料照片


此 API 允許您為使用者上傳個人資料照片。

請求 URL：/api/v1/developer/users/:id/avatar
權限金鑰：edit:user
方法：POST
UniFi Access 需求：Version 3.3.10 或更新版本
注意：僅支援本地使用者更新個人資料照片。UI Account 使用者須透過 UI Account 介面 (https://account.ui.com/) 更新個人資料照片。


### 請求範例：Shell/cURL

```bash
curl --location 'https://192.168.1.1:12445/api/v1/developer/users/d0beeccd-0f5e-4606-9d6e-764e19685e27/avatar' \
--header 'Authorization: Bearer vPUhdytCPDvt/+dSLlGTjw' \
--form 'file=@"./fa8134ba-352a-4499-ab62-713618388148.jpeg'" --insecure
```

### 回應範例

```json
{
  "code": "SUCCESS",
  "data": {
    "avatar_url": "https://192.168.1.1/proxy/users/public/avatar/d0beecccd-0f5e-4606-9d6e-764e19685e27"
  },
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 身份驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| id | T | String | 使用者的唯一 ID。 | 從 /api/v1/developer/users 取得 |

### 請求主體（Multipart 表單）

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| file | T | File | 要上傳的個人資料照片圖片檔案。 |
