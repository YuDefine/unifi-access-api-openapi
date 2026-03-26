# UniFi Access API — OpenAPI Specification

> Unofficial OpenAPI 3.1 specification for the UniFi Access API, converted from Ubiquiti's official PDF documentation.
>
> **[繁體中文版 README](README.zh-TW.md)**

## What is this?

This repo provides an **OpenAPI 3.1.0 specification** (`openapi.yaml`) for the [UniFi Access](https://ui.com/access) API, allowing developers to import it directly into tools like Swagger UI, Postman, Redocly, and more.

UniFi Access is Ubiquiti's access control system. The official API documentation is only available as a PDF, which is inconvenient for programmatic use. This project converts it into a standard OpenAPI format.

## Conversion Pipeline

```
Ubiquiti Official PDF Documentation
    ↓ MinerU (PDF extraction tool)
Raw Markdown output (with formatting errors)
    ↓ AI (Claude) cleanup and repair
Cleaned Markdown documentation
    ↓ AI (Claude) structured conversion
OpenAPI 3.1.0 YAML Specification
```

## API Overview

| Category | Endpoints | Description |
|----------|:---------:|-------------|
| User Management | 29 | User CRUD, groups, NFC cards, PIN codes, Touch Pass, license plates |
| Visitor Management | 13 | Visitor CRUD, NFC cards, PIN codes, QR codes, license plates |
| Access Policy | 15 | Access policies, holiday groups, schedule management |
| Credential Management | 16 | NFC cards, Touch Pass, PIN codes, QR code management |
| Space / Door Management | 13 | Door group topology, door lock control, emergency status |
| Device Management | 4 | Device query, access method settings, doorbell trigger |
| System Log | 4 | Log query, export, resource lookup |
| UniFi Identity | 6 | Identity invitations, resource assignments |
| Notification | 6 | WebSocket notifications, Webhook management |
| API Server | 2 | HTTPS certificate management |
| **Total** | **~108** | |

## Usage

**Swagger UI / Swagger Editor:**
```bash
# Import directly via URL
https://raw.githubusercontent.com/Yudefine/unifi-access-api-openapi/main/openapi.yaml
```

**Postman:**
1. Open Postman → Import → Select `openapi.yaml`
2. All API requests are automatically generated as a collection

**Redocly:**
```bash
npx @redocly/cli preview-docs openapi.yaml
```

**Code Generator:**
```bash
# Generate TypeScript client
npx @openapitools/openapi-generator-cli generate -i openapi.yaml -g typescript-fetch -o ./client
```

## Documentation

- **[Usage Guide](docs/USAGE.md)** — Complete integration guide with endpoint reference, authentication, error codes, and tooling
- **[使用指南（繁體中文）](docs/USAGE.zh-TW.md)** — 完整整合指南
- **[Original PDF](docs/unifi-access-api-original.pdf)** — Ubiquiti's official API documentation

## Disclaimer

- This is an **unofficial** community project, not affiliated with Ubiquiti Inc.
- The API specification was converted from PDF documentation with AI assistance and may contain omissions or errors
- Please refer to official Ubiquiti documentation as the authoritative source
- If you find errors, please open an Issue or Pull Request

## License

[MIT](LICENSE)
