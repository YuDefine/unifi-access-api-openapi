# 空間

此處的 API 用於管理空間，包括門、門群組和樓層。


## 取得門群組拓撲


取得目前所有樓層和門資源，用於存取政策和訪客指派。

| 請求 URL | `/api/v1/developer/door_groups/topology` |
| :--- | :--- |
| 權限金鑰 | `view:space` |
| 方法 | `GET` |


### 請求範例

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -X GET '{host}/api/v1/developer/door_groups/topology'
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
      "id": "d5573467-d6b3-4e8f-8e48-8a322b91664a",
      "name": "All Doors",
      "resource_topologies": [
        {
          "id": "9bee6e0e-108d-4c52-9107-76f2c7dea4f1",
          "name": "Main Floor",
          "resources": [
            {
              "id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
              "name": "Door 3855",
              "type": "door",
              "is_bind_hub": true
            }
          ],
          "type": "floor"
        }
      ],
      "type": "building"
    },
    {
      "id": "5c496423-6d25-4e4f-8cdf-95ad5135188a",
      "name": "customized group",
      "resource_topologies": [
        {
          "id": "9bee6e0e-108d-4c52-9107-76f2c7dea4f1",
          "name": "Main Floor",
          "resources": [
            {
              "id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
              "name": "Door 3855",
              "type": "door",
              "is_bind_hub": true
            }
          ],
          "type": "floor"
        }
      ]
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

| 參數 | 必填 | 型別 | 說明 | 用途 | 相關 API |
| --- | --- | --- | --- | --- | --- |
| id | F | String | 門群組的識別 ID。 | 建立存取政策時使用。 |  |
| type | T | String | enum group_type {building,access} building 類型包含所有門；access 類型代表所有自訂門群組。 |  | access: /api/v1/developer/door_groups |
| resource_topologies | T | Array[Object] | 包含樓層及其所有關聯門的資訊。 | 綁定政策或為訪客指定可存取的位置。 | /api/v1/developer/access_policies /api/v1/developer/visitors |
| resource_topologies[].id | T | String | 樓層的識別 ID。 |  |  |
| resource_topologies[].type | T | String | 樓層的類型。 |  |  |
| resource_topologies[].name | T | String | 樓層名稱。 |  |  |
| resource_topologies[].resources | T | Array[Object] | 包含該樓層上的所有門。 |  |  |
| resource_topologies[].is_bind_hub | F | Boolean | 表示該門是否已綁定到 Hub 裝置。僅綁定後才能用於遠端開門。 |  |  |
| resource_topologies[].resources.id | T | String | 門的識別 ID。 |  |  |
| resource_topologies[].resources.name | T | String | 門的名稱。 |  |  |
| resource_topologies[].resources.type | T | String | 門的類型。 |  |  |

## 建立門群組


此 API 允許您建立門群組。

| 請求 URL | `/api/v1/developer/door_groups` |
| :--- | :--- |
| 權限金鑰 | `edit:space` |
| 方法 | `POST` |


### 請求範例

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl '{host}/api/v1/developer/door_groups'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--data-raw '{ "group_name": "Test", "resources": [ "6ff875d2-af87-470b-9cb5-774c6596afc8" ]
} ' --insecure
```

### 回應範例

```json
{
  "code": "SUCCESS",
  "data": {
    "id": "0140fa3d-8973-4305-a0ce-5306ae277878",
    "name": "Customized Door Group",
    "resources": [
      {
        "id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
        "type": "door"
      }
    ],
    "type": "access"
  },
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 範例 | 如何取得？ |
| --- | --- | --- | --- | --- | --- |
| group_name | T | String | 門群組名稱。此名稱必須為全域唯一。 |  |  |
| resources | T | Array:String | 門 ID 的集合。 |  | /api/v1/developer/door_groups/topology |

### 回應主體

| 參數 | 必填 | 型別 | 說明 | 用途 | 相關 API |
| --- | --- | --- | --- | --- | --- |
| id | T | String | 門群組的識別 ID。 | 用於將存取群組指派給訪客和存取政策。 | /api/v1/developer/visitors; /api/v1/developer/access_policies; |
| name | T | String | 門群組名稱。 |  |  |
| resources | T | String | 群組下包含的所有門。 |  |  |
| resources[].id | T | String | 門的識別 ID。 |  |  |
| resources[].type | T | String | 門的類型。 |  |  |

## 取得門群組


此 API 允許您取得門群組詳細資訊。

| 請求 URL | `/api/v1/developer/door_groups/:id` |
| :--- | :--- |
| 權限金鑰 | `view:space` |
| 方法 | `GET` |


### 請求範例

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl '{host}/api/v1/developer/door_groups/d5573467-d6b3-4e8f-8e48-8a322b91664a'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--insecure
```

### 回應範例

群組類型為 building：

```json
{
  "code": "SUCCESS",
  "data": {
    "id": "d5573467-d6b3-4e8f-8e48-8a322b91664a",
    "name": "All Doors",
    "resources": [
      {
        "id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
        "name": "Door 3855",
        "type": "door"
      },
      {
        "id": "7cc1823f-9cdb-447b-b01b-4cb2abc661c0",
        "name": "A2 Door",
        "type": "door"
      },
      {
        "id": "ececa68e-239f-4b82-adc4-0c9ce70c60ff",
        "name": "A3",
        "type": "door"
      }
    ],
    "type": "building"
  },
  "msg": "success"
}
```

自訂群組：

```json
{
  "code": "SUCCESS",
  "data": {
    "id": "1be0c995-0347-4cb2-93b3-66a9624af568",
    "name": "Door Group 01",
    "resources": [
      {
        "id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
        "type": "door",
        "name": "Door 385"
      }
    ],
    "type": "access"
  },
  "msg": "success"
}
```

## 查詢門群組

此 API 允許您查詢門群組詳細資訊。

| 請求 URL | `/api/v1/developer/door_groups/:id` |
| :--- | :--- |
| 權限金鑰 | `view:space` |
| 方法 | `GET` |

### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Id | T | String | 門群組的識別 ID。 |

### 回應主體

| 參數 | 必填 | 型別 | 說明 | 用途 | 相關 API |
| --- | --- | --- | --- | --- | --- |
| id | T | String | 門群組的識別 ID。 | 用於將存取群組指派給訪客和存取政策。 | /api/v1/developer/visitors; /api/v1/developer/access_policies; |
| name | T | String | 門群組名稱。 |  |  |
| type | t | String | 包含門存取和建築資源。enum type {access, building} building 類型代表所有門，是從拓撲 API 取得的特殊群組。access 類型代表所有自訂門群組。 |  |  |
| resources | T | String | 群組下包含的所有門。 |  |  |
| resources[].id | T | String | 門的識別 ID。 |  |  |
| resources[].type | T | String | access 類型代表所有自訂門群組類型。 |  |  |
| resources[].name | T | String | 門的名稱。 |  |  |

## 更新門群組


此 API 允許您更新門群組詳細資訊。

| 請求 URL | `/api/v1/developer/door_groups/:id` |
| :--- | :--- |
| 權限金鑰 | `edit:space` |
| 方法 | `PUT` |


### 請求範例

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XPUT '{host}/api/v1/developer/door_groups/0140fa3d-8973-4305-a0ce-5306ae277878' -H 'Authorization: Bearer wHFmHR*****kD6wHg' -H 'accept: application/json' -H 'content-type: application/json' --data-raw {' "resources": [ "6ff875d2-af87-470b-9cb5-774c6596afc8", "5a2c3d4e-1f6b-4c8d-9e0f-2a3b4c5d6e7f", "2p3q4r5s-6t7u-8v9w-x0y1-z2a3b4c5d6e" ] } ' --insecure

### 回應範例

```json
{
  "code": "SUCCESS",
  "data": {
    "id": "0140fa3d-8973-4305-a0ce-5306ae277878",
    "name": "test",
    "resources": [
      {
        "id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
        "type": "door"
      }
    ],
    "type": "access"
  },
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| id | T | String | 門群組的識別 ID。 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 範例 | 如何取得？ |
| --- | --- | --- | --- | --- | --- |
| group_name | F | String | 門群組名稱。若不需要更新則省略此參數。 |  |  |
| resources | F | Array:String | 門識別 ID 的集合。若不需要更新則省略此參數。 |  | /api/v1/developer/door_groups/topology |

### 回應主體

| 參數 | 必填 | 型別 | 說明 | 用途 | 相關 API |
| --- | --- | --- | --- | --- | --- |
| id | T | String | 門群組的識別 ID。 | 用於將存取群組指派給訪客和存取政策。 | /api/v1/developer/visitors; /api/v1/developer/access_policies; |
| name | T | String | 門群組名稱。 |  |  |
| resources | T | String | 群組下包含的所有門。 |  |  |
| resources[].id | T | String | 門的識別 ID。 |  |  |
| resources[].type | T | String | 門的類型。 |  |  |

### Delete all door resources
curl -XPUT '{host}/api/v1/developer/door_groups/0140fa3d-8973-4305-a0ce-5306ae277878' -H 'Authorization: Bearer wHFmHR*****kD6wHg' -H 'accept: application/json' -H 'content-type: application/json' --data-raw {' "resources": [] } ' --insecure
```

## 取得所有門群組


此 API 允許您取得所有門群組的列表。

| 請求 URL | `/api/v1/developer/door_groups` |
| :--- | :--- |
| 權限金鑰 | `view:space` |
| 方法 | `GET` |


### 回應範例

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl '{host}/api/v1/developer/door_groups'
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
      "id": "5c496423-6d25-4e4f-8cdf-95ad5135188a",
      "name": "Test",
      "resources": [
        {
          "id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
          "type": "door"
        }
      ],
      "type": "access"
    },
    {
      "id": "1907cc46-0a73-4077-94c1-95b625bdd0f8",
      "name": "Test2",
      "resources": [
        {
          "id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
          "type": "door"
        }
      ],
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

| 參數 | 必填 | 型別 | 說明 | 用途 | 相關 API |
| --- | --- | --- | --- | --- | --- |
| id | T | String | 門群組的識別 ID。 | 用於建立門群組及在裝置已綁定時遠端開門。 | /api/v1/developer/door_groups; /api/v1/developer/doors/:id/remote_unlock; |
| name | T | String | 門群組名稱。 |  |  |
| type | t | String | 包含門存取和建築資源。enum type {access, building} building 類型代表所有門，是從拓撲 API 取得的特殊群組。但列表不包含 building 群組類型。access 類型代表所有自訂門群組。 |  |  |
| resources | T | String | 群組下包含的所有門。 |  |  |
| resources[].id | T | String | 門的識別 ID。 |  |  |
| resources[].type | T | String | 門的類型。 |  |  |

## 刪除門群組


此 API 允許您刪除門群組。

| 請求 URL | `/api/v1/developer/door_groups/:id` |
| :--- | :--- |
| 權限金鑰 | `edit:space` |
| 方法 | `DELETE` |


### 請求範例

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XDELETE '{host}/api/v1/developer/door_groups/0140fa3d-8973-4305-a0ce-5306ae277878'
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

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| id | T | String | 門群組的識別 ID。 |

## 取得門


此 API 允許您取得門的詳細資訊。

| 請求 URL | `/api/v1/developer/doors/:id` |
| :--- | :--- |
| 權限金鑰 | `view:space` |
| 方法 | `GET` |


### 請求範例

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XGET '{host}/api/v1/developer/doors/0ed545f8-2fcd-4839-9021-b39e707f6aa9'
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
    "door_lock_relay_status": "lock",
    "door_position_status": "",
    "floor_id": "3275af8d-3fa7-4902-a11b-011e41c8464a",
    "full_name": "UNVR - 1F - Main Door",
    "id": "0ed545f8-2fcd-4839-9021-b39e707f6aa9",
    "is_bind_hub": true,
    "name": "Main Door",
    "type": "door"
  },
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| id | T | String | 門的識別 ID。 |

### 回應主體

| 參數 | 必填 | 型別 | 說明 | 用途 | 相關 API |
| --- | --- | --- | --- | --- | --- |
| id | T | String | 門群組的識別 ID。 | 1. 用於建立門群組。2. 在門已綁定 Hub 裝置時，用於遠端開鎖。 | /api/v1/developer/door_groups; /api/v1/developer/doors/:id/remote_unlock; |
| name | T | String | 門的名稱。 |  |  |
| full_name | T | String | 門的完整名稱。 |  |  |
| floor_id | T | String | 樓層的識別 ID。 |  |  |
| type | T | String | 門的類型。 |  |  |
| is_bind_hub | T | String | 表示該門是否已綁定到 Hub 裝置。僅綁定後才能用於遠端開門。 |  |  |
| door_lock_relay_status | T | String | 門鎖狀態。enum door_lock_relay_status {lock, unlock} |  |  |
| door_position_status | T | String | DPS：門位置狀態，包含開啟和關閉。null 值表示沒有連接裝置。 |  |  |

## 取得所有門


此 API 允許您取得所有門的列表。

| 請求 URL | `/api/v1/developer/doors` |
| :--- | :--- |
| 權限金鑰 | `view:space` |
| 方法 | `GET` |


### 請求範例

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XGET '{host}/api/v1/developer/doors'
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
      "door_lock_relay_status": "unlock",
      "door_position_status": "open",
      "floor_id": "23c5db06-b59b-494d-94f1-23e88fbe4909",
      "full_name": "UNVR - 2F - A2 Door",
      "id": "0ed545f8-2fcd-4839-9021-b39e707f6aa9",
      "is_bind_hub": true,
      "name": "A2 Door",
      "type": "door"
    },
    {
      "door_lock_relay_status": "lock",
      "door_position_status": "close",
      "floor_id": "7c62b4b3-692f-44ea-8eb8-e212833b4e0f",
      "full_name": "UNVR - 1F - Door 3855",
      "id": "5785e97b-6123-4596-ba49-b6e51164db9b",
      "is_bind_hub": true,
      "name": "Door 3855",
      "type": "door"
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

| 參數 | 必填 | 型別 | 說明 | 用途 | 相關 API |
| --- | --- | --- | --- | --- | --- |
| id | T | String | 門群組的識別 ID。 | 1. 用於建立門群組。2. 在門已綁定 Hub 裝置時，用於遠端開鎖。 | /api/v1/developer/door_groups; /api/v1/developer/doors/:id/remote_unlock; |
| name | T | String | 門的名稱。 |  |  |
| full_name | T | String | 門的完整名稱。 |  |  |
| floor_id | T | String | 樓層的識別 ID。 |  |  |
| type | T | String | 門的類型。 |  |  |
| is_bind_hub | T | String | 表示該門是否已綁定到 Hub 裝置。僅綁定後才能用於遠端開門。 |  |  |
| door_lock_relay_status | T | String | 門鎖狀態。enum door_lock_relay_status {lock, unlock} |  |  |
| door_position_status | T | String | DPS：門位置狀態，包含開啟和關閉。null 值表示沒有連接裝置。 |  |  |

## 遠端開門


此 API 允許您遠端解鎖門。

| 請求 URL | `/api/v1/developer/doors/:id/unlock` |
| :--- | :--- |
| 權限金鑰 | `edit:space` |
| 方法 | `PUT` |


### 請求範例

```bash
curl --location --request PUT \
'https://192.168.1.1:12445/api/v1/developer/doors/CF4b9ee6-05cb-4799-a462-ec307fff2067/unlock' \
--header 'Authorization: Bearer 5aIi+E7DidM2Xzbi6ewtAQ' \
--header 'Content-Type: application/json' \
--data '{
    "actor_id": "actoruuid",
    "actor_name": "actor name",
    "extra": {
        "extra_string": "test",
        "extra_integer": 1,
        "extraBoolean": true
    }
}'
```

### 回應範例

```json
{
  "code": "SUCCESS",
  "data": "success",
  "msg": "success"
}
```


### 說明：

此 API 允許開發者遠端觸發門的解鎖。您可以選擇性地指定 actor_id 和 actor_name 來自訂系統日誌和 Webhook 通知中顯示的操作者身分。

若省略這些欄位，系統將預設使用 API Token 的名稱作為操作者。extra 欄位為完全透傳。傳送的任何資料都會原樣包含在 Webhook 負載中。

### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| id | T | String | 門的識別 ID。 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| actor_id | F | String | 在系統日誌和 Webhook 中顯示的自訂操作者 ID。若提供 actor_name 則此欄位為必填。 |
| actor_name | F | String | 自訂操作者名稱。若提供 actor_id 則此欄位為必填。 |
| extra | F | Object (Map) | 自訂透傳資料。會原樣包含在 Webhook 通知中。 |

注意：

若同時省略 actor_id 和 actor_name，系統將使用 API Token 名稱作為預設操作者。

若提供了 actor_id 或 actor_name 其中之一，則兩者都必須提供。

## 設定臨時門鎖規則


此 API 允許您臨時設定門的鎖定規則。

| 請求 URL | `/api/v1/developer/doors/:id/lock_rule` |
| :--- | :--- |
| 權限金鑰 | `edit:space` |
| 方法 | `PUT` |
| UniFi Access 需求 | 1.24.6 或更新版本 |


### 請求範例

請求主體應為包含以下欄位的 JSON 物件：

**自訂 10 分鐘解鎖**

```bash
curl -XPUT '{host}/api/v1/developer/doors/e4978b83-203d-4015-97df-b86efc91cb0c/lock_rule' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data '{
    "type": "custom",
    "interval": 10
}' \
--insecure
```

**保持解鎖**

```bash
curl -XPUT '{host}/api/v1/developer/doors/e4978b83-203d-4015-97df-b86efc91cb0c/lock_rule' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data '{
    "type": "keep_unlock"
}' \
--insecure
```

**保持鎖定**

```bash
curl -XPUT '{host}/api/v1/developer/doors/e4978b83-203d-4015-97df-b86efc91cb0c/lock_rule' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data '{
    "type": "keep_lock"
}' \
--insecure
```

> 使用 `reset` 將臨時解鎖排程（例如「解鎖 1 小時」）恢復為原始鎖定狀態。此參數僅用於重設臨時解鎖排程。若您希望在排程解鎖時間結束前鎖定門，請改用下方的 `lock_early`。

**重設臨時解鎖**

```bash
curl -XPUT '{host}/api/v1/developer/doors/e4978b83-203d-4015-97df-b86efc91cb0c/lock_rule' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data '{
    "type": "reset"
}' \
--insecure
```

> 若門目前處於解鎖排程中，您可以使用 `lock_early` 在排程時間結束前鎖定門。例如，若解鎖排程設為上午 9:00 到下午 6:00，您可以在下午 3:00 使用此參數結束排程並提前鎖門。

**提前鎖定**

```bash
curl -XPUT '{host}/api/v1/developer/doors/e4978b83-203d-4015-97df-b86efc91cb0c/lock_rule' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data '{
    "type": "lock_early"
}' \
--insecure
```

> `lock_now` 用於同時終止解鎖排程和任何臨時解鎖。

**立即鎖定**

```bash
curl -XPUT '{host}/api/v1/developer/doors/e4978b83-203d-4015-97df-b86efc91cb0c/lock_rule' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data '{
    "type": "lock_now"
}'
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

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| id | T | String | 門的識別 ID。 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| type | T | String | enum type {keep_lock, keep_unlock, custom, reset, lock_early, lock_now} keep_lock 用於將門設為「保持鎖定」狀態，keep_unlock 用於設為「保持解鎖」狀態。custom 允許自訂解鎖時間長度，reset 用於將門恢復為初始狀態（不適用於「lock_early」狀態）。NOTE: 若門目前處於解鎖排程（schedule）中，您可以使用 lock_early 提前鎖定門。 |  |
| interval | F | Integer | 當 type 為 custom 時，設定鎖定時間長度（分鐘）。 | 10 |

## 取得門鎖規則


此 API 允許您取得門的鎖定規則。

| 請求 URL | `/api/v1/developer/doors/:id/lock_rule` |
| :--- | :--- |
| 權限金鑰 | `view:space` |
| 方法 | `GET` |
| UniFi Access 需求 | 1.24.6 或更新版本 |


### 請求範例

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XGET '{host}/api/v1/developer/doors/e4978b83-203d-4015-97df-b86efc91cb0c/lock_rule' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--insecure
```

### 回應範例

**保持鎖定：**

```json
{
  "code": "SUCCESS",
  "data": {
    "ended_time": 3602128309,
    "type": "keep_lock"
  },
  "msg": "success"
}
```

**保持解鎖：**

```json
{
  "code": "SUCCESS",
  "data": {
    "ended_time": 3602128562,
    "type": "keep_unlock"
  },
  "msg": "success"
}
```

**自訂解鎖時長：**

```json
{
  "code": "SUCCESS",
  "data": {
    "ended_time": 1708673342,
    "type": "custom"
  },
  "msg": "success"
}
```

**提前鎖定**（用於提前終止處於解鎖排程中的門）：

```json
{
  "code": "SUCCESS",
  "data": {
    "type": "lock_early",
    "ended_time": 1708673342
  },
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| id | T | String | 門的識別 ID。 |

### 回應主體

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| type | T | String | enum type {schedule,keep_lock,keep_unlock,custom_lock_early} keep_lock 用於設定「保持鎖定」狀態，keep_unlock 用於設定「保持解鎖」狀態。custom 用於自訂解鎖時間長度。schedule 表示門目前處於解鎖排程狀態。lock_early 用於提前終止處於解鎖排程中的門。 |  |
| ended_time | T | Integer | 設定規則的結束時間。 | 1708672257 |

## 設定門緊急狀態


此 API 允許您設定所有門的緊急狀態。

| 請求 URL | `/api/v1/developer/doors/settings/emergency` |
| :--- | :--- |
| 權限金鑰 | `edit:space` |
| 方法 | `PUT` |
| UniFi Access 需求 | 1.24.6 或更新版本 |


### 請求範例

請求主體應為包含以下欄位的 JSON 物件：

```bash

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

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| lockdown | F | Boolean | True 將保持門鎖定。 | true |
| evacuation | F | Boolean | True 將保持門解鎖。 | false |

### Keep it locked
curl -XPUT '{host}/api/v1/developer/doors/settings/emergency' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data '{
    "lockdown": true,
    "evacuation": false
}' \
--insecure

### Keep it unlocked
curl -XPUT '{host}/api/v1/developer/doors/settings/emergency' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data '{
    "lockdown": false,
    "evacuation": true
}' \
--insecure

### Restore the initial state or release the setting
curl -XPUT '{host}/api/v1/developer/doors/settings/emergency' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data '{
    "lockdown": false,
    "evacuation": false
}' \
--insecure
```

## 取得門緊急狀態


此 API 允許您取得所有門的緊急狀態。

| 請求 URL | `/api/v1/developer/doors/settings/emergency` |
| :--- | :--- |
| 權限金鑰 | `view:space` |
| 方法 | `GET` |
| UniFi Access 需求 | 1.24.6 或更新版本 |


### 請求範例

請求主體應為包含以下欄位的 JSON 物件：

```bash
curl -XGET '{host}/api/v1/developer/doors/settings/emergency' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--insecure
```

### 回應範例

```json
{
  "code": "SUCCESS",
  "data": {
    "evacuation": true,
    "lockdown": false
  },
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
| lockdown | F | Boolean | True 將保持門鎖定。 | true |
| evacuation | F | Boolean | True 將保持門解鎖。 | false |
