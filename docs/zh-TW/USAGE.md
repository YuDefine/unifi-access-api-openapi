# UniFi Access API — 使用指南

> 基於本專案 OpenAPI 規範檔案，整合 UniFi Access API 的完整指南。

## 前置條件

- UniFi Access **v1.9.1** 或更新版本（升級至 Identity Enterprise 後 API **不可用**）
- 從以下路徑建立的 API Token：UniFi Portal → Access → Settings → General → Advanced → API Token
- 可透過 **12445** port（HTTPS）連線至 UniFi Console

## 快速開始

### 1. 取得 API Token

1. 登入 [UniFi Portal](https://account.ui.com/login)
2. 選擇安裝了 UniFi Access 的 Console
3. 前往 **Access → Settings → General → Advanced**
4. 在 API Token 下方點選 **Create New**，設定名稱、有效期限及權限範圍
5. **立即複製 Token** — 僅顯示一次

### 2. 確認 API 主機位址

```
https://<console-ip>:12445
```

伺服器使用自簽憑證，需在 curl 加上 `--insecure` 或在 HTTP client 中停用憑證驗證。

### 3. 發出第一個請求

```bash
# 列出所有使用者（分頁）
curl -k 'https://192.168.1.1:12445/api/v1/developer/users?page_num=1&page_size=25' \
  -H 'Authorization: Bearer <YOUR_API_TOKEN>' \
  -H 'Accept: application/json'
```

## 認證方式

所有請求都需要在 `Authorization` header 中帶入 Bearer token：

```
Authorization: Bearer <API_TOKEN>
```

Token 依權限 key 區分範圍（如 `edit:user`、`view:user`、`edit:visitor`），請確保 token 具有各 endpoint 所需的權限。

## 回應格式

每個回應都遵循統一的封裝格式：

```json
{
  "code": "SUCCESS",
  "msg": "success",
  "data": { ... }
}
```

| 欄位 | 說明 |
|------|------|
| `code` | `"SUCCESS"` 或錯誤碼（如 `CODE_PARAMS_INVALID`） |
| `msg` | 可讀的訊息說明 |
| `data` | 資料內容 — 物件、陣列或分頁結果 |

### 分頁機制

支援分頁的 endpoint 接受 `page_num` 和 `page_size` query 參數，回傳格式：

```json
{
  "code": "SUCCESS",
  "data": [ ... ],
  "pagination": {
    "page_num": 1,
    "page_size": 25,
    "total": 142
  }
}
```

## API 分類

### 使用者管理（29 個 endpoint）

使用者與群組的 CRUD 操作，包含憑證指派。

| 操作 | Method | Path |
|------|--------|------|
| 建立使用者 | POST | `/api/v1/developer/users` |
| 查詢/更新/刪除使用者 | GET / PUT / DELETE | `/api/v1/developer/users/{id}` |
| 搜尋使用者 | POST | `/api/v1/developer/users/search` |
| 指派 NFC 卡 | PUT | `/api/v1/developer/users/{id}/nfc_cards` |
| 指派 PIN 碼 | PUT | `/api/v1/developer/users/{id}/pin_codes` |
| 指派門禁政策 | PUT | `/api/v1/developer/users/{id}/access_policies` |
| 上傳頭像 | POST | `/api/v1/developer/users/{id}/avatar` |
| 群組 CRUD | POST / GET / PUT / DELETE | `/api/v1/developer/user_groups[/{id}]` |
| 指派車牌 | PUT | `/api/v1/developer/users/{id}/license_plates` |

### 訪客管理（13 個 endpoint）

管理具有時限的訪客存取權，支援 NFC、PIN、QR Code 及車牌憑證。

| 操作 | Method | Path |
|------|--------|------|
| 建立訪客 | POST | `/api/v1/developer/visitors` |
| 查詢/更新/刪除訪客 | GET / PUT / DELETE | `/api/v1/developer/visitors/{id}` |
| 指派 NFC / PIN / QR / 車牌 | PUT | `/api/v1/developer/visitors/{id}/<credential>` |

### 門禁政策（15 個 endpoint）

定義使用者/群組在何時何處可以進出。

- **門禁政策** — CRUD 位於 `/api/v1/developer/access_policies[/{id}]`
- **假日群組** — CRUD 位於 `/api/v1/developer/access_policies/holiday_groups[/{id}]`
- **排程** — CRUD 位於 `/api/v1/developer/access_policies/schedules[/{id}]`

### 憑證管理（16 個 endpoint）

獨立於使用者之外管理 NFC 卡、Touch Pass、PIN 碼及 QR Code。

| 操作 | Method | Path |
|------|--------|------|
| 產生 PIN 碼 | POST | `/api/v1/developer/credentials/pin_codes` |
| NFC 註冊 session | POST / GET / DELETE | `/api/v1/developer/credentials/nfc_cards/sessions[/{id}]` |
| NFC 卡 CRUD | GET / PUT / DELETE | `/api/v1/developer/credentials/nfc_cards/tokens[/{token}]` |
| 匯入第三方 NFC 卡 | POST | `/api/v1/developer/credentials/nfc_cards/import` |
| Touch Pass 列表/搜尋 | GET / POST | `/api/v1/developer/credentials/touch_passes[/search]` |
| 下載 QR Code 圖片 | GET | `/api/v1/developer/credentials/qr_codes/download/{visitor_id}` |

### 空間/門管理（13 個 endpoint）

控制門、門群組、鎖定規則及緊急狀態。

| 操作 | Method | Path |
|------|--------|------|
| 門群組拓撲 | GET | `/api/v1/developer/door_groups/topology` |
| 門群組 CRUD | POST / GET / PUT / DELETE | `/api/v1/developer/door_groups[/{id}]` |
| 查詢門 | GET | `/api/v1/developer/doors[/{id}]` |
| 遠端開鎖 | PUT | `/api/v1/developer/doors/{id}/unlock` |
| 鎖定規則 | GET / PUT | `/api/v1/developer/doors/{id}/lock_rule` |
| 緊急狀態 | GET / PUT | `/api/v1/developer/doors/settings/emergency` |

### 裝置管理（4 個 endpoint）

| 操作 | Method | Path |
|------|--------|------|
| 列出裝置 | GET | `/api/v1/developer/devices` |
| 門禁方式設定 | GET / PUT | `/api/v1/developer/devices/{device_id}/settings` |
| 觸發門鈴 | POST | `/api/v1/developer/devices/{device_id}/doorbell` |

### 系統日誌（4 個 endpoint）

| 操作 | Method | Path |
|------|--------|------|
| 查詢日誌 | POST | `/api/v1/developer/system/logs` |
| 匯出日誌 | POST | `/api/v1/developer/system/logs/export` |
| 查詢日誌資源 | GET | `/api/v1/developer/system/logs/resource/{id}` |
| 查詢靜態資源 | GET | `/api/v1/developer/system/static/{path}` |

### UniFi Identity（6 個 endpoint）

| 操作 | Method | Path |
|------|--------|------|
| 發送邀請 | POST | `/api/v1/developer/users/identity/invitations` |
| 管理資源指派 | GET / PUT | `/api/v1/developer/users/{id}/identity/assignments` |
| 群組資源指派 | GET / PUT | `/api/v1/developer/user_groups/{id}/identity/assignments` |

### 通知（6 個 endpoint）

- **WebSocket** — 連接 `/api/v1/developer/devices/notifications` 取得即時事件
- **Webhook** — CRUD 位於 `/api/v1/developer/webhooks/endpoints[/{id}]`

### API Server（2 個 endpoint）

| 操作 | Method | Path |
|------|--------|------|
| 上傳 HTTPS 憑證 | POST | `/api/v1/developer/api_server/certificates` |
| 刪除 HTTPS 憑證 | DELETE | `/api/v1/developer/api_server/certificates` |

## 常見錯誤碼

| 錯誤碼 | 說明 |
|--------|------|
| `CODE_PARAMS_INVALID` | 參數無效 |
| `CODE_AUTH_FAILED` | 認證失敗 |
| `CODE_ACCESS_TOKEN_INVALID` | Token 無效或已過期 |
| `CODE_UNAUTHORIZED` | Token 缺少所需的權限範圍 |
| `CODE_RESOURCE_NOT_FOUND` | 資源不存在 |
| `CODE_OPERATION_FORBIDDEN` | 操作不被允許 |
| `CODE_NOT_EXISTS` | 項目不存在 |
| `CODE_OTHERS_UID_ADOPTED_NOT_SUPPORTED` | 升級至 Identity Enterprise 後 API 不可用 |

## 工具整合

### 匯入 Swagger UI / Postman

```bash
# Swagger UI — 使用 raw URL
https://raw.githubusercontent.com/Yudefine/unifi-access-api-openapi/main/openapi.yaml

# 或以 Redocly 在本機預覽
npx @redocly/cli preview-docs openapi.yaml
```

### 產生 Client SDK

```bash
# TypeScript
npx @openapitools/openapi-generator-cli generate \
  -i openapi.yaml -g typescript-fetch -o ./client

# Python
npx @openapitools/openapi-generator-cli generate \
  -i openapi.yaml -g python -o ./client-python
```

### 驗證規範檔

```bash
npx @redocly/cli lint openapi.yaml
```

## 安全注意事項

- 務必使用 HTTPS（port 12445），預設為自簽憑證。
- 切勿在前端程式碼或公開 repo 中暴露 API Token。
- 建立 Token 時遵循最小權限原則，僅選擇必要的權限範圍。
- 考慮設定防火牆規則，限制僅受信任的網路可存取 API。
- 在客戶端實作 rate limiting — 伺服器在流量過大時會回傳 HTTP 429。
