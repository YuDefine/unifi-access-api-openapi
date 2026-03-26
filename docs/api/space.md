# Space

The APIs here are designed for managing spaces, including doors, door groups, and floors.

## Fetch Door Group Topology

Fetch all current floor and door resources for access policy and visitor assignment purposes.

Request URL: /api/v1/developer/door_groups/topology   
Permission Key: view:space   
Method: GET

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Purpose</td><td>Related API</td></tr><tr><td>id</td><td>F</td><td>String</td><td>Identity ID of the door group.</td><td>Used when creating an access policy.</td><td></td></tr><tr><td>type</td><td>T</td><td>String</td><td>enum group_type {building,access} The building type contains all the doors; the access type represents all the customized door groups.</td><td></td><td>access: /api/v1/developer/door_groups</td></tr><tr><td>resource_topologies</td><td>T</td><td>Array[Object]</td><td>Contain information about the floor and all its associated doors.</td><td>Bind policies or specify available locations for visitors to access.</td><td>/api/v1/developer/access_policies /api/v1/developer/visitors</td></tr><tr><td>resource_topologies[].id</td><td>T</td><td>String</td><td>Identity ID of the floor.</td><td></td><td></td></tr><tr><td>resource_topologies[].type</td><td>T</td><td>String</td><td>Type of the floor.</td><td></td><td></td></tr><tr><td>resource_topologies[].name</td><td>T</td><td>String</td><td>Name of the floor.</td><td></td><td></td></tr><tr><td>resource_topologies[].resources</td><td>T</td><td>Array[Object]</td><td>Contain all the doors on the floor.</td><td></td><td></td></tr><tr><td>resource_topologies[].is_bind_hub</td><td>F</td><td>Boolean</td><td>Indicate whether the door has bound to a hub device. It can only be used for remote opening if it&#x27;s bound.</td><td></td><td></td></tr><tr><td>resource_topologies[].resources.id</td><td>T</td><td>String</td><td>Identity ID of the door.</td><td></td><td></td></tr><tr><td>resource_topologies[].resources.name</td><td>T</td><td>String</td><td>Name of the door.</td><td></td><td></td></tr><tr><td>resource_topologies[].resources.type</td><td>T</td><td>String</td><td>Type of the door.</td><td></td><td></td></tr></table>

### Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl -X GET '{host}/api/v1/developer/door_groups/topology'  
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
      "id": "d5573467-d6b3-4e8f-8e48-8a322b91664a",
      "name": "All Doors",
      "resource_topologies": [
        {
          "id": "9bee6e0e-108d-4c52-9107-76f2c7dea4f1",
          "name": "Main Floor",
          "resources": [
            {
              "id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
              "name": "Door 3855",
              "type": "door",
              "is_bind_hub": true
            }
          ],
          "type": "floor"
        }
      ],
      "type": "building"
    },
    {
      "id": "5c496423-6d25-4e4f-8cdf-95ad5135188a",
      "name": "customized group",
      "resource_topologies": [
        {
          "id": "9bee6e0e-108d-4c52-9107-76f2c7dea4f1",
          "name": "Main Floor",
          "resources": [
            {
              "id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
              "name": "Door 3855",
              "type": "door",
              "is_bind_hub": true
            }
          ],
          "type": "floor"
        }
      ]
    }
  ],
  "msg": "success"
}
```

## Create Door Group

This API allows you to create a door group.

Request URL: /api/v1/developer/door_groups   
Permission Key: edit:space   
Method: POST

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td>How to Get It?</td></tr><tr><td>group_name</td><td>T</td><td>String</td><td>Name of the door group. This needs to be globally unique.</td><td></td><td></td></tr><tr><td>resources</td><td>T</td><td>Array:String</td><td>Collection of door ID.</td><td></td><td>/api/v1/developer/door_groups/topology</td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Purpose</td><td>Related API</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the door group.</td><td>Used to assign access group to visitor and access policy.</td><td>/api/v1/developer/visitors; /api/v1/developer/access_policies;</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the door group.</td><td></td><td></td></tr><tr><td>resources</td><td>T</td><td>String</td><td>All doors contained under the group.</td><td></td><td></td></tr><tr><td>resources[].id</td><td>T</td><td>String</td><td>Identity ID of the door.</td><td></td><td></td></tr><tr><td>resources[].type</td><td>T</td><td>String</td><td>Type of the door.</td><td></td><td></td></tr></table>

### Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl '{host}/api/v1/developer/door_groups'
-H 'Authorization: Bearer wHFmHR*****kD6wHg'
-H 'accept: application/json'
-H 'content-type: application/json'
--data-raw '{ "group_name": "Test", "resources": [ "6ff875d2-af87-470b-9cb5-774c6596afc8" ]
} ' --insecure 
```

### Response Sample

```json
{
  "code": "SUCCESS",
  "data": {
    "id": "0140fa3d-8973-4305-a0ce-5306ae277878",
    "name": "Customized Door Group",
    "resources": [
      {
        "id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
        "type": "door"
      }
    ],
    "type": "access"
  },
  "msg": "success"
}
```

## Fetch Door Group

This API allows you to fetch door group details.

Request URL: /api/v1/developer/door_groups/:id   
Permission Key: view:space   
Method: GET

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Id</td><td>T</td><td>String</td><td>Identity ID of the door group.</td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Purpose</td><td>Related API</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the door group.</td><td>Used to assign access group to visitor and access policy.</td><td>/api/v1/developer/visitors; /api/v1/developer/access_policies;</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the door group.</td><td></td><td></td></tr><tr><td>type</td><td>t</td><td>String</td><td>Include door access and building resources. enum type {access, building} The building type stands for all doors, which is a special group obtained from the topology API. The access type represents all custom door groups.</td><td></td><td></td></tr><tr><td>resources</td><td>T</td><td>String</td><td>All doors contained under the group.</td><td></td><td></td></tr><tr><td>resources[].id</td><td>T</td><td>String</td><td>Identity ID of the door.</td><td></td><td></td></tr><tr><td>resources[].type</td><td>T</td><td>String</td><td>The access type represents all custom door group types.</td><td></td><td></td></tr><tr><td>resources[].name</td><td>T</td><td>String</td><td>Name of the door.</td><td></td><td></td></tr></table>

### Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl '{host}/api/v1/developer/door_groups/d5573467-d6b3-4e8f-8e48-8a322b91664a'  
-H 'Authorization: Bearer wHFmHR*****kD6wHg'  
-H 'accept: application/json'  
-H 'content-type: application/json'  
--insecure 
```

### Response Sample

Group type is building:

```json
{
  "code": "SUCCESS",
  "data": {
    "id": "d5573467-d6b3-4e8f-8e48-8a322b91664a",
    "name": "All Doors",
    "resources": [
      {
        "id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
        "name": "Door 3855",
        "type": "door"
      },
      {
        "id": "7cc1823f-9cdb-447b-b01b-4cb2abc661c0",
        "name": "A2 Door",
        "type": "door"
      },
      {
        "id": "ececa68e-239f-4b82-adc4-0c9ce70c60ff",
        "name": "A3",
        "type": "door"
      }
    ],
    "type": "building"
  },
  "msg": "success"
}
```

Customized groups:

```json
{
  "code": "SUCCESS",
  "data": {
    "id": "1be0c995-0347-4cb2-93b3-66a9624af568",
    "name": "Door Group 01",
    "resources": [
      {
        "id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
        "type": "door",
        "name": "Door 385"
      }
    ],
    "type": "access"
  },
  "msg": "success"
}
```

## Update Door Group

This API allows you to update door group details.

Request URL: /api/v1/developer/door_groups/:id   
Permission Key: edit:space   
Method: PUT

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the door group.</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td><td>How to Get It?</td></tr><tr><td>group_name</td><td>F</td><td>String</td><td>Name of door group. Omit this parameter if it doesn&#x27;t need to be updated.</td><td></td><td></td></tr><tr><td>resources</td><td>F</td><td>Array:String</td><td>Collection of door identifier ID. Omit this parameter if it doesn&#x27;t need to be updated.</td><td></td><td>/api/v1/developer/door_groups/topology</td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Purpose</td><td>Related API</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the door group.</td><td>Used to assign access group to visitor and access policy.</td><td>/api/v1/developer/visitors; /api/v1/developer/access_policies;</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the door group.</td><td></td><td></td></tr><tr><td>resources</td><td>T</td><td>String</td><td>All doors contained under the group.</td><td></td><td></td></tr><tr><td>resources[].id</td><td>T</td><td>String</td><td>Identity ID of the door.</td><td></td><td></td></tr><tr><td>resources[].type</td><td>T</td><td>String</td><td>Type of the door.</td><td></td><td></td></tr></table>

### Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl -XPUT '{host}/api/v1/developer/door_groups/0140fa3d-8973-4305-a0ce-5306ae277878' -H 'Authorization: Bearer wHFmHR*****kD6wHg' -H 'accept: application/json' -H 'content-type: application/json' --data-raw {' "resources": [ "6ff875d2-af87-470b-9cb5-774c6596afc8", "5a2c3d4e-1f6b-4c8d-9e0f-2a3b4c5d6e7f", "2p3q4r5s-6t7u-8v9w-x0y1-z2a3b4c5d6e" ] } ' --insecure   
### Delete all door resources   
curl -XPUT '{host}/api/v1/developer/door_groups/0140fa3d-8973-4305-a0ce-5306ae277878' -H 'Authorization: Bearer wHFmHR*****kD6wHg' -H 'accept: application/json' -H 'content-type: application/json' --data-raw {' "resources": [] } ' --insecure 
```

### Response Sample

```json
{
  "code": "SUCCESS",
  "data": {
    "id": "0140fa3d-8973-4305-a0ce-5306ae277878",
    "name": "test",
    "resources": [
      {
        "id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
        "type": "door"
      }
    ],
    "type": "access"
  },
  "msg": "success"
}
```

## Fetch All Door Groups

This API allows you to fetch the list of all door groups.

Request URL: /api/v1/developer/door_groups   
Permission Key: view:space   
Method: GET

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Purpose</td><td>Related API</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the door group.</td><td>Used to create a door groups and to open doors remotely, if a device is bound.</td><td>/api/v1/developer/door_groups; /api/v1/developer/doors/:id/remote_unlock;</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the door group.</td><td></td><td></td></tr><tr><td>type</td><td>t</td><td>String</td><td>Include door access and building resources. enum type {access, building} The building type represents all doors, which is a special group obtained from the topology API. But the list does not contain the group type building. The access type represents all custom door groups.</td><td></td><td></td></tr><tr><td>resources</td><td>T</td><td>String</td><td>All doors contained under the group.</td><td></td><td></td></tr><tr><td>resources[].id</td><td>T</td><td>String</td><td>Identity ID of the door.</td><td></td><td></td></tr><tr><td>resources[].type</td><td>T</td><td>String</td><td>Type of the door.</td><td></td><td></td></tr></table>

### Response Sample

The request body should be a JSON object containing the following fields:

```bash
curl '{host}/api/v1/developer/door_groups'
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
      "id": "5c496423-6d25-4e4f-8cdf-95ad5135188a",
      "name": "Test",
      "resources": [
        {
          "id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
          "type": "door"
        }
      ],
      "type": "access"
    },
    {
      "id": "1907cc46-0a73-4077-94c1-95b625bdd0f8",
      "name": "Test2",
      "resources": [
        {
          "id": "6ff875d2-af87-470b-9cb5-774c6596afc8",
          "type": "door"
        }
      ],
      "type": "access"
    }
  ],
  "msg": "success"
}
```

## Delete Door Group

This API allows you to delete a door group.

Request URL: /api/v1/developer/door_groups/:id   
Permission Key: edit:space   
Method: DELETE

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the door group.</td></tr></table>

### Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl -XDELETE '{host}/api/v1/developer/door_groups/0140fa3d-8973-4305-a0ce-5306ae277878'  
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

## Fetch Door

This API allows you to fetch door details.

Request URL: /api/v1/developer/doors/:id   
Permission Key: view:space   
Method: GET

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the door.</td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Purpose</td><td>Related API</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the door group.</td><td>1. Used to create a door group. 2. Used to unlock a door remotely, if the door is bound to a hub device.</td><td>/api/v1/developer/door_groups; /api/v1/developer/doors/:id/remote_unlock;</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the door.</td><td></td><td></td></tr><tr><td>full_name</td><td>T</td><td>String</td><td>Full name of the door.</td><td></td><td></td></tr><tr><td>floor_id</td><td>T</td><td>String</td><td>Identity ID of the floor.</td><td></td><td></td></tr><tr><td>type</td><td>T</td><td>String</td><td>Type of the door.</td><td></td><td></td></tr><tr><td>is_bind_hub</td><td>T</td><td>String</td><td>Indicate whether the door has bound to a hub device. It can only be used for remote opening if it&#x27;s bound.</td><td></td><td></td></tr><tr><td>door_lock_relay_status</td><td>T</td><td>String</td><td>Door lock status. enum door_lock_relay_status {lock, unlock}</td><td></td><td></td></tr><tr><td>door_position_status</td><td>T</td><td>String</td><td>DPS: Door position status, including both open and close. A null value means that no device is connected.</td><td></td><td></td></tr></table>

### Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/api/v1/developer/doors/0ed545f8-2fcd-4839-9021-b39e707f6aa9'  
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
    "door_lock_relay_status": "lock",
    "door_position_status": "",
    "floor_id": "3275af8d-3fa7-4902-a11b-011e41c8464a",
    "full_name": "UNVR - 1F - Main Door",
    "id": "0ed545f8-2fcd-4839-9021-b39e707f6aa9",
    "is_bind_hub": true,
    "name": "Main Door",
    "type": "door"
  },
  "msg": "success"
}
```

## Fetch All Doors

This API allows you to fetch the list of all doors.

Request URL: /api/v1/developer/doors   
Permission Key: view:space   
Method: GET

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Purpose</td><td>Related API</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the door group.</td><td>1. Used to create a door group. 2. Used to unlock a door remotely, if the door is bound to a hub device.</td><td>/api/v1/developer/door_groups; /api/v1/developer/doors/:id/remote_unlock;</td></tr><tr><td>name</td><td>T</td><td>String</td><td>Name of the door.</td><td></td><td></td></tr><tr><td>full_name</td><td>T</td><td>String</td><td>Full name of the door.</td><td></td><td></td></tr><tr><td>floor_id</td><td>T</td><td>String</td><td>Identity ID of the floor.</td><td></td><td></td></tr><tr><td>type</td><td>T</td><td>String</td><td>Type of the door.</td><td></td><td></td></tr><tr><td>is_bind_hub</td><td>T</td><td>String</td><td>Indicate whether the door has bound to a hub device. It can only be used for remote opening if it&#x27;s bound.</td><td></td><td></td></tr><tr><td>door_lock_relay_status</td><td>T</td><td>String</td><td>Door lock status. enum door_lock_relay_status {lock, unlock}</td><td></td><td></td></tr><tr><td>door_position_status</td><td>T</td><td>String</td><td>DPS: Door position status, including both open and close. A null value means that no device is connected.</td><td></td><td></td></tr></table>

### Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/api/v1/developer/doors'  
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
      "door_lock_relay_status": "unlock",
      "door_position_status": "open",
      "floor_id": "23c5db06-b59b-494d-94f1-23e88fbe4909",
      "full_name": "UNVR - 2F - A2 Door",
      "id": "0ed545f8-2fcd-4839-9021-b39e707f6aa9",
      "is_bind_hub": true,
      "name": "A2 Door",
      "type": "door"
    },
    {
      "door_lock_relay_status": "lock",
      "door_position_status": "close",
      "floor_id": "7c62b4b3-692f-44ea-8eb8-e212833b4e0f",
      "full_name": "UNVR - 1F - Door 3855",
      "id": "5785e97b-6123-4596-ba49-b6e51164db9b",
      "is_bind_hub": true,
      "name": "Door 3855",
      "type": "door"
    }
  ],
  "msg": "success"
}
```

## Remote Door Unlocking

This API allows you to remotely unlock a door.

Request URL: /api/v1/developer/doors/:id/unlock   
Permission Key: edit:space   
Method: PUT

### Description:

This API allows developers to remotely trigger door unlocks. You can optionally specify actor_id and actor_name to customize the actor identity shown in system logs and webhook notifications.

If these fields are omitted, the system will default to using the name of the API token as the actor. The extra field is fully passthrough. Any data sent will be echoed as-is in the webhook payload.

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the door.</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>actor_id</td><td>F</td><td>String</td><td>Custom actor ID shown in system logs and webhooks. Required if actor_name is provided.</td></tr><tr><td>actor_name</td><td>F</td><td>String</td><td>Custom actor name. Required if actor_id is provided.</td></tr><tr><td>extra</td><td>F</td><td>Object (Map)</td><td>Custom passthrough data. Included as-is in webhook notifications.</td></tr></table>

Note:

If both actor_id and actor_name are omitted, the system will use the API token name as the default actor.

If either actor_id or actor_name is provided, both must be included.

### Request Sample

```bash
curl --location --request PUT \
'https://192.168.1.1:12445/api/v1/developer/doors/CF4b9ee6-05cb-4799-a462-ec307fff2067/unlock' \
--header 'Authorization: Bearer 5aIi+E7DidM2Xzbi6ewtAQ' \
--header 'Content-Type: application/json' \
--data '{
    "actor_id": "actoruuid",
    "actor_name": "actor name",
    "extra": {
        "extra_string": "test",
        "extra_integer": 1,
        "extraBoolean": true
    }
}'
```

### Response Sample

```json
{
  "code": "SUCCESS",
  "data": "success",
  "msg": "success"
}
```

## Set Temporary Door Locking Rule

This API allows you to temporarily set the locking rules for doors.

Request URL: /api/v1/developer/doors/:id/lock_rule   
Permission Key: edit:space   
Method: PUT   
UniFi Access Requirement: 1.24.6 or later

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the door.</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>type</td><td>T</td><td>String</td><td>enum type {keep_lock, keep_unlock, custom, reset, lock_early, lock_now} keep_lock is used to set the door to the &quot;keep locked&quot; state, while keep_unlock is used to set it to the &quot;keep unlocked&quot; state. custom allows customization of the unlock time duration, and reset is used to restore the door to its initial state (not applicable to the &quot;lock_early&quot; state). NOTE: If the door is currently on an unlock schedule (schedule), you can use lock_early to lock the door early.</td><td></td></tr><tr><td>interval</td><td>F</td><td>Integer</td><td>Set the lock time duration (minutes) when type is custom.</td><td>10</td></tr></table>

### Request Sample

The request body should be a JSON object containing the following fields:

**Customized 10-minute unlock**

```bash
curl -XPUT '{host}/api/v1/developer/doors/e4978b83-203d-4015-97df-b86efc91cb0c/lock_rule' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data '{
    "type": "custom",
    "interval": 10
}' \
--insecure
```

**Keep it unlocked**

```bash
curl -XPUT '{host}/api/v1/developer/doors/e4978b83-203d-4015-97df-b86efc91cb0c/lock_rule' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data '{
    "type": "keep_unlock"
}' \
--insecure
```

**Keep it locked**

```bash
curl -XPUT '{host}/api/v1/developer/doors/e4978b83-203d-4015-97df-b86efc91cb0c/lock_rule' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data '{
    "type": "keep_lock"
}' \
--insecure
```

> Use `reset` to restore the temporary unlock schedule (e.g., "Unlock for 1 Hour") to its original locked state. This parameter is intended solely for resetting a temporary unlock schedule. If you wish to lock a door before its scheduled unlock time ends, use `lock_early` below instead.

**Reset temporary unlock**

```bash
curl -XPUT '{host}/api/v1/developer/doors/e4978b83-203d-4015-97df-b86efc91cb0c/lock_rule' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data '{
    "type": "reset"
}' \
--insecure
```

> If the door is currently on an unlock schedule, you can use `lock_early` to lock the door before the scheduled time ends. For instance, if the unlock schedule is set from 9:00 AM to 6:00 PM, you can use this parameter at 3:00 PM to end the schedule and lock the door earlier.

**Lock early**

```bash
curl -XPUT '{host}/api/v1/developer/doors/e4978b83-203d-4015-97df-b86efc91cb0c/lock_rule' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data '{
    "type": "lock_early"
}' \
--insecure
```

> `lock_now` is used to terminate both the unlock schedule and any temporary unlock at the same time.

**Lock now**

```bash
curl -XPUT '{host}/api/v1/developer/doors/e4978b83-203d-4015-97df-b86efc91cb0c/lock_rule' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data '{
    "type": "lock_now"
}'
```

### Response Sample

```json
{
  "code": "SUCCESS",
  "data": "success",
  "msg": "success"
}
```

## Fetch Door Locking Rule

This API allows you to fetch the locking rules for doors.

Request URL: /api/v1/developer/doors/:id/lock_rule   
Permission Key: view:space   
Method: GET   
UniFi Access Requirement: 1.24.6 or later

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Path

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>id</td><td>T</td><td>String</td><td>Identity ID of the door.</td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>type</td><td>T</td><td>String</td><td>enum type {schedule,keep_lock,keep_unlock,custom_lock_early} keep_lock is used to set the &quot;keep locked&quot; state, while keep_unlock is used to set the &quot;keep unlocked&quot; state. custom is used to customize the unlock time duration. schedule indicates that the door is currently in the unlock schedule state. The lock_early is used to terminate doors in an unlock schedule early.</td><td></td></tr><tr><td>ended_time</td><td>T</td><td>Integer</td><td>End time of the set rule.</td><td>1708672257</td></tr></table>

### Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/api/v1/developer/doors/e4978b83-203d-4015-97df-b86efc91cb0c/lock_rule' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--insecure
```

### Response Sample

**Keep it locked:**

```json
{
  "code": "SUCCESS",
  "data": {
    "ended_time": 3602128309,
    "type": "keep_lock"
  },
  "msg": "success"
}
```

**Keep it unlocked:**

```json
{
  "code": "SUCCESS",
  "data": {
    "ended_time": 3602128562,
    "type": "keep_unlock"
  },
  "msg": "success"
}
```

**Customized unlock duration:**

```json
{
  "code": "SUCCESS",
  "data": {
    "ended_time": 1708673342,
    "type": "custom"
  },
  "msg": "success"
}
```

**Lock early** (used to terminate doors in an unlock schedule early):

```json
{
  "code": "SUCCESS",
  "data": {
    "type": "lock_early",
    "ended_time": 1708673342
  },
  "msg": "success"
}
```

## Set Door Emergency Status

This API allows you to set the emergency status for all doors.

Request URL: /api/v1/developer/doors/settings/emergency   
Permission Key: edit:space   
Method: PUT   
UniFi Access Requirement: 1.24.6 or later

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Request Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>lockdown</td><td>F</td><td>Boolean</td><td>True will keep the door locked.</td><td>true</td></tr><tr><td>evacuation</td><td>F</td><td>Boolean</td><td>True will keep the door unlocked.</td><td>false</td></tr></table>

### Request Sample

The request body should be a JSON object containing the following fields:

```bash
### Keep it locked
curl -XPUT '{host}/api/v1/developer/doors/settings/emergency' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data '{
    "lockdown": true,
    "evacuation": false
}' \
--insecure

### Keep it unlocked
curl -XPUT '{host}/api/v1/developer/doors/settings/emergency' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data '{
    "lockdown": false,
    "evacuation": true
}' \
--insecure

### Restore the initial state or release the setting
curl -XPUT '{host}/api/v1/developer/doors/settings/emergency' \
-H 'Authorization: Bearer wHFmHR*****kD6wHg' \
-H 'accept: application/json' \
-H 'content-type: application/json' \
--data '{
    "lockdown": false,
    "evacuation": false
}' \
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

## Fetch Door Emergency Status

This API allows you to fetch the emergency status for all doors.

Request URL: /api/v1/developer/doors/settings/emergency   
Permission Key: view:space   
Method: GET   
UniFi Access Requirement: 1.24.6 or later

### Request Header

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td></tr><tr><td>Authorization</td><td>T</td><td>String</td><td>Token required for authentication and access control.</td></tr></table>

### Response Body

<table><tr><td>Parameter</td><td>Required</td><td>Type</td><td>Description</td><td>Example</td></tr><tr><td>lockdown</td><td>F</td><td>Boolean</td><td>True will keep the door locked.</td><td>true</td></tr><tr><td>evacuation</td><td>F</td><td>Boolean</td><td>True will keep the door unlocked.</td><td>false</td></tr></table>

### Request Sample

The request body should be a JSON object containing the following fields:

```bash
curl -XGET '{host}/api/v1/developer/doors/settings/emergency' \
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
    "evacuation": true,
    "lockdown": false
  },
  "msg": "success"
}
```
