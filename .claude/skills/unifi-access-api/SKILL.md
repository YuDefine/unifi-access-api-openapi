# UniFi Access API Integration

This skill provides context for working with the UniFi Access API. Use it when generating code, scripts, or configurations that interact with UniFi Access door controllers.

## API Basics

- **Base URL**: `https://<console-ip>:12445`
- **Auth**: Bearer token in `Authorization` header — `Authorization: Bearer <TOKEN>`
- **All endpoints** are under `/api/v1/developer/`
- **Self-signed cert**: clients must skip TLS verification (curl: `--insecure`, Node: `rejectUnauthorized: false`, Python: `verify=False`)
- **OpenAPI spec**: `openapi.yaml` at project root — the authoritative machine-readable reference for all endpoints, schemas, and parameters

## Response Envelope

Every response uses this structure:

```json
{ "code": "SUCCESS", "msg": "success", "data": { ... } }
```

Error responses use `code` values like `CODE_PARAMS_INVALID`, `CODE_AUTH_FAILED`, `CODE_ACCESS_TOKEN_INVALID`, `CODE_UNAUTHORIZED`, `CODE_RESOURCE_NOT_FOUND`.

## Pagination

Paginated endpoints accept query params `page_num` (1-based) and `page_size`. Response includes a `pagination` object with `page_num`, `page_size`, `total`.

## Endpoint Quick Reference

### User Management
| Action | Method | Path |
|--------|--------|------|
| Create user | POST | `/api/v1/developer/users` |
| Get user | GET | `/api/v1/developer/users/{id}` |
| Update user | PUT | `/api/v1/developer/users/{id}` |
| Delete user | DELETE | `/api/v1/developer/users/{id}` |
| Search users | POST | `/api/v1/developer/users/search` |
| List all users | GET | `/api/v1/developer/users?page_num=1&page_size=25` |
| Assign NFC card | PUT | `/api/v1/developer/users/{id}/nfc_cards` |
| Unassign NFC card | POST | `/api/v1/developer/users/{id}/nfc_cards/delete` |
| Assign PIN code | PUT | `/api/v1/developer/users/{id}/pin_codes` |
| Assign access policy | PUT | `/api/v1/developer/users/{id}/access_policies` |
| Get user policies | GET | `/api/v1/developer/users/{id}/access_policies` |
| Assign Touch Pass | PUT | `/api/v1/developer/users/{user_id}/touch_passes/{touch_pass_id}` |
| Unassign Touch Pass | DELETE | `/api/v1/developer/users/{user_id}/touch_passes/{touch_pass_id}` |
| Batch assign Touch Pass | POST | `/api/v1/developer/users/touch_passes/assign` |
| Assign license plates | PUT | `/api/v1/developer/users/{id}/license_plates` |
| Unassign license plate | DELETE | `/api/v1/developer/users/{user_id}/license_plates/{license_plate_id}` |
| Upload avatar | POST | `/api/v1/developer/users/{id}/avatar` |

### User Group Management
| Action | Method | Path |
|--------|--------|------|
| Create group | POST | `/api/v1/developer/user_groups` |
| Get group | GET | `/api/v1/developer/user_groups/{id}` |
| Update group | PUT | `/api/v1/developer/user_groups/{id}` |
| Delete group | DELETE | `/api/v1/developer/user_groups/{id}` |
| List all groups | GET | `/api/v1/developer/user_groups` |
| Add user to group | PUT | `/api/v1/developer/user_groups/{id}/users` |
| Remove user from group | POST | `/api/v1/developer/user_groups/{id}/users/delete` |
| List users in group | GET | `/api/v1/developer/user_groups/{id}/users` |
| List all users in group | GET | `/api/v1/developer/user_groups/{id}/users/all` |
| Assign policy to group | PUT | `/api/v1/developer/user_groups/{id}/access_policies` |
| Get group policies | GET | `/api/v1/developer/user_groups/{id}/access_policies` |

### Visitor Management
| Action | Method | Path |
|--------|--------|------|
| Create visitor | POST | `/api/v1/developer/visitors` |
| Get visitor | GET | `/api/v1/developer/visitors/{id}` |
| Update visitor | PUT | `/api/v1/developer/visitors/{id}` |
| Delete visitor | DELETE | `/api/v1/developer/visitors/{id}` |
| List all visitors | GET | `/api/v1/developer/visitors` |
| Assign NFC card | PUT | `/api/v1/developer/visitors/{id}/nfc_cards` |
| Assign PIN code | PUT | `/api/v1/developer/visitors/{id}/pin_codes` |
| Assign QR code | PUT | `/api/v1/developer/visitors/{id}/qr_codes` |
| Assign license plate | PUT | `/api/v1/developer/visitors/{id}/license_plates` |

### Access Policy
| Action | Method | Path |
|--------|--------|------|
| Create policy | POST | `/api/v1/developer/access_policies` |
| Get policy | GET | `/api/v1/developer/access_policies/{id}` |
| Update policy | PUT | `/api/v1/developer/access_policies/{id}` |
| Delete policy | DELETE | `/api/v1/developer/access_policies/{id}` |
| List all policies | GET | `/api/v1/developer/access_policies` |

### Holiday Group & Schedule
| Action | Method | Path |
|--------|--------|------|
| CRUD holiday group | POST/GET/PUT/DELETE | `/api/v1/developer/access_policies/holiday_groups[/{id}]` |
| CRUD schedule | POST/GET/PUT/DELETE | `/api/v1/developer/access_policies/schedules[/{id}]` |

### Credential Management
| Action | Method | Path |
|--------|--------|------|
| Generate PIN | POST | `/api/v1/developer/credentials/pin_codes` |
| Start NFC enrollment | POST | `/api/v1/developer/credentials/nfc_cards/sessions` |
| Check enrollment status | GET | `/api/v1/developer/credentials/nfc_cards/sessions/{id}` |
| Cancel enrollment | DELETE | `/api/v1/developer/credentials/nfc_cards/sessions/{id}` |
| Get NFC card | GET | `/api/v1/developer/credentials/nfc_cards/tokens/{token}` |
| List NFC cards | GET | `/api/v1/developer/credentials/nfc_cards/tokens` |
| Update NFC card | PUT | `/api/v1/developer/credentials/nfc_cards/tokens/{token}` |
| Delete NFC card | DELETE | `/api/v1/developer/credentials/nfc_cards/tokens/{token}` |
| Import third-party NFC | POST | `/api/v1/developer/credentials/nfc_cards/import` |
| List Touch Passes | GET | `/api/v1/developer/credentials/touch_passes` |
| Search Touch Pass | POST | `/api/v1/developer/credentials/touch_passes/search` |
| List assignable Touch Passes | GET | `/api/v1/developer/credentials/touch_passes/assignable` |
| Get/Update Touch Pass | GET/PUT | `/api/v1/developer/credentials/touch_passes/{id}` |
| Purchase Touch Passes | POST | `/api/v1/developer/credentials/touch_passes/{id}` |
| Download QR code image | GET | `/api/v1/developer/credentials/qr_codes/download/{visitor_id}` |

### Space / Door Management
| Action | Method | Path |
|--------|--------|------|
| Get door group topology | GET | `/api/v1/developer/door_groups/topology` |
| CRUD door group | POST/GET/PUT/DELETE | `/api/v1/developer/door_groups[/{id}]` |
| Get door | GET | `/api/v1/developer/doors/{id}` |
| List all doors | GET | `/api/v1/developer/doors` |
| Remote unlock | PUT | `/api/v1/developer/doors/{id}/unlock` |
| Get/Set lock rule | GET/PUT | `/api/v1/developer/doors/{id}/lock_rule` |
| Get/Set emergency status | GET/PUT | `/api/v1/developer/doors/settings/emergency` |

### Device Management
| Action | Method | Path |
|--------|--------|------|
| List devices | GET | `/api/v1/developer/devices` |
| Get access method settings | GET | `/api/v1/developer/devices/{device_id}/settings` |
| Update access method settings | PUT | `/api/v1/developer/devices/{device_id}/settings` |
| Trigger doorbell | POST | `/api/v1/developer/devices/{device_id}/doorbell` |

### System Log
| Action | Method | Path |
|--------|--------|------|
| Fetch logs | POST | `/api/v1/developer/system/logs` |
| Export logs | POST | `/api/v1/developer/system/logs/export` |
| Fetch log resource | GET | `/api/v1/developer/system/logs/resource/{id}` |
| Fetch static resource | GET | `/api/v1/developer/system/static/{path}` |

### UniFi Identity
| Action | Method | Path |
|--------|--------|------|
| Send invitations | POST | `/api/v1/developer/users/identity/invitations` |
| Get available resources | GET | `/api/v1/developer/users/identity/assignments` |
| Assign resources to user | PUT | `/api/v1/developer/users/{id}/identity/assignments` |
| Get user resources | GET | `/api/v1/developer/users/{id}/identity/assignments` |
| Assign resources to group | PUT | `/api/v1/developer/user_groups/{id}/identity/assignments` |
| Get group resources | GET | `/api/v1/developer/user_groups/{id}/identity/assignments` |

### Notification
| Action | Method | Path |
|--------|--------|------|
| WebSocket notifications | GET (ws) | `/api/v1/developer/devices/notifications` |
| List webhook endpoints | GET | `/api/v1/developer/webhooks/endpoints` |
| Add webhook endpoint | POST | `/api/v1/developer/webhooks/endpoints` |
| Update webhook endpoint | PUT | `/api/v1/developer/webhooks/endpoints/{id}` |
| Delete webhook endpoint | DELETE | `/api/v1/developer/webhooks/endpoints/{id}` |

### API Server
| Action | Method | Path |
|--------|--------|------|
| Upload HTTPS cert | POST | `/api/v1/developer/api_server/certificates` |
| Delete HTTPS cert | DELETE | `/api/v1/developer/api_server/certificates` |

## Code Generation Guidance

When writing code that calls the UniFi Access API:

1. **Read `openapi.yaml`** for exact request/response schemas — this skill provides a quick reference, but the spec is the source of truth for field names, types, and required properties.
2. **Always skip TLS verification** — the console uses a self-signed certificate.
3. **Handle the response envelope** — unwrap `data` from `{ code, msg, data }` and check `code === "SUCCESS"`.
4. **Paginate** — for list endpoints, iterate using `page_num` / `page_size` until all records are fetched.
5. **Note the "delete" pattern** — some unassign operations use `POST .../<resource>/delete` rather than HTTP DELETE (e.g., NFC card unassignment).
6. **Permission scopes** — each endpoint requires a specific scope (e.g., `edit:user`, `view:visitor`). Check the `x-permission-key` in `openapi.yaml` or the PDF docs.
7. **Timestamps** — use Unix epoch seconds (not milliseconds) for time fields like `onboard_time`, `start_time`, `end_time`.

## Example: curl

```bash
# Create a user
curl -k -X POST 'https://192.168.1.1:12445/api/v1/developer/users' \
  -H 'Authorization: Bearer wHFmHRuX4I7sB2oDkD6wHg' \
  -H 'Content-Type: application/json' \
  -d '{"first_name": "John", "last_name": "Doe", "employee_number": "E001"}'

# Remote unlock a door
curl -k -X PUT 'https://192.168.1.1:12445/api/v1/developer/doors/{door_id}/unlock' \
  -H 'Authorization: Bearer wHFmHRuX4I7sB2oDkD6wHg'
```

## Example: Python

```python
import requests

BASE = "https://192.168.1.1:12445/api/v1/developer"
HEADERS = {"Authorization": "Bearer <TOKEN>"}

# List all users (paginated)
resp = requests.get(f"{BASE}/users", params={"page_num": 1, "page_size": 50},
                    headers=HEADERS, verify=False)
data = resp.json()
if data["code"] == "SUCCESS":
    users = data["data"]
```

## Example: TypeScript (fetch)

```typescript
const BASE = "https://192.168.1.1:12445/api/v1/developer";
const headers = { Authorization: "Bearer <TOKEN>" };

// Search users
const res = await fetch(`${BASE}/users/search`, {
  method: "POST",
  headers: { ...headers, "Content-Type": "application/json" },
  body: JSON.stringify({ keyword: "john" }),
});
const { code, data } = await res.json();
```

## Project Files

| File | Purpose |
|------|---------|
| `openapi.yaml` | OpenAPI 3.1.0 spec — the machine-readable API definition (source of truth) |
| `docs/unifi-access-api.md` | Cleaned Markdown of the original PDF documentation |
| `docs/unifi-access-api-original.pdf` | Original Ubiquiti PDF documentation |
| `docs/USAGE.md` | English usage guide |
| `docs/USAGE.zh-TW.md` | 繁體中文使用指南 |
