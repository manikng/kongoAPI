import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function BtcPayServerTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="btc-pay-server-typescript-sdk"
      metaDescription={`Start Accepting Bitcoin Payments With 0% Fees & No Third-party.

BTCPay Server is a self-hosted, open-source cryptocurrency payment processor. It's secure, private, censorship-resistant and free.

Essential Apps Built In
Features you use the most are baked right into every instance so you can hit the ground running. Create a Point-of-Sale app for your store, easily embed a tipping button on your website, send a payment link to a client across the globe, or launch a crowdfunding campaign to raise funds for your cause.

Great for Invoicing and Accounting
Generate and manage invoices with ease. Get notified when they get paid. Export your invoices in different format for smoother bookkeeping.

Native Wallet Management
Manage your incoming and outgoing funds with a built-in wallet that has hardware wallet support.

Self Host Or Use A Shared Server
Use a shared server if you're not tech savvy, or deploy your own instance on cloud servers or hardware devices. By sharing your server you can support friends or your local community.

Automation Via API
Manage your BTCPay Server (e.g. stores, invoices, users), automate your workflows and control access with our API.`}
      company="BTCPay Server"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/btcpay-server/logo.png"
      companyKebabCase="btc-pay-server"
      clientNameCamelCase="btcPayServer"
      homepage="btcpayserver.org/"
      lastUpdated={new Date("2024-03-29T20:34:56.573Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/btcpay-server/favicon.png"
      contactUrl="https://btcpayserver.org"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/btcpay-server/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["payments","cryptocurrency"]}
      methods={[
  {
    "url": "/api/v1/api-keys/{apikey}",
    "method": "deleteApiKey",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "API Keys",
    "typeScriptTag": "apiKeys",
    "description": "Revoke an API Key",
    "parameters": [
      {
        "name": "apikey",
        "schema": "string",
        "required": true,
        "description": "The API Key to revoke",
        "example": "APIKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The key has been deleted"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this user"
      }
    ]
  },
  {
    "url": "/api/v1/users/{idOrEmail}/api-keys/{apikey}",
    "method": "deleteUserApiKey",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "API Keys",
    "typeScriptTag": "apiKeys",
    "description": "Revoke an API Key of target user",
    "parameters": [
      {
        "name": "apikey",
        "schema": "string",
        "required": true,
        "description": "The API Key to revoke",
        "example": "APIKEY"
      },
      {
        "name": "idOrEmail",
        "schema": "string",
        "required": true,
        "description": "The target user's id or email",
        "example": "IDOREMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The key has been deleted"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this user"
      }
    ]
  },
  {
    "url": "/api/v1/api-keys/current",
    "method": "deleteCurrentApiKey",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "API Keys",
    "typeScriptTag": "apiKeys",
    "description": "Revoke the current API Key",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Description of an error happening during processing of the request"
      }
    ]
  },
  {
    "url": "/api/v1/api-keys/current",
    "method": "getCurrentApiKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "API Keys",
    "typeScriptTag": "apiKeys",
    "description": "Get the current API Key information",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Description of an error happening during processing of the request"
      }
    ]
  },
  {
    "url": "/api/v1/api-keys",
    "method": "createApiKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "API Keys",
    "typeScriptTag": "apiKeys",
    "description": "Create a new API Key",
    "parameters": [
      {
        "name": "label",
        "schema": "string",
        "description": ""
      },
      {
        "name": "permissions",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Description of an error happening during processing of the request"
      },
      {
        "statusCode": "default",
        "description": "Description of an error happening during processing of the request"
      }
    ]
  },
  {
    "url": "/api/v1/users/{idOrEmail}/api-keys",
    "method": "createUserApiKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "API Keys",
    "typeScriptTag": "apiKeys",
    "description": "Create a new API Key for a user",
    "parameters": [
      {
        "name": "idOrEmail",
        "schema": "string",
        "required": true,
        "description": "The target user's id or email",
        "example": "IDOREMAIL"
      },
      {
        "name": "label",
        "schema": "string",
        "description": ""
      },
      {
        "name": "permissions",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Description of an error happening during processing of the request"
      },
      {
        "statusCode": "default",
        "description": "Description of an error happening during processing of the request"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/apps/pos",
    "method": "createPointOfSaleApp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Create a new Point of Sale app",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "appName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "template",
        "schema": "string",
        "description": ""
      },
      {
        "name": "defaultView",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "BTC"
      },
      {
        "name": "showCustomAmount",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "showDiscount",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "enableTips",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "customAmountPayButtonText",
        "schema": "string",
        "description": "",
        "default": "Pay"
      },
      {
        "name": "fixedAmountPayButtonText",
        "schema": "string",
        "description": "",
        "default": "Buy for {PRICE_HERE}"
      },
      {
        "name": "tipText",
        "schema": "string",
        "description": "",
        "default": "Do you want to leave a tip?"
      },
      {
        "name": "customCSSLink",
        "schema": "string",
        "description": ""
      },
      {
        "name": "embeddedCSS",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notificationUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "redirectUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "redirectAutomatically",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "requiresRefundEmail",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "formId",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "An array of validation errors of the request"
      }
    ]
  },
  {
    "url": "/api/v1/apps/pos/{appId}",
    "method": "getPointOfSaleApp",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Get Point of Sale app data",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "POS app with specified ID was not found"
      }
    ]
  },
  {
    "url": "/api/v1/apps/pos/{appId}",
    "method": "putPointOfSaleApp",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Update a Point of Sale app",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "appName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "template",
        "schema": "string",
        "description": ""
      },
      {
        "name": "defaultView",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "BTC"
      },
      {
        "name": "showCustomAmount",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "showDiscount",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "enableTips",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "customAmountPayButtonText",
        "schema": "string",
        "description": "",
        "default": "Pay"
      },
      {
        "name": "fixedAmountPayButtonText",
        "schema": "string",
        "description": "",
        "default": "Buy for {PRICE_HERE}"
      },
      {
        "name": "tipText",
        "schema": "string",
        "description": "",
        "default": "Do you want to leave a tip?"
      },
      {
        "name": "customCSSLink",
        "schema": "string",
        "description": ""
      },
      {
        "name": "embeddedCSS",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notificationUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "redirectUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "redirectAutomatically",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "requiresRefundEmail",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "formId",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "An array of validation errors of the request"
      }
    ]
  },
  {
    "url": "/api/v1/apps/crowdfund/{appId}",
    "method": "getCrowdfundApp",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Get crowdfund app data",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Crowdfund app with specified ID was not found"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/apps/crowdfund",
    "method": "createCrowdfundApp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Create a new Crowdfund app",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "My crowdfund app"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "My app description"
      },
      {
        "name": "appName",
        "schema": "string",
        "description": "",
        "example": "Kukkstarter"
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "enforceTargetAmount",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "startDate",
        "schema": "number",
        "description": "",
        "example": 768658369
      },
      {
        "name": "endDate",
        "schema": "number",
        "description": "",
        "example": 771336769
      },
      {
        "name": "targetCurrency",
        "schema": "string",
        "description": "",
        "example": "BTC"
      },
      {
        "name": "targetAmount",
        "schema": "number",
        "description": "",
        "example": 420
      },
      {
        "name": "customCSSLink",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mainImageUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "embeddedCSS",
        "schema": "string",
        "description": ""
      },
      {
        "name": "perksTemplate",
        "schema": "string",
        "description": "",
        "example": "test_perk:\r\n  price: 100\r\n  title: test perk\r\n  price_type: \"fixed\" \r\n  disabled: false"
      },
      {
        "name": "notificationUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tagline",
        "schema": "string",
        "description": "",
        "example": "I can't believe it's not butter"
      },
      {
        "name": "disqusShortname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "soundsEnabled",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "animationsEnabled",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "resetEveryAmount",
        "schema": "number",
        "description": "",
        "default": 1
      },
      {
        "name": "resetEvery",
        "schema": "string",
        "description": "",
        "default": "Never"
      },
      {
        "name": "displayPerksValue",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "sortPerksByPopularity",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "sounds",
        "schema": "array",
        "description": "",
        "example": [
          "https://github.com/ClaudiuHKS/AdvancedQuakeSounds/raw/master/sound/AQS/doublekill.wav"
        ]
      },
      {
        "name": "animationColors",
        "schema": "array",
        "description": "",
        "example": [
          "#0000FF",
          "#00FF00",
          "#FF0000"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "An array of validation errors of the request"
      }
    ]
  },
  {
    "url": "/api/v1/apps/{appId}",
    "method": "deleteApp",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Delete app",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app ID",
        "example": "APPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "App was deleted"
      },
      {
        "statusCode": "404",
        "description": "App with specified ID was not found"
      }
    ]
  },
  {
    "url": "/api/v1/apps/{appId}",
    "method": "getApp",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Get basic app data",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app ID",
        "example": "APPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "App with specified ID was not found"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/apps",
    "method": "getAllAppsForStore",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Get basic app data for all apps for a store",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/apps",
    "method": "getAllApps",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Get basic app data for all apps for all stores for a user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api-keys/authorize",
    "method": "authorize",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Authorization",
    "typeScriptTag": "authorization",
    "description": "Authorize User",
    "parameters": [
      {
        "name": "permissions",
        "schema": "array",
        "description": "The permissions to request. (See API Key authentication)"
      },
      {
        "name": "strict",
        "schema": "boolean",
        "description": "If permissions are specified, and strict is set to false, it will allow the user to reject some of permissions the application is requesting.",
        "default": true
      },
      {
        "name": "applicationIdentifier",
        "schema": "string",
        "description": "If specified, BTCPay Server will check if there is an existing API key associated with the user that also has this application identifier, redirect host AND the permissions required match(takes selectiveStores and strict into account). `applicationIdentifier` is ignored if redirect is not specified."
      },
      {
        "name": "selectiveStores",
        "schema": "boolean",
        "description": "If the application is requesting the CanModifyStoreSettings permission and selectiveStores is set to true, this allows the user to only grant permissions to selected stores under the user's control.",
        "default": false
      },
      {
        "name": "applicationName",
        "schema": "string",
        "description": "The name of your application"
      },
      {
        "name": "redirect",
        "schema": "string",
        "description": "The url to redirect to after the user consents, with the query parameters appended to it: permissions, user-id, api-key. If not specified, user is redirected to their API Key list."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "307",
        "description": "Makes browser do an HTTP POST request to the specified url in `redirect` with a JSON body consisting of `apiKey` (the api key created or matched), `permissions` (the permissions the user consented to), and `userId` (the id of the user that consented) upon consent"
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/custodians",
    "method": "getSupportedCustodians",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custodians",
    "typeScriptTag": "custodians",
    "description": "List supported custodians",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/custodian-accounts",
    "method": "getStoreCustodianAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custodians",
    "typeScriptTag": "custodians",
    "description": "List store custodian accounts",
    "parameters": [
      {
        "name": "assetBalances",
        "schema": "boolean",
        "required": false,
        "description": "Enable if you want the result to include the 'assetBalances' field. This will make the call slower or could cause the call to fail if the asset balances cannot be loaded (i.e. due to a bad API key).",
        "default": false
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The Store ID",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the store's custodian accounts"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/custodian-accounts",
    "method": "addStoreCustodianAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custodians",
    "typeScriptTag": "custodians",
    "description": "Add a custodial account to a store.",
    "parameters": [
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The Store ID",
        "example": "STOREID"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "storeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custodianCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "config",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to add new custodian account"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/custodian-accounts/{accountId}",
    "method": "deleteStoreCustodianAccount",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Custodians",
    "typeScriptTag": "custodians",
    "description": "Delete store custodian account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The Custodian Account ID",
        "example": "ACCOUNTID"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The Store ID",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Custodian account deleted"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to delete the custodian account"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/custodian-accounts/{accountId}",
    "method": "getStoreCustodianAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custodians",
    "typeScriptTag": "custodians",
    "description": "Get store custodian account",
    "parameters": [
      {
        "name": "assetBalances",
        "schema": "boolean",
        "required": false,
        "description": "Enable if you want the result to include the 'assetBalances' field. This will make the call slower or could cause the call to fail if the asset balances cannot be loaded (i.e. due to a bad API key).",
        "default": false
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The Custodian Account ID",
        "example": "ACCOUNTID"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The Store ID",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the custodian account"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/custodian-accounts/{accountId}",
    "method": "updateStoreCustodianAccount",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Custodians",
    "typeScriptTag": "custodians",
    "description": "Update custodial account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The Custodian Account ID",
        "example": "ACCOUNTID"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The Store ID",
        "example": "STOREID"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "storeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custodianCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "config",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to modify new custodian account"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/custodian-accounts/{accountId}/trades/quote",
    "method": "getStoreCustodianAccountTradeQuote",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custodians",
    "typeScriptTag": "custodians",
    "description": "Get quote for trading one asset for another",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The Custodian Account ID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The Store ID",
        "example": "STOREID"
      },
      {
        "name": "fromAsset",
        "schema": "string",
        "required": true,
        "description": "The asset to convert.",
        "example": "FROMASSET"
      },
      {
        "name": "toAsset",
        "schema": "string",
        "required": true,
        "description": "The asset you want.",
        "example": "TOASSET"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to create trades"
      },
      {
        "statusCode": "404",
        "description": "No tradable asset pair found for this trade."
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/custodian-accounts/{accountId}/trades/market",
    "method": "storeCustodianAccountTradeMarket",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custodians",
    "typeScriptTag": "custodians",
    "description": "Trade one asset for another",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The Custodian Account ID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The Store ID",
        "example": "STOREID"
      },
      {
        "name": "fromAsset",
        "schema": "string",
        "description": ""
      },
      {
        "name": "toAsset",
        "schema": "string",
        "description": ""
      },
      {
        "name": "qty",
        "schema": "undefined",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to create trades"
      },
      {
        "statusCode": "404",
        "description": "No tradable asset pair found for this trade."
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/custodian-accounts/{accountId}/addresses/{paymentMethod}",
    "method": "getStoreCustodianAccountDepositAddress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custodians",
    "typeScriptTag": "custodians",
    "description": "Get a deposit address for custodian",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The Custodian Account ID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The Store ID",
        "example": "STOREID"
      },
      {
        "name": "paymentMethod",
        "schema": "string",
        "required": true,
        "description": "The payment method to use for the deposit. Example: \"BTC-OnChain\" or \"BTC-Lightning\"",
        "example": "PAYMENTMETHOD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A bitcoin address belonging to the custodian"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to get the deposit address"
      },
      {
        "statusCode": "404",
        "description": "The custodian does not support deposits using this payment method."
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/custodian-accounts/{accountId}/withdrawals/simulation",
    "method": "simulateWithdrawFromStoreCustodianAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custodians",
    "typeScriptTag": "custodians",
    "description": "Simulate a withdrawal",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The Custodian Account ID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The Store ID",
        "example": "STOREID"
      },
      {
        "name": "paymentMethod",
        "schema": "string",
        "required": true,
        "description": "The payment method to be used for the withdrawal.",
        "example": "PAYMENTMETHOD"
      },
      {
        "name": "qty",
        "schema": "number",
        "required": true,
        "description": "The quantity to simulate a withdrawal for.",
        "example": 0
      },
      {
        "name": "paymentMethod",
        "schema": "string",
        "description": ""
      },
      {
        "name": "qty",
        "schema": "undefined",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Withdrawal is not possible because you don't have this much in your account."
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Withdrawal is not possible for this payment method."
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/custodian-accounts/{accountId}/withdrawals",
    "method": "withdrawFromStoreCustodianAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custodians",
    "typeScriptTag": "custodians",
    "description": "Withdraw to store wallet",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The Custodian Account ID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The Store ID",
        "example": "STOREID"
      },
      {
        "name": "paymentMethod",
        "schema": "string",
        "description": ""
      },
      {
        "name": "qty",
        "schema": "undefined",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Withdrawal is not possible because you don't have this much in your account."
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Withdrawal is not possible for this asset."
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/custodian-accounts/{accountId}/withdrawals/{withdrawalId}",
    "method": "getStoreCustodianAccountWithdrawalInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custodians",
    "typeScriptTag": "custodians",
    "description": "Get withdrawal info",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The Custodian Account ID.",
        "example": "ACCOUNTID"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The Store ID",
        "example": "STOREID"
      },
      {
        "name": "withdrawalId",
        "schema": "string",
        "required": true,
        "description": "The Withdrawal ID.",
        "example": "WITHDRAWALID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Withdrawal not found."
      }
    ]
  },
  {
    "url": "/api/v1/health",
    "method": "getHealth",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "Get health status",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Description of an error happening during processing of the request"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/invoices",
    "method": "getInvoices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Get invoices",
    "parameters": [
      {
        "name": "orderId",
        "schema": "array",
        "required": false,
        "description": "Array of OrderIds to fetch the invoices for",
        "example": "1000&orderId=1001&orderId=1002"
      },
      {
        "name": "textSearch",
        "schema": "string",
        "required": false,
        "description": "A term that can help locating specific invoices."
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Array of statuses of invoices to be fetched"
      },
      {
        "name": "endDate",
        "schema": "number",
        "required": false,
        "description": "End date of the period to retrieve invoices",
        "example": 1592312018
      },
      {
        "name": "take",
        "schema": "number",
        "required": false,
        "description": "Number of records returned in response"
      },
      {
        "name": "skip",
        "schema": "number",
        "required": false,
        "description": "Number of records to skip"
      },
      {
        "name": "startDate",
        "schema": "number",
        "required": false,
        "description": "Start date of the period to retrieve invoices",
        "example": 1592312018
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to query",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Description of an error happening during processing of the request"
      },
      {
        "statusCode": "default",
        "description": "Description of an error happening during processing of the request"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/invoices",
    "method": "createInvoice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Create a new invoice",
    "parameters": [
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to query",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of validation errors of the request"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to add new invoices"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/invoices/{invoiceId}",
    "method": "archiveInvoice",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Archive invoice",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "The invoice to remove",
        "example": "INVOICEID"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store the invoice belongs to",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The invoice has been archived"
      },
      {
        "statusCode": "400",
        "description": "An array of validation errors of the request"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to archive the specified invoice"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this invoice"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/invoices/{invoiceId}",
    "method": "getInvoice",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Get invoice",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "The invoice to fetch",
        "example": "INVOICEID"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified invoice"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this invoice"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/invoices/{invoiceId}",
    "method": "updateInvoice",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Update invoice",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "The invoice to update",
        "example": "INVOICEID"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store the invoice belongs to",
        "example": "STOREID"
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": "",
        "example": {
          "orderId": "pos-app_346KRC5BjXXXo8cRFKwTBmdR6ZJ4",
          "orderUrl": "https://localhost:14142/apps/346KRC5BjXXXo8cRFKwTBmdR6ZJ4/pos",
          "itemDesc": "Tea shop",
          "posData": {
            "tip": 0.48,
            "cart": [
              {
                "title": "Pu Erh",
                "id": "pu erh",
                "count": 1,
                "image": "~/img/pos-sample/pu-erh.jpg",
                "price": {
                  "type": 2,
                  "value": 2,
                  "formatted": "$2.00"
                },
                "inventory": null
              },
              {
                "title": "Rooibos",
                "id": "rooibos",
                "count": 1,
                "image": "~/img/pos-sample/rooibos.jpg",
                "price": {
                  "type": 2,
                  "value": 1.2,
                  "formatted": "$1.20"
                },
                "inventory": null
              }
            ],
            "total": 3.68,
            "subTotal": 3.2,
            "customAmount": 0,
            "discountAmount": 0,
            "discountPercentage": 0
          },
          "receiptData": {
            "Tip": "$0.48",
            "Cart": {
              "Pu Erh": "$2.00 x 1 = $2.00",
              "Rooibos": "$1.20 x 1 = $1.20"
            }
          }
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of validation errors of the request"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to update the specified invoice"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this invoice"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/invoices/{invoiceId}/payment-methods",
    "method": "getInvoicePaymentMethods",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Get invoice payment methods",
    "parameters": [
      {
        "name": "onlyAccountedPayments",
        "schema": "boolean",
        "required": false,
        "description": "If default or true, only returns payments which are accounted (in Bitcoin, this mean not returning RBF'd or double spent payments)",
        "default": true
      },
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "The invoice to fetch",
        "example": "INVOICEID"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified invoice"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this invoice"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/invoices/{invoiceId}/status",
    "method": "markInvoiceStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Mark invoice status",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "The invoice to update",
        "example": "INVOICEID"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to query",
        "example": "STOREID"
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of validation errors of the request"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to update the invoice"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/invoices/{invoiceId}/unarchive",
    "method": "unarchiveInvoice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Unarchive invoice",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "The invoice to update",
        "example": "INVOICEID"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to query",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of validation errors of the request"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to update the invoice"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/invoices/{invoiceId}/payment-methods/{paymentMethod}/activate",
    "method": "activatePaymentMethod",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Activate Payment Method",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "The invoice to update",
        "example": "INVOICEID"
      },
      {
        "name": "paymentMethod",
        "schema": "string",
        "required": true,
        "description": "The payment method to activate",
        "example": "PAYMENTMETHOD"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to query",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of validation errors of the request"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to activate the invoice payment method"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/invoices/{invoiceId}/refund",
    "method": "refund",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Refund invoice",
    "parameters": [
      {
        "name": "invoiceId",
        "schema": "string",
        "required": true,
        "description": "The invoice to refund",
        "example": "INVOICEID"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to query",
        "example": "STOREID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentMethod",
        "schema": "string",
        "description": ""
      },
      {
        "name": "refundVariant",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subtractPercentage",
        "schema": "string",
        "description": "",
        "example": "2.1"
      },
      {
        "name": "customAmount",
        "schema": "string",
        "description": "",
        "example": "5.00"
      },
      {
        "name": "customCurrency",
        "schema": "string",
        "description": "",
        "example": "USD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of validation errors of the request"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to refund the invoice"
      }
    ]
  },
  {
    "url": "/api/v1/server/lightning/{cryptoCode}/info",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lightning (Internal Node)",
    "typeScriptTag": "lightningInternalNode",
    "description": "Get node information",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The cryptoCode of the lightning-node to query",
        "example": "BTC"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The lightning node configuration was not found"
      },
      {
        "statusCode": "503",
        "description": "Unable to access the lightning node"
      }
    ]
  },
  {
    "url": "/api/v1/server/lightning/{cryptoCode}/balance",
    "method": "getBalance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lightning (Internal Node)",
    "typeScriptTag": "lightningInternalNode",
    "description": "Get node balance",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The cryptoCode of the lightning-node to query",
        "example": "BTC"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The lightning node configuration was not found"
      },
      {
        "statusCode": "503",
        "description": "Unable to access the lightning node"
      }
    ]
  },
  {
    "url": "/api/v1/server/lightning/{cryptoCode}/connect",
    "method": "connectToNode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Lightning (Internal Node)",
    "typeScriptTag": "lightningInternalNode",
    "description": "Connect to lightning node",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The cryptoCode of the lightning-node to query",
        "example": "BTC"
      },
      {
        "name": "nodeURI",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successfully connected"
      },
      {
        "statusCode": "400",
        "description": "Description of an error happening during processing of the request"
      },
      {
        "statusCode": "404",
        "description": "The lightning node configuration was not found"
      },
      {
        "statusCode": "422",
        "description": "An array of validation errors of the request"
      },
      {
        "statusCode": "503",
        "description": "Unable to access the lightning node"
      }
    ]
  },
  {
    "url": "/api/v1/server/lightning/{cryptoCode}/channels",
    "method": "getChannels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lightning (Internal Node)",
    "typeScriptTag": "lightningInternalNode",
    "description": "Get channels",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The cryptoCode of the lightning-node to query",
        "example": "BTC"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The lightning node configuration was not found"
      }
    ]
  },
  {
    "url": "/api/v1/server/lightning/{cryptoCode}/channels",
    "method": "openChannel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Lightning (Internal Node)",
    "typeScriptTag": "lightningInternalNode",
    "description": "Open channel",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The cryptoCode of the lightning-node to query",
        "example": "BTC"
      },
      {
        "name": "nodeURI",
        "schema": "string",
        "description": ""
      },
      {
        "name": "channelAmount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "feeRate",
        "schema": "number",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successfully opened"
      },
      {
        "statusCode": "400",
        "description": "Description of an error happening during processing of the request"
      },
      {
        "statusCode": "404",
        "description": "The lightning node configuration was not found"
      },
      {
        "statusCode": "422",
        "description": "An array of validation errors of the request"
      }
    ]
  },
  {
    "url": "/api/v1/server/lightning/{cryptoCode}/address",
    "method": "getDepositAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Lightning (Internal Node)",
    "typeScriptTag": "lightningInternalNode",
    "description": "Get deposit address",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The cryptoCode of the lightning-node to query",
        "example": "BTC"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A bitcoin address belonging to the lightning node"
      },
      {
        "statusCode": "404",
        "description": "The lightning node configuration was not found"
      },
      {
        "statusCode": "503",
        "description": "Unable to access the lightning node"
      }
    ]
  },
  {
    "url": "/api/v1/server/lightning/{cryptoCode}/payments/{paymentHash}",
    "method": "getPayment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lightning (Internal Node)",
    "typeScriptTag": "lightningInternalNode",
    "description": "Get payment",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The cryptoCode of the lightning-node to query",
        "example": "BTC"
      },
      {
        "name": "paymentHash",
        "schema": "string",
        "required": true,
        "description": "The payment hash of the lightning payment.",
        "example": "PAYMENTHASH"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The lightning node configuration or the specified invoice was not found "
      },
      {
        "statusCode": "503",
        "description": "Unable to access the lightning node"
      }
    ]
  },
  {
    "url": "/api/v1/server/lightning/{cryptoCode}/invoices/{id}",
    "method": "getInvoice",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lightning (Internal Node)",
    "typeScriptTag": "lightningInternalNode",
    "description": "Get invoice",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The cryptoCode of the lightning-node to query",
        "example": "BTC"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the lightning invoice.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The lightning node configuration or the specified invoice was not found "
      },
      {
        "statusCode": "503",
        "description": "Unable to access the lightning node"
      }
    ]
  },
  {
    "url": "/api/v1/server/lightning/{cryptoCode}/invoices/pay",
    "method": "payInvoice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Lightning (Internal Node)",
    "typeScriptTag": "lightningInternalNode",
    "description": "Pay Lightning Invoice",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The cryptoCode of the lightning-node to query",
        "example": "BTC"
      },
      {
        "name": "BOLT11",
        "schema": "string",
        "description": ""
      },
      {
        "name": "amount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "maxFeePercent",
        "schema": "string",
        "description": "",
        "example": "6.15"
      },
      {
        "name": "maxFeeFlat",
        "schema": "string",
        "description": "",
        "example": "21"
      },
      {
        "name": "sendTimeout",
        "schema": "undefined",
        "description": "",
        "example": 30,
        "default": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Description of an error happening during processing of the request"
      },
      {
        "statusCode": "404",
        "description": "The lightning node configuration was not found"
      },
      {
        "statusCode": "422",
        "description": "An array of validation errors of the request"
      },
      {
        "statusCode": "503",
        "description": "Unable to access the lightning node"
      }
    ]
  },
  {
    "url": "/api/v1/server/lightning/{cryptoCode}/invoices",
    "method": "getInvoices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lightning (Internal Node)",
    "typeScriptTag": "lightningInternalNode",
    "description": "Get invoices",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The cryptoCode of the lightning-node to query",
        "example": "BTC"
      },
      {
        "name": "pendingOnly",
        "schema": "boolean",
        "required": false,
        "description": "Limit to pending invoices only",
        "default": false
      },
      {
        "name": "offsetIndex",
        "schema": "number",
        "required": false,
        "description": "The index of an invoice that will be used as the start of the list",
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Description of an error happening during processing of the request"
      },
      {
        "statusCode": "503",
        "description": "Unable to access the lightning node"
      },
      {
        "statusCode": "default",
        "description": "Description of an error happening during processing of the request"
      }
    ]
  },
  {
    "url": "/api/v1/server/lightning/{cryptoCode}/invoices",
    "method": "createInvoice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Lightning (Internal Node)",
    "typeScriptTag": "lightningInternalNode",
    "description": "Create lightning invoice",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The cryptoCode of the lightning-node to query",
        "example": "BTC"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "amount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "descriptionHashOnly",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "expiry",
        "schema": "number",
        "description": "",
        "example": 90
      },
      {
        "name": "privateRouteHints",
        "schema": "boolean",
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Description of an error happening during processing of the request"
      },
      {
        "statusCode": "404",
        "description": "The lightning node configuration was not found"
      },
      {
        "statusCode": "503",
        "description": "Unable to access the lightning node"
      }
    ]
  },
  {
    "url": "/api/v1/server/lightning/{cryptoCode}/payments",
    "method": "getPayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lightning (Internal Node)",
    "typeScriptTag": "lightningInternalNode",
    "description": "Get payments",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The cryptoCode of the lightning-node to query",
        "example": "BTC"
      },
      {
        "name": "includePending",
        "schema": "boolean",
        "required": false,
        "description": "Also include pending payments",
        "default": false
      },
      {
        "name": "offsetIndex",
        "schema": "number",
        "required": false,
        "description": "The index of a payment that will be used as the start of the list",
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Description of an error happening during processing of the request"
      },
      {
        "statusCode": "503",
        "description": "Unable to access the lightning node"
      },
      {
        "statusCode": "default",
        "description": "Description of an error happening during processing of the request"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/lightning/{cryptoCode}/info",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lightning (https://docs.btcpayserver.org/",
    "typeScriptTag": "lightningHttps:DocsBtcpayserverOrg",
    "description": "Get node information",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The cryptoCode of the lightning-node to query",
        "example": "BTC"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store id with the lightning-node configuration to query",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The lightning node configuration was not found"
      },
      {
        "statusCode": "503",
        "description": "Unable to access the lightning node"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/lightning/{cryptoCode}/balance",
    "method": "getBalance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lightning (https://docs.btcpayserver.org/",
    "typeScriptTag": "lightningHttps:DocsBtcpayserverOrg",
    "description": "Get node balance",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The cryptoCode of the lightning-node to query",
        "example": "BTC"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store id with the lightning-node configuration to query",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The lightning node configuration was not found"
      },
      {
        "statusCode": "503",
        "description": "Unable to access the lightning node"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/lightning/{cryptoCode}/connect",
    "method": "connectToNode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Lightning (https://docs.btcpayserver.org/",
    "typeScriptTag": "lightningHttps:DocsBtcpayserverOrg",
    "description": "Connect to lightning node",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The cryptoCode of the lightning-node to query",
        "example": "BTC"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store id with the lightning-node configuration to query",
        "example": "STOREID"
      },
      {
        "name": "nodeURI",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successfully connected"
      },
      {
        "statusCode": "400",
        "description": "Description of an error happening during processing of the request"
      },
      {
        "statusCode": "404",
        "description": "The lightning node configuration was not found"
      },
      {
        "statusCode": "422",
        "description": "An array of validation errors of the request"
      },
      {
        "statusCode": "503",
        "description": "Unable to access the lightning node"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/lightning/{cryptoCode}/channels",
    "method": "getChannels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lightning (https://docs.btcpayserver.org/",
    "typeScriptTag": "lightningHttps:DocsBtcpayserverOrg",
    "description": "Get channels",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The cryptoCode of the lightning-node to query",
        "example": "BTC"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store id with the lightning-node configuration to query",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The lightning node configuration was not found"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/lightning/{cryptoCode}/channels",
    "method": "openChannel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Lightning (https://docs.btcpayserver.org/",
    "typeScriptTag": "lightningHttps:DocsBtcpayserverOrg",
    "description": "Open channel",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The cryptoCode of the lightning-node to query",
        "example": "BTC"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store id with the lightning-node configuration to query",
        "example": "STOREID"
      },
      {
        "name": "nodeURI",
        "schema": "string",
        "description": ""
      },
      {
        "name": "channelAmount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "feeRate",
        "schema": "number",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successfully opened"
      },
      {
        "statusCode": "400",
        "description": "Description of an error happening during processing of the request"
      },
      {
        "statusCode": "404",
        "description": "The lightning node configuration was not found"
      },
      {
        "statusCode": "422",
        "description": "An array of validation errors of the request"
      },
      {
        "statusCode": "503",
        "description": "Unable to access the lightning node"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/lightning/{cryptoCode}/address",
    "method": "getDepositAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Lightning (https://docs.btcpayserver.org/",
    "typeScriptTag": "lightningHttps:DocsBtcpayserverOrg",
    "description": "Get deposit address",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The cryptoCode of the lightning-node to query",
        "example": "BTC"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store id with the lightning-node configuration to query",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The lightning node configuration was not found"
      },
      {
        "statusCode": "503",
        "description": "Unable to access the lightning node"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/lightning/{cryptoCode}/payments/{paymentHash}",
    "method": "getPayment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lightning (https://docs.btcpayserver.org/",
    "typeScriptTag": "lightningHttps:DocsBtcpayserverOrg",
    "description": "Get payment",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The cryptoCode of the lightning-node to query",
        "example": "BTC"
      },
      {
        "name": "paymentHash",
        "schema": "string",
        "required": true,
        "description": "The payment hash of the lightning payment.",
        "example": "PAYMENTHASH"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store id with the lightning-node configuration to query",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The lightning node configuration or the specified invoice was not found "
      },
      {
        "statusCode": "503",
        "description": "Unable to access the lightning node"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/lightning/{cryptoCode}/invoices/{id}",
    "method": "getInvoice",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lightning (https://docs.btcpayserver.org/",
    "typeScriptTag": "lightningHttps:DocsBtcpayserverOrg",
    "description": "Get invoice",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The cryptoCode of the lightning-node to query",
        "example": "BTC"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the lightning invoice.",
        "example": "ID"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store id with the lightning-node configuration to query",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The lightning node configuration or the specified invoice was not found "
      },
      {
        "statusCode": "503",
        "description": "Unable to access the lightning node"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/lightning/{cryptoCode}/invoices/pay",
    "method": "payInvoice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Lightning (https://docs.btcpayserver.org/",
    "typeScriptTag": "lightningHttps:DocsBtcpayserverOrg",
    "description": "Pay Lightning Invoice",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The cryptoCode of the lightning-node to query",
        "example": "BTC"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store id with the lightning-node configuration to query",
        "example": "STOREID"
      },
      {
        "name": "BOLT11",
        "schema": "string",
        "description": ""
      },
      {
        "name": "amount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "maxFeePercent",
        "schema": "string",
        "description": "",
        "example": "6.15"
      },
      {
        "name": "maxFeeFlat",
        "schema": "string",
        "description": "",
        "example": "21"
      },
      {
        "name": "sendTimeout",
        "schema": "undefined",
        "description": "",
        "example": 30,
        "default": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Description of an error happening during processing of the request"
      },
      {
        "statusCode": "404",
        "description": "The lightning node configuration was not found"
      },
      {
        "statusCode": "422",
        "description": "An array of validation errors of the request"
      },
      {
        "statusCode": "503",
        "description": "Unable to access the lightning node"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/lightning/{cryptoCode}/invoices",
    "method": "getInvoices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lightning (https://docs.btcpayserver.org/",
    "typeScriptTag": "lightningHttps:DocsBtcpayserverOrg",
    "description": "Get invoices",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The cryptoCode of the lightning-node to query",
        "example": "BTC"
      },
      {
        "name": "pendingOnly",
        "schema": "boolean",
        "required": false,
        "description": "Limit to pending invoices only",
        "default": false
      },
      {
        "name": "offsetIndex",
        "schema": "number",
        "required": false,
        "description": "The index of an invoice that will be used as the start of the list",
        "default": 0
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store id with the lightning-node configuration to query",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Description of an error happening during processing of the request"
      },
      {
        "statusCode": "503",
        "description": "Unable to access the lightning node"
      },
      {
        "statusCode": "default",
        "description": "Description of an error happening during processing of the request"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/lightning/{cryptoCode}/invoices",
    "method": "createInvoice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Lightning (https://docs.btcpayserver.org/",
    "typeScriptTag": "lightningHttps:DocsBtcpayserverOrg",
    "description": "Create lightning invoice",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The cryptoCode of the lightning-node to query",
        "example": "BTC"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store id with the lightning-node configuration to query",
        "example": "STOREID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "amount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "descriptionHashOnly",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "expiry",
        "schema": "number",
        "description": "",
        "example": 90
      },
      {
        "name": "privateRouteHints",
        "schema": "boolean",
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Description of an error happening during processing of the request"
      },
      {
        "statusCode": "404",
        "description": "The lightning node configuration was not found"
      },
      {
        "statusCode": "503",
        "description": "Unable to access the lightning node"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/lightning/{cryptoCode}/payments",
    "method": "getPayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lightning (https://docs.btcpayserver.org/",
    "typeScriptTag": "lightningHttps:DocsBtcpayserverOrg",
    "description": "Get payments",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The cryptoCode of the lightning-node to query",
        "example": "BTC"
      },
      {
        "name": "includePending",
        "schema": "boolean",
        "required": false,
        "description": "Also include pending payments",
        "default": false
      },
      {
        "name": "offsetIndex",
        "schema": "number",
        "required": false,
        "description": "The index of an invoice that will be used as the start of the list",
        "default": 0
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store id with the lightning-node configuration to query",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Description of an error happening during processing of the request"
      },
      {
        "statusCode": "503",
        "description": "Unable to access the lightning node"
      },
      {
        "statusCode": "default",
        "description": "Description of an error happening during processing of the request"
      }
    ]
  },
  {
    "url": "/misc/rate-sources",
    "method": "listRateSources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Miscelleneous",
    "typeScriptTag": "miscelleneous",
    "description": "Get available rate sources",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Description of an error happening during processing of the request"
      }
    ]
  },
  {
    "url": "/misc/permissions",
    "method": "listPermissionsMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Miscelleneous",
    "typeScriptTag": "miscelleneous",
    "description": "Permissions metadata",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Description of an error happening during processing of the request"
      }
    ]
  },
  {
    "url": "/misc/lang",
    "method": "getSupportedLangCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Miscelleneous",
    "typeScriptTag": "miscelleneous",
    "description": "Language codes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Description of an error happening during processing of the request"
      }
    ]
  },
  {
    "url": "/i/{invoiceId}",
    "method": "checkout",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Miscelleneous",
    "typeScriptTag": "miscelleneous",
    "description": "Invoice checkout",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/users/me/notifications",
    "method": "getNotifications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notifications (Current User)",
    "typeScriptTag": "notificationsCurrentUser",
    "description": "Get notifications",
    "parameters": [
      {
        "name": "take",
        "schema": "number",
        "required": false,
        "description": "Number of records returned in response"
      },
      {
        "name": "skip",
        "schema": "number",
        "required": false,
        "description": "Number of records to skip"
      },
      {
        "name": "seen",
        "schema": "string",
        "required": false,
        "description": "filter by seen notifications"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/users/me/notifications/{id}",
    "method": "deleteNotification",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Notifications (Current User)",
    "typeScriptTag": "notificationsCurrentUser",
    "description": "Remove Notification",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The notification to remove",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The notification has been deleted"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to remove the specified notification"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this notification"
      }
    ]
  },
  {
    "url": "/api/v1/users/me/notifications/{id}",
    "method": "getNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notifications (Current User)",
    "typeScriptTag": "notificationsCurrentUser",
    "description": "Get notification",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The notification to fetch",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified notification"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this notification"
      }
    ]
  },
  {
    "url": "/api/v1/users/me/notifications/{id}",
    "method": "updateNotification",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Notifications (Current User)",
    "typeScriptTag": "notificationsCurrentUser",
    "description": "Update notification",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The notification to update",
        "example": "ID"
      },
      {
        "name": "seen",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to update the specified notification"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this notification"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-requests",
    "method": "getPaymentRequests",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payment Requests",
    "typeScriptTag": "paymentRequests",
    "description": "Get payment requests",
    "parameters": [
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to query",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Description of an error happening during processing of the request"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-requests",
    "method": "createPaymentRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment Requests",
    "typeScriptTag": "paymentRequests",
    "description": "Create a new payment request",
    "parameters": [
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to query",
        "example": "STOREID"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "amount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expiryDate",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "embeddedCSS",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customCSSLink",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowCustomPaymentAmounts",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "formId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "formResponse",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of validation errors of the request"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to add new payment requests"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-requests/{paymentRequestId}",
    "method": "archivePaymentRequest",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Payment Requests",
    "typeScriptTag": "paymentRequests",
    "description": "Archive payment request",
    "parameters": [
      {
        "name": "paymentRequestId",
        "schema": "string",
        "required": true,
        "description": "The payment request to remove",
        "example": "PAYMENTREQUESTID"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store the payment request belongs to",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The payment request has been archived"
      },
      {
        "statusCode": "400",
        "description": "An array of validation errors of the request"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to archive the specified payment request"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this payment request"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-requests/{paymentRequestId}",
    "method": "getPaymentRequest",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payment Requests",
    "typeScriptTag": "paymentRequests",
    "description": "Get payment request",
    "parameters": [
      {
        "name": "paymentRequestId",
        "schema": "string",
        "required": true,
        "description": "The payment request to fetch",
        "example": "PAYMENTREQUESTID"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified payment request"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this payment request"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-requests/{paymentRequestId}",
    "method": "updatePaymentRequest",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Payment Requests",
    "typeScriptTag": "paymentRequests",
    "description": "Update payment request",
    "parameters": [
      {
        "name": "paymentRequestId",
        "schema": "string",
        "required": true,
        "description": "The payment request to update",
        "example": "PAYMENTREQUESTID"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to query",
        "example": "STOREID"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "amount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expiryDate",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "embeddedCSS",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customCSSLink",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowCustomPaymentAmounts",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "formId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "formResponse",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of validation errors of the request"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to update the payment request"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-requests/{paymentRequestId}/pay",
    "method": "pay",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment Requests",
    "typeScriptTag": "paymentRequests",
    "description": "Create a new invoice for the payment request",
    "parameters": [
      {
        "name": "paymentRequestId",
        "schema": "string",
        "required": true,
        "description": "The payment request to create",
        "example": "PAYMENTREQUESTID"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      },
      {
        "name": "amount",
        "schema": "string",
        "description": "",
        "example": "0.1"
      },
      {
        "name": "allowPendingInvoiceReuse",
        "schema": "boolean",
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Description of an error happening during processing of the request"
      },
      {
        "statusCode": "422",
        "description": "An array of validation errors of the request"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payout-processors",
    "method": "getStorePayoutProcessors",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stores (Payout Processors)",
    "typeScriptTag": "storesPayoutProcessors",
    "description": "Get store configured payout processors",
    "parameters": [
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payout-processors/{processor}/{paymentMethod}",
    "method": "removeStorePayoutProcessor",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Stores (Payout Processors)",
    "typeScriptTag": "storesPayoutProcessors",
    "description": "Remove store configured payout processor",
    "parameters": [
      {
        "name": "paymentMethod",
        "schema": "string",
        "required": true,
        "description": "The payment method",
        "example": "PAYMENTMETHOD"
      },
      {
        "name": "processor",
        "schema": "string",
        "required": true,
        "description": "The processor",
        "example": "PROCESSOR"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "removed"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store"
      }
    ]
  },
  {
    "url": "/api/v1/payout-processors",
    "method": "getPayoutProcessors",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payout Processors",
    "typeScriptTag": "payoutProcessors",
    "description": "Get payout processors",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payout-processors/OnChainAutomatedPayoutSenderFactory/{paymentMethod}",
    "method": "getStoreOnChainAutomatedPayoutProcessorsForPaymentMethod",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stores (Payout Processors)",
    "typeScriptTag": "storesPayoutProcessors",
    "description": "Get configured store onchain automated payout processors",
    "parameters": [
      {
        "name": "paymentMethod",
        "schema": "string",
        "required": true,
        "description": "A specific payment method to fetch",
        "example": "PAYMENTMETHOD"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payout-processors/OnChainAutomatedPayoutSenderFactory/{paymentMethod}",
    "method": "updateStoreOnChainAutomatedPayoutProcessorForPaymentMethod",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Stores (Payout Processors)",
    "typeScriptTag": "storesPayoutProcessors",
    "description": "Update configured store onchain automated payout processors",
    "parameters": [
      {
        "name": "paymentMethod",
        "schema": "string",
        "required": true,
        "description": "A specific payment method to fetch",
        "example": "PAYMENTMETHOD"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      },
      {
        "name": "feeTargetBlock",
        "schema": "number",
        "description": ""
      },
      {
        "name": "intervalSeconds",
        "schema": "number",
        "description": "",
        "example": 90
      },
      {
        "name": "threshold",
        "schema": "string",
        "description": "",
        "example": "0.1"
      },
      {
        "name": "processNewPayoutsInstantly",
        "schema": "boolean",
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payout-processors/LightningAutomatedPayoutSenderFactory/{paymentMethod}",
    "method": "getStoreLightningAutomatedPayoutProcessorsForPaymentMethod",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stores (Payout Processors)",
    "typeScriptTag": "storesPayoutProcessors",
    "description": "Get configured store Lightning automated payout processors",
    "parameters": [
      {
        "name": "paymentMethod",
        "schema": "string",
        "required": true,
        "description": "A specific payment method to fetch",
        "example": "PAYMENTMETHOD"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payout-processors/LightningAutomatedPayoutSenderFactory/{paymentMethod}",
    "method": "updateStoreLightningAutomatedPayoutProcessor",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Stores (Payout Processors)",
    "typeScriptTag": "storesPayoutProcessors",
    "description": "Update configured store Lightning automated payout processors",
    "parameters": [
      {
        "name": "paymentMethod",
        "schema": "string",
        "required": true,
        "description": "A specific payment method to fetch",
        "example": "PAYMENTMETHOD"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      },
      {
        "name": "intervalSeconds",
        "schema": "number",
        "description": "",
        "example": 90
      },
      {
        "name": "cancelPayoutAfterFailures",
        "schema": "number",
        "description": ""
      },
      {
        "name": "processNewPayoutsInstantly",
        "schema": "boolean",
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payout-processors/OnChainAutomatedTransferSenderFactory",
    "method": "getStoreOnChainAutomatedTransferSenderFactory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stores (Payout Processors)",
    "typeScriptTag": "storesPayoutProcessors",
    "description": "Get configured store onchain automated payout processors",
    "parameters": [
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payout-processors/OnChainAutomatedTransferSenderFactory",
    "method": "updateStoreOnChainAutomatedTransferSenderFactory",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Stores (Payout Processors)",
    "typeScriptTag": "storesPayoutProcessors",
    "description": "Update configured store onchain automated payout processors",
    "parameters": [
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      },
      {
        "name": "feeTargetBlock",
        "schema": "number",
        "description": ""
      },
      {
        "name": "intervalSeconds",
        "schema": "number",
        "description": "",
        "example": 90
      },
      {
        "name": "threshold",
        "schema": "string",
        "description": "",
        "example": "0.1"
      },
      {
        "name": "processNewPayoutsInstantly",
        "schema": "boolean",
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payout-processors/LightningAutomatedPayoutSenderFactory",
    "method": "getStoreLightningAutomatedPayoutSenderFactory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stores (Payout Processors)",
    "typeScriptTag": "storesPayoutProcessors",
    "description": "Get configured store Lightning automated payout processors",
    "parameters": [
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store"
      }
    ]
  },
  {
    "url": "/api/v1/pull-payments/{pullPaymentId}/boltcards",
    "method": "linkBoltcard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pull payments (https://docs.btcpayserver.org/",
    "typeScriptTag": "pullPaymentsHttps:DocsBtcpayserverOrg",
    "description": "Link a boltcard to a pull payment",
    "parameters": [
      {
        "name": "UID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "46ab87ff36a3b7"
      },
      {
        "name": "onExisting",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "UpdateVersion"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Description of an error happening during processing of the request"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/pull-payments",
    "method": "getPullPayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pull payments (https://docs.btcpayserver.org/",
    "typeScriptTag": "pullPaymentsHttps:DocsBtcpayserverOrg",
    "description": "Get store's pull payments",
    "parameters": [
      {
        "name": "includeArchived",
        "schema": "boolean",
        "required": false,
        "description": "Whether this should list archived pull payments",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/pull-payments",
    "method": "createPullPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pull payments (https://docs.btcpayserver.org/",
    "typeScriptTag": "pullPaymentsHttps:DocsBtcpayserverOrg",
    "description": "Create a new pull payment",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "amount",
        "schema": "string",
        "description": "",
        "example": "0.1"
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "BTC"
      },
      {
        "name": "period",
        "schema": "integer",
        "description": "",
        "example": 604800
      },
      {
        "name": "BOLT11Expiration",
        "schema": "string",
        "description": "",
        "example": 30,
        "default": 30
      },
      {
        "name": "autoApproveClaims",
        "schema": "boolean",
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "startsAt",
        "schema": "integer",
        "description": "",
        "example": 1592312018
      },
      {
        "name": "expiresAt",
        "schema": "integer",
        "description": "",
        "example": 1593129600
      },
      {
        "name": "paymentMethods",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "An array of validation errors of the request"
      }
    ]
  },
  {
    "url": "/api/v1/pull-payments/{pullPaymentId}",
    "method": "getPullPayment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pull payments (https://docs.btcpayserver.org/",
    "typeScriptTag": "pullPaymentsHttps:DocsBtcpayserverOrg",
    "description": "Get Pull Payment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Pull payment not found"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/pull-payments/{pullPaymentId}",
    "method": "archivePullPayment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Pull payments (https://docs.btcpayserver.org/",
    "typeScriptTag": "pullPaymentsHttps:DocsBtcpayserverOrg",
    "description": "Archive a pull payment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The pull payment has been archived"
      },
      {
        "statusCode": "404",
        "description": "The pull payment has not been found, or does not belong to this store"
      }
    ]
  },
  {
    "url": "/api/v1/pull-payments/{pullPaymentId}/payouts",
    "method": "getPayouts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pull payments (https://docs.btcpayserver.org/",
    "typeScriptTag": "pullPaymentsHttps:DocsBtcpayserverOrg",
    "description": "Get Payouts",
    "parameters": [
      {
        "name": "includeCancelled",
        "schema": "boolean",
        "required": false,
        "description": "Whether this should list cancelled payouts",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Pull payment not found"
      }
    ]
  },
  {
    "url": "/api/v1/pull-payments/{pullPaymentId}/payouts",
    "method": "createPayout",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pull payments (https://docs.btcpayserver.org/",
    "typeScriptTag": "pullPaymentsHttps:DocsBtcpayserverOrg",
    "description": "Create Payout",
    "parameters": [
      {
        "name": "destination",
        "schema": "string",
        "description": "",
        "example": "1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2"
      },
      {
        "name": "amount",
        "schema": "string",
        "description": "",
        "example": "10399.18"
      },
      {
        "name": "paymentMethod",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Description of an error happening during processing of the request"
      },
      {
        "statusCode": "404",
        "description": "Pull payment not found"
      },
      {
        "statusCode": "422",
        "description": "An array of validation errors of the request"
      }
    ]
  },
  {
    "url": "/api/v1/pull-payments/{pullPaymentId}/payouts/{payoutId}",
    "method": "getPayout",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pull payments (https://docs.btcpayserver.org/",
    "typeScriptTag": "pullPaymentsHttps:DocsBtcpayserverOrg",
    "description": "Get Payout",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Pull payment payout not found"
      }
    ]
  },
  {
    "url": "/api/v1/pull-payments/{pullPaymentId}/lnurl",
    "method": "getPullPaymentLnurl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pull payments (https://docs.btcpayserver.org/",
    "typeScriptTag": "pullPaymentsHttps:DocsBtcpayserverOrg",
    "description": "Get Pull Payment LNURL details",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Pull payment found but does not support LNURL"
      },
      {
        "statusCode": "404",
        "description": "Pull payment not found"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payouts",
    "method": "getStorePayouts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stores (https://docs.btcpayserver.org/",
    "typeScriptTag": "storesHttps:DocsBtcpayserverOrg",
    "description": "Get Store Payouts",
    "parameters": [
      {
        "name": "includeCancelled",
        "schema": "boolean",
        "required": false,
        "description": "Whether this should list cancelled payouts",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Pull payment not found"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payouts",
    "method": "createPayoutThroughStore",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Stores (https://docs.btcpayserver.org/",
    "typeScriptTag": "storesHttps:DocsBtcpayserverOrg",
    "description": "Create Payout",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Description of an error happening during processing of the request"
      },
      {
        "statusCode": "404",
        "description": "store not found"
      },
      {
        "statusCode": "422",
        "description": "An array of validation errors of the request"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payouts/{payoutId}",
    "method": "cancelPayout",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Stores (https://docs.btcpayserver.org/",
    "typeScriptTag": "storesHttps:DocsBtcpayserverOrg",
    "description": "Cancel Payout",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The payout has been cancelled"
      },
      {
        "statusCode": "404",
        "description": "The payout is not found"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payouts/{payoutId}",
    "method": "getPayout",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stores (https://docs.btcpayserver.org/",
    "typeScriptTag": "storesHttps:DocsBtcpayserverOrg",
    "description": "Get Payout",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Payout not found"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payouts/{payoutId}",
    "method": "approvePayout",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Stores (https://docs.btcpayserver.org/",
    "typeScriptTag": "storesHttps:DocsBtcpayserverOrg",
    "description": "Approve Payout",
    "parameters": [
      {
        "name": "revision",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "rateRule",
        "schema": "string",
        "description": "",
        "example": "kraken(https://docs.btcpayserver.org/"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Description of an error happening during processing of the request"
      },
      {
        "statusCode": "404",
        "description": "The payout is not found"
      },
      {
        "statusCode": "422",
        "description": "An array of validation errors of the request"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payouts/{payoutId}/mark-paid",
    "method": "markPayoutPaid",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Stores (https://docs.btcpayserver.org/",
    "typeScriptTag": "storesHttps:DocsBtcpayserverOrg",
    "description": "Mark Payout as Paid",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The payout has been marked paid, transitioning to `Completed` state."
      },
      {
        "statusCode": "400",
        "description": "Description of an error happening during processing of the request"
      },
      {
        "statusCode": "404",
        "description": "The payout is not found"
      },
      {
        "statusCode": "422",
        "description": "An array of validation errors of the request"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payouts/{payoutId}/mark",
    "method": "markPayout",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Stores (https://docs.btcpayserver.org/",
    "typeScriptTag": "storesHttps:DocsBtcpayserverOrg",
    "description": "Mark Payout",
    "parameters": [
      {
        "name": "state",
        "schema": "string",
        "description": "",
        "example": "AwaitingPayment"
      },
      {
        "name": "paymentProof",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The payout has been set to the specified state"
      },
      {
        "statusCode": "400",
        "description": "Description of an error happening during processing of the request"
      },
      {
        "statusCode": "404",
        "description": "The payout is not found"
      },
      {
        "statusCode": "422",
        "description": "An array of validation errors of the request"
      }
    ]
  },
  {
    "url": "/api/v1/server/info",
    "method": "getServerInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ServerInfo",
    "typeScriptTag": "serverInfo",
    "description": "Get server info",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Description of an error happening during processing of the request"
      },
      {
        "statusCode": "default",
        "description": "Description of an error happening during processing of the request"
      }
    ]
  },
  {
    "url": "/api/v1/server/roles",
    "method": "getStoreRoles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ServerInfo",
    "typeScriptTag": "serverInfo",
    "description": "Get store's roles",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to get the store's roles"
      },
      {
        "statusCode": "404",
        "description": "Store not found"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/email",
    "method": "getStoreEmailSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stores (https://docs.btcpayserver.org/",
    "typeScriptTag": "storesHttps:DocsBtcpayserverOrg",
    "description": "Get store email settings",
    "parameters": [
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/email",
    "method": "updateStoreEmailSettings",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Stores (https://docs.btcpayserver.org/",
    "typeScriptTag": "storesHttps:DocsBtcpayserverOrg",
    "description": "Update store email settings",
    "parameters": [
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to update",
        "example": "STOREID"
      },
      {
        "name": "server",
        "schema": "string",
        "description": ""
      },
      {
        "name": "port",
        "schema": "number",
        "description": ""
      },
      {
        "name": "login",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "from",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromDisplay",
        "schema": "string",
        "description": ""
      },
      {
        "name": "disableCertificateCheck",
        "schema": "boolean",
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of validation errors of the request"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to modify the store"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/email/send",
    "method": "sendStoreEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Stores (https://docs.btcpayserver.org/",
    "typeScriptTag": "storesHttps:DocsBtcpayserverOrg",
    "description": "Send an email for a store",
    "parameters": [
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to send the email from",
        "example": "STOREID"
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The email was sent (https://docs.btcpayserver.org/ successfully"
      },
      {
        "statusCode": "400",
        "description": "The store's SMTP is not configured"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to add new stores"
      },
      {
        "statusCode": "404",
        "description": "The store was not found"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/lightning-addresses",
    "method": "getStoreLightningAddresses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lightning address",
    "typeScriptTag": "lightningAddress",
    "description": "Get store configured lightning addresses",
    "parameters": [
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store/wallet"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/lightning-addresses/{username}",
    "method": "removeStoreLightningAddress",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Lightning address",
    "typeScriptTag": "lightningAddress",
    "description": "Remove configured lightning address",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "The lightning address username",
        "example": "USERNAME"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Lightning address removed"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store/wallet"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/lightning-addresses/{username}",
    "method": "getStoreLightningAddress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lightning address",
    "typeScriptTag": "lightningAddress",
    "description": "Get store configured lightning address",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "The lightning address username",
        "example": "USERNAME"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store/wallet"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/lightning-addresses/{username}",
    "method": "addOrUpdateStoreLightningAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Lightning address",
    "typeScriptTag": "lightningAddress",
    "description": "Add or update store configured lightning address",
    "parameters": [
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      },
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "the lightning address username",
        "example": "USERNAME"
      },
      {
        "name": "username",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "min",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store/wallet"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-methods",
    "method": "getStorePaymentMethods",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Store Payment Methods",
    "typeScriptTag": "storePaymentMethods",
    "description": "Get store payment methods",
    "parameters": [
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": "Fetch payment methods that are enabled/disabled only"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Description of an error happening during processing of the request"
      },
      {
        "statusCode": "default",
        "description": "Description of an error happening during processing of the request"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-methods/LightningNetwork",
    "method": "getLightningNetworkPaymentMethods",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Store Payment Methods (Lightning Network)",
    "typeScriptTag": "storePaymentMethodsLightningNetwork",
    "description": "Get store Lightning Network payment methods",
    "parameters": [
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": "Fetch payment methods that are enabled/disabled only"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Description of an error happening during processing of the request"
      },
      {
        "statusCode": "default",
        "description": "Description of an error happening during processing of the request"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-methods/LightningNetwork/{cryptoCode}",
    "method": "deleteLightningNetworkPaymentMethod",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Store Payment Methods (Lightning Network)",
    "typeScriptTag": "storePaymentMethodsLightningNetwork",
    "description": "Remove store Lightning Network payment method",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The crypto code of the payment method to update",
        "example": "BTC"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The payment method has been removed"
      },
      {
        "statusCode": "400",
        "description": "An array of validation errors of the request"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to remove the specified payment method"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store/payment-method"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-methods/LightningNetwork/{cryptoCode}",
    "method": "getLightningNetworkPaymentMethod",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Store Payment Methods (Lightning Network)",
    "typeScriptTag": "storePaymentMethodsLightningNetwork",
    "description": "Get store Lightning Network payment method",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The crypto code of the payment method to fetch",
        "example": "BTC"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store/payment method"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-methods/LightningNetwork/{cryptoCode}",
    "method": "updateLightningNetworkPaymentMethod",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Store Payment Methods (Lightning Network)",
    "typeScriptTag": "storePaymentMethodsLightningNetwork",
    "description": "Update store Lightning Network payment method",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The crypto code of the payment method to update",
        "example": "BTC"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of validation errors of the request"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to update the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-methods/LNURL",
    "method": "getLnurlPayPaymentMethods",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Store Payment Methods (LNURL Pay)",
    "typeScriptTag": "storePaymentMethodsLnurlPay",
    "description": "Get store LNURL payment methods",
    "parameters": [
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": "Fetch payment methods that are enabled/disabled only"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Description of an error happening during processing of the request"
      },
      {
        "statusCode": "default",
        "description": "Description of an error happening during processing of the request"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-methods/LNURLPay/{cryptoCode}",
    "method": "deleteLnurlPayPaymentMethod",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Store Payment Methods (LNURL Pay)",
    "typeScriptTag": "storePaymentMethodsLnurlPay",
    "description": "Remove store LNURL Pay payment method",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The crypto code of the payment method to update",
        "example": "BTC"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The payment method has been removed"
      },
      {
        "statusCode": "400",
        "description": "An array of validation errors of the request"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to remove the specified payment method"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store/payment-method"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-methods/LNURLPay/{cryptoCode}",
    "method": "getLnurlPayPaymentMethod",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Store Payment Methods (LNURL Pay)",
    "typeScriptTag": "storePaymentMethodsLnurlPay",
    "description": "Get store LNURL Pay payment method",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The crypto code of the payment method to fetch",
        "example": "BTC"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Description of an error happening during processing of the request"
      },
      {
        "statusCode": "403",
        "description": "Description of an error happening during processing of the request"
      },
      {
        "statusCode": "404",
        "description": "Description of an error happening during processing of the request"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-methods/LNURLPay/{cryptoCode}",
    "method": "updateLnurlPayPaymentMethod",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Store Payment Methods (LNURL Pay)",
    "typeScriptTag": "storePaymentMethodsLnurlPay",
    "description": "Update store LNURL Pay payment method",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The crypto code of the payment method to update",
        "example": "BTC"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of validation errors of the request"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to update the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-methods/OnChain",
    "method": "getOnChainPaymentMethods",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Store Payment Methods (On Chain)",
    "typeScriptTag": "storePaymentMethodsOnChain",
    "description": "Get store on-chain payment methods",
    "parameters": [
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": "Fetch payment methods that are enabled/disabled only"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Description of an error happening during processing of the request"
      },
      {
        "statusCode": "default",
        "description": "Description of an error happening during processing of the request"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-methods/onchain/{cryptoCode}",
    "method": "deleteOnChainPaymentMethod",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Store Payment Methods (On Chain)",
    "typeScriptTag": "storePaymentMethodsOnChain",
    "description": "Remove store on-chain payment method",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The crypto code of the payment method to update",
        "example": "BTC"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The payment method has been removed"
      },
      {
        "statusCode": "400",
        "description": "An array of validation errors of the request"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to remove the specified payment method"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store/payment-method"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-methods/onchain/{cryptoCode}",
    "method": "getOnChainPaymentMethod",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Store Payment Methods (On Chain)",
    "typeScriptTag": "storePaymentMethodsOnChain",
    "description": "Get store on-chain payment method",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The crypto code of the payment method to fetch",
        "example": "BTC"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store/payment method"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-methods/onchain/{cryptoCode}",
    "method": "updateOnChainPaymentMethod",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Store Payment Methods (On Chain)",
    "typeScriptTag": "storePaymentMethodsOnChain",
    "description": "Update store on-chain payment method",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The crypto code of the payment method to update",
        "example": "BTC"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of validation errors of the request"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to update the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-methods/onchain/{cryptoCode}/generate",
    "method": "generateOnChainWallet",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Store Payment Methods (On Chain)",
    "typeScriptTag": "storePaymentMethodsOnChain",
    "description": "Generate store on-chain wallet",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The crypto code of the payment method to update",
        "example": "BTC"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      },
      {
        "name": "existingMnemonic",
        "schema": "string",
        "description": ""
      },
      {
        "name": "passphrase",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountNumber",
        "schema": "number",
        "description": "",
        "default": 0
      },
      {
        "name": "savePrivateKeys",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "importKeysToRPC",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "wordList",
        "schema": "string",
        "description": "",
        "default": "English"
      },
      {
        "name": "wordCount",
        "schema": "number",
        "description": "",
        "default": 12
      },
      {
        "name": "scriptPubKeyType",
        "schema": "string",
        "description": "",
        "default": "Segwit"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of validation errors of the request"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to update the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-methods/OnChain/{cryptoCode}/preview",
    "method": "getOnChainPaymentMethodPreview",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Store Payment Methods (On Chain)",
    "typeScriptTag": "storePaymentMethodsOnChain",
    "description": "Preview store on-chain payment method addresses",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The crypto code of the payment method to fetch",
        "example": "BTC"
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "From which index to fetch the addresses"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": false,
        "description": "Number of addresses to preview"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store/payment method"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-methods/OnChain/{cryptoCode}/preview",
    "method": "postOnChainPaymentMethodPreview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Store Payment Methods (On Chain)",
    "typeScriptTag": "storePaymentMethodsOnChain",
    "description": "Preview proposed store on-chain payment method addresses",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The crypto code of the payment method to fetch",
        "example": "BTC"
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "From which index to fetch the addresses"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": false,
        "description": "Number of addresses to preview"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      },
      {
        "name": "derivationScheme",
        "schema": "string",
        "description": "",
        "example": "xpub..."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/rates/configuration",
    "method": "getStoreRateConfiguration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stores (Rates Config)",
    "typeScriptTag": "storesRatesConfig",
    "description": "Get store rate settings",
    "parameters": [
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/rates/configuration",
    "method": "updateStoreRateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Stores (Rates Config)",
    "typeScriptTag": "storesRatesConfig",
    "description": "Update store rate settings",
    "parameters": [
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      },
      {
        "name": "spread",
        "schema": "string",
        "description": ""
      },
      {
        "name": "preferredSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isCustomScript",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "effectiveScript",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of validation errors of the request"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to modify the store"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/rates/configuration/preview",
    "method": "previewStoreRateConfiguration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Stores (Rates Config)",
    "typeScriptTag": "storesRatesConfig",
    "description": "Preview rate configuration results",
    "parameters": [
      {
        "name": "currencyPair",
        "schema": "array",
        "description": "The currency pairs to preview"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      },
      {
        "name": "spread",
        "schema": "string",
        "description": ""
      },
      {
        "name": "preferredSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isCustomScript",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "effectiveScript",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of validation errors of the request"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to modify the store"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/rates",
    "method": "getStoreRates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stores (https://docs.btcpayserver.org/",
    "typeScriptTag": "storesHttps:DocsBtcpayserverOrg",
    "description": "Get rates",
    "parameters": [
      {
        "name": "currencyPair",
        "schema": "array",
        "description": "The currency pairs to fetch rates for",
        "example": [
          "BTC_USD",
          "BTC_EUR"
        ]
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of validation errors of the request"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to modify the store"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/users",
    "method": "getStoreUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stores (https://docs.btcpayserver.org/",
    "typeScriptTag": "storesHttps:DocsBtcpayserverOrg",
    "description": "Get store users",
    "parameters": [
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/users",
    "method": "addStoreUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Stores (https://docs.btcpayserver.org/",
    "typeScriptTag": "storesHttps:DocsBtcpayserverOrg",
    "description": "Add a store user",
    "parameters": [
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store id",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The user was added"
      },
      {
        "statusCode": "400",
        "description": "An array of validation errors of the request"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to add new stores"
      },
      {
        "statusCode": "409",
        "description": "Description of an error happening during processing of the request"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/users/{idOrEmail}",
    "method": "removeStoreUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Stores (https://docs.btcpayserver.org/",
    "typeScriptTag": "storesHttps:DocsBtcpayserverOrg",
    "description": "Remove Store User",
    "parameters": [
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store",
        "example": "STOREID"
      },
      {
        "name": "idOrEmail",
        "schema": "string",
        "required": true,
        "description": "The user's id or email",
        "example": "IDOREMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The user has been removed"
      },
      {
        "statusCode": "400",
        "description": "An array of validation errors of the request"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to remove the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store"
      },
      {
        "statusCode": "409",
        "description": "Description of an error happening during processing of the request"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-methods/onchain/{cryptoCode}/wallet",
    "method": "showOnChainWalletOverview",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Store Wallet (On Chain)",
    "typeScriptTag": "storeWalletOnChain",
    "description": "Get store on-chain wallet overview",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The crypto code of the payment method to fetch",
        "example": "BTC"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store/wallet"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-methods/onchain/{cryptoCode}/wallet/feerate",
    "method": "getOnChainFeeRate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Store Wallet (On Chain)",
    "typeScriptTag": "storeWalletOnChain",
    "description": "Get store on-chain wallet fee rate",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The crypto code of the payment method to fetch",
        "example": "BTC"
      },
      {
        "name": "blockTarget",
        "schema": "number",
        "required": false,
        "description": "The number of blocks away you are willing to target for confirmation. Defaults to the wallet's configured `RecommendedFeeBlockTarget`"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store/wallet"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-methods/onchain/{cryptoCode}/wallet/address",
    "method": "unReserveOnChainWalletReceiveAddress",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Store Wallet (On Chain)",
    "typeScriptTag": "storeWalletOnChain",
    "description": "UnReserve last store on-chain wallet address",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The crypto code of the payment method to fetch",
        "example": "BTC"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "address unreserved"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store/wallet or there was no address reserved"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-methods/onchain/{cryptoCode}/wallet/address",
    "method": "getOnChainWalletReceiveAddress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Store Wallet (On Chain)",
    "typeScriptTag": "storeWalletOnChain",
    "description": "Get store on-chain wallet address",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The crypto code of the payment method to fetch",
        "example": "BTC"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      },
      {
        "name": "forceGenerate",
        "schema": "boolean",
        "required": false,
        "description": "Whether to generate a new address for this request even if the previous one was not used",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store/wallet"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-methods/onchain/{cryptoCode}/wallet/transactions",
    "method": "showOnChainWalletTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Store Wallet (On Chain)",
    "typeScriptTag": "storeWalletOnChain",
    "description": "Get store on-chain wallet transactions",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The crypto code of the wallet to fetch",
        "example": "BTC"
      },
      {
        "name": "labelFilter",
        "schema": "string",
        "required": false,
        "description": "Transaction label to filter by",
        "example": "invoice"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of transactions to return"
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Number of transactions to skip from the start"
      },
      {
        "name": "statusFilter",
        "schema": "array",
        "required": false,
        "description": "Statuses to filter the transactions with"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store/wallet"
      },
      {
        "statusCode": "503",
        "description": "You need to allow non-admins to use hotwallets for their stores (in /server/policies)"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-methods/onchain/{cryptoCode}/wallet/transactions",
    "method": "createOnChainTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Store Wallet (On Chain)",
    "typeScriptTag": "storeWalletOnChain",
    "description": "Create store on-chain wallet transaction",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The crypto code of the wallet",
        "example": "BTC"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      },
      {
        "name": "destinations",
        "schema": "array",
        "description": ""
      },
      {
        "name": "feerate",
        "schema": "number",
        "description": ""
      },
      {
        "name": "proceedWithPayjoin",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "proceedWithBroadcast",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "noChange",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "rbf",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "excludeUnconfirmed",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "selectedInputs",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store/wallet"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-methods/onchain/{cryptoCode}/wallet/transactions/{transactionId}",
    "method": "getOnChainWalletTransaction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Store Wallet (On Chain)",
    "typeScriptTag": "storeWalletOnChain",
    "description": "Get store on-chain wallet transaction",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The crypto code of the wallet to fetch",
        "example": "BTC"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      },
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "The transaction id to fetch",
        "example": "TRANSACTIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store/wallet"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-methods/onchain/{cryptoCode}/wallet/transactions/{transactionId}",
    "method": "patchOnChainWalletTransaction",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Store Wallet (On Chain)",
    "typeScriptTag": "storeWalletOnChain",
    "description": "Patch store on-chain wallet transaction info",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The crypto code of the wallet to fetch",
        "example": "BTC"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      },
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "The transaction id to fetch",
        "example": "TRANSACTIONID"
      },
      {
        "name": "force",
        "schema": "string",
        "required": false,
        "description": "Whether to update the label/comments even if the transaction does not yet exist"
      },
      {
        "name": "comment",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labels",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store/wallet"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-methods/onchain/{cryptoCode}/wallet/utxos",
    "method": "getOnChainWalletUtxOs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Store Wallet (On Chain)",
    "typeScriptTag": "storeWalletOnChain",
    "description": "Get store on-chain wallet UTXOS",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The crypto code of the wallet to fetch",
        "example": "BTC"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store/wallet"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-methods/onchain/{cryptoCode}/wallet/objects",
    "method": "getOnChainWalletObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Store Wallet (On Chain)",
    "typeScriptTag": "storeWalletOnChain",
    "description": "Get store on-chain wallet objects",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The crypto code of the payment method to fetch",
        "example": "BTC"
      },
      {
        "name": "ids",
        "schema": "array",
        "required": false,
        "description": "The ids of objects to fetch, if used, type should be specified",
        "example": "03abcde..."
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "The type of object to fetch",
        "example": "tx"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      },
      {
        "name": "includeNeighbourData",
        "schema": "boolean",
        "required": false,
        "description": "Whether or not you should include neighbour's node data in the result (ie, `links.objectData`)",
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store/wallet"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-methods/onchain/{cryptoCode}/wallet/objects",
    "method": "addOrUpdateOnChainWalletObjects",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Store Wallet (On Chain)",
    "typeScriptTag": "storeWalletOnChain",
    "description": "Add/Update store on-chain wallet objects",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The crypto code of the payment method to fetch",
        "example": "BTC"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store/wallet"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-methods/onchain/{cryptoCode}/wallet/objects/{objectType}/{objectId}",
    "method": "removeOnChainWalletObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Store Wallet (On Chain)",
    "typeScriptTag": "storeWalletOnChain",
    "description": "Remove store on-chain wallet objects",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The crypto code of the payment method to fetch",
        "example": "BTC"
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "The object id to fetch",
        "example": "abc392..."
      },
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "The object type to fetch",
        "example": "tx"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "successful removal of filtered object"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store/wallet"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-methods/onchain/{cryptoCode}/wallet/objects/{objectType}/{objectId}",
    "method": "getOnChainWalletObject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Store Wallet (On Chain)",
    "typeScriptTag": "storeWalletOnChain",
    "description": "Get store on-chain wallet object",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The crypto code of the payment method to fetch",
        "example": "BTC"
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "The object id to fetch",
        "example": "abc392..."
      },
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "The object type to fetch",
        "example": "tx"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      },
      {
        "name": "includeNeighbourData",
        "schema": "boolean",
        "required": false,
        "description": "Whether or not you should include neighbour's node data in the result (ie, `links.objectData`)",
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store/wallet"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-methods/onchain/{cryptoCode}/wallet/objects/{objectType}/{objectId}/links",
    "method": "addOrUpdateOnChainWalletLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Store Wallet (On Chain)",
    "typeScriptTag": "storeWalletOnChain",
    "description": "Add/Update store on-chain wallet object link",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The crypto code of the payment method to fetch",
        "example": "BTC"
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "The object id to fetch",
        "example": "abc392..."
      },
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "The object type to fetch",
        "example": "tx"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "action completed"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store/wallet"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/payment-methods/onchain/{cryptoCode}/wallet/objects/{objectType}/{objectId}/links/{linkType}/{linkId}",
    "method": "removeOnChainWalletLink",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Store Wallet (On Chain)",
    "typeScriptTag": "storeWalletOnChain",
    "description": "Remove store on-chain wallet object links",
    "parameters": [
      {
        "name": "cryptoCode",
        "schema": "string",
        "required": true,
        "description": "The crypto code of the payment method to fetch",
        "example": "BTC"
      },
      {
        "name": "linkId",
        "schema": "string",
        "required": true,
        "description": "The object id of the linked neighbour",
        "example": "abc392..."
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "The object id to fetch",
        "example": "abc392..."
      },
      {
        "name": "linkType",
        "schema": "string",
        "required": true,
        "description": "The object type of the linked neighbour",
        "example": "tx"
      },
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "The object type to fetch",
        "example": "tx"
      },
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "successful removal of filtered object link"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store/wallet"
      }
    ]
  },
  {
    "url": "/api/v1/stores",
    "method": "getStores",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stores",
    "typeScriptTag": "stores",
    "description": "Get stores",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Description of an error happening during processing of the request"
      }
    ]
  },
  {
    "url": "/api/v1/stores",
    "method": "createStore",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Stores",
    "typeScriptTag": "stores",
    "description": "Create a new store",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "website",
        "schema": "string",
        "description": ""
      },
      {
        "name": "supportUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "defaultCurrency",
        "schema": "string",
        "description": "",
        "example": "USD",
        "default": "USD"
      },
      {
        "name": "invoiceExpiration",
        "schema": "number",
        "description": "",
        "example": 90
      },
      {
        "name": "displayExpirationTimer",
        "schema": "number",
        "description": "",
        "example": 90
      },
      {
        "name": "monitoringExpiration",
        "schema": "number",
        "description": "",
        "example": 90
      },
      {
        "name": "speedPolicy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lightningDescriptionTemplate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentTolerance",
        "schema": "number",
        "description": "",
        "default": 0
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "anyoneCanCreateInvoice",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "requiresRefundEmail",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "checkoutType",
        "schema": "string",
        "description": "",
        "default": "V2"
      },
      {
        "name": "receipt",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "lightningAmountInSatoshi",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "lightningPrivateRouteHints",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "onChainWithLnInvoiceFallback",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "redirectAutomatically",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "showRecommendedFee",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "recommendedFeeBlockTarget",
        "schema": "integer",
        "description": "",
        "default": 1
      },
      {
        "name": "defaultLang",
        "schema": "string",
        "description": "",
        "default": "en"
      },
      {
        "name": "customLogo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customCSS",
        "schema": "string",
        "description": ""
      },
      {
        "name": "htmlTitle",
        "schema": "string",
        "description": ""
      },
      {
        "name": "networkFeeMode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payJoinEnabled",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "autoDetectLanguage",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "showPayInWalletButton",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "showStoreHeader",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "celebratePayment",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "playSoundOnPayment",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "lazyPaymentMethods",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "defaultPaymentMethod",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentMethodCriteria",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of validation errors of the request"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to add new stores"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}",
    "method": "deleteStore",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Stores",
    "typeScriptTag": "stores",
    "description": "Remove Store",
    "parameters": [
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to remove",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The store has been removed"
      },
      {
        "statusCode": "400",
        "description": "An array of validation errors of the request"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to remove the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}",
    "method": "getStore",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stores",
    "typeScriptTag": "stores",
    "description": "Get store",
    "parameters": [
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to view the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}",
    "method": "updateStore",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Stores",
    "typeScriptTag": "stores",
    "description": "Update store",
    "parameters": [
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to update",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of validation errors of the request"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to update the specified store"
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this store"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/roles",
    "method": "getStoreRoles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stores",
    "typeScriptTag": "stores",
    "description": "Get store's roles",
    "parameters": [
      {
        "name": "storeId",
        "schema": "string",
        "required": true,
        "description": "The store to fetch",
        "example": "STOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to get the store's roles"
      },
      {
        "statusCode": "404",
        "description": "Store not found"
      }
    ]
  },
  {
    "url": "/api/v1/users/me",
    "method": "deleteCurrentUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Deletes user profile",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "User and associated data deleted successfully"
      },
      {
        "statusCode": "404",
        "description": "The user could not be found"
      }
    ]
  },
  {
    "url": "/api/v1/users/me",
    "method": "getCurrentUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get current user information",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The user could not be found"
      }
    ]
  },
  {
    "url": "/api/v1/users",
    "method": "getUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get all users",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Users found"
      },
      {
        "statusCode": "401",
        "description": "Missing authorization for loading the users"
      },
      {
        "statusCode": "403",
        "description": "Authorized but forbidden to load the users. You have the wrong API permissions."
      }
    ]
  },
  {
    "url": "/api/v1/users",
    "method": "createUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Create user",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isAdministrator",
        "schema": "boolean",
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of validation errors of the request"
      },
      {
        "statusCode": "401",
        "description": "If you need to authenticate for this endpoint (ie. the server settings policies lock subscriptions and that an admin already exists)"
      },
      {
        "statusCode": "403",
        "description": "If you are authenticated but forbidden to create a new user (ie. you don't have the `unrestricted` permission on a server administrator or if you are not administrator and registrations are disabled in the server's policies)"
      },
      {
        "statusCode": "429",
        "description": "DDoS protection if you are creating more than 2 accounts every minutes (non-admin only)"
      }
    ]
  },
  {
    "url": "/api/v1/users/{idOrEmail}",
    "method": "deleteUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Delete user",
    "parameters": [
      {
        "name": "idOrEmail",
        "schema": "string",
        "required": true,
        "description": "The ID or email of the user to be deleted",
        "example": "IDOREMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User has been successfully deleted"
      },
      {
        "statusCode": "401",
        "description": "Missing authorization for deleting the user"
      },
      {
        "statusCode": "403",
        "description": "Authorized but forbidden to delete the user. Can happen if you attempt to delete the only admin user."
      },
      {
        "statusCode": "404",
        "description": "User with provided ID was not found"
      }
    ]
  },
  {
    "url": "/api/v1/users/{idOrEmail}",
    "method": "getUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get user by ID or Email",
    "parameters": [
      {
        "name": "idOrEmail",
        "schema": "string",
        "required": true,
        "description": "The ID or email of the user to load",
        "example": "IDOREMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User found"
      },
      {
        "statusCode": "401",
        "description": "Missing authorization for loading the user"
      },
      {
        "statusCode": "403",
        "description": "Authorized but forbidden to load the user. You have the wrong API permissions."
      },
      {
        "statusCode": "404",
        "description": "No user found with this ID or email"
      }
    ]
  },
  {
    "url": "/api/v1/users/{idOrEmail}/lock",
    "method": "toggleUserLock",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Toggle user lock out",
    "parameters": [
      {
        "name": "idOrEmail",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to be un/locked",
        "example": "IDOREMAIL"
      },
      {
        "name": "locked",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User has been successfully toggled"
      },
      {
        "statusCode": "401",
        "description": "Missing authorization for locking the user"
      },
      {
        "statusCode": "403",
        "description": "Authorized but forbidden to lock the user. Can happen if you attempt to disable the only admin user."
      },
      {
        "statusCode": "404",
        "description": "User with provided ID was not found"
      }
    ]
  },
  {
    "url": "/api/v1/users/{idOrEmail}/approve",
    "method": "toggleUserApproval",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Toggle user approval",
    "parameters": [
      {
        "name": "idOrEmail",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to be un/approved",
        "example": "IDOREMAIL"
      },
      {
        "name": "approved",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User has been successfully toggled"
      },
      {
        "statusCode": "401",
        "description": "Missing authorization for approving the user"
      },
      {
        "statusCode": "403",
        "description": "Authorized but forbidden to approve the user. Can happen if you attempt to set the status of a user that does not have the approval requirement."
      },
      {
        "statusCode": "404",
        "description": "User with provided ID was not found"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/webhooks",
    "method": "getWebhooks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Get webhooks of a store",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this list of webhooks"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/webhooks",
    "method": "createWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Create a new webhook",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of validation errors of the request"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/webhooks/{webhookId}",
    "method": "deleteWebhook",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Delete a webhook",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The webhook has been deleted"
      },
      {
        "statusCode": "404",
        "description": "The webhook does not exist"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/webhooks/{webhookId}",
    "method": "getWebhook",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Get a webhook of a store",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The webhook has not been found"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/webhooks/{webhookId}",
    "method": "updateWebhook",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Update a webhook",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of validation errors of the request"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/webhooks/{webhookId}/deliveries",
    "method": "getWebhookDeliveries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Get latest deliveries",
    "parameters": [
      {
        "name": "count",
        "schema": "string",
        "required": false,
        "description": "The number of latest deliveries to fetch"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The key is not found for this list of deliveries"
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/webhooks/{webhookId}/deliveries/{deliveryId}",
    "method": "getWebhookDelivery",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Get a webhook delivery",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The delivery does not exists."
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/webhooks/{webhookId}/deliveries/{deliveryId}/request",
    "method": "getWebhookDeliveryRequests",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Get the delivery's request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The delivery does not exists."
      },
      {
        "statusCode": "409",
        "description": "`webhookdelivery-pruned`: This webhook delivery has been pruned, so it can't be redelivered."
      }
    ]
  },
  {
    "url": "/api/v1/stores/{storeId}/webhooks/{webhookId}/deliveries/{deliveryId}/redeliver",
    "method": "redeliverWebhookDelivery",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Redeliver the delivery",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The delivery does not exists."
      },
      {
        "statusCode": "409",
        "description": "`webhookdelivery-pruned`: This webhook delivery has been pruned, so it can't be redelivered."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="BTCPay Greenfield API"
      apiBaseUrl="/"
      apiVersion="v1"
      endpoints={121}
      sdkMethods={196}
      schemas={184}
      parameters={526}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/btcpay-server/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/btcpay-server/openapi.yaml"
      developerDocumentation="docs.btcpayserver.org/"
    />
  );
}
  