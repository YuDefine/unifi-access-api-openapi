# API Server

> The APIs here are designed for API server configuration.

## Upload HTTPS Certificate

This API allows you to update the HTTPS certificate for the Access API, applicable only to port 12445. **Please note that restarting the Access application is necessary to apply these changes.** If the Private Key and Certificate do not match, it will result in a "parameter error" message.

| Request URL | `/api/v1/developer/api_server/certificates` |
| :--- | :--- |
| Permission Key | `edit:api_server` |
| Method | `POST` |
| UniFi Access Requirement | Version 2.2.10 or later |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>key</td><td>T</td><td>File</td><td>Private Key</td><td>server.key</td></tr><tr><td>cert</td><td>T</td><td>File</td><td>Certificate</td><td>server.crt</td></tr></table>

### Response Sample

```json
{
  "code": "SUCCESS",
  "data": "success",
  "msg": "success"
}
```

### Request Sample

```bash
curl -XPOST '{{host}}/api/v1/developer/api_server/certificates'
    -H 'Authorization: Bearer wHFmHR******kD6wHg/yg'
    --form 'key=@"/server.key"'
    --form 'cert=@"/server.crt"'
```

## Delete HTTPS Certificate

This API allows you to delete the HTTPS certificate for the Access API, applicable only to port 12445. **Please note that restarting the Access application is necessary to apply these changes.**

| Request URL | `/api/v1/developer/api_server/certificates` |
| :--- | :--- |
| Permission Key | `edit:api_server` |
| Method | `DELETE` |
| UniFi Access Requirement | Version 2.2.10 or later |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Response Sample

```json
{
  "code": "SUCCESS",
  "data": "success",
  "msg": "success"
}
```

### Request Sample

```bash
curl -XDELETE '{{host}}/api/v1/developer/api_server/certificates'
    -H 'Authorization: Bearer wHFmHR******kD6wHg/yg'
```
