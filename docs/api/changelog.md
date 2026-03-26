# Change Logs

## v4.0.10
- Supports triggering the doorbell on Intercom and Reader Pro. (#8.4)

## v3.3.21
- Supports remote door unlocking API with customizable actor_id, actor_name, and extra fields in webhook input. If omitted, the system will default to using the token name as the actor in logs. (#7.9)

## v3.3.10
- Supports assigning and unassigning user license plates. (#3.28-#3.29)
- Supports updating user profile pictures. (#3.30)
- Supports assigning and unassigning visitor license plates. (#4.13-#4.14)
- Supports assigning and unassigning visitor QR code credentials. (#4.11-#4.12)
- Supports downloading user QR Code images. (#6.18)
- Supports importing third-party NFC card IDs into the system. (#6.19)
- Supports fetching and updating the access method settings of specific devices. (#8.2-#8.3)
- Supports additional webhook events. (#11.2)

## V3.2.20
- Supports Touch Pass API (#3.25-#3.27, #6.11-#6.17)
- Support for including TouchPass details in the response if a user has been assigned a Touch Pass. (#3.4-#3.5)

## V3.1.30
- Supports webhooks for custom header configuration and forwarding. (#11.3)
- Supports emergency event webhook notifications. (#11.2)
- Supports DPS status change webhook notifications for EAH8 and UA-Hub-Gate. (#11.2)
- Supports the user deletion API. (#3.23)
- Supports the user search API. (#3.24)
- Supports the NFC card update API. (#6.10)
- Supports temporary unlock for EAH8, UA-Hub-Door-Mini, and UA-Ultra. Requires the latest device versions. (#7.10-#7.11)

## V2.2.6
- Supports user groups and user group policies. (#3.11-#3.22,#10.5-#10.6)
- Supports remote door unlock for Access Ultra (UA-Ultra). (#7.9)

## V2.2.10
- Supports webhook API. (#11.2-#11.7)
- Supports API server certificates. (#12.1-#12.2)
