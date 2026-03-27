# Device

The APIs here are designed for device management, including obtaining device lists, device information, device statuses, device configurations, and more.

## Fetch Devices

Obtain a list of all current devices. The device ID is required for enrolling an NFC card.

| Request URL | `/api/v1/developer/devices` |
| :--- | :--- |
| Permission Key | `view:device` |
| Method | `GET` |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Query Parameters

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td></td></tr><tr><td>refresh</td><td>F</td><td>String</td><td>Refresh the device cache. If true, fetches real-time device info but may be slower.</td><td>refresh=true</td><td></td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Purpose</td><td>Related API</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the device.</td><td>Used for enrolling an NFC card.</td><td>/api/v1/developer/credentials/nfc_cards sessions</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the device.</td><td></td><td></td></tr><tr><td>type</td><td>T</td><td>String</td><td>Device model type (e.g., UA-G2-PRO, UAH-DOOR).</td><td></td><td></td></tr><tr><td>alias</td><td>T</td><td>String</td><td>Alias of the device.</td><td></td><td></td></tr><tr><td>capabilities</td><td>T</td><td>Array[String]</td><td>List of device capabilities (e.g., pin_code, nfc, face, qr_code).</td><td></td><td></td></tr><tr><td>connected_uah_id</td><td>T</td><td>String</td><td>MAC address of the connected UA Hub (empty for hubs themselves).</td><td></td><td></td></tr><tr><td>is_adopted</td><td>T</td><td>Boolean</td><td>Whether the device has been adopted.</td><td></td><td></td></tr><tr><td>is_connected</td><td>T</td><td>Boolean</td><td>Whether the device is currently connected.</td><td></td><td></td></tr><tr><td>is_managed</td><td>T</td><td>Boolean</td><td>Whether the device is managed.</td><td></td><td></td></tr><tr><td>is_online</td><td>T</td><td>Boolean</td><td>Whether the device is online.</td><td></td><td></td></tr><tr><td>location_id</td><td>T</td><td>String</td><td>Door ID the device is bound to.</td><td></td><td></td></tr></table>

> **Note:** The `data` field is a **nested array** (array of arrays). Each inner array groups devices by door/location.

### Request Sample: Shell/cURL

```bash
curl '{host}/api/v1/developer/devices?refresh=true' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
--insecure
```

### Response Body

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

## Fetch Access Device's Access Method Settings

This API allows you to fetch the current access method settings of an Access device.

| Request URL | `/api/v1/developer/devices/:device_id/settings` |
| :--- | :--- |
| Permission Key | `view:device` |
| Method | `GET` |
| UniFi Access Requirement | Version 3.3.10 or later |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>device_id</td><td>T</td><td>String</td><td>Unique ID of the device.</td><td>Get it from the API /api/v1/developer/devices</td></tr></table>

### Request Sample: Shell/cURL

```bash
curl --location 'https://192.168.1.1:12445/api/v1/developer/devices/942a6f4247b2/settings' \
--header 'Authorization: Bearer bphw1H4jw7q9uQ751PN3Nw' 
```

### Response Body

<table><tr><td>Parameter</td><td>Type</td><td>Description</td></tr><tr><td>nfc</td><td>Object</td><td>NFC access method setting.</td></tr><tr><td>nfc.enabled</td><td>String</td><td>Indicates whether the NFC access method is enabled ("true" or "false").</td></tr><tr><td>bt_tap</td><td>Object</td><td>Mobile Tap (via Bluetooth) access method setting.</td></tr><tr><td>bt_tap.enabled</td><td>String</td><td>Indicates whether Mobile Tap is enabled ("true" or "false").</td></tr><tr><td>bt_button</td><td>Object</td><td>Mobile Unlock (via Bluetooth) access method setting.</td></tr><tr><td>bt_button.enabled</td><td>String</td><td>Indicates whether Mobile Unlock is enabled ("true" or "false").</td></tr><tr><td>bt_shake</td><td>Object</td><td>Mobile Shake (via Bluetooth) access method setting.</td></tr><tr><td>bt_shake.enabled</td><td>String</td><td>Indicates whether Mobile Shake is enabled ("true" or "false").</td></tr><tr><td>mobile_wave</td><td>Object</td><td>Mobile Wave access method setting.</td></tr><tr><td>mobile_wave.enabled</td><td>String</td><td>Indicates whether Mobile Wave is enabled ("true" or "false").</td></tr><tr><td>pin_code</td><td>Object</td><td>PIN access method setting.</td></tr><tr><td>pin_code.enabled</td><td>String</td><td>Indicates whether PIN is enabled ("true" or "false").</td></tr><tr><td>pin_code.pin_code_shuffle</td><td>String</td><td>Determine whether PIN shuffle is enabled ("true" or "false").</td></tr><tr><td>face</td><td>Object</td><td>Face Unlock access method setting.</td></tr><tr><td>face.enabled</td><td>String</td><td>Determine whether Face Unlock is enabled ("true" or "false").</td></tr><tr><td>face.anti_spoofing_level</td><td>String</td><td>enum anti_spoofing_level {high, medium, no} Anti-spoofing security level for Face Unlock.</td></tr><tr><td>face.detect_distance</td><td>String</td><td>enum detect_distance {near, medium, far} Face Unlock detection distance setting.</td></tr><tr><td>wave</td><td>Object</td><td>Hand Wave access method setting.</td></tr><tr><td>wave.enabled</td><td>String</td><td>Indicates whether Hand Wave is enabled ("true" or "false").</td></tr><tr><td>qr_code</td><td>Object</td><td>QR code access method setting.</td></tr><tr><td>qr_code.enabled</td><td>String</td><td>Indicates whether QR code is enabled ("true" or "false").</td></tr><tr><td>touch_pass</td><td>Object</td><td>Touch Pass access method setting.</td></tr><tr><td>touch_pass.enabled</td><td>String</td><td>Indicates whether Touch Pass is enabled ("true" or "false").</td></tr></table>

### Response Sample

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

## Update Access Device's Access Method Settings

This API allows you to update the access method settings of an Access device.

| Request URL | `/api/v1/developer/devices/:device_id/settings` |
| :--- | :--- |
| Permission Key | `edit:device` |
| Method | `PUT` |
| UniFi Access Requirement | Version 3.3.10 or later |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Bearer Token required for authentication and access control.</td></tr><tr><td>Content-Type</td><td>T</td><td>String</td><td>Must be application/json.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>device_id</td><td>T</td><td>String</td><td>Unique ID of the device.</td><td>Get it from the API /api/v1/developer/devices</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td>How to Get It?</td></tr><tr><td>nfc</td><td>F</td><td>Object</td><td>NFC access method setting.</td><td></td><td></td></tr><tr><td>nfc.enabled</td><td>F</td><td>String</td><td>Indicates whether the NFC access method is enabled ("true" or "false").</td><td>"true"</td><td></td></tr><tr><td>bt_tap</td><td>F</td><td>Object</td><td>Mobile Tap (via Bluetooth) access method setting.</td><td></td><td></td></tr><tr><td>bt_tap.enabled</td><td>F</td><td>String</td><td>Indicates whether Mobile Tap is enabled ("true" or "false").</td><td>"true"</td><td></td></tr><tr><td>bt_button</td><td>F</td><td>Object</td><td>Mobile Unlock (via Bluetooth) access method setting.</td><td></td><td></td></tr><tr><td>bt_button.enabled</td><td>F</td><td>String</td><td>Indicates whether Mobile Unlock is enabled ("true" or "false").</td><td>"true"</td><td></td></tr><tr><td>bt_shake</td><td>F</td><td>Object</td><td>Mobile Shake (via Bluetooth) access method setting.</td><td></td><td></td></tr><tr><td>bt_shake.enabled</td><td>F</td><td>String</td><td>Indicates whether Mobile Shake is enabled ("true" or "false").</td><td>"false"</td><td></td></tr><tr><td>mobile_wave</td><td>F</td><td>Object</td><td>Mobile Wave access method setting.</td><td></td><td></td></tr><tr><td>mobile_wave.enabled</td><td>F</td><td>String</td><td>Indicates whether Mobile Wave is enabled ("true" or "false").</td><td>"true"</td><td></td></tr><tr><td>pin_code</td><td>F</td><td>Object</td><td>PIN access method setting.</td><td></td><td></td></tr><tr><td>pin_code.enabled</td><td>F</td><td>String</td><td>Indicates whether PIN is enabled ("true" or "false").</td><td>"true"</td><td></td></tr><tr><td>pin_code.pin_code_shuffle</td><td>F</td><td>String</td><td>Indicates whether PIN shuffle is enabled ("true" or "false").</td><td>"false"</td><td></td></tr><tr><td>face</td><td>F</td><td>Object</td><td>Face Unlock access method setting.</td><td></td><td></td></tr><tr><td>face.enabled</td><td>F</td><td>String</td><td>Indicates whether Face Unlock is enabled ("true" or "false").</td><td>"true"</td><td></td></tr><tr><td>face.anti_spoofing_level</td><td>F</td><td>String</td><td>enum anti spoofing_level {high, medium, no} Anti spoofing security level for Face Unlock.</td><td>"medium"</td><td></td></tr><tr><td>face.detect_distance</td><td>F</td><td>String</td><td>enum detect_distance {near, medium, far} Face Unlock detection distance setting.</td><td>"medium"</td><td></td></tr><tr><td>wave</td><td>F</td><td>Object</td><td>Hand Wave access method setting.</td><td></td><td></td></tr><tr><td>wave.enabled</td><td>F</td><td>String</td><td>Indicates whether Hand Wave is enabled ("true" or "false").</td><td>"false"</td><td></td></tr><tr><td>qr_code</td><td>F</td><td>Object</td><td>QR code access method setting.</td><td></td><td></td></tr><tr><td>qr_code.enabled</td><td>F</td><td>String</td><td>Indicates whether QR code is enabled ("true" or "false").</td><td>"true"</td><td></td></tr><tr><td>touch_pass</td><td>F</td><td>Object</td><td>Touch Pass access method setting.</td><td></td><td></td></tr><tr><td>touch_pass.enabled</td><td>F</td><td>String</td><td>Indicates whether Touch Pass is enabled ("true" or "false").</td><td>"true"</td><td></td></tr></table>

NOTE: pin_code.pin_code_shuffle setting only takes effect when pin_code.enabled is set to "true" .

NOTE: face.anti_spoofing_level and face.detect_distance settings only take effect when face.enabled is set to "true" .

NOTE: anti_spoofing_level and detect_distance must use valid combinations to adjust Face Unlock sensitivity. The following combinations are supported: no/far , no/medium , medium/near , high/near . Only these combinations will take effect.

### Request Sample: Shell/cURL

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

### Response Sample

```json
{
  "code": "SUCCESS",
  "data": "success",
  "msg": "success"
}
```

## Trigger Doorbells

This API allows you to trigger the doorbell on an Intercom or Reader Pro.

| Request URL | `/api/v1/developer/devices/:device_id/doorbell` |
| :--- | :--- |
| Permission Key | `edit:device` |
| Method | `POST` |
| UniFi Access Requirement | Version 4.0.10 or later |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Bearer Token required for authentication and access control.</td></tr><tr><td>Content-Type</td><td>T</td><td>String</td><td>Must be application/json.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>device_id</td><td>T</td><td>String</td><td>Unique ID of the reader.</td><td>Get it from the API /api/v1/developer/devices</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>room_name</td><td>T</td><td>String</td><td>Specifies the Intercom&#x27;s directory name to trigger the doorbell. Use empty string to ring the default doorbell.</td><td>&quot;intercom directory name&quot;</td></tr><tr><td>cancel</td><td>F</td><td>Boolean</td><td>If set to true, cancels the previous doorbell if it&#x27;s still ringing.</td><td>false</td></tr></table>

> **Note (verified against live API):** `room_name` is required — omitting it or sending an empty body returns `CODE_PARAMS_INVALID`. An empty string `""` is accepted and rings the default doorbell.

### Request Sample: Shell/cURL

```yaml
curl --location 'https://192.168.1.1:12445/api/v1/developer/devices/788a20c002c7/doorbell' \
--header 'Authorization: Bearer qw8wle29QpEiUuRzdraOdoLQirvukxPT' \
--header 'Content-Type: application/json' \
--data '{ "room_name": "intercom directory name", "cancel": true }' 
```

### Response Sample

```json
{
  "code": "SUCCESS",
  "data": "success",
  "msg": "success"
}
```
