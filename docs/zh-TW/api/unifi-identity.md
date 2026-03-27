# UniFi Identity

此處的 API 用於 UniFi Identity 應用程式。


## 發送 UniFi Identity 邀請


此 API 可讓您發送邀請，邀請使用者加入 UniFi Identity。

| 請求 URL | `/api/v1/developer/users/identity/invitations` |
| :--- | :--- |
| 權限金鑰 | `edit:user` |
| 方法 | `POST` |
| UniFi Access 需求 | 1.24.6 或更新版本 |


### 請求範例: Shell/cURL

```bash
curl -XPOST '{host}/api/v1/developer/users/identity/invitations' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data-raw '[
    {
        "user_id": "e0051e08-c4d5-43db-87c8-a9b19cb66513",
        "email": "example@*.com"
    }
]' \
--insecure
```

### 回應主體

成功：

```json
{
  "code": "SUCCESS",
  "data": [],
  "msg": "success"
}
```

若發送電子郵件失敗：

```json
{
  "code": "SUCCESS",
  "data": [
    {
      "error_code": "",
      "error_msg": "invalid email",
      "user_email": "example@*.com",
      "user_id": "e0051e08-c4d5-43db-87c8-a9b19cb66513"
    }
  ],
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
| Array[Object].user_id | T | String | 使用者的身分 ID。 |
| Array[Object].email | F | String | 使用者的電子郵件。若填寫，將更新使用者現有的電子郵件地址。 |

## 取得可用資源


此 API 可讓您取得可用的 UniFi Identity 資源。

| 請求 URL | `/api/v1/developer/users/identity/assignments` |
| :--- | :--- |
| 權限金鑰 | `view:user` |
| 方法 | `GET` |
| UniFi Access 需求 | 1.24.6 或更新版本 |


### 請求範例: Shell/cURL

```bash
curl '{host}/api/v1/developer/users/identity/assignments?resource_type=evstation,wifi,vpn' \
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
    "evstation": [],
    "vpn": [
      {
        "deleted": false,
        "id": "65cff9a9c188cb71cfac8e9d",
        "metadata": null,
        "name": "UDM Pro",
        "short_name": ""
      }
    ],
    "wifi": [
      {
        "deleted": false,
        "id": "65cff9a8c188cb71cfac8e9a",
        "metadata": null,
        "name": "UniFi Identity",
        "short_name": ""
      }
    ]
  },
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 用於驗證與存取控制所需的 Token。 |

### 查詢參數

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| resource_type | F | String | 顯示資源類型；留空時顯示全部。enum resource_type {evstation,vpn,wifi} | resource_type=evstation,wifi,vpn |

### 回應主體

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| data.
[resource_type] | T | String | 資源的類型。enum resource_type
{evstation, vpn, wifi, camera} |
| id | T | String | 資源的身分 ID。 |
| name | T | String | 資源的名稱。 |
| deleted | T | Boolean | 指示資源是否已停用。 |

## 指派資源給使用者


此 API 可讓您將 UniFi Identity 資源指派給使用者。

| 請求 URL | `/api/v1/developer/users/:id/identity/assignments` |
| :--- | :--- |
| 權限金鑰 | `edit:user` |
| 方法 | `POST` |
| UniFi Access 需求 | 1.24.6 或更新版本 |


### 請求範例: Shell/cURL

```bash
curl -XPOST '{host}/api/v1/developer/users/b602879b-b857-400b-970b-336d4cb881ad/identity/assignments'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--data '{
    "resource_type": "wifi",
    "resource_ids": [
        "65cff9a8c188cb71cfac8e9a"
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
| Authorization | T | String | 用於驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| id | T | String | 使用者的身分 ID。 | 從 API /api/v1/developer/users 取得 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| resource_type | T | String | enum resource_type
{ev(station,vpn,wifi} | 從 API 10.2 取得 |
| resource_ids | T | Array&lt;String] | 資源的身分 ID。 | 從 API 10.2 取得 |

## 取得指派給使用者的資源


此 API 可讓您取得指派給使用者的 UniFi Identity 資源。

| 請求 URL | `/api/v1/developer/users/:id/identity/assignments` |
| :--- | :--- |
| 權限金鑰 | `view:user` |

| 方法 | `GET` |
| :--- | :--- |
| UniFi Access 需求 | 1.24.6 或更新版本 |


### 請求範例: Shell/cURL

```bash
curl -XGET '{host}'/api/v1/developer/users/b602879b-b857-400b-970b-336d4cb881ad/identity/assignments'
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
    "ev_station": [],
    "vpn": [
      {
        "deleted": false,
        "id": "65dff9a9c188cb71cfac8e9d",
        "metadata": {
          "has_ip": true
        },
        "name": "UDM Pro",
        "short_name": ""
      }
    ],
    "wifi": [
      {
        "deleted": false,
        "id": "65dff9a8c188cb71cfac8e9a",
        "metadata": null,
        "name": "UniFi Identity",
        "short_name": ""
      }
    ]
  },
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 用於驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| id | T | String | 使用者的身分 ID。 | 從 API /api/v1/developer/users 取得 |

### 回應主體

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| data.
[resource_type] | T | Array[Object] | 資源的類型。enum resource_type
{evstation, vpn,wifi,camera} |
| id | T | String | 資源的身分 ID。 |
| name | T | String | 資源的名稱。 |
| deleted | T | Boolean | 指示資源是否已停用。 |

## 指派資源給使用者群組


此 API 可讓您將 UniFi Identity 資源指派給使用者群組。

| 請求 URL | `/api/v1/developer/user_groups/:id/identity/assignments` |
| :--- | :--- |
| 權限金鑰 | `edit:user` |
| 方法 | `POST` |
| UniFi Access 需求 | 2.2.0 或更新版本 |


### 請求範例: Shell/cURL

```bash
curl -XPOST '{{host}}/api/v1/developer/user_groups/7476c839-8e10-472e-894f-c5b8254c35b5/identity/assignments'
    -H 'Authorization: Bearer wHFmHR******kD6wHg'
    -H 'accept: application/json'
    -H 'content-type: application/json'
    --data '{
        "resource_type": "wifi",
        "resource_ids": [
            "65dff9a8c188cb71cfac8e9a"
        ]
    }'
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

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| id | T | String | 使用者群組的身分 ID。 | 從 API /api/v1/developer/user_groups 取得 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| resource_type | T | String | enum resource_type {ev_station,vpn,wifi} | 從 API 10.2 取得 |
| resource_ids | T | Array[String] | 資源的身分 ID。 | 從 API 10.2 取得 |

## 取得指派給使用者群組的資源


此 API 可讓您取得指派給使用者群組的 UniFi Identity 資源。

| 請求 URL | `/api/v1/developer/user_groups/:id/identity/assignments` |
| :--- | :--- |
| 權限金鑰 | `view:user` |
| 方法 | `GET` |
| UniFi Access 需求 | 2.2.0 或更新版本 |


### 請求範例: Shell/cURL

```bash
curl -XGET '{{host}}/api/v1/developer/user_groups/7476c839-8e10-472e-894f-c5b8254c35b5/identity/assignments'
    -H 'Authorization: Bearer wHFmHR******kD6wHg'
    -H 'accept: application/json'
    -H 'content-type: application/json'
    --insecure
```

### 回應範例

```json
{
  "code": "SUCCESS",
  "data": {
    "ev_station": [],
    "vpn": [
      {
        "deleted": false,
        "id": "65dff9a9c188cb71cfac8e9d",
        "metadata": {
          "has_ip": true
        },
        "name": "UDM Pro",
        "short_name": ""
      }
    ],
    "wifi": [
      {
        "deleted": false,
        "id": "65dff9a8c188cb71cfac8e9a",
        "metadata": null,
        "name": "UniFi Identity",
        "short_name": ""
      }
    ]
  },
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 用於驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| id | T | String | 使用者群組的身分 ID。 | 從 API /api/v1/developer/user_groups 取得 |

### 回應主體

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| data.[resource_type] | T | Array[Object] | 資源的類型。enum resource_type {ev_station,vpn,wifi,camera} |
| id | T | String | 資源的身分 ID。 |
| name | T | String | 資源的名稱。 |
| deleted | T | Boolean | 指示資源是否已停用。 |
