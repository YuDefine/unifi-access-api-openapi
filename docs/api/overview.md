# Overview

This section provides an introduction to essential concepts related to working with APIs, including API tokens, HTTP status codes, success and error codes, HTTP verbs, and API hosts.

## API Token

To authenticate API requests with UniFi Access, you need to utilize API tokens associated with your account. If a request includes a deleted or expired token, the service will return an authentication error. The Authorization Token is obtained from UniFi Portal.

## HTTP Status Code Reference

<table><tr><td>200</td><td>OK</td><td>Everything worked as expected.</td></tr><tr><td>400</td><td>Bad Request</td><td>The request is unacceptable, often due to missing required parameters.</td></tr><tr><td>401</td><td>Unauthorized</td><td>The request lacks a valid API token for authentication.</td></tr><tr><td>402</td><td>Request Failed</td><td>The request contains valid parameters, but failed for some reason.</td></tr><tr><td>403</td><td>Forbidden</td><td>The API token used does not have the necessary permissions to perform the request.</td></tr><tr><td>429</td><td>Too Many Requests</td><td>Too many requests were sent to the API in a short amount of time.</td></tr><tr><td>500, 502, 503, 504</td><td>Server Errors</td><td>Something went wrong on UniFi Access&#x27;s end during request processing.</td></tr></table>

## Success Code

```json
{
  "code": "SUCCESS",
  "msg": "success"
}
```

<table><tr><td>Code</td><td>Message</td></tr><tr><td>SUCCESS</td><td>Success</td></tr></table>

## Error Code

```json
{
  "code": "CODE_PARAMS_INVALID",
  "msg": "Invalid parameters."
}
```

<table><tr><td>Code</td><td>Message</td></tr><tr><td>CODE_PARAMS_INVALID</td><td>The provided parameters are invalid.</td></tr><tr><td>CODE_SYSTEM_ERROR</td><td>An error occurred on the server's end.</td></tr><tr><td>CODE_RESOURCE_NOT_FOUND</td><td>The requested resource was not found.</td></tr><tr><td>CODE_OPERATION_FORBIDDEN</td><td>The requested operation is not allowed.</td></tr><tr><td>CODE_AUTH_FAILED</td><td>Authentication failed.</td></tr><tr><td>CODE_ACCESS_TOKEN_INVALID</td><td>The provided access token is invalid.</td></tr><tr><td>CODE_UNAUTHORIZED</td><td>You are not allowed to perform this action.</td></tr><tr><td>CODE_NOT_EXISTS</td><td>The requested item does not exist.</td></tr><tr><td>CODE_USER_EMAIL_ERROR</td><td>The provided email format is invalid.</td></tr><tr><td>CODE_USER_ACCOUNT_NOT_EXIST</td><td>The requested user account does not exist.</td></tr><tr><td>CODE_USER_WORKER_NOT_EXISTS</td><td>The requested user does not exist.</td></tr><tr><td>CODE_USER_NAME_DUPLICATED</td><td>The provided name already exists.</td></tr><tr><td>CODE_USER_CSV_IMPORT_INCOMPLETE_PROP</td><td>Please provide both first name and last name.</td></tr><tr><td>CODE_ACCESS_POLICY_USER_TIMEZONE_NOT_FOUND</td><td>The requested workday schedule could not be found.</td></tr><tr><td>CODE_ACCESS_POLICY_HOLIDAY_TIMEZONE_NOT_FOUND</td><td>The requested holiday schedule could not be found.</td></tr><tr><td>CODE_ACCESS_POLICY_HOLIDAY_GROUP_NOT_FOUND</td><td>The requested holiday group could not be found.</td></tr><tr><td>CODE_ACCESS_POLICY_HOLIDAY_NOT_FOUND</td><td>The requested holiday could not be found.</td></tr><tr><td>CODE_ACCESS_POLICY_SCHEDULE_NOT_FOUND</td><td>The requested schedule could not be found.</td></tr><tr><td>CODE_ACCESS_POLICY_HOLIDAY_NAME_EXIST</td><td>The provided holiday name already exists.</td></tr><tr><td>CODE_ACCESS_POLICY_HOLIDAY_GROUP_NAME_EXIST</td><td>The provided holiday group name already exists.</td></tr><tr><td>CODE_ACCESS_POLICY_SCHEDULE_NAME_EXIST</td><td>The provided schedule name already exists.</td></tr><tr><td>CODE_ACCESS_POLICY_SCHEDULE_CAN_NOT_DELETE</td><td>The schedule could not be deleted.</td></tr><tr><td>CODE_ACCESS_POLICY_HOLIDAY_GROUP_CAN_NOT_DELETE</td><td>The holiday group could not be deleted.</td></tr><tr><td>CODE_CREDS_NFC_HAS_BIND_USER</td><td>The NFC card is already registered and assigned to another user.</td></tr><tr><td>CODE_CREDS_DISABLE_TRANSFER_UID_USER_NFC</td><td>The UniFi Identity Enterprise user's NFC card is not transferrable.</td></tr><tr><td>CODE_CREDS_NFC_READ_SESSION_NOT_FOUND</td><td>Failed to obtain the NFC read session.</td></tr><tr><td>CODE_CREDS_NFC_READ_POLL_TOKEN_EMPTY</td><td>The NFC token is empty.</td></tr><tr><td>CODE_CREDS_NFC_CARD_IS_PROVISION</td><td>The NFC card is already registered at another site.</td></tr><tr><td>CODE_CREDS_NFC_CARD_PROVISION_FAILED</td><td>Please hold the NFC card against the reader for more than 5 seconds.</td></tr><tr><td>CODE_CREDS_NFC_CARD_INVALID</td><td>The card type is not supported. Please use a UA Card.</td></tr><tr><td>CODE_CREDS_NFC_CARD_CANNOT_BE_DELETE</td><td>The NFC card could not be deleted.</td></tr><tr><td>CODE_CREDS_PIN_CODE_CREDS_ALREADY_EXIST</td><td>The PIN code already exists.</td></tr><tr><td>CODE_CREDS_PIN_CODE_CREDS_LENGTH_INVALID</td><td>The PIN code length does not meet the preset requirements.</td></tr><tr><td>CODE_SPACE_DEVICE_BOUND_LOCATION_NOT_FOUND</td><td>The device's location was not found.</td></tr><tr><td>CODE_DEVICE_DEVICE_VERSION_NOT_FOUND</td><td>The firmware version is up to date.</td></tr><tr><td>CODE_DEVICE_DEVICE_VERSION_TOO_OLD</td><td>The firmware version is too old. Please update to the latest version.</td></tr><tr><td>CODE_DEVICE_DEVICE_BUSY</td><td>The camera is currently in use.</td></tr><tr><td>CODE_DEVICE_DEVICE_NOT_FOUND</td><td>The device was not found.</td></tr><tr><td>CODE_DEVICE_DEVICE_OFFLINE</td><td>The device is currently offline.</td></tr><tr><td>CODE_OTHERS_UID_ADOPTED_NOT_SUPPORTED</td><td>The API is not available after upgrading to Identity Enterprise.</td></tr><tr><td>CODE_HOLIDAY_GROUP_CAN_NOT_DELETE</td><td>The holiday group could not be deleted.</td></tr><tr><td>CODE_HOLIDAY_GROUP_CAN_NOT_EDIT</td><td>The holiday group could not be edited.</td></tr><tr><td>CODE_DEVICE_WEBHOOK_ENDPOINT_DUPLICATED</td><td>The provided endpoint already exists.</td></tr><tr><td>CODE_DEVICE_API_NOT_SUPPORTED</td><td>The API is currently not available for this device.</td></tr></table>

## HTTP Verbs

<table><tr><td>HTTP Method</td><td>Description</td></tr><tr><td>GET</td><td>Used for retrieving objects.</td></tr><tr><td>POST</td><td>Used for creating objects or performing custom actions.</td></tr><tr><td>PUT</td><td>Used for replacing objects or collections.</td></tr><tr><td>DELETE</td><td>Used for deleting objects.</td></tr></table>

## API Host

The Open API Server is hosted on port 12445 and can be accessed via HTTPS at https://console-ip:12445.

The server certificate is self-generated and untrusted.

## Request Header

The header for a request contains the following information:

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td><td>Authorization: Bearer wHFmHRuX4I7sB2oDkD6wHg</td></tr></table>

## Response Schema

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
