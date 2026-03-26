# Notification

> The APIs here are designed for Webhooks and WebSockets.

## Fetch Notifications [WebSocket]

This API enables you to fetch notifications, such as doorbell notifications.

Request URL: /api/v1/developer/devices/notifications   
Permission Key: view:device   
Protocol: WebSocket   
Method: GET   
UniFi Access Requirement: 1.20.11 or later

### Request Sample: wscat

```bash
wscat \
    --no-check \
    -C wss://192.168.1.1:12445/api/v1/developer/devices/notifications \
    -H "Authorization: Bearer qoFJM******9YQX0+g+g" \
    -H "Upgrade: websocket" \
    -H "Connection: Upgrade"
```

### WebSocket Payload

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

## List of Supported Webhook Events [Webhook]

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

## Fetch Webhook Endpoints List [Webhook]

This API enables you to fetch the available webhook endpoints.

Request URL: /api/v1/developer/webhooks/endpoints   
Permission Key: view:webhook   
Method: GET   
UniFi Access Requirement: 2.2.10 or later

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the endpoint.</td></tr><tr><td>endpoint</td><td>T</td><td>String</td><td>The HTTPS URL where webhook events are sent.</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the webhook subscription.</td></tr><tr><td>secret</td><td>T</td><td>String</td><td>The secret used for verifying events coming from UniFi Access.</td></tr><tr><td>events</td><td>T</td><td>Array[String]</td><td>List of events to subscribe to.</td></tr><tr><td>headers</td><td>F</td><td>Object&lt;String, String&gt;</td><td>Custom headers for forwarding requests to the endpoint service.</td></tr></table>

### Request Sample: Shell/cURL

```bash
curl '{{host}}/api/v1/developer/webhooks/endpoints'
    -H 'Authorization: Bearer wHFmHR******kD6wHg'
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

## Add Webhook Endpoints [Webhook]

This API enables you to add a webhook endpoint.

Request URL: /api/v1/developer/webhooks/endpoints   
Permission Key: edit:webhook   
Method: POST   
UniFi Access Requirement: 2.2.10 or later

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>endpoint</td><td>T</td><td>String</td><td>The HTTPS URL where webhook events are sent. Note: HTTPS is recommended for security.</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the webhook subscription.</td></tr><tr><td>events</td><td>T</td><td>Array[String]</td><td>List of events to subscribe to.</td></tr><tr><td>headers</td><td>F</td><td>Object&lt;String, String&gt;</td><td>Custom headers for forwarding requests to the endpoint service.</td></tr></table>

### Request Sample: Shell/cURL

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

### Response Sample

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

## Update Webhook Endpoints [Webhook]

This API enables you to update the available webhook endpoints.

Request URL: /api/v1/developer/webhooks/endpoints/:id   
Permission Key: edit:webhook   
Method: PUT   
UniFi Access Requirement: 2.2.10 or later

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the endpoint.</td><td>a22ee283-c91f-432b-9d0f-e89bcccad4be</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>endpoint</td><td>T</td><td>String</td><td>The HTTPS URL where webhook events are sent.</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the webhook subscription.</td></tr><tr><td>events</td><td>T</td><td>Array[String]</td><td>List of events to subscribe to.</td></tr><tr><td>headers</td><td>F</td><td>Object&lt;String, String&gt;</td><td>Custom headers for forwarding requests to the endpoint service.</td></tr></table>

### Request Sample: Shell/cURL

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

### Response Sample

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

## Delete Webhook Endpoints [Webhook]

This API enables you to delete the available webhook endpoints.

Request URL: /api/v1/developer/webhooks/endpoints/:id   
Permission Key: edit:webhook   
Method: DELETE   
UniFi Access Requirement: 2.2.10 or later

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the endpoint.</td><td>a22ee283-c91f-432b-9d0f-e89bcccad4be</td></tr></table>

### Request Sample: Shell/cURL

```bash
curl -XDELETE '{{host}}/api/v1/developer/webhooks/endpoints/a22ee283-c91f-432b-9d0f-e89bcccad4be'
    -H 'Authorization: Bearer wHFmHR******kD6wHg'
    -H 'accept: application/json'
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

## Allow Webhook Endpoint Owner to Receive Webhook Events [Webhook]

The following samples demonstrate how to receive webhook messages. Note that the secret needs to be adjusted to the assigned secret. These are just examples; in actual use, HTTPS and a custom URL should be used.

Request URL: Your webhook endpoint   
Method: POST   
UniFi Access Requirement: 2.2.10 or later

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>Signature</td><td>T</td><td>String</td><td>Contains request time(t) and signature(v1)</td><td>t=1695902233,v1=a7ea8840af212767d7795481bed914a9f2ea7241d35212b597bec13aa4bfa06b</td></tr></table>

> See the official PDF documentation for complete webhook payload samples and Go/Rust/Python code samples for handling webhook requests.
