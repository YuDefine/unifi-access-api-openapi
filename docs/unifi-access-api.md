# UniFi Access API Documentation

Leverage the power of the UniFi Access APl



# 1. Introduction

1.1 Create API Token & Download API Documentation
1.2 Obtain Your Hostname
1.3 Use the API
1.4 Security Configuration
1.5 Important Notes

# 2. Overview

2.1 API Token
2.2 HTTP Status Code Reference
2.3 Success Code
2.4 Error Code
2.5 HTTP Verbs
2.6 API Host
2.7 Request Header
2.8 Response Schema

# 3. User

3.1 Schemas
3.2 User Registration
3.3 Update User
3.4 Fetch User
3.5 Fetch All Users
3.6 Assign Access Policy to User
3.7 Assign NFC Card to User
3.8 Unassign NFC Card from User
3.9 Assign PIN Code to User
3.10 Unassign PIN Code from User
3.11 Create User Group
3.12 Fetch All User Groups
3.13 Fetch User Group
3.14 Update User Group
3.15 Delete User Group
3.16 Assign User to User Group
3.17 Unassign User from User Group
3.18 Fetch Users in a User Group

3.19 Fetch All Users in a User Group
3.20 Fetch the Access Policies Assigned to a User
3.21 Assign Access Policy to User Group
3.22 Fetch the Access Policies Assigned to a User Group
3.23 Delete User
3.24 Search Users
3.25 Assign Touch Pass to User
3.26 Unassign Touch Pass from User
3.27 Batch Assign Touch Passes to Users
3.28 Assign License Plate Numbers to User
3.29 Unassign License Plate Numbers from User
3.30 Upload User Profile Picture

# 4. Visitor

4.1 Schemas
4.2 Create Visitor
4.3 Fetch Visitor
4.4 Fetch All Visitors
4.5 Update Visitor
4.6 Delete Visitor
4.7 Assign NFC Card To Visitor
4.8 Unassign NFC Card From Visitor
4.9 Assign PIN Code To Visitor
4.10 Unassign PIN Code From Visitor
4.11 Assign QR Code to Visitor
4.12 Unassign QR Code from Visitor
4.13 Assign License Plate Numbers to Visitor
4.14 Unassign License Plate Number from Visitor

# 5. Access Policy

5.1 Access Policy Schemas
5.2 Create Access Policy
5.3 Update Access Policy
5.4 Delete Access Policy
5.5 Fetch Access Policy
5.6 Fetch All Access Policies

5.7 Holiday Group Schemas
5.8 Create Holiday Group
5.9 Update Holiday Group
5.10 Delete Holiday Group
5.11 Fetch Holiday Group
5.12 Fetch All Holiday Groups
5.13 Schedule Schemas
5.14 Create Schedule
5.15 Update Schedule
5.16 Fetch Schedule
5.17 Fetch All Schedules
5.18 Delete Schedule

# 6. Credential

6.1 Generate PIN Code
6.2 Enroll NFC Card
6.3 Fetch NFC Card Enrollment Status
6.4 Remove a Session Created for NFC Card Enrollment
6.5 Flowchart for NFC Card Enrollment
6.6 NFC Card Schemas
6.7 Fetch NFC Card
6.8 Fetch All NFC Cards
6.9 Delete NFC Card
6.10 Update NFC Card
6.11 Touch Pass Schemas
6.12 Fetch the Touch Pass List
6.13 Search Touch Pass
6.14 Fetch All Assignable Touch Passes
6.15 Update Touch Pass
6.16 Fetch Touch Pass Details
6.17 Purchase Touch Passes
6.18 Download QR Code Image
6.19 Import Third-Party NFC Cards

# 7. Space

7.1 Fetch Door Group Topology
7.2 Create Door Group
7.3 Fetch Door Group

7.4 Update Door Group
7.5 Fetch All Door Groups
7.6 Delete Door Group
7.7 Fetch Door
7.8 Fetch All Doors
7.9 Remote Door Unlocking
7.10 Set Temporary Door Locking Rule
7.11 Fetch Door Locking Rule
7.12 Set Door Emergency Status
7.13 Fetch Door Emergency Status

# 8. Device

8.1 Fetch Devices
8.2 Fetch Access Device's Access Method Settings
8.3 Update Access Device's Access Method Settings
8.4 Trigger Doorbells

# 9. System Log

9.1 Topic Reference
9.2 Fetch System Logs
9.3 Export System Logs
9.4 Fetch Resources in System Logs
9.5 Fetch Static Resources in System Logs

# 10. UniFi Identity

10.1 Send UniFi Identity Invitations
10.2 Fetch Available Resources
10.3 Assign Resources to Users
10.4 Fetch Resources Assigned to Users
10.5 Assign Resources to User Groups
10.6 Fetch the Resources Assigned to User Groups

# 11. Notification

11.1 Fetch Notifications [WebSocket]
11.2 List of Supported Webhook Events [Webhook]
11.3 Fetch Webhook Endpoints List [Webhook]
11.4 Add Webhook Endpoints [Webhook]
11.5 Update Webhook Endpoints [Webhook]

11.6 Delete Webhook Endpoints [Webhook]
11.7 Allow Webhook Endpoint Owner to Receive Webhook Events [Webhook]

# 12. API Server

12.1 Upload HTTPS Certificate
12.2 Delete HTTPS Certificate

# 13. Change Logs

v4.0.10
v3.3.21
v3.3.10
V3.2.20
V3.1.30
V2.2.6
V2.2.10

# 1. Introduction

Welcome to the UniFi Access API guide, which provides a detailed step-by-step explanation of how to utilize the API effectively. The UniFi Access API is an open interface protocol that allows developers to interact with a specific service using predefined interfaces.

# 1.1 Create API Token & Download API Documentation

Before you can use the UniFi Access API, you need to obtain a valid API Token for authentication and access control. Follow the steps below to create an API Token:

1. Sign in to your UniFi Portal (https://account.ui.com/login) using your web browser.   
2. Select the UniFi Console where the UniFi Access application is installed.   
3. Go to Access > Settings > General > Advanced.   
4. Go to API Token to Download API documentation and create an API Token.   
5. To create an API Token, click Create New, enter the key name and validity period, select the permission scopes, and click Create.   
6. Once the API Token is created, ensure to Copy API Token and store it safely for future use. Please note that the key is displayed only once for security purposes.

# 1.2 Obtain Your Hostname

The UniFi Access application can be hosted on a server within the local network and accessed via the LAN port. The hostname can either be the server's IP address or a custom domain name mapped to that IP. Connect using the specified port number (12445) and establish an HTTPS protocol for a secure connection.

# 1.3 Use the API

1. Construct the API request as per the instructions in the API documentation.   
2. Send the constructed request to the server using the previously obtained API Token and hostname.   
3. Parse the server's response to retrieve the required data or perform desired operations.

# 1.4 Security Configuration

1. Set up appropriate security measures to protect the API and the server.   
2. Configure firewall rules to allow incoming traffic on the specific ports used by the API.   
3. Enable HTTPS encryption using SSL/TLS certificates to secure data transmission.   
4. Implement rate limiting and throttling mechanisms to prevent abuse and ensure fair usage.

# 1.5 Important Notes

1. Ensure your UniFi Access version is 1.9.1 or later.   
2. The API is not available after upgrading to Identity Enterprise.   
3. Obtain valid access permissions and adhere to the usage guidelines provided by the service provider before using the UniFi Access API.   
4. Safeguard your API Token and do not share it with others to avoid security risks.   
5. If you have any questions or concerns, please contact the technical support team of your service provider.

The steps above cover the basic process and essential considerations for using the UniFi Access API. Follow the instructions and refer to the API documentation for smooth development. Enjoy the convenience of using the UniFi Access API!

# 2. Overview

This section provides an introduction to essential concepts related to working with APIs, including API tokens, HTTP status codes, success and error codes, HTTP verbs, and API hosts.

# 2.1 API Token

To authenticate API requests with UniFi Access, you need to utilize API tokens associated with your account. If a request includes a deleted or expired token, the service will return an authentication error. The Authorization Token is obtained from UniFi Portal.

# 2.2 HTTP Status Code Reference

<table><tr><td>200</td><td>OK</td><td>Everything worked as expected.</td></tr><tr><td>400</td><td>Bad Request</td><td>The request is unacceptable, often due to missing required parameters.</td></tr><tr><td>401</td><td>Unauthorized</td><td>The request lacks a valid API token for authentication.</td></tr><tr><td>402</td><td>Request Failed</td><td>The request contains valid parameters, but failed for some reason.</td></tr><tr><td>403</td><td>Forbidden</td><td>The API token used does not have the necessary permissions to perform the request.</td></tr><tr><td>429</td><td>Too Many Requests</td><td>Too many requests were sent to the API in a short amount of time.</td></tr><tr><td>500, 502, 503, 504</td><td>Server Errors</td><td>Something went wrong on UniFi Access&#x27;s end during request processing.</td></tr></table>

# 2.3 Success Code

```json
{"code":"SUCCESS","msg":"success"}
```

<table><tr><td>Code</td><td>Message</td></tr><tr><td>SUCCESS</td><td>Success</td></tr></table>

# 2.4 Error Code

```json
{"code":"CODE_PARAMS_INVALID","msg":"Invalid parameters."}
```

<table><tr><td>Code</td><td>Message</td></tr><tr><td>CODE_PARAMS_INVALID</td><td>The provided parameters are invalid.</td></tr><tr><td>CODE_SYSTEM_ERROR</td><td>An error occurred on the server's end.</td></tr><tr><td>CODE_RESOURCE_NOT_FOUND</td><td>The requested resource was not found.</td></tr><tr><td>CODE_OPERATION_FORBIDDEN</td><td>The requested operation is not allowed.</td></tr><tr><td>CODE_AUTH_FAILED</td><td>Authentication failed.</td></tr><tr><td>CODE_ACCESS_TOKEN_INVALID</td><td>The provided access token is invalid.</td></tr><tr><td>CODE_UNAUTHORIZED</td><td>You are not allowed to perform this action.</td></tr><tr><td>CODE_NOT_EXISTS</td><td>The requested item does not exist.</td></tr><tr><td>CODE_USER_EMAIL_ERROR</td><td>The provided email format is invalid.</td></tr><tr><td>CODE_USER_ACCOUNT_NOT_EXIST</td><td>The requested user account does not exist.</td></tr><tr><td>CODE_USER_WORKER_NOT_EXISTS</td><td>The requested user does not exist.</td></tr><tr><td>CODE_USER_NAME_DUPLICATED</td><td>The provided name already exists.</td></tr><tr><td>CODE_USER_CSV_IMPORT_INCOMPLETE_PROP</td><td>Please provide both first name and last name.</td></tr><tr><td>CODE_ACCESS_POLICY_USER_TIMEZONE_NOT_FOUND</td><td>The requested workday schedule could not be found.</td></tr><tr><td>CODE_ACCESS_POLICY_HOLIDAY_TIMEZONE_NOT_FOUND</td><td>The requested holiday schedule could not be found.</td></tr><tr><td>CODE_ACCESS_POLICY_HOLIDAY_GROUP_NOT_FOUND</td><td>The requested holiday group could not be found.</td></tr><tr><td>CODE_ACCESS_POLICY_HOLIDAY_NOT_FOUND</td><td>The requested holiday could not be found.</td></tr><tr><td>CODE_ACCESS_POLICY_SCHEDULE_NOT_FOUND</td><td>The requested schedule could not be found.</td></tr><tr><td>CODE_ACCESS_POLICY_HOLIDAY_NAME_EXIST</td><td>The provided holiday name already exists.</td></tr><tr><td>CODE_ACCESS_POLICY_HOLIDAY_GROUP_NAME_EXIST</td><td>The provided holiday group name already exists.</td></tr><tr><td>CODE_ACCESS_POLICY_SCHEDULE_NAME_EXIST</td><td>The provided schedule name already exists.</td></tr><tr><td>CODE_ACCESS_POLICY_SCHEDULE_CAN_NOT_DELETE</td><td>The schedule could not be deleted.</td></tr><tr><td>CODE_ACCESS_POLICY_HOLIDAY_GROUP_CAN_NOT_DELETE</td><td>The holiday group could not be deleted.</td></tr><tr><td>CODE_CREDS_NFC_HAS_BIND_USER</td><td>The NFC card is already registered and assigned to another user.</td></tr><tr><td>CODE_CREDS_DISABLE_TRANSFER_UID_USER_NFC</td><td>The UniFi Identity Enterprise user's NFC card is not transferrable.</td></tr><tr><td>CODE_CREDS_NFC_READ_SESSION_NOT_FOUND</td><td>Failed to obtain the NFC read session.</td></tr><tr><td>CODE_CREDS_NFC_READ_POLL_TOKEN_EMPTY</td><td>The NFC token is empty.</td></tr><tr><td>CODE_CREDS_NFC_CARD_IS_PROVISION</td><td>The NFC card is already registered at another site.</td></tr><tr><td>CODE_CREDS_NFC_CARD_PROVISION_FAILED</td><td>Please hold the NFC card against the reader for more than 5 seconds.</td></tr><tr><td>CODE_CREDS_NFC_CARD_INVALID</td><td>The card type is not supported. Please use a UA Card.</td></tr><tr><td>CODE_CREDS_NFC_CARD_CANNOT_BE_DELETE</td><td>The NFC card could not be deleted.</td></tr><tr><td>CODE_CREDS_PIN_CODE_CREDS_ALREADY_EXIST</td><td>The PIN code already exists.</td></tr><tr><td>CODE_CREDS_PIN_CODE_CREDS_LENGTH_INVALID</td><td>The PIN code length does not meet the preset requirements.</td></tr><tr><td>CODE_SPACE_DEVICE_BOUND_LOCATION_NOT_FOUND</td><td>The device's location was not found.</td></tr><tr><td>CODE_DEVICE_DEVICE_VERSION_NOT_FOUND</td><td>The firmware version is up to date.</td></tr><tr><td>CODE_DEVICE_DEVICE_VERSION_TOO_OLD</td><td>The firmware version is too old. Please update to the latest version.</td></tr><tr><td>CODE_DEVICE_DEVICE_BUSY</td><td>The camera is currently in use.</td></tr><tr><td>CODE_DEVICE_DEVICE_NOT_FOUND</td><td>The device was not found.</td></tr><tr><td>CODE_DEVICE_DEVICE_OFFLINE</td><td>The device is currently offline.</td></tr><tr><td>CODE_OTHERS_UID_ADOPTED_NOT_SUPPORTED</td><td>The API is not available after upgrading to Identity Enterprise.</td></tr><tr><td>CODE_HOLIDAY_GROUP_CAN_NOT_DELETE</td><td>The holiday group could not be deleted.</td></tr><tr><td>CODE_HOLIDAY_GROUP_CAN_NOT_EDIT</td><td>The holiday group could not be edited.</td></tr><tr><td>CODE_DEVICE_WEBHOOK_ENDPOINT_DUPLICATED</td><td>The provided endpoint already exists.</td></tr><tr><td>CODE_DEVICE_API_NOT_SUPPORTED</td><td>The API is currently not available for this device.</td></tr></table>

# 2.5 HTTP Verbs

<table><tr><td>HTTP Method</td><td>Description</td></tr><tr><td>GET</td><td>Used for retrieving objects.</td></tr><tr><td>POST</td><td>Used for creating objects or performing custom actions.</td></tr><tr><td>PUT</td><td>Used for replacing objects or collections.</td></tr><tr><td>DELETE</td><td>Used for deleting objects.</td></tr></table>

# 2.6 API Host

The Open API Server is hosted on port 12445 and can be accessed via HTTPS at https://console-ip:12445.

The server certificate is self-generated and untrusted.

# 2.7 Request Header

The header for a request contains the following information:

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td><td>Authorization: Bearer wHFmHRuX4I7sB2oDkD6wHg</td></tr></table>

# 2.8 Response Schema

The response for a request contains the following information:

```json
{
    "code": "SUCCESS",
    "msg": "success",
    "data": {}
} 
```

1. code: Represents the result of request handling and indicates success or failure.   
2. msg: Represents the error description if the code is not equal to 1.   
3. data: Represents the data of API requests.

# 3. User

The APIs here are designed for managing users, including handling their basic information and assigning NFC cards, PIN codes, and access policies to them.

# 3.1 Schemas

<table><tr><td>Parameter</td><td>Type</td><td>Description</td></tr><tr><td>Id</td><td>String</td><td>Identity ID of the user.</td></tr><tr><td>first_name</td><td>String</td><td>First name of the user.</td></tr><tr><td>last_name</td><td>String</td><td>Last name of the user.</td></tr><tr><td>full_name</td><td>String</td><td>Full name of the user.</td></tr><tr><td>alias</td><td>String</td><td>Preferred name of the user.</td></tr><tr><td>user_email</td><td>String</td><td>Email of the user. UniFi Access Requirement: 1.22.16 or later</td></tr><tr><td>email_status</td><td>String</td><td>The status of the user's email.</td></tr><tr><td>phone</td><td>String</td><td>Contact phone number of the user.</td></tr><tr><td>employee_number</td><td>String</td><td>Employee number of the user.</td></tr><tr><td>onboard_time</td><td>Integer</td><td>User onboarding date.</td></tr><tr><td>nfc_cards</td><td>Array[Object]</td><td>Token associated with the bound NFC card.</td></tr><tr><td>nfc_cards[].id</td><td>String</td><td>Display ID of the NFC card.</td></tr><tr><td>nfc_cards[].token</td><td>String</td><td>Unique NFC card token.</td></tr><tr><td>license_plates[].id</td><td>String</td><td>Unique ID of the license plate.</td></tr><tr><td>license_plates[].credential</td><td>String</td><td>License plate number.</td></tr><tr><td>license_plates[].credential_type</td><td>String</td><td>Type of credential, should be "license".</td></tr><tr><td>license_plates[].credential_status</td><td>String</td><td>Status of the credential enum credential_status {active, deactivate}.</td></tr><tr><td>pin_code</td><td>Object</td><td>Token associated with the bound PIN code.</td></tr><tr><td>pin_code.token</td><td>String</td><td>The user's PIN hash code credential for unlocking a door.</td></tr><tr><td>access_policy_ids</td><td>Array&lt;String]</td><td>Collection of the access policy ID.</td></tr><tr><td>access_policies</td><td>Array[Object]</td><td>All policies assigned to the user.</td></tr><tr><td>status</td><td>String</td><td>enum status {ACTIVE, PENDING, DEACTIVATED} 
ACTIVE: The user account is in active status. 
PENDING: A new admin account has been invited by the SSO account, but the invitation has not been accepted. DEACTIVATED: The account has been deactivated.</td></tr><tr><td>touch_pass</td><td>Array[Object]</td><td>Touch Pass assigned to the user, A user can only be assigned one TouchPass.</td></tr></table>

# 3.2 User Registration

This API allows you to register a new user.

| Request URL | `/api/v1/developer/users` |
| :--- | :--- |
| Permission Key | `edit:user` |
| Method | `POST` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td>How to Get It?</td></tr><tr><td>first_name</td><td>T</td><td>String</td><td>First name of the user.</td><td></td><td></td></tr><tr><td>last_name</td><td>T</td><td>String</td><td>Last name of the user.</td><td></td><td></td></tr><tr><td>user_email</td><td>F</td><td>String</td><td>Email of the user. UniFi Access Requirement: 1.22.16 or later</td><td></td><td></td></tr><tr><td>employee_number</td><td>F</td><td>String</td><td>Employee number of the user. Omit this parameter if it doesn&#x27;t need to be updated.</td><td></td><td></td></tr><tr><td>onboard_time</td><td>F</td><td>Integer</td><td>User onboarding date.</td><td>1689150139</td><td></td></tr></table>

# Response Body

*See Response Schema for full field definitions.*

# Response Sample

```json
{ "code": "SUCCESS", "msg": "success", "data": { "first_name": "Fist Name", "last_name": "Last Name", "id": "37f2b996-c2c5-487b-aa22-8b453ff14a4b", "user_email": "example@*.com" } } 
```

# Request Sample

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

# 3.3 Update User

This API allows you to update user details.

| Request URL | `/api/v1/developer/users/:id` |
| :--- | :--- |
| Permission Key | `edit:user` |
| Method | `PUT` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user.</td><td>348e868e-534a-4ace-ba77-ce80394e31e3</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td>How to Get It?</td></tr><tr><td>first_name</td><td>F</td><td>String</td><td>First name of the user.</td><td></td><td></td></tr><tr><td>last_name</td><td>F</td><td>String</td><td>Last name of the user.</td><td></td><td></td></tr><tr><td>user_email</td><td>F</td><td>String</td><td>Email of the user. UniFi Access Requirement: 1.22.16 or later</td><td></td><td></td></tr><tr><td>employee_number</td><td>F</td><td>String</td><td>Employee number of the user.</td><td></td><td></td></tr><tr><td>onboard_time</td><td>F</td><td>Integer</td><td>User onboarding date.</td><td>1689150139</td><td></td></tr><tr><td>status</td><td>F</td><td>String</td><td>Status of the user.</td><td>"ACTIVE" "DEACTIVATED"</td><td></td></tr></table>

# Response Body

*See Response Schema for full field definitions.*

# Response Sample

```json
{ "code": "SUCCESS", "data": null, "msg": "success" } 
```

# Request Sample

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

# 3.4 Fetch User

This API allows you to fetch user details.

| Request URL | `/api/v1/developer/users/:id` |
| :--- | :--- |
| Permission Key | `view:user` |
| Method | `GET` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user.</td><td>348e868e-534a-4ace-ba77-ce80394e31e3</td></tr></table>

# Query Parameters

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>expand[]</td><td>F</td><td>Boolean</td><td>Determine whether to return the access policies assigned to a user (Optional).</td><td>expand|=access_policy</td></tr></table>

# Response Body

*See Response Schema for full field definitions.*

# Response Sample

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
        "nfc_cards": [
            {"id": "100001", "token": "d27822fc682b478dc637c6db01813e465174df6e54ca515d8427db623cfda1d0", "type": "ua_card"}
        ],
        "license_plates": [
            {"credential": "jq178", "credential_status": "active", "credential_type": "license", "id": "5cac1825-f5e9-410d-a32e-a1fb9fc83b92"}
        ],
        "onboard_time": 1689047588,
        "pin_code": {"token": "5f742ee4424e5a7dd265de3461009b9ebafa1fb9d6b15018842055cc0466ac56"},
        "status": "ACTIVE"
    "msg": "success"
}
```

# Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/api/v1/developer/users/348e868e-534a-4ace-ba77-ce80394e31e3? expand[]=access_policy'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

# 3.5 Fetch All Users

This API allows you to fetch all users.

| Request URL | `/api/v1/developer/users` |
| :--- | :--- |
| Permission Key | `view:user` |
| Method | `GET` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Query Parameters

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>expand[]</td><td>F</td><td>Boolean</td><td>Determine whether to return the access policies assigned to a user (Optional).</td><td>expand|=access_policy</td></tr><tr><td>page_num</td><td>F</td><td>String</td><td>Current page number in the pagination.</td><td>1</td></tr><tr><td>page_size</td><td>F</td><td>String</td><td>Number of users per page.</td><td>25</td></tr></table>

# Response Sample

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
```

# Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/api/v1/developer/users?page_num=1&page_size=25&expand[]=access_policy'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

# 3.6 Assign Access Policy to User

| Request URL | `/api/v1/developer/users/:id/access_policies` |
| :--- | :--- |
| Permission Key | `edit:user` |
| Method | `PUT` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user.</td><td>Get it from the API /api/v1/developer/users</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>access_policy_ids</td><td>T</td><td>Array:String</td><td>Collection of multiple policy IDs.</td><td>Get it from the API /api/v1/developer/access_policies</td></tr></table>

# Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
# Assign access policies to user
curl -XPUT '{host}/api/v1/developer/users/38857332-7a5e-4bb6-8837-651b2a47cea5/access_policies' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data-raw '{ "access_policy_ids": ["03895c7f-9f53-4334-812b-5db9c122c109", "3b6bcb0c-7498-44cf-8615-00a96d824cbe"] }' \
--insecure
```

```bash
# Remove all access policies from user
curl -XPUT '{host}/api/v1/developer/users/38857332-7a5e-4bb6-8837-651b2a47cea5/access_policies' \
-H 'Authorization: Bearer wHFmHR******kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data-raw '{ "access_policy_ids": [] }' \
--insecure
```

# Response Sample

```json
{"code":"SUCCESS","msg":"success"} 
```

# 3.7 Assign NFC Card to User

| Request URL | `/api/v1/developer/users/:id/nfc_cards` |
| :--- | :--- |
| Permission Key | `edit:user` |
| Method | `PUT` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user.</td><td>Get it from the API /api/v1/developer/users</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>token</td><td>T</td><td>String</td><td>Token of the NFC card.</td><td>Get it from the API /api/v1/developer/nfc_cards sessions/{session_id}</td></tr><tr><td>force_add</td><td>F</td><td>Boolean</td><td>Determine whether to overwrite an NFC card that has already been assigned.</td><td>true or false</td></tr></table>

# Request Sample: Shell/cURL

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

# Response Sample

```json
{"code":"SUCCESS","msg":"success"} 
```

# 3.8 Unassign NFC Card from User

| Request URL | `/api/v1/developer/users/:id/nfc_cards/delete` |
| :--- | :--- |
| Permission Key | `edit:user` |
| Method | `PUT` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user.</td><td>Get it from the API /api/v1/developer/users</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>token</td><td>T</td><td>String</td><td>Token of the NFC card.</td><td>Get it from the API /api/v1/developer/users</td></tr></table>

# Request Sample: Shell/cURL

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

# Response Sample

```json
{"code":"SUCCESS","msg":"success"} 
```

# 3.9 Assign PIN Code to User

| Request URL | `/api/v1/developer/users/:id/pin_codes` |
| :--- | :--- |
| Permission Key | `edit:user` |
| Method | `PUT` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user.</td><td>Get it from the API /api/v1/developer/users</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>pin_code</td><td>T</td><td>String</td><td>Generate a PIN code for the user to unlock doors.</td><td>Get it from the API /api/v1/developer/pin_codes</td></tr></table>

# Request Sample: Shell/cURL

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

# Response Sample

```json
{"code":"SUCCESS","msg":"success"} 
```

# 3.10 Unassign PIN Code from User

| Request URL | `/api/v1/developer/users/:id/pin_codes` |
| :--- | :--- |
| Permission Key | `edit:user` |
| Method | `DELETE` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user.</td><td>Get it from the API /api/v1/developer/users</td></tr></table>

# Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XDELETE '{host}/api/v1/developer/users/17d2f099-99df-429b-becb-1399a6937e5a/pin_codes'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

# Response Sample

```json
{"code":"SUCCESS","msg":"success"} 
```

# 3.11 Create User Group

| Request URL | `/api/v1/developer/user_groups` |
| :--- | :--- |
| Permission Key | `edit:user` |
| Method | `POST` |
| UniFi Access Requirement | 2.2.6 or later |
API version: v1

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the group.</td><td></td></tr><tr><td>up_id</td><td>F</td><td>String</td><td>Parent group ID
(Optional)</td><td>Get it from the API
/api/v1/developer/user_groups</td></tr></table>

# Request Sample: Shell/cURL

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

# Response Sample

```json
{"code":"SUCCESS","msg":"success"} 
```

# 3.12 Fetch All User Groups

| Request URL | `/api/v1/developer/user_groups` |
| :--- | :--- |
| Permission Key | `view:user` |
| Method | `GET` |
| UniFi Access Requirement | 2.2.6 or later |
API version: v1

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/api/v1/developer/developer/user_groups'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

# Response Sample

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
    ],
    "msg": "success"
} 
```

# 3.13 Fetch User Group

| Request URL | `/api/v1/developer/user_groups/:id` |
| :--- | :--- |
| Permission Key | `view:user` |
| Method | `GET` |
| UniFi Access Requirement | 2.2.6 or later |
API version: v1

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user group.</td><td>Get it from the API /api/v1/developer/user_groups</td></tr></table>

# Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/api/v1/developer/developer/user_groups/75011ee6-b7ab-4927-9d9f-dd08ef0a3199'  
-H 'Authorization: Bearer wHFmHR*****KD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

# Response Sample

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
    "msg": "success"
} 
```

# 3.14 Update User Group

| Request URL | `/api/v1/developer/user_groups/:id` |
| :--- | :--- |
| Permission Key | `edit:user` |
| Method | `PUT` |
| UniFi Access Requirement | 2.2.6 or later |
API version: v1

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user group.</td><td>Get it from the API /api/v1/developer/user_groups</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the group.</td><td></td></tr><tr><td>up_id</td><td>F</td><td>String</td><td>Parent group ID</td><td>Get it from the API /api/v1/developer/user_groups</td></tr></table>

# Request Sample: Shell/cURL

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

# Response Sample

```json
{"code":"SUCCESS","msg":"success"} 
```

# 3.15 Delete User Group

| Request URL | `/api/v1/developer/user_groups/:id` |
| :--- | :--- |
| Permission Key | `edit:user` |
| Method | `DELETE` |
| UniFi Access Requirement | 2.2.6 or later |
API version: v1

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user group.</td><td>Get it from the API /api/v1/developer/user_groups</td></tr></table>

# Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XDELETE '{host}/api/v1/developer/developer/user_groups/75011ee6-b7ab-4927-9d9f-dd08ef0a3199'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

# Response Sample

```json
{"code":"SUCCESS","msg":"success"} 
```

# 3.16 Assign User to User Group

| Request URL | `/api/v1/developer/user_groups/:id/users` |
| :--- | :--- |
| Permission Key | `edit:user` |
| Method | `POST` |
| UniFi Access Requirement | 2.2.6 or later |
API version: v1

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user group.</td><td>Get it from the API /api/v1/developer/user_groups</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td></td><td>T</td><td>Array:String</td><td>Identity ID of the user.</td><td>Get it from the API /api/v1/developer/users</td></tr></table>

# Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XPOST '{host}/api/v1/developer/user_groups/75011ee6-b7ab-4927-9d9f-dd08ef0a3199/users' \
-H 'Authorization: Bearer wHFmHR******kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data-raw '["7c6e9102-acb7-4b89-8ed4-7561e6fb706c", "fd63bc4c-52e0-4dbf-a699-e1233339c73b"]' \
--insecure
```

# Response Sample

```json
{"code":"SUCCESS","msg":"success"} 
```

# 3.17 Unassign User from User Group

| Request URL | `/api/v1/developer/user_groups/:id/users/delete` |
| :--- | :--- |
| Permission Key | `edit:user` |
| Method | `POST` |
| UniFi Access Requirement | 2.2.6 or later |
API version: v1

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user group.</td><td>Get it from the API /api/v1/developer/user_groups</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td></td><td>T</td><td>Array:String</td><td>Identity ID of the user.</td><td>Get it from the API /api/v1/developer/users</td></tr></table>

# Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XPOST '{host}/api/v1/developer/user_groups/75011ee6-b7ab-4927-9d9f-dd08ef0a3199/users/delete' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data-raw '["7c6e9102-acb7-4b89-8ed4-7561e6fb706c", "fd63bc4c-52e0-4dbf-a699-e1233339c73b"]' \
--insecure
```

# Response Sample

```json
{"code":"SUCCESS","msg":"success"} 
```

# 3.18 Fetch Users in a User Group

This API allows you to fetch only the users in a user group, excluding any subgroups.

| Request URL | `/api/v1/developer/user_groups/:id/users` |
| :--- | :--- |
| Permission Key | `view:user` |
| Method | `GET` |
| UniFi Access Requirement | 2.2.6 or later |
API version: v1

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user group.</td><td>Get it from the API /api/v1/developer/user_groups</td></tr></table>

# Response Body

*See Response Schema for full field definitions.*

# Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/api/v1/developer/user_groups/23676a54-382e-4121-AA80-878d2d9bacaa/users'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": [{"alias": "", "avatar_relative_path": "", "email": "*@*.com", "email_status": "UNVERIFIED", "employee_number": "1000000", "first_name": "", "full_name": "", "id": "27aa91ac-2924-43d4-82e1-24b6a570d29e", "last_name": "Chen", "onboard_time": 1689150139, "phone": "", "status": "ACTIVE", "user_email": "", "username": ""
} 
],"msg": "success"1 
```

# 3.19 Fetch All Users in a User Group

This API allows you to fetch all users in a user group, including those in subgroups.

| Request URL | `/api/v1/developer/user_groups/:id/users/all` |
| :--- | :--- |
| Permission Key | `view:user` |
| Method | `GET` |
| UniFi Access Requirement | 2.2.6 or later |
API version: v1

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user group.</td><td>Get it from the API /api/v1/developer/user_groups</td></tr></table>

# Response Body

*See Response Schema for full field definitions.*

# Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}'/api/v1/developer/user_groups/23676a54-382e-4121-AA80-878d2d9bacaa/users/all'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

# Response Sample

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
            "username": "", 
        }
    ],
    "msg": "success" 
```

# 3.20 Fetch the Access Policies Assigned to a User

This API allows you to fetch the access policies assigned to a user.

| Request URL | `/api/v1/developer/users/:id/access_policies` |
| :--- | :--- |
| Permission Key | `view:user` |
| Method | `GET` |
| UniFi Access Requirement | 2.2.6 or later |
API version: v1

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user.</td><td>Get it from the API /api/v1/developer/users</td></tr></table>

# Query Parameters

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>only_user_policies</td><td>F</td><td>Boolean</td><td>If &#x27;only_user_policies&#x27; is set to false, all policies of the group the user belongs to are displayed. If set to true, only the policies assigned directly to the user are shown.</td><td>only_user_policies=true</td></tr></table>

# Response Body

*See Response Schema for full field definitions.*

# Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/users/27aa91ac-2924-43d4-82e1-24b6a570d29e/access_policies? only_user_policies=false' -H 'Authorization: Bearer wHFmHR*****kD6wHg' -H 'accept: application/json' -H 'content-type: application/json' --insecure 
```

# Response Sample

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
    ],
    "id": "bbe48a65-2ac1-4bf6-bd65-bc8f9ee7fb75",
    "name": "Access Policy Name",
    "resources": [], 
    "schedule_id": "f7414bcd-f0cc-4d3e-811a-b5ac75f7ddb8"
    ]
    ],
    "msg": "success"
} 
```

# 3.21 Assign Access Policy to User Group

This API is used to assign access policies to a user group.

| Request URL | `/api/v1/developer/user_groups/:id/access_policies` |
| :--- | :--- |
| Permission Key | `edit:user` |
| Method | `PUT` |
| UniFi Access Requirement | 2.2.6 or later |
API version: v1

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user group.</td><td>Get it from the API /api/v1/developer/user_groups</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>access_policy_ids</td><td>T</td><td>Array:String</td><td>Identity ID of the access policy.</td><td>Get it from the API /api/v1/developer/access_policies</td></tr></table>

# Request Sample: Shell/cURL

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

# Response Sample

```json
{ "code": "SUCCESS", "data": null, "msg": "success" } 
```

# 3.22 Fetch the Access Policies Assigned to a User Group

This API allows you to fetch the access policies assigned to a user group.

| Request URL | `/api/v1/developer/user_groups/:id/access_policies` |
| :--- | :--- |
| Permission Key | `view:user` |
| Method | `GET` |
| UniFi Access Requirement | 2.2.6 or later |
API version: v1

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user group.</td><td>Get it from the API /api/v1/developer/user_groups</td></tr></table>

# Response Body

*See Response Schema for full field definitions.*

# Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/user_groups/23676a54-382e-4121-AA80-878d2d9bacaa/access_policies'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

# Response Sample

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
    ],
    "id": "bbe48a65-2ac1-4bf6-bd65-bc8f9ee7fb75",
    "name": "Access Policy Name",
    "resources": [], 
    "schedule_id": "f7414bcd-f0cc-4d3e-811a-b5ac75f7ddb8"
    ],
    "msg": "success"
} 
```

# 3.23 Delete User

This API allows you to delete a user whose status is disabled.

| Request URL | `/api/v1/developer/users/:id` |
| :--- | :--- |
| Permission Key | `edit:user` |
| Method | `DELETE` |
| UniFi Access Requirement | 3.1.30 or later |
API version: v1   
Note: Only users with a disabled can be deleted.

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user.</td><td>Get it from the API /api/v1/developer/users</td></tr></table>

# Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XDELETE '{host}/api/v1/developer/developer/users/348e868e-534a-4ace-ba77-ce80394e31e3'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

# Response Sample

```json
{"code":"SUCCESS","msg":"success"} 
```

# 3.24 Search Users

This API allows you to fetch all users.

| Request URL | `/api/v1/developer/users/search` |
| :--- | :--- |
| Permission Key | `view:user` |
| Method | `GET` |
| UniFi Access Requirement | 3.1.30 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Query Parameters

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>keyword</td><td>F</td><td>String</td><td>Determine whether to return the access policies assigned to a user (Optional).</td><td>keyword=Name</td></tr><tr><td>user_id</td><td>F</td><td>String</td><td>Support filtering by multiple user Identity IDs.</td><td>user_id=472cabd2-0634-4e85-9e8d-5a73b500516a&amp;user_id=21472b1d-aa3a-4f2c-855e-0ec3dcaaeb5a</td></tr><tr><td>only_admin</td><td>F</td><td>Boolean</td><td>Filter to display only admin users.</td><td>only_admin=false</td></tr><tr><td>status</td><td>F</td><td>String</td><td>Support filtering by multiple user statuses.</td><td>status=ACTIVE&amp;status=DEACTIVATED&amp;status=PENDING</td></tr><tr><td>page_num</td><td>F</td><td>String</td><td>Current page number in the pagination.</td><td>1</td></tr><tr><td>page_size</td><td>F</td><td>String</td><td>Number of users per page.</td><td>25</td></tr></table>

# Response Body

*See Response Schema for full field definitions.*

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": {
        [ 
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
    }
} 
```

# Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/api/v1/developer/users/search?keyword=Name&user_id=472cabd2-0634-4e85-9e8d-5a73b500516a&user_id=21472b1d-AA3a-4f2c-855e-0ec3dcaaeb5a&only_admin=false&status=ACTIVE&status=DEACTIVATED&page_size=10&page_num=1' -H 'Authorization: Bearer wHFmHR*****kD6wHg' -H 'accept: application/json' -H 'content-type: application/json' --insecure 
```

# 3.25 Assign Touch Pass to User

This API assigns a suspended or inactive Touch Pass to a specific user.

| Request URL | `/api/v1/developer/users/:user_id/touch_passes/:touch_pass_id` |
| :--- | :--- |
| Permission Key | `edit:user` |
| Method | `PUT` |
| UniFi Access Requirement | Version 3.2.20 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example UUID</td><td>How to Get It?</td></tr><tr><td>user_id</td><td>T</td><td>String</td><td>ID of the user assigned to the Touch Pass.</td><td>cadb8707-a2c1-4407-a904-24868bf4aad9</td><td>Get it from API /api/v1/developer/users</td></tr><tr><td>touch_pass_id</td><td>T</td><td>String</td><td>Touch Pass ID.</td><td>e9a8e5ad-0afd-4abf-a9ce-9535df6bc00d</td><td>Get it from API /api/v1/developer/credentials/touch_passes/assignable</td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Type</td><td>Description</td></tr><tr><td>id</td><td>String</td><td>Touch Pass ID.</td></tr><tr><td>card_id</td><td>String</td><td>Card ID associated with Touch Pass.</td></tr><tr><td>card_name</td><td>String</td><td>Card name or alias.</td></tr><tr><td>status</td><td>String</td><td>enum status {PENDING} Touch Pass status after being assigned.</td></tr><tr><td>last_activity</td><td>String</td><td>Timestamp of the last activity (ISO 8601 format).</td></tr><tr><td>bundles</td><td>Array</td><td>Reserved for future use. Currently always an empty array.</td></tr><tr><td>user_id</td><td>String</td><td>ID of the user assigned to the Touch Pass.</td></tr><tr><td>user_name</td><td>String</td><td>Full name of the user.</td></tr><tr><td>user_email</td><td>String</td><td>Email address of the user.</td></tr><tr><td>user_status</td><td>String</td><td>Status of the user's account (empty if unavailable).</td></tr><tr><td>user_avatar</td><td>String</td><td>URL of the user's avatar image (empty if unavailable).</td></tr></table>

# Response Sample

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
    "msg": "success"
} 
```

# Request Sample

```bash
curl --location --request PUT '{host}/api/v1/developer/users/cadb8707-a2c1-4407-a904-24868bf4aad9/touch_passes/e9a8e5ad-0afd-4abf-a9ce-9535df6bc00d' \
--header 'Authorization: Bearer wHFmHR*****kD6wHg' \
--data '' 
```

# 3.26 Unassign Touch Pass from User

This API unassigns a Touch Pass from a specific user.

| Request URL | `/api/v1/developer/users/:user_id/touch_passes/:touch_pass_id` |
| :--- | :--- |
| Permission Key | `edit:user` |
| Method | `DELETE` |
| UniFi Access Requirement | Version 3.2.20 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example UUID</td><td>How to Get It?</td></tr><tr><td>user_id</td><td>T</td><td>String</td><td>ID of the user to unassign the Touch Pass from.</td><td>cadb8707-a2c1-4407-a904-24868bf4aad9</td><td>Get it from API /api/v1/developer/users</td></tr><tr><td>touch_pass_id</td><td>T</td><td>String</td><td>ID of the Touch Pass to unassign.</td><td>e9a8e5ad-0afd-4abf-a9ce-9535df6bc00d</td><td>Get it from API /api/v1/developer/credentials/touch_passes</td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Type</td><td>Description</td></tr><tr><td>id</td><td>String</td><td>Touch Pass ID.</td></tr><tr><td>card_id</td><td>String</td><td>Card ID associated with Touch Pass.</td></tr><tr><td>card_name</td><td>String</td><td>Card name or alias.</td></tr><tr><td>status</td><td>String</td><td>enum status {SUSPENDED, INACTIVE} Touch Pass status after being unassigned.</td></tr><tr><td>last_activity</td><td>String</td><td>Timestamp of the last activity (ISO 8601 format).</td></tr><tr><td>bundles</td><td>Array</td><td>Reserved for future use. Currently always an empty array.</td></tr><tr><td>user_id</td><td>String</td><td>Empty string after unassignment.</td></tr><tr><td>user_name</td><td>String</td><td>Empty string after unassignment.</td></tr><tr><td>user_email</td><td>String</td><td>Empty string after unassignment.</td></tr><tr><td>user_avatar</td><td>String</td><td>Empty string after unassignment.</td></tr><tr><td>user_status</td><td>String</td><td>enum user_status {ACTIVE, PENDING} Status of the user at the time of unassignment.</td></tr></table>

# Response Sample

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
    "msg": "success"
}
```

# Request Sample

```bash
curl --location --request DELETE 'https://192.168.1.1:12445/api/v1/developer/users/cadb8707-a2c1-4407-a904-24868bf4aad9/touch_passes/e9a8e5ad-0afd-4abf-a9ce-9535df6bc00d' \
--header 'Authorization: Bearer wHFmHR*****kD6wHg' \
--data '' 
```

# 3.27 Batch Assign Touch Passes to Users

This API allows assigning unassigned Touch Passes to users using their email addresses.

| Request URL | `/api/v1/developer/users/touch_passes/assign` |
| :--- | :--- |
| Permission Key | `edit:user` |
| Method | `PUT` |
| UniFi Access Requirement | Version 3.2.20 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>ids</td><td>T</td><td>Array of Strings</td><td>List of user IDs to assign Touch Passes to.</td><td>Get it from API /api/v1/developer/users</td></tr><tr><td>emails</td><td>F</td><td>Object (Map)</td><td>Email of the user.</td><td></td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Type</td><td>Description</td></tr><tr><td>id</td><td>String</td><td>Touch Pass ID.</td></tr><tr><td>card_id</td><td>String</td><td>Card ID associated with Touch Pass.</td></tr><tr><td>card_name</td><td>String</td><td>Card name or alias.</td></tr><tr><td>status</td><td>String</td><td>enum status {PENDING} Touch Pass status after being assigned.</td></tr><tr><td>last_activity</td><td>String</td><td>Timestamp of the last activity (ISO 8601 format).</td></tr><tr><td>bundles</td><td>Array</td><td>Reserved for future use. Currently always an empty array.</td></tr><tr><td>user_id</td><td>String</td><td>ID of the user assigned to the Touch Pass.</td></tr><tr><td>user_name</td><td>String</td><td>Full name of the user.</td></tr><tr><td>user_email</td><td>String</td><td>Email address of the user.</td></tr><tr><td>user_status</td><td>String</td><td>Status of the user&#x27;s account (empty if unavailable).</td></tr><tr><td>user_avatar</td><td>String</td><td>URL of the user&#x27;s avatar image (empty if unavailable).</td></tr></table>

# Response Sample

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
    ],
    "msg": "success"
} 
```

# Request Sample

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

# 3.28 Assign License Plate Numbers to User

This API allows you to assign one or more license plate numbers to a specific user.

| Request URL | `/api/v1/developer/users/:id/license_plates` |
| :--- | :--- |
| Permission Key | `edit:user` |
| Method | `PUT` |
| UniFi Access Requirement | Version 3.3.10 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Bearer Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Unique ID of the user</td><td>Get it from /api/v1/developer/users</td></tr></table>

# Request Body

An array of license plate strings to assign to the user.

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>-</td><td>T</td><td>Array of Strings</td><td>List of license plate numbers</td></tr></table>

# Request Sample: Shell/cURL

```bash
curl --location --request PUT 'https://192.168.1.1:12445/api/v1/developer/users/d0beeccd-0f5e-4606-9d6e-764e19685e27/license_plates' \
--header 'Authorization: Bearer vPUhdytCPDvt/+dSLlGTjw' \
--header 'Content-Type: application/json' \
--data '["abcd5", "efge36"]' \
--insecure 
```

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": null,
    "msg": "success"
} 
```

# 3.29 Unassign License Plate Numbers from User

This API allows you to unassign a license plate number from a user.

| Request URL | `/api/v1/developer/users/:user_id/license_plates/:license_plate_id` |
| :--- | :--- |
| Permission Key | `edit:user` |
| Method | `DELETE` |
| UniFi Access Requirement | Version 3.3.10 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example UUID</td><td>How to Get It?</td></tr><tr><td>user_id</td><td>T</td><td>String</td><td>ID of the user to unassign the license plate number from.</td><td>d0beecccd-0f5e-4606-9d6e-764e19685e27</td><td>Get it from API /api/v1/developer/users</td></tr><tr><td>licenseplate_id</td><td>T</td><td>String</td><td>ID of the license plate number to unassign.</td><td>74f3c466-c564-4035-aebd-fd383ebebcc6a</td><td>Get it from API /api/v1/developer/users</td></tr></table>

# Request Sample: Shell/cURL

```bash
curl --location --request DELETE 'https://192.168.1.1:12445/api/v1/developer/users/d0beeecd-0f5e-4606-9d6e-764e19685e27/license_plates/74f3c466-c564-4035-aebd-fd383ebebcc6a' \
--header 'Authorization: Bearer vPUhdtCPDvt/+dSLlGTjw' 
```

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": null,
    "msg": "success"
} 
```

# 3.30 Upload User Profile Picture

This API allows you to upload a profile picture for a user.

| Request URL | `/api/v1/developer/users/:id/avatar` |
| :--- | :--- |
| Permission Key | `edit:user` |
| Method | `POST` |
| UniFi Access Requirement | Version 3.3.10 or later |
Note: Updating the profile picture is supported only for local users. UI Account users must update their profile picture through the UI Account interface (https://account.ui.com/).

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Unique ID of the user.</td><td>Get it from /api/v1/developer/users</td></tr></table>

# Request Body (Multipart Form)

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>file</td><td>T</td><td>File</td><td>Profile picture image file to upload.</td></tr></table>

# Request Sample: Shell/cURL

```bash
curl --location 'https://192.168.1.1:12445/api/v1/developer/users/d0beeccd-0f5e-4606-9d6e-764e19685e27/avatar' \
--header 'Authorization: Bearer vPUhdytCPDvt/+dSLlGTjw' \
--form 'file=@"./fa8134ba-352a-4499-ab62-713618388148.jpeg'" --insecure 
```

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": {
        "avatar_url": "https://192.168.1.1/proxy/users/public/avatar/d0beecccd-0f5e-4606-9d6e-764e19685e27"
    "msg": "success"
} 
```

# 4. Visitor

The APIs here are designed for managing visitors, including creating, viewing, and deleting visitors. They also enable the assigning of NFC cards, schedules, PIN codes, locations, and other access resources to visitors.

# 4.1 Schemas

<table><tr><td>Parameter</td><td>Type</td><td>Description</td></tr><tr><td>id</td><td>String</td><td>Identity ID of the visitor.</td></tr><tr><td>first_name</td><td>String</td><td>First name of the visitor.</td></tr><tr><td>last_name</td><td>String</td><td>Last name of the visitor.</td></tr><tr><td>status</td><td>String</td><td>The visitor's status. enum status {UPCOMING=1, VISITED=2, VISITING=3, CANCELLED=4, NO_VISIT=5, ACTIVE=6}</td></tr><tr><td>inviter_id</td><td>String</td><td>Identity ID of the inviter.</td></tr><tr><td>inviter_name</td><td>String</td><td>Name of the inviter.</td></tr><tr><td>mobile_phone</td><td>String</td><td>Contact phone number of the visitor.</td></tr><tr><td>remarks</td><td>String</td><td>Remarks of the visitor.</td></tr><tr><td>email</td><td>String</td><td>Email of the visitor.</td></tr><tr><td>visitor_company</td><td>String</td><td>Company of the visitor.</td></tr><tr><td>visit_reason</td><td>String</td><td>Visit reason: enum reason {Interview, Business, Cooperation, others}</td></tr><tr><td>start_time</td><td>Integer</td><td>Start time of the visit.</td></tr><tr><td>end_time</td><td>Integer</td><td>End time of the visit.</td></tr><tr><td>nfc_cards</td><td>Array[Object]</td><td>Token associated with the bound NFC card.</td></tr><tr><td>nfc_cards[].id</td><td>String</td><td>Display ID of the NFC card.</td></tr><tr><td>nfc_cards[].token</td><td>String</td><td>Unique NFC card token.</td></tr><tr><td>pin_code</td><td>Object</td><td>Token associated with the bound PIN code.</td></tr><tr><td>pin_code_token</td><td>String</td><td>The user's PIN hash code credential for unlocking a door.</td></tr><tr><td>schedule_id</td><td>String</td><td>Identity ID of the schedule.</td></tr><tr><td>schedule</td><td>Object</td><td>The schedule assigned to the visitor. If the schedule information is present, it indicates that the visit schedule is recurring. If the schedule information is not included, it indicates a one-time visit schedule.</td></tr><tr><td>schedule.name</td><td>String</td><td>Name of the schedule.</td></tr><tr><td>schedule.type</td><td>String</td><td>Type of the schedule.</td></tr><tr><td>schedule.week_schedule</td><td>Object</td><td>The customizable scheduling strategy for each day from Sunday to Saturday. If not specified, it means access is allowed every day.</td></tr><tr><td>schedule.week_schedule monday</td><td>Array[Object]</td><td>Specify the daily access time period from Sunday to Saturday.</td></tr><tr><td>schedule.week_schedule monday[0].start_time</td><td>String</td><td>Start time of the access time period.</td></tr><tr><td>schedule.week_schedule monday[0].end_time</td><td>String</td><td>End time of the access time period.</td></tr><tr><td>resources</td><td>Array[Object]</td><td>Specify the locations that the visitor can access.</td></tr><tr><td>resources[0].id</td><td>String</td><td>Identity ID of the door group.</td></tr><tr><td>resources[0].name</td><td>String</td><td>Name of the door group.</td></tr><tr><td>resources[0].type</td><td>String</td><td>Type of the door group.</td></tr><tr><td>license_plates</td><td>Array[Object]</td><td>License plates bound to the visitor.</td></tr><tr><td>license_plates[].id</td><td>String</td><td>Unique ID of the license plate.</td></tr><tr><td>license_plates[].credential</td><td>String</td><td>License plate number.</td></tr><tr><td>license_plates[].credential_type</td><td>String</td><td>Type of credential, should be "license".</td></tr><tr><td>license_plates[].credential_status</td><td>String</td><td>Status of the credential enum credential_status {active, deactivate}.</td></tr></table>

# 4.2 Create Visitor

This API enables you to create a new visitor.

| Request URL | `/api/v1/developer/visitors` |
| :--- | :--- |
| Permission Key | `edit:visitor` |
| Method | `POST` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td>How to Get It?</td></tr><tr><td>first_name</td><td>T</td><td>String</td><td>First name of the visitor.</td><td></td><td></td></tr><tr><td>last_name</td><td>T</td><td>String</td><td>Last name of the visitor.</td><td></td><td></td></tr><tr><td>remarks</td><td>F</td><td>String</td><td>Remarks about the visitor.</td><td></td><td></td></tr><tr><td>mobile_phone</td><td>F</td><td>String</td><td>Mobile phone number of the visitor.</td><td></td><td></td></tr><tr><td>email</td><td>F</td><td>String</td><td>Email address of the visitor.</td><td></td><td></td></tr><tr><td>visitor_company</td><td>F</td><td>String</td><td>Company name of the visitor.</td><td></td><td></td></tr><tr><td>start_time</td><td>T</td><td>Integer</td><td>Start time of the visit.</td><td>1688546460</td><td></td></tr><tr><td>end_time</td><td>T</td><td>Integer</td><td>End time of the visit.</td><td>1688572799</td><td></td></tr><tr><td>visit_reason</td><td>T</td><td>String</td><td>Visit reason: enum reason
{Interview, Business, Cooperation, Others}</td><td>Interview</td><td></td></tr></table>

# Assign Available Locations to Visitor

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td>How to Get It?</td></tr><tr><td>resources</td><td>F</td><td>Array[Object]</td><td>Assign available locations to the visitor.</td><td></td><td>Get it from the API /api/v1/developer/door_groups/topology</td></tr><tr><td>resources[0].id</td><td>F</td><td>String</td><td>When resource type is door_group, it refers to the group ID of a building or a customized door group. When type is door, it refers to the ID of a door.</td><td>9bee6e0e-108d-4c52-9107-76f2c7dea4f1</td><td></td></tr><tr><td>resources[0].type</td><td>F</td><td>String</td><td>Support both door and door_group.</td><td>door_group</td><td></td></tr></table>

# Assigned Schedules To Visitor

If the week_schedule information is present, it indicates that the visit schedule is recurring. If the week_schedule information is not included, it indicates a one-time visit schedule.

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>week_schedule</td><td>F</td><td>Object</td><td>The customizable scheduling strategy for each day from Sunday to Saturday. If not specified, it means access is allowed every day.</td><td></td></tr><tr><td>week_schedule.monday</td><td>F</td><td>Array[Object]</td><td>Specify the daily access time period from Sunday to Saturday.</td><td></td></tr><tr><td>week_schedule.monday[0].start_time</td><td>F</td><td>String</td><td>Start time of the access time period.</td><td>00:00:00</td></tr><tr><td>week_schedule.monday[0].end_time</td><td>F</td><td>String</td><td>End time of the access time period.</td><td>23:59:59</td></tr></table>

# Response Body

*See Response Schema for full field definitions.*

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": {
        "first_name": "H",
        "id": "fbe8d920-47d3-4cdf-bda7-bf4b0e26f73c",
        "last_name": "L",
        "nfc_cards": [],
        "resources": [
            {
                "id": "5c496423-6d25-4e4f-8cdf-95ad5135188a",
                "name": "Test Group",
                "type": "door_group"
            },
            {
                "id": "d5573467-d6b3-4e8f-8e48-8a322b91664a",
                "name": "UNVR",
                "type": "door_group"
            },
            {
                "id": "369215b0-cabe-49b6-aeaa-e0b7ec6424d5",
                "name": "visitor-1691671529285",
                "type": "door_group"
            }
        ],
        "schedule": {
            "id": "1fb849bb-e7e5-4516-8dd9-b78094a6708a",
            "is_default": false,
            "name": "schedule-1691671529237",
            "type": "access",
            "weekly": {
                "friday": [{"end_time": "17:00:59", "start_time": "10:00:00"}],
                "monday": [],
                "saturday": [],
                "sunday": [],
                "thursday": [{"end_time": "17:00:59", "start_time": "11:00:00"}],
                "tuesday": [{"end_time": "17:00:59", "start_time": "10:00:00"}],
                "wednesday": [{"end_time": "17:00:59", "start_time": "10:00:00"}]
            }
        },
        "schedule_id": "1fb849bb-e7e5-4516-8dd9-b78094a6708a",
        "status": "ACTIVE"
    "msg": "success"
}
```

# Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl '{host}'/api/v1/developer/visitors'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json' --data-raw
{
    "first_name": "H",
    "last_name": "L",
    "remarks": "", "mobile_phone": "", "email": "", "visitor_company": "", "start_time": 1688546460,
    "end_time": 1788572799,
    "visit_reason": "Intervieww",
    "week_schedule": {
        "sunday": [], "monday": [], "tuesday": [
            {
            "start_time": "10:00:00",
            },
            "end_time": "17:00:59"
        ]
    ],
    "wednesday": [
        {
        "start_time": "10:00:00",
        },
        "end_time": "17:00:59"
    ]
    ],
    "thursday": [
        {
        "start_time": "11:00:00",
        },
        "end_time": "17:00:59"
    ]
    ],
    "friday": [
        {
        "start_time": "10:00:00",
        },
        "end_time": "17:00:59"
    ]
    ],
    "saturday": []
},
    "resources": [
        { 
```

# 4.3 Fetch Visitor

This API enables you to fetch visitor details.

| Request URL | `/api/v1/developer/visitors/:id` |
| :--- | :--- |
| Permission Key | `view:visitor` |
| Method | `GET` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td></td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the visitor.</td><td></td></tr></table>

# Response Body

*See Response Schema for full field definitions.*

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": {
        "first_name": "UserID",
        "id": "3566867c-fa04-4752-98f6-43cf9a342d4a",
        "last_name": "Last Name",
        "nfc_cards": [ 
{
    "id": "100001",
    "token": "d27822fc682b478dc637c6db01813e465174df6e54ca515d8427db623cfda1d0",
    "type": "ua_card"
}
},
"license_plates": [
    {
        "credential": "jq178",
        "credential_status": "active",
        "credential_type": "license",
        "id": "5cac1825-f5e9-410d-a32e-a1fb9fc83b92"
   },
    {
        "credential": "bs279",
        "credential_status": "active",
        "credential_type": "license",
        "id": "f44c6f4e-543d-4aed-ae8c-9c17bab66787"
   }
],
"pin_code": {
    "token": "bc3e3135013e2dcae119390b7897166e8cec3bcf5becb6b05578ab67634559ed"
"resources": [
        {
            "id": "fd293ecb-98d2-425b-a020-cb9365ea48b3",
            "name": "visitor-1690337152955",
            "type": "door_group"
       }
],
"schedule": {
    "id": "6ccf9e1e-b174-476d-b2fe-96817c780fbf",
    "is_default": false,
    "name": "visitor-1690337152955",
    "type": "access",
    "weekly": null
},
"schedule_id": "6ccf9e1e-b174-476d-b2fe-96817c780fbf",
    "status": "VISITED"
"msg": "success" 
```

# Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/api/v1/developer/visitors/76794bd8-98c0-49b6-9230-ba8c5812cf29'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

# 4.4 Fetch All Visitors

This API enables you to fetch the list of all visitors.

| Request URL | `/api/v1/developer/visitors` |
| :--- | :--- |
| Permission Key | `view:visitor` |
| Method | `GET` |
Note: license plates will be supported by 3.3.10 or later

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Query Parameters

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>status</td><td>F</td><td>Integer</td><td>The visitor&#x27;s status. enum status{UPCOMING=1, VISITED=2, VISITING=3, CANCELED=4, NO_VISIT=5, ACTIVE=6}</td><td>1</td></tr><tr><td>keyword</td><td>F</td><td>String</td><td>Support prefix matching for first name and last name. NOTE: The status filtering is disabled when searching with keyword.</td><td>H</td></tr><tr><td>page_num</td><td>F</td><td>String</td><td>Current page number in the pagination.</td><td>1</td></tr><tr><td>page_size</td><td>F</td><td>String</td><td>Number of visitors per page.</td><td>25</td></tr><tr><td>expand[]</td><td>F</td><td>string</td><td>Determine whether to return the objects (Optional). currently supports the following objects: enum objects {none, access_policy, resource, schedule, nfl_card, pin_code}. For the &quot;none&quot; option, it means that no object will be returned. UniFi Access Requirement: 1.22.16 or later</td><td>expand|=access_policy&amp;expand|=resource&amp;expand|=schedule&amp;expand|=nfc_card&amp;expand|=pin_code</td></tr></table>

# Response Body

*See Response Schema for full field definitions.*

# Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/api/v1/developer/visitors?page_num=1&page_size=25'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure  
# fetch users through keyword  
curl -XGET '{host}/api/v1/developer/visitors?keyword=H'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

```bash
using the "expands" options  
curl -XGET '{host}/api/v1/developer/visitors?  
expand[]=access_policy&expand[]=resource&expand[]=schedule&expand[]=nfc_card&expand[]=pin_code'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

# 4.5 Update Visitor

This API enables you to update a visitor.

| Request URL | `/api/v1/developer/visitors/:id` |
| :--- | :--- |
| Permission Key | `edit:visitor` |
| Method | `PUT` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td>How to Get It?</td></tr><tr><td>first_name</td><td>F</td><td>String</td><td>First name of the visitor.</td><td></td><td></td></tr><tr><td>last_name</td><td>F</td><td>String</td><td>Last name of the visitor.</td><td></td><td></td></tr><tr><td>remarks</td><td>F</td><td>String</td><td>Remarks about the visitor.</td><td></td><td></td></tr><tr><td>mobile_phone</td><td>F</td><td>String</td><td>Mobile phone number of the visitor.</td><td></td><td></td></tr><tr><td>email</td><td>F</td><td>String</td><td>Email address of the visitor.</td><td></td><td></td></tr><tr><td>visitor_company</td><td>F</td><td>String</td><td>Company name of the visitor.</td><td></td><td></td></tr><tr><td>start_time</td><td>F</td><td>Integer</td><td>Start time of the visit.</td><td>1688546460</td><td></td></tr><tr><td>end_time</td><td>F</td><td>Integer</td><td>End time of the visit.</td><td>1688572799</td><td></td></tr><tr><td>visit_reason</td><td>F</td><td>String</td><td>Visit reason: enum reason
{Interview, Business, Cooperation, Others}</td><td>Interview</td><td></td></tr></table>

# Assign Available Locations to Visitor

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td>How to Get It?</td></tr><tr><td>resources</td><td>F</td><td>Array[Object]</td><td>Assign available locations to the visitor. 
Omit this parameter if it doesn't need 
to be updated.</td><td></td><td>Get it from the API 
/api/v1/developer/door_groups/topology</td></tr><tr><td>resources[0].id</td><td>F</td><td>String</td><td>When resource type is door_group, it refers to the group ID of a building or a customized door group. When type is door, it refers to the ID of a door.</td><td>9bee6e0e-108d-4c52-9107-76f2c7dea4f1</td><td></td></tr><tr><td>resources[0].type</td><td>F</td><td>String</td><td>Support both door and door_group.</td><td></td><td></td></tr></table>

Assigned Schedules To Visitor

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>week_schedule</td><td>F</td><td>Object</td><td>The customizable scheduling strategy for each day from Sunday to Saturday. If not specified, it means access is allowed every day. Omit this parameter if it doesn&#x27;t need to be updated.</td><td></td></tr><tr><td>week_schedule monday</td><td>F</td><td>Array[Object]</td><td>Specify the daily access time period from Sunday to Saturday.</td><td></td></tr><tr><td>week_schedule monday[0].start_time</td><td>F</td><td>String</td><td>Start time of the access time period.</td><td>00:00:00</td></tr><tr><td>week_schedule monday[0].end_time</td><td>F</td><td>String</td><td>End time of the access time period.</td><td>23:59:59</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td></td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the visitor.</td><td></td></tr></table>

# Response Body

*See Response Schema for full field definitions.*

Note: Status change is not supported.

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": {
        "first_name": "H",
        "id": "8564ce90-76ba-445f-b78b-6cca39af0130",
        "last_name": "L",
        "nfc_cards": [],
        "pin_code": null,
        "resources": [
            {
                "id": "d5573467-d6b3-4e8f-8e48-8a322b91664a",
                "name": "UNVR",
                "type": "door_group"
            },
            {
                "id": "e311ca94-172c-49fe-9c91-49bd8ecef845",
                "name": "visitor-1691646856144",
                "type": "door_group"
            }
        ],
        "schedule": {
            "id": "c03bf601-0b90-4341-bce4-6061931e9f4e",
            "is_default": false,
            "name": "visitor-1691646856097",
            "type": "access",
            "weekly": {
                "friday": [{"end_time": "17:00:59", "start_time": "10:00:00"}],
                "monday": [{"end_time": "17:00:59", "start_time": "10:00:00"}],
                "saturday": [],
                "sunday": [],
                "thursday": [{"end_time": "18:00:59", "start_time": "11:00:00"}],
                "tuesday": [],
                "wednesday": [{"end_time": "17:00:59", "start_time": "10:00:00"}]
            }
        },
        "schedule_id": "c03bf601-0b90-4341-bce4-6061931e9f4e",
        "status": "ACTIVE"
    "msg": "success"
}
```
# Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl -XPUT '{{host}}/api/v1/developer/visitors/c81dfee6-5970-4938-bd30-40820e16ea01'
    -H 'Authorization: Bearer wHFmHR******kD6wHg'
    -H 'accept: application/json'
    -H 'content-type: application/json'
    --data-raw '
    {
        "first_name": "Test",
        "last_name": "L",
        "remarks": "",
        "mobile_phone": "",
        "email": "",
        "visitor_company": "",
        "start_time": 1688546460,
        "end_time": 1788572799,
        "visit_reason": "Intervieww",
        "week_schedule": {
            "sunday": [],
            "monday": [
                {
                    "start_time": "10:00:00",
                    "end_time": "17:00:59"
                }
            ],
            "tuesday": [],
            "wednesday": [
                {
                    "start_time": "10:00:00",
                    "end_time": "17:00:59"
                }
            ]
            "thursday": [
                {
                    "start_time": "11:00:00",
                    "end_time": "18:00:59"
                }
            ],
            "friday": [
                {
                    "start_time": "10:00:00",
                    "end_time": "17:00:59"
                }
            ],
            "saturday": []
        },
        "resources": [
            {
                "id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
                "type": "door"
            },
            {
                "id": "5c496423-6d25-4e4f-8cdf-95ad5135188a",
                "type": "door_group"
            },
            {
                "id": "d5573467-d6b3-4e8f-8e48-8a322b91664a",
                "type": "door_group"
            }
        ]
    }'
    --insecure
```

# 4.6 Delete Visitor

This API enables you to delete a visitor.

| Request URL | `/api/v1/developer/visitors/:id` |
| :--- | :--- |
| Permission Key | `edit:visitor` |
| Method | `DELETE` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td></td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the visitor.</td><td></td></tr></table>

# Query Parameters

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>is_force</td><td>F</td><td>Boolean</td><td>If is_force is passed, physically delete this visitor; otherwise, update to canceled status.</td><td>is_force=true</td></tr></table>

# Response Sample

```json
{ "code": "SUCCESS", "data": null, "msg": "success" } 
```

# Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl -XDELETE '{host}/api/v1/developer/visitors/c81dfee6-5970-4938-bd30-40820e16ea01? is_force=true' -H 'Authorization: Bearer wHFmHR*****kD6wHg' -H 'accept: application/json' -H 'content-type: application/json' --insecure 
```

# 4.7 Assign NFC Card To Visitor

| Request URL | `/api/v1/developer/visitors/:id/nfc_cards` |
| :--- | :--- |
| Permission Key | `edit:visitor` |
| Method | `PUT` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the visitor.</td><td>Get it from the API /api/v1/developer/visitors</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>token</td><td>T</td><td>String</td><td>Token of the NFC card.</td><td>Get it from the API /api/v1/developer/nfc_cards sessions/{session_id}</td></tr><tr><td>force_add</td><td>F</td><td>Boolean</td><td>Determine whether to overwrite an NFC card that has already been assigned.</td><td>true or false</td></tr></table>

# Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XPUT '{host}/api/v1/developer/visitors/60b5c15e-9aff-4fc8-9547-d21d2e39c1ff/nfc_cards' \
-H 'Authorization: Bearer wHFmHR******kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data-raw '{
    "token": "d27822fc682b478dc637c6db01813e465174df6e54ca515d8427db623cfda1d0",
    "force_add": true
}' \
--insecure
```

# Response Sample

```json
{"code":"SUCCESS","msg":"success"} 
```

# 4.8 Unassign NFC Card From Visitor

| Request URL | `/api/v1/developer/visitors/:id/nfc_cards/delete` |
| :--- | :--- |
| Permission Key | `edit:visitor` |
| Method | `PUT` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the visitor.</td><td>Get it from the API /api/v1/developer/visitors</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>token</td><td>T</td><td>String</td><td>Token of the NFC card.</td><td>Get it from the API /api/v1/developer/visitors</td></tr></table>

# Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XPUT '{host}/api/v1/developer/visitors/60b5c15e-9aff-4fc8-9547-d21d2e39c1ff/nfc_cards/delete' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
-d '{
    "token": "d27822fc682b478dc637c6db01813e465174df6e54ca515d8427db623cfda1d0"
}' \
--insecure
```

# Response Sample

```json
{"code":"SUCCESS","msg":"success"} 
```

# 4.9 Assign PIN Code To Visitor

| Request URL | `/api/v1/developer/visitors/:id/pin_codes` |
| :--- | :--- |
| Permission Key | `edit:visitor` |
| Method | `PUT` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the visitor.</td><td>Get it from the API /api/v1/developer/visitors</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>pin_code</td><td>T</td><td>String</td><td>Generate a PIN code for the visitor to unlock doors.</td><td>Get it from the API
/api/v1/developer PIN_codes</td></tr></table>

# Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XPUT '{host}/api/v1/developer/visitors/17d2f099-99df-429b-becb-1399a6937e5a/pin_codes' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data-raw '{ "pin_code": "57301208" }' \
--insecure
```

# Response Sample

```json
{"code":"SUCCESS","msg":"success"} 
```

# 4.10 Unassign PIN Code From Visitor

| Request URL | `/api/v1/developer/visitors/:id/pin_codes` |
| :--- | :--- |
| Permission Key | `edit:visitor` |
| Method | `DELETE` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the visitor.</td><td>Get it from the API /api/v1/developer/visitors</td></tr></table>

# Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XDELETE '{host}/api/v1/developer/visitors/17d2f099-99df-429b-becb-1399a6937e5a/pin_codes' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--insecure
```

# Response Sample

```json
{"code":"SUCCESS","msg":"success"} 
```

# 4.11 Assign QR Code to Visitor

This API allows you to assign a QR code to a visitor.

| Request URL | `/api/v1/developer/visitors/:id/qr_codes` |
| :--- | :--- |
| Permission Key | `edit:visitor` |
| Method | `PUT` |
| UniFi Access Requirement | Version 3.3.10 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the visitor.</td><td>Get it from the API /api/v1/developer/visitors</td></tr></table>

# Request Sample: Shell/cURL

```bash
curl --location --request PUT 'https://192.168.1.1:12445/api/v1/developer/visitors/15a90692-6f3b-4e1c-9886-bcd15e9c3f2d/qr_codes' \
--header 'Authorization: Bearer s4KgshBaoXTxwfAHLPwDw' \
--insecure 
```

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": null,
    "msg": "success"
} 
```

# 4.12 Unassign QR Code from Visitor

This API allows you to unassign (remove) a QR code from a visitor.

| Request URL | `/api/v1/developer/visitors/:id/qr_codes` |
| :--- | :--- |
| Permission Key | `edit:visitor` |
| Method | `DELETE` |
| UniFi Access Requirement | Version 3.3.10 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the visitor.</td><td>Get it from the API /api/v1/developer/visitors</td></tr></table>

# Request Sample: Shell/cURL

```bash
curl --location --request DELETE  
'https://192.168.1.1:12445/api/v1/developer/visitors/15a90692-6f3b-4e1c-9886-bcd15e9c3f2d/qr_codes'  
--header 'Authorization: Bearer s4KgshBaoXTwXwFAHLPwDw'  
--header 'Content-Type: application/json'  
--insecure 
```

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": null,
    "msg": "success"
} 
```

# 4.13 Assign License Plate Numbers to Visitor

This API allows you to assign one or more license plate numbers to a visitor.

| Request URL | `/api/v1/developer/visitors/:id/license_plates` |
| :--- | :--- |
| Permission Key | `edit:visitor` |
| Method | `PUT` |
| UniFi Access Requirement | Version 3.3.10 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>ID of the visitor.</td><td>Get it from the API /api/v1/developer/visitors</td></tr></table>

# Request Sample: Shell/cURL

```bash
curl --location --request PUT 'https://192.168.1.1:12445/api/v1/developer/visitors/b8635fc9-e9d2-4ec5-8763-d2c067ba4fc2/license_plates' \
--header 'Authorization: Bearer s4KgshBaoXTXwFAhLPwDW' \
--header 'Content-Type: application/json' \
--data '[ "abcd", "efge3" ]
']' \
--insecure 
```

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": null,
    "msg": "success"
} 
```

# 4.14 Unassign License Plate Number from Visitor

This API allows you to unassign a license plate number from a visitor.

| Request URL | `/api/v1/developer/visitors/:visitor_id/license_plates/:license_plate_id` |
| :--- | :--- |
| Permission Key | `edit:visitor` |
| Method | `DELETE` |
| UniFi Access Requirement | Version 3.3.10 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>visitor_id</td><td>T</td><td>String</td><td>ID of the visitor to unassign the license plate number from.</td><td>Get it from the API /api/v1/developer/visitors</td></tr><tr><td>licenseplate_id</td><td>T</td><td>String</td><td>ID of the license plate number to unassign.</td><td>From the license plate numbers in visitor details</td></tr></table>

# Request Sample: Shell/cURL

```bash
curl --location --request DELETE  
'https://192.168.1.1:12445/api/v1/developer/visitors/b8635fc9-e9d2-4ec5-8763-d2c067ba4fc2/license_plates/0effb50b-8bc9-4a91-b06d-7aec2c896b91'  
--header 'Authorization: Bearer s4KgshBaoXTwXwFAHLPwDw'  
--header 'Content-Type: application/json' 
```

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": null,
    "msg": "success"
} 
```

# 5. Access Policy

The APIs here are designed for managing door access policies. These policies can be bound with access schedules, floors, and other door access resources.

# 5.1 Access Policy Schemas

<table><tr><td>Parameter</td><td>Type</td><td>Description</td></tr><tr><td>Id</td><td></td><td>Identity ID of the access policy.</td></tr><tr><td>name</td><td>String</td><td>Name of the access policy.</td></tr><tr><td>resources</td><td>Array[Object]</td><td>Specify the locations that can be accessed.</td></tr><tr><td>resources[].type</td><td>String</td><td>Include door and door_group resources. enum_type
{door, door_group}</td></tr><tr><td>resources[].id</td><td>String</td><td>When resource type is door_group, it refers to the group ID of a building or a customized door group. When type is door, it refers to the ID of a door.</td></tr><tr><td>schedule_id</td><td>String</td><td>Identity ID of the schedule.</td></tr></table>

# 5.2 Create Access Policy

This API allows you to create an access policy.

| Request URL | `/api/v1/developer/access_policies` |
| :--- | :--- |
| Permission Key | `edit:policy` |
| Method | `POST` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td><td>Example</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the access policy.</td><td></td><td></td></tr><tr><td>resource</td><td>F</td><td>Array[Object]</td><td>Used to assign accessible locations to the access policy.</td><td>Get it from the API /api/v1/developer/door_groups/topology; /api/v1/developer/door_groups</td><td></td></tr><tr><td>resources[].type</td><td>F</td><td>String</td><td>enum type {door, door_group}</td><td></td><td></td></tr><tr><td>resources[].id</td><td>F</td><td>String</td><td>When resource type is &#x27;door_group&#x27;, it refers to the group ID of a building or a customized door group. When type is &#x27;door&#x27;, it refers to the ID of a door.</td><td></td><td></td></tr><tr><td>schedule_id</td><td>T</td><td>String</td><td>Identity ID of the schedule. Assign additional schedules.</td><td>Get it from the API /api/v1/developer/access_policies/schedules</td><td></td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Related API</td><td>Purpose</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the policy.</td><td>/api/v1/developer/users/:user_id/access_policies</td><td>Used to both assign an access policy to a user or unassign a policy from them.</td></tr></table>

*See Response Schema for full field definitions.*

# Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl '{host}/api/v1/developer/access_policies' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data-raw '{
    "name": "test",
    "resources": [
        {
            "id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
            "type": "door"
        },
        {
            "id": "5c496423-6d25-4e4f-8cdf-95ad5135188a",
            "type": "door_group"
        },
        {
            "id": "d5573467-d6b3-4e8f-8e48-8a322b91664a",
            "type": "door_group"
        }
    ],
    "schedule_id": "4e108aab-ec9a-4822-bf86-170ea986f934"
}' \
--insecure
```

# Response Sample
```json
{
    "code": "SUCCESS",
    "data": {
        "id": "bb5eb965-42dc-4206-9654-88a2d1c3aaa5",
        "name": "test13",
        "resources": [
            {
                "id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
                "type": "door"
            },
            {
                "id": "5c496423-6d25-4e4f-8cdf-95ad5135188a",
                "type": "door_group"
            },
            {
                "id": "d5573467-d6b3-4e8f-8e48-8a322b91664a",
                "type": "door_group"
            }
        ],
        "schedule_id": "4e108aab-ec9a-4822-bf86-170ea986f934"
    ],
    "msg": "success"
} 
```

# 5.3 Update Access Policy

This API allows you to update a policy.

| Request URL | `/api/v1/developer/access_policies/:id` |
| :--- | :--- |
| Permission Key | `edit:policy` |
| Method | `PUT` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>Id</td><td>T</td><td>String</td><td>Identity ID of the access policy.</td><td></td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>name</td><td>F</td><td>String</td><td>Name of the access policy. Omit this parameter if it doesn&#x27;t need to be updated.</td><td></td></tr><tr><td>resource</td><td>F</td><td>Array[Object]</td><td>Used to assign accessible locations to the access policy. Omit this parameter if it doesn&#x27;t need to be updated.</td><td>Get it from the API /api/v1/developer/door_groups/topology; /api/v1/developer/door_groups</td></tr><tr><td>resources[].type</td><td>F</td><td>String</td><td>enum type {door, door_group}</td><td></td></tr><tr><td>resources[].id</td><td>F</td><td>String</td><td>When resource type is door_group, it refers to the group ID of a building or a customized door group. When type is door, it refers to the ID of a door.</td><td></td></tr><tr><td>schedule_id</td><td>F</td><td>String</td><td>Identity ID of the schedule. Assign additional schedules. Omit this parameter if it doesn&#x27;t need to be updated.</td><td>Get it from the API /api/v1/developer/access_policies/schedules</td></tr></table>

# Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl '{host}/api/v1/developer/access_policies/242c88e3-0524-42de-8447-45891c5df714'  
-H 'Authorization: Bearer wHFmHR******kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json' --data-raw  
{'  
    "name": "test",  
    "resource": [  
        {"id": "6ff875d2-af87-470b-9cb5-774c6596afc8",  
        "type": "door"  
    ],  
        {"id": "5c496423-6d25-4e4f-8cdf-95ad5135188a",  
        "type": "door_group"  
    },  
        {"id": "d5573467-d6b3-4e8f-8e48-8a322b91664a",  
        "type": "door_group"  
    },  
    "schedule_id": "4e108aab-ec9a-4822-bf86-170ea986f934"  
}  
--insecure 
```

# Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Related api</td><td>Purpose</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the policy.</td><td>/api/v1/developer/users/:user_id/access_policies</td><td>Used to both assign an access policy to a user or unassign a policy from them.</td></tr></table>

*See Response Schema for full field definitions.*

# 5.4 Delete Access Policy

This API allows you to delete an access policy.

| Request URL | `/api/v1/developer/access_policies/:id` |
| :--- | :--- |
| Permission Key | `edit:policy` |
| Method | `DELETE` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Id</td><td>T</td><td>String</td><td>Identity ID of the access policy.</td></tr></table>

# Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XDELETE '{host}'/api/v1/developer/access_policies/460d0bcc-5d4f-4e7b-8a3c-8d4502765e11'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
--insecure 
```

# Response Sample

```json
{"code":"SUCCESS","msg":"success","data":"success"} 
```

# 5.5 Fetch Access Policy

This API allows you to fetch a policy details.

| Request URL | `/api/v1/developer/access_policies/:id` |
| :--- | :--- |
| Permission Key | `view:policy` |
| Method | `GET` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Id</td><td>T</td><td>String</td><td>Identity ID of the access policy.</td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td></td></tr><tr><td>Data</td><td>T</td><td>Object</td><td></td><td></td><td></td></tr></table>

*See Response Schema for full field definitions.*

# Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl '{host}/api/v1/developer/ccess_policy'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": {
        "id": "ed09985f-cf52-486e-bc33-377b6ed7bbf2",
        "name": "test11",
        "resources": [
            {
                "id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
                "type": "door"
            },
        }
    }
} 
"id": "5c496423-6d25-4e4f-8cdf-95ad5135188a", "type": "door_group" }, { "id": "d5573467-d6b3-4e8f-8e48-8a322b91664a", "type": "door_group" } ], "schedule_id": "4e108aab-ec9a-4822-bf86-170ea986f934" }, "msg": "success" } 
```

# 5.6 Fetch All Access Policies

This API allows you to fetch all access policies.

| Request URL | `/api/v1/developer/access_policies` |
| :--- | :--- |
| Permission Key | `view:policy` |
| Method | `GET` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td></td></tr><tr><td>Data</td><td>T</td><td>Array[Object]</td><td></td><td></td><td></td></tr></table>

*See Response Schema for full field definitions.*

# Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl '{host}/api/v1/developer/access_policies'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

# Response Sample
```json
{
"code": "SUCCESS",
"data": [ {
	"id": "73f15cab-c725-4a76-a419-a4026d131e96",
	"name": "Default Admin Policy",
	"resources": [ {
		"id": "d5573467-d6b3-4e8f-8e48-8a322b91664a",
		"type": "door_group"
		"id": "5c496423-6d25-4e4f-8cdf-95ad5135188a",
		"type": "door_group"
	"schedule_id": "73facd6c-839e-4521-a4f4-c07e1d44e748"
},
{
	"id": "b96948a4-fed9-40a3-9c4a-e473822a3db7",
	"name": "Default UNVR Policy",
	"resources": [ {
		"id": "d5573467-d6b3-4e8f-8e48-8a322b91664a",
		"type": "door_group"
		"id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
		"type": "door"
	"schedule_id": "58c0f89b-f35c-4d2c-af7b-8b8918df2c31"
},
{
	"id": "edbc80df-3698-49fd-8b53-f1867f104947",
	"name": "TEST",
	"resources": [ {
		"id": "d5573467-d6b3-4e8f-8e48-8a322b91664a",
		"type": "door_group"
		"id": "5c496423-6d25-4e4f-8cdf-95ad5135188a",
		"type": "door_group"
		"id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
		"type": "door"
	},
], 
"schedule_id": "73facd6c-839e-4521-a4f4-c07e1d44e748" } ], "msg": "success" } 
```

# 5.7 Holiday Group Schemas

A holiday group refers to a collection of holidays.

<table><tr><td>Parameter</td><td>Type</td><td>Description</td></tr><tr><td>id</td><td>String</td><td>Identity ID of the holiday group.</td></tr><tr><td>name</td><td>String</td><td>Name of the holiday group.</td></tr><tr><td>is_default</td><td>Boolean</td><td>Indicate whether the holiday group is the system default.</td></tr><tr><td>description</td><td>String</td><td>Description of the holiday group.</td></tr><tr><td>holidays</td><td>Array[Object]</td><td>Show a list of the holidays within the holiday group.</td></tr><tr><td>holidays[].description</td><td>String</td><td>Description of the holiday.</td></tr><tr><td>holidays[].id</td><td>String</td><td>Identity ID of the holiday.</td></tr><tr><td>holidays[].name</td><td>String</td><td>Name of the holiday.</td></tr><tr><td>holidays[].repeat</td><td>Boolean</td><td>Indicate whether the holiday repeats annually.</td></tr><tr><td>holidays[].start_time</td><td>String</td><td>Start time of the holiday, provided in UTC format according to RFC3339.</td></tr><tr><td>holidays[].end_time</td><td>String</td><td>End time of the holiday, provided in UTC format according to RFC3339.</td></tr></table>

# 5.8 Create Holiday Group

This API allows you to create a holiday group.

| Request URL | `/api/v1/developer/access_policies/holiday_groups` |
| :--- | :--- |
| Permission Key | `edit:policy` |
| Method | `POST` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the holiday group.</td><td></td></tr><tr><td>description</td><td>F</td><td>String</td><td>Description of the holiday group.</td><td></td></tr><tr><td>holidays</td><td>F</td><td>Array[Object]</td><td>Show a list of the holidays within the holiday group.</td><td></td></tr><tr><td>holidays[].description</td><td>F</td><td>String</td><td>Description of the holiday.</td><td></td></tr><tr><td>holidays[].name</td><td>F</td><td>String</td><td>Name of the holiday.</td><td></td></tr><tr><td>holidays[].repeat</td><td>F</td><td>Boolean</td><td>Indicate whether the holiday repeats annually.</td><td></td></tr><tr><td>holidays[].is_template</td><td>F</td><td>Boolean</td><td>Indicate whether the holiday is created using a holiday group template.</td><td></td></tr><tr><td>holidays[].start_time</td><td>F</td><td>String</td><td>Start time of the holiday, provided in UTC format according to RFC3339.</td><td>2023-08-25T00:00:00Z</td></tr><tr><td>holidays[].end_time</td><td>F</td><td>String</td><td>End time of the holiday, provided in UTC format according to RFC3339.</td><td>2023-08-26T00:00:00Z</td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Related API</td><td>Purpose</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the holiday group.</td><td>/api/v1/developer/access_policies/schedules</td><td>Used to add a holiday group to the schedule.</td></tr></table>

*See Response Schema for full field definitions.*

# Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl '{host}/api/v1/developer/access_policies/holiday_groups'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json' 
```

```json
-H 'content-type: application/json' --data-raw
{' "name": "Holiday Group-169286791557142", "holidays": [ "name": "Holiday Name 1", "description": "", "repeat": false, "start_time": "2023-08-25T00:00:00z", "end_time": "2023-08-26T00:00:00z"
}, "name": "Holiday Name 2", "description": "", "repeat": false, "start_time": "2023-08-26T00:00:00z", "end_time": "2023-08-27T00:00:00z"
} ]
} 
```

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": {
        "description": "", "holidays": [
            {
            "description": "", "end_time": "2023-08-26 00:00:00z",
            "id": "8900533d-03be-4f84-832d-54ff59905759",
            "name": "Holiday Name 1",
            "repeat": false,
            "start_time": "2023-08-25 00:00:00z"
        },
    {
        "name": "holiday-2023-08-26",
        "end_time": "2023-08-27 00:00:00z",
        "id": "9fff81cc-d476-40c4-80f9-d510451ce2cd",
        "name": "Holiday Name 2",
        "repeat": false,
        "start_time": "2023-08-26 00:00:00z"
    }
    ], "id": "7be7a7a0-818f-4f76-98c3-1c38957f4dca",
    "is_default": false,
    "name": "Holiday Group-169286791557142",
    "template_name": "",
"msg": "success" 
```

# 5.9 Update Holiday Group

This API allows you to update a holiday group.

| Request URL | `/api/v1/developer/access_policies/holiday_groups/:id` |
| :--- | :--- |
| Permission Key | `edit:policy` |
| Method | `PUT` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td></td></tr><tr><td>Id</td><td>T</td><td>String</td><td>Identity ID of the holiday group.</td><td></td><td></td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the holiday group.</td><td></td></tr><tr><td>description</td><td>F</td><td>String</td><td>Description of the holiday group.</td><td></td></tr><tr><td>holidays</td><td>F</td><td>Array[Object]</td><td>Show a list of the holidays within the holiday group. Omit this parameter if it doesn&#x27;t need to be updated.</td><td></td></tr><tr><td>holidays[].id</td><td>F</td><td>String</td><td>Identity ID of the holiday. Omit this parameter if it doesn&#x27;t need to be updated.</td><td>Get it from the API /api/v1/developer/access_policies/holiday_groups</td></tr><tr><td>holidays[].description</td><td>F</td><td>String</td><td>Description of the holiday.</td><td></td></tr><tr><td>holidays[].name</td><td>F</td><td>String</td><td>Name of the holiday.</td><td></td></tr><tr><td>holidays[].repeat</td><td>F</td><td>Boolean</td><td>Indicate whether the holiday repeats annually.</td><td></td></tr><tr><td>holidays[].start_time</td><td>F</td><td>String</td><td>Start time of the holiday, provided in UTC format according to RFC3339.</td><td>2023-08-25T00:00:00Z</td></tr><tr><td>holidays[].end_time</td><td>F</td><td>String</td><td>End time of the holiday, provided in UTC format according to RFC3339.</td><td>2023-08-26T00:00:00Z</td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Related API</td><td>Purpose</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the holiday group.</td><td>/ api/v1/developer/access_policies/schedules</td><td>Used to add a holiday group to the schedule.</td></tr></table>

*See Response Schema for full field definitions.*

# Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```json
curl -XPUT '{host}/api/v1/developer/access_policies/holiday_groups/7be7a7a0-818f-4f76-98c3-1c38957f4dca'
-H 'Authorization: Bearer wHFmHR****************kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json' --data-raw
{
    "name": "Holiday Group-169286791557142",
    "holidays": [
        {
        "name": "Holiday Name 1",
        "description": "", "repeat": false,
        "start_time": "2023-08-25T00:00:00z",
        "end_time": "2023-08-26T00:00:00z"
    ],
    # add a new holiday
    {
        "id": "d23a4226-765f-4967-b84f-6dfd53f33c89", # update an existing holiday
        "name": "Holiday Name 2",
        "description": "", "repeat": false,
        "start_time": "2023-08-26T00:00:00z",
        "end_time": "2023-08-27T00:00:00z"
    }
} 
```

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": {
        "description": "",
        "holidays": [
            {
                "description": "",
                "end_time": "2023-08-26 00:00:00z",
                "id": "8900533d-03be-4f84-832d-54ff59905759",
                "name": "Holiday Name 1",
                "repeat": false,
                "start_time": "2023-08-25 00:00:00z"
            },
            {
                "description": "",
                "end_time": "2023-08-27 00:00:00z",
                "id": "9fff81cc-d476-40c4-80f9-d510451ce2cd",
                "name": "Holiday Name 2",
                "repeat": false,
                "start_time": "2023-08-26 00:00:00z"
            }
        ],
        "id": "7be7a7a0-818f-4f76-98c3-1c38957f4dca",
        "is_default": false,
        "name": "Holiday Group-169286791557142",
        "template_name": ""
    "msg": "success"
}
```

# 5.10 Delete Holiday Group

This API allows you to delete a holiday group.

| Request URL | `/api/v1/developer/access_policies/holiday_groups/:id` |
| :--- | :--- |
| Permission Key | `edit:policy` |
| Method | `DELETE` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Related API</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the holiday group.</td><td>/api/v1/developer/access_policies/holiday_groups</td></tr></table>

# Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XDELETE '{host}/api/v1/developer/access_policies/holiday_groups/7be7a7a0-818f-4f76-98c3-1c38957f4dca'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

# Response Sample

```json
{ "code": "SUCCESS", "data": "success", "msg": "success" } 
```

# 5.11 Fetch Holiday Group

This API allows you to fetch a holiday group.

| Request URL | `/api/v1/developer/access_policies/holiday_groups/:id` |
| :--- | :--- |
| Permission Key | `view:policy` |
| Method | `GET` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Id</td><td>T</td><td>String</td><td>Identity ID of the holiday group.</td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Related API</td><td>Purpose</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the holiday group.</td><td>/ api/v1/developer/access_policies/schedules</td><td>Used to add a holiday group to the schedule.</td></tr></table>

*See Response Schema for full field definitions.*

# Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/api/v1/developer/access_policies/holiday_groups/7be7a7a0-818f-4f76-98c3-1c38957f4dca'  
-H 'Authorization: Bearer wHFmHR*****KD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": {
        "description": "", "holidays": [
            {
            "description": "", "end_time": "2023-08-26 00:00:00z",
        "id": "8900533d-03be-4f84-832d-54ff59905759",
        "name": "Holiday Name 1",
        "repeat": false,
        "start_time": "2023-08-25 00:00:00z"
    },
    {
        "description": "", "end_time": "2023-08-27 00:00:00z",
        "id": "9fff81cc-d476-40c4-80f9-d510451ce2cd",
        "name": "Holiday Name 2",
        "repeat": false,
        "start_time": "2023-08-26 00:00:00z"
    }
    ], "id": "7be7a7a0-818f-4f76-98c3-1c38957f4dca",
    "is_default": false,
    "name": "Holiday Group-169286791557142",
    "template_name": "",
    "msg": "success"
} 
```

# 5.12 Fetch All Holiday Groups

This API allows you to fetch the list of all holiday groups.

| Request URL | `/api/v1/developer/access_policies/holiday_groups` |
| :--- | :--- |
| Permission Key | `view:policy` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Id</td><td>T</td><td>String</td><td>Identity ID of the holiday group.</td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Related API</td><td>Purpose</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the holiday group.</td><td>/api/v1/developer/access_policies/schedules</td><td>Used to add a holiday group to the schedule.</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the holiday group.</td><td></td><td></td></tr><tr><td>description</td><td>T</td><td>String</td><td>Description of the holiday group.</td><td></td><td></td></tr><tr><td>count</td><td>T</td><td>Integer</td><td>Total number of holidays.</td><td></td><td></td></tr></table>

# Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/api/v1/developer/access_policies/holiday_groups'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": [
        {
            "count": 0,
            "description": "",
            "id": "8cc22b49-a7f4-49a6-9f04-044444992d6c",
            "is_default": true,
            "name": "No Holidays"
        },
        {
            "count": 2,
            "description": "",
            "id": "86c634da-7b2c-411c-a2c1-1495d089c719",
            "is_default": false,
            "name": "Holiday Group-1692867312225"
        }
    ],
    "msg": "success"
}
```

# 5.13 Schedule Schemas

These schemas are utilized for creating time periods for daily visits from Sunday through Saturday. The primary purpose of these schemas is to facilitate the assignment of access policies to users.

<table><tr><td>Parameter</td><td>Type</td><td>Description</td></tr><tr><td>id</td><td>String</td><td>Identity ID of the schedule.</td></tr><tr><td>name</td><td>String</td><td>Name of the schedule.</td></tr><tr><td>is_default</td><td>Boolean</td><td>Indicate whether the schedule is the system default.</td></tr><tr><td>type</td><td>String</td><td>Contains the access type, which is assigned to a user along with an access policy.</td></tr><tr><td>weekly</td><td>Object</td><td>The customizable scheduling strategy for each day from Sunday to Saturday. If not specified, it means access is allowed every day.</td></tr><tr><td>weekly monday</td><td>Array[Object]</td><td>Specify the daily access time period from Sunday to Saturday.</td></tr><tr><td>weekly monday[].start_time</td><td>String</td><td>Start time of the access time period.</td></tr><tr><td>weekly monday[].end_time</td><td>String</td><td>End time of the access time period.</td></tr><tr><td>holiday_schedule</td><td>Array[Object]</td><td>Specify the accessible period during holidays. UniFi Access Requirement: 1.20.11 or later</td></tr><tr><td>holiday_schedule[0].start_time</td><td>String</td><td>Start time of the access time period.</td></tr><tr><td>holiday_schedule[0].end_time</td><td>String</td><td>End time of the access time period.</td></tr><tr><td>holiday_group_id</td><td>String</td><td>Identity ID of the holiday group.</td></tr><tr><td>holiday_group.id</td><td>String</td><td>Identity ID of the holiday group.</td></tr><tr><td>holiday_group.name</td><td>String</td><td>Name of the holiday group.</td></tr><tr><td>holiday_group.is_default</td><td>Boolean</td><td>Indicate whether the holiday group is the system default.</td></tr><tr><td>holiday_group.description</td><td>String</td><td>Description of the holiday group.</td></tr><tr><td>holiday_group.holidays</td><td>Array[Object]</td><td>Show a list of the holidays within the holiday group.</td></tr><tr><td>holiday_group.holidays[].description</td><td>String</td><td>Description of the holiday.</td></tr><tr><td>holiday_group.holidays[].id</td><td>String</td><td>Identity ID of the holiday.</td></tr><tr><td>holiday_group.holidays[].name</td><td>String</td><td>Name of the holiday.</td></tr><tr><td>holiday_group.holidays[].repeat</td><td>Boolean</td><td>Indicate whether the holiday repeats annually.</td></tr><tr><td>holiday_group.holidays[].start_time</td><td>String</td><td>Start time of the holiday, provided in UTC format according to RFC3339.</td></tr><tr><td>holiday_group.holidays[].end_time</td><td>String</td><td>End time of the holiday, provided in UTC format according to RFC3339.</td></tr></table>

# 5.14 Create Schedule

This API allows you to create a door access schedule.

| Request URL | `/api/v1/developer/access_policies/schedules` |
| :--- | :--- |
| Permission Key | `edit:policy` |
| Method | `POST` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>name</td><td>T</td><td>String</td><td>The name of the schedule. This needs to be globally unique.</td><td>schedule-1789067565323</td></tr><tr><td>week_schedule</td><td>T</td><td>Object</td><td>The customizable scheduling strategy for each day from Sunday to Saturday. If not specified, it means access is allowed every day.</td><td></td></tr><tr><td>week_schedule monday</td><td>T</td><td>Array[Object]</td><td>Specify the daily access time period from Sunday to Saturday.</td><td></td></tr><tr><td>week_schedule monday[0].start_time</td><td>T</td><td>String</td><td>Start time of the access time period.</td><td>00:00:00</td></tr><tr><td>week_schedule monday[0].end_time</td><td>T</td><td>String</td><td>End time of the access time period.</td><td>23:59:59</td></tr><tr><td>holiday_group_id</td><td>F</td><td>String</td><td>Identity ID of the holiday group. The default is No holidays system group.</td><td>75660081-431b-4dbe-9b98-e0257877118e</td></tr><tr><td>holiday_schedule</td><td>F</td><td>Array[Object]</td><td>Specify the accessible period during holidays.</td><td></td></tr><tr><td>holiday_schedule[].start_time</td><td>F</td><td>String</td><td>Start time of the access time period.</td><td>03:15:00</td></tr><tr><td>holiday_schedule[].end_time</td><td>F</td><td>String</td><td>End time of the access time period.</td><td>11:45:59</td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Related API</td><td>Purpose</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the schedule.</td><td>/api/v1/developer/access_policies</td><td>Used to add a schedule to the access policy.</td></tr></table>

*See Response Schema for full field definitions.*

# Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl '{host}/api/v1/developer/access_policies/schedules' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data-raw '{
    "name": "schedule-1688977094169",
    "week_schedule": {
        "sunday": [],
        "monday": [
            { "start_time": "10:00:00", "end_time": "17:00:59" }
        ],
        "tuesday": [
            { "start_time": "10:00:00", "end_time": "17:00:59" }
        ],
        "wednesday": [
            { "start_time": "10:00:00", "end_time": "17:00:59" }
        ],
        "thursday": [],
        "friday": [
            { "start_time": "10:00:00", "end_time": "17:00:59" }
        ],
        "saturday": []
    },
    "holiday_group_id": "75660081-431b-4dbe-9b98-e0257877118e",
    "holiday_schedule": [
        { "start_time": "03:15:00", "end_time": "11:45:59" },
        { "start_time": "15:00:00", "end_time": "19:00:59" }
    ]
}' \
--insecure
```

# Response Sample
```json
{
    "code": "SUCCESS",
    "data": {
        "id": "1d31b648-b8ff-4bd1-b742-60dbd70592cd",
        "is_default": false,
        "name": "schedule-1688977094169",
        "type": "access",
        "weekly": {
            "friday": [
                { "start_time": "10:00:00", "end_time": "17:00:59" }
            ],
            "monday": [
                { "start_time": "10:00:00", "end_time": "17:00:59" }
            ],
            "saturday": [],
            "sunday": [],
            "thursday": [],
            "tuesday": [
                { "start_time": "10:00:00", "end_time": "17:00:59" }
            ],
            "wednesday": [
                { "start_time": "10:00:00", "end_time": "17:00:59" }
            ]
        "holiday_group_id": "75660081-431b-4dbe-9b98-e0257877118e",
        "holiday_group": {
            "description": "",
            "holidays": [
                {
                    "description": "",
                    "end_time": "2023-08-26 00:00:00z",
                    "id": "d51777c4-9559-45aa-8e23-434995d9d2a1",
                    "is_template": false,
                    "name": "Holiday Name 1",
                    "repeat": false,
                    "start_time": "2023-08-25 00:00:00z"
                },
                {
                    "description": "",
                    "end_time": "2023-08-27 00:00:00z",
                    "id": "d23a4226-765f-4967-b84f-6dfd53f33c89",
                    "is_template": false,
                    "name": "Holiday Name 2",
                    "repeat": false,
                    "start_time": "2023-08-26 00:00:00z"
                }
            ],
            "id": "75660081-431b-4dbe-9b98-e0257877118e",
            "is_default": false,
            "name": "Holiday Group-1692867915571423",
            "template_name": ""
        "holiday_schedule": [
            { "start_time": "03:15:00", "end_time": "11:45:59" },
            { "start_time": "15:00:00", "end_time": "19:00:59" }
        ]
    "msg": "success"
}
```

# 5.15 Update Schedule

This API allows you to update a door access schedule.

| Request URL | `/api/v1/developer/access_policies/schedules/:id` |
| :--- | :--- |
| Permission Key | `edit:policy` |
| Method | `PUT` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td></td></tr><tr><td>Id</td><td>T</td><td>String</td><td>Identity ID of the schedule.</td><td></td><td></td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>name</td><td>F</td><td>String</td><td>The name of the schedule. This needs to be globally unique. Omit this parameter if it doesn't need to be updated.</td><td>schedule-1789067565323</td></tr><tr><td>week_schedule</td><td>F</td><td>Object</td><td>The customizable scheduling strategy for each day from Sunday to Saturday. If not specified, it means access is allowed every day. Omit this parameter if it doesn't need to be updated.</td><td></td></tr><tr><td>week_schedule.monday</td><td>F</td><td>Array[Object]</td><td>Specify the daily access time period from Sunday to Saturday.</td><td></td></tr><tr><td>week_schedule.monday[0].start_time</td><td>F</td><td>String</td><td>Start time of the access time period.</td><td>00:00:00</td></tr><tr><td>week_schedule.monday[0].end_time</td><td>F</td><td>String</td><td>End time of the access time period.</td><td>23:59:59</td></tr><tr><td>holiday_group_id</td><td>F</td><td>String</td><td>Identity ID of the holiday group. The default is No holidays system group.</td><td>75660081-431b-4dbe-9b98-e0257877118e</td></tr><tr><td>holiday_schedule</td><td>F</td><td>Array[Object]</td><td>Specify the accessible period during holidays.</td><td></td></tr><tr><td>holiday_schedule[].start_time</td><td>F</td><td>String</td><td>Start time of the access time period.</td><td>03:15:00</td></tr><tr><td>holiday_schedule[].end_time</td><td>F</td><td>String</td><td>End time of the access time period.</td><td>11:45:59</td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Related API</td><td>Purpose</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the schedule.</td><td>/api/v1/developer/access_policies</td><td>Used to add a schedule to the access policy.</td></tr></table>

*See Response Schema for full field definitions.*

# Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XPUT '{host}/api/v1/developer/access_policies/schedules/1d31b648-b8ff-4bd1-b742-60dbd70592cd'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json' --data-raw  
{'  
    "name": "schedule-1688977094169",  
    "holiday_group_id": "75660081-431b-4dbe-9b98-e0257877118e",  
    "week_schedule": {  
        "sunday": [],  
        "monday": [  
            {
            "start_time": "10:00:00",  
            },
            "end_time": "17:00:59"  
        ]  
    ],  
    "tuesday": [  
            { "start_time": "10:00:00", "end_time": "17:00:59" }
        ],
        "wednesday": [
            { "start_time": "10:00:00", "end_time": "17:00:59" }
        ],
        "thursday": [
            { "start_time": "10:00:00", "end_time": "17:00:59" }
        ],
        "friday": [
            { "start_time": "10:00:00", "end_time": "17:00:59" }
        ],
        "saturday": []
    },
    "holiday_schedule": [
        { "start_time": "03:15:00", "end_time": "11:45:59" }
    ]
}' \
--insecure
```

# Response Sample

```json
{ "code": "SUCCESS", "data": {}, "msg": "success" } 
```

# 5.16 Fetch Schedule

This API allows you to fetch a door access schedule.

| Request URL | `/api/v1/developer/access_policies/schedules/:id` |
| :--- | :--- |
| Permission Key | `view:policy` |
| Method | `GET` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>Id</td><td>T</td><td>String</td><td>Identity ID of the schedule.</td><td></td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the schedule.</td><td></td></tr><tr><td>week_schedule</td><td>T</td><td>Object</td><td>The customizable scheduling strategy for each day from Sunday to Saturday. If not specified, it means access is allowed every day.</td><td></td></tr><tr><td>holiday_group</td><td>F</td><td>Object</td><td>Show the assigned holiday group.</td><td></td></tr><tr><td>holiday_schedule</td><td>F</td><td>Array[Object]</td><td>Show the accessible period during holidays.</td><td></td></tr></table>

*See Response Schema for full field definitions.*

# Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl --location '{host}/api/v1/developer/access_policies/schedules/908079e7-e26b-4951-9073-d775446d3584' --header 'Authorization: Bearer wHFmHR*****kD6wHg' 
```

# Response Sample

```json
{ "code": "SUCCESS", "data": { "id": "1d31b648-b8ff-4bd1-b742-60dbd70592cd", "is_default": false, "name": "schedule-1688977094169", "type": "access", "weekly": { "friday": [ { "end_time": "17:00:59", "start_time": "10:00:00" } ], "monday": [ { 
"end_time": "17:00:59", "start_time": "10:00:00" } ], "saturday": [], "sunday": [], "thursday": [ { "end_time": "17:01:59", "start_time": "10:00:00" } ], "tuesday": [ { "end_time": "17:00:59", "start_time": "10:00:00" } ], "wednesday": [ { "end_time": "17:00:59", "start_time": "10:00:00" } ] }, "holiday_group_id": "75660081-431b-4dbe-9b98-e0257877118e", "holiday_group": { "description": "", "holidays": [ { "description": "", "end_time": "2023-08-26 00:00:00z", "id": "d51777c4-9559-45aa-8e23-434995d9d2a1", "is_template": false, "name": "Holiday Name 1", "repeat": false, "start_time": "2023-08-25 00:00:00z" }, { "description": "", "end_time": "2023-08-27 00:00:00z", "id": "d23a4226-765f-4967-b84f-6dfd53f33c89", "is_template": false, "name": "Holiday Name 2", "repeat": false, "start_time": "2023-08-26 00:00:00z" } ], "id": "75660081-431b-4dbe-9b98-e0257877118e", "is_default": false, "name": "Holiday Group-16928679155714", "template_name": "" }, 
"holiday_schedule": [ { "end_time": "11:45:59", "start_time": "09:15:00" } ] }, "msg": "success" } 
```

# 5.17 Fetch All Schedules

This API allows you to fetch all door access schedules.

| Request URL | `/api/v1/developer/access_policies/schedules` |
| :--- | :--- |
| Permission Key | `view:policy` |
| Method | `GET` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>Data</td><td>T</td><td>Array[Object]</td><td></td><td></td></tr></table>

*See Response Schema for full field definitions.*

# Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl --location '{host}'/api/v1/developer/access_policies/schedules'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
--insecure 
```

# Response Sample

```json
"code": "SUCCEED", "data": [ 
{
"id": "73facd6c-839e-4521-a4f4-c07e1d44e748", "holiday_group_id": "75660081-431b-4dbe-9b98-e0257877118e", "is_default": true, "name": "Always Access", "status": 1, "type": "access" }, { "id": "58c0f89b-f35c-4d2c-af7b-8b8918df2c31", "holiday_group_id": "75660081-431b-4dbe-9b98-e0257877118e", "is_default": false, "name": "UNVR Schedule", "status": 1, "type": "access" } ], "msg": "success" } 
```

# 5.18 Delete Schedule

This API allows you to delete a door access schedule.

| Request URL | `/api/v1/developer/access_policies/schedules/:id` |
| :--- | :--- |
| Permission Key | `edit:policy` |
| Method | `DELETE` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td></td></tr><tr><td>Id</td><td>T</td><td>String</td><td>Identity ID of the schedule.</td><td></td><td></td></tr></table>

# Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XDELETE '{host}/api/v1/developer/access_policies/schedules/f5355214-3a45-4e0b-9245-12df7075df37'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

# Response Sample

```json
{"code":"SUCCESS","msg":"success","data":"success"} 
```

# 6. Credential

The APIs here are designed for managing PIN codes, NFC cards, and other related credentials.

# 6.1 Generate PIN Code

This API enables you to generate a PIN code. A PIN code can be assigned to a visitor or user, and once assigned, they can use it to unlock doors.

| Request URL | `/api/v1/developer/credentials/pin_codes` |
| :--- | :--- |
| Permission Key | `view:credential` |
| Method | `POST` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Related API</td><td>Purpose</td></tr><tr><td>data</td><td>T</td><td>String</td><td>PIN code</td><td>/api/v1/developer/users; /api/v1/developer/visitors</td><td>Assign the PIN code to the created user or visitor.</td></tr></table>

# Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl --location --request POST '{host}/api/v1/developer/credentials/pin_codes'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'Content-Type: application/json'  
--data ''  
--insecure 
```

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": "67203419",
    "msg": "success"
} 
```

# 6.2 Enroll NFC Card

Wake up a UA reader and create a session to enroll an NFC card.

| Request URL | `/api/v1/developer/credentials/nfc_cards/sessions` |
| :--- | :--- |
| Permission Key | `edit:credential` |
| Method | `POST` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>device_id</td><td>T</td><td>String</td><td>Identity ID of the device.</td><td>Get it from the API /api/v1/developer/devices.</td></tr><tr><td>reset_ua_card</td><td>F</td><td>Boolean</td><td></td><td>This option allows you to reset an NFC card already enrolled at another site.</td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Related API</td><td>Purpose</td></tr><tr><td>session_id</td><td>T</td><td>String</td><td>The session for enrolling an NFC card.</td><td>#6.3 /api/v1/developer/credentials/nfc_cards/sections/{session_id}</td><td>NFC card polling result.</td></tr></table>

# Request Sample

```bash
curl '{host}/api/v1/developer/credentials/nfc_cards sessions'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--data-raw '{"device_id": "0418d6a2bb7a", "reset_ua_card": false}'  
--insecure 
```

# Response Sample

```json
{
    "code": "SUCCESS",
    "msg": "success",
    "data": {
        "session_id": "e8a97c52-6676-4c48-8589-bd518afc4094"
    }
}
```

# 6.3 Fetch NFC Card Enrollment Status

This API enables you to poll a UA reader to fetch the NFC card enrollment status and the generated card tokens.

| Request URL | `/api/v1/developer/credentials/nfc_cards/sessions/:id` |
| :--- | :--- |
| Permission Key | `edit:credential` |
| Method | `GET` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Related API</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>The ID of the session #6.2.</td><td>/api/v1/developer/users; /api/v1/developer/visitors</td><td>Get session id from the API #6.2</td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Related API</td><td>Purpose</td></tr><tr><td>token</td><td>T</td><td>String</td><td>Unique NFC card token.</td><td>/api/v1/developer/users; /api/v1/developer/visitors</td><td>The generated card token is used to bind to a user or visitor.</td></tr><tr><td>card_id</td><td>T</td><td>String</td><td>Display ID of the NFC card.</td><td></td><td></td></tr></table>

```bash
GET /api/v1/developer/credentials/nfc_cards/sections/e8a97c52-6676-4c48-8589-bd518afc4094 
```

# Response Sample
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

# 6.4 Remove a Session Created for NFC Card Enrollment

This API enables you to remove a session created for enrolling an NFC card.

| Request URL | `/api/v1/developer/credentials/nfc_cards/sessions/:id` |
| :--- | :--- |
| Permission Key | `edit:credential` |
| Method | `DELETE` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Related API</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>The ID of the session #6.2.</td><td>/api/v1/developer/users; /api/v1/developer/visitors</td><td>Get session id from the API #6.2</td></tr></table>

# Request Sample

```
DELETE /api/v1/developer/credentials/nfc_cards/sessions/e8a97c52-6676-4c48-8589-bd518afc4094
```

```json
{"code":"SUCCESS","msg":"success","data":"success"} 
```

# 6.5 Flowchart for NFC Card Enrollment

enroll-nfc-card

# 6.6 NFC Card Schemas

<table><tr><td>Parameter</td><td>Type</td><td>Description</td></tr><tr><td>token</td><td>String</td><td>Identity token of the NFC card.</td></tr><tr><td>display_id</td><td>String</td><td>Display ID of the NFC card.</td></tr><tr><td>status</td><td>String</td><td>Status of the NFC card. enum status
{assigned, pending, disable, deleted, loss}</td></tr><tr><td>alias</td><td>String</td><td>Preferred name of the NFC card.</td></tr><tr><td>card_type</td><td>String</td><td>Type of the NFC card.</td></tr><tr><td>user_id</td><td>String</td><td>Owner ID of the NFC card.</td></tr><tr><td>user_type</td><td>String</td><td>Type of the owner. enum user_type {USER,VISITOR}</td></tr><tr><td>user</td><td>Object</td><td>Owner of the NFC card.</td></tr><tr><td>user.id</td><td>String</td><td>Identity ID of the user.</td></tr><tr><td>user.first_name</td><td>String</td><td>First name of the user.</td></tr><tr><td>user.last_name</td><td>String</td><td>Last name of the user.</td></tr><tr><td>user.name</td><td>String</td><td>Full name of the user.</td></tr></table>

# 6.7 Fetch NFC Card

This API allows you to fetch NFC card details.

| Request URL | `/api/v1/developer/credentials/nfc_cards/tokens/:token` |
| :--- | :--- |
| Permission Key | `view:credential` |
| Method | `GET` |
| UniFi Access Requirement | Version 1.22.16 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td>How to Get It?</td></tr><tr><td>token</td><td>T</td><td>String</td><td>Token of the NFC card.</td><td>821f90b262e90c5c0fbcdfd3d6d2f3b94cc015d6e8104ab4fb96e4c8b8e90cb7</td><td>Get it from the API #6.3
#6.8</td></tr></table>

# Response Body

Schemas: NFC Card Schemas

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": {
        "alias": "", "card_type": "ua_card",
        "display_id": "100005",
        "note": "100005",
        "status": "assigned",
        "token": "f77d69b08eaf5eb5d647ac1a0a73580f1b27494b345f40f54fa022a8741fa15c",
        "user": {
            "avatar": "", "first_name": "H",
            "id": "e0051e08-c4d5-43db-87c8-a9b19cb66513",
            "last_name": "L",
            "name": "H L",
        "user_id": "e0051e08-c4d5-43db-87c8-a9b19cb66513",
        "user_type": "USER"
    "msg": "success"
} 
```

# Request Sample

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

# 6.8 Fetch All NFC Cards

This API allows you to fetch all NFC cards.

| Request URL | `/api/v1/developer/credentials/nfc_cards/tokens` |
| :--- | :--- |
| Permission Key | `view:credential` |
| Method | `GET` |
| UniFi Access Requirement | Version 1.22.16 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Query Parameters

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>page_num</td><td>F</td><td>String</td><td>Current page number in the pagination.</td><td>1</td></tr><tr><td>page_size</td><td>F</td><td>String</td><td>Number of users per page.</td><td>25</td></tr></table>

# Response Body

Schemas: NFC Card Schemas

# Response Sample

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

# Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/api/v1/developer/credentials/nfc_cards/tokens?page_num=1&page_size=12' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--insecure
```

# 6.9 Delete NFC Card

This API allows you to delete an NFC card.

| Request URL | `/api/v1/developer/credentials/nfc_cards/tokens/:token` |
| :--- | :--- |
| Permission Key | `edit:credential` |
| Method | `DELETE` |
| UniFi Access Requirement | Version 1.22.16 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td>How to Get It?</td></tr><tr><td>token</td><td>T</td><td>String</td><td>Token of the NFC card.</td><td>821f90b262e90c5c0fbcdf3d6d2f3b94cc015d6e8104ab4fb96e4c8b8e90cb7</td><td>Get it from the API #6.3 #6.8</td></tr></table>

# Response Sample
```json
{ "code": "SUCCESS", "data": "success", "msg": "success" } 
```

# Request Sample

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

# 6.10 Update NFC Card

This API allows you to update an NFC card.

| Request URL | `/api/v1/developer/credentials/nfc_cards/tokens/:token` |
| :--- | :--- |
| Permission Key | `edit:credential` |
| Method | `PUT` |
| UniFi Access Requirement | Version 3.1.30 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td>How to Get It?</td></tr><tr><td>token</td><td>T</td><td>String</td><td>Token of the NFC card.</td><td>821f90b262e90c5c0fbcdfd3d6d2f3b94cc015d6e8104ab4fb96e4c8b8e90cb7</td><td>Get it from the API #6.3
#6.8</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Related API</td><td>How to Get It?</td></tr><tr><td>alias</td><td>F</td><td>String</td><td>Alias of the NFC card.</td><td></td><td></td></tr></table>

# Response Sample

```json
{ "code": "SUCCESS", "data": "success", "msg": "success" } 
```

# Request Sample

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

# 6.11 Touch Pass Schemas

<table><tr><td>Parameter</td><td>Type</td><td>Description</td></tr><tr><td>activated_at</td><td>Object</td><td>Timestamp when the credential is activated.</td></tr><tr><td>card_id</td><td>String</td><td>Identifier of the card.</td></tr><tr><td>card_name</td><td>String</td><td>Display name of the card.</td></tr><tr><td>expired_at</td><td>Object</td><td>Timestamp when the credential expires.</td></tr><tr><td>id</td><td>String</td><td>Unique identifier of the credential record.</td></tr><tr><td>last_activity</td><td>String</td><td>Timestamp of the last activity or usage.</td></tr><tr><td>status</td><td>String</td><td>enum status {ACTIVE, PENDING, SUSPENDED, INACTIVE, EXPIRED} Status of the Touch Pass.</td></tr><tr><td>user_avatar</td><td>String</td><td>URL to the user's avatar image.</td></tr><tr><td>user_email</td><td>String</td><td>Email address of the user.</td></tr><tr><td>user_id</td><td>String</td><td>Unique identifier of the user.</td></tr><tr><td>user_name</td><td>String</td><td>Full name of the user.</td></tr><tr><td>user_status</td><td>String</td><td>enum user_status {ACTIVE, PENDING, UNLINK} Status of the user account.</td></tr><tr><td>bundles</td><td>Array[Object]</td><td>List of mobile credential bundles assigned to the user.</td></tr><tr><td>bundles[].bundle_id</td><td>String</td><td>Unique identifier of the mobile credential bundle.</td></tr><tr><td>bundles[].bundle_status</td><td>String</td><td>enum bundle_status {ACTIVE, SUSPENDED} Status of the bundle.</td></tr><tr><td>bundles[].device_id</td><td>String</td><td>Identifier of the device linked to the bundle.</td></tr><tr><td>bundles[].device_name</td><td>String</td><td>Display name of the linked device.</td></tr><tr><td>bundles[].device_type</td><td>Integer</td><td>Code representing the device type.</td></tr><tr><td>bundles[].source</td><td>String</td><td>enum source {google, apple} Source platform of the mobile credential.</td></tr></table>

# 6.12 Fetch the Touch Pass List

This API allows you to fetch a list of Touch Passes, filtered by status.

| Request URL | `/api/v1/developer/credentials/touch_passes` |
| :--- | :--- |
| Permission Key | `view:credential` |
| Method | `GET` |
| UniFi Access Requirement | Version 3.2.20 or later |
Note: If user_status is UNLINK , it indicates the associated user is no longer linked (i.e., the user is

considered lost or removed from the system).

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Query Parameters

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>page_num</td><td>F</td><td>String</td><td>Current page number in the pagination.</td><td>1</td></tr><tr><td>page_size</td><td>F</td><td>String</td><td>Number of Touch Passes per page.</td><td>10</td></tr><tr><td>status</td><td>F</td><td>String</td><td>enum status {ACTIVE, PENDING, SUSPENDED, INACTIVE} Filter results by pass status.</td><td>PENDING</td></tr></table>

# Response Body

Schemas: Touch Pass Schemas

# Response Sample

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
    ],
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
    }
} 
"user_name": "test name", "user_status": "ACTIVE" }, { "bundles": [], "card_id": "DDEA-906E-DBAF-49A1", "card_name": "", "id": "ff6abef9-ca97-4aa6-b6a8-e07c6896d541", "last_activity": "2025-04-03T07:29:13+01:00", "status": "PENDING", "user_avatar": "https://****.svc.ui.com/e1392d90-9973-4e40-AA83-02edb8ef1a73", "user_email": "example@ui.com", "user_id": "c16941d1-a4c0-429e-8960-9cf126b96878", "user_name": "Example Name", "user_status": "ACTIVE" } ], "msg": "succ", "pagination": { "page_num": 1, "page_size": 3, "total": 3 } } 
```

# Request Sample

```bash
curl --location --request GET
'https://192.168.1.1:12445/api/v1/developer/credentials/touch_passes?
page_num=1&page_size=10&status=PENDING'
--header 'Authorization: Bearer wHFmHR*****kD6wHg'
--header 'Content-Type: application/json' \
--insecure 
```

# 6.13 Search Touch Pass

This API allows you to search for Touch Passes using filter conditions, such as card ID.

| Request URL | `/api/v1/developer/credentials/touch_passes/search` |
| :--- | :--- |
| Permission Key | `view:credential` |
| Method | `GET` |
| UniFi Access Requirement | Version 3.2.20 or later |
Note: If user_status is UNLINK , it indicates the associated user is no longer linked (i.e., the user is considered lost or removed from the system).

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Query Parameters

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>condition</td><td>T</td><td>String</td><td>Search condition (e.g., card_id, user_name)</td><td>057B, Example Name</td></tr></table>

# Response Body

Schemas: Touch Pass Schemas

# Response Sample

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
```

# Request Sample

```bash
curl --location --request GET
'https://192.168.1.1:12445/api/v1/developer/credentials/touch_passes/search?condition=057B'
\--header 'Authorization: Bearer wHFmHR*****kD6wHg' \
--header 'Content-Type: application/json' \
--insecure 
```

# 6.14 Fetch All Assignable Touch Passes

This API allows you to fetch all suspended or inactive Touch Passes that can be reassigned.

| Request URL | `/api/v1/developer/credentials/touch_passes/assignable` |
| :--- | :--- |
| Permission Key | `view:credential` |
| Method | `GET` |
| UniFi Access Requirement | Version 3.2.20 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Type</td><td>Description</td></tr><tr><td>id</td><td>String</td><td>Unique identifier of the Touch Pass.</td></tr><tr><td>card_id</td><td>String</td><td>Card ID associated with the Touch Pass.</td></tr><tr><td>card_name</td><td>String</td><td>Optional name of the card.</td></tr><tr><td>last_activity</td><td>String</td><td>Timestamp of the last recorded activity.</td></tr><tr><td>status</td><td>String</td><td>enum status {SUSPENDED, INACTIVE} Status of the Touch Pass.</td></tr><tr><td>user_id</td><td>String</td><td>Unique identifier of the user (empty if unassigned).</td></tr><tr><td>user_name</td><td>String</td><td>Full name of the user (empty if unassigned).</td></tr><tr><td>user_email</td><td>String</td><td>Email of the user (empty if unassigned).</td></tr><tr><td>user_status</td><td>String</td><td>Status of the user (empty if unassigned).</td></tr><tr><td>user_avatar</td><td>String</td><td>URL to the user&#x27;s avatar (empty if unassigned).</td></tr><tr><td>bundles</td><td>Array</td><td>Reserved for future use (currently always empty).</td></tr></table>

# Response Sample

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

# Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl --location --request GET
'https://192.168.1.1:12445/api/v1/developer/credentials/touch_passes/assignable' \
--header 'Authorization: Bearer wHFmHR*****kD6wHg' \
--header 'Content-Type: application/json' \
--insecure 
```

# 6.15 Update Touch Pass

This API allows you to update a Touch Pass's card name, modify its status ( ACTIVE / SUSPENDED ), and unbundle devices ( bundle_status: DISABLED ).

| Request URL | `/api/v1/developer/credentials/touch_passes/:id` |
| :--- | :--- |
| Permission Key | `edit:credential` |
| Method | `PUT` |
| UniFi Access Requirement | Version 3.2.20 or later |
Note: If user_status is UNLINK , it indicates the associated user is no longer linked (i.e., the user is considered lost or removed from the system).

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>ID of the Touch Pass to update.</td><td>1d64d2b8-a8b0-4c73-9d49-4922ad0cab9</td><td>Get it from API /api/v1/developer/credentials/touch_passes/search</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>card_name</td><td>F</td><td>String</td><td>Card name or alias.</td><td></td></tr><tr><td>status</td><td>F</td><td>String</td><td>enum status {ACTIVE, SUSPENDED} Card status.</td><td></td></tr><tr><td>bundles</td><td>F</td><td>Arrayobject</td><td>List of bundles to disable (remove). Each bundle object is required.</td><td>Get it from API /api/v1/developer/credentials/touch_passes/search</td></tr><tr><td>bundles[].bundle_id</td><td>T</td><td>String</td><td>ID of the bundle to be disabled.</td><td></td></tr><tr><td>bundles[].bundle_status</td><td>T</td><td>String</td><td>enum bundle_status {DISABLED} Support for unbundled devices.</td><td></td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Type</td><td>Description</td></tr><tr><td>activated_at</td><td>Object</td><td>Timestamp when the credential is activated.</td></tr><tr><td>card_id</td><td>String</td><td>Identifier of the card.</td></tr><tr><td>card_name</td><td>String</td><td>Display name of the card.</td></tr><tr><td>expired_at</td><td>Object</td><td>Timestamp when the credential expires.</td></tr><tr><td>id</td><td>String</td><td>Unique identifier of the credential record.</td></tr><tr><td>last_activity</td><td>String</td><td>Timestamp of the last activity or usage.</td></tr><tr><td>status</td><td>String</td><td>enum status {ACTIVE, PENDING, SUSPENDED, INACTIVE, EXPIRED} Status of the Touch Pass.</td></tr><tr><td>user_avatar</td><td>String</td><td>URL to the user's avatar image.</td></tr><tr><td>user_email</td><td>String</td><td>Email address of the user.</td></tr><tr><td>user_id</td><td>String</td><td>Unique identifier of the user.</td></tr><tr><td>user_name</td><td>String</td><td>Full name of the user.</td></tr><tr><td>user_status</td><td>String</td><td>enum user_status {ACTIVE, PENDING, UNLINK} Status of the user account.</td></tr><tr><td>bundles</td><td>Array[Object]</td><td>List of mobile credential bundles assigned to the user.</td></tr><tr><td>bundles[].bundle_id</td><td>String</td><td>Unique identifier of the mobile credential bundle.</td></tr><tr><td>bundles[].bundle_status</td><td>String</td><td>enum bundle_status {ACTIVE, SUSPENDED} Status of the bundle.</td></tr><tr><td>bundles[].device_id</td><td>String</td><td>Identifier of the device linked to the bundle.</td></tr><tr><td>bundles[].device_name</td><td>String</td><td>Display name of the linked device.</td></tr><tr><td>bundles[].device_type</td><td>Integer</td><td>Code representing the device type.</td></tr><tr><td>bundles[].source</td><td>String</td><td>enum source {google, apple} Source platform of the mobile credential.</td></tr></table>

# Response Sample

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
    "msg": "success"
} 
```

# Request Sample

# Update Card Name & Update Touch Pass Status

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

# 6.16 Fetch Touch Pass Details

This API retrieves detailed information about a specific Touch Pass using its ID.

| Request URL | `/api/v1/developer/credentials/touch_passes/:id` |
| :--- | :--- |
| Permission Key | `view:credential` |
| Method | `GET` |
| UniFi Access Requirement | Version 3.2.20 or later |
Note: If user_status is UNLINK , it indicates the associated user is no longer linked (i.e., the user is considered lost or removed from the system).

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>ID of the Touch Pass.</td><td>c83b69ff-1992-4e7f-9287-1e6a161adeea</td><td>Get it from API /api/v1/developer/credentials/touch_passes/search</td></tr></table>

# Response Sample
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
"msg": "success"
}
```

# Request Sample

```bash
curl --location --request GET \
'https://192.168.1.1:12445/api/v1/developer/credentials/touch_passes/c83b69ff-1992-4e7f-9287-1e6a161adeea' \
--header 'Authorization: Bearer wHFmHR*****kD6wHg' \
--header 'Content-Type: application/json'
```

# 6.17 Purchase Touch Passes

This API allows you to purchase new Touch Passes. Ensure a valid payment method is configured in the Access web application before using this API.

| Request URL | `/api/v1/developer/credentials/touch_passes` |
| :--- | :--- |

| Permission Key | `edit:credential` |
| :--- | :--- |
| Method | `POST` |
| UniFi Access Requirement | Version 3.2.20 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>count</td><td>T</td><td>Int</td><td>Total number of Touch Passes to be purchased.</td><td>Manual input</td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Type</td><td>Description</td></tr><tr><td>id</td><td>String</td><td>ID of the newly purchased Touch Pass.</td></tr><tr><td>card_id</td><td>String</td><td>Card ID assigned to the pass.</td></tr><tr><td>card_name</td><td>String</td><td>Card alias or name. Initially empty.</td></tr><tr><td>status</td><td>String</td><td>Initial Touch Pass status after purchase (INACTIVE).</td></tr><tr><td>last_activity</td><td>String</td><td>Timestamp of the last activity or usage.</td></tr><tr><td>bundles</td><td>Array</td><td>Empty array by default.</td></tr><tr><td>user_id</td><td>String</td><td>Empty string; Touch Pass is not yet assigned to any user.</td></tr><tr><td>user_name</td><td>String</td><td>Empty string; Touch Pass is not yet assigned to any user.</td></tr><tr><td>user_email</td><td>String</td><td>Empty string; Touch Pass is not yet assigned to any user.</td></tr><tr><td>user_avatar</td><td>String</td><td>Empty string.</td></tr><tr><td>user_status</td><td>String</td><td>Empty string.</td></tr></table>

# Response Sample

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
    "msg": "success"
}
```

# Request Sample

```bash
curl --location 'https://192.168.1.1:12445/api/v1/developer/credentials/touch_passes' \
--header 'Authorization: Bearer wHFmHR*****kD6wHg' \
--header 'Content-Type: application/json' \
--data '{ "count": 2 }' 
```

# 6.18 Download QR Code Image

This API allows you to download a QR code image by its ID.

| Request URL | `/api/v1/developer/credentials/qr_codes/download/:visitor_id` |
| :--- | :--- |
| Permission Key | `view:credential` |
| Method | `GET` |
| UniFi Access Requirement | Version 3.3.10 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>visitor_id</td><td>T</td><td>String</td><td>ID of the visitor to be downloaded.</td><td>Get it from the API /api/v1/developer/visitors</td></tr></table>

# Request Sample: Shell/cURL

```bash
curl --location --request GET
'https://192.168.1.1:12445/api/v1/developer/credentials/qr_codes/download/15a90692-6f3b-4e1c-9886-bcd15e9c3f2d' \
--header 'Authorization: Bearer s4KgshBaoXTwXwFAHLPwDw' \
--header 'Content-Type: application/json' \
--output visitor_qr_code.png \
--insecure 
```

# 6.19 Import Third-Party NFC Cards

This API allows you to import third-party NFC card IDs by uploading a CSV file into the Access system.

| Request URL | `/api/v1/developer/credentials/nfc_cards/import` |
| :--- | :--- |
| Permission Key | `edit:credential` |
| Method | `POST` |
| UniFi Access Requirement | Version 3.3.10 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>file</td><td>T</td><td>File</td><td>A CSV file containing NFC IDs or optional aliases.</td></tr></table>

# CSV Format

```csv
068E2836, alias1  
068E2839, alias2  
068E2838, alias3 
```

NOTE: 068E2836 is an example NFC ID of a third-party card. NFC IDs are represented in uppercase hexadecimal. The alias field must be unique. Duplicate aliases will cause the import to fail. If the returned token is empty, it means the import has failed for that record.

# Request Sample: Shell/cURL

```bash
curl --location 'https://192.168.1.1:12445/api/v1/developer/credentials/nfc_cards/import' \
--header 'Authorization: Bearer NvrB7qunKOFi/HcIjUMF0w' \
--form 'file=@"/Documents/ufcs.csv'" 
```

# Response Sample

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

# 7. Space

The APIs here are designed for managing spaces, including doors, door groups, and floors.

# 7.1 Fetch Door Group Topology

Fetch all current floor and door resources for access policy and visitor assignment purposes.

| Request URL | `/api/v1/developer/door_groups/topology` |
| :--- | :--- |
| Permission Key | `view:space` |
| Method | `GET` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Purpose</td><td>Related API</td></tr><tr><td>id</td><td>F</td><td>String</td><td>Identity ID of the door group.</td><td>Used when creating an access policy.</td><td></td></tr><tr><td>type</td><td>T</td><td>String</td><td>enum group_type {building,access} The building type contains all the doors; the access type represents all the customized door groups.</td><td></td><td>access: /api/v1/developer/door_groups</td></tr><tr><td>resource_topologies</td><td>T</td><td>Array[Object]</td><td>Contain information about the floor and all its associated doors.</td><td>Bind policies or specify available locations for visitors to access.</td><td>/api/v1/developer/access_policies /api/v1/developer/visitors</td></tr><tr><td>resource_topologies[].id</td><td>T</td><td>String</td><td>Identity ID of the floor.</td><td></td><td></td></tr><tr><td>resource_topologies[].type</td><td>T</td><td>String</td><td>Type of the floor.</td><td></td><td></td></tr><tr><td>resource_topologies[].name</td><td>T</td><td>String</td><td>Name of the floor.</td><td></td><td></td></tr><tr><td>resource_topologies[].resources</td><td>T</td><td>Array[Object]</td><td>Contain all the doors on the floor.</td><td></td><td></td></tr><tr><td>resource_topologies[].is_bind_hub</td><td>F</td><td>Boolean</td><td>Indicate whether the door has bound to a hub device. It can only be used for remote opening if it&#x27;s bound.</td><td></td><td></td></tr><tr><td>resource_topologies[].resources.id</td><td>T</td><td>String</td><td>Identity ID of the door.</td><td></td><td></td></tr><tr><td>resource_topologies[].resources.name</td><td>T</td><td>String</td><td>Name of the door.</td><td></td><td></td></tr><tr><td>resource_topologies[].resources.type</td><td>T</td><td>String</td><td>Type of the door.</td><td></td><td></td></tr></table>

# Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl -X GET '{host}/api/v1/developer/door_groups/topology'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": [
        {
            "id": "d5573467-d6b3-4e8f-8e48-8a322b91664a",
            "name": "All Doors",
            "resource_topologies": [
                {
                    "id": "9bee6e0e-108d-4c52-9107-76f2c7dea4f1",
                    "name": "Main Floor",
                    "resources": [
                        {
                            "id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
                            "name": "Door 3855",
                            "type": "door",
                            "is_bind_hub": true
                        }
                    ],
                    "type": "floor"
                }
            ],
            "type": "building"
        },
        {
            "id": "5c496423-6d25-4e4f-8cdf-95ad5135188a",
            "name": "customized group",
            "resource_topologies": [
                {
                    "id": "9bee6e0e-108d-4c52-9107-76f2c7dea4f1",
                    "name": "Main Floor",
                    "resources": [
                        {
                            "id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
                            "name": "Door 3855",
                            "type": "door",
                            "is_bind_hub": true
                        }
                    ],
                    "type": "floor"
                }
            ]
        }
    ],
    "msg": "success"
}
```

# 7.2 Create Door Group

This API allows you to create a door group.

| Request URL | `/api/v1/developer/door_groups` |
| :--- | :--- |
| Permission Key | `edit:space` |
| Method | `POST` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td>How to Get It?</td></tr><tr><td>group_name</td><td>T</td><td>String</td><td>Name of the door group. This needs to be globally unique.</td><td></td><td></td></tr><tr><td>resources</td><td>T</td><td>Array:String</td><td>Collection of door ID.</td><td></td><td>/api/v1/developer/door_groups/topology</td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Purpose</td><td>Related API</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the door group.</td><td>Used to assign access group to visitor and access policy.</td><td>/api/v1/developer/visitors; /api/v1/developer/access_policies;</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the door group.</td><td></td><td></td></tr><tr><td>resources</td><td>T</td><td>String</td><td>All doors contained under the group.</td><td></td><td></td></tr><tr><td>resources[].id</td><td>T</td><td>String</td><td>Identity ID of the door.</td><td></td><td></td></tr><tr><td>resources[].type</td><td>T</td><td>String</td><td>Type of the door.</td><td></td><td></td></tr></table>

# Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl '{host}/api/v1/developer/door_groups'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--data-raw '{ "group_name": "Test", "resources": [ "6ff875d2-af87-470b-9cb5-774c6596afc8" ]
} ' --insecure 
```

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": {
        "id": "0140fa3d-8973-4305-a0ce-5306ae277878",
        "name": "Customized Door Group",
        "resources": [
            {
                "id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
                "type": "door"
            }
        ],
        "type": "access"
    "msg": "success"
}
```

# 7.3 Fetch Door Group

This API allows you to fetch door group details.

| Request URL | `/api/v1/developer/door_groups/:id` |
| :--- | :--- |
| Permission Key | `view:space` |
| Method | `GET` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Id</td><td>T</td><td>String</td><td>Identity ID of the door group.</td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Purpose</td><td>Related API</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the door group.</td><td>Used to assign access group to visitor and access policy.</td><td>/api/v1/developer/visitors; /api/v1/developer/access_policies;</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the door group.</td><td></td><td></td></tr><tr><td>type</td><td>t</td><td>String</td><td>Include door access and building resources. enum type {access, building} The building type stands for all doors, which is a special group obtained from the topology API. The access type represents all custom door groups.</td><td></td><td></td></tr><tr><td>resources</td><td>T</td><td>String</td><td>All doors contained under the group.</td><td></td><td></td></tr><tr><td>resources[].id</td><td>T</td><td>String</td><td>Identity ID of the door.</td><td></td><td></td></tr><tr><td>resources[].type</td><td>T</td><td>String</td><td>The access type represents all custom door group types.</td><td></td><td></td></tr><tr><td>resources[].name</td><td>T</td><td>String</td><td>Name of the door.</td><td></td><td></td></tr></table>

# Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl '{host}/api/v1/developer/door_groups/d5573467-d6b3-4e8f-8e48-8a322b91664a'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

# Response Sample

```json
Group type is building   
{ "code": "SUCCESS", "data": { "id": "d5573467-d6b3-4e8f-8e48-8a322b91664a", "name": "All Doors", "resources": [ { "id": "6ff875d2-af87-470b-9cb5-774c6596afc8", "name": "Door 3855", "type": "door" }, { "id": "7cc1823f-9cdb-447b-b01b-4cb2abc661c0", "name": "A2 Door", "type": "door" }, { "id": "ececa68e-239f-4b82-adc4-0c9ce70c60ff", "name": "A3", "type": "door" } ], "type": "building" }, "msg": "success"   
}   
# Customized groups   
{ "code": "SUCCESS", "data": { "id": "1be0c995-0347-4cb2-93b3-66a9624af568", "name": "Door Group 01", "resources": [ { 
"id": "6ff875d2-af87-470b-9cb5-774c6596afc8", "type": "door", "name": "Door 385" } ], "type": "access" }, "msg": "success" } 
```

# 7.4 Update Door Group

This API allows you to update door group details.

| Request URL | `/api/v1/developer/door_groups/:id` |
| :--- | :--- |
| Permission Key | `edit:space` |
| Method | `PUT` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the door group.</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td>How to Get It?</td></tr><tr><td>group_name</td><td>F</td><td>String</td><td>Name of door group. Omit this parameter if it doesn&#x27;t need to be updated.</td><td></td><td></td></tr><tr><td>resources</td><td>F</td><td>Array:String</td><td>Collection of door identifier ID. Omit this parameter if it doesn&#x27;t need to be updated.</td><td></td><td>/api/v1/developer/door_groups/topology</td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Purpose</td><td>Related API</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the door group.</td><td>Used to assign access group to visitor and access policy.</td><td>/api/v1/developer/visitors; /api/v1/developer/access_policies;</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the door group.</td><td></td><td></td></tr><tr><td>resources</td><td>T</td><td>String</td><td>All doors contained under the group.</td><td></td><td></td></tr><tr><td>resources[].id</td><td>T</td><td>String</td><td>Identity ID of the door.</td><td></td><td></td></tr><tr><td>resources[].type</td><td>T</td><td>String</td><td>Type of the door.</td><td></td><td></td></tr></table>

# Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl -XPUT '{host}/api/v1/developer/door_groups/0140fa3d-8973-4305-a0ce-5306ae277878' -H 'Authorization: Bearer wHFmHR*****kD6wHg' -H 'accept: application/json' -H 'content-type: application/json' --data-raw {' "resources": [ "6ff875d2-af87-470b-9cb5-774c6596afc8", "5a2c3d4e-1f6b-4c8d-9e0f-2a3b4c5d6e7f", "2p3q4r5s-6t7u-8v9w-x0y1-z2a3b4c5d6e" ] } ' --insecure   
# Delete all door resources   
curl -XPUT '{host}/api/v1/developer/door_groups/0140fa3d-8973-4305-a0ce-5306ae277878' -H 'Authorization: Bearer wHFmHR*****kD6wHg' -H 'accept: application/json' -H 'content-type: application/json' --data-raw {' "resources": [] } ' --insecure 
```

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": {
        "id": "0140fa3d-8973-4305-a0ce-5306ae277878",
        "name": "test",
        "resources": [
            {
                "id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
                "type": "door"
            }
        ],
    }
} 
"type": "access" }, "msg": "success" } 
```

# 7.5 Fetch All Door Groups

This API allows you to fetch the list of all door groups.

| Request URL | `/api/v1/developer/door_groups` |
| :--- | :--- |
| Permission Key | `view:space` |
| Method | `GET` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Purpose</td><td>Related API</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the door group.</td><td>Used to create a door groups and to open doors remotely, if a device is bound.</td><td>/api/v1/developer/door_groups; /api/v1/developer/doors/:id/remote_unlock;</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the door group.</td><td></td><td></td></tr><tr><td>type</td><td>t</td><td>String</td><td>Include door access and building resources. enum type {access, building} The building type represents all doors, which is a special group obtained from the topology API. But the list does not contain the group type building. The access type represents all custom door groups.</td><td></td><td></td></tr><tr><td>resources</td><td>T</td><td>String</td><td>All doors contained under the group.</td><td></td><td></td></tr><tr><td>resources[].id</td><td>T</td><td>String</td><td>Identity ID of the door.</td><td></td><td></td></tr><tr><td>resources[].type</td><td>T</td><td>String</td><td>Type of the door.</td><td></td><td></td></tr></table>

# Response Sample

The request body should be a JSON object containing the following fields:

```bash
curl '{host}/api/v1/developer/door_groups'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--insecure 
```

# Response Sample
```json
{
    "code": "SUCCESS",
    "data": [
        {
            "id": "5c496423-6d25-4e4f-8cdf-95ad5135188a",
            "name": "Test",
            "resources": [
                {
                    "id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
                    "type": "door"
                }
            ],
            "type": "access"
        },
        {
            "id": "1907cc46-0a73-4077-94c1-95b625bdd0f8",
            "name": "Test2",
            "resources": [
                {
                    "id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
                    "type": "door"
                }
            ],
            "type": "access"
        }
    ],
    "msg": "success"
}
```

# 7.6 Delete Door Group

This API allows you to delete a door group.

| Request URL | `/api/v1/developer/door_groups/:id` |
| :--- | :--- |
| Permission Key | `edit:space` |
| Method | `DELETE` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the door group.</td></tr></table>

# Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl -XDELETE '{host}/api/v1/developer/door_groups/0140fa3d-8973-4305-a0ce-5306ae277878'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

# Response Sample

```json
{ "code": "SUCCESS", "data": "success", "msg": "success" } 
```

# 7.7 Fetch Door

This API allows you to fetch door details.

| Request URL | `/api/v1/developer/doors/:id` |
| :--- | :--- |
| Permission Key | `view:space` |
| Method | `GET` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the door.</td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Purpose</td><td>Related API</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the door group.</td><td>1. Used to create a door group. 2. Used to unlock a door remotely, if the door is bound to a hub device.</td><td>/api/v1/developer/door_groups; /api/v1/developer/doors/:id/remote_unlock;</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the door.</td><td></td><td></td></tr><tr><td>full_name</td><td>T</td><td>String</td><td>Full name of the door.</td><td></td><td></td></tr><tr><td>floor_id</td><td>T</td><td>String</td><td>Identity ID of the floor.</td><td></td><td></td></tr><tr><td>type</td><td>T</td><td>String</td><td>Type of the door.</td><td></td><td></td></tr><tr><td>is_bind_hub</td><td>T</td><td>String</td><td>Indicate whether the door has bound to a hub device. It can only be used for remote opening if it&#x27;s bound.</td><td></td><td></td></tr><tr><td>door_lock_relay_status</td><td>T</td><td>String</td><td>Door lock status. enum door_lock_relay_status {lock, unlock}</td><td></td><td></td></tr><tr><td>door_position_status</td><td>T</td><td>String</td><td>DPS: Door position status, including both open and close. A null value means that no device is connected.</td><td></td><td></td></tr></table>

# Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/api/v1/developer/doors/0ed545f8-2fcd-4839-9021-b39e707f6aa9'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": {
        "door_lock_relay_status": "lock",
        "door_position_status": "",
        "floor_id": "3275af8d-3fa7-4902-a11b-011e41c8464a",
        "full_name": "UNVR - 1F - Main Door",
        "id": "0ed545f8-2fcd-4839-9021-b39e707f6aa9",
        "is_bind_hub": true,
        "name": "Main Door",
        "type": "door"
    "msg": "success"
}
```

# 7.8 Fetch All Doors

This API allows you to fetch the list of all doors.

| Request URL | `/api/v1/developer/doors` |
| :--- | :--- |
| Permission Key | `view:space` |
| Method | `GET` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Purpose</td><td>Related API</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the door group.</td><td>1. Used to create a door group. 2. Used to unlock a door remotely, if the door is bound to a hub device.</td><td>/api/v1/developer/door_groups; /api/v1/developer/doors/:id/remote_unlock;</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the door.</td><td></td><td></td></tr><tr><td>full_name</td><td>T</td><td>String</td><td>Full name of the door.</td><td></td><td></td></tr><tr><td>floor_id</td><td>T</td><td>String</td><td>Identity ID of the floor.</td><td></td><td></td></tr><tr><td>type</td><td>T</td><td>String</td><td>Type of the door.</td><td></td><td></td></tr><tr><td>is_bind_hub</td><td>T</td><td>String</td><td>Indicate whether the door has bound to a hub device. It can only be used for remote opening if it&#x27;s bound.</td><td></td><td></td></tr><tr><td>door_lock_relay_status</td><td>T</td><td>String</td><td>Door lock status. enum door_lock_relay_status {lock, unlock}</td><td></td><td></td></tr><tr><td>door_position_status</td><td>T</td><td>String</td><td>DPS: Door position status, including both open and close. A null value means that no device is connected.</td><td></td><td></td></tr></table>

# Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/api/v1/developer/doors'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": [
        {
            "door_lock_relay_status": "unlock",
            "door_position_status": "open",
            "floor_id": "23c5db06-b59b-494d-94f1-23e88fbe4909",
            "full_name": "UNVR - 2F - A2 Door",
            "id": "0ed545f8-2fcd-4839-9021-b39e707f6aa9",
            "is_bind_hub": true,
            "name": "A2 Door",
            "type": "door"
        },
        {
            "door_lock_relay_status": "lock",
            "door_position_status": "close",
            "floor_id": "7c62b4b3-692f-44ea-8eb8-e212833b4e0f",
            "full_name": "UNVR - 1F - Door 3855",
            "id": "5785e97b-6123-4596-ba49-b6e51164db9b",
            "is_bind_hub": true,
            "name": "Door 3855",
            "type": "door"
        }
    ],
    "msg": "success"
}
```

# 7.9 Remote Door Unlocking

This API allows you to remotely unlock a door.

| Request URL | `/api/v1/developer/doors/:id/unlock` |
| :--- | :--- |
| Permission Key | `edit:space` |
| Method | `PUT` |

# Description:

This API allows developers to remotely trigger door unlocks. You can optionally specify actor_id and actor_name to customize the actor identity shown in system logs and webhook notifications.

If these fields are omitted, the system will default to using the name of the API token as the actor. The extra field is fully passthrough. Any data sent will be echoed as-is in the webhook payload.

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the door.</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>actor_id</td><td>F</td><td>String</td><td>Custom actor ID shown in system logs and webhooks. Required if actor_name is provided.</td></tr><tr><td>actor_name</td><td>F</td><td>String</td><td>Custom actor name. Required if actor_id is provided.</td></tr><tr><td>extra</td><td>F</td><td>Object (Map)</td><td>Custom passthrough data. Included as-is in webhook notifications.</td></tr></table>

Note:

If both actor_id and actor_name are omitted, the system will use the API token name as the default actor.

If either actor_id or actor_name is provided, both must be included.

# Request Sample

```bash
curl --location --request PUT \
'https://192.168.1.1:12445/api/v1/developer/doors/CF4b9ee6-05cb-4799-a462-ec307fff2067/unlock' \
--header 'Authorization: Bearer 5aIi+E7DidM2Xzbi6ewtAQ' \
--header 'Content-Type: application/json' \
--data '{
    "actor_id": "actoruuid",
    "actor_name": "actor name",
    "extra": {
        "extra_string": "test",
        "extra_integer": 1,
        "extraBoolean": true
    }
}'
```

# Response Sample

```json
{ "code": "SUCCESS", "data": "success", "msg": "success" } 
```

# 7.10 Set Temporary Door Locking Rule

This API allows you to temporarily set the locking rules for doors.

| Request URL | `/api/v1/developer/doors/:id/lock_rule` |
| :--- | :--- |
| Permission Key | `edit:space` |
| Method | `PUT` |
| UniFi Access Requirement | 1.24.6 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the door.</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>type</td><td>T</td><td>String</td><td>enum type {keep_lock, keep_unlock, custom, reset, lock_early, lock_now} keep_lock is used to set the door to the &quot;keep locked&quot; state, while keep_unlock is used to set it to the &quot;keep unlocked&quot; state. custom allows customization of the unlock time duration, and reset is used to restore the door to its initial state (not applicable to the &quot;lock_early&quot; state). NOTE: If the door is currently on an unlock schedule (schedule), you can use lock_early to lock the door early.</td><td></td></tr><tr><td>interval</td><td>F</td><td>Integer</td><td>Set the lock time duration (minutes) when type is custom.</td><td>10</td></tr></table>

# Request Sample

The request body should be a JSON object containing the following fields:

**Customized 10-minute unlock**

```bash
curl -XPUT '{host}/api/v1/developer/doors/e4978b83-203d-4015-97df-b86efc91cb0c/lock_rule' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data '{
    "type": "custom",
    "interval": 10
}' \
--insecure
```

**Keep it unlocked**

```bash
curl -XPUT '{host}/api/v1/developer/doors/e4978b83-203d-4015-97df-b86efc91cb0c/lock_rule' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data '{
    "type": "keep_unlock"
}' \
--insecure
```

**Keep it locked**

```bash
curl -XPUT '{host}/api/v1/developer/doors/e4978b83-203d-4015-97df-b86efc91cb0c/lock_rule' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data '{
    "type": "keep_lock"
}' \
--insecure
```

> Use `reset` to restore the temporary unlock schedule (e.g., "Unlock for 1 Hour") to its original locked state. This parameter is intended solely for resetting a temporary unlock schedule. If you wish to lock a door before its scheduled unlock time ends, use `lock_early` below instead.

**Reset temporary unlock**

```bash
curl -XPUT '{host}/api/v1/developer/doors/e4978b83-203d-4015-97df-b86efc91cb0c/lock_rule' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data '{
    "type": "reset"
}' \
--insecure
```

> If the door is currently on an unlock schedule, you can use `lock_early` to lock the door before the scheduled time ends. For instance, if the unlock schedule is set from 9:00 AM to 6:00 PM, you can use this parameter at 3:00 PM to end the schedule and lock the door earlier.

**Lock early**

```bash
curl -XPUT '{host}/api/v1/developer/doors/e4978b83-203d-4015-97df-b86efc91cb0c/lock_rule' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data '{
    "type": "lock_early"
}' \
--insecure
```

> `lock_now` is used to terminate both the unlock schedule and any temporary unlock at the same time.

**Lock now**

```bash
curl -XPUT '{host}/api/v1/developer/doors/e4978b83-203d-4015-97df-b86efc91cb0c/lock_rule' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data '{
    "type": "lock_now"
}'
```

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": "success",
    "msg": "success"
} 
```

# 7.11 Fetch Door Locking Rule

This API allows you to fetch the locking rules for doors.

| Request URL | `/api/v1/developer/doors/:id/lock_rule` |
| :--- | :--- |
| Permission Key | `view:space` |
| Method | `GET` |
| UniFi Access Requirement | 1.24.6 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the door.</td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>type</td><td>T</td><td>String</td><td>enum type {schedule,keep_lock,keep_unlock,custom_lock_early} keep_lock is used to set the &quot;keep locked&quot; state, while keep_unlock is used to set the &quot;keep unlocked&quot; state. custom is used to customize the unlock time duration. schedule indicates that the door is currently in the unlock schedule state. The lock_early is used to terminate doors in an unlock schedule early.</td><td></td></tr><tr><td>ended_time</td><td>T</td><td>Integer</td><td>End time of the set rule.</td><td>1708672257</td></tr></table>

# Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/api/v1/developer/doors/e4978b83-203d-4015-97df-b86efc91cb0c/lock_rule' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--insecure
```

# Response Sample

**Keep it locked:**

```json
{ "code": "SUCCESS", "data": { "ended_time": 3602128309, "type": "keep_lock" }, "msg": "success" }
```

**Keep it unlocked:**

```json
{ "code": "SUCCESS", "data": { "ended_time": 3602128562, "type": "keep_unlock" }, "msg": "success" }
```

**Customized unlock duration:**

```json
{ "code": "SUCCESS", "data": { "ended_time": 1708673342, "type": "custom" }, "msg": "success" }
```

**Lock early** (used to terminate doors in an unlock schedule early):

```json
{ "code": "SUCCESS", "data": { "type": "lock_early", "ended_time": 1708673342 }, "msg": "success" }
```

# 7.12 Set Door Emergency Status

This API allows you to set the emergency status for all doors.

| Request URL | `/api/v1/developer/doors/settings/emergency` |
| :--- | :--- |
| Permission Key | `edit:space` |
| Method | `PUT` |
| UniFi Access Requirement | 1.24.6 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>lockdown</td><td>F</td><td>Boolean</td><td>True will keep the door locked.</td><td>true</td></tr><tr><td>evacuation</td><td>F</td><td>Boolean</td><td>True will keep the door unlocked.</td><td>false</td></tr></table>

# Request Sample

The request body should be a JSON object containing the following fields:

```bash
# Keep it locked
curl -XPUT '{host}/api/v1/developer/doors/settings/emergency' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data '{
    "lockdown": true,
    "evacuation": false
}' \
--insecure

# Keep it unlocked
curl -XPUT '{host}/api/v1/developer/doors/settings/emergency' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data '{
    "lockdown": false,
    "evacuation": true
}' \
--insecure

# Restore the initial state or release the setting
curl -XPUT '{host}/api/v1/developer/doors/settings/emergency' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data '{
    "lockdown": false,
    "evacuation": false
}' \
--insecure
```

# Response Sample

```json
{ "code": "SUCCESS", "data": "success", "msg": "success" } 
```

# 7.13 Fetch Door Emergency Status

This API allows you to fetch the emergency status for all doors.

| Request URL | `/api/v1/developer/doors/settings/emergency` |
| :--- | :--- |
| Permission Key | `view:space` |
| Method | `GET` |
| UniFi Access Requirement | 1.24.6 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>lockdown</td><td>F</td><td>Boolean</td><td>True will keep the door locked.</td><td>true</td></tr><tr><td>evacuation</td><td>F</td><td>Boolean</td><td>True will keep the door unlocked.</td><td>false</td></tr></table>

# Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/api/v1/developer/doors/settings/emergency' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--insecure
```

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": {
        "evacuation": true,
        "lockdown": false
    },
    "msg": "success"
} 
```

# 8. Device

The APIs here are designed for device management, including obtaining device lists, device information, device statuses, device configurations, and more.

# 8.1 Fetch Devices

Obtain a list of all current devices. The device ID is required for enrolling an NFC card.

| Request URL | `/api/v1/developer/devices` |
| :--- | :--- |
| Permission Key | `view:device` |
| Method | `GET` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Query Parameters

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td></td></tr><tr><td>refresh</td><td>F</td><td>String</td><td>Refresh the device cache. If true, fetches real-time device info but may be slower.</td><td>refresh=true</td><td></td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Purpose</td><td>Related API</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the device.</td><td>Used for enrolling an NFC card.</td><td>/api/v1/developer/credentials/nfc_cards sessions</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the device.</td><td></td><td></td></tr><tr><td>type</td><td>T</td><td>String</td><td>Device model type (e.g., UA-G2-PRO, UAH-DOOR).</td><td></td><td></td></tr><tr><td>alias</td><td>T</td><td>String</td><td>Alias of the device.</td><td></td><td></td></tr><tr><td>capabilities</td><td>T</td><td>Array[String]</td><td>List of device capabilities (e.g., pin_code, nfc, face, qr_code).</td><td></td><td></td></tr><tr><td>connected_uah_id</td><td>T</td><td>String</td><td>MAC address of the connected UA Hub (empty for hubs themselves).</td><td></td><td></td></tr><tr><td>is_adopted</td><td>T</td><td>Boolean</td><td>Whether the device has been adopted.</td><td></td><td></td></tr><tr><td>is_connected</td><td>T</td><td>Boolean</td><td>Whether the device is currently connected.</td><td></td><td></td></tr><tr><td>is_managed</td><td>T</td><td>Boolean</td><td>Whether the device is managed.</td><td></td><td></td></tr><tr><td>is_online</td><td>T</td><td>Boolean</td><td>Whether the device is online.</td><td></td><td></td></tr><tr><td>location_id</td><td>T</td><td>String</td><td>Door ID the device is bound to.</td><td></td><td></td></tr></table>

> **Note:** The `data` field is a **nested array** (array of arrays). Each inner array groups devices by door/location.

# Request Sample: Shell/cURL

```bash
curl '{host}/api/v1/developer/devices?refresh=true' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
--insecure
```

# Response Body

```json
{
    "code": "SUCCESS",
    "data": [
        [
            {
                "alias": "",
                "capabilities": ["pin_code", "nfc", "face", "qr_code", "is_reader", "support_reboot"],
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
                "capabilities": ["unlock_failure_limit", "emergency_settings", "is_hub", "pin_code"],
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

# 8.2 Fetch Access Device's Access Method Settings

This API allows you to fetch the current access method settings of an Access device.

| Request URL | `/api/v1/developer/devices/:device_id/settings` |
| :--- | :--- |
| Permission Key | `view:device` |
| Method | `GET` |
| UniFi Access Requirement | Version 3.3.10 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>device_id</td><td>T</td><td>String</td><td>Unique ID of the device.</td><td>Get it from the API /api/v1/developer/devices</td></tr></table>

# Request Sample: Shell/cURL

```bash
curl --location 'https://192.168.1.1:12445/api/v1/developer/devices/942a6f4247b2/settings' \
--header 'Authorization: Bearer bphw1H4jw7q9uQ751PN3Nw' 
```

# Response Body

<table><tr><td>Parameter</td><td>Type</td><td>Description</td></tr><tr><td>nfc</td><td>Object</td><td>NFC access method setting.</td></tr><tr><td>nfc.enabled</td><td>String</td><td>Indicates whether the NFC access method is enabled ("true" or "false").</td></tr><tr><td>bt_tap</td><td>Object</td><td>Mobile Tap (via Bluetooth) access method setting.</td></tr><tr><td>bt_tap.enabled</td><td>String</td><td>Indicates whether Mobile Tap is enabled ("true" or "false").</td></tr><tr><td>bt_button</td><td>Object</td><td>Mobile Unlock (via Bluetooth) access method setting.</td></tr><tr><td>bt_button.enabled</td><td>String</td><td>Indicates whether Mobile Unlock is enabled ("true" or "false").</td></tr><tr><td>bt_shake</td><td>Object</td><td>Mobile Shake (via Bluetooth) access method setting.</td></tr><tr><td>bt_shake.enabled</td><td>String</td><td>Indicates whether Mobile Shake is enabled ("true" or "false").</td></tr><tr><td>mobile_wave</td><td>Object</td><td>Mobile Wave access method setting.</td></tr><tr><td>mobile_wave.enabled</td><td>String</td><td>Indicates whether Mobile Wave is enabled ("true" or "false").</td></tr><tr><td>pin_code</td><td>Object</td><td>PIN access method setting.</td></tr><tr><td>pin_code.enabled</td><td>String</td><td>Indicates whether PIN is enabled ("true" or "false").</td></tr><tr><td>pin_code.pin_code_shuffle</td><td>String</td><td>Determine whether PIN shuffle is enabled ("true" or "false").</td></tr><tr><td>face</td><td>Object</td><td>Face Unlock access method setting.</td></tr><tr><td>face.enabled</td><td>String</td><td>Determine whether Face Unlock is enabled ("true" or "false").</td></tr><tr><td>face.anti_spoofing_level</td><td>String</td><td>enum anti_spoofing_level {high, medium, no} Anti-spoofing security level for Face Unlock.</td></tr><tr><td>face.detect_distance</td><td>String</td><td>enum detect_distance {near, medium, far} Face Unlock detection distance setting.</td></tr><tr><td>wave</td><td>Object</td><td>Hand Wave access method setting.</td></tr><tr><td>wave.enabled</td><td>String</td><td>Indicates whether Hand Wave is enabled ("true" or "false").</td></tr><tr><td>qr_code</td><td>Object</td><td>QR code access method setting.</td></tr><tr><td>qr_code.enabled</td><td>String</td><td>Indicates whether QR code is enabled ("true" or "false").</td></tr><tr><td>touch_pass</td><td>Object</td><td>Touch Pass access method setting.</td></tr><tr><td>touch_pass.enabled</td><td>String</td><td>Indicates whether Touch Pass is enabled ("true" or "false").</td></tr></table>

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": {
        "access_methods": {
            "bt_button": {
                "enabled": "yes"
            "bt_tap": {
                "enabled": "yes"
            "face": {
                "anti_spoofing_level": "no",
                "detect_distance": "far"
            "nfc": {
                "enabled": "yes"
            "pin_code": {
                "enabled": "yes",
                "pin_code_shuffle": "no"
            "qr_code": {
                "enabled": "yes"
            "touch_pass": {
                "enabled": "yes"
            }
        },
        "device_id": "942a6f4247b2"
    "msg": "success"
}
```

# 8.3 Update Access Device's Access Method Settings

This API allows you to update the access method settings of an Access device.

| Request URL | `/api/v1/developer/devices/:device_id/settings` |
| :--- | :--- |
| Permission Key | `edit:device` |
| Method | `PUT` |
| UniFi Access Requirement | Version 3.3.10 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Bearer Token required for authentication and access control.</td></tr><tr><td>Content-Type</td><td>T</td><td>String</td><td>Must be application/json.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>device_id</td><td>T</td><td>String</td><td>Unique ID of the device.</td><td>Get it from the API /api/v1/developer/devices</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td>How to Get It?</td></tr><tr><td>nfc</td><td>F</td><td>Object</td><td>NFC access method setting.</td><td></td><td></td></tr><tr><td>nfc.enabled</td><td>F</td><td>String</td><td>Indicates whether the NFC access method is enabled ("true" or "false").</td><td>"true"</td><td></td></tr><tr><td>bt_tap</td><td>F</td><td>Object</td><td>Mobile Tap (via Bluetooth) access method setting.</td><td></td><td></td></tr><tr><td>bt_tap.enabled</td><td>F</td><td>String</td><td>Indicates whether Mobile Tap is enabled ("true" or "false").</td><td>"true"</td><td></td></tr><tr><td>bt_button</td><td>F</td><td>Object</td><td>Mobile Unlock (via Bluetooth) access method setting.</td><td></td><td></td></tr><tr><td>bt_button.enabled</td><td>F</td><td>String</td><td>Indicates whether Mobile Unlock is enabled ("true" or "false").</td><td>"true"</td><td></td></tr><tr><td>bt_shake</td><td>F</td><td>Object</td><td>Mobile Shake (via Bluetooth) access method setting.</td><td></td><td></td></tr><tr><td>bt_shake.enabled</td><td>F</td><td>String</td><td>Indicates whether Mobile Shake is enabled ("true" or "false").</td><td>"false"</td><td></td></tr><tr><td>mobile_wave</td><td>F</td><td>Object</td><td>Mobile Wave access method setting.</td><td></td><td></td></tr><tr><td>mobile_wave.enabled</td><td>F</td><td>String</td><td>Indicates whether Mobile Wave is enabled ("true" or "false").</td><td>"true"</td><td></td></tr><tr><td>pin_code</td><td>F</td><td>Object</td><td>PIN access method setting.</td><td></td><td></td></tr><tr><td>pin_code.enabled</td><td>F</td><td>String</td><td>Indicates whether PIN is enabled ("true" or "false").</td><td>"true"</td><td></td></tr><tr><td>pin_code.pin_code_shuffle</td><td>F</td><td>String</td><td>Indicates whether PIN shuffle is enabled ("true" or "false").</td><td>"false"</td><td></td></tr><tr><td>face</td><td>F</td><td>Object</td><td>Face Unlock access method setting.</td><td></td><td></td></tr><tr><td>face.enabled</td><td>F</td><td>String</td><td>Indicates whether Face Unlock is enabled ("true" or "false").</td><td>"true"</td><td></td></tr><tr><td>face.anti_spoofing_level</td><td>F</td><td>String</td><td>enum anti spoofing_level {high, medium, no} Anti spoofing security level for Face Unlock.</td><td>"medium"</td><td></td></tr><tr><td>face.detect_distance</td><td>F</td><td>String</td><td>enum detect_distance {near, medium, far} Face Unlock detection distance setting.</td><td>"medium"</td><td></td></tr><tr><td>wave</td><td>F</td><td>Object</td><td>Hand Wave access method setting.</td><td></td><td></td></tr><tr><td>wave.enabled</td><td>F</td><td>String</td><td>Indicates whether Hand Wave is enabled ("true" or "false").</td><td>"false"</td><td></td></tr><tr><td>qr_code</td><td>F</td><td>Object</td><td>QR code access method setting.</td><td></td><td></td></tr><tr><td>qr_code.enabled</td><td>F</td><td>String</td><td>Indicates whether QR code is enabled ("true" or "false").</td><td>"true"</td><td></td></tr><tr><td>touch_pass</td><td>F</td><td>Object</td><td>Touch Pass access method setting.</td><td></td><td></td></tr><tr><td>touch_pass.enabled</td><td>F</td><td>String</td><td>Indicates whether Touch Pass is enabled ("true" or "false").</td><td>"true"</td><td></td></tr></table>

NOTE: pin_code.pin_code_shuffle setting only takes effect when pin_code.enabled is set to "true" .

NOTE: face.anti_spoofing_level and face.detect_distance settings only take effect when face.enabled is set to "true" .

NOTE: anti_spoofing_level and detect_distance must use valid combinations to adjust Face Unlock sensitivity. The following combinations are supported: no/far , no/medium , medium/near , high/near . Only these combinations will take effect.

# Request Sample: Shell/cURL

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

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": "success",
    "msg": "success"
} 
```

# 8.4 Trigger Doorbells

This API allows you to trigger the doorbell on an Intercom or Reader Pro.

| Request URL | `/api/v1/developer/devices/:device_id/doorbell` |
| :--- | :--- |
| Permission Key | `edit:device` |
| Method | `POST` |
| UniFi Access Requirement | Version 4.0.10 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Bearer Token required for authentication and access control.</td></tr><tr><td>Content-Type</td><td>T</td><td>String</td><td>Must be application/json.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>device_id</td><td>T</td><td>String</td><td>Unique ID of the reader.</td><td>Get it from the API /api/v1/developer/devices</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>room_name</td><td>T</td><td>String</td><td>Specifies the Intercom&#x27;s directory name to trigger the doorbell. Use empty string to ring the default doorbell.</td><td>&quot;intercom directory name&quot;</td></tr><tr><td>cancel</td><td>F</td><td>Boolean</td><td>If set to true, cancels the previous doorbell if it&#x27;s still ringing.</td><td>false</td></tr></table>

> **Note (verified against live API):** `room_name` is required — omitting it or sending an empty body returns `CODE_PARAMS_INVALID`. An empty string `""` is accepted and rings the default doorbell.

# Request Sample: Shell/cURL

```yaml
curl --location 'https://192.168.1.1:12445/api/v1/developer/devices/788a20c002c7/doorbell' \
--header 'Authorization: Bearer qw8wle29QpEiUuRzdraOdoLQirvukxPT' \
--header 'Content-Type: application/json' \
--data '{ "room_name": "intercom directory name", "cancel": true }' 
```

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": "success",
    "msg": "success"
} 
```

# 9. System Log

The APIs here are designed for system log management.

# 9.1 Topic Reference

<table><tr><td>Parameter</td><td>Description</td></tr><tr><td>all</td><td>Fetch all logs.</td></tr><tr><td>door_openings</td><td>Fetch door opening logs.</td></tr><tr><td>critical</td><td>Fetch logs for device restart, deletion, offline status, and detection.</td></tr><tr><td>updates</td><td>Fetch device update logs.</td></tr><tr><td>device_events</td><td>Fetch logs for device online status, device updates, access policy synchronization, and active and inactive door unlock schedules.</td></tr><tr><td>admin_activity</td><td>Fetch logs for admin activity, such as access policy updates, settings changes, and user management.</td></tr><tr><td>visitor</td><td>Fetch logs of of visitor-related operations.</td></tr></table>

# 9.1.1 Event Structure

Event: Basic information about the event.

<table><tr><td>Key</td><td>Value (Example)</td></tr><tr><td>Type</td><td>access.door.unlock</td></tr><tr><td>Display Message</td><td>Access Granted (Remote)</td></tr><tr><td>Result</td><td>ACCESS</td></tr><tr><td>Published</td><td>1701087091000</td></tr><tr><td>Tag</td><td>access</td></tr></table>

Actor: Information about the event operator.   

<table><tr><td>Key</td><td>Value</td></tr><tr><td>ID</td><td>[Actor ID]</td></tr><tr><td>Type</td><td>user</td></tr><tr><td>Display Name</td><td>[Display Name]</td></tr><tr><td>Alternate ID</td><td>[Alternate ID]</td></tr><tr><td>Alternate Name</td><td>[Alternate Name]</td></tr><tr><td>Avatar</td><td>[Avatar]</td></tr><tr><td>SSO Picture</td><td>[SSO Picture]</td></tr></table>

Authentication: Certification information.   

<table><tr><td>Key</td><td>Value</td></tr><tr><td>Credential Provider</td><td>REMOTE_THROUGH_UAH</td></tr><tr><td>Issuer</td><td>[Issuer]</td></tr></table>

Target(s): Additional information associated with the event. Note that each event contains different attributes.   

<table><tr><td>Type</td><td>ID</td><td>Display Name</td><td>Alternate ID</td><td>Alternate Name</td></tr><tr><td>UAH</td><td>7483c2773855</td><td>UA-HUB-3855</td><td>[Alternate ID]</td><td>[Alternate Name]</td></tr><tr><td>device_config</td><td>door_entry_method</td><td>entry/exit</td><td>[Alternate ID]</td><td>[Alternate Name]</td></tr><tr><td>door</td><td>e4978b83-203d-4015-97df-b86efc91cb0c</td><td>Door 3855</td><td>[Alternate ID]</td><td>[Alternate Name]</td></tr><tr><td>floor</td><td>04ddb371-457f-44ae-b8cc-8e96bcee5de4</td><td>1F</td><td>[Alternate ID]</td><td>[Alternate Name]</td></tr><tr><td>building</td><td>e622671e-89a5-11ee-8897-76acb95e28d5</td><td>UDM Pro</td><td>[Alternate ID]</td><td>[Alternate Name]</td></tr></table>

# 9.2 Fetch System Logs

This API enables you to fetch system logs.

| Request URL | `/api/v1/developer/system/logs` |
| :--- | :--- |
| Permission Key | `view:system_log` |
| Method | `POST` |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Query Parameters

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>page_num</td><td>F</td><td>String</td><td>Current page number in the pagination.</td><td>1</td></tr><tr><td>page_size</td><td>F</td><td>String</td><td>Number of logs per page.</td><td>25</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>topic</td><td>T</td><td>String</td><td>Fetch different system logs by topic enum topic{critical, door_openings, updates, device_events, admin_activity, visitor}</td><td>door_openings</td></tr><tr><td>since</td><td>F</td><td>Integer</td><td>Start time for log fetching.</td><td>1689304925</td></tr><tr><td>until</td><td>F</td><td>Integer</td><td>End time for log fetching.</td><td>1689804925</td></tr><tr><td>actor_id</td><td>F</td><td>String</td><td>Identity ID of the actor (user, visitor, and device).</td><td>3e1f196e-c97b-4748-aecb-eab5e9c251b2</td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>actor</td><td>T</td><td>Object</td><td>Information about the event operator.</td></tr><tr><td>event</td><td>T</td><td>Object</td><td>Basic information about the event.</td></tr><tr><td>authentication</td><td>F</td><td>Object</td><td>Certification information.</td></tr><tr><td>target</td><td>F</td><td>Array[Object]</td><td>Additional information associated with the event, such as updated information.</td></tr></table>

Request Sample: Shell/cURL   
```json
curl '{host}/api/v1/developer/system/logs?page_size=1&page_num=25'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--data {
    "topic": "door_openings",
    "since": 1690770546,
    "until": 1690771546,
    "actor_id": "3e1f196e-c97b-4748-aecb-eab5e9c251b2"
} 
```

# Response Body
```json
{
    "code": "SUCCESS",
    "data": {
        "hits": [
            {
                "@timestamp": "2023-07-11T12:11:27Z",
                "_id": "",
                "_source": {
                    "actor": {
                        "alternate_id": "",
                        "alternate_name": "",
                        "display_name": "N/A",
                        "id": "",
                        "type": "user"
                    "authentication": {
                        "credential_provider": "NFC",
                        "issuer": "6FC02554"
                    "event": {
                        "display_message": "Access Denied / Unknown (NFC)",
                        "published": 1689077487000,
                        "reason": "",
                        "result": "BLOCKED",
                        "type": "access.door.unlock"
                    "target": [
                        {
                            "alternate_id": "",
                            "alternate_name": "",
                            "display_name": "UA-HUB-3855",
                            "id": "7483c2773855",
                            "type": "UAH"
                        }
                    ]
                "tag": "access"
            }
        ]
    "page": 1,
    "total": 4
}
```

# 9.3 Export System Logs

This API enables you to export system logs to a CSV file.

| Request URL | `/api/v1/developer/system/logs/export` |
| :--- | :--- |
| Permission Key | `view:system_log` |
| Method | `POST` |
| UniFi Access Requirement | 1.20.11 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>topic</td><td>T</td><td>String</td><td>Fetch different system logs by topic enum topic {critical, door_openings, updates, device_events, admin_activity, visitor}</td><td>door_openings</td></tr><tr><td>since</td><td>T</td><td>Integer</td><td>Start time for log fetching.</td><td>1689304925</td></tr><tr><td>until</td><td>T</td><td>Integer</td><td>End time for log fetching. Note that the since and until periods cannot exceed one month.</td><td>1689804925</td></tr><tr><td>timezone</td><td>T</td><td>String</td><td>Timezone for formatting time.</td><td>America/New_York</td></tr><tr><td>actor_id</td><td>F</td><td>String</td><td>Identity ID of the actor (user, visitor, and device).</td><td>3e1f196e-c97b-4748-aecb-eab5e9c251b2</td></tr></table>

# Request Sample: Shell/cURL

```bash
curl '{host}/api/v1/developer/system/logs/export'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--data {}
    "topic": "door_openings",
    "since": 1690770546,
    "until": 1690771546,
    "timezone": "America/New_York",
    "actor_id": "3e1f196e-c97b-4748-aecb-eab5e9c251b2"
}'
--insecure 
```

# 9.4 Fetch Resources in System Logs

This API enables you to fetch the resources in system logs.

| Request URL | `/api/v1/developer/system/logs/resource/:id` |
| :--- | :--- |
| Permission Key | `view:system_log` |
| Method | `GET` |
| UniFi Access Requirement | 1.24.6 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>Id</td><td>T</td><td>String</td><td>Resource ID is obtained from targets categorized as the &#x27;activities_resource&#x27; type in system logs.</td><td>&quot;target&quot;: {&quot;type&quot;: &quot;activities_resource&quot;,&quot;id&quot;: &quot;0418d6a38f00-b6906057-2a90-4426-835c-b5b172381fec&quot;,&quot;display_name&quot;: &quot;Resource&quot;,&quot;alternate_id&quot;: &quot;&quot;, &quot;alternate_name&quot;: &quot;&quot;}]</td></tr></table>

# Response Sample

```json
{
    "code": "SUCCESS",
    "msg": "success",
    "data": {
        "video_record": "/activities_resource/video/1708424638_f24a7b67-c584-4e22-a7b8-074f0fa93da0.mp4",
        "video_record_thumbnail": "/activities_resource/thumbnail/1708424638_a6d1fa60-d895-4d4c-a40c-447f97c8824f.jpg",
        "created_at": "2024-02-20T18:23:58+08:00",
        "updated_at": "2024-02-20T18:23:58+08:00"
    }
} 
```

# Request Sample: Shell/cURL

```bash
curl '{host}/api/v1/developer/system/logs/resource/0418d6a38f00-b6906057-2a90-4426-835c-b5b172381fec'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

# 9.5 Fetch Static Resources in System Logs

This API enables you to fetch static resources in system logs.

| Request URL | `/api/v1/developer/system/static/:path` |
| :--- | :--- |
| Permission Key | `view:system_log` |
| Method | `GET` |
| UniFi Access Requirement | 1.24.6 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>path</td><td>T</td><td>String</td><td>Resource paths, currently supporting /ayar, /capture, and activities_resource.</td><td></td></tr></table>

```yaml
# avatar resource
curl '{host}/api/v1/developer/system/static/ avatar/dalaceb6-20ba-4285-a6b1-c4f2bf7161f8'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--insecure
# preview resource
curl '{host}/api/v1/developer/system/static-preview/1700707333_9660da3a-06c8-459d-8cc9-24889d13fba5.png'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--insecure
# capture video resource
curl '{host}/api/v1/developer/system/static/activities_resource/video/1708402379_92746868-5c69-4a11-9d4c-33f03785d741.jpg'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--insecure
# capture thumbnail resource
curl
'{host}/api/v1/developer/system/static/activities_resource/thumbail/1708402379_92746868-5c69-4a11-9d4c-33f03785d741.jpg'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--insecure 
```

# 10. UniFi Identity

The APIs here are designed for the UniFi Identity app.

# 10.1 Send UniFi Identity Invitations

This API enables you to send invitations and invite users to join UniFi Identity.

| Request URL | `/api/v1/developer/users/identity/invitations` |
| :--- | :--- |
| Permission Key | `edit:user` |
| Method | `POST` |
| UniFi Access Requirement | 1.24.6 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Array[Object].user_id</td><td>T</td><td>String</td><td>Identity ID of the user.</td></tr><tr><td>Array[Object].email</td><td>F</td><td>String</td><td>Email of the user. If filled in, it will update the user&#x27;s existing email address.</td></tr></table>

# Request Sample: Shell/cURL

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

# Response Body

```json
Success   
{ "code": "SUCCESS", "data": [], "msg": "success"   
}   
# If there is a failure to send an email   
{ "code": "SUCCESS", "data": [ "error_code": "", "error_msg": "invalid email", "user_email": "example@*.com", "user_id": "e0051e08-c4d5-43db-87c8-a9b19cb66513" } ], 
"msg": "success" } 
```

# 10.2 Fetch Available Resources

This API enables you to fetch the available UniFi Identity resources.

| Request URL | `/api/v1/developer/users/identity/assignments` |
| :--- | :--- |
| Permission Key | `view:user` |
| Method | `GET` |
| UniFi Access Requirement | 1.24.6 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Query Parameters

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>resource_type</td><td>F</td><td>String</td><td>Display the type of resources; show all when left blank. enum resource_type {evstation,vpn,wifi}</td><td>resource_type=evstation,wifi,vpn</td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>data.
[resource_type]</td><td>T</td><td>String</td><td>Type of the resources. enum resource_type
{evstation, vpn, wifi, camera}</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the resources.</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the resources.</td></tr><tr><td>deleted</td><td>T</td><td>Boolean</td><td>Indicate whether the resource is disabled.</td></tr></table>

# Request Sample: Shell/cURL

```bash
curl '{host}/api/v1/developer/users/identity/assignments?resource_type=evstation,wifi,vpn' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--insecure
```

# Response Sample

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
        ]
    ],
    "wifi": [
        {
        "deleted": false,
        "id": "65cff9a8c188cb71cfac8e9a",
        "metadata": null,
        "name": "UniFi Identity",
        "short_name": ""
    ]
} 
```

# 10.3 Assign Resources to Users

This API enables you to assign UniFi Identity resources to users.

| Request URL | `/api/v1/developer/users/:id/identity/assignments` |
| :--- | :--- |
| Permission Key | `edit:user` |
| Method | `POST` |
| UniFi Access Requirement | 1.24.6 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user.</td><td>Get it from the API /api/v1/developer/users</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>resource_type</td><td>T</td><td>String</td><td>enum resource_type
{ev(station,vpn,wifi}</td><td>Get it from the API 10.2</td></tr><tr><td>resource_ids</td><td>T</td><td>Array&lt;String]</td><td>Identity ID of the resources.</td><td>Get it from the API 10.2</td></tr></table>

# Request Sample: Shell/cURL

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

# Response Sample

```json
{ "code": "SUCCESS", "data": null, "msg": "success" } 
```

# 10.4 Fetch Resources Assigned to Users

This API enables you to fetch the UniFi Identity resources assigned to users.

| Request URL | `/api/v1/developer/users/:id/identity/assignments` |
| :--- | :--- |
| Permission Key | `view:user` |

| Method | `GET` |
| :--- | :--- |
| UniFi Access Requirement | 1.24.6 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user.</td><td>Get it from the API /api/v1/developer/users</td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>data.
[resource_type]</td><td>T</td><td>Array[Object]</td><td>Type of the resources. enum resource_type
{evstation, vpn,wifi,camera}</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the resources.</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the resources.</td></tr><tr><td>deleted</td><td>T</td><td>Boolean</td><td>Indicate whether a resource is disabled.</td></tr></table>

# Request Sample: Shell/cURL

```bash
curl -XGET '{host}'/api/v1/developer/users/b602879b-b857-400b-970b-336d4cb881ad/identity/assignments'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

# Response Sample


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
    "msg": "success"
}
```

# 10.5 Assign Resources to User Groups

This API enables you to assign UniFi Identity resources to user groups.

| Request URL | `/api/v1/developer/user_groups/:id/identity/assignments` |
| :--- | :--- |
| Permission Key | `edit:user` |
| Method | `POST` |
| UniFi Access Requirement | 2.2.0 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user group.</td><td>Get it from the API /api/v1/developer/user_groups</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>resource_type</td><td>T</td><td>String</td><td>enum resource_type {ev_station,vpn,wifi}</td><td>Get it from the API 10.2</td></tr><tr><td>resource_ids</td><td>T</td><td>Array[String]</td><td>Identity ID of the resources.</td><td>Get it from the API 10.2</td></tr></table>

# Request Sample: Shell/cURL

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

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": null,
    "msg": "success"
}
```

# 10.6 Fetch the Resources Assigned to User Groups

This API enables you to fetch the UniFi Identity resources assigned to user groups.

| Request URL | `/api/v1/developer/user_groups/:id/identity/assignments` |
| :--- | :--- |
| Permission Key | `view:user` |
| Method | `GET` |
| UniFi Access Requirement | 2.2.0 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user group.</td><td>Get it from the API /api/v1/developer/user_groups</td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>data.[resource_type]</td><td>T</td><td>Array[Object]</td><td>Type of the resources. enum resource_type {ev_station,vpn,wifi,camera}</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the resources.</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the resources.</td></tr><tr><td>deleted</td><td>T</td><td>Boolean</td><td>Indicate whether a resource is disabled.</td></tr></table>

# Request Sample: Shell/cURL

```bash
curl -XGET '{{host}}/api/v1/developer/user_groups/7476c839-8e10-472e-894f-c5b8254c35b5/identity/assignments'
    -H 'Authorization: Bearer wHFmHR******kD6wHg'
    -H 'accept: application/json'
    -H 'content-type: application/json'
    --insecure
```

# Response Sample

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
    "msg": "success"
}
```

# 11. Notification

> The APIs here are designed for Webhooks and WebSockets.

# 11.1 Fetch Notifications [WebSocket]

This API enables you to fetch notifications, such as doorbell notifications.

| Request URL | `/api/v1/developer/devices/notifications` |
| :--- | :--- |
| Permission Key | `view:device` |
| Protocol | `WebSocket` |
| Method | `GET` |
| UniFi Access Requirement | 1.20.11 or later |

# Request Sample: wscat

```bash
wscat \
    --no-check \
    -C wss://192.168.1.1:12445/api/v1/developer/devices/notifications \
    -H "Authorization: Bearer qoFJM******9YQX0+g+g" \
    -H "Upgrade: websocket" \
    -H "Connection: Upgrade"
```

# WebSocket Payload

When a doorbell rings: [access.remote_view]

```json
{
    "event": "access.remote_view",
    "receiver_id": "",
    "event_object_id": "535b6125-860c-489a-b0a1-0ba01906afa9",
    "save_to_history": false,
    "data": {
        "channel": "4513899f-0370-4116-9731-63a6b0feea23",
        "token": "6dff120f-2688-497d-856f-0ca08b383d1d",
        "device_id": "e4388386be1d",
        "device_type": "UA-G2-PRO",
        "device_name": "UA-G2-PRO-BE1D",
        "door_name": "Door 236b",
        "controller_id": "68d79a1f494f",
        "floor_name": "1F",
        "request_id": "J0FeDJc8ZNzHjxr1SUIP6GLQDjAkdZFp",
        "clear_request_id": "",
        "in_or_out": "in",
        "create_time": 1694771479,
        "reason_code": 0,
        "door_guard_ids": [
            "daa10301-7744-4623-a90e-372718af1d41",
            "9d526114-70ce-49ec-8655-81767ffb3eb4",
            "c003514f-60bb-4aa3-9150-cd361b1458a0",
            "0d6273e4-9b54-4b91-b7f8-40d0d41780c1",
            "f395f473-e6ea-4232-a45f-9ec20c813e96",
            "c52f9920-be17-4357-936c-47d94dad753a",
            "8ed10bf7-8f5e-4b68-98da-76d2f315d515",
            "e4de9c92-e385-4b31-8cfc-8e9d192c0e10",
            "2159ac55-a1d9-42f3-ba2b-6c87cf5ea383"
        ],
        "connected_uah_id": "e4388384236b",
        "room_id": "WR-e4388386be1d-3YSCjtuV5VuyfLT46mUXnnY2q5KQfKxx",
        "host_device_mac": "68D79A1F494B"
    }
}
```

Doorbell status change: [access.remote_view.change]

| reason_code | Description |
|---|---|
| 105 | Doorbell timed out. |
| 106 | An admin rejected to unlock a door. |
| 107 | An admin successfully unlocked the door. |
| 108 | A visitor canceled a doorbell. |
| 400 | Doorbell was answered by another admin. |

Remote door unlock by admin: [access.data.device.remote_unlock]

```json
{
    "event": "access.data.device.remote_unlock",
    "receiver_id": "",
    "event_object_id": "e4388384236b",
    "save_to_history": false,
    "data": {
        "unique_id": "5d600936-8618-4f2d-a1b7-d786865b70ba",
        "name": "Door 236b",
        "up_id": "913a35bc-66c9-4293-a617-846dd2e285ed",
        "timezone": "",
        "location_type": "door",
        "extra_type": "",
        "full_name": "UDR-ML - 1F - Door 236b",
        "level": 0,
        "work_time": "[]",
        "work_time_id": "",
        "extras": {
            "uah-input_state_dps": "off",
            "uah-wiring_state_dps-neg": "off",
            "uah-wiring_state_dps-pos": "off"
        }
    }
}
```

# 11.2 List of Supported Webhook Events [Webhook]

> To enable webhook events, you must register webhook endpoints. Once registered, UniFi Access pushes real-time event data to your application's webhook endpoint as events occur. UniFi Access uses HTTPS to send these webhook events to your application, delivering a JSON payload containing a JSON object.

| Event/Operation | Description |
|---|---|
| access.doorbell.incoming | Triggered when a doorbell rings (incoming call). |
| access.doorbell.completed | Triggered when a doorbell event is accepted, declined, or canceled. |
| access.doorbell.incoming.REN | Triggered by doorbells activated via Request-to-Enter (REN) buttons. |
| access.device.dps_status | Indicates a change in the door position sensor (DPS) status. |
| access.door.unlock | Triggered on all door unlock events. |
| access.device.emergency_status | Indicates a change in emergency mode status. |
| access.unlock_schedule.activate | Triggered when an unlock schedule becomes active. |
| access.unlock_schedule.deactivate | Triggered when an unlock schedule becomes inactive. |
| access.temporary_unlock.start | Triggered when a temporary unlock starts. |
| access.temporary_unlock.end | Triggered when a temporary unlock ends. |
| access.visitor.status.changed | Indicates that a visitor's status has changed. |

> NOTE: unlock_schedule.activate, unlock_schedule.deactivate, temporary_unlock.start, temporary_unlock.end, visitor.status.changed UniFi Access Requirement: Version 3.3.10 or later

# 11.3 Fetch Webhook Endpoints List [Webhook]

This API enables you to fetch the available webhook endpoints.

| Request URL | `/api/v1/developer/webhooks/endpoints` |
| :--- | :--- |
| Permission Key | `view:webhook` |
| Method | `GET` |
| UniFi Access Requirement | 2.2.10 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the endpoint.</td></tr><tr><td>endpoint</td><td>T</td><td>String</td><td>The HTTPS URL where webhook events are sent.</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the webhook subscription.</td></tr><tr><td>secret</td><td>T</td><td>String</td><td>The secret used for verifying events coming from UniFi Access.</td></tr><tr><td>events</td><td>T</td><td>Array[String]</td><td>List of events to subscribe to.</td></tr><tr><td>headers</td><td>F</td><td>Object&lt;String, String&gt;</td><td>Custom headers for forwarding requests to the endpoint service.</td></tr></table>

# Request Sample: Shell/cURL

```bash
curl '{{host}}/api/v1/developer/webhooks/endpoints'
    -H 'Authorization: Bearer wHFmHR******kD6wHg'
    -H 'accept: application/json'
    -H 'content-type: application/json'
    --insecure
```

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": [
        {
            "endpoint": "http://192.168.1.1:8080",
            "events": [
                "access.doorbell.incoming",
                "access.doorbell.completed",
                "access.doorbell.incoming.REN",
                "access.device.dps_status",
                "access.door.unlock"
            ],
            "id": "1a639160-a7c8-45cb-8789-50dfd255a0fe",
            "name": "subscription events",
            "secret": "6601f1243d2ff70f",
            "headers": {
                "key": "value"
            }
        }
    ],
    "msg": "success"
}
```

# 11.4 Add Webhook Endpoints [Webhook]

This API enables you to add a webhook endpoint.

| Request URL | `/api/v1/developer/webhooks/endpoints` |
| :--- | :--- |
| Permission Key | `edit:webhook` |
| Method | `POST` |
| UniFi Access Requirement | 2.2.10 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>endpoint</td><td>T</td><td>String</td><td>The HTTPS URL where webhook events are sent. Note: HTTPS is recommended for security.</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the webhook subscription.</td></tr><tr><td>events</td><td>T</td><td>Array[String]</td><td>List of events to subscribe to.</td></tr><tr><td>headers</td><td>F</td><td>Object&lt;String, String&gt;</td><td>Custom headers for forwarding requests to the endpoint service.</td></tr></table>

# Request Sample: Shell/cURL

```bash
curl -XPOST '{{host}}/api/v1/developer/webhooks/endpoints'
    -H 'Authorization: Bearer wHFmHR******kD6wHg'
    -H 'accept: application/json'
    -H 'content-type: application/json'
    --data '{
        "name": "subscription events",
        "endpoint": "http://192.168.1.1:8080",
        "events": [
            "access.doorbell.incoming",
            "access.doorbell.completed",
            "access.doorbell.incoming.REN",
            "access.device.dps_status",
            "access.door.unlock"
        ],
        "headers": {
            "key": "value"
        }
    }'
    --insecure
```

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": {
        "endpoint": "http://192.168.1.1:8080",
        "events": [
            "access.doorbell.incoming",
            "access.doorbell.completed",
            "access.doorbell.incoming.REN",
            "access.device.dps_status",
            "access.door.unlock"
        ],
        "id": "a22ee283-c91f-432b-9d0f-e89bcccad4be",
        "name": "subscription events",
        "secret": "1a7c9c6a69bb5a1e",
        "headers": {
            "key": "value"
        }
    },
    "msg": "success"
}
```

# 11.5 Update Webhook Endpoints [Webhook]

This API enables you to update the available webhook endpoints.

| Request URL | `/api/v1/developer/webhooks/endpoints/:id` |
| :--- | :--- |
| Permission Key | `edit:webhook` |
| Method | `PUT` |
| UniFi Access Requirement | 2.2.10 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the endpoint.</td><td>a22ee283-c91f-432b-9d0f-e89bcccad4be</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>endpoint</td><td>T</td><td>String</td><td>The HTTPS URL where webhook events are sent.</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the webhook subscription.</td></tr><tr><td>events</td><td>T</td><td>Array[String]</td><td>List of events to subscribe to.</td></tr><tr><td>headers</td><td>F</td><td>Object&lt;String, String&gt;</td><td>Custom headers for forwarding requests to the endpoint service.</td></tr></table>

# Request Sample: Shell/cURL

```bash
curl -XPUT '{{host}}/api/v1/developer/webhooks/endpoints/a22ee283-c91f-432b-9d0f-e89bcccad4be'
    -H 'Authorization: Bearer wHFmHR******kD6wHg'
    -H 'accept: application/json'
    -H 'content-type: application/json'
    --data '{
        "name": "subscription events",
        "endpoint": "http://192.168.1.1:8080",
        "events": [
            "access.doorbell.incoming",
            "access.doorbell.completed",
            "access.doorbell.incoming.REN",
            "access.device.dps_status",
            "access.door.unlock",
            "access.device.emergency_status"
        ],
        "headers": {
            "key": "value"
        }
    }'
    --insecure
```

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": {
        "endpoint": "http://192.168.1.1:8080",
        "events": [
            "access.doorbell.incoming",
            "access.doorbell.completed",
            "access.doorbell.incoming.REN",
            "access.device.dps_status",
            "access.door.unlock"
        ],
        "id": "a22ee283-c91f-432b-9d0f-e89bcccad4be",
        "name": "subscription events",
        "secret": "1a7c9c6a69bb5a1e",
        "headers": {
            "key": "value"
        }
    },
    "msg": "success"
}
```

# 11.6 Delete Webhook Endpoints [Webhook]

This API enables you to delete the available webhook endpoints.

| Request URL | `/api/v1/developer/webhooks/endpoints/:id` |
| :--- | :--- |
| Permission Key | `edit:webhook` |
| Method | `DELETE` |
| UniFi Access Requirement | 2.2.10 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the endpoint.</td><td>a22ee283-c91f-432b-9d0f-e89bcccad4be</td></tr></table>

# Request Sample: Shell/cURL

```bash
curl -XDELETE '{{host}}/api/v1/developer/webhooks/endpoints/a22ee283-c91f-432b-9d0f-e89bcccad4be'
    -H 'Authorization: Bearer wHFmHR******kD6wHg'
    -H 'accept: application/json'
    --insecure
```

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": null,
    "msg": "success"
}
```

# 11.7 Allow Webhook Endpoint Owner to Receive Webhook Events [Webhook]

The following samples demonstrate how to receive webhook messages. Note that the secret needs to be adjusted to the assigned secret. These are just examples; in actual use, HTTPS and a custom URL should be used.

| Request URL | Your webhook endpoint |
| :--- | :--- |
| Method | `POST` |
| UniFi Access Requirement | 2.2.10 or later |

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>Signature</td><td>T</td><td>String</td><td>Contains request time(t) and signature(v1)</td><td>t=1695902233,v1=a7ea8840af212767d7795481bed914a9f2ea7241d35212b597bec13aa4bfa06b</td></tr></table>

> See the official PDF documentation for complete webhook payload samples and Go/Rust/Python code samples for handling webhook requests.

# 12. API Server

> The APIs here are designed for API server configuration.

# 12.1 Upload HTTPS Certificate

This API allows you to update the HTTPS certificate for the Access API, applicable only to port 12445. **Please note that restarting the Access application is necessary to apply these changes.** If the Private Key and Certificate do not match, it will result in a "parameter error" message.

| Request URL | `/api/v1/developer/api_server/certificates` |
| :--- | :--- |
| Permission Key | `edit:api_server` |
| Method | `POST` |
| UniFi Access Requirement | Version 2.2.10 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>key</td><td>T</td><td>File</td><td>Private Key</td><td>server.key</td></tr><tr><td>cert</td><td>T</td><td>File</td><td>Certificate</td><td>server.crt</td></tr></table>

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": "success",
    "msg": "success"
}
```

# Request Sample

```bash
curl -XPOST '{{host}}/api/v1/developer/api_server/certificates'
    -H 'Authorization: Bearer wHFmHR******kD6wHg/yg'
    --form 'key=@"/server.key"'
    --form 'cert=@"/server.crt"'
```

# 12.2 Delete HTTPS Certificate

This API allows you to delete the HTTPS certificate for the Access API, applicable only to port 12445. **Please note that restarting the Access application is necessary to apply these changes.**

| Request URL | `/api/v1/developer/api_server/certificates` |
| :--- | :--- |
| Permission Key | `edit:api_server` |
| Method | `DELETE` |
| UniFi Access Requirement | Version 2.2.10 or later |

# Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

# Response Sample

```json
{
    "code": "SUCCESS",
    "data": "success",
    "msg": "success"
}
```

# Request Sample

```bash
curl -XDELETE '{{host}}/api/v1/developer/api_server/certificates'
    -H 'Authorization: Bearer wHFmHR******kD6wHg/yg'
```

# 13. Change Logs

## v4.0.10
- Supports triggering the doorbell on Intercom and Reader Pro. (#8.4)

## v3.3.21
- Supports remote door unlocking API with customizable actor_id, actor_name, and extra fields in webhook input. If omitted, the system will default to using the token name as the actor in logs. (#7.9)

## v3.3.10
- Supports assigning and unassigning user license plates. (#3.28-#3.29)
- Supports updating user profile pictures. (#3.30)
- Supports assigning and unassigning visitor license plates. (#4.13-#4.14)
- Supports assigning and unassigning visitor QR code credentials. (#4.11-#4.12)
- Supports downloading user QR Code images. (#6.18)
- Supports importing third-party NFC card IDs into the system. (#6.19)
- Supports fetching and updating the access method settings of specific devices. (#8.2-#8.3)
- Supports additional webhook events. (#11.2)

## V3.2.20
- Supports Touch Pass API (#3.25-#3.27, #6.11-#6.17)
- Support for including TouchPass details in the response if a user has been assigned a Touch Pass. (#3.4-#3.5)

## V3.1.30
- Supports webhooks for custom header configuration and forwarding. (#11.3)
- Supports emergency event webhook notifications. (#11.2)
- Supports DPS status change webhook notifications for EAH8 and UA-Hub-Gate. (#11.2)
- Supports the user deletion API. (#3.23)
- Supports the user search API. (#3.24)
- Supports the NFC card update API. (#6.10)
- Supports temporary unlock for EAH8, UA-Hub-Door-Mini, and UA-Ultra. Requires the latest device versions. (#7.10-#7.11)

## V2.2.6
- Supports user groups and user group policies. (#3.11-#3.22,#10.5-#10.6)
- Supports remote door unlock for Access Ultra (UA-Ultra). (#7.9)

## V2.2.10
- Supports webhook API. (#11.2-#11.7)
- Supports API server certificates. (#12.1-#12.2)
