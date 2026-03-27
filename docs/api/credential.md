# Credential

The APIs here are designed for managing PIN codes, NFC cards, and other related credentials.

## Generate PIN Code

This API enables you to generate a PIN code. A PIN code can be assigned to a visitor or user, and once assigned, they can use it to unlock doors.

| Request URL | `/api/v1/developer/credentials/pin_codes` |
| :--- | :--- |
| Permission Key | `view:credential` |
| Method | `POST` |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Related API</td><td>Purpose</td></tr><tr><td>data</td><td>T</td><td>String</td><td>PIN code</td><td>/api/v1/developer/users; /api/v1/developer/visitors</td><td>Assign the PIN code to the created user or visitor.</td></tr></table>

### Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl --location --request POST '{host}/api/v1/developer/credentials/pin_codes'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'Content-Type: application/json'  
--data ''  
--insecure 
```

### Response Sample

```json
{
  "code": "SUCCESS",
  "data": "67203419",
  "msg": "success"
}
```

## Enroll NFC Card

Wake up a UA reader and create a session to enroll an NFC card.

| Request URL | `/api/v1/developer/credentials/nfc_cards/sessions` |
| :--- | :--- |
| Permission Key | `edit:credential` |
| Method | `POST` |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>device_id</td><td>T</td><td>String</td><td>Identity ID of the device.</td><td>Get it from the API /api/v1/developer/devices.</td></tr><tr><td>reset_ua_card</td><td>F</td><td>Boolean</td><td></td><td>This option allows you to reset an NFC card already enrolled at another site.</td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Related API</td><td>Purpose</td></tr><tr><td>session_id</td><td>T</td><td>String</td><td>The session for enrolling an NFC card.</td><td>#6.3 /api/v1/developer/credentials/nfc_cards/sections/{session_id}</td><td>NFC card polling result.</td></tr></table>

### Request Sample

```bash
curl '{host}/api/v1/developer/credentials/nfc_cards sessions'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--data-raw '{"device_id": "0418d6a2bb7a", "reset_ua_card": false}'  
--insecure 
```

### Response Sample

```json
{
  "code": "SUCCESS",
  "msg": "success",
  "data": {
    "session_id": "e8a97c52-6676-4c48-8589-bd518afc4094"
  }
}
```

## Fetch NFC Card Enrollment Status

This API enables you to poll a UA reader to fetch the NFC card enrollment status and the generated card tokens.

| Request URL | `/api/v1/developer/credentials/nfc_cards/sessions/:id` |
| :--- | :--- |
| Permission Key | `edit:credential` |
| Method | `GET` |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Related API</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>The ID of the session #6.2.</td><td>/api/v1/developer/users; /api/v1/developer/visitors</td><td>Get session id from the API #6.2</td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Related API</td><td>Purpose</td></tr><tr><td>token</td><td>T</td><td>String</td><td>Unique NFC card token.</td><td>/api/v1/developer/users; /api/v1/developer/visitors</td><td>The generated card token is used to bind to a user or visitor.</td></tr><tr><td>card_id</td><td>T</td><td>String</td><td>Display ID of the NFC card.</td><td></td><td></td></tr></table>

```bash
GET /api/v1/developer/credentials/nfc_cards/sections/e8a97c52-6676-4c48-8589-bd518afc4094 
```

### Response Sample
```json
{
  "code": "SUCCESS",
  "msg": "success",
  "data": {
    "card_id": "014A3151",
    "token": "821f90b262e90c5c0fbcdf3d6d2f3b94cc015d6e8104ab4fb96e4c8b8e90cb7"
  }
}
```

## Remove a Session Created for NFC Card Enrollment

This API enables you to remove a session created for enrolling an NFC card.

| Request URL | `/api/v1/developer/credentials/nfc_cards/sessions/:id` |
| :--- | :--- |
| Permission Key | `edit:credential` |
| Method | `DELETE` |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Related API</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>The ID of the session #6.2.</td><td>/api/v1/developer/users; /api/v1/developer/visitors</td><td>Get session id from the API #6.2</td></tr></table>

### Request Sample

```
DELETE /api/v1/developer/credentials/nfc_cards/sessions/e8a97c52-6676-4c48-8589-bd518afc4094
```

```json
{
  "code": "SUCCESS",
  "msg": "success",
  "data": "success"
}
```

## Flowchart for NFC Card Enrollment

enroll-nfc-card

## NFC Card Schemas

<table><tr><td>Parameter</td><td>Type</td><td>Description</td></tr><tr><td>token</td><td>String</td><td>Identity token of the NFC card.</td></tr><tr><td>display_id</td><td>String</td><td>Display ID of the NFC card.</td></tr><tr><td>status</td><td>String</td><td>Status of the NFC card. enum status
{assigned, pending, disable, deleted, loss}</td></tr><tr><td>alias</td><td>String</td><td>Preferred name of the NFC card.</td></tr><tr><td>card_type</td><td>String</td><td>Type of the NFC card.</td></tr><tr><td>user_id</td><td>String</td><td>Owner ID of the NFC card.</td></tr><tr><td>user_type</td><td>String</td><td>Type of the owner. enum user_type {USER,VISITOR}</td></tr><tr><td>user</td><td>Object</td><td>Owner of the NFC card.</td></tr><tr><td>user.id</td><td>String</td><td>Identity ID of the user.</td></tr><tr><td>user.first_name</td><td>String</td><td>First name of the user.</td></tr><tr><td>user.last_name</td><td>String</td><td>Last name of the user.</td></tr><tr><td>user.name</td><td>String</td><td>Full name of the user.</td></tr></table>

## Fetch NFC Card

This API allows you to fetch NFC card details.

| Request URL | `/api/v1/developer/credentials/nfc_cards/tokens/:token` |
| :--- | :--- |
| Permission Key | `view:credential` |
| Method | `GET` |
| UniFi Access Requirement | Version 1.22.16 or later |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td>How to Get It?</td></tr><tr><td>token</td><td>T</td><td>String</td><td>Token of the NFC card.</td><td>821f90b262e90c5c0fbcdfd3d6d2f3b94cc015d6e8104ab4fb96e4c8b8e90cb7</td><td>Get it from the API #6.3
#6.8</td></tr></table>

### Response Body

Schemas: NFC Card Schemas

### Response Sample

```json
{
  "code": "SUCCESS",
  "data": {
    "alias": "",
    "card_type": "ua_card",
    "display_id": "100005",
    "note": "100005",
    "status": "assigned",
    "token": "f77d69b08eaf5eb5d647ac1a0a73580f1b27494b345f40f54fa022a8741fa15c",
    "user": {
      "avatar": "",
      "first_name": "H",
      "id": "e0051e08-c4d5-43db-87c8-a9b19cb66513",
      "last_name": "L",
      "name": "H L"
    },
    "user_id": "e0051e08-c4d5-43db-87c8-a9b19cb66513",
    "user_type": "USER"
  },
  "msg": "success"
}
```

### Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl -XGET
'{host}/api/v1/developer/credentials/nfc_cards/tokens/f77d69b08eaf5eb5d647ac1a0a73580f1b27
494b345f40f54fa022a8741fa15c'
-H 'Authorization: Bearer wHFmHR*****KD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--insecure 
```

## Fetch All NFC Cards

This API allows you to fetch all NFC cards.

| Request URL | `/api/v1/developer/credentials/nfc_cards/tokens` |
| :--- | :--- |
| Permission Key | `view:credential` |
| Method | `GET` |
| UniFi Access Requirement | Version 1.22.16 or later |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Query Parameters

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>page_num</td><td>F</td><td>String</td><td>Current page number in the pagination.</td><td>1</td></tr><tr><td>page_size</td><td>F</td><td>String</td><td>Number of users per page.</td><td>25</td></tr></table>

### Response Body

Schemas: NFC Card Schemas

### Response Sample

```json
{
  "code": "SUCCESS",
  "data": [
    {
      "alias": "",
      "card_type": "ua_card",
      "display_id": "100004",
      "note": "100004",
      "status": "assigned",
      "token": "9e24cdfafebeb63e58fd02c5f67732b478948e5793d31124239597d9a86b30dc4",
      "user": {
        "avatar": "",
        "first_name": "H",
        "id": "e0051e08-c4d5-43db-87c8-a9b19cb66513",
        "last_name": "L",
        "name": "H L"
      },
      "user_id": "e0051e08-c4d5-43db-87c8-a9b19cb66513",
      "user_type": "USER"
    },
    {
      "alias": "F77D69B03",
      "card_type": "ua_card",
      "display_id": "100005",
      "note": "100005",
      "status": "assigned",
      "token": "f77d69b08eaf5eb5d647ac1a0a73580f1b27494b345f40f54fa022a8741fa15c",
      "user": {
        "avatar": "",
        "first_name": "H2",
        "id": "34dc90a7-409f-4bf8-a5a8-1c59535a21b9",
        "last_name": "L",
        "name": "H2 L"
      },
      "user_id": "34dc90a7-409f-4bf8-a5a8-1c59535a21b9",
      "user_type": "VISITOR"
    }
  ],
  "msg": "success",
  "pagination": {
    "page_num": 1,
    "page_size": 2,
    "total": 2
  }
}
```

### Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/api/v1/developer/credentials/nfc_cards/tokens?page_num=1&page_size=12' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--insecure
```

## Delete NFC Card

This API allows you to delete an NFC card.

| Request URL | `/api/v1/developer/credentials/nfc_cards/tokens/:token` |
| :--- | :--- |
| Permission Key | `edit:credential` |
| Method | `DELETE` |
| UniFi Access Requirement | Version 1.22.16 or later |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td>How to Get It?</td></tr><tr><td>token</td><td>T</td><td>String</td><td>Token of the NFC card.</td><td>821f90b262e90c5c0fbcdf3d6d2f3b94cc015d6e8104ab4fb96e4c8b8e90cb7</td><td>Get it from the API #6.3 #6.8</td></tr></table>

### Response Sample
```json
{
  "code": "SUCCESS",
  "data": "success",
  "msg": "success"
}
```

### Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl -XDELETE
'{host}/api/v1/developer/credentials/nfc_cards/tokens/f77d69b08eaf5eb5d647ac1a0a73580f1b27
494b345f40f54fa022a8741fa15c'
-H 'Authorization: Bearer wHFmHR*****KD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--insecure 
```

## Update NFC Card

This API allows you to update an NFC card.

| Request URL | `/api/v1/developer/credentials/nfc_cards/tokens/:token` |
| :--- | :--- |
| Permission Key | `edit:credential` |
| Method | `PUT` |
| UniFi Access Requirement | Version 3.1.30 or later |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td>How to Get It?</td></tr><tr><td>token</td><td>T</td><td>String</td><td>Token of the NFC card.</td><td>821f90b262e90c5c0fbcdfd3d6d2f3b94cc015d6e8104ab4fb96e4c8b8e90cb7</td><td>Get it from the API #6.3
#6.8</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Related API</td><td>How to Get It?</td></tr><tr><td>alias</td><td>F</td><td>String</td><td>Alias of the NFC card.</td><td></td><td></td></tr></table>

### Response Sample

```json
{
  "code": "SUCCESS",
  "data": "success",
  "msg": "success"
}
```

### Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl -XPUT \
'{host}/api/v1/developer/credentials/nfc_cards/tokens/f77d69b08eaf5eb5d647ac1a0a73580f1b27494b345f40f54fa022a8741fa15c' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data '{
    "alias": "New Alias"
}' \
--insecure
```

## Touch Pass Schemas

<table><tr><td>Parameter</td><td>Type</td><td>Description</td></tr><tr><td>activated_at</td><td>Object</td><td>Timestamp when the credential is activated.</td></tr><tr><td>card_id</td><td>String</td><td>Identifier of the card.</td></tr><tr><td>card_name</td><td>String</td><td>Display name of the card.</td></tr><tr><td>expired_at</td><td>Object</td><td>Timestamp when the credential expires.</td></tr><tr><td>id</td><td>String</td><td>Unique identifier of the credential record.</td></tr><tr><td>last_activity</td><td>String</td><td>Timestamp of the last activity or usage.</td></tr><tr><td>status</td><td>String</td><td>enum status {ACTIVE, PENDING, SUSPENDED, INACTIVE, EXPIRED} Status of the Touch Pass.</td></tr><tr><td>user_avatar</td><td>String</td><td>URL to the user's avatar image.</td></tr><tr><td>user_email</td><td>String</td><td>Email address of the user.</td></tr><tr><td>user_id</td><td>String</td><td>Unique identifier of the user.</td></tr><tr><td>user_name</td><td>String</td><td>Full name of the user.</td></tr><tr><td>user_status</td><td>String</td><td>enum user_status {ACTIVE, PENDING, UNLINK} Status of the user account.</td></tr><tr><td>bundles</td><td>Array[Object]</td><td>List of mobile credential bundles assigned to the user.</td></tr><tr><td>bundles[].bundle_id</td><td>String</td><td>Unique identifier of the mobile credential bundle.</td></tr><tr><td>bundles[].bundle_status</td><td>String</td><td>enum bundle_status {ACTIVE, SUSPENDED} Status of the bundle.</td></tr><tr><td>bundles[].device_id</td><td>String</td><td>Identifier of the device linked to the bundle.</td></tr><tr><td>bundles[].device_name</td><td>String</td><td>Display name of the linked device.</td></tr><tr><td>bundles[].device_type</td><td>Integer</td><td>Code representing the device type.</td></tr><tr><td>bundles[].source</td><td>String</td><td>enum source {google, apple} Source platform of the mobile credential.</td></tr></table>

## Fetch the Touch Pass List

This API allows you to fetch a list of Touch Passes, filtered by status.

| Request URL | `/api/v1/developer/credentials/touch_passes` |
| :--- | :--- |
| Permission Key | `view:credential` |
| Method | `GET` |
| UniFi Access Requirement | Version 3.2.20 or later |
Note: If user_status is UNLINK , it indicates the associated user is no longer linked (i.e., the user is

considered lost or removed from the system).

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Query Parameters

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>page_num</td><td>F</td><td>String</td><td>Current page number in the pagination.</td><td>1</td></tr><tr><td>page_size</td><td>F</td><td>String</td><td>Number of Touch Passes per page.</td><td>10</td></tr><tr><td>status</td><td>F</td><td>String</td><td>enum status {ACTIVE, PENDING, SUSPENDED, INACTIVE} Filter results by pass status.</td><td>PENDING</td></tr></table>

### Response Body

Schemas: Touch Pass Schemas

### Response Sample

```json
{
  "code": "SUCCESS",
  "data": [
    {
      "bundles": [],
      "card_id": "F8AD-3A41-787D-4D30",
      "card_name": "",
      "id": "31fa3c4e-4a42-4021-a3f9-6ae08610cf32",
      "last_activity": "2025-04-03T07:29:13+01:00",
      "status": "PENDING",
      "user_avatar": "https://****.svc.ui.com/186b07b1-fa13-49b5-8954-399d1b9c5285",
      "user_email": "example@ui.com",
      "user_id": "472cabd2-0634-4e85-9e8d-5a73b500516a",
      "user_name": "Example Name",
      "user_status": "ACTIVE"
    },
    {
      "bundles": [],
      "card_id": "057B-D703-0C6D-4AC9",
      "card_name": "",
      "id": "0e297aea-2b66-434c-a3bc-4f26314ed509",
      "last_activity": "2025-04-03T07:29:13+01:00",
      "status": "PENDING",
      "user_avatar": "https://****.svc.ui.com/9c11e195-ad37-4d79-955d-4c07645aeeda",
      "user_email": "example@ui.com",
      "user_id": "2b96d25e-f4be-4383-9b90-73741a985ef1",
      "user_name": "test name",
      "user_status": "ACTIVE"
    },
    {
      "bundles": [],
      "card_id": "DDEA-906E-DBAF-49A1",
      "card_name": "",
      "id": "ff6abef9-ca97-4aa6-b6a8-e07c6896d541",
      "last_activity": "2025-04-03T07:29:13+01:00",
      "status": "PENDING",
      "user_avatar": "https://****.svc.ui.com/e1392d90-9973-4e40-AA83-02edb8ef1a73",
      "user_email": "example@ui.com",
      "user_id": "c16941d1-a4c0-429e-8960-9cf126b96878",
      "user_name": "Example Name",
      "user_status": "ACTIVE"
    }
  ],
  "msg": "success",
  "pagination": {
    "page_num": 1,
    "page_size": 3,
    "total": 3
  }
}
```

### Request Sample

```bash
curl --location --request GET
'https://192.168.1.1:12445/api/v1/developer/credentials/touch_passes?
page_num=1&page_size=10&status=PENDING'
--header 'Authorization: Bearer wHFmHR*****kD6wHg'
--header 'Content-Type: application/json' \
--insecure 
```

## Search Touch Pass

This API allows you to search for Touch Passes using filter conditions, such as card ID.

| Request URL | `/api/v1/developer/credentials/touch_passes/search` |
| :--- | :--- |
| Permission Key | `view:credential` |
| Method | `GET` |
| UniFi Access Requirement | Version 3.2.20 or later |
Note: If user_status is UNLINK , it indicates the associated user is no longer linked (i.e., the user is considered lost or removed from the system).

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Query Parameters

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>condition</td><td>T</td><td>String</td><td>Search condition (e.g., card_id, user_name)</td><td>057B, Example Name</td></tr></table>

### Response Body

Schemas: Touch Pass Schemas

### Response Sample

```json
{
  "code": "SUCCESS",
  "data": [
    {
      "bundles": [],
      "card_id": "057B-D703-0C6D-4AC9",
      "card_name": "",
      "id": "0e297aea-2b66-434c-a3bc-4f26314ed509",
      "last_activity": "2025-04-03T07:29:13+01:00",
      "status": "PENDING",
      "user_avatar": "https://******.svc.u1.com/9c11e195-ad37-4d79-955d-4c07645aeeda",
      "user_email": "example@ui.com",
      "user_id": "2b96d25e-f4be-4383-9b90-73741a985ef1",
      "user_name": "Test Name",
      "user_status": "ACTIVE"
    }
  ],
  "msg": "success"
}
```

### Request Sample

```bash
curl --location --request GET
'https://192.168.1.1:12445/api/v1/developer/credentials/touch_passes/search?condition=057B'
\--header 'Authorization: Bearer wHFmHR*****kD6wHg' \
--header 'Content-Type: application/json' \
--insecure 
```

## Fetch All Assignable Touch Passes

This API allows you to fetch all suspended or inactive Touch Passes that can be reassigned.

| Request URL | `/api/v1/developer/credentials/touch_passes/assignable` |
| :--- | :--- |
| Permission Key | `view:credential` |
| Method | `GET` |
| UniFi Access Requirement | Version 3.2.20 or later |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Type</td><td>Description</td></tr><tr><td>id</td><td>String</td><td>Unique identifier of the Touch Pass.</td></tr><tr><td>card_id</td><td>String</td><td>Card ID associated with the Touch Pass.</td></tr><tr><td>card_name</td><td>String</td><td>Optional name of the card.</td></tr><tr><td>last_activity</td><td>String</td><td>Timestamp of the last recorded activity.</td></tr><tr><td>status</td><td>String</td><td>enum status {SUSPENDED, INACTIVE} Status of the Touch Pass.</td></tr><tr><td>user_id</td><td>String</td><td>Unique identifier of the user (empty if unassigned).</td></tr><tr><td>user_name</td><td>String</td><td>Full name of the user (empty if unassigned).</td></tr><tr><td>user_email</td><td>String</td><td>Email of the user (empty if unassigned).</td></tr><tr><td>user_status</td><td>String</td><td>Status of the user (empty if unassigned).</td></tr><tr><td>user_avatar</td><td>String</td><td>URL to the user&#x27;s avatar (empty if unassigned).</td></tr><tr><td>bundles</td><td>Array</td><td>Reserved for future use (currently always empty).</td></tr></table>

### Response Sample

```json
{
  "code": "SUCCESS",
  "data": [
    {
      "bundles": [],
      "card_id": "0007-130C-4845-4A01",
      "card_name": "",
      "id": "2d75e424-6171-4e86-900b-AA696fb05893",
      "last_activity": "2025-04-09T13:40:28+08:00",
      "status": "INACTIVE",
      "user_avatar": "",
      "user_email": "",
      "user_id": "",
      "user_name": "",
      "user_status": ""
    },
    {
      "bundles": [],
      "card_id": "70A3-2FAD-181B-4CC9",
      "card_name": "",
      "id": "c83b69ff-1992-4e7f-9287-1e6a161adeea",
      "last_activity": "2025-04-09T13:40:28+08:00",
      "status": "INACTIVE",
      "user_avatar": "",
      "user_email": "",
      "user_id": "",
      "user_name": "",
      "user_status": ""
    }
  ],
  "msg": "success"
}
```

### Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl --location --request GET
'https://192.168.1.1:12445/api/v1/developer/credentials/touch_passes/assignable' \
--header 'Authorization: Bearer wHFmHR*****kD6wHg' \
--header 'Content-Type: application/json' \
--insecure 
```

## Update Touch Pass

This API allows you to update a Touch Pass's card name, modify its status ( ACTIVE / SUSPENDED ), and unbundle devices ( bundle_status: DISABLED ).

| Request URL | `/api/v1/developer/credentials/touch_passes/:id` |
| :--- | :--- |
| Permission Key | `edit:credential` |
| Method | `PUT` |
| UniFi Access Requirement | Version 3.2.20 or later |
Note: If user_status is UNLINK , it indicates the associated user is no longer linked (i.e., the user is considered lost or removed from the system).

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>ID of the Touch Pass to update.</td><td>1d64d2b8-a8b0-4c73-9d49-4922ad0cab9</td><td>Get it from API /api/v1/developer/credentials/touch_passes/search</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>card_name</td><td>F</td><td>String</td><td>Card name or alias.</td><td></td></tr><tr><td>status</td><td>F</td><td>String</td><td>enum status {ACTIVE, SUSPENDED} Card status.</td><td></td></tr><tr><td>bundles</td><td>F</td><td>Arrayobject</td><td>List of bundles to disable (remove). Each bundle object is required.</td><td>Get it from API /api/v1/developer/credentials/touch_passes/search</td></tr><tr><td>bundles[].bundle_id</td><td>T</td><td>String</td><td>ID of the bundle to be disabled.</td><td></td></tr><tr><td>bundles[].bundle_status</td><td>T</td><td>String</td><td>enum bundle_status {DISABLED} Support for unbundled devices.</td><td></td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Type</td><td>Description</td></tr><tr><td>activated_at</td><td>Object</td><td>Timestamp when the credential is activated.</td></tr><tr><td>card_id</td><td>String</td><td>Identifier of the card.</td></tr><tr><td>card_name</td><td>String</td><td>Display name of the card.</td></tr><tr><td>expired_at</td><td>Object</td><td>Timestamp when the credential expires.</td></tr><tr><td>id</td><td>String</td><td>Unique identifier of the credential record.</td></tr><tr><td>last_activity</td><td>String</td><td>Timestamp of the last activity or usage.</td></tr><tr><td>status</td><td>String</td><td>enum status {ACTIVE, PENDING, SUSPENDED, INACTIVE, EXPIRED} Status of the Touch Pass.</td></tr><tr><td>user_avatar</td><td>String</td><td>URL to the user's avatar image.</td></tr><tr><td>user_email</td><td>String</td><td>Email address of the user.</td></tr><tr><td>user_id</td><td>String</td><td>Unique identifier of the user.</td></tr><tr><td>user_name</td><td>String</td><td>Full name of the user.</td></tr><tr><td>user_status</td><td>String</td><td>enum user_status {ACTIVE, PENDING, UNLINK} Status of the user account.</td></tr><tr><td>bundles</td><td>Array[Object]</td><td>List of mobile credential bundles assigned to the user.</td></tr><tr><td>bundles[].bundle_id</td><td>String</td><td>Unique identifier of the mobile credential bundle.</td></tr><tr><td>bundles[].bundle_status</td><td>String</td><td>enum bundle_status {ACTIVE, SUSPENDED} Status of the bundle.</td></tr><tr><td>bundles[].device_id</td><td>String</td><td>Identifier of the device linked to the bundle.</td></tr><tr><td>bundles[].device_name</td><td>String</td><td>Display name of the linked device.</td></tr><tr><td>bundles[].device_type</td><td>Integer</td><td>Code representing the device type.</td></tr><tr><td>bundles[].source</td><td>String</td><td>enum source {google, apple} Source platform of the mobile credential.</td></tr></table>

### Response Sample

```json
{
  "code": "SUCCESS",
  "data": {
    "activated_at": {},
    "bundles": [],
    "card_id": "7880-C192-AF0E-4306",
    "card_name": "test",
    "expired_at": {},
    "id": "1d64d2b8-a8b0-4c73-9d49-4922ad0cacb9",
    "last_activity": "2025-04-09T17:58:18+08:00",
    "status": "SUSPENDED",
    "user_avatar": "",
    "user_email": "example@ui.com",
    "user_id": "1f57be2b-f721-4ea3-b1d1-626815b468f0",
    "user_name": "Test Name",
    "user_status": "ACTIVE"
  },
  "msg": "success"
}
```

### Request Sample

### Update Card Name & Update Touch Pass Status

**Update Card Name & Status**

```bash
curl --location --request PUT \
'https://192.168.1.1:12445/api/v1/developer/credentials/touch_passes/1d64d2b8-a8b0-4c73-9d49-4922ad0cab9' \
--header 'Authorization: Bearer wHFmHR*****kD6wHg' \
--header 'Content-Type: application/json' \
--data '{
    "card_name": "test",
    "status": "SUSPENDED"
}'
```

**Unbundle Devices**

```bash
curl --location --request PUT \
'https://192.168.1.1:12445/api/v1/developer/credentials/touch_passes/1d64d2b8-a8b0-4c73-9d49-4922ad0cacb9' \
--header 'Authorization: Bearer wHFmHR*****kD6wHg' \
--header 'Content-Type: application/json' \
--data '{
    "bundles": [
        {
            "bundle_id": "DAPLODe22212d0-a70e-4649-ae19-c0e745d65335",
            "bundle_status": "DISABLED"
        }
    ]
}'
```

## Fetch Touch Pass Details

This API retrieves detailed information about a specific Touch Pass using its ID.

| Request URL | `/api/v1/developer/credentials/touch_passes/:id` |
| :--- | :--- |
| Permission Key | `view:credential` |
| Method | `GET` |
| UniFi Access Requirement | Version 3.2.20 or later |
Note: If user_status is UNLINK , it indicates the associated user is no longer linked (i.e., the user is considered lost or removed from the system).

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>ID of the Touch Pass.</td><td>c83b69ff-1992-4e7f-9287-1e6a161adeea</td><td>Get it from API /api/v1/developer/credentials/touch_passes/search</td></tr></table>

### Response Sample
```json
{
  "code": "SUCCESS",
  "data": {
    "activated_at": {},
    "bundles": [
      {
        "bundle_id": "caf6bd5b-6b8d-409a-b500-977a0f02b181",
        "bundle_status": "ACTIVE",
        "device_id": "device-id-1",
        "device_name": "Test Android",
        "device_type": 20,
        "source": "google"
      }
    ],
    "card_id": "70A3-2FAD-181B-4CC9",
    "card_name": "",
    "expired_at": {},
    "id": "c83b69ff-1992-4e7f-9287-1e6a161adeea",
    "last_activity": "2025-04-09T17:49:20+08:00",
    "status": "ACTIVE",
    "user_avatar": "",
    "user_email": "example@ui.com",
    "user_id": "3e763e5d-6804-437d-ae8d-3fee74119b80",
    "user_name": "Example Name",
    "user_status": "ACTIVE"
  },
  "msg": "success"
}
```

### Request Sample

```bash
curl --location --request GET \
'https://192.168.1.1:12445/api/v1/developer/credentials/touch_passes/c83b69ff-1992-4e7f-9287-1e6a161adeea' \
--header 'Authorization: Bearer wHFmHR*****kD6wHg' \
--header 'Content-Type: application/json'
```

## Purchase Touch Passes

This API allows you to purchase new Touch Passes. Ensure a valid payment method is configured in the Access web application before using this API.

| Request URL | `/api/v1/developer/credentials/touch_passes` |
| :--- | :--- |

| Permission Key | `edit:credential` |
| :--- | :--- |
| Method | `POST` |
| UniFi Access Requirement | Version 3.2.20 or later |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>count</td><td>T</td><td>Int</td><td>Total number of Touch Passes to be purchased.</td><td>Manual input</td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Type</td><td>Description</td></tr><tr><td>id</td><td>String</td><td>ID of the newly purchased Touch Pass.</td></tr><tr><td>card_id</td><td>String</td><td>Card ID assigned to the pass.</td></tr><tr><td>card_name</td><td>String</td><td>Card alias or name. Initially empty.</td></tr><tr><td>status</td><td>String</td><td>Initial Touch Pass status after purchase (INACTIVE).</td></tr><tr><td>last_activity</td><td>String</td><td>Timestamp of the last activity or usage.</td></tr><tr><td>bundles</td><td>Array</td><td>Empty array by default.</td></tr><tr><td>user_id</td><td>String</td><td>Empty string; Touch Pass is not yet assigned to any user.</td></tr><tr><td>user_name</td><td>String</td><td>Empty string; Touch Pass is not yet assigned to any user.</td></tr><tr><td>user_email</td><td>String</td><td>Empty string; Touch Pass is not yet assigned to any user.</td></tr><tr><td>user_avatar</td><td>String</td><td>Empty string.</td></tr><tr><td>user_status</td><td>String</td><td>Empty string.</td></tr></table>

### Response Sample

```json
{
  "code": "SUCCESS",
  "data": {
    "bundles": [],
    "card_id": "F8AD-3A41-787D-4D30",
    "card_name": "",
    "id": "31fa3c4e-4a42-4021-a3f9-6ae08610cf32",
    "last_activity": "2025-04-03T10:28:42+01:00",
    "status": "INACTIVE",
    "user_avatar": "",
    "user_email": "",
    "user_id": "",
    "user_name": "",
    "user_status": ""
  },
  "msg": "success"
}
```

### Request Sample

```bash
curl --location 'https://192.168.1.1:12445/api/v1/developer/credentials/touch_passes' \
--header 'Authorization: Bearer wHFmHR*****kD6wHg' \
--header 'Content-Type: application/json' \
--data '{ "count": 2 }' 
```

## Download QR Code Image

This API allows you to download a QR code image by its ID.

| Request URL | `/api/v1/developer/credentials/qr_codes/download/:visitor_id` |
| :--- | :--- |
| Permission Key | `view:credential` |
| Method | `GET` |
| UniFi Access Requirement | Version 3.3.10 or later |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>visitor_id</td><td>T</td><td>String</td><td>ID of the visitor to be downloaded.</td><td>Get it from the API /api/v1/developer/visitors</td></tr></table>

### Request Sample: Shell/cURL

```bash
curl --location --request GET
'https://192.168.1.1:12445/api/v1/developer/credentials/qr_codes/download/15a90692-6f3b-4e1c-9886-bcd15e9c3f2d' \
--header 'Authorization: Bearer s4KgshBaoXTwXwFAHLPwDw' \
--header 'Content-Type: application/json' \
--output visitor_qr_code.png \
--insecure 
```

## Import Third-Party NFC Cards

This API allows you to import third-party NFC card IDs by uploading a CSV file into the Access system.

| Request URL | `/api/v1/developer/credentials/nfc_cards/import` |
| :--- | :--- |
| Permission Key | `edit:credential` |
| Method | `POST` |
| UniFi Access Requirement | Version 3.3.10 or later |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>file</td><td>T</td><td>File</td><td>A CSV file containing NFC IDs or optional aliases.</td></tr></table>

### CSV Format

```csv
068E2836, alias1  
068E2839, alias2  
068E2838, alias3 
```

NOTE: 068E2836 is an example NFC ID of a third-party card. NFC IDs are represented in uppercase hexadecimal. The alias field must be unique. Duplicate aliases will cause the import to fail. If the returned token is empty, it means the import has failed for that record.

### Request Sample: Shell/cURL

```bash
curl --location 'https://192.168.1.1:12445/api/v1/developer/credentials/nfc_cards/import' \
--header 'Authorization: Bearer NvrB7qunKOFi/HcIjUMF0w' \
--form 'file=@"/Documents/ufcs.csv'" 
```

### Response Sample

```json
{
  "code": "SUCCESS",
  "data": [
    {
      "alias": "alias1",
      "nfc_id": "068E2836",
      "token": "e0d473463b421f472f81baf0dbec7c066a5cca48bde4f7d40199d8aa15f9fc21"
    },
    {
      "alias": "alias2",
      "nfc_id": "068E2839",
      "token": "6d29a729b99fdf5c1e1138deafc4c29a7c8567d10e1b298300a33b7d1dd4f05c"
    },
    {
      "alias": "alias3",
      "nfc_id": "068E2838",
      "token": "082ff5a1d22c7488da657185d213979c987418416d8b99cd471346407d265130"
    }
  ],
  "msg": "success"
}
```
