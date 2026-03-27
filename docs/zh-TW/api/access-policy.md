---
outline: 2
---

# 存取政策

此處的 API 用於管理門禁存取政策。這些政策可與存取排程、樓層及其他門禁存取資源綁定。


## 存取政策結構

| 參數 | 型別 | 說明 |
| --- | --- | --- |
| Id |  | 存取政策的識別 ID。 |
| name | String | 存取政策的名稱。 |
| resources | Array[Object] | 指定可存取的位置。 |
| resources[].type | String | 包含 door 和 door_group 資源。enum_type
{door, door_group} |
| resources[].id | String | 當資源類型為 door_group 時，指的是建築物或自訂門群組的群組 ID。當類型為 door 時，指的是門的 ID。 |
| schedule_id | String | 排程的識別 ID。 |

## 建立存取政策


此 API 允許您建立存取政策。

| 請求 URL | `/api/v1/developer/access_policies` |
| :--- | :--- |
| 權限金鑰 | `edit:policy` |
| 方法 | `POST` |


### 請求範例: Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl '{host}/api/v1/developer/access_policies' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data-raw '{
    "name": "test",
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
    ],
    "schedule_id": "4e108aab-ec9a-4822-bf86-170ea986f934"
}' \
--insecure
```

### 回應範例
```json
{
  "code": "SUCCESS",
  "data": {
    "id": "bb5eb965-42dc-4206-9654-88a2d1c3aaa5",
    "name": "test13",
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
    ],
    "schedule_id": "4e108aab-ec9a-4822-bf86-170ea986f934"
  },
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 如何取得？ | 範例 |
| --- | --- | --- | --- | --- | --- |
| name | T | String | 存取政策的名稱。 |  |  |
| resource | F | Array[Object] | 用於將可存取的位置指派給存取政策。 | 從 API /api/v1/developer/door_groups/topology; /api/v1/developer/door_groups 取得 |  |
| resources[].type | F | String | enum type {door, door_group} |  |  |
| resources[].id | F | String | 當資源類型為 'door_group' 時，指的是建築物或自訂門群組的群組 ID。當類型為 'door' 時，指的是門的 ID。 |  |  |
| schedule_id | T | String | 排程的識別 ID。指派額外的排程。 | 從 API /api/v1/developer/access_policies/schedules 取得 |  |

### 回應主體

| 參數 | 必填 | 型別 | 說明 | 相關 API | 用途 |
| --- | --- | --- | --- | --- | --- |
| id | T | String | 政策的識別 ID。 | /api/v1/developer/users/:user_id/access_policies | 用於將存取政策指派給使用者或從使用者取消指派政策。 |

*完整欄位定義請參閱回應結構。*

## 更新存取政策


此 API 允許您更新政策。

| 請求 URL | `/api/v1/developer/access_policies/:id` |
| :--- | :--- |
| 權限金鑰 | `edit:policy` |
| 方法 | `PUT` |


### 請求範例: Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl '{host}/api/v1/developer/access_policies/242c88e3-0524-42de-8447-45891c5df714'
-H 'Authorization: Bearer wHFmHR******kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json' --data-raw
{'
    "name": "test",
    "resource": [
        {"id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
        "type": "door"
    ],
        {"id": "5c496423-6d25-4e4f-8cdf-95ad5135188a",
        "type": "door_group"
    },
        {"id": "d5573467-d6b3-4e8f-8e48-8a322b91664a",
        "type": "door_group"
    },
    "schedule_id": "4e108aab-ec9a-4822-bf86-170ea986f934"
}
--insecure
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| Id | T | String | 存取政策的識別 ID。 |  |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| name | F | String | 存取政策的名稱。若不需要更新，請省略此參數。 |  |
| resource | F | Array[Object] | 用於將可存取的位置指派給存取政策。若不需要更新，請省略此參數。 | 從 API /api/v1/developer/door_groups/topology; /api/v1/developer/door_groups 取得 |
| resources[].type | F | String | enum type {door, door_group} |  |
| resources[].id | F | String | 當資源類型為 door_group 時，指的是建築物或自訂門群組的群組 ID。當類型為 door 時，指的是門的 ID。 |  |
| schedule_id | F | String | 排程的識別 ID。指派額外的排程。若不需要更新，請省略此參數。 | 從 API /api/v1/developer/access_policies/schedules 取得 |

### 回應主體

| 參數 | 必填 | 型別 | 說明 | 相關 API | 用途 |
| --- | --- | --- | --- | --- | --- |
| id | T | String | 政策的識別 ID。 | /api/v1/developer/users/:user_id/access_policies | 用於將存取政策指派給使用者或從使用者取消指派政策。 |

*完整欄位定義請參閱回應結構。*

## 刪除存取政策


此 API 允許您刪除存取政策。

| 請求 URL | `/api/v1/developer/access_policies/:id` |
| :--- | :--- |
| 權限金鑰 | `edit:policy` |
| 方法 | `DELETE` |


### 請求範例: Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XDELETE '{host}'/api/v1/developer/access_policies/460d0bcc-5d4f-4e7b-8a3c-8d4502765e11'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
--insecure
```

### 回應範例

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

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Id | T | String | 存取政策的識別 ID。 |

## 取得存取政策


此 API 允許您取得政策詳情。

| 請求 URL | `/api/v1/developer/access_policies/:id` |
| :--- | :--- |
| 權限金鑰 | `view:policy` |
| 方法 | `GET` |


### 請求範例: Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl '{host}/api/v1/developer/ccess_policy'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--insecure
```

### 回應範例

```json
{
  "code": "SUCCESS",
  "data": {
    "id": "ed09985f-cf52-486e-bc33-377b6ed7bbf2",
    "name": "test11",
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
    ],
    "schedule_id": "4e108aab-ec9a-4822-bf86-170ea986f934"
  },
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
| Id | T | String | 存取政策的識別 ID。 |

### 回應主體

| 參數 | 必填 | 型別 | 說明 | 範例 |  |
| --- | --- | --- | --- | --- | --- |
| Data | T | Object |  |  |  |

*完整欄位定義請參閱回應結構。*

## 取得所有存取政策


此 API 允許您取得所有存取政策。

| 請求 URL | `/api/v1/developer/access_policies` |
| :--- | :--- |
| 權限金鑰 | `view:policy` |
| 方法 | `GET` |


### 請求範例: Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl '{host}/api/v1/developer/access_policies'
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
    },
    {
      "id": "b96948a4-fed9-40a3-9c4a-e473822a3db7",
      "name": "Default UNVR Policy",
      "resources": [
        {
          "id": "d5573467-d6b3-4e8f-8e48-8a322b91664a",
          "type": "door_group"
        },
        {
          "id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
          "type": "door"
        }
      ],
      "schedule_id": "58c0f89b-f35c-4d2c-af7b-8b8918df2c31"
    },
    {
      "id": "edbc80df-3698-49fd-8b53-f1867f104947",
      "name": "TEST",
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
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

### 回應主體

| 參數 | 必填 | 型別 | 說明 | 範例 |  |
| --- | --- | --- | --- | --- | --- |
| Data | T | Array[Object] |  |  |  |

*完整欄位定義請參閱回應結構。*

## 假日群組結構

假日群組是指一組假日的集合。

| 參數 | 型別 | 說明 |
| --- | --- | --- |
| id | String | 假日群組的識別 ID。 |
| name | String | 假日群組的名稱。 |
| is_default | Boolean | 表示該假日群組是否為系統預設。 |
| description | String | 假日群組的說明。 |
| holidays | Array[Object] | 顯示假日群組中的假日列表。 |
| holidays[].description | String | 假日的說明。 |
| holidays[].id | String | 假日的識別 ID。 |
| holidays[].name | String | 假日的名稱。 |
| holidays[].repeat | Boolean | 表示該假日是否每年重複。 |
| holidays[].start_time | String | 假日的開始時間，以 RFC3339 的 UTC 格式提供。 |
| holidays[].end_time | String | 假日的結束時間，以 RFC3339 的 UTC 格式提供。 |

## 建立假日群組


此 API 允許您建立假日群組。

| 請求 URL | `/api/v1/developer/access_policies/holiday_groups` |
| :--- | :--- |
| 權限金鑰 | `edit:policy` |
| 方法 | `POST` |


### 請求範例: Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl '{host}/api/v1/developer/access_policies/holiday_groups'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
```

```bash
-H 'content-type: application/json' --data-raw
{' "name": "Holiday Group-169286791557142", "holidays": [ "name": "Holiday Name 1", "description": "", "repeat": false, "start_time": "2023-08-25T00:00:00z", "end_time": "2023-08-26T00:00:00z"
}, "name": "Holiday Name 2", "description": "", "repeat": false, "start_time": "2023-08-26T00:00:00z", "end_time": "2023-08-27T00:00:00z"
} ]
}
```

### 回應範例

```json
{
  "code": "SUCCESS",
  "data": {
    "description": "",
    "holidays": [
      {
        "description": "",
        "end_time": "2023-08-26 00:00:00z",
        "id": "8900533d-03be-4f84-832d-54ff59905759",
        "name": "Holiday Name 1",
        "repeat": false,
        "start_time": "2023-08-25 00:00:00z"
      },
      {
        "description": "",
        "end_time": "2023-08-27 00:00:00z",
        "id": "9fff81cc-d476-40c4-80f9-d510451ce2cd",
        "name": "Holiday Name 2",
        "repeat": false,
        "start_time": "2023-08-26 00:00:00z"
      }
    ],
    "id": "7be7a7a0-818f-4f76-98c3-1c38957f4dca",
    "is_default": false,
    "name": "Holiday Group-169286791557142",
    "template_name": ""
  },
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| name | T | String | 假日群組的名稱。 |  |
| description | F | String | 假日群組的說明。 |  |
| holidays | F | Array[Object] | 顯示假日群組中的假日列表。 |  |
| holidays[].description | F | String | 假日的說明。 |  |
| holidays[].name | F | String | 假日的名稱。 |  |
| holidays[].repeat | F | Boolean | 表示該假日是否每年重複。 |  |
| holidays[].is_template | F | Boolean | 表示該假日是否使用假日群組範本建立。 |  |
| holidays[].start_time | F | String | 假日的開始時間，以 RFC3339 的 UTC 格式提供。 | 2023-08-25T00:00:00Z |
| holidays[].end_time | F | String | 假日的結束時間，以 RFC3339 的 UTC 格式提供。 | 2023-08-26T00:00:00Z |

### 回應主體

| 參數 | 必填 | 型別 | 說明 | 相關 API | 用途 |
| --- | --- | --- | --- | --- | --- |
| id | T | String | 假日群組的識別 ID。 | /api/v1/developer/access_policies/schedules | 用於將假日群組加入排程。 |

*完整欄位定義請參閱回應結構。*

## 更新假日群組


此 API 允許您更新假日群組。

| 請求 URL | `/api/v1/developer/access_policies/holiday_groups/:id` |
| :--- | :--- |
| 權限金鑰 | `edit:policy` |
| 方法 | `PUT` |


### 請求範例: Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XPUT '{host}/api/v1/developer/access_policies/holiday_groups/7be7a7a0-818f-4f76-98c3-1c38957f4dca'
-H 'Authorization: Bearer wHFmHR****************kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json' --data-raw
{
    "name": "Holiday Group-169286791557142",
    "holidays": [
        {
        "name": "Holiday Name 1",
        "description": "", "repeat": false,
        "start_time": "2023-08-25T00:00:00z",
        "end_time": "2023-08-26T00:00:00z"
    ],
    # add a new holiday
    {
        "id": "d23a4226-765f-4967-b84f-6dfd53f33c89", # update an existing holiday
        "name": "Holiday Name 2",
        "description": "", "repeat": false,
        "start_time": "2023-08-26T00:00:00z",
        "end_time": "2023-08-27T00:00:00z"
    }
}
```

### 回應範例

```json
{
  "code": "SUCCESS",
  "data": {
    "description": "",
    "holidays": [
      {
        "description": "",
        "end_time": "2023-08-26 00:00:00z",
        "id": "8900533d-03be-4f84-832d-54ff59905759",
        "name": "Holiday Name 1",
        "repeat": false,
        "start_time": "2023-08-25 00:00:00z"
      },
      {
        "description": "",
        "end_time": "2023-08-27 00:00:00z",
        "id": "9fff81cc-d476-40c4-80f9-d510451ce2cd",
        "name": "Holiday Name 2",
        "repeat": false,
        "start_time": "2023-08-26 00:00:00z"
      }
    ],
    "id": "7be7a7a0-818f-4f76-98c3-1c38957f4dca",
    "is_default": false,
    "name": "Holiday Group-169286791557142",
    "template_name": ""
  },
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 範例 |  |
| --- | --- | --- | --- | --- | --- |
| Id | T | String | 假日群組的識別 ID。 |  |  |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| name | T | String | 假日群組的名稱。 |  |
| description | F | String | 假日群組的說明。 |  |
| holidays | F | Array[Object] | 顯示假日群組中的假日列表。若不需要更新，請省略此參數。 |  |
| holidays[].id | F | String | 假日的識別 ID。若不需要更新，請省略此參數。 | 從 API /api/v1/developer/access_policies/holiday_groups 取得 |
| holidays[].description | F | String | 假日的說明。 |  |
| holidays[].name | F | String | 假日的名稱。 |  |
| holidays[].repeat | F | Boolean | 表示該假日是否每年重複。 |  |
| holidays[].start_time | F | String | 假日的開始時間，以 RFC3339 的 UTC 格式提供。 | 2023-08-25T00:00:00Z |
| holidays[].end_time | F | String | 假日的結束時間，以 RFC3339 的 UTC 格式提供。 | 2023-08-26T00:00:00Z |

### 回應主體

| 參數 | 必填 | 型別 | 說明 | 相關 API | 用途 |
| --- | --- | --- | --- | --- | --- |
| id | T | String | 假日群組的識別 ID。 | / api/v1/developer/access_policies/schedules | 用於將假日群組加入排程。 |

*完整欄位定義請參閱回應結構。*

## 刪除假日群組


此 API 允許您刪除假日群組。

| 請求 URL | `/api/v1/developer/access_policies/holiday_groups/:id` |
| :--- | :--- |
| 權限金鑰 | `edit:policy` |
| 方法 | `DELETE` |


### 請求範例: Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XDELETE '{host}/api/v1/developer/access_policies/holiday_groups/7be7a7a0-818f-4f76-98c3-1c38957f4dca'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--insecure
```

### 回應範例

```json
{
  "code": "SUCCESS",
  "data": "success",
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 相關 API |
| --- | --- | --- | --- | --- |
| id | T | String | 假日群組的識別 ID。 | /api/v1/developer/access_policies/holiday_groups |

## 取得假日群組


此 API 允許您取得假日群組。

| 請求 URL | `/api/v1/developer/access_policies/holiday_groups/:id` |
| :--- | :--- |
| 權限金鑰 | `view:policy` |
| 方法 | `GET` |


### 請求範例: Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XGET '{host}/api/v1/developer/access_policies/holiday_groups/7be7a7a0-818f-4f76-98c3-1c38957f4dca'
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
    "description": "",
    "holidays": [
      {
        "description": "",
        "end_time": "2023-08-26 00:00:00z",
        "id": "8900533d-03be-4f84-832d-54ff59905759",
        "name": "Holiday Name 1",
        "repeat": false,
        "start_time": "2023-08-25 00:00:00z"
      },
      {
        "description": "",
        "end_time": "2023-08-27 00:00:00z",
        "id": "9fff81cc-d476-40c4-80f9-d510451ce2cd",
        "name": "Holiday Name 2",
        "repeat": false,
        "start_time": "2023-08-26 00:00:00z"
      }
    ],
    "id": "7be7a7a0-818f-4f76-98c3-1c38957f4dca",
    "is_default": false,
    "name": "Holiday Group-169286791557142",
    "template_name": ""
  },
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
| Id | T | String | 假日群組的識別 ID。 |

### 回應主體

| 參數 | 必填 | 型別 | 說明 | 相關 API | 用途 |
| --- | --- | --- | --- | --- | --- |
| id | T | String | 假日群組的識別 ID。 | / api/v1/developer/access_policies/schedules | 用於將假日群組加入排程。 |

*完整欄位定義請參閱回應結構。*

## 取得所有假日群組


此 API 允許您取得所有假日群組的列表。

| 請求 URL | `/api/v1/developer/access_policies/holiday_groups` |
| :--- | :--- |
| 權限金鑰 | `view:policy` |


### 請求範例: Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XGET '{host}/api/v1/developer/access_policies/holiday_groups'
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
      "count": 0,
      "description": "",
      "id": "8cc22b49-a7f4-49a6-9f04-044444992d6c",
      "is_default": true,
      "name": "No Holidays"
    },
    {
      "count": 2,
      "description": "",
      "id": "86c634da-7b2c-411c-a2c1-1495d089c719",
      "is_default": false,
      "name": "Holiday Group-1692867312225"
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
| Id | T | String | 假日群組的識別 ID。 |

### 回應主體

| 參數 | 必填 | 型別 | 說明 | 相關 API | 用途 |
| --- | --- | --- | --- | --- | --- |
| id | T | String | 假日群組的識別 ID。 | /api/v1/developer/access_policies/schedules | 用於將假日群組加入排程。 |
| name | T | String | 假日群組的名稱。 |  |  |
| description | T | String | 假日群組的說明。 |  |  |
| count | T | Integer | 假日總數。 |  |  |

## 排程結構

這些結構用於建立從星期日到星期六的每日存取時段。這些結構的主要目的是便於將存取政策指派給使用者。

| 參數 | 型別 | 說明 |
| --- | --- | --- |
| id | String | 排程的識別 ID。 |
| name | String | 排程的名稱。 |
| is_default | Boolean | 表示該排程是否為系統預設。 |
| type | String | 包含 access 類型，與存取政策一起指派給使用者。 |
| weekly | Object | 可自訂的從星期日到星期六的每日排程策略。若未指定，表示每天都允許存取。 |
| weekly monday | Array[Object] | 指定從星期日到星期六的每日存取時段。 |
| weekly monday[].start_time | String | 存取時段的開始時間。 |
| weekly monday[].end_time | String | 存取時段的結束時間。 |
| holiday_schedule | Array[Object] | 指定假日期間的可存取時段。UniFi Access 需求: 1.20.11 或更新 |
| holiday_schedule[0].start_time | String | 存取時段的開始時間。 |
| holiday_schedule[0].end_time | String | 存取時段的結束時間。 |
| holiday_group_id | String | 假日群組的識別 ID。 |
| holiday_group.id | String | 假日群組的識別 ID。 |
| holiday_group.name | String | 假日群組的名稱。 |
| holiday_group.is_default | Boolean | 表示該假日群組是否為系統預設。 |
| holiday_group.description | String | 假日群組的說明。 |
| holiday_group.holidays | Array[Object] | 顯示假日群組中的假日列表。 |
| holiday_group.holidays[].description | String | 假日的說明。 |
| holiday_group.holidays[].id | String | 假日的識別 ID。 |
| holiday_group.holidays[].name | String | 假日的名稱。 |
| holiday_group.holidays[].repeat | Boolean | 表示該假日是否每年重複。 |
| holiday_group.holidays[].start_time | String | 假日的開始時間，以 RFC3339 的 UTC 格式提供。 |
| holiday_group.holidays[].end_time | String | 假日的結束時間，以 RFC3339 的 UTC 格式提供。 |

## 建立排程


此 API 允許您建立門禁存取排程。

| 請求 URL | `/api/v1/developer/access_policies/schedules` |
| :--- | :--- |
| 權限金鑰 | `edit:policy` |
| 方法 | `POST` |


### 請求範例: Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl '{host}/api/v1/developer/access_policies/schedules' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data-raw '{
    "name": "schedule-1688977094169",
    "week_schedule": {
        "sunday": [],
        "monday": [
            { "start_time": "10:00:00", "end_time": "17:00:59" }
        ],
        "tuesday": [
            { "start_time": "10:00:00", "end_time": "17:00:59" }
        ],
        "wednesday": [
            { "start_time": "10:00:00", "end_time": "17:00:59" }
        ],
        "thursday": [],
        "friday": [
            { "start_time": "10:00:00", "end_time": "17:00:59" }
        ],
        "saturday": []
    },
    "holiday_group_id": "75660081-431b-4dbe-9b98-e0257877118e",
    "holiday_schedule": [
        { "start_time": "03:15:00", "end_time": "11:45:59" },
        { "start_time": "15:00:00", "end_time": "19:00:59" }
    ]
}' \
--insecure
```

### 回應範例
```json
{
  "code": "SUCCESS",
  "data": {
    "id": "1d31b648-b8ff-4bd1-b742-60dbd70592cd",
    "is_default": false,
    "name": "schedule-1688977094169",
    "type": "access",
    "weekly": {
      "friday": [
        {
          "start_time": "10:00:00",
          "end_time": "17:00:59"
        }
      ],
      "monday": [
        {
          "start_time": "10:00:00",
          "end_time": "17:00:59"
        }
      ],
      "saturday": [],
      "sunday": [],
      "thursday": [],
      "tuesday": [
        {
          "start_time": "10:00:00",
          "end_time": "17:00:59"
        }
      ],
      "wednesday": [
        {
          "start_time": "10:00:00",
          "end_time": "17:00:59"
        }
      ]
    },
    "holiday_group_id": "75660081-431b-4dbe-9b98-e0257877118e",
    "holiday_group": {
      "description": "",
      "holidays": [
        {
          "description": "",
          "end_time": "2023-08-26 00:00:00z",
          "id": "d51777c4-9559-45aa-8e23-434995d9d2a1",
          "is_template": false,
          "name": "Holiday Name 1",
          "repeat": false,
          "start_time": "2023-08-25 00:00:00z"
        },
        {
          "description": "",
          "end_time": "2023-08-27 00:00:00z",
          "id": "d23a4226-765f-4967-b84f-6dfd53f33c89",
          "is_template": false,
          "name": "Holiday Name 2",
          "repeat": false,
          "start_time": "2023-08-26 00:00:00z"
        }
      ],
      "id": "75660081-431b-4dbe-9b98-e0257877118e",
      "is_default": false,
      "name": "Holiday Group-1692867915571423",
      "template_name": ""
    },
    "holiday_schedule": [
      {
        "start_time": "03:15:00",
        "end_time": "11:45:59"
      },
      {
        "start_time": "15:00:00",
        "end_time": "19:00:59"
      }
    ]
  },
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| name | T | String | 排程的名稱。此名稱需為全域唯一。 | schedule-1789067565323 |
| week_schedule | T | Object | 可自訂的從星期日到星期六的每日排程策略。若未指定，表示每天都允許存取。 |  |
| week_schedule monday | T | Array[Object] | 指定從星期日到星期六的每日存取時段。 |  |
| week_schedule monday[0].start_time | T | String | 存取時段的開始時間。 | 00:00:00 |
| week_schedule monday[0].end_time | T | String | 存取時段的結束時間。 | 23:59:59 |
| holiday_group_id | F | String | 假日群組的識別 ID。預設為「無假日」系統群組。 | 75660081-431b-4dbe-9b98-e0257877118e |
| holiday_schedule | F | Array[Object] | 指定假日期間的可存取時段。 |  |
| holiday_schedule[].start_time | F | String | 存取時段的開始時間。 | 03:15:00 |
| holiday_schedule[].end_time | F | String | 存取時段的結束時間。 | 11:45:59 |

### 回應主體

| 參數 | 必填 | 型別 | 說明 | 相關 API | 用途 |
| --- | --- | --- | --- | --- | --- |
| id | T | String | 排程的識別 ID。 | /api/v1/developer/access_policies | 用於將排程加入存取政策。 |

*完整欄位定義請參閱回應結構。*

## 更新排程


此 API 允許您更新門禁存取排程。

| 請求 URL | `/api/v1/developer/access_policies/schedules/:id` |
| :--- | :--- |
| 權限金鑰 | `edit:policy` |
| 方法 | `PUT` |


### 請求範例: Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XPUT '{host}/api/v1/developer/access_policies/schedules/1d31b648-b8ff-4bd1-b742-60dbd70592cd'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json' --data-raw
{'
    "name": "schedule-1688977094169",
    "holiday_group_id": "75660081-431b-4dbe-9b98-e0257877118e",
    "week_schedule": {
        "sunday": [],
        "monday": [
            {
            "start_time": "10:00:00",
            },
            "end_time": "17:00:59"
        ]
    ],
    "tuesday": [
            { "start_time": "10:00:00", "end_time": "17:00:59" }
        ],
        "wednesday": [
            { "start_time": "10:00:00", "end_time": "17:00:59" }
        ],
        "thursday": [
            { "start_time": "10:00:00", "end_time": "17:00:59" }
        ],
        "friday": [
            { "start_time": "10:00:00", "end_time": "17:00:59" }
        ],
        "saturday": []
    },
    "holiday_schedule": [
        { "start_time": "03:15:00", "end_time": "11:45:59" }
    ]
}' \
--insecure
```

### 回應範例

```json
{
  "code": "SUCCESS",
  "data": {},
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 範例 |  |
| --- | --- | --- | --- | --- | --- |
| Id | T | String | 排程的識別 ID。 |  |  |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| name | F | String | 排程的名稱。此名稱需為全域唯一。若不需要更新，請省略此參數。 | schedule-1789067565323 |
| week_schedule | F | Object | 可自訂的從星期日到星期六的每日排程策略。若未指定，表示每天都允許存取。若不需要更新，請省略此參數。 |  |
| week_schedule.monday | F | Array[Object] | 指定從星期日到星期六的每日存取時段。 |  |
| week_schedule.monday[0].start_time | F | String | 存取時段的開始時間。 | 00:00:00 |
| week_schedule.monday[0].end_time | F | String | 存取時段的結束時間。 | 23:59:59 |
| holiday_group_id | F | String | 假日群組的識別 ID。預設為「無假日」系統群組。 | 75660081-431b-4dbe-9b98-e0257877118e |
| holiday_schedule | F | Array[Object] | 指定假日期間的可存取時段。 |  |
| holiday_schedule[].start_time | F | String | 存取時段的開始時間。 | 03:15:00 |
| holiday_schedule[].end_time | F | String | 存取時段的結束時間。 | 11:45:59 |

### 回應主體

| 參數 | 必填 | 型別 | 說明 | 相關 API | 用途 |
| --- | --- | --- | --- | --- | --- |
| id | T | String | 排程的識別 ID。 | /api/v1/developer/access_policies | 用於將排程加入存取政策。 |

*完整欄位定義請參閱回應結構。*

## 取得排程


此 API 允許您取得門禁存取排程。

| 請求 URL | `/api/v1/developer/access_policies/schedules/:id` |
| :--- | :--- |
| 權限金鑰 | `view:policy` |
| 方法 | `GET` |


### 請求範例: Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl --location '{host}/api/v1/developer/access_policies/schedules/908079e7-e26b-4951-9073-d775446d3584' --header 'Authorization: Bearer wHFmHR*****kD6wHg'
```

### 回應範例

```json
{
  "code": "SUCCESS",
  "data": {
    "id": "1d31b648-b8ff-4bd1-b742-60dbd70592cd",
    "is_default": false,
    "name": "schedule-1688977094169",
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
          "end_time": "17:01:59",
          "start_time": "10:00:00"
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
    },
    "holiday_group_id": "75660081-431b-4dbe-9b98-e0257877118e",
    "holiday_group": {
      "description": "",
      "holidays": [
        {
          "description": "",
          "end_time": "2023-08-26 00:00:00z",
          "id": "d51777c4-9559-45aa-8e23-434995d9d2a1",
          "is_template": false,
          "name": "Holiday Name 1",
          "repeat": false,
          "start_time": "2023-08-25 00:00:00z"
        },
        {
          "description": "",
          "end_time": "2023-08-27 00:00:00z",
          "id": "d23a4226-765f-4967-b84f-6dfd53f33c89",
          "is_template": false,
          "name": "Holiday Name 2",
          "repeat": false,
          "start_time": "2023-08-26 00:00:00z"
        }
      ],
      "id": "75660081-431b-4dbe-9b98-e0257877118e",
      "is_default": false,
      "name": "Holiday Group-16928679155714",
      "template_name": ""
    },
    "holiday_schedule": [
      {
        "end_time": "11:45:59",
        "start_time": "09:15:00"
      }
    ]
  },
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| Id | T | String | 排程的識別 ID。 |  |

### 回應主體

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| name | T | String | 排程的名稱。 |  |
| week_schedule | T | Object | 可自訂的從星期日到星期六的每日排程策略。若未指定，表示每天都允許存取。 |  |
| holiday_group | F | Object | 顯示已指派的假日群組。 |  |
| holiday_schedule | F | Array[Object] | 顯示假日期間的可存取時段。 |  |

*完整欄位定義請參閱回應結構。*

## 取得所有排程


此 API 允許您取得所有門禁存取排程。

| 請求 URL | `/api/v1/developer/access_policies/schedules` |
| :--- | :--- |
| 權限金鑰 | `view:policy` |
| 方法 | `GET` |


### 請求範例: Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl --location '{host}'/api/v1/developer/access_policies/schedules'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
--insecure
```

### 回應範例

```json
{
  "code": "SUCCESS",
  "data": [
    {
      "id": "73facd6c-839e-4521-a4f4-c07e1d44e748",
      "holiday_group_id": "75660081-431b-4dbe-9b98-e0257877118e",
      "is_default": true,
      "name": "Always Access",
      "status": 1,
      "type": "access"
    },
    {
      "id": "58c0f89b-f35c-4d2c-af7b-8b8918df2c31",
      "holiday_group_id": "75660081-431b-4dbe-9b98-e0257877118e",
      "is_default": false,
      "name": "UNVR Schedule",
      "status": 1,
      "type": "access"
    }
  ],
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

### 回應主體

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| Data | T | Array[Object] |  |  |

*完整欄位定義請參閱回應結構。*

## 刪除排程


此 API 允許您刪除門禁存取排程。

| 請求 URL | `/api/v1/developer/access_policies/schedules/:id` |
| :--- | :--- |
| 權限金鑰 | `edit:policy` |
| 方法 | `DELETE` |


### 請求範例: Shell/cURL

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XDELETE '{host}/api/v1/developer/access_policies/schedules/f5355214-3a45-4e0b-9245-12df7075df37'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--insecure
```

### 回應範例

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

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 範例 |  |
| --- | --- | --- | --- | --- | --- |
| Id | T | String | 排程的識別 ID。 |  |  |
