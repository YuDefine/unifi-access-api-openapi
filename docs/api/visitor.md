# Visitor

The APIs here are designed for managing visitors, including creating, viewing, and deleting visitors. They also enable the assigning of NFC cards, schedules, PIN codes, locations, and other access resources to visitors.

## Schemas

<table><tr><td>Parameter</td><td>Type</td><td>Description</td></tr><tr><td>id</td><td>String</td><td>Identity ID of the visitor.</td></tr><tr><td>first_name</td><td>String</td><td>First name of the visitor.</td></tr><tr><td>last_name</td><td>String</td><td>Last name of the visitor.</td></tr><tr><td>status</td><td>String</td><td>The visitor's status. enum status {UPCOMING=1, VISITED=2, VISITING=3, CANCELLED=4, NO_VISIT=5, ACTIVE=6}</td></tr><tr><td>inviter_id</td><td>String</td><td>Identity ID of the inviter.</td></tr><tr><td>inviter_name</td><td>String</td><td>Name of the inviter.</td></tr><tr><td>mobile_phone</td><td>String</td><td>Contact phone number of the visitor.</td></tr><tr><td>remarks</td><td>String</td><td>Remarks of the visitor.</td></tr><tr><td>email</td><td>String</td><td>Email of the visitor.</td></tr><tr><td>visitor_company</td><td>String</td><td>Company of the visitor.</td></tr><tr><td>visit_reason</td><td>String</td><td>Visit reason: enum reason {Interview, Business, Cooperation, others}</td></tr><tr><td>start_time</td><td>Integer</td><td>Start time of the visit.</td></tr><tr><td>end_time</td><td>Integer</td><td>End time of the visit.</td></tr><tr><td>nfc_cards</td><td>Array[Object]</td><td>Token associated with the bound NFC card.</td></tr><tr><td>nfc_cards[].id</td><td>String</td><td>Display ID of the NFC card.</td></tr><tr><td>nfc_cards[].token</td><td>String</td><td>Unique NFC card token.</td></tr><tr><td>pin_code</td><td>Object</td><td>Token associated with the bound PIN code.</td></tr><tr><td>pin_code_token</td><td>String</td><td>The user's PIN hash code credential for unlocking a door.</td></tr><tr><td>schedule_id</td><td>String</td><td>Identity ID of the schedule.</td></tr><tr><td>schedule</td><td>Object</td><td>The schedule assigned to the visitor. If the schedule information is present, it indicates that the visit schedule is recurring. If the schedule information is not included, it indicates a one-time visit schedule.</td></tr><tr><td>schedule.name</td><td>String</td><td>Name of the schedule.</td></tr><tr><td>schedule.type</td><td>String</td><td>Type of the schedule.</td></tr><tr><td>schedule.week_schedule</td><td>Object</td><td>The customizable scheduling strategy for each day from Sunday to Saturday. If not specified, it means access is allowed every day.</td></tr><tr><td>schedule.week_schedule monday</td><td>Array[Object]</td><td>Specify the daily access time period from Sunday to Saturday.</td></tr><tr><td>schedule.week_schedule monday[0].start_time</td><td>String</td><td>Start time of the access time period.</td></tr><tr><td>schedule.week_schedule monday[0].end_time</td><td>String</td><td>End time of the access time period.</td></tr><tr><td>resources</td><td>Array[Object]</td><td>Specify the locations that the visitor can access.</td></tr><tr><td>resources[0].id</td><td>String</td><td>Identity ID of the door group.</td></tr><tr><td>resources[0].name</td><td>String</td><td>Name of the door group.</td></tr><tr><td>resources[0].type</td><td>String</td><td>Type of the door group.</td></tr><tr><td>license_plates</td><td>Array[Object]</td><td>License plates bound to the visitor.</td></tr><tr><td>license_plates[].id</td><td>String</td><td>Unique ID of the license plate.</td></tr><tr><td>license_plates[].credential</td><td>String</td><td>License plate number.</td></tr><tr><td>license_plates[].credential_type</td><td>String</td><td>Type of credential, should be "license".</td></tr><tr><td>license_plates[].credential_status</td><td>String</td><td>Status of the credential enum credential_status {active, deactivate}.</td></tr></table>

## Create Visitor

This API enables you to create a new visitor.

Request URL: /api/v1/developer/visitors   
Permission Key: edit:visitor   
Method: POST

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td>How to Get It?</td></tr><tr><td>first_name</td><td>T</td><td>String</td><td>First name of the visitor.</td><td></td><td></td></tr><tr><td>last_name</td><td>T</td><td>String</td><td>Last name of the visitor.</td><td></td><td></td></tr><tr><td>remarks</td><td>F</td><td>String</td><td>Remarks about the visitor.</td><td></td><td></td></tr><tr><td>mobile_phone</td><td>F</td><td>String</td><td>Mobile phone number of the visitor.</td><td></td><td></td></tr><tr><td>email</td><td>F</td><td>String</td><td>Email address of the visitor.</td><td></td><td></td></tr><tr><td>visitor_company</td><td>F</td><td>String</td><td>Company name of the visitor.</td><td></td><td></td></tr><tr><td>start_time</td><td>T</td><td>Integer</td><td>Start time of the visit.</td><td>1688546460</td><td></td></tr><tr><td>end_time</td><td>T</td><td>Integer</td><td>End time of the visit.</td><td>1688572799</td><td></td></tr><tr><td>visit_reason</td><td>T</td><td>String</td><td>Visit reason: enum reason
{Interview, Business, Cooperation, Others}</td><td>Interview</td><td></td></tr></table>

### Assign Available Locations to Visitor

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td>How to Get It?</td></tr><tr><td>resources</td><td>F</td><td>Array[Object]</td><td>Assign available locations to the visitor.</td><td></td><td>Get it from the API /api/v1/developer/door_groups/topology</td></tr><tr><td>resources[0].id</td><td>F</td><td>String</td><td>When resource type is door_group, it refers to the group ID of a building or a customized door group. When type is door, it refers to the ID of a door.</td><td>9bee6e0e-108d-4c52-9107-76f2c7dea4f1</td><td></td></tr><tr><td>resources[0].type</td><td>F</td><td>String</td><td>Support both door and door_group.</td><td>door_group</td><td></td></tr></table>

### Assigned Schedules To Visitor

If the week_schedule information is present, it indicates that the visit schedule is recurring. If the week_schedule information is not included, it indicates a one-time visit schedule.

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>week_schedule</td><td>F</td><td>Object</td><td>The customizable scheduling strategy for each day from Sunday to Saturday. If not specified, it means access is allowed every day.</td><td></td></tr><tr><td>week_schedule.monday</td><td>F</td><td>Array[Object]</td><td>Specify the daily access time period from Sunday to Saturday.</td><td></td></tr><tr><td>week_schedule.monday[0].start_time</td><td>F</td><td>String</td><td>Start time of the access time period.</td><td>00:00:00</td></tr><tr><td>week_schedule.monday[0].end_time</td><td>F</td><td>String</td><td>End time of the access time period.</td><td>23:59:59</td></tr></table>

### Response Body

*See Response Schema for full field definitions.*

### Response Sample

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
  },
  "msg": "success"
}
```

### Request Sample

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

## Fetch Visitor

This API enables you to fetch visitor details.

Request URL: /api/v1/developer/visitors/:id   
Permission Key: view:visitor   
Method: GET

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td></td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the visitor.</td><td></td></tr></table>

### Response Body

*See Response Schema for full field definitions.*

### Response Sample

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
    ],
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
    },
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
  },
  "msg": "success"
}
```

### Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/api/v1/developer/visitors/76794bd8-98c0-49b6-9230-ba8c5812cf29'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

## Fetch All Visitors

This API enables you to fetch the list of all visitors.

Request URL: /api/v1/developer/visitors   
Permission Key: view:visitor   
Method: GET   
Note: license plates will be supported by 3.3.10 or later

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Query Parameters

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>status</td><td>F</td><td>Integer</td><td>The visitor&#x27;s status. enum status{UPCOMING=1, VISITED=2, VISITING=3, CANCELED=4, NO_VISIT=5, ACTIVE=6}</td><td>1</td></tr><tr><td>keyword</td><td>F</td><td>String</td><td>Support prefix matching for first name and last name. NOTE: The status filtering is disabled when searching with keyword.</td><td>H</td></tr><tr><td>page_num</td><td>F</td><td>String</td><td>Current page number in the pagination.</td><td>1</td></tr><tr><td>page_size</td><td>F</td><td>String</td><td>Number of visitors per page.</td><td>25</td></tr><tr><td>expand[]</td><td>F</td><td>string</td><td>Determine whether to return the objects (Optional). currently supports the following objects: enum objects {none, access_policy, resource, schedule, nfl_card, pin_code}. For the &quot;none&quot; option, it means that no object will be returned. UniFi Access Requirement: 1.22.16 or later</td><td>expand|=access_policy&amp;expand|=resource&amp;expand|=schedule&amp;expand|=nfc_card&amp;expand|=pin_code</td></tr></table>

### Response Body

*See Response Schema for full field definitions.*

### Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/api/v1/developer/visitors?page_num=1&page_size=25'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure  
### fetch users through keyword  
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

## Update Visitor

This API enables you to update a visitor.

Request URL: /api/v1/developer/visitors/:id   
Permission Key: edit:visitor   
Method: PUT

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td>How to Get It?</td></tr><tr><td>first_name</td><td>F</td><td>String</td><td>First name of the visitor.</td><td></td><td></td></tr><tr><td>last_name</td><td>F</td><td>String</td><td>Last name of the visitor.</td><td></td><td></td></tr><tr><td>remarks</td><td>F</td><td>String</td><td>Remarks about the visitor.</td><td></td><td></td></tr><tr><td>mobile_phone</td><td>F</td><td>String</td><td>Mobile phone number of the visitor.</td><td></td><td></td></tr><tr><td>email</td><td>F</td><td>String</td><td>Email address of the visitor.</td><td></td><td></td></tr><tr><td>visitor_company</td><td>F</td><td>String</td><td>Company name of the visitor.</td><td></td><td></td></tr><tr><td>start_time</td><td>F</td><td>Integer</td><td>Start time of the visit.</td><td>1688546460</td><td></td></tr><tr><td>end_time</td><td>F</td><td>Integer</td><td>End time of the visit.</td><td>1688572799</td><td></td></tr><tr><td>visit_reason</td><td>F</td><td>String</td><td>Visit reason: enum reason
{Interview, Business, Cooperation, Others}</td><td>Interview</td><td></td></tr></table>

### Assign Available Locations to Visitor

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td>How to Get It?</td></tr><tr><td>resources</td><td>F</td><td>Array[Object]</td><td>Assign available locations to the visitor. 
Omit this parameter if it doesn't need 
to be updated.</td><td></td><td>Get it from the API 
/api/v1/developer/door_groups/topology</td></tr><tr><td>resources[0].id</td><td>F</td><td>String</td><td>When resource type is door_group, it refers to the group ID of a building or a customized door group. When type is door, it refers to the ID of a door.</td><td>9bee6e0e-108d-4c52-9107-76f2c7dea4f1</td><td></td></tr><tr><td>resources[0].type</td><td>F</td><td>String</td><td>Support both door and door_group.</td><td></td><td></td></tr></table>

Assigned Schedules To Visitor

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>week_schedule</td><td>F</td><td>Object</td><td>The customizable scheduling strategy for each day from Sunday to Saturday. If not specified, it means access is allowed every day. Omit this parameter if it doesn&#x27;t need to be updated.</td><td></td></tr><tr><td>week_schedule monday</td><td>F</td><td>Array[Object]</td><td>Specify the daily access time period from Sunday to Saturday.</td><td></td></tr><tr><td>week_schedule monday[0].start_time</td><td>F</td><td>String</td><td>Start time of the access time period.</td><td>00:00:00</td></tr><tr><td>week_schedule monday[0].end_time</td><td>F</td><td>String</td><td>End time of the access time period.</td><td>23:59:59</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td></td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the visitor.</td><td></td></tr></table>

### Response Body

*See Response Schema for full field definitions.*

Note: Status change is not supported.

### Response Sample

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
    },
    "msg": "success"
}
```
### Request Sample

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

## Delete Visitor

This API enables you to delete a visitor.

Request URL: /api/v1/developer/visitors/:id   
Permission Key: edit:visitor   
Method: DELETE

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td></td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the visitor.</td><td></td></tr></table>

### Query Parameters

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>is_force</td><td>F</td><td>Boolean</td><td>If is_force is passed, physically delete this visitor; otherwise, update to canceled status.</td><td>is_force=true</td></tr></table>

### Response Sample

```json
{
  "code": "SUCCESS",
  "data": null,
  "msg": "success"
}
```

### Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl -XDELETE '{host}/api/v1/developer/visitors/c81dfee6-5970-4938-bd30-40820e16ea01? is_force=true' -H 'Authorization: Bearer wHFmHR*****kD6wHg' -H 'accept: application/json' -H 'content-type: application/json' --insecure 
```

## Assign NFC Card To Visitor

Request URL: /api/v1/developer/visitors/:id/nfc_cards   
Permission Key: edit:visitor   
Method: PUT

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the visitor.</td><td>Get it from the API /api/v1/developer/visitors</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>token</td><td>T</td><td>String</td><td>Token of the NFC card.</td><td>Get it from the API /api/v1/developer/nfc_cards sessions/{session_id}</td></tr><tr><td>force_add</td><td>F</td><td>Boolean</td><td>Determine whether to overwrite an NFC card that has already been assigned.</td><td>true or false</td></tr></table>

### Request Sample: Shell/cURL

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

### Response Sample

```json
{
  "code": "SUCCESS",
  "msg": "success"
}
```

## Unassign NFC Card From Visitor

Request URL: /api/v1/developer/visitors/:id/nfc_cards/delete   
Permission Key: edit:visitor   
Method: PUT

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the visitor.</td><td>Get it from the API /api/v1/developer/visitors</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>token</td><td>T</td><td>String</td><td>Token of the NFC card.</td><td>Get it from the API /api/v1/developer/visitors</td></tr></table>

### Request Sample: Shell/cURL

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

### Response Sample

```json
{
  "code": "SUCCESS",
  "msg": "success"
}
```

## Assign PIN Code To Visitor

Request URL: /api/v1/developer/visitors/:id/pin_codes   
Permission Key: edit:visitor   
Method: PUT

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the visitor.</td><td>Get it from the API /api/v1/developer/visitors</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>pin_code</td><td>T</td><td>String</td><td>Generate a PIN code for the visitor to unlock doors.</td><td>Get it from the API
/api/v1/developer PIN_codes</td></tr></table>

### Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XPUT '{host}/api/v1/developer/visitors/17d2f099-99df-429b-becb-1399a6937e5a/pin_codes' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data-raw '{ "pin_code": "57301208" }' \
--insecure
```

### Response Sample

```json
{
  "code": "SUCCESS",
  "msg": "success"
}
```

## Unassign PIN Code From Visitor

Request URL: /api/v1/developer/visitors/:id/pin_codes   
Permission Key: edit:visitor   
Method: DELETE

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the visitor.</td><td>Get it from the API /api/v1/developer/visitors</td></tr></table>

### Request Sample: Shell/cURL

The request body should be a JSON object containing the following fields:

```bash
curl -XDELETE '{host}/api/v1/developer/visitors/17d2f099-99df-429b-becb-1399a6937e5a/pin_codes' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--insecure
```

### Response Sample

```json
{
  "code": "SUCCESS",
  "msg": "success"
}
```

## Assign QR Code to Visitor

This API allows you to assign a QR code to a visitor.

Request URL: /api/v1/developer/visitors/:id/qr_codes   
Permission Key: edit:visitor   
Method: PUT   
UniFi Access Requirement: Version 3.3.10 or later

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the visitor.</td><td>Get it from the API /api/v1/developer/visitors</td></tr></table>

### Request Sample: Shell/cURL

```bash
curl --location --request PUT 'https://192.168.1.1:12445/api/v1/developer/visitors/15a90692-6f3b-4e1c-9886-bcd15e9c3f2d/qr_codes' \
--header 'Authorization: Bearer s4KgshBaoXTxwfAHLPwDw' \
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

## Unassign QR Code from Visitor

This API allows you to unassign (remove) a QR code from a visitor.

Request URL: /api/v1/developer/visitors/:id/qr_codes   
Permission Key: edit:visitor   
Method: DELETE   
UniFi Access Requirement: Version 3.3.10 or later

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the visitor.</td><td>Get it from the API /api/v1/developer/visitors</td></tr></table>

### Request Sample: Shell/cURL

```bash
curl --location --request DELETE  
'https://192.168.1.1:12445/api/v1/developer/visitors/15a90692-6f3b-4e1c-9886-bcd15e9c3f2d/qr_codes'  
--header 'Authorization: Bearer s4KgshBaoXTwXwFAHLPwDw'  
--header 'Content-Type: application/json'  
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

## Assign License Plate Numbers to Visitor

This API allows you to assign one or more license plate numbers to a visitor.

Request URL: /api/v1/developer/visitors/:id/license_plates   
Permission Key: edit:visitor   
Method: PUT   
UniFi Access Requirement: Version 3.3.10 or later

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>id</td><td>T</td><td>String</td><td>ID of the visitor.</td><td>Get it from the API /api/v1/developer/visitors</td></tr></table>

### Request Sample: Shell/cURL

```bash
curl --location --request PUT 'https://192.168.1.1:12445/api/v1/developer/visitors/b8635fc9-e9d2-4ec5-8763-d2c067ba4fc2/license_plates' \
--header 'Authorization: Bearer s4KgshBaoXTXwFAhLPwDW' \
--header 'Content-Type: application/json' \
--data '[ "abcd", "efge3" ]
']' \
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

## Unassign License Plate Number from Visitor

This API allows you to unassign a license plate number from a visitor.

Request URL: /api/v1/developer/visitors/:visitor_id/license_plates/:license_plate_id   
Permission Key: edit:visitor   
Method: DELETE   
UniFi Access Requirement: Version 3.3.10 or later

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>How to Get It?</td></tr><tr><td>visitor_id</td><td>T</td><td>String</td><td>ID of the visitor to unassign the license plate number from.</td><td>Get it from the API /api/v1/developer/visitors</td></tr><tr><td>licenseplate_id</td><td>T</td><td>String</td><td>ID of the license plate number to unassign.</td><td>From the license plate numbers in visitor details</td></tr></table>

### Request Sample: Shell/cURL

```bash
curl --location --request DELETE  
'https://192.168.1.1:12445/api/v1/developer/visitors/b8635fc9-e9d2-4ec5-8763-d2c067ba4fc2/license_plates/0effb50b-8bc9-4a91-b06d-7aec2c896b91'  
--header 'Authorization: Bearer s4KgshBaoXTwXwFAHLPwDw'  
--header 'Content-Type: application/json' 
```

### Response Sample

```json
{
  "code": "SUCCESS",
  "data": null,
  "msg": "success"
}
```
