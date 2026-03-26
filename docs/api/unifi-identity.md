# UniFi Identity

The APIs here are designed for the UniFi Identity app.

## Send UniFi Identity Invitations

This API enables you to send invitations and invite users to join UniFi Identity.

Request URL: /api/v1/developer/users/identity/invitations   
Permission Key: edit:user   
Method: POST   
UniFi Access Requirement: 1.24.6 or later

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Array[Object].user_id</td><td>T</td><td>String</td><td>Identity ID of the user.</td></tr><tr><td>Array[Object].email</td><td>F</td><td>String</td><td>Email of the user. If filled in, it will update the user&#x27;s existing email address.</td></tr></table>

### Request Sample: Shell/cURL

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

### Response Body

Success:

```json
{
  "code": "SUCCESS",
  "data": [],
  "msg": "success"
}
```

If there is a failure to send an email:

```json
{
  "code": "SUCCESS",
  "data": [
    {
      "error_code": "",
      "error_msg": "invalid email",
      "user_email": "example@*.com",
      "user_id": "e0051e08-c4d5-43db-87c8-a9b19cb66513"
    }
  ],
  "msg": "success"
}
```

## Fetch Available Resources

This API enables you to fetch the available UniFi Identity resources.

Request URL: /api/v1/developer/users/identity/assignments   
Permission Key: view:user   
Method: GET   
UniFi Access Requirement: 1.24.6 or later

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Query Parameters

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>resource_type</td><td>F</td><td>String</td><td>Display the type of resources; show all when left blank. enum resource_type {evstation,vpn,wifi}</td><td>resource_type=evstation,wifi,vpn</td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>data.
[resource_type]</td><td>T</td><td>String</td><td>Type of the resources. enum resource_type
{evstation, vpn, wifi, camera}</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the resources.</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the resources.</td></tr><tr><td>deleted</td><td>T</td><td>Boolean</td><td>Indicate whether the resource is disabled.</td></tr></table>

### Request Sample: Shell/cURL

```bash
curl '{host}/api/v1/developer/users/identity/assignments?resource_type=evstation,wifi,vpn' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--insecure
```

### Response Sample

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
      }
    ],
    "wifi": [
      {
        "deleted": false,
        "id": "65cff9a8c188cb71cfac8e9a",
        "metadata": null,
        "name": "UniFi Identity",
        "short_name": ""
      }
    ]
  },
  "msg": "success"
}
```

## Assign Resources to Users

This API enables you to assign UniFi Identity resources to users.

Request URL: /api/v1/developer/users/:id/identity/assignments   
Permission Key: edit:user   
Method: POST   
UniFi Access Requirement: 1.24.6 or later

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user.</td><td>Get it from the API /api/v1/developer/users</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>resource_type</td><td>T</td><td>String</td><td>enum resource_type
{ev(station,vpn,wifi}</td><td>Get it from the API 10.2</td></tr><tr><td>resource_ids</td><td>T</td><td>Array&lt;String]</td><td>Identity ID of the resources.</td><td>Get it from the API 10.2</td></tr></table>

### Request Sample: Shell/cURL

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

### Response Sample

```json
{
  "code": "SUCCESS",
  "data": null,
  "msg": "success"
}
```

## Fetch Resources Assigned to Users

This API enables you to fetch the UniFi Identity resources assigned to users.

Request URL: /api/v1/developer/users/:id/identity/assignments   
Permission Key: view:user

Method: GET   
UniFi Access Requirement: 1.24.6 or later

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user.</td><td>Get it from the API /api/v1/developer/users</td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>data.
[resource_type]</td><td>T</td><td>Array[Object]</td><td>Type of the resources. enum resource_type
{evstation, vpn,wifi,camera}</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the resources.</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the resources.</td></tr><tr><td>deleted</td><td>T</td><td>Boolean</td><td>Indicate whether a resource is disabled.</td></tr></table>

### Request Sample: Shell/cURL

```bash
curl -XGET '{host}'/api/v1/developer/users/b602879b-b857-400b-970b-336d4cb881ad/identity/assignments'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

### Response Sample


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
    },
    "msg": "success"
}
```

## Assign Resources to User Groups

This API enables you to assign UniFi Identity resources to user groups.

Request URL: /api/v1/developer/user_groups/:id/identity/assignments   
Permission Key: edit:user   
Method: POST   
UniFi Access Requirement: 2.2.0 or later

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user group.</td><td>Get it from the API /api/v1/developer/user_groups</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>resource_type</td><td>T</td><td>String</td><td>enum resource_type {ev_station,vpn,wifi}</td><td>Get it from the API 10.2</td></tr><tr><td>resource_ids</td><td>T</td><td>Array[String]</td><td>Identity ID of the resources.</td><td>Get it from the API 10.2</td></tr></table>

### Request Sample: Shell/cURL

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

### Response Sample

```json
{
  "code": "SUCCESS",
  "data": null,
  "msg": "success"
}
```

## Fetch the Resources Assigned to User Groups

This API enables you to fetch the UniFi Identity resources assigned to user groups.

Request URL: /api/v1/developer/user_groups/:id/identity/assignments   
Permission Key: view:user   
Method: GET   
UniFi Access Requirement: 2.2.0 or later

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the user group.</td><td>Get it from the API /api/v1/developer/user_groups</td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>data.[resource_type]</td><td>T</td><td>Array[Object]</td><td>Type of the resources. enum resource_type {ev_station,vpn,wifi,camera}</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the resources.</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the resources.</td></tr><tr><td>deleted</td><td>T</td><td>Boolean</td><td>Indicate whether a resource is disabled.</td></tr></table>

### Request Sample: Shell/cURL

```bash
curl -XGET '{{host}}/api/v1/developer/user_groups/7476c839-8e10-472e-894f-c5b8254c35b5/identity/assignments'
    -H 'Authorization: Bearer wHFmHR******kD6wHg'
    -H 'accept: application/json'
    -H 'content-type: application/json'
    --insecure
```

### Response Sample

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
    },
    "msg": "success"
}
```
