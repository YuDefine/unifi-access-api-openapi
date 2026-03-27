---
outline: 2
---

# Access Policy

The APIs here are designed for managing door access policies. These policies can be bound with access schedules, floors, and other door access resources.

## Access Policy Schemas

<table><tr><td>Parameter</td><td>Type</td><td>Description</td></tr><tr><td>Id</td><td></td><td>Identity ID of the access policy.</td></tr><tr><td>name</td><td>String</td><td>Name of the access policy.</td></tr><tr><td>resources</td><td>Array[Object]</td><td>Specify the locations that can be accessed.</td></tr><tr><td>resources[].type</td><td>String</td><td>Include door and door_group resources. enum_type
{door, door_group}</td></tr><tr><td>resources[].id</td><td>String</td><td>When resource type is door_group, it refers to the group ID of a building or a customized door group. When type is door, it refers to the ID of a door.</td></tr><tr><td>schedule_id</td><td>String</td><td>Identity ID of the schedule.</td></tr></table>

## Create Access Policy

This API allows you to create an access policy.

| Request URL | `/api/v1/developer/access_policies` |
| :--- | :--- |
| Permission Key | `edit:policy` |
| Method | `POST` |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td><td>Example</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the access policy.</td><td></td><td></td></tr><tr><td>resource</td><td>F</td><td>Array[Object]</td><td>Used to assign accessible locations to the access policy.</td><td>Get it from the API /api/v1/developer/door_groups/topology; /api/v1/developer/door_groups</td><td></td></tr><tr><td>resources[].type</td><td>F</td><td>String</td><td>enum type {door, door_group}</td><td></td><td></td></tr><tr><td>resources[].id</td><td>F</td><td>String</td><td>When resource type is &#x27;door_group&#x27;, it refers to the group ID of a building or a customized door group. When type is &#x27;door&#x27;, it refers to the ID of a door.</td><td></td><td></td></tr><tr><td>schedule_id</td><td>T</td><td>String</td><td>Identity ID of the schedule. Assign additional schedules.</td><td>Get it from the API /api/v1/developer/access_policies/schedules</td><td></td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Related API</td><td>Purpose</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the policy.</td><td>/api/v1/developer/users/:user_id/access_policies</td><td>Used to both assign an access policy to a user or unassign a policy from them.</td></tr></table>

*See Response Schema for full field definitions.*

### Request Sample: Shell/cURL

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

### Response Sample
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
  },
  "msg": "success"
}
```

## Update Access Policy

This API allows you to update a policy.

| Request URL | `/api/v1/developer/access_policies/:id` |
| :--- | :--- |
| Permission Key | `edit:policy` |
| Method | `PUT` |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>Id</td><td>T</td><td>String</td><td>Identity ID of the access policy.</td><td></td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>name</td><td>F</td><td>String</td><td>Name of the access policy. Omit this parameter if it doesn&#x27;t need to be updated.</td><td></td></tr><tr><td>resource</td><td>F</td><td>Array[Object]</td><td>Used to assign accessible locations to the access policy. Omit this parameter if it doesn&#x27;t need to be updated.</td><td>Get it from the API /api/v1/developer/door_groups/topology; /api/v1/developer/door_groups</td></tr><tr><td>resources[].type</td><td>F</td><td>String</td><td>enum type {door, door_group}</td><td></td></tr><tr><td>resources[].id</td><td>F</td><td>String</td><td>When resource type is door_group, it refers to the group ID of a building or a customized door group. When type is door, it refers to the ID of a door.</td><td></td></tr><tr><td>schedule_id</td><td>F</td><td>String</td><td>Identity ID of the schedule. Assign additional schedules. Omit this parameter if it doesn&#x27;t need to be updated.</td><td>Get it from the API /api/v1/developer/access_policies/schedules</td></tr></table>

### Request Sample: Shell/cURL

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

### Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Related api</td><td>Purpose</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the policy.</td><td>/api/v1/developer/users/:user_id/access_policies</td><td>Used to both assign an access policy to a user or unassign a policy from them.</td></tr></table>

*See Response Schema for full field definitions.*

## Delete Access Policy

This API allows you to delete an access policy.

| Request URL | `/api/v1/developer/access_policies/:id` |
| :--- | :--- |
| Permission Key | `edit:policy` |
| Method | `DELETE` |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Id</td><td>T</td><td>String</td><td>Identity ID of the access policy.</td></tr></table>

### Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XDELETE '{host}'/api/v1/developer/access_policies/460d0bcc-5d4f-4e7b-8a3c-8d4502765e11'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
--insecure 
```

### Response Sample

```json
{
  "code": "SUCCESS",
  "msg": "success",
  "data": "success"
}
```

## Fetch Access Policy

This API allows you to fetch a policy details.

| Request URL | `/api/v1/developer/access_policies/:id` |
| :--- | :--- |
| Permission Key | `view:policy` |
| Method | `GET` |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Id</td><td>T</td><td>String</td><td>Identity ID of the access policy.</td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td></td></tr><tr><td>Data</td><td>T</td><td>Object</td><td></td><td></td><td></td></tr></table>

*See Response Schema for full field definitions.*

### Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl '{host}/api/v1/developer/ccess_policy'  
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
    "id": "ed09985f-cf52-486e-bc33-377b6ed7bbf2",
    "name": "test11",
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
  },
  "msg": "success"
}
```

## Fetch All Access Policies

This API allows you to fetch all access policies.

| Request URL | `/api/v1/developer/access_policies` |
| :--- | :--- |
| Permission Key | `view:policy` |
| Method | `GET` |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td></td></tr><tr><td>Data</td><td>T</td><td>Array[Object]</td><td></td><td></td><td></td></tr></table>

*See Response Schema for full field definitions.*

### Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl '{host}/api/v1/developer/access_policies'  
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
    },
    {
      "id": "b96948a4-fed9-40a3-9c4a-e473822a3db7",
      "name": "Default UNVR Policy",
      "resources": [
        {
          "id": "d5573467-d6b3-4e8f-8e48-8a322b91664a",
          "type": "door_group"
        },
        {
          "id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
          "type": "door"
        }
      ],
      "schedule_id": "58c0f89b-f35c-4d2c-af7b-8b8918df2c31"
    },
    {
      "id": "edbc80df-3698-49fd-8b53-f1867f104947",
      "name": "TEST",
      "resources": [
        {
          "id": "d5573467-d6b3-4e8f-8e48-8a322b91664a",
          "type": "door_group"
        },
        {
          "id": "5c496423-6d25-4e4f-8cdf-95ad5135188a",
          "type": "door_group"
        },
        {
          "id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
          "type": "door"
        }
      ],
      "schedule_id": "73facd6c-839e-4521-a4f4-c07e1d44e748"
    }
  ],
  "msg": "success"
}
```

## Holiday Group Schemas

A holiday group refers to a collection of holidays.

<table><tr><td>Parameter</td><td>Type</td><td>Description</td></tr><tr><td>id</td><td>String</td><td>Identity ID of the holiday group.</td></tr><tr><td>name</td><td>String</td><td>Name of the holiday group.</td></tr><tr><td>is_default</td><td>Boolean</td><td>Indicate whether the holiday group is the system default.</td></tr><tr><td>description</td><td>String</td><td>Description of the holiday group.</td></tr><tr><td>holidays</td><td>Array[Object]</td><td>Show a list of the holidays within the holiday group.</td></tr><tr><td>holidays[].description</td><td>String</td><td>Description of the holiday.</td></tr><tr><td>holidays[].id</td><td>String</td><td>Identity ID of the holiday.</td></tr><tr><td>holidays[].name</td><td>String</td><td>Name of the holiday.</td></tr><tr><td>holidays[].repeat</td><td>Boolean</td><td>Indicate whether the holiday repeats annually.</td></tr><tr><td>holidays[].start_time</td><td>String</td><td>Start time of the holiday, provided in UTC format according to RFC3339.</td></tr><tr><td>holidays[].end_time</td><td>String</td><td>End time of the holiday, provided in UTC format according to RFC3339.</td></tr></table>

## Create Holiday Group

This API allows you to create a holiday group.

| Request URL | `/api/v1/developer/access_policies/holiday_groups` |
| :--- | :--- |
| Permission Key | `edit:policy` |
| Method | `POST` |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the holiday group.</td><td></td></tr><tr><td>description</td><td>F</td><td>String</td><td>Description of the holiday group.</td><td></td></tr><tr><td>holidays</td><td>F</td><td>Array[Object]</td><td>Show a list of the holidays within the holiday group.</td><td></td></tr><tr><td>holidays[].description</td><td>F</td><td>String</td><td>Description of the holiday.</td><td></td></tr><tr><td>holidays[].name</td><td>F</td><td>String</td><td>Name of the holiday.</td><td></td></tr><tr><td>holidays[].repeat</td><td>F</td><td>Boolean</td><td>Indicate whether the holiday repeats annually.</td><td></td></tr><tr><td>holidays[].is_template</td><td>F</td><td>Boolean</td><td>Indicate whether the holiday is created using a holiday group template.</td><td></td></tr><tr><td>holidays[].start_time</td><td>F</td><td>String</td><td>Start time of the holiday, provided in UTC format according to RFC3339.</td><td>2023-08-25T00:00:00Z</td></tr><tr><td>holidays[].end_time</td><td>F</td><td>String</td><td>End time of the holiday, provided in UTC format according to RFC3339.</td><td>2023-08-26T00:00:00Z</td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Related API</td><td>Purpose</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the holiday group.</td><td>/api/v1/developer/access_policies/schedules</td><td>Used to add a holiday group to the schedule.</td></tr></table>

*See Response Schema for full field definitions.*

### Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl '{host}/api/v1/developer/access_policies/holiday_groups'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json' 
```

```bash
-H 'content-type: application/json' --data-raw
{' "name": "Holiday Group-169286791557142", "holidays": [ "name": "Holiday Name 1", "description": "", "repeat": false, "start_time": "2023-08-25T00:00:00z", "end_time": "2023-08-26T00:00:00z"
}, "name": "Holiday Name 2", "description": "", "repeat": false, "start_time": "2023-08-26T00:00:00z", "end_time": "2023-08-27T00:00:00z"
} ]
} 
```

### Response Sample

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
  },
  "msg": "success"
}
```

## Update Holiday Group

This API allows you to update a holiday group.

| Request URL | `/api/v1/developer/access_policies/holiday_groups/:id` |
| :--- | :--- |
| Permission Key | `edit:policy` |
| Method | `PUT` |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td></td></tr><tr><td>Id</td><td>T</td><td>String</td><td>Identity ID of the holiday group.</td><td></td><td></td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the holiday group.</td><td></td></tr><tr><td>description</td><td>F</td><td>String</td><td>Description of the holiday group.</td><td></td></tr><tr><td>holidays</td><td>F</td><td>Array[Object]</td><td>Show a list of the holidays within the holiday group. Omit this parameter if it doesn&#x27;t need to be updated.</td><td></td></tr><tr><td>holidays[].id</td><td>F</td><td>String</td><td>Identity ID of the holiday. Omit this parameter if it doesn&#x27;t need to be updated.</td><td>Get it from the API /api/v1/developer/access_policies/holiday_groups</td></tr><tr><td>holidays[].description</td><td>F</td><td>String</td><td>Description of the holiday.</td><td></td></tr><tr><td>holidays[].name</td><td>F</td><td>String</td><td>Name of the holiday.</td><td></td></tr><tr><td>holidays[].repeat</td><td>F</td><td>Boolean</td><td>Indicate whether the holiday repeats annually.</td><td></td></tr><tr><td>holidays[].start_time</td><td>F</td><td>String</td><td>Start time of the holiday, provided in UTC format according to RFC3339.</td><td>2023-08-25T00:00:00Z</td></tr><tr><td>holidays[].end_time</td><td>F</td><td>String</td><td>End time of the holiday, provided in UTC format according to RFC3339.</td><td>2023-08-26T00:00:00Z</td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Related API</td><td>Purpose</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the holiday group.</td><td>/ api/v1/developer/access_policies/schedules</td><td>Used to add a holiday group to the schedule.</td></tr></table>

*See Response Schema for full field definitions.*

### Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
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

### Response Sample

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
  },
  "msg": "success"
}
```

## Delete Holiday Group

This API allows you to delete a holiday group.

| Request URL | `/api/v1/developer/access_policies/holiday_groups/:id` |
| :--- | :--- |
| Permission Key | `edit:policy` |
| Method | `DELETE` |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Related API</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the holiday group.</td><td>/api/v1/developer/access_policies/holiday_groups</td></tr></table>

### Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XDELETE '{host}/api/v1/developer/access_policies/holiday_groups/7be7a7a0-818f-4f76-98c3-1c38957f4dca'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

### Response Sample

```json
{
  "code": "SUCCESS",
  "data": "success",
  "msg": "success"
}
```

## Fetch Holiday Group

This API allows you to fetch a holiday group.

| Request URL | `/api/v1/developer/access_policies/holiday_groups/:id` |
| :--- | :--- |
| Permission Key | `view:policy` |
| Method | `GET` |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Id</td><td>T</td><td>String</td><td>Identity ID of the holiday group.</td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Related API</td><td>Purpose</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the holiday group.</td><td>/ api/v1/developer/access_policies/schedules</td><td>Used to add a holiday group to the schedule.</td></tr></table>

*See Response Schema for full field definitions.*

### Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/api/v1/developer/access_policies/holiday_groups/7be7a7a0-818f-4f76-98c3-1c38957f4dca'  
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
  },
  "msg": "success"
}
```

## Fetch All Holiday Groups

This API allows you to fetch the list of all holiday groups.

| Request URL | `/api/v1/developer/access_policies/holiday_groups` |
| :--- | :--- |
| Permission Key | `view:policy` |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Id</td><td>T</td><td>String</td><td>Identity ID of the holiday group.</td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Related API</td><td>Purpose</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the holiday group.</td><td>/api/v1/developer/access_policies/schedules</td><td>Used to add a holiday group to the schedule.</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the holiday group.</td><td></td><td></td></tr><tr><td>description</td><td>T</td><td>String</td><td>Description of the holiday group.</td><td></td><td></td></tr><tr><td>count</td><td>T</td><td>Integer</td><td>Total number of holidays.</td><td></td><td></td></tr></table>

### Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/api/v1/developer/access_policies/holiday_groups'  
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

## Schedule Schemas

These schemas are utilized for creating time periods for daily visits from Sunday through Saturday. The primary purpose of these schemas is to facilitate the assignment of access policies to users.

<table><tr><td>Parameter</td><td>Type</td><td>Description</td></tr><tr><td>id</td><td>String</td><td>Identity ID of the schedule.</td></tr><tr><td>name</td><td>String</td><td>Name of the schedule.</td></tr><tr><td>is_default</td><td>Boolean</td><td>Indicate whether the schedule is the system default.</td></tr><tr><td>type</td><td>String</td><td>Contains the access type, which is assigned to a user along with an access policy.</td></tr><tr><td>weekly</td><td>Object</td><td>The customizable scheduling strategy for each day from Sunday to Saturday. If not specified, it means access is allowed every day.</td></tr><tr><td>weekly monday</td><td>Array[Object]</td><td>Specify the daily access time period from Sunday to Saturday.</td></tr><tr><td>weekly monday[].start_time</td><td>String</td><td>Start time of the access time period.</td></tr><tr><td>weekly monday[].end_time</td><td>String</td><td>End time of the access time period.</td></tr><tr><td>holiday_schedule</td><td>Array[Object]</td><td>Specify the accessible period during holidays. UniFi Access Requirement: 1.20.11 or later</td></tr><tr><td>holiday_schedule[0].start_time</td><td>String</td><td>Start time of the access time period.</td></tr><tr><td>holiday_schedule[0].end_time</td><td>String</td><td>End time of the access time period.</td></tr><tr><td>holiday_group_id</td><td>String</td><td>Identity ID of the holiday group.</td></tr><tr><td>holiday_group.id</td><td>String</td><td>Identity ID of the holiday group.</td></tr><tr><td>holiday_group.name</td><td>String</td><td>Name of the holiday group.</td></tr><tr><td>holiday_group.is_default</td><td>Boolean</td><td>Indicate whether the holiday group is the system default.</td></tr><tr><td>holiday_group.description</td><td>String</td><td>Description of the holiday group.</td></tr><tr><td>holiday_group.holidays</td><td>Array[Object]</td><td>Show a list of the holidays within the holiday group.</td></tr><tr><td>holiday_group.holidays[].description</td><td>String</td><td>Description of the holiday.</td></tr><tr><td>holiday_group.holidays[].id</td><td>String</td><td>Identity ID of the holiday.</td></tr><tr><td>holiday_group.holidays[].name</td><td>String</td><td>Name of the holiday.</td></tr><tr><td>holiday_group.holidays[].repeat</td><td>Boolean</td><td>Indicate whether the holiday repeats annually.</td></tr><tr><td>holiday_group.holidays[].start_time</td><td>String</td><td>Start time of the holiday, provided in UTC format according to RFC3339.</td></tr><tr><td>holiday_group.holidays[].end_time</td><td>String</td><td>End time of the holiday, provided in UTC format according to RFC3339.</td></tr></table>

## Create Schedule

This API allows you to create a door access schedule.

| Request URL | `/api/v1/developer/access_policies/schedules` |
| :--- | :--- |
| Permission Key | `edit:policy` |
| Method | `POST` |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>name</td><td>T</td><td>String</td><td>The name of the schedule. This needs to be globally unique.</td><td>schedule-1789067565323</td></tr><tr><td>week_schedule</td><td>T</td><td>Object</td><td>The customizable scheduling strategy for each day from Sunday to Saturday. If not specified, it means access is allowed every day.</td><td></td></tr><tr><td>week_schedule monday</td><td>T</td><td>Array[Object]</td><td>Specify the daily access time period from Sunday to Saturday.</td><td></td></tr><tr><td>week_schedule monday[0].start_time</td><td>T</td><td>String</td><td>Start time of the access time period.</td><td>00:00:00</td></tr><tr><td>week_schedule monday[0].end_time</td><td>T</td><td>String</td><td>End time of the access time period.</td><td>23:59:59</td></tr><tr><td>holiday_group_id</td><td>F</td><td>String</td><td>Identity ID of the holiday group. The default is No holidays system group.</td><td>75660081-431b-4dbe-9b98-e0257877118e</td></tr><tr><td>holiday_schedule</td><td>F</td><td>Array[Object]</td><td>Specify the accessible period during holidays.</td><td></td></tr><tr><td>holiday_schedule[].start_time</td><td>F</td><td>String</td><td>Start time of the access time period.</td><td>03:15:00</td></tr><tr><td>holiday_schedule[].end_time</td><td>F</td><td>String</td><td>End time of the access time period.</td><td>11:45:59</td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Related API</td><td>Purpose</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the schedule.</td><td>/api/v1/developer/access_policies</td><td>Used to add a schedule to the access policy.</td></tr></table>

*See Response Schema for full field definitions.*

### Request Sample: Shell/cURL

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

### Response Sample
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
    },
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
    },
    "holiday_schedule": [
      { "start_time": "03:15:00", "end_time": "11:45:59" },
      { "start_time": "15:00:00", "end_time": "19:00:59" }
    ]
  },
  "msg": "success"
}
```

## Update Schedule

This API allows you to update a door access schedule.

| Request URL | `/api/v1/developer/access_policies/schedules/:id` |
| :--- | :--- |
| Permission Key | `edit:policy` |
| Method | `PUT` |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td></td></tr><tr><td>Id</td><td>T</td><td>String</td><td>Identity ID of the schedule.</td><td></td><td></td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>name</td><td>F</td><td>String</td><td>The name of the schedule. This needs to be globally unique. Omit this parameter if it doesn't need to be updated.</td><td>schedule-1789067565323</td></tr><tr><td>week_schedule</td><td>F</td><td>Object</td><td>The customizable scheduling strategy for each day from Sunday to Saturday. If not specified, it means access is allowed every day. Omit this parameter if it doesn't need to be updated.</td><td></td></tr><tr><td>week_schedule.monday</td><td>F</td><td>Array[Object]</td><td>Specify the daily access time period from Sunday to Saturday.</td><td></td></tr><tr><td>week_schedule.monday[0].start_time</td><td>F</td><td>String</td><td>Start time of the access time period.</td><td>00:00:00</td></tr><tr><td>week_schedule.monday[0].end_time</td><td>F</td><td>String</td><td>End time of the access time period.</td><td>23:59:59</td></tr><tr><td>holiday_group_id</td><td>F</td><td>String</td><td>Identity ID of the holiday group. The default is No holidays system group.</td><td>75660081-431b-4dbe-9b98-e0257877118e</td></tr><tr><td>holiday_schedule</td><td>F</td><td>Array[Object]</td><td>Specify the accessible period during holidays.</td><td></td></tr><tr><td>holiday_schedule[].start_time</td><td>F</td><td>String</td><td>Start time of the access time period.</td><td>03:15:00</td></tr><tr><td>holiday_schedule[].end_time</td><td>F</td><td>String</td><td>End time of the access time period.</td><td>11:45:59</td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Related API</td><td>Purpose</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the schedule.</td><td>/api/v1/developer/access_policies</td><td>Used to add a schedule to the access policy.</td></tr></table>

*See Response Schema for full field definitions.*

### Request Sample: Shell/cURL

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

### Response Sample

```json
{
  "code": "SUCCESS",
  "data": {},
  "msg": "success"
}
```

## Fetch Schedule

This API allows you to fetch a door access schedule.

| Request URL | `/api/v1/developer/access_policies/schedules/:id` |
| :--- | :--- |
| Permission Key | `view:policy` |
| Method | `GET` |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>Id</td><td>T</td><td>String</td><td>Identity ID of the schedule.</td><td></td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the schedule.</td><td></td></tr><tr><td>week_schedule</td><td>T</td><td>Object</td><td>The customizable scheduling strategy for each day from Sunday to Saturday. If not specified, it means access is allowed every day.</td><td></td></tr><tr><td>holiday_group</td><td>F</td><td>Object</td><td>Show the assigned holiday group.</td><td></td></tr><tr><td>holiday_schedule</td><td>F</td><td>Array[Object]</td><td>Show the accessible period during holidays.</td><td></td></tr></table>

*See Response Schema for full field definitions.*

### Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl --location '{host}/api/v1/developer/access_policies/schedules/908079e7-e26b-4951-9073-d775446d3584' --header 'Authorization: Bearer wHFmHR*****kD6wHg' 
```

### Response Sample

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
        {
          "end_time": "17:00:59",
          "start_time": "10:00:00"
        }
      ],
      "monday": [
        {
          "end_time": "17:00:59",
          "start_time": "10:00:00"
        }
      ],
      "saturday": [],
      "sunday": [],
      "thursday": [
        {
          "end_time": "17:01:59",
          "start_time": "10:00:00"
        }
      ],
      "tuesday": [
        {
          "end_time": "17:00:59",
          "start_time": "10:00:00"
        }
      ],
      "wednesday": [
        {
          "end_time": "17:00:59",
          "start_time": "10:00:00"
        }
      ]
    },
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
      "name": "Holiday Group-16928679155714",
      "template_name": ""
    },
    "holiday_schedule": [
      {
        "end_time": "11:45:59",
        "start_time": "09:15:00"
      }
    ]
  },
  "msg": "success"
}
```

## Fetch All Schedules

This API allows you to fetch all door access schedules.

| Request URL | `/api/v1/developer/access_policies/schedules` |
| :--- | :--- |
| Permission Key | `view:policy` |
| Method | `GET` |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>Data</td><td>T</td><td>Array[Object]</td><td></td><td></td></tr></table>

*See Response Schema for full field definitions.*

### Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl --location '{host}'/api/v1/developer/access_policies/schedules'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
--insecure 
```

### Response Sample

```json
{
  "code": "SUCCEED",
  "data": [
    {
      "id": "73facd6c-839e-4521-a4f4-c07e1d44e748",
      "holiday_group_id": "75660081-431b-4dbe-9b98-e0257877118e",
      "is_default": true,
      "name": "Always Access",
      "status": 1,
      "type": "access"
    },
    {
      "id": "58c0f89b-f35c-4d2c-af7b-8b8918df2c31",
      "holiday_group_id": "75660081-431b-4dbe-9b98-e0257877118e",
      "is_default": false,
      "name": "UNVR Schedule",
      "status": 1,
      "type": "access"
    }
  ],
  "msg": "success"
}
```

## Delete Schedule

This API allows you to delete a door access schedule.

| Request URL | `/api/v1/developer/access_policies/schedules/:id` |
| :--- | :--- |
| Permission Key | `edit:policy` |
| Method | `DELETE` |

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td></td></tr><tr><td>Id</td><td>T</td><td>String</td><td>Identity ID of the schedule.</td><td></td><td></td></tr></table>

### Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XDELETE '{host}/api/v1/developer/access_policies/schedules/f5355214-3a45-4e0b-9245-12df7075df37'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

### Response Sample

```json
{
  "code": "SUCCESS",
  "msg": "success",
  "data": "success"
}
```
