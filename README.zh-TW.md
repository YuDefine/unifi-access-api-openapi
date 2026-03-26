# UniFi Access API — OpenAPI 規範

> **非官方** OpenAPI 3.1 規範，基於 Ubiquiti 官方 UniFi Access API PDF 文件轉換整理而成。
>
> **[English README](README.md)**

## 這是什麼？

這個 repo 提供了 [UniFi Access](https://ui.com/access) API 的 **OpenAPI 3.1.0 規範檔案** (`openapi.yaml`)，方便開發者在 Swagger UI、Postman、Redocly 等工具中直接匯入使用。

UniFi Access 是 Ubiquiti 的門禁管理系統，官方僅提供 PDF 格式的 API 文件，不便於程式化使用。本專案將其轉換為標準的 OpenAPI 格式。

## 轉換流程

```
Ubiquiti 官方 PDF 文件
    ↓ MinerU (PDF extraction tool)
Markdown 原始輸出（含格式錯誤）
    ↓ AI (Claude) 整理修復
修復後的 Markdown 文件
    ↓ AI (Claude) 結構化轉換
OpenAPI 3.1.0 YAML 規範
```

## API 概覽

| 分類 | Endpoint 數量 | 說明 |
|------|:---:|------|
| User 使用者管理 | 29 | 使用者 CRUD、群組、NFC 卡、PIN 碼、Touch Pass、車牌 |
| Visitor 訪客管理 | 13 | 訪客 CRUD、NFC 卡、PIN 碼、QR Code、車牌 |
| Access Policy 門禁政策 | 15 | 門禁政策、假日群組、排程管理 |
| Credential 憑證管理 | 16 | NFC 卡、Touch Pass、PIN 碼、QR Code 管理 |
| Space 空間/門管理 | 13 | 門群組拓撲、門鎖控制、緊急狀態 |
| Device 裝置管理 | 4 | 裝置查詢、門禁方式設定、門鈴觸發 |
| System Log 系統日誌 | 4 | 日誌查詢、匯出、資源查詢 |
| UniFi Identity 身份管理 | 6 | 身份邀請、資源分配 |
| Notification 通知 | 6 | WebSocket 通知、Webhook 管理 |
| API Server 伺服器 | 2 | HTTPS 憑證管理 |
| **合計** | **~108** | |

## 使用方式

**Swagger UI / Swagger Editor:**
```bash
# 直接用 URL 匯入
https://raw.githubusercontent.com/Yudefine/unifi-access-api-openapi/main/openapi.yaml
```

**Postman:**
1. 開啟 Postman → Import → 選擇 `openapi.yaml`
2. 自動產生所有 API request collection

**Redocly:**
```bash
npx @redocly/cli preview-docs openapi.yaml
```

**程式碼產生器:**
```bash
# 產生 TypeScript client
npx @openapitools/openapi-generator-cli generate -i openapi.yaml -g typescript-fetch -o ./client
```

## 原始文件

原始的 Ubiquiti UniFi Access API PDF 文件位於 [`docs/unifi-access-api-original.pdf`](docs/unifi-access-api-original.pdf)。

## 重要聲明

- 這是一個 **非官方** 的社群專案，與 Ubiquiti Inc. 無關
- API 規範是從 PDF 文件透過 AI 輔助轉換，可能存在遺漏或錯誤
- 請以 Ubiquiti 官方文件為準
- 如發現錯誤，歡迎提交 Issue 或 Pull Request

## 授權條款

[MIT](LICENSE)
