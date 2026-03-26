# 裝置

此處的 API 用於裝置管理，包括取得裝置列表、裝置資訊、裝置狀態、裝置設定等。


## 取得裝置列表


取得目前所有裝置的列表。註冊 NFC 卡時需要裝置 ID。

請求 URL: /api/v1/developer/devices
權限金鑰: view:device
方法: GET


### 請求範例: Shell/cURL

```bash
curl '{host}/api/v1/developer/devices?refresh=true' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
--insecure
```

### 回應主體

```json
{
  "code": "SUCCESS",
  "data": [
    [
      {
        "alias": "",
        "capabilities": [
          "pin_code",
          "nfc",
          "face",
          "qr_code",
          "is_reader",
          "support_reboot"
        ],
        "connected_uah_id": "58d61f25c2d5",
        "id": "58d61f309629",
        "is_adopted": true,
        "is_connected": true,
        "is_managed": true,
        "is_online": true,
        "location_id": "2ad41f5a-55ca-4751-b36e-432833638c62",
        "name": "UA G2 Pro 9629",
        "type": "UA-G2-PRO"
      },
      {
        "alias": "",
        "capabilities": [
          "unlock_failure_limit",
          "emergency_settings",
          "is_hub",
          "pin_code"
        ],
        "connected_uah_id": "",
        "id": "58d61f25c2d5",
        "is_adopted": true,
        "is_connected": true,
        "is_managed": true,
        "is_online": true,
        "location_id": "2ad41f5a-55ca-4751-b36e-432833638c62",
        "name": "UA-HUB-DOOR-C2D5",
        "type": "UAH-DOOR"
      }
    ]
  ],
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

### 查詢參數

| 參數 | 必填 | 型別 | 說明 | 範例 |  |
| --- | --- | --- | --- | --- | --- |
| refresh | F | String | 重新整理裝置快取。若為 true，會取得即時裝置資訊，但速度可能較慢。 | refresh=true |  |

### 回應主體

| 參數 | 必填 | 型別 | 說明 | 用途 | 相關 API |
| --- | --- | --- | --- | --- | --- |
| id | T | String | 裝置的識別 ID。 | 用於註冊 NFC 卡。 | /api/v1/developer/credentials/nfc_cards sessions |
| name | T | String | 裝置名稱。 |  |  |
| type | T | String | 裝置型號類型（例如 UA-G2-PRO、UAH-DOOR）。 |  |  |
| alias | T | String | 裝置的別名。 |  |  |
| capabilities | T | Array[String] | 裝置功能列表（例如 pin_code、nfc、face、qr_code）。 |  |  |
| connected_uah_id | T | String | 已連接的 UA Hub 的 MAC 位址（Hub 本身則為空）。 |  |  |
| is_adopted | T | Boolean | 裝置是否已被採用。 |  |  |
| is_connected | T | Boolean | 裝置目前是否已連線。 |  |  |
| is_managed | T | Boolean | 裝置是否受管理。 |  |  |
| is_online | T | Boolean | 裝置是否在線上。 |  |  |
| location_id | T | String | 裝置綁定的門 ID。 |  |  |

> **注意：** `data` 欄位是**巢狀陣列**（陣列中的陣列）。每個內部陣列按門/位置分組裝置。

## 取得 Access 裝置的存取方式設定


此 API 允許您取得 Access 裝置目前的存取方式設定。

請求 URL: /api/v1/developer/devices/:device_id/settings
權限金鑰: view:device
方法: GET
UniFi Access 需求: 版本 3.3.10 或更新


### 請求範例: Shell/cURL

```bash
curl --location 'https://192.168.1.1:12445/api/v1/developer/devices/942a6f4247b2/settings' \
--header 'Authorization: Bearer bphw1H4jw7q9uQ751PN3Nw'
```

### 回應範例

```json
{
  "code": "SUCCESS",
  "data": {
    "access_methods": {
      "bt_button": {
        "enabled": "yes"
      },
      "bt_tap": {
        "enabled": "yes"
      },
      "face": {
        "anti_spoofing_level": "no",
        "detect_distance": "far"
      },
      "nfc": {
        "enabled": "yes"
      },
      "pin_code": {
        "enabled": "yes",
        "pin_code_shuffle": "no"
      },
      "qr_code": {
        "enabled": "yes"
      },
      "touch_pass": {
        "enabled": "yes"
      }
    },
    "device_id": "942a6f4247b2"
  },
  "msg": "success"
}
```


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Token。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| device_id | T | String | 裝置的唯一 ID。 | 從 API /api/v1/developer/devices 取得 |

### 回應主體

| 參數 | 型別 | 說明 |
| --- | --- | --- |
| nfc | Object | NFC 存取方式設定。 |
| nfc.enabled | String | 表示 NFC 存取方式是否啟用（"true" 或 "false"）。 |
| bt_tap | Object | Mobile Tap（透過 Bluetooth）存取方式設定。 |
| bt_tap.enabled | String | 表示 Mobile Tap 是否啟用（"true" 或 "false"）。 |
| bt_button | Object | Mobile Unlock（透過 Bluetooth）存取方式設定。 |
| bt_button.enabled | String | 表示 Mobile Unlock 是否啟用（"true" 或 "false"）。 |
| bt_shake | Object | Mobile Shake（透過 Bluetooth）存取方式設定。 |
| bt_shake.enabled | String | 表示 Mobile Shake 是否啟用（"true" 或 "false"）。 |
| mobile_wave | Object | Mobile Wave 存取方式設定。 |
| mobile_wave.enabled | String | 表示 Mobile Wave 是否啟用（"true" 或 "false"）。 |
| pin_code | Object | PIN 存取方式設定。 |
| pin_code.enabled | String | 表示 PIN 是否啟用（"true" 或 "false"）。 |
| pin_code.pin_code_shuffle | String | 決定 PIN 亂序是否啟用（"true" 或 "false"）。 |
| face | Object | Face Unlock 存取方式設定。 |
| face.enabled | String | 決定 Face Unlock 是否啟用（"true" 或 "false"）。 |
| face.anti_spoofing_level | String | enum anti_spoofing_level {high, medium, no} Face Unlock 的防偽安全等級。 |
| face.detect_distance | String | enum detect_distance {near, medium, far} Face Unlock 偵測距離設定。 |
| wave | Object | Hand Wave 存取方式設定。 |
| wave.enabled | String | 表示 Hand Wave 是否啟用（"true" 或 "false"）。 |
| qr_code | Object | QR Code 存取方式設定。 |
| qr_code.enabled | String | 表示 QR Code 是否啟用（"true" 或 "false"）。 |
| touch_pass | Object | Touch Pass 存取方式設定。 |
| touch_pass.enabled | String | 表示 Touch Pass 是否啟用（"true" 或 "false"）。 |

## 更新 Access 裝置的存取方式設定


此 API 允許您更新 Access 裝置的存取方式設定。

請求 URL: /api/v1/developer/devices/:device_id/settings
權限金鑰: edit:device
方法: PUT \
UniFi Access 需求: 版本 3.3.10 或更新


### 請求範例: Shell/cURL

```bash
curl --location --request PUT \
'https://192.168.1.1:12445/api/v1/developer/devices/942a6f4247b2/settings' \
--header 'Authorization: Bearer N8oZJZ6U16i4mN6ZnRhw/A' \
--header 'Content-Type: application/json' \
--data '{
    "access_methods": {
        "bt_button": { "enabled": "yes" },
        "bt_tap": { "enabled": "yes" },
        "face": { "anti_spoofing_level": "medium", "detect_distance": "medium" },
        "nfc": { "enabled": "yes" },
        "pin_code": { "enabled": "yes", "pin_code_shuffle": "no" },
        "qr_code": { "enabled": "yes" },
        "touch_pass": { "enabled": "yes" }
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


### 請求標頭

| 參數 | 必填 | 型別 | 說明 |
| --- | --- | --- | --- |
| Authorization | T | String | 驗證與存取控制所需的 Bearer Token。 |
| Content-Type | T | String | 必須為 application/json。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| device_id | T | String | 裝置的唯一 ID。 | 從 API /api/v1/developer/devices 取得 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 範例 | 如何取得？ |
| --- | --- | --- | --- | --- | --- |
| nfc | F | Object | NFC 存取方式設定。 |  |  |
| nfc.enabled | F | String | 表示 NFC 存取方式是否啟用（"true" 或 "false"）。 | "true" |  |
| bt_tap | F | Object | Mobile Tap（透過 Bluetooth）存取方式設定。 |  |  |
| bt_tap.enabled | F | String | 表示 Mobile Tap 是否啟用（"true" 或 "false"）。 | "true" |  |
| bt_button | F | Object | Mobile Unlock（透過 Bluetooth）存取方式設定。 |  |  |
| bt_button.enabled | F | String | 表示 Mobile Unlock 是否啟用（"true" 或 "false"）。 | "true" |  |
| bt_shake | F | Object | Mobile Shake（透過 Bluetooth）存取方式設定。 |  |  |
| bt_shake.enabled | F | String | 表示 Mobile Shake 是否啟用（"true" 或 "false"）。 | "false" |  |
| mobile_wave | F | Object | Mobile Wave 存取方式設定。 |  |  |
| mobile_wave.enabled | F | String | 表示 Mobile Wave 是否啟用（"true" 或 "false"）。 | "true" |  |
| pin_code | F | Object | PIN 存取方式設定。 |  |  |
| pin_code.enabled | F | String | 表示 PIN 是否啟用（"true" 或 "false"）。 | "true" |  |
| pin_code.pin_code_shuffle | F | String | 表示 PIN 亂序是否啟用（"true" 或 "false"）。 | "false" |  |
| face | F | Object | Face Unlock 存取方式設定。 |  |  |
| face.enabled | F | String | 表示 Face Unlock 是否啟用（"true" 或 "false"）。 | "true" |  |
| face.anti_spoofing_level | F | String | enum anti spoofing_level {high, medium, no} Face Unlock 的防偽安全等級。 | "medium" |  |
| face.detect_distance | F | String | enum detect_distance {near, medium, far} Face Unlock 偵測距離設定。 | "medium" |  |
| wave | F | Object | Hand Wave 存取方式設定。 |  |  |
| wave.enabled | F | String | 表示 Hand Wave 是否啟用（"true" 或 "false"）。 | "false" |  |
| qr_code | F | Object | QR Code 存取方式設定。 |  |  |
| qr_code.enabled | F | String | 表示 QR Code 是否啟用（"true" 或 "false"）。 | "true" |  |
| touch_pass | F | Object | Touch Pass 存取方式設定。 |  |  |
| touch_pass.enabled | F | String | 表示 Touch Pass 是否啟用（"true" 或 "false"）。 | "true" |  |

注意: pin_code.pin_code_shuffle 設定僅在 pin_code.enabled 設為 "true" 時才會生效。

注意: face.anti_spoofing_level 和 face.detect_distance 設定僅在 face.enabled 設為 "true" 時才會生效。

注意: anti_spoofing_level 和 detect_distance 必須使用有效組合來調整 Face Unlock 靈敏度。支援的組合如下: no/far、no/medium、medium/near、high/near。僅這些組合會生效。

## 觸發門鈴


此 API 允許您觸發 Intercom 或 Reader Pro 上的門鈴。

請求 URL: /api/v1/developer/devices/:device_id/doorbell
權限金鑰: edit:device
方法: POST
UniFi Access 需求: 版本 4.0.10 或更新


### 請求範例: Shell/cURL

```yaml
curl --location 'https://192.168.1.1:12445/api/v1/developer/devices/788a20c002c7/doorbell' \
--header 'Authorization: Bearer qw8wle29QpEiUuRzdraOdoLQirvukxPT' \
--header 'Content-Type: application/json' \
--data '{ "room_name": "intercom directory name", "cancel": true }'
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
| Authorization | T | String | 驗證與存取控制所需的 Bearer Token。 |
| Content-Type | T | String | 必須為 application/json。 |

### 請求路徑

| 參數 | 必填 | 型別 | 說明 | 如何取得？ |
| --- | --- | --- | --- | --- |
| device_id | T | String | 讀取器的唯一 ID。 | 從 API /api/v1/developer/devices 取得 |

### 請求主體

| 參數 | 必填 | 型別 | 說明 | 範例 |
| --- | --- | --- | --- | --- |
| room_name | T | String | 指定 Intercom 的目錄名稱以觸發門鈴。使用空字串可響鈴預設門鈴。 | &quot;intercom directory name&quot; |
| cancel | F | Boolean | 若設為 true，則取消先前仍在響鈴的門鈴。 | false |

> **注意（已針對實際 API 驗證）：** `room_name` 為必填 — 省略或傳送空主體會回傳 `CODE_PARAMS_INVALID`。空字串 `""` 可被接受且會響鈴預設門鈴。
