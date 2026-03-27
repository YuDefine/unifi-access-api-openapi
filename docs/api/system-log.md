# System Log

The APIs here are designed for system log management.

## Topic Reference

<table><tr><td>Parameter</td><td>Description</td></tr><tr><td>all</td><td>Fetch all logs.</td></tr><tr><td>door_openings</td><td>Fetch door opening logs.</td></tr><tr><td>critical</td><td>Fetch logs for device restart, deletion, offline status, and detection.</td></tr><tr><td>updates</td><td>Fetch device update logs.</td></tr><tr><td>device_events</td><td>Fetch logs for device online status, device updates, access policy synchronization, and active and inactive door unlock schedules.</td></tr><tr><td>admin_activity</td><td>Fetch logs for admin activity, such as access policy updates, settings changes, and user management.</td></tr><tr><td>visitor</td><td>Fetch logs of of visitor-related operations.</td></tr></table>

### Event Structure

Event: Basic information about the event.

<table><tr><td>Key</td><td>Value (Example)</td></tr><tr><td>Type</td><td>access.door.unlock</td></tr><tr><td>Display Message</td><td>Access Granted (Remote)</td></tr><tr><td>Result</td><td>ACCESS</td></tr><tr><td>Published</td><td>1701087091000</td></tr><tr><td>Tag</td><td>access</td></tr></table>

Actor: Information about the event operator.   

<table><tr><td>Key</td><td>Value</td></tr><tr><td>ID</td><td>[Actor ID]</td></tr><tr><td>Type</td><td>user</td></tr><tr><td>Display Name</td><td>[Display Name]</td></tr><tr><td>Alternate ID</td><td>[Alternate ID]</td></tr><tr><td>Alternate Name</td><td>[Alternate Name]</td></tr><tr><td>Avatar</td><td>[Avatar]</td></tr><tr><td>SSO Picture</td><td>[SSO Picture]</td></tr></table>

Authentication: Certification information.   

<table><tr><td>Key</td><td>Value</td></tr><tr><td>Credential Provider</td><td>REMOTE_THROUGH_UAH</td></tr><tr><td>Issuer</td><td>[Issuer]</td></tr></table>

Target(s): Additional information associated with the event. Note that each event contains different attributes.   

<table><tr><td>Type</td><td>ID</td><td>Display Name</td><td>Alternate ID</td><td>Alternate Name</td></tr><tr><td>UAH</td><td>7483c2773855</td><td>UA-HUB-3855</td><td>[Alternate ID]</td><td>[Alternate Name]</td></tr><tr><td>device_config</td><td>door_entry_method</td><td>entry/exit</td><td>[Alternate ID]</td><td>[Alternate Name]</td></tr><tr><td>door</td><td>e4978b83-203d-4015-97df-b86efc91cb0c</td><td>Door 3855</td><td>[Alternate ID]</td><td>[Alternate Name]</td></tr><tr><td>floor</td><td>04ddb371-457f-44ae-b8cc-8e96bcee5de4</td><td>1F</td><td>[Alternate ID]</td><td>[Alternate Name]</td></tr><tr><td>building</td><td>e622671e-89a5-11ee-8897-76acb95e28d5</td><td>UDM Pro</td><td>[Alternate ID]</td><td>[Alternate Name]</td></tr></table>

## Fetch System Logs

This API enables you to fetch system logs.

| Request URL | `/api/v1/developer/system/logs` |
| :--- | :--- |
| Permission Key | `view:system_log` |
| Method | `POST` |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Query Parameters

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>page_num</td><td>F</td><td>String</td><td>Current page number in the pagination.</td><td>1</td></tr><tr><td>page_size</td><td>F</td><td>String</td><td>Number of logs per page.</td><td>25</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>topic</td><td>T</td><td>String</td><td>Fetch different system logs by topic enum topic{critical, door_openings, updates, device_events, admin_activity, visitor}</td><td>door_openings</td></tr><tr><td>since</td><td>F</td><td>Integer</td><td>Start time for log fetching.</td><td>1689304925</td></tr><tr><td>until</td><td>F</td><td>Integer</td><td>End time for log fetching.</td><td>1689804925</td></tr><tr><td>actor_id</td><td>F</td><td>String</td><td>Identity ID of the actor (user, visitor, and device).</td><td>3e1f196e-c97b-4748-aecb-eab5e9c251b2</td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>actor</td><td>T</td><td>Object</td><td>Information about the event operator.</td></tr><tr><td>event</td><td>T</td><td>Object</td><td>Basic information about the event.</td></tr><tr><td>authentication</td><td>F</td><td>Object</td><td>Certification information.</td></tr><tr><td>target</td><td>F</td><td>Array[Object]</td><td>Additional information associated with the event, such as updated information.</td></tr></table>

Request Sample: Shell/cURL   
```bash
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

### Response Body
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
          },
          "authentication": {
            "credential_provider": "NFC",
            "issuer": "6FC02554"
          },
          "event": {
            "display_message": "Access Denied / Unknown (NFC)",
            "published": 1689077487000,
            "reason": "",
            "result": "BLOCKED",
            "type": "access.door.unlock"
          },
          "target": [
            {
              "alternate_id": "",
              "alternate_name": "",
              "display_name": "UA-HUB-3855",
              "id": "7483c2773855",
              "type": "UAH"
            }
          ]
        },
        "tag": "access"
      }
    ],
    "page": 1,
    "total": 4
  }
}
```

## Export System Logs

This API enables you to export system logs to a CSV file.

| Request URL | `/api/v1/developer/system/logs/export` |
| :--- | :--- |
| Permission Key | `view:system_log` |
| Method | `POST` |
| UniFi Access Requirement | 1.20.11 or later |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>topic</td><td>T</td><td>String</td><td>Fetch different system logs by topic enum topic {critical, door_openings, updates, device_events, admin_activity, visitor}</td><td>door_openings</td></tr><tr><td>since</td><td>T</td><td>Integer</td><td>Start time for log fetching.</td><td>1689304925</td></tr><tr><td>until</td><td>T</td><td>Integer</td><td>End time for log fetching. Note that the since and until periods cannot exceed one month.</td><td>1689804925</td></tr><tr><td>timezone</td><td>T</td><td>String</td><td>Timezone for formatting time.</td><td>America/New_York</td></tr><tr><td>actor_id</td><td>F</td><td>String</td><td>Identity ID of the actor (user, visitor, and device).</td><td>3e1f196e-c97b-4748-aecb-eab5e9c251b2</td></tr></table>

### Request Sample: Shell/cURL

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

## Fetch Resources in System Logs

This API enables you to fetch the resources in system logs.

| Request URL | `/api/v1/developer/system/logs/resource/:id` |
| :--- | :--- |
| Permission Key | `view:system_log` |
| Method | `GET` |
| UniFi Access Requirement | 1.24.6 or later |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>Id</td><td>T</td><td>String</td><td>Resource ID is obtained from targets categorized as the &#x27;activities_resource&#x27; type in system logs.</td><td>&quot;target&quot;: {&quot;type&quot;: &quot;activities_resource&quot;,&quot;id&quot;: &quot;0418d6a38f00-b6906057-2a90-4426-835c-b5b172381fec&quot;,&quot;display_name&quot;: &quot;Resource&quot;,&quot;alternate_id&quot;: &quot;&quot;, &quot;alternate_name&quot;: &quot;&quot;}]</td></tr></table>

### Response Sample

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

### Request Sample: Shell/cURL

```bash
curl '{host}/api/v1/developer/system/logs/resource/0418d6a38f00-b6906057-2a90-4426-835c-b5b172381fec'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

## Fetch Static Resources in System Logs

This API enables you to fetch static resources in system logs.

| Request URL | `/api/v1/developer/system/static/:path` |
| :--- | :--- |
| Permission Key | `view:system_log` |
| Method | `GET` |
| UniFi Access Requirement | 1.24.6 or later |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>path</td><td>T</td><td>String</td><td>Resource paths, currently supporting /ayar, /capture, and activities_resource.</td><td></td></tr></table>

```yaml
### avatar resource
curl '{host}/api/v1/developer/system/static/ avatar/dalaceb6-20ba-4285-a6b1-c4f2bf7161f8'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--insecure
### preview resource
curl '{host}/api/v1/developer/system/static-preview/1700707333_9660da3a-06c8-459d-8cc9-24889d13fba5.png'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--insecure
### capture video resource
curl '{host}/api/v1/developer/system/static/activities_resource/video/1708402379_92746868-5c69-4a11-9d4c-33f03785d741.jpg'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--insecure
### capture thumbnail resource
curl
'{host}/api/v1/developer/system/static/activities_resource/thumbail/1708402379_92746868-5c69-4a11-9d4c-33f03785d741.jpg'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--insecure 
```
