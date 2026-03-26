# 簡介

歡迎閱讀 UniFi Access API 指南，本指南提供了如何有效使用 API 的詳細逐步說明。UniFi Access API 是一個開放的介面協定，允許開發者透過預先定義的介面與特定服務進行互動。

::: tip 官方文件
下載原始官方 PDF：[UniFi Access API 官方文件 (PDF)](https://github.com/YuDefine/unifi-access-api-openapi/raw/main/docs/unifi-access-api-original.pdf)
:::

## 建立 API Token 與下載 API 文件

在使用 UniFi Access API 之前，您需要取得有效的 API Token 以進行身份驗證與存取控制。請依照以下步驟建立 API Token：

1. 使用瀏覽器登入您的 UniFi Portal (https://account.ui.com/login)。
2. 選擇已安裝 UniFi Access 應用程式的 UniFi Console。
3. 前往 Access > Settings > General > Advanced。
4. 前往 API Token 下載 API 文件並建立 API Token。
5. 若要建立 API Token，請點選 Create New，輸入金鑰名稱與有效期限，選擇權限範圍，然後點選 Create。
6. API Token 建立完成後，請務必複製 API Token 並妥善保存以供日後使用。請注意，基於安全考量，金鑰僅會顯示一次。

## 取得您的主機名稱

UniFi Access 應用程式可以託管在區域網路內的伺服器上，並透過 LAN 連接埠存取。主機名稱可以是伺服器的 IP 位址或對應到該 IP 的自訂網域名稱。使用指定的連接埠號（12445）並建立 HTTPS 協定以進行安全連線。

## 使用 API

1. 依照 API 文件中的說明建構 API 請求。
2. 使用先前取得的 API Token 和主機名稱，將建構好的請求傳送至伺服器。
3. 解析伺服器的回應以取得所需資料或執行所需操作。

## 安全設定

1. 設定適當的安全措施以保護 API 和伺服器。
2. 設定防火牆規則以允許 API 使用的特定連接埠的傳入流量。
3. 使用 SSL/TLS 憑證啟用 HTTPS 加密以確保資料傳輸安全。
4. 實施速率限制與節流機制以防止濫用並確保公平使用。

## 重要注意事項

1. 請確認您的 UniFi Access 版本為 1.9.1 或更新版本。
2. 升級至 Identity Enterprise 後，API 將無法使用。
3. 使用 UniFi Access API 前，請取得有效的存取權限並遵守服務提供商提供的使用指南。
4. 妥善保管您的 API Token，不要與他人分享，以避免安全風險。
5. 如有任何問題或疑慮，請聯繫您的服務提供商技術支援團隊。

以上步驟涵蓋了使用 UniFi Access API 的基本流程與重要注意事項。請依照說明並參考 API 文件以順利進行開發。祝您使用 UniFi Access API 愉快！
