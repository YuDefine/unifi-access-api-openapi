# Introduction

Welcome to the UniFi Access API guide, which provides a detailed step-by-step explanation of how to utilize the API effectively. The UniFi Access API is an open interface protocol that allows developers to interact with a specific service using predefined interfaces.

::: tip Official Documentation
Download the original official PDF: [UniFi Access API Documentation (PDF)](https://github.com/YuDefine/unifi-access-api-openapi/raw/main/docs/unifi-access-api-original.pdf)
:::

## Create API Token & Download API Documentation

Before you can use the UniFi Access API, you need to obtain a valid API Token for authentication and access control. Follow the steps below to create an API Token:

1. Sign in to your UniFi Portal (https://account.ui.com/login) using your web browser.   
2. Select the UniFi Console where the UniFi Access application is installed.   
3. Go to Access > Settings > General > Advanced.   
4. Go to API Token to Download API documentation and create an API Token.   
5. To create an API Token, click Create New, enter the key name and validity period, select the permission scopes, and click Create.   
6. Once the API Token is created, ensure to Copy API Token and store it safely for future use. Please note that the key is displayed only once for security purposes.

## Obtain Your Hostname

The UniFi Access application can be hosted on a server within the local network and accessed via the LAN port. The hostname can either be the server's IP address or a custom domain name mapped to that IP. Connect using the specified port number (12445) and establish an HTTPS protocol for a secure connection.

## Use the API

1. Construct the API request as per the instructions in the API documentation.   
2. Send the constructed request to the server using the previously obtained API Token and hostname.   
3. Parse the server's response to retrieve the required data or perform desired operations.

## Security Configuration

1. Set up appropriate security measures to protect the API and the server.   
2. Configure firewall rules to allow incoming traffic on the specific ports used by the API.   
3. Enable HTTPS encryption using SSL/TLS certificates to secure data transmission.   
4. Implement rate limiting and throttling mechanisms to prevent abuse and ensure fair usage.

## Important Notes

1. Ensure your UniFi Access version is 1.9.1 or later.   
2. The API is not available after upgrading to Identity Enterprise.   
3. Obtain valid access permissions and adhere to the usage guidelines provided by the service provider before using the UniFi Access API.   
4. Safeguard your API Token and do not share it with others to avoid security risks.   
5. If you have any questions or concerns, please contact the technical support team of your service provider.

The steps above cover the basic process and essential considerations for using the UniFi Access API. Follow the instructions and refer to the API documentation for smooth development. Enjoy the convenience of using the UniFi Access API!
