# 訪客

此處的 API 用於管理訪客，包括建立、檢視和刪除訪客。同時也能為訪客指派 NFC 卡、排程、PIN 碼、位置及其他存取資源。


## 結構定義

| 參數 | 型別 | 說明 |
| --- | --- | --- |
| id | String | 訪客的識別 ID。 |
| first_name | String | 訪客的名字。 |
| last_name | String | 訪客的姓氏。 |
| status | String | 訪客的狀態。enum status {UPCOMING=1, VISITED=2, VISITING=3, CANCELLED=4, NO_VISIT=5, ACTIVE=6} |
| inviter_id | String | 邀請者的識別 ID。 |
| inviter_name | String | 邀請者的名稱。 |
| mobile_phone | String | 訪客的聯絡電話。 |
| remarks | String | 訪客的備註。 |
| email | String | 訪客的電子郵件。 |
| visitor_company | String | 訪客的公司。 |
| visit_reason | String | 拜訪原因：enum reason {Interview, Business, Cooperation, others} |
| start_time | Integer | 拜訪開始時間。 |
| end_time | Integer | 拜訪結束時間。 |
| nfc_cards | Array[Object] | 與綁定 NFC 卡關聯的 Token。 |
| nfc_cards[].id | String | NFC 卡的顯示 ID。 |
| nfc_cards[].token | String | 唯一的 NFC 卡 Token。 |
| pin_code | Object | 與綁定 PIN 碼關聯的 Token。 |
| pin_code_token | String | 使用者用於開門的 PIN 雜湊碼憑證。 |
| schedule_id | String | 排程的識別 ID。 |
| schedule | Object | 指派給訪客的排程。若存在排程資訊，表示拜訪排程為週期性。若不包含排程資訊，則表示為一次性拜訪排程。 |
| schedule.name | String | 排程的名稱。 |
| schedule.type | String | 排程的類型。 |
| schedule.week_schedule | Object | 可自訂的每日排程策略，從週日到週六。若未指定，表示每天都允許存取。 |
| schedule.week_schedule monday | Array[Object] | 指定從週日到週六的每日存取時段。 |
| schedule.week_schedule monday[0].start_time | String | 存取時段的開始時間。 |
| schedule.week_schedule monday[0].end_time | String | 存取時段的結束時間。 |
| resources | Array[Object] | 指定訪客可以存取的位置。 |
| resources[0].id | String | 門群組的識別 ID。 |
| resources[0].name | String | 門群組的名稱。 |
| resources[0].type | String | 門群組的類型。 |
| license_plates | Array[Object] | 綁定至訪客的車牌。 |
| license_plates[].id | String | 車牌的唯一 ID。 |
| license_plates[].credential | String | 車牌號碼。 |
| license_plates[].credential_type | String | 憑證類型，應為 "license"。 |
| license_plates[].credential_status | String | 憑證狀態 enum credential_status {active, deactivate}。 |

## 建立訪客


此 API 允許您建立新訪客。

請求 URL：/api/v1/developer/visitors
權限金鑰：edit:visitor
方法：POST


### 回應範例

```json
{
  "code": "SUCCESS",
  "data": {
    "first_name": "H",
    "id": "fbe8d920-47d3-4cdf-bda7-bf4b0e26f73c",
    "last_name": "L",
    "nfc_cards": [],
    "resources": [
      {
        "id": "5c496423-6d25-4e4f-8cdf-95ad5135188a",
        "name": "Test Group",
        "type": "door_group"
      },
      {
        "id": "d5573467-d6b3-4e8f-8e48-8a322b91664a",
        "name": "UNVR",
        "type": "door_group"
      },
      {
        "id": "369215b0-cabe-49b6-aeaa-e0b7ec6424d5",
        "name": "visitor-1691671529285",
        "type": "door_group"
      }
    ],
    "schedule": {
      "id": "1fb849bb-e7e5-4516-8dd9-b78094a6708a",
      "is_default": false,
      "name": "schedule-1691671529237",
      "type": "access",
      "weekly": {
        "friday": [
          {
            "end_time": "17:00:59",
            "start_time": "10:00:00"
          }
        ],
        "monday": [],
        "saturday": [],
        "sunday": [],
        "thursday": [
          {
            "end_time": "17:00:59",
            "start_time": "11:00:00"
          }
        ],
        "tuesday": [
          {
            "end_time": "17:00:59",
            "start_time": "10:00:00"
          }
        ],
        "wednesday": [
          {
            "end_time": "17:00:59",
            "start_time": "10:00:00"
          }
        ]
      }
    },
    "schedule_id": "1fb849bb-e7e5-4516-8dd9-b78094a6708a",
    "status": "ACTIVE"
  },
  "msg": "success"
}
```

### 請求範例

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl '{host}'/api/v1/developer/visitors'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json' --data-raw
{
    "first_name": "H",
    "last_name": "L",
    "remarks": "", "mobile_phone": "", "email": "", "visitor_company": "", "start_time": 1688546460,
    "end_time": 1788572799,
    "visit_reason": "Intervieww",
    "week_schedule": {
        "sunday": [], "monday": [], "tuesday": [
            {
            "start_time": "10:00:00",
            },
            "end_time": "17:00:59"
        ]
    ],
    "wednesday": [
        {
        "start_time": "10:00:00",
        },
        "end_time": "17:00:59"
    ]
    ],
    "thursday": [
        {
        "start_time": "11:00:00",
        },
        "end_time": "17:00:59"
    ]
    ],
    "friday": [
        {
        "start_time": "10:00:00",
        },
        "end_time": "17:00:59"
    ]
    ],
    "saturday": []
},
    "resources": [
        {
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 身份驗證與存取控制所需的 Token。 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 範例 | 如何取得？ |
| --- | --- | --- | --- | --- | --- |
| first_name | T | String | 訪客的名字。 |  |  |
| last_name | T | String | 訪客的姓氏。 |  |  |
| remarks | F | String | 訪客的備註。 |  |  |
| mobile_phone | F | String | 訪客的手機號碼。 |  |  |
| email | F | String | 訪客的電子郵件地址。 |  |  |
| visitor_company | F | String | 訪客的公司名稱。 |  |  |
| start_time | T | Integer | 拜訪開始時間。 | 1688546460 |  |
| end_time | T | Integer | 拜訪結束時間。 | 1688572799 |  |
| visit_reason | T | String | 拜訪原因：enum reason
{Interview, Business, Cooperation, Others} | Interview |  |

### 指派可用位置給訪客

| 參數 | 必填 | 型別 | 說明 | 範例 | 如何取得？ |
| --- | --- | --- | --- | --- | --- |
| resources | F | Array[Object] | 指派可用位置給訪客。 |  | 從 API /api/v1/developer/door_groups/topology 取得 |
| resources[0].id | F | String | 當資源類型為 door_group 時，指的是建築物或自訂門群組的群組 ID。當類型為 door 時，指的是門的 ID。 | 9bee6e0e-108d-4c52-9107-76f2c7dea4f1 |  |
| resources[0].type | F | String | 同時支援 door 和 door_group。 | door_group |  |

### 指派排程給訪客

若存在 week_schedule 資訊，表示拜訪排程為週期性。若不包含 week_schedule 資訊，則表示為一次性拜訪排程。

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| week_schedule | F | Object | 可自訂的每日排程策略，從週日到週六。若未指定，表示每天都允許存取。 |  |
| week_schedule.monday | F | Array[Object] | 指定從週日到週六的每日存取時段。 |  |
| week_schedule.monday[0].start_time | F | String | 存取時段的開始時間。 | 00:00:00 |
| week_schedule.monday[0].end_time | F | String | 存取時段的結束時間。 | 23:59:59 |

### 回應主體

*完整欄位定義請參閱回應結構。*

## 取得訪客


此 API 允許您取得訪客詳細資訊。

請求 URL：/api/v1/developer/visitors/:id
權限金鑰：view:visitor
方法：GET


### 回應範例

```json
{
  "code": "SUCCESS",
  "data": {
    "first_name": "UserID",
    "id": "3566867c-fa04-4752-98f6-43cf9a342d4a",
    "last_name": "Last Name",
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
      },
      {
        "credential": "bs279",
        "credential_status": "active",
        "credential_type": "license",
        "id": "f44c6f4e-543d-4aed-ae8c-9c17bab66787"
      }
    ],
    "pin_code": {
      "token": "bc3e3135013e2dcae119390b7897166e8cec3bcf5becb6b05578ab67634559ed"
    },
    "resources": [
      {
        "id": "fd293ecb-98d2-425b-a020-cb9365ea48b3",
        "name": "visitor-1690337152955",
        "type": "door_group"
      }
    ],
    "schedule": {
      "id": "6ccf9e1e-b174-476d-b2fe-96817c780fbf",
      "is_default": false,
      "name": "visitor-1690337152955",
      "type": "access",
      "weekly": null
    },
    "schedule_id": "6ccf9e1e-b174-476d-b2fe-96817c780fbf",
    "status": "VISITED"
  },
  "msg": "success"
}
```

### 請求範例

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XGET '{host}/api/v1/developer/visitors/76794bd8-98c0-49b6-9230-ba8c5812cf29'
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

| 參數 | 必填 | 型別 | 說明 |  |
| --- | --- | --- | --- | --- |
| id | T | String | 訪客的識別 ID。 |  |

### 回應主體

*完整欄位定義請參閱回應結構。*

## 取得所有訪客


此 API 允許您取得所有訪客的列表。

請求 URL：/api/v1/developer/visitors
權限金鑰：view:visitor
方法：GET
注意：車牌功能將於 3.3.10 或更新版本支援


### 請求範例

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XGET '{host}/api/v1/developer/visitors?page_num=1&page_size=25'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--insecure


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 身份驗證與存取控制所需的 Token。 |

### 查詢參數

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| status | F | Integer | 訪客的狀態。enum status{UPCOMING=1, VISITED=2, VISITING=3, CANCELED=4, NO_VISIT=5, ACTIVE=6} | 1 |
| keyword | F | String | 支援名字和姓氏的前綴匹配。注意：使用關鍵字搜尋時，狀態篩選將被停用。 | H |
| page_num | F | String | 分頁中的目前頁碼。 | 1 |
| page_size | F | String | 每頁的訪客數量。 | 25 |
| expand[] | F | string | 決定是否回傳物件（選填）。目前支援以下物件：enum objects {none, access_policy, resource, schedule, nfl_card, pin_code}。"none" 選項表示不回傳任何物件。UniFi Access 需求：1.22.16 或更新版本 | expand\|=access_policy&amp;expand\|=resource&amp;expand\|=schedule&amp;expand\|=nfc_card&amp;expand\|=pin_code |

### 回應主體

*完整欄位定義請參閱回應結構。*

### fetch users through keyword
curl -XGET '{host}/api/v1/developer/visitors?keyword=H'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--insecure
```

```bash
using the "expands" options
curl -XGET '{host}/api/v1/developer/visitors?
expand[]=access_policy&expand[]=resource&expand[]=schedule&expand[]=nfc_card&expand[]=pin_code'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--insecure
```

## 更新訪客


此 API 允許您更新訪客資訊。

請求 URL：/api/v1/developer/visitors/:id
權限金鑰：edit:visitor
方法：PUT


### 回應範例

```json
{
  "code": "SUCCESS",
  "data": {
    "first_name": "H",
    "id": "8564ce90-76ba-445f-b78b-6cca39af0130",
    "last_name": "L",
    "nfc_cards": [],
    "pin_code": null,
    "resources": [
      {
        "id": "d5573467-d6b3-4e8f-8e48-8a322b91664a",
        "name": "UNVR",
        "type": "door_group"
      },
      {
        "id": "e311ca94-172c-49fe-9c91-49bd8ecef845",
        "name": "visitor-1691646856144",
        "type": "door_group"
      }
    ],
    "schedule": {
      "id": "c03bf601-0b90-4341-bce4-6061931e9f4e",
      "is_default": false,
      "name": "visitor-1691646856097",
      "type": "access",
      "weekly": {
        "friday": [
          {
            "end_time": "17:00:59",
            "start_time": "10:00:00"
          }
        ],
        "monday": [
          {
            "end_time": "17:00:59",
            "start_time": "10:00:00"
          }
        ],
        "saturday": [],
        "sunday": [],
        "thursday": [
          {
            "end_time": "18:00:59",
            "start_time": "11:00:00"
          }
        ],
        "tuesday": [],
        "wednesday": [
          {
            "end_time": "17:00:59",
            "start_time": "10:00:00"
          }
        ]
      }
    },
    "schedule_id": "c03bf601-0b90-4341-bce4-6061931e9f4e",
    "status": "ACTIVE"
  },
  "msg": "success"
}
```

### 請求範例

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XPUT '{{host}}/api/v1/developer/visitors/c81dfee6-5970-4938-bd30-40820e16ea01'
    -H 'Authorization: Bearer wHFmHR******kD6wHg'
    -H 'accept: application/json'
    -H 'content-type: application/json'
    --data-raw '
    {
        "first_name": "Test",
        "last_name": "L",
        "remarks": "",
        "mobile_phone": "",
        "email": "",
        "visitor_company": "",
        "start_time": 1688546460,
        "end_time": 1788572799,
        "visit_reason": "Intervieww",
        "week_schedule": {
            "sunday": [],
            "monday": [
                {
                    "start_time": "10:00:00",
                    "end_time": "17:00:59"
                }
            ],
            "tuesday": [],
            "wednesday": [
                {
                    "start_time": "10:00:00",
                    "end_time": "17:00:59"
                }
            ]
            "thursday": [
                {
                    "start_time": "11:00:00",
                    "end_time": "18:00:59"
                }
            ],
            "friday": [
                {
                    "start_time": "10:00:00",
                    "end_time": "17:00:59"
                }
            ],
            "saturday": []
        },
        "resources": [
            {
                "id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
                "type": "door"
            },
            {
                "id": "5c496423-6d25-4e4f-8cdf-95ad5135188a",
                "type": "door_group"
            },
            {
                "id": "d5573467-d6b3-4e8f-8e48-8a322b91664a",
                "type": "door_group"
            }
        ]
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
| first_name | F | String | 訪客的名字。 |  |  |
| last_name | F | String | 訪客的姓氏。 |  |  |
| remarks | F | String | 訪客的備註。 |  |  |
| mobile_phone | F | String | 訪客的手機號碼。 |  |  |
| email | F | String | 訪客的電子郵件地址。 |  |  |
| visitor_company | F | String | 訪客的公司名稱。 |  |  |
| start_time | F | Integer | 拜訪開始時間。 | 1688546460 |  |
| end_time | F | Integer | 拜訪結束時間。 | 1688572799 |  |
| visit_reason | F | String | 拜訪原因：enum reason
{Interview, Business, Cooperation, Others} | Interview |  |

### 指派可用位置給訪客

| 參數 | 必填 | 型別 | 說明 | 範例 | 如何取得？ |
| --- | --- | --- | --- | --- | --- |
| resources | F | Array[Object] | 指派可用位置給訪客。若不需要更新，請省略此參數。 |  | 從 API /api/v1/developer/door_groups/topology 取得 |
| resources[0].id | F | String | 當資源類型為 door_group 時，指的是建築物或自訂門群組的群組 ID。當類型為 door 時，指的是門的 ID。 | 9bee6e0e-108d-4c52-9107-76f2c7dea4f1 |  |
| resources[0].type | F | String | 同時支援 door 和 door_group。 |  |  |

指派排程給訪客

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| week_schedule | F | Object | 可自訂的每日排程策略，從週日到週六。若未指定，表示每天都允許存取。若不需要更新，請省略此參數。 |  |
| week_schedule monday | F | Array[Object] | 指定從週日到週六的每日存取時段。 |  |
| week_schedule monday[0].start_time | F | String | 存取時段的開始時間。 | 00:00:00 |
| week_schedule monday[0].end_time | F | String | 存取時段的結束時間。 | 23:59:59 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 |  |
| --- | --- | --- | --- | --- |
| id | T | String | 訪客的識別 ID。 |  |

### 回應主體

*完整欄位定義請參閱回應結構。*

注意：不支援狀態變更。

## 刪除訪客


此 API 允許您刪除訪客。

請求 URL：/api/v1/developer/visitors/:id
權限金鑰：edit:visitor
方法：DELETE


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
curl -XDELETE '{host}/api/v1/developer/visitors/c81dfee6-5970-4938-bd30-40820e16ea01? is_force=true' -H 'Authorization: Bearer wHFmHR*****kD6wHg' -H 'accept: application/json' -H 'content-type: application/json' --insecure
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 身份驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 |  |
| --- | --- | --- | --- | --- |
| id | T | String | 訪客的識別 ID。 |  |

### 查詢參數

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| is_force | F | Boolean | 若傳入 is_force，將實體刪除此訪客；否則更新為已取消狀態。 | is_force=true |

## 指派 NFC 卡給訪客


請求 URL：/api/v1/developer/visitors/:id/nfc_cards
權限金鑰：edit:visitor
方法：PUT


### 請求範例：Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XPUT '{host}/api/v1/developer/visitors/60b5c15e-9aff-4fc8-9547-d21d2e39c1ff/nfc_cards' \
-H 'Authorization: Bearer wHFmHR******kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data-raw '{
    "token": "d27822fc682b478dc637c6db01813e465174df6e54ca515d8427db623cfda1d0",
    "force_add": true
}' \
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
| id | T | String | 訪客的識別 ID。 | 從 API /api/v1/developer/visitors 取得 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| token | T | String | NFC 卡的 Token。 | 從 API /api/v1/developer/nfc_cards sessions/{session_id} 取得 |
| force_add | F | Boolean | 決定是否覆寫已指派的 NFC 卡。 | true or false |

## 取消指派訪客的 NFC 卡


請求 URL：/api/v1/developer/visitors/:id/nfc_cards/delete
權限金鑰：edit:visitor
方法：PUT


### 請求範例：Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XPUT '{host}/api/v1/developer/visitors/60b5c15e-9aff-4fc8-9547-d21d2e39c1ff/nfc_cards/delete' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
-d '{
    "token": "d27822fc682b478dc637c6db01813e465174df6e54ca515d8427db623cfda1d0"
}' \
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
| id | T | String | 訪客的識別 ID。 | 從 API /api/v1/developer/visitors 取得 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| token | T | String | NFC 卡的 Token。 | 從 API /api/v1/developer/visitors 取得 |

## 指派 PIN 碼給訪客


請求 URL：/api/v1/developer/visitors/:id/pin_codes
權限金鑰：edit:visitor
方法：PUT


### 請求範例：Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XPUT '{host}/api/v1/developer/visitors/17d2f099-99df-429b-becb-1399a6937e5a/pin_codes' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data-raw '{ "pin_code": "57301208" }' \
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
| id | T | String | 訪客的識別 ID。 | 從 API /api/v1/developer/visitors 取得 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| pin_code | T | String | 為訪客產生用於開門的 PIN 碼。 | 從 API /api/v1/developer PIN_codes 取得 |

## 取消指派訪客的 PIN 碼


請求 URL：/api/v1/developer/visitors/:id/pin_codes
權限金鑰：edit:visitor
方法：DELETE


### 請求範例：Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XDELETE '{host}/api/v1/developer/visitors/17d2f099-99df-429b-becb-1399a6937e5a/pin_codes' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
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
| id | T | String | 訪客的識別 ID。 | 從 API /api/v1/developer/visitors 取得 |

## 指派 QR Code 給訪客


此 API 允許您指派 QR Code 給訪客。

請求 URL：/api/v1/developer/visitors/:id/qr_codes
權限金鑰：edit:visitor
方法：PUT
UniFi Access 需求：Version 3.3.10 或更新版本


### 請求範例：Shell/cURL

```bash
curl --location --request PUT 'https://192.168.1.1:12445/api/v1/developer/visitors/15a90692-6f3b-4e1c-9886-bcd15e9c3f2d/qr_codes' \
--header 'Authorization: Bearer s4KgshBaoXTxwfAHLPwDw' \
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
| id | T | String | 訪客的識別 ID。 | 從 API /api/v1/developer/visitors 取得 |

## 取消指派訪客的 QR Code


此 API 允許您從訪客取消指派（移除）QR Code。

請求 URL：/api/v1/developer/visitors/:id/qr_codes
權限金鑰：edit:visitor
方法：DELETE
UniFi Access 需求：Version 3.3.10 或更新版本


### 請求範例：Shell/cURL

```bash
curl --location --request DELETE
'https://192.168.1.1:12445/api/v1/developer/visitors/15a90692-6f3b-4e1c-9886-bcd15e9c3f2d/qr_codes'
--header 'Authorization: Bearer s4KgshBaoXTwXwFAHLPwDw'
--header 'Content-Type: application/json'
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
| id | T | String | 訪客的識別 ID。 | 從 API /api/v1/developer/visitors 取得 |

## 指派車牌號碼給訪客


此 API 允許您指派一個或多個車牌號碼給訪客。

請求 URL：/api/v1/developer/visitors/:id/license_plates
權限金鑰：edit:visitor
方法：PUT
UniFi Access 需求：Version 3.3.10 或更新版本


### 請求範例：Shell/cURL

```bash
curl --location --request PUT 'https://192.168.1.1:12445/api/v1/developer/visitors/b8635fc9-e9d2-4ec5-8763-d2c067ba4fc2/license_plates' \
--header 'Authorization: Bearer s4KgshBaoXTXwFAhLPwDW' \
--header 'Content-Type: application/json' \
--data '[ "abcd", "efge3" ]
']' \
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
| id | T | String | 訪客的 ID。 | 從 API /api/v1/developer/visitors 取得 |

## 取消指派訪客的車牌號碼


此 API 允許您取消指派訪客的車牌號碼。

請求 URL：/api/v1/developer/visitors/:visitor_id/license_plates/:license_plate_id
權限金鑰：edit:visitor
方法：DELETE
UniFi Access 需求：Version 3.3.10 或更新版本


### 請求範例：Shell/cURL

```bash
curl --location --request DELETE
'https://192.168.1.1:12445/api/v1/developer/visitors/b8635fc9-e9d2-4ec5-8763-d2c067ba4fc2/license_plates/0effb50b-8bc9-4a91-b06d-7aec2c896b91'
--header 'Authorization: Bearer s4KgshBaoXTwXwFAHLPwDw'
--header 'Content-Type: application/json'
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
| visitor_id | T | String | 要取消指派車牌號碼的訪客 ID。 | 從 API /api/v1/developer/visitors 取得 |
| licenseplate_id | T | String | 要取消指派的車牌號碼 ID。 | 從訪客詳細資訊中的車牌號碼取得 |
