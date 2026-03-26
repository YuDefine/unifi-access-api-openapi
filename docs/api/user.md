# User

The APIs here are designed for managing users, including handling their basic information and assigning NFC cards, PIN codes, and access policies to them.

## Schemas

<table><tr><td>Parameter</td><td>Type</td><td>Description</td></tr><tr><td>Id</td><td>String</td><td>Identity ID of the user.</td></tr><tr><td>first_name</td><td>String</td><td>First name of the user.</td></tr><tr><td>last_name</td><td>String</td><td>Last name of the user.</td></tr><tr><td>full_name</td><td>String</td><td>Full name of the user.</td></tr><tr><td>alias</td><td>String</td><td>Preferred name of the user.</td></tr><tr><td>user_email</td><td>String</td><td>Email of the user. UniFi Access Requirement: 1.22.16 or later</td></tr><tr><td>email_status</td><td>String</td><td>The status of the user's email.</td></tr><tr><td>phone</td><td>String</td><td>Contact phone number of the user.</td></tr><tr><td>employee_number</td><td>String</td><td>Employee number of the user.</td></tr><tr><td>onboard_time</td><td>Integer</td><td>User onboarding date.</td></tr><tr><td>nfc_cards</td><td>Array[Object]</td><td>Token associated with the bound NFC card.</td></tr><tr><td>nfc_cards[].id</td><td>String</td><td>Display ID of the NFC card.</td></tr><tr><td>nfc_cards[].token</td><td>String</td><td>Unique NFC card token.</td></tr><tr><td>license_plates[].id</td><td>String</td><td>Unique ID of the license plate.</td></tr><tr><td>license_plates[].credential</td><td>String</td><td>License plate number.</td></tr><tr><td>license_plates[].credential_type</td><td>String</td><td>Type of credential, should be "license".</td></tr><tr><td>license_plates[].credential_status</td><td>String</td><td>Status of the credential enum credential_status {active, deactivate}.</td></tr><tr><td>pin_code</td><td>Object</td><td>Token associated with the bound PIN code.</td></tr><tr><td>pin_code.token</td><td>String</td><td>The user's PIN hash code credential for unlocking a door.</td></tr><tr><td>access_policy_ids</td><td>Array&lt;String]</td><td>Collection of the access policy ID.</td></tr><tr><td>access_policies</td><td>Array[Object]</td><td>All policies assigned to the user.</td></tr><tr><td>status</td><td>String</td><td>enum status {ACTIVE, PENDING, DEACTIVATED} 
ACTIVE: The user account is in active status. 
PENDING: A new admin account has been invited by the SSO account, but the invitation has not been accepted. DEACTIVATED: The account has been deactivated.</td></tr><tr><td>touch_pass</td><td>Array[Object]</td><td>Touch Pass assigned to the user, A user can only be assigned one TouchPass.</td></tr></table>

## User Registration

This API allows you to register a new user.

Request URL: /api/v1/developer/users   
Permission Key: edit:user   
Method: POST

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td>How to Get It?</td></tr><tr><td>first_name</td><td>T</td><td>String</td><td>First name of the user.</td><td></td><td></td></tr><tr><td>last_name</td><td>T</td><td>String</td><td>Last name of the user.</td><td></td><td></td></tr><tr><td>user_email</td><td>F</td><td>String</td><td>Email of the user. UniFi Access Requirement: 1.22.16 or later</td><td></td><td></td></tr><tr><td>employee_number</td><td>F</td><td>String</td><td>Employee number of the user. Omit this parameter if it doesn&#x27;t need to be updated.</td><td></td><td></td></tr><tr><td>onboard_time</td><td>F</td><td>Integer</td><td>User onboarding date.</td><td>1689150139</td><td></td></tr></table>

### Response Body

*See Response Schema for full field definitions.*

### Response Sample

```json
{
  "code": "SUCCESS",
  "msg": "success",
  "data": {
    "first_name": "Fist Name",
    "last_name": "Last Name",
    "id": "37f2b996-c2c5-487b-aa22-8b453ff14a4b",
    "user_email": "example@*.com"
  }
}
```

### Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl '{host}/api/v1/developer/users'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--data-raw \
{
    "first_name":"H",
    "last_name":"L",
    "employee_number":"100000",
    "onboard_time":1689150139,
    "user_email":"example@*.com"
}'
--insecure 
```

## Update User

This API allows you to update user details.

Request URL: /api/v1/developer/users/:id   
Permission Key: edit:user   
Method: PUT

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user.</td><td>348e868e-534a-4ace-ba77-ce80394e31e3</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td>How to Get It?</td></tr><tr><td>first_name</td><td>F</td><td>String</td><td>First name of the user.</td><td></td><td></td></tr><tr><td>last_name</td><td>F</td><td>String</td><td>Last name of the user.</td><td></td><td></td></tr><tr><td>user_email</td><td>F</td><td>String</td><td>Email of the user. UniFi Access Requirement: 1.22.16 or later</td><td></td><td></td></tr><tr><td>employee_number</td><td>F</td><td>String</td><td>Employee number of the user.</td><td></td><td></td></tr><tr><td>onboard_time</td><td>F</td><td>Integer</td><td>User onboarding date.</td><td>1689150139</td><td></td></tr><tr><td>status</td><td>F</td><td>String</td><td>Status of the user.</td><td>"ACTIVE" "DEACTIVATED"</td><td></td></tr></table>

### Response Body

*See Response Schema for full field definitions.*

### Response Sample

```json
{
  "code": "SUCCESS",
  "data": null,
  "msg": "success"
}
```

### Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl -XPUT '{host}}/api/v1/developer/user'  
-H 'Authorization:Bearer wHFmHR*****kD6wHg'  
-H 'accept:application/json'  
-H 'content-type:application/json'  
--data-raw {'  
    "first_name":"H",  
    "last_name":"L",  
    "employee_number":"",  
    "user_email":"example@*.com",  
    "pin_code":"",  
    "onboard_time":1689150139,  
    "status":"ACTIVE"  
}  
--insecure 
```

## Fetch User

This API allows you to fetch user details.

Request URL: /api/v1/developer/users/:id   
Permission Key: view:user   
Method: GET

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user.</td><td>348e868e-534a-4ace-ba77-ce80394e31e3</td></tr></table>

### Query Parameters

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>expand[]</td><td>F</td><td>Boolean</td><td>Determine whether to return the access policies assigned to a user (Optional).</td><td>expand|=access_policy</td></tr></table>

### Response Body

*See Response Schema for full field definitions.*

### Response Sample

```json
{
    "code": "SUCCESS",
    "data": {
        "access_policies": [
            {
                "id": "edbc80df-3698-49fd-8b53-f1867f104947",
                "name": "test",
                "resources": [
                    {"id": "d5573467-d6b3-4e8f-8e48-8a322b91664a", "type": "door_group"},
                    {"id": "5c496423-6d25-4e4f-8cdf-95ad5135188a", "type": "door_group"},
                    {"id": "6ff875d2-af87-470b-9cb5-774c6596afc8", "type": "door"}
                ],
                "schedule_id": "73facd6c-839e-4521-a4f4-c07e1d44e748"
            }
        ],
        "access_policy_ids": ["edbc80df-3698-49fd-8b53-f1867f104947"],
        "employee_number": "",
        "first_name": "******",
        "id": "17d2f099-99df-429b-becb-1399a6937e5a",
        "last_name": "L",
        "user_email": "example@*.com",
        "touch_pass": {
            "activated_at": {},
            "bundles": [
                {
                    "bundle_id": "caf6bd5b-6b8d-409a-b500-977a0f02b181",
                    "bundle_status": "SUSPENDED",
                    "device_id": "device-id-1",
                    "device_name": "Example Android",
                    "device_type": 20,
                    "source": "google"
                }
            ],
            "card_id": "70A3-2FAD-181B-4CC9",
            "card_name": "Test",
            "expired_at": {},
            "id": "c83b69ff-1992-4e7f-9287-1e6a161adeea",
            "last_activity": "2025-04-10T00:46:20+08:00",
            "status": "SUSPENDED",
            "user_avatar": "",
            "user_email": "example@ui.com",
            "user_id": "3e763e5d-6804-437d-ae8d-3fee74119b80",
            "user_name": "Example Name",
            "user_status": "ACTIVE"
        },
        "nfc_cards": [
            {"id": "100001", "token": "d27822fc682b478dc637c6db01813e465174df6e54ca515d8427db623cfda1d0", "type": "ua_card"}
        ],
        "license_plates": [
            {"credential": "jq178", "credential_status": "active", "credential_type": "license", "id": "5cac1825-f5e9-410d-a32e-a1fb9fc83b92"}
        ],
        "onboard_time": 1689047588,
        "pin_code": {"token": "5f742ee4424e5a7dd265de3461009b9ebafa1fb9d6b15018842055cc0466ac56"},
        "status": "ACTIVE"
    },
    "msg": "success"
}
```

### Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/api/v1/developer/users/348e868e-534a-4ace-ba77-ce80394e31e3? expand[]=access_policy'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

## Fetch All Users

This API allows you to fetch all users.

Request URL: /api/v1/developer/users   
Permission Key: view:user   
Method: GET

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Query Parameters

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>expand[]</td><td>F</td><td>Boolean</td><td>Determine whether to return the access policies assigned to a user (Optional).</td><td>expand|=access_policy</td></tr><tr><td>page_num</td><td>F</td><td>String</td><td>Current page number in the pagination.</td><td>1</td></tr><tr><td>page_size</td><td>F</td><td>String</td><td>Number of users per page.</td><td>25</td></tr></table>

### Response Sample

```json
{
"code": "SUCCESS",
"data": [ 
{
"access_policies": [ 
{
"id": "73f15cab-c725-4a76-a419-a4026d131e96",
"name": "Default Admin Policy",
"resources": [ 
{
"id": "d5573467-d6b3-4e8f-8e48-8a322b91664a",
"type": "door_group"
},
{
"id": "5c496423-6d25-4e4f-8cdf-95ad5135188a",
"type": "door_group"
}
],
"schedule_id": "73facd6c-839e-4521-a4f4-c07e1d44e748"
}
],
"access_policy_ids": [ 
"73f15cab-c725-4a76-a419-a4026d131e96"
],
"employee_number": "", 
"first_name": "UniFi",
"id": "83569f9b-0096-48ab-b2e4-5c9a598568a8",
"last_name": "User",
"touch_pass": { 
"activated_at": {}, 
"bundles": [ 
{
"bundle_id": "caf6bd5b-6b8d-409a-b500-977a0f02b181",
"bundle_status": "SUSPENDED",
"device_id": "device-id-1",
"device_name": "Example Android",
"device_type": 20,
"source": "google"
}
],
"card_id": "70A3-2FAD-181B-4CC9",
"card_name": "Test",
"expired_at": {},
"id": "c83b69ff-1992-4e7f-9287-1e6a161adeea",
"last_activity": "2025-04-10T00:46:20+08:00",
"status": "SUSPENDED", 
"user_avatar": "",
"user_email": "example@ui.com",
"user_id": "3e763e5d-6804-437d-ae8d-3fee74119b80",
"user_name": "Example Name",
"user_status": "ACTIVE"
},
"user_email": "",
"nfc_cards": [],
"license_plates": [
    {
        "credential": "jq178",
        "credential_status": "active",
        "credential_type": "license",
        "id": "5cac1825-f5e9-410d-a32e-a1fb9fc83b92"
    }
],
"onboard_time": 0,
"pin_code": null,
"status": "ACTIVE"
},
{
"access_policies": [
    {
        "id": "c1682fb8-ef6e-4fe2-aa8a-b6f29df753ff",
        "name": "policy_1690272668035",
        "resources": [
            {
                "id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
                "type": "door"
            }
        ],
        "schedule_id": "0616ef06-b807-4372-9ae0-7a87e12e4019"
    }
],
"access_policy_ids": [
    "c1682fb8-ef6e-4fe2-aa8a-b6f29df753ff"
],
"employee_number": "",
"first_name": "Tttttt",
"id": "3a3ba57a-796e-46e0-b8f3-478bb70a114d",
"last_name": "Tttt",
"nfc_cards": [],
"onboard_time": 1689048000,
"pin_code": null,
"status": "ACTIVE"
}
],
"msg": "success",
"pagination": {
    "page_num": 1,
    "page_size": 97,
    "total": 97
}
}
```

### Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/api/v1/developer/users?page_num=1&page_size=25&expand[]=access_policy'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

## Assign Access Policy to User

Request URL: /api/v1/developer/users/:id/access_policies   
Permission Key: edit:user   
Method: PUT

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user.</td><td>Get it from the API /api/v1/developer/users</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>access_policy_ids</td><td>T</td><td>Array:String</td><td>Collection of multiple policy IDs.</td><td>Get it from the API /api/v1/developer/access_policies</td></tr></table>

### Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
### Assign access policies to user
curl -XPUT '{host}/api/v1/developer/users/38857332-7a5e-4bb6-8837-651b2a47cea5/access_policies' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data-raw '{ "access_policy_ids": ["03895c7f-9f53-4334-812b-5db9c122c109", "3b6bcb0c-7498-44cf-8615-00a96d824cbe"] }' \
--insecure
```

```bash
### Remove all access policies from user
curl -XPUT '{host}/api/v1/developer/users/38857332-7a5e-4bb6-8837-651b2a47cea5/access_policies' \
-H 'Authorization: Bearer wHFmHR******kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data-raw '{ "access_policy_ids": [] }' \
--insecure
```

### Response Sample

```json
{
  "code": "SUCCESS",
  "msg": "success"
}
```

## Assign NFC Card to User

Request URL: /api/v1/developer/users/:id/nfc_cards   
Permission Key: edit:user   
Method: PUT

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user.</td><td>Get it from the API /api/v1/developer/users</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>token</td><td>T</td><td>String</td><td>Token of the NFC card.</td><td>Get it from the API /api/v1/developer/nfc_cards sessions/{session_id}</td></tr><tr><td>force_add</td><td>F</td><td>Boolean</td><td>Determine whether to overwrite an NFC card that has already been assigned.</td><td>true or false</td></tr></table>

### Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XPUT '{host}/api/v1/developer/users/17d2f099-99df-429b-becb-1399a6937e5a/nfc_cards'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--data-raw {'  
    "token": "d27822fc682b478dc637c6db01813e465174df6e54ca515d8427db623cfda1d0",  
    "force_add": true} 
```

### Response Sample

```json
{
  "code": "SUCCESS",
  "msg": "success"
}
```

## Unassign NFC Card from User

Request URL: /api/v1/developer/users/:id/nfc_cards/delete   
Permission Key: edit:user   
Method: PUT

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user.</td><td>Get it from the API /api/v1/developer/users</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>token</td><td>T</td><td>String</td><td>Token of the NFC card.</td><td>Get it from the API /api/v1/developer/users</td></tr></table>

### Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XDELETE '{host}/api/v1/developer/users/17d2f099-99df-429b-becb-1399a6937e5a/nfc_cards/delete'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
-d '{  
    "token": "d27822fc682b478dc637c6db01813e465174df6e54ca515d8427db623cfda1d0"  
}  
--insecure 
```

### Response Sample

```json
{
  "code": "SUCCESS",
  "msg": "success"
}
```

## Assign PIN Code to User

Request URL: /api/v1/developer/users/:id/pin_codes   
Permission Key: edit:user   
Method: PUT

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user.</td><td>Get it from the API /api/v1/developer/users</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>pin_code</td><td>T</td><td>String</td><td>Generate a PIN code for the user to unlock doors.</td><td>Get it from the API /api/v1/developer/pin_codes</td></tr></table>

### Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XPUT '{host}/api/v1/developer/users/17d2f099-99df-429b-becb-1399a6937e5a/pin_codes'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--data-raw {'  
    "pin_code": "57301208"  
}  
--insecure 
```

### Response Sample

```json
{
  "code": "SUCCESS",
  "msg": "success"
}
```

## Unassign PIN Code from User

Request URL: /api/v1/developer/users/:id/pin_codes   
Permission Key: edit:user   
Method: DELETE

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user.</td><td>Get it from the API /api/v1/developer/users</td></tr></table>

### Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XDELETE '{host}/api/v1/developer/users/17d2f099-99df-429b-becb-1399a6937e5a/pin_codes'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

### Response Sample

```json
{
  "code": "SUCCESS",
  "msg": "success"
}
```

## Create User Group

Request URL: /api/v1/developer/user_groups   
Permission Key: edit:user   
Method: POST   
UniFi Access Requirement: 2.2.6 or later   
API version: v1

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the group.</td><td></td></tr><tr><td>up_id</td><td>F</td><td>String</td><td>Parent group ID
(Optional)</td><td>Get it from the API
/api/v1/developer/user_groups</td></tr></table>

### Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XPOST '{host}/api/v1/developer/user_groups'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--data-raw {'  
    "name": "Group Name",  
    "up_id": "013d05d3-7262-4908-ba69-badbbbfb8f5a6"  
}  
--insecure 
```

### Response Sample

```json
{
  "code": "SUCCESS",
  "msg": "success"
}
```

## Fetch All User Groups

Request URL: /api/v1/developer/user_groups   
Permission Key: view:user   
Method: GET   
UniFi Access Requirement: 2.2.6 or later   
API version: v1

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/api/v1/developer/developer/user_groups'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

### Response Sample

```json
{
    "code": "SUCCESS",
    "data": [ 
        {
        "full_name": "Group Name",
        "id": "75011ee6-b7ab-4927-9d9f-dd08ef0a3199",
        "name": "Group Name",
        "up_id": "a27899fc-a2d1-4797-8d4d-86118f8555f3",
        "up_ids": [
            "a27899fc-a2d1-4797-8d4d-86118f8555f3"
        ]
        }
    ],
    "msg": "success"
}
```

## Fetch User Group

Request URL: /api/v1/developer/user_groups/:id   
Permission Key: view:user   
Method: GET   
UniFi Access Requirement: 2.2.6 or later   
API version: v1

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user group.</td><td>Get it from the API /api/v1/developer/user_groups</td></tr></table>

### Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/api/v1/developer/developer/user_groups/75011ee6-b7ab-4927-9d9f-dd08ef0a3199'  
-H 'Authorization: Bearer wHFmHR*****KD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

### Response Sample

```json
{
    "code": "SUCCESS",
    "data": {
        "full_name": "Group Name",
        "id": "75011ee6-b7ab-4927-9d9f-dd08ef0a3199",
        "name": "Group Name",
        "up_id": "a27899fc-a2d1-4797-8d4d-86118f8555f3",
        "up_ids": [
            "a27899fc-a2d1-4797-8d4d-86118f8555f3"
        ]
    },
    "msg": "success"
}
```

## Update User Group

Request URL: /api/v1/developer/user_groups/:id   
Permission Key: edit:user   
Method: PUT   
UniFi Access Requirement: 2.2.6 or later   
API version: v1

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user group.</td><td>Get it from the API /api/v1/developer/user_groups</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the group.</td><td></td></tr><tr><td>up_id</td><td>F</td><td>String</td><td>Parent group ID</td><td>Get it from the API /api/v1/developer/user_groups</td></tr></table>

### Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XPUT '{host}/api/v1/developer/user_groups/75011ee6-b7ab-4927-9d9f-dd08ef0a3199'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--data-raw {'  
    "name": "Group Name",  
    "up_id": "013d05d3-7262-4908-ba69-badbbb8f5a6"  
}  
--insecure 
```

### Response Sample

```json
{
  "code": "SUCCESS",
  "msg": "success"
}
```

## Delete User Group

Request URL: /api/v1/developer/user_groups/:id   
Permission Key: edit:user   
Method: DELETE   
UniFi Access Requirement: 2.2.6 or later   
API version: v1

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user group.</td><td>Get it from the API /api/v1/developer/user_groups</td></tr></table>

### Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XDELETE '{host}/api/v1/developer/developer/user_groups/75011ee6-b7ab-4927-9d9f-dd08ef0a3199'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

### Response Sample

```json
{
  "code": "SUCCESS",
  "msg": "success"
}
```

## Assign User to User Group

Request URL: /api/v1/developer/user_groups/:id/users   
Permission Key: edit:user   
Method: POST   
UniFi Access Requirement: 2.2.6 or later   
API version: v1

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user group.</td><td>Get it from the API /api/v1/developer/user_groups</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td></td><td>T</td><td>Array:String</td><td>Identity ID of the user.</td><td>Get it from the API /api/v1/developer/users</td></tr></table>

### Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XPOST '{host}/api/v1/developer/user_groups/75011ee6-b7ab-4927-9d9f-dd08ef0a3199/users' \
-H 'Authorization: Bearer wHFmHR******kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data-raw '["7c6e9102-acb7-4b89-8ed4-7561e6fb706c", "fd63bc4c-52e0-4dbf-a699-e1233339c73b"]' \
--insecure
```

### Response Sample

```json
{
  "code": "SUCCESS",
  "msg": "success"
}
```

## Unassign User from User Group

Request URL: /api/v1/developer/user_groups/:id/users/delete   
Permission Key: edit:user   
Method: POST   
UniFi Access Requirement: 2.2.6 or later   
API version: v1

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user group.</td><td>Get it from the API /api/v1/developer/user_groups</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td></td><td>T</td><td>Array:String</td><td>Identity ID of the user.</td><td>Get it from the API /api/v1/developer/users</td></tr></table>

### Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XPOST '{host}/api/v1/developer/user_groups/75011ee6-b7ab-4927-9d9f-dd08ef0a3199/users/delete' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data-raw '["7c6e9102-acb7-4b89-8ed4-7561e6fb706c", "fd63bc4c-52e0-4dbf-a699-e1233339c73b"]' \
--insecure
```

### Response Sample

```json
{
  "code": "SUCCESS",
  "msg": "success"
}
```

## Fetch Users in a User Group

This API allows you to fetch only the users in a user group, excluding any subgroups.

Request URL: /api/v1/developer/user_groups/:id/users   
Permission Key: view:user   
Method: GET   
UniFi Access Requirement: 2.2.6 or later   
API version: v1

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user group.</td><td>Get it from the API /api/v1/developer/user_groups</td></tr></table>

### Response Body

*See Response Schema for full field definitions.*

### Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/api/v1/developer/user_groups/23676a54-382e-4121-AA80-878d2d9bacaa/users'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

### Response Sample

```json
{
    "code": "SUCCESS",
    "data": [
        {"alias": "", "avatar_relative_path": "", "email": "*@*.com", "email_status": "UNVERIFIED", "employee_number": "1000000", "first_name": "", "full_name": "", "id": "27aa91ac-2924-43d4-82e1-24b6a570d29e", "last_name": "Chen", "onboard_time": 1689150139, "phone": "", "status": "ACTIVE", "user_email": "", "username": ""}
    ],
    "msg": "success"
}
```

## Fetch All Users in a User Group

This API allows you to fetch all users in a user group, including those in subgroups.

Request URL: /api/v1/developer/user_groups/:id/users/all   
Permission Key: view:user   
Method: GET   
UniFi Access Requirement: 2.2.6 or later   
API version: v1

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user group.</td><td>Get it from the API /api/v1/developer/user_groups</td></tr></table>

### Response Body

*See Response Schema for full field definitions.*

### Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}'/api/v1/developer/user_groups/23676a54-382e-4121-AA80-878d2d9bacaa/users/all'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

### Response Sample

```json
{
    "code": "SUCCESS",
    "data": [ 
        {
            "alias": "", 
            "avatar_relative_path": "", 
            "email": "@*.com", 
            "email_status": "UNVERIFIED", 
            "employee_number": "1000000", 
            "first_name": "", 
            "full_name": "", 
            "id": "27aa91ac-2924-43d4-82e1-24b6a570d29e", 
            "last_name": "Chen", 
            "onboard_time": 1689150139, 
            "phone": "", 
            "status": "ACTIVE", 
            "user_email": "", 
            "username": ""
        }
    ],
    "msg": "success"
}
```

## Fetch the Access Policies Assigned to a User

This API allows you to fetch the access policies assigned to a user.

Request URL: /api/v1/developer/users/:id/access_policies   
Permission Key: view:user   
Method: GET   
UniFi Access Requirement: 2.2.6 or later   
API version: v1

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user.</td><td>Get it from the API /api/v1/developer/users</td></tr></table>

### Query Parameters

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>only_user_policies</td><td>F</td><td>Boolean</td><td>If &#x27;only_user_policies&#x27; is set to false, all policies of the group the user belongs to are displayed. If set to true, only the policies assigned directly to the user are shown.</td><td>only_user_policies=true</td></tr></table>

### Response Body

*See Response Schema for full field definitions.*

### Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/users/27aa91ac-2924-43d4-82e1-24b6a570d29e/access_policies? only_user_policies=false' -H 'Authorization: Bearer wHFmHR*****kD6wHg' -H 'accept: application/json' -H 'content-type: application/json' --insecure 
```

### Response Sample

```json
{
  "code": "SUCCESS",
  "data": [
    {
      "id": "89a4ca95-1502-4ae7-954f-d986b67afe5c",
      "name": "Default Site Policy",
      "resources": [
        {
          "id": "fd2a06e2-81af-4cf4-9bd5-8bceb5e7b7d7",
          "type": "door_group"
        }
      ],
      "schedule_id": "6b79d12a-2a6e-4463-949c-f1a98fff40d2"
    },
    {
      "id": "bbe48a65-2ac1-4bf6-bd65-bc8f9ee7fb75",
      "name": "Access Policy Name",
      "resources": [],
      "schedule_id": "f7414bcd-f0cc-4d3e-811a-b5ac75f7ddb8"
    }
  ],
  "msg": "success"
}
```

## Assign Access Policy to User Group

This API is used to assign access policies to a user group.

Request URL: /api/v1/developer/user_groups/:id/access_policies   
Permission Key: edit:user   
Method: PUT   
UniFi Access Requirement: 2.2.6 or later   
API version: v1

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user group.</td><td>Get it from the API /api/v1/developer/user_groups</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>access_policy_ids</td><td>T</td><td>Array:String</td><td>Identity ID of the access policy.</td><td>Get it from the API /api/v1/developer/access_policies</td></tr></table>

### Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XPUT '{host}/user_groups/23676a54-382e-4121-AA80-878d2d9bacaa/access_policies'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--data '{
    "access_policy_ids": [  
        "bbe48a65-2ac1-4bf6-bd65-bc8f9ee7fb75"  
    ]  
}  
--insecure 
```

### Response Sample

```json
{
  "code": "SUCCESS",
  "data": null,
  "msg": "success"
}
```

## Fetch the Access Policies Assigned to a User Group

This API allows you to fetch the access policies assigned to a user group.

Request URL: /api/v1/developer/user_groups/:id/access_policies   
Permission Key: view:user   
Method: GET   
UniFi Access Requirement: 2.2.6 or later   
API version: v1

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user group.</td><td>Get it from the API /api/v1/developer/user_groups</td></tr></table>

### Response Body

*See Response Schema for full field definitions.*

### Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/user_groups/23676a54-382e-4121-AA80-878d2d9bacaa/access_policies'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

### Response Sample

```json
{
  "code": "SUCCESS",
  "data": [
    {
      "id": "89a4ca95-1502-4ae7-954f-d986b67afe5c",
      "name": "Default Site Policy",
      "resources": [
        {
          "id": "fd2a06e2-81af-4cf4-9bd5-8bceb5e7b7d7",
          "type": "door_group"
        }
      ],
      "schedule_id": "6b79d12a-2a6e-4463-949c-f1a98fff40d2"
    },
    {
      "id": "bbe48a65-2ac1-4bf6-bd65-bc8f9ee7fb75",
      "name": "Access Policy Name",
      "resources": [],
      "schedule_id": "f7414bcd-f0cc-4d3e-811a-b5ac75f7ddb8"
    }
  ],
  "msg": "success"
}
```

## Delete User

This API allows you to delete a user whose status is disabled.

Request URL: /api/v1/developer/users/:id   
Permission Key: edit:user   
Method: DELETE   
UniFi Access Requirement: 3.1.30 or later   
API version: v1   
Note: Only users with a disabled can be deleted.

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user.</td><td>Get it from the API /api/v1/developer/users</td></tr></table>

### Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XDELETE '{host}/api/v1/developer/developer/users/348e868e-534a-4ace-ba77-ce80394e31e3'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

### Response Sample

```json
{
  "code": "SUCCESS",
  "msg": "success"
}
```

## Search Users

This API allows you to fetch all users.

Request URL: /api/v1/developer/users/search   
Permission Key: view:user   
Method: GET   
UniFi Access Requirement: 3.1.30 or later

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Query Parameters

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>keyword</td><td>F</td><td>String</td><td>Determine whether to return the access policies assigned to a user (Optional).</td><td>keyword=Name</td></tr><tr><td>user_id</td><td>F</td><td>String</td><td>Support filtering by multiple user Identity IDs.</td><td>user_id=472cabd2-0634-4e85-9e8d-5a73b500516a&amp;user_id=21472b1d-aa3a-4f2c-855e-0ec3dcaaeb5a</td></tr><tr><td>only_admin</td><td>F</td><td>Boolean</td><td>Filter to display only admin users.</td><td>only_admin=false</td></tr><tr><td>status</td><td>F</td><td>String</td><td>Support filtering by multiple user statuses.</td><td>status=ACTIVE&amp;status=DEACTIVATED&amp;status=PENDING</td></tr><tr><td>page_num</td><td>F</td><td>String</td><td>Current page number in the pagination.</td><td>1</td></tr><tr><td>page_size</td><td>F</td><td>String</td><td>Number of users per page.</td><td>25</td></tr></table>

### Response Body

*See Response Schema for full field definitions.*

### Response Sample

```json
{
    "code": "SUCCESS",
    "data": [
        {
            "alias": "",
            "avatar_relative_path": "/avatar/186b07b1-fa13-49b5-8954-399d1b9c5285",
            "email": "User1@*.com",
            "email_status": "VERIFIED",
            "employee_number": "",
            "first_name": "Name",
            "full_name": "Full Name",
            "id": "472cabd2-0634-4e85-9e8d-5a73b500516a",
            "last_name": "Last Name",
            "nfc_cards": [],
            "onboard_time": 0,
            "phone": "",
            "pin_code": null,
            "status": "ACTIVE",
            "user_email": "User1@*.com",
            "username": ""
        }
    ],
    "msg": "success"
} 
```

### Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/api/v1/developer/users/search?keyword=Name&user_id=472cabd2-0634-4e85-9e8d-5a73b500516a&user_id=21472b1d-AA3a-4f2c-855e-0ec3dcaaeb5a&only_admin=false&status=ACTIVE&status=DEACTIVATED&page_size=10&page_num=1' -H 'Authorization: Bearer wHFmHR*****kD6wHg' -H 'accept: application/json' -H 'content-type: application/json' --insecure 
```

## Assign Touch Pass to User

This API assigns a suspended or inactive Touch Pass to a specific user.

Request URL: /api/v1/developer/users/:user_id/touch_passes/:touch_pass_id   
Permission Key: edit:user   
Method: PUT   
UniFi Access Requirement: Version 3.2.20 or later

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example UUID</td><td>How to Get It?</td></tr><tr><td>user_id</td><td>T</td><td>String</td><td>ID of the user assigned to the Touch Pass.</td><td>cadb8707-a2c1-4407-a904-24868bf4aad9</td><td>Get it from API /api/v1/developer/users</td></tr><tr><td>touch_pass_id</td><td>T</td><td>String</td><td>Touch Pass ID.</td><td>e9a8e5ad-0afd-4abf-a9ce-9535df6bc00d</td><td>Get it from API /api/v1/developer/credentials/touch_passes/assignable</td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Type</td><td>Description</td></tr><tr><td>id</td><td>String</td><td>Touch Pass ID.</td></tr><tr><td>card_id</td><td>String</td><td>Card ID associated with Touch Pass.</td></tr><tr><td>card_name</td><td>String</td><td>Card name or alias.</td></tr><tr><td>status</td><td>String</td><td>enum status {PENDING} Touch Pass status after being assigned.</td></tr><tr><td>last_activity</td><td>String</td><td>Timestamp of the last activity (ISO 8601 format).</td></tr><tr><td>bundles</td><td>Array</td><td>Reserved for future use. Currently always an empty array.</td></tr><tr><td>user_id</td><td>String</td><td>ID of the user assigned to the Touch Pass.</td></tr><tr><td>user_name</td><td>String</td><td>Full name of the user.</td></tr><tr><td>user_email</td><td>String</td><td>Email address of the user.</td></tr><tr><td>user_status</td><td>String</td><td>Status of the user's account (empty if unavailable).</td></tr><tr><td>user_avatar</td><td>String</td><td>URL of the user's avatar image (empty if unavailable).</td></tr></table>

### Response Sample

```json
{
    "code": "SUCCESS",
    "data": {
        "bundles": [], "card_id": "104D-2E7D-0CF9-45B9",
        "card_name": "", "id": "e9a8e5ad-0afd-4abf-a9ce-9535df6bc00d",
        "last_activity": "2025-04-09T18:44:47+08:00",
        "status": "PENDING",
        "user_avatar": "", "user_email": "example@ui.com",
        "user_id": "cadb8707-a2c1-4407-a904-24868bf4aad9",
        "user_name": "Example Name",
        "user_status": ""
    },
    "msg": "success"
}
```

### Request Sample

```bash
curl --location --request PUT '{host}/api/v1/developer/users/cadb8707-a2c1-4407-a904-24868bf4aad9/touch_passes/e9a8e5ad-0afd-4abf-a9ce-9535df6bc00d' \
--header 'Authorization: Bearer wHFmHR*****kD6wHg' \
--data '' 
```

## Unassign Touch Pass from User

This API unassigns a Touch Pass from a specific user.

Request URL: /api/v1/developer/users/:user_id/touch_passes/:touch_pass_id   
Permission Key: edit:user   
Method: DELETE   
UniFi Access Requirement: Version 3.2.20 or later

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example UUID</td><td>How to Get It?</td></tr><tr><td>user_id</td><td>T</td><td>String</td><td>ID of the user to unassign the Touch Pass from.</td><td>cadb8707-a2c1-4407-a904-24868bf4aad9</td><td>Get it from API /api/v1/developer/users</td></tr><tr><td>touch_pass_id</td><td>T</td><td>String</td><td>ID of the Touch Pass to unassign.</td><td>e9a8e5ad-0afd-4abf-a9ce-9535df6bc00d</td><td>Get it from API /api/v1/developer/credentials/touch_passes</td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Type</td><td>Description</td></tr><tr><td>id</td><td>String</td><td>Touch Pass ID.</td></tr><tr><td>card_id</td><td>String</td><td>Card ID associated with Touch Pass.</td></tr><tr><td>card_name</td><td>String</td><td>Card name or alias.</td></tr><tr><td>status</td><td>String</td><td>enum status {SUSPENDED, INACTIVE} Touch Pass status after being unassigned.</td></tr><tr><td>last_activity</td><td>String</td><td>Timestamp of the last activity (ISO 8601 format).</td></tr><tr><td>bundles</td><td>Array</td><td>Reserved for future use. Currently always an empty array.</td></tr><tr><td>user_id</td><td>String</td><td>Empty string after unassignment.</td></tr><tr><td>user_name</td><td>String</td><td>Empty string after unassignment.</td></tr><tr><td>user_email</td><td>String</td><td>Empty string after unassignment.</td></tr><tr><td>user_avatar</td><td>String</td><td>Empty string after unassignment.</td></tr><tr><td>user_status</td><td>String</td><td>enum user_status {ACTIVE, PENDING} Status of the user at the time of unassignment.</td></tr></table>

### Response Sample

```json
{
    "code": "SUCCESS",
    "data": {
        "bundles": [],
        "card_id": "104D-2E7D-0CF9-45B9",
        "card_name": "",
        "id": "e9a8e5ad-0afd-4abf-a9ce-9535df6bc00d",
        "last_activity": "2025-04-09T18:46:27+08:00",
        "status": "INACTIVE",
        "user_avatar": "",
        "user_email": "",
        "user_id": "",
        "user_name": "",
        "user_status": "ACTIVE"
    },
    "msg": "success"
}
```

### Request Sample

```bash
curl --location --request DELETE 'https://192.168.1.1:12445/api/v1/developer/users/cadb8707-a2c1-4407-a904-24868bf4aad9/touch_passes/e9a8e5ad-0afd-4abf-a9ce-9535df6bc00d' \
--header 'Authorization: Bearer wHFmHR*****kD6wHg' \
--data '' 
```

## Batch Assign Touch Passes to Users

This API allows assigning unassigned Touch Passes to users using their email addresses.

Request URL: /api/v1/developer/users/touch_passes/assign   
Permission Key: edit:user   
Method: PUT   
UniFi Access Requirement: Version 3.2.20 or later

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>ids</td><td>T</td><td>Array of Strings</td><td>List of user IDs to assign Touch Passes to.</td><td>Get it from API /api/v1/developer/users</td></tr><tr><td>emails</td><td>F</td><td>Object (Map)</td><td>Email of the user.</td><td></td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Type</td><td>Description</td></tr><tr><td>id</td><td>String</td><td>Touch Pass ID.</td></tr><tr><td>card_id</td><td>String</td><td>Card ID associated with Touch Pass.</td></tr><tr><td>card_name</td><td>String</td><td>Card name or alias.</td></tr><tr><td>status</td><td>String</td><td>enum status {PENDING} Touch Pass status after being assigned.</td></tr><tr><td>last_activity</td><td>String</td><td>Timestamp of the last activity (ISO 8601 format).</td></tr><tr><td>bundles</td><td>Array</td><td>Reserved for future use. Currently always an empty array.</td></tr><tr><td>user_id</td><td>String</td><td>ID of the user assigned to the Touch Pass.</td></tr><tr><td>user_name</td><td>String</td><td>Full name of the user.</td></tr><tr><td>user_email</td><td>String</td><td>Email address of the user.</td></tr><tr><td>user_status</td><td>String</td><td>Status of the user&#x27;s account (empty if unavailable).</td></tr><tr><td>user_avatar</td><td>String</td><td>URL of the user&#x27;s avatar image (empty if unavailable).</td></tr></table>

### Response Sample

```json
{
    "code": "SUCCESS",
    "data": [
        {
            "bundles": [],
            "card_id": "05FD-99C6-1876-4EF9",
            "card_name": "",
            "id": "fdb79d4-c113-4893-9a3b-b61836b5108d",
            "last_activity": "2025-04-09T13:40:28+08:00",
            "status": "PENDING",
            "user_avatar": "https://192.168.1.1/proxy/users/public/avatar/5b7e0cef-dba1-415b-8ee7-7efb440645c1",
            "user_email": "example@ui.com",
            "user_id": "ed34ad8b-9d34-48a8-b110-0ddc5f1e6055",
            "user_name": "Example Name",
            "user_status": ""
        }
    ],
    "msg": "success"
}
```

### Request Sample

```bash
curl --location --request PUT \
'https://192.168.1.1:12445/api/v1/developer/users/touch_passes/assign' \
--header 'Authorization: Bearer wHFmHR*****kD6wHg' \
--header 'Content-Type: application/json' \
--data '{
    "ids": ["ed34ad8b-9d34-48a8-b110-0ddc5f1e6055"],
    "emails": {
        "ed34ad8b-9d34-48a8-b110-0ddc5f1e6055": "example@ui.com"
    }
}'
```

## Assign License Plate Numbers to User

This API allows you to assign one or more license plate numbers to a specific user.

Request URL: /api/v1/developer/users/:id/license_plates   
Permission Key: edit:user   
Method: PUT   
UniFi Access Requirement: Version 3.3.10 or later

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Bearer Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Unique ID of the user</td><td>Get it from /api/v1/developer/users</td></tr></table>

### Request Body

An array of license plate strings to assign to the user.

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>-</td><td>T</td><td>Array of Strings</td><td>List of license plate numbers</td></tr></table>

### Request Sample: Shell/cURL

```bash
curl --location --request PUT 'https://192.168.1.1:12445/api/v1/developer/users/d0beeccd-0f5e-4606-9d6e-764e19685e27/license_plates' \
--header 'Authorization: Bearer vPUhdytCPDvt/+dSLlGTjw' \
--header 'Content-Type: application/json' \
--data '["abcd5", "efge36"]' \
--insecure 
```

### Response Sample

```json
{
  "code": "SUCCESS",
  "data": null,
  "msg": "success"
}
```

## Unassign License Plate Numbers from User

This API allows you to unassign a license plate number from a user.

Request URL: /api/v1/developer/users/:user_id/license_plates/:license_plate_id   
Permission Key: edit:user   
Method: DELETE   
UniFi Access Requirement: Version 3.3.10 or later

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example UUID</td><td>How to Get It?</td></tr><tr><td>user_id</td><td>T</td><td>String</td><td>ID of the user to unassign the license plate number from.</td><td>d0beecccd-0f5e-4606-9d6e-764e19685e27</td><td>Get it from API /api/v1/developer/users</td></tr><tr><td>licenseplate_id</td><td>T</td><td>String</td><td>ID of the license plate number to unassign.</td><td>74f3c466-c564-4035-aebd-fd383ebebcc6a</td><td>Get it from API /api/v1/developer/users</td></tr></table>

### Request Sample: Shell/cURL

```bash
curl --location --request DELETE 'https://192.168.1.1:12445/api/v1/developer/users/d0beeecd-0f5e-4606-9d6e-764e19685e27/license_plates/74f3c466-c564-4035-aebd-fd383ebebcc6a' \
--header 'Authorization: Bearer vPUhdtCPDvt/+dSLlGTjw' 
```

### Response Sample

```json
{
  "code": "SUCCESS",
  "data": null,
  "msg": "success"
}
```

## Upload User Profile Picture

This API allows you to upload a profile picture for a user.

Request URL: /api/v1/developer/users/:id/avatar   
Permission Key: edit:user   
Method: POST   
UniFi Access Requirement: Version 3.3.10 or later   
Note: Updating the profile picture is supported only for local users. UI Account users must update their profile picture through the UI Account interface (https://account.ui.com/).

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Unique ID of the user.</td><td>Get it from /api/v1/developer/users</td></tr></table>

### Request Body (Multipart Form)

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>file</td><td>T</td><td>File</td><td>Profile picture image file to upload.</td></tr></table>

### Request Sample: Shell/cURL

```bash
curl --location 'https://192.168.1.1:12445/api/v1/developer/users/d0beeccd-0f5e-4606-9d6e-764e19685e27/avatar' \
--header 'Authorization: Bearer vPUhdytCPDvt/+dSLlGTjw' \
--form 'file=@"./fa8134ba-352a-4499-ab62-713618388148.jpeg'" --insecure 
```

### Response Sample

```json
{
    "code": "SUCCESS",
    "data": {
        "avatar_url": "https://192.168.1.1/proxy/users/public/avatar/d0beecccd-0f5e-4606-9d6e-764e19685e27"
    },
    "msg": "success"
}
```
