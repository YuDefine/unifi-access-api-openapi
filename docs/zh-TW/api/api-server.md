# API 伺服器

> 此處的 API 用於 API 伺服器設定。


## 上傳 HTTPS 憑證


此 API 可讓您更新 Access API 的 HTTPS 憑證，僅適用於連接埠 12445。**請注意，需要重新啟動 Access 應用程式才能套用這些變更。** 如果私鑰與憑證不匹配，將會產生「參數錯誤」訊息。

| 請求 URL | `/api/v1/developer/api_server/certificates` |
| :--- | :--- |
| 權限金鑰 | `edit:api_server` |
| 方法 | `POST` |
| UniFi Access 需求 | 2.2.10 或更新版本 |


### 回應範例

```json
{
  "code": "SUCCESS",
  "data": "success",
  "msg": "success"
}
```

### 請求範例

```bash
curl -XPOST '{{host}}/api/v1/developer/api_server/certificates'
    -H 'Authorization: Bearer wHFmHR******kD6wHg/yg'
    --form 'key=@"/server.key"'
    --form 'cert=@"/server.crt"'
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 用於驗證與存取控制所需的 Token。 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| key | T | File | 私鑰 | server.key |
| cert | T | File | 憑證 | server.crt |

## 刪除 HTTPS 憑證


此 API 可讓您刪除 Access API 的 HTTPS 憑證，僅適用於連接埠 12445。**請注意，需要重新啟動 Access 應用程式才能套用這些變更。**

| 請求 URL | `/api/v1/developer/api_server/certificates` |
| :--- | :--- |
| 權限金鑰 | `edit:api_server` |
| 方法 | `DELETE` |
| UniFi Access 需求 | 2.2.10 或更新版本 |


### 回應範例

```json
{
  "code": "SUCCESS",
  "data": "success",
  "msg": "success"
}
```

### 請求範例

```bash
curl -XDELETE '{{host}}/api/v1/developer/api_server/certificates'
    -H 'Authorization: Bearer wHFmHR******kD6wHg/yg'
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 用於驗證與存取控制所需的 Token。 |
