# UniFi Access API — Usage Guide

> Complete guide for integrating with the UniFi Access API using the OpenAPI specification in this repository.

## Prerequisites

- UniFi Access **v1.9.1** or later (API is **not** available after upgrading to Identity Enterprise)
- An API Token created from: UniFi Portal → Access → Settings → General → Advanced → API Token
- Network access to the UniFi Console on port **12445** (HTTPS)

## Quick Start

### 1. Obtain API Token

1. Sign in to [UniFi Portal](https://account.ui.com/login)
2. Select the Console running UniFi Access
3. Navigate to **Access → Settings → General → Advanced**
4. Click **Create New** under API Token, set name / expiry / permission scopes
5. **Copy the token immediately** — it is shown only once

### 2. Determine Your API Host

```
https://<console-ip>:12445
```

The server uses a self-signed certificate. Add `--insecure` (curl) or disable certificate verification in your HTTP client.

### 3. Make Your First Request

```bash
# List all users (paginated)
curl -k 'https://192.168.1.1:12445/api/v1/developer/users?page_num=1&page_size=25' \
  -H 'Authorization: Bearer <YOUR_API_TOKEN>' \
  -H 'Accept: application/json'
```

## Authentication

All requests require a Bearer token in the `Authorization` header:

```
Authorization: Bearer <API_TOKEN>
```

Tokens are scoped by permission keys (e.g., `edit:user`, `view:user`, `edit:visitor`). Ensure your token has the required scope for each endpoint.

## Response Format

Every response follows a consistent envelope:

```json
{
  "code": "SUCCESS",
  "msg": "success",
  "data": { ... }
}
```

| Field | Description |
|-------|-------------|
| `code` | `"SUCCESS"` or an error code (e.g., `CODE_PARAMS_INVALID`) |
| `msg` | Human-readable message |
| `data` | Payload — object, array, or paginated result |

### Pagination

Paginated endpoints accept `page_num` and `page_size` query parameters and return:

```json
{
  "code": "SUCCESS",
  "data": [ ... ],
  "pagination": {
    "page_num": 1,
    "page_size": 25,
    "total": 142
  }
}
```

## API Categories

### User Management (29 endpoints)

CRUD operations for users and user groups, including credential assignment.

| Operation | Method | Path |
|-----------|--------|------|
| Create user | POST | `/api/v1/developer/users` |
| Get / Update / Delete user | GET / PUT / DELETE | `/api/v1/developer/users/{id}` |
| Search users | POST | `/api/v1/developer/users/search` |
| Assign NFC card | PUT | `/api/v1/developer/users/{id}/nfc_cards` |
| Assign PIN code | PUT | `/api/v1/developer/users/{id}/pin_codes` |
| Assign access policy | PUT | `/api/v1/developer/users/{id}/access_policies` |
| Upload avatar | POST | `/api/v1/developer/users/{id}/avatar` |
| CRUD user groups | POST / GET / PUT / DELETE | `/api/v1/developer/user_groups[/{id}]` |
| Assign license plates | PUT | `/api/v1/developer/users/{id}/license_plates` |

### Visitor Management (13 endpoints)

Manage visitors with time-limited access, NFC, PIN, QR code, and license plate credentials.

| Operation | Method | Path |
|-----------|--------|------|
| Create visitor | POST | `/api/v1/developer/visitors` |
| Get / Update / Delete visitor | GET / PUT / DELETE | `/api/v1/developer/visitors/{id}` |
| Assign NFC / PIN / QR / license plate | PUT | `/api/v1/developer/visitors/{id}/<credential>` |

### Access Policy (15 endpoints)

Define when and where users/groups can access doors.

- **Access Policies** — CRUD at `/api/v1/developer/access_policies[/{id}]`
- **Holiday Groups** — CRUD at `/api/v1/developer/access_policies/holiday_groups[/{id}]`
- **Schedules** — CRUD at `/api/v1/developer/access_policies/schedules[/{id}]`

### Credential Management (16 endpoints)

Manage NFC cards, Touch Passes, PIN codes, and QR codes independently of users.

| Operation | Method | Path |
|-----------|--------|------|
| Generate PIN | POST | `/api/v1/developer/credentials/pin_codes` |
| NFC enrollment session | POST / GET / DELETE | `/api/v1/developer/credentials/nfc_cards/sessions[/{id}]` |
| NFC card CRUD | GET / PUT / DELETE | `/api/v1/developer/credentials/nfc_cards/tokens[/{token}]` |
| Import third-party NFC | POST | `/api/v1/developer/credentials/nfc_cards/import` |
| Touch Pass list / search | GET / POST | `/api/v1/developer/credentials/touch_passes[/search]` |
| Download QR code image | GET | `/api/v1/developer/credentials/qr_codes/download/{visitor_id}` |

### Space / Door Management (13 endpoints)

Control doors, door groups, locks, and emergency states.

| Operation | Method | Path |
|-----------|--------|------|
| Door group topology | GET | `/api/v1/developer/door_groups/topology` |
| Door group CRUD | POST / GET / PUT / DELETE | `/api/v1/developer/door_groups[/{id}]` |
| Door query | GET | `/api/v1/developer/doors[/{id}]` |
| Remote unlock | PUT | `/api/v1/developer/doors/{id}/unlock` |
| Lock rule | GET / PUT | `/api/v1/developer/doors/{id}/lock_rule` |
| Emergency status | GET / PUT | `/api/v1/developer/doors/settings/emergency` |

### Device Management (4 endpoints)

| Operation | Method | Path |
|-----------|--------|------|
| List devices | GET | `/api/v1/developer/devices` |
| Access method settings | GET / PUT | `/api/v1/developer/devices/{device_id}/settings` |
| Trigger doorbell | POST | `/api/v1/developer/devices/{device_id}/doorbell` |

### System Log (4 endpoints)

| Operation | Method | Path |
|-----------|--------|------|
| Fetch logs | POST | `/api/v1/developer/system/logs` |
| Export logs | POST | `/api/v1/developer/system/logs/export` |
| Fetch log resource | GET | `/api/v1/developer/system/logs/resource/{id}` |
| Fetch static resource | GET | `/api/v1/developer/system/static/{path}` |

### UniFi Identity (6 endpoints)

| Operation | Method | Path |
|-----------|--------|------|
| Send invitations | POST | `/api/v1/developer/users/identity/invitations` |
| Manage resource assignments | GET / PUT | `/api/v1/developer/users/{id}/identity/assignments` |
| Group resource assignments | GET / PUT | `/api/v1/developer/user_groups/{id}/identity/assignments` |

### Notification (6 endpoints)

- **WebSocket** — connect to `/api/v1/developer/devices/notifications` for real-time events
- **Webhook** — CRUD at `/api/v1/developer/webhooks/endpoints[/{id}]`

### API Server (2 endpoints)

| Operation | Method | Path |
|-----------|--------|------|
| Upload HTTPS certificate | POST | `/api/v1/developer/api_server/certificates` |
| Delete HTTPS certificate | DELETE | `/api/v1/developer/api_server/certificates` |

## Common Error Codes

| Code | Meaning |
|------|---------|
| `CODE_PARAMS_INVALID` | Invalid parameters |
| `CODE_AUTH_FAILED` | Authentication failed |
| `CODE_ACCESS_TOKEN_INVALID` | Token invalid or expired |
| `CODE_UNAUTHORIZED` | Token lacks required permission scope |
| `CODE_RESOURCE_NOT_FOUND` | Resource does not exist |
| `CODE_OPERATION_FORBIDDEN` | Operation not allowed |
| `CODE_NOT_EXISTS` | Item does not exist |
| `CODE_OTHERS_UID_ADOPTED_NOT_SUPPORTED` | API unavailable after Identity Enterprise upgrade |

## Tooling

### Import into Swagger UI / Postman

```bash
# Swagger UI — use the raw URL
https://raw.githubusercontent.com/Yudefine/unifi-access-api-openapi/main/openapi.yaml

# Or preview locally with Redocly
npx @redocly/cli preview-docs openapi.yaml
```

### Generate a Client SDK

```bash
# TypeScript
npx @openapitools/openapi-generator-cli generate \
  -i openapi.yaml -g typescript-fetch -o ./client

# Python
npx @openapitools/openapi-generator-cli generate \
  -i openapi.yaml -g python -o ./client-python
```

### Validate the Spec

```bash
npx @redocly/cli lint openapi.yaml
```

## Security Notes

- Always use HTTPS (port 12445). The certificate is self-signed by default.
- Never expose your API token in client-side code or public repositories.
- Apply the principle of least privilege when selecting token permission scopes.
- Consider firewall rules to restrict API access to trusted networks.
- Implement rate limiting on your side — the server returns HTTP 429 when throttled.
