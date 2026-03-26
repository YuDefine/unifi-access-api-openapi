# 概觀

本節介紹與 API 操作相關的基本概念，包括 API Token、HTTP 狀態碼、成功與錯誤碼、HTTP 動詞以及 API 主機。

## API Token

若要驗證 UniFi Access 的 API 請求，您需要使用與帳戶關聯的 API Token。如果請求包含已刪除或過期的 Token，服務將回傳驗證錯誤。Authorization Token 可從 UniFi Portal 取得。

## HTTP 狀態碼參考

<table><tr><td>200</td><td>OK</td><td>一切正常運作。</td></tr><tr><td>400</td><td>Bad Request</td><td>請求不合法，通常是缺少必填參數。</td></tr><tr><td>401</td><td>Unauthorized</td><td>請求缺少有效的 API Token 進行身份驗證。</td></tr><tr><td>402</td><td>Request Failed</td><td>請求包含有效參數，但因某些原因失敗。</td></tr><tr><td>403</td><td>Forbidden</td><td>使用的 API Token 不具備執行此請求所需的權限。</td></tr><tr><td>429</td><td>Too Many Requests</td><td>在短時間內向 API 傳送了過多請求。</td></tr><tr><td>500, 502, 503, 504</td><td>Server Errors</td><td>UniFi Access 端在處理請求時發生錯誤。</td></tr></table>

## 成功碼

```json
{
  "code": "SUCCESS",
  "msg": "success"
}
```

<table><tr><td>Code</td><td>Message</td></tr><tr><td>SUCCESS</td><td>Success</td></tr></table>

## 錯誤碼

```json
{
  "code": "CODE_PARAMS_INVALID",
  "msg": "Invalid parameters."
}
```

<table><tr><td>Code</td><td>Message</td></tr><tr><td>CODE_PARAMS_INVALID</td><td>提供的參數無效。</td></tr><tr><td>CODE_SYSTEM_ERROR</td><td>伺服器端發生錯誤。</td></tr><tr><td>CODE_RESOURCE_NOT_FOUND</td><td>找不到請求的資源。</td></tr><tr><td>CODE_OPERATION_FORBIDDEN</td><td>不允許執行請求的操作。</td></tr><tr><td>CODE_AUTH_FAILED</td><td>驗證失敗。</td></tr><tr><td>CODE_ACCESS_TOKEN_INVALID</td><td>提供的存取 Token 無效。</td></tr><tr><td>CODE_UNAUTHORIZED</td><td>您無權執行此操作。</td></tr><tr><td>CODE_NOT_EXISTS</td><td>請求的項目不存在。</td></tr><tr><td>CODE_USER_EMAIL_ERROR</td><td>提供的電子郵件格式無效。</td></tr><tr><td>CODE_USER_ACCOUNT_NOT_EXIST</td><td>請求的使用者帳戶不存在。</td></tr><tr><td>CODE_USER_WORKER_NOT_EXISTS</td><td>請求的使用者不存在。</td></tr><tr><td>CODE_USER_NAME_DUPLICATED</td><td>提供的名稱已存在。</td></tr><tr><td>CODE_USER_CSV_IMPORT_INCOMPLETE_PROP</td><td>請提供名字和姓氏。</td></tr><tr><td>CODE_ACCESS_POLICY_USER_TIMEZONE_NOT_FOUND</td><td>找不到請求的工作日排程。</td></tr><tr><td>CODE_ACCESS_POLICY_HOLIDAY_TIMEZONE_NOT_FOUND</td><td>找不到請求的假日排程。</td></tr><tr><td>CODE_ACCESS_POLICY_HOLIDAY_GROUP_NOT_FOUND</td><td>找不到請求的假日群組。</td></tr><tr><td>CODE_ACCESS_POLICY_HOLIDAY_NOT_FOUND</td><td>找不到請求的假日。</td></tr><tr><td>CODE_ACCESS_POLICY_SCHEDULE_NOT_FOUND</td><td>找不到請求的排程。</td></tr><tr><td>CODE_ACCESS_POLICY_HOLIDAY_NAME_EXIST</td><td>提供的假日名稱已存在。</td></tr><tr><td>CODE_ACCESS_POLICY_HOLIDAY_GROUP_NAME_EXIST</td><td>提供的假日群組名稱已存在。</td></tr><tr><td>CODE_ACCESS_POLICY_SCHEDULE_NAME_EXIST</td><td>提供的排程名稱已存在。</td></tr><tr><td>CODE_ACCESS_POLICY_SCHEDULE_CAN_NOT_DELETE</td><td>無法刪除此排程。</td></tr><tr><td>CODE_ACCESS_POLICY_HOLIDAY_GROUP_CAN_NOT_DELETE</td><td>無法刪除此假日群組。</td></tr><tr><td>CODE_CREDS_NFC_HAS_BIND_USER</td><td>此 NFC 卡已註冊並指派給其他使用者。</td></tr><tr><td>CODE_CREDS_DISABLE_TRANSFER_UID_USER_NFC</td><td>UniFi Identity Enterprise 使用者的 NFC 卡不可轉移。</td></tr><tr><td>CODE_CREDS_NFC_READ_SESSION_NOT_FOUND</td><td>無法取得 NFC 讀取工作階段。</td></tr><tr><td>CODE_CREDS_NFC_READ_POLL_TOKEN_EMPTY</td><td>NFC Token 為空。</td></tr><tr><td>CODE_CREDS_NFC_CARD_IS_PROVISION</td><td>此 NFC 卡已在其他站點註冊。</td></tr><tr><td>CODE_CREDS_NFC_CARD_PROVISION_FAILED</td><td>請將 NFC 卡靠近讀卡器超過 5 秒。</td></tr><tr><td>CODE_CREDS_NFC_CARD_INVALID</td><td>不支援此卡片類型。請使用 UA Card。</td></tr><tr><td>CODE_CREDS_NFC_CARD_CANNOT_BE_DELETE</td><td>無法刪除此 NFC 卡。</td></tr><tr><td>CODE_CREDS_PIN_CODE_CREDS_ALREADY_EXIST</td><td>此 PIN 碼已存在。</td></tr><tr><td>CODE_CREDS_PIN_CODE_CREDS_LENGTH_INVALID</td><td>PIN 碼長度不符合預設要求。</td></tr><tr><td>CODE_SPACE_DEVICE_BOUND_LOCATION_NOT_FOUND</td><td>找不到裝置的位置。</td></tr><tr><td>CODE_DEVICE_DEVICE_VERSION_NOT_FOUND</td><td>韌體版本已是最新。</td></tr><tr><td>CODE_DEVICE_DEVICE_VERSION_TOO_OLD</td><td>韌體版本過舊，請更新至最新版本。</td></tr><tr><td>CODE_DEVICE_DEVICE_BUSY</td><td>攝影機目前使用中。</td></tr><tr><td>CODE_DEVICE_DEVICE_NOT_FOUND</td><td>找不到該裝置。</td></tr><tr><td>CODE_DEVICE_DEVICE_OFFLINE</td><td>裝置目前離線。</td></tr><tr><td>CODE_OTHERS_UID_ADOPTED_NOT_SUPPORTED</td><td>升級至 Identity Enterprise 後，API 將無法使用。</td></tr><tr><td>CODE_HOLIDAY_GROUP_CAN_NOT_DELETE</td><td>無法刪除此假日群組。</td></tr><tr><td>CODE_HOLIDAY_GROUP_CAN_NOT_EDIT</td><td>無法編輯此假日群組。</td></tr><tr><td>CODE_DEVICE_WEBHOOK_ENDPOINT_DUPLICATED</td><td>提供的端點已存在。</td></tr><tr><td>CODE_DEVICE_API_NOT_SUPPORTED</td><td>此裝置目前不支援此 API。</td></tr></table>

## HTTP 動詞

<table><tr><td>HTTP 方法</td><td>說明</td></tr><tr><td>GET</td><td>用於取得物件。</td></tr><tr><td>POST</td><td>用於建立物件或執行自訂操作。</td></tr><tr><td>PUT</td><td>用於取代物件或集合。</td></tr><tr><td>DELETE</td><td>用於刪除物件。</td></tr></table>

## API 主機

Open API Server 託管於連接埠 12445，可透過 HTTPS 存取：https://console-ip:12445。

伺服器憑證為自行產生且不受信任。

## 請求標頭

請求的標頭包含以下資訊：

<table><tr><td>參數</td><td>必填</td><td>型別</td><td>說明</td><td>範例</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>身份驗證與存取控制所需的 Token。</td><td>Authorization: Bearer wHFmHRuX4I7sB2oDkD6wHg</td></tr></table>

## 回應結構

請求的回應包含以下資訊：

```json
{
  "code": "SUCCESS",
  "msg": "success",
  "data": {}
}
```

1. code：表示請求處理的結果，指示成功或失敗。
2. msg：當 code 不等於 1 時，表示錯誤描述。
3. data：表示 API 請求的資料。
