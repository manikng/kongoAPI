import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function TokenTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="token-typescript-sdk"
      metaDescription={`With the simplest and fastest way to launch Pay by Bank as a core payment method globally, Token.io's complete A2A payment infrastructure helps payment providers grow their market share in the face of the continued shift from cards to APMs.

Token.io delivers the highest performing and deepest connectivity in the industry, reaching 567 million bank accounts (80%+ per market) in 20 supported countries through a single API and interface.

With fast and flexible deployment options, including the option to use Token.io's license and conversion boosting payment authentication flows, payment providers can quickly and easily launch and manage Pay By Bank capabilities.

Token.io's solution is proven by a blue-chip base of partners, which collectively process payments for tens of millions of merchants worldwide, including HSBC, Mastercard, BNP Paribas, ACI Worldwide, Total Processing, Computop, Nuvei and Paysafe.

As Token.io pushes the boundaries of innovation, it remains relentlessly focused on delivering infrastructure that enables payment providers to grow their business. Token.io also provides access to aggregated bank account and transaction data, enabling payment providers to enrich their services and reinvent financial experiences.

Token.io is authorised as an AISP & PISP by the FCA in the UK and by BaFin in Germany. Token.io is PSD2 and SCA compliant, and PCI-DSS Level 1 and ISO27001:2013 Certified.

— RECOGNISED BY —

"Token.io provides an innovative solution in the Open Banking payments landscape…" — Juniper Research
"Token.io's strength is payment infrastructure…" — Forrester
"One of the fastest growing fintechs of 2022… " — Sifted

🏆 Open Banking Platinum Innovation Award - Juniper Research 2023 and 2022
🏆 Payments Tech of the Year - Europe Fintech Awards 2023
🏆 Fintech for Good Award - Paytech Awards 2023
🏆 Qorus-Capgemini NewTech Payments Bronze Award - 2023
🏆 Payments Tech of the Year Award - Fintech Awards London 2022`}
      company="Token"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/token/logo.png"
      companyKebabCase="token"
      clientNameCamelCase="token"
      homepage="token.io"
      lastUpdated={new Date("2024-03-29T20:19:21.743Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/token/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/token/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["open_banking","payments"]}
      methods={[
  {
    "url": "/accounts",
    "method": "getAllAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get information for all accounts",
    "parameters": [
      {
        "name": "tokenCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The user's IP address if the user is currently logged in with the TPP. If the customer  IP address is supplied (https://reference.token.io/, it is inferred that the user is present during the session (<i>i.e.</i>, the request is user-initiated; adding a `customer-initiated` = `true` header makes this explicit). For AIS calls, if the customer's IP address is not provided in the request, the bank assumes it is a TPP-initiated request and may limit the TPP to 4 TPP-initiated access attempts within a given 24-hour period.",
        "example": "172.16.254.1"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Each object represents a unique bank account."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountId}",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get account information",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The system-generated, unique bank account id, which specifies the account for which the information is requested.",
        "example": "a:8DbPteGnytmMbKXdnWTReeRB6cYWKXZ84JgLTBC7fKL4:5zKcENpV"
      },
      {
        "name": "tokenCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The user's IP address if the user is currently logged in with the TPP. If the customer  IP address is supplied (https://reference.token.io/, it is inferred that the user is present during the session (<i>i.e.</i>, the request is user-initiated; adding a `customer-initiated` = `true` header makes this explicit). For AIS calls, if the customer's IP address is not provided in the request, the bank assumes it is a TPP-initiated request and may limit the TPP to 4 TPP-initiated access attempts within a given 24-hour period.",
        "example": "172.16.254.1"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Operation completed successfully."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/account-balance",
    "method": "getMultipleBalances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get account balances",
    "parameters": [
      {
        "name": "tokenCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The user's IP address if the user is currently logged in with the TPP. If the customer  IP address is supplied (https://reference.token.io/, it is inferred that the user is present during the session (<i>i.e.</i>, the request is user-initiated; adding a `customer-initiated` = `true` header makes this explicit). For AIS calls, if the customer's IP address is not provided in the request, the bank assumes it is a TPP-initiated request and may limit the TPP to 4 TPP-initiated access attempts within a given 24-hour period.",
        "example": "172.16.254.1"
      },
      {
        "name": "accountId",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of account ids for which you wish to retrieve account balances.",
        "example": [
          "a:8DbPteGnytmMbKXdnWTReeRB6cYWKXZ84JgLTBC7fKL4:5zKcENpV",
          "a:9TFpwkcQmcsMbdjQcpdjfsEBosDw28503fAAGPEMF2MVF19hfk3nc",
          "a:rtmv254gaskGLdkadQvdNesk2Y9ferbvpaom5mvepm0mv2nfGnaix"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountId}/balance",
    "method": "getBalance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get an account balance",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The unique bank account id, which specifies the account for which the information is requested.",
        "example": "ACCOUNTID"
      },
      {
        "name": "tokenCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The user's IP address if the user is currently logged in with the TPP. If the customer  IP address is supplied (https://reference.token.io/, it is inferred that the user is present during the session (<i>i.e.</i>, the request is user-initiated; adding a `customer-initiated` = `true` header makes this explicit). For AIS calls, if the customer's IP address is not provided in the request, the bank assumes it is a TPP-initiated request and may limit the TPP to 4 TPP-initiated access attempts within a given 24-hour period.",
        "example": "172.16.254.1"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountId}/standing-orders",
    "method": "getStandingOrders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get information for all standing orders",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The unique bank account id, which specifies the account for which the information is requested.",
        "example": "ACCOUNTID"
      },
      {
        "name": "pageOffset",
        "schema": "string",
        "required": false,
        "description": "The offset for the current page. If the offset has been provided in the request, this offset will be equal to the provided one. But if no offset was provided in the request (<i>i.e.</i> this is the first page) and the page is not empty, this field will be populated with a non-empty string. This may be helpful for loading the same page again, which might not always be possible with an empty offset due to a dynamic nature of the data. <br>The offset is not visible to a user and should not be parsed and/or understood in any way.",
        "example": "LerV6Jmex"
      },
      {
        "name": "pageLimit",
        "schema": "integer",
        "required": true,
        "description": "The maximum number of records to return. This must be less than 200.",
        "example": 175,
        "default": 1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountId}/standing-orders/{standingOrderId}",
    "method": "getStandingOrder",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get standing order information",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The system-generated, unique bank account id, which specifies the account for which the information is requested.",
        "example": "a:8DbPteGnytmMbKXdnWTReeRB6cYWKXZ84JgLTBC7fKL4:5zKcENpV"
      },
      {
        "name": "standingOrderId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STANDINGORDERID"
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
    "url": "/accounts/{accountId}/transactions",
    "method": "getTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get account transactions",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The system-generated unique bank account id, which specifies the account for which the information is requested.",
        "example": "a:8DbPteGnytmMbKXdnWTReeRB6cYWKXZ84JgLTBC7fKL4:5zKcENpV"
      },
      {
        "name": "tokenCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The user's IP address if the user is currently logged in with the TPP. If the customer  IP address is supplied (https://reference.token.io/, it is inferred that the user is present during the session (<i>i.e.</i>, the request is user-initiated; adding a `customer-initiated` = `true` header makes this explicit). For AIS calls, if the customer's IP address is not provided in the request, the bank assumes it is a TPP-initiated request and may limit the TPP to 4 TPP-initiated access attempts within a given 24-hour period.",
        "example": "172.16.254.1"
      },
      {
        "name": "pageOffset",
        "schema": "string",
        "required": false,
        "description": "The offset for the current page. If the offset has been provided in the request, this offset will be equal to the provided one. But if no offset was provided in the request (<i>i.e.</i> this is the first page) and the page is not empty, this field will be populated with a non-empty string. This may be helpful for loading the same page again, which might not always be possible with an empty offset due to a dynamic nature of the data. <br/>The offset is not visible to a user and should not be parsed and/or understood in any way.",
        "example": "LerV6Jmex"
      },
      {
        "name": "pageLimit",
        "schema": "integer",
        "required": true,
        "description": "The maximum number of records to return. This must be less than 200.",
        "example": 175,
        "default": 1
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "The earliest transaction date requested, in <a href=\"https://www.iso.org/iso-8601-date-and-time-format.html\" target=\"_blank\">ISO 8601</a> format.",
        "example": "2022-06-15"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "The latest transaction date requested, in <a href=\"https://www.iso.org/iso-8601-date-and-time-format.html\" target=\"_blank\">ISO 8601</a> format.",
        "example": "2022-11-30"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountId}/transaction/{transactionId}",
    "method": "getTransactionDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get transaction information",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The unique bank account id, which specifies the account for which the information is requested.",
        "example": "ACCOUNTID"
      },
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "The unique transaction identifier, which specifies the transaction requested.",
        "example": "42909b155d4942299c39017686b5dc36"
      },
      {
        "name": "tokenCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The user's IP address if the user is currently logged in with the TPP. If the customer  IP address is supplied (https://reference.token.io/, it is inferred that the user is present during the session (<i>i.e.</i>, the request is user-initiated; adding a `customer-initiated` = `true` header makes this explicit). For AIS calls, if the customer's IP address is not provided in the request, the bank assumes it is a TPP-initiated request and may limit the TPP to 4 TPP-initiated access attempts within a given 24-hour period.",
        "example": "172.16.254.1"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/accounts/{accountId}/funds-confirmation",
    "method": "confirmFundsAvailability",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Confirm available funds",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The system-generated, unique bank account id, which specifies the account for which the information is requested.",
        "example": "a:8DbPteGnytmMbKXdnWTReeRB6cYWKXZ84JgLTBC7fKL4:5zKcENpV"
      },
      {
        "name": "amount",
        "schema": "undefined",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A flag indicating whether funds are available or not. If set to `true`, funds are available for transfer."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/banks",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Banks v1",
    "typeScriptTag": "banksV1",
    "description": "Get banks v1",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The index of the page currently being retrieved.",
        "example": 1
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "The number of records per page.",
        "example": 175
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The key to sort the result. This can be `name` (<i>i.e.</i>, bank name), `provider`, or `country`.",
        "example": "country",
        "default": "name"
      },
      {
        "name": "memberId",
        "schema": "string",
        "required": false,
        "description": "The Token.io-assigned member id of the TPP.",
        "example": "m:nP4w3u5y8ddrxDJkjimgSX9e4fZ:5zKtXEAq"
      },
      {
        "name": "ids",
        "schema": "array",
        "required": false,
        "description": "Filters for banks with a `bankId` (https://reference.token.io/ matching any of the ids listed, up to a maximum of 1000. Only exact (full string) matches are returned.",
        "example": [
          "goldbank",
          "opalbank",
          "platinumbank"
        ]
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Filters for banks with a name or identifiers containing this search string.",
        "example": "hsbc"
      },
      {
        "name": "tppId",
        "schema": "string",
        "required": false,
        "description": "Filters for banks for which the TPP represented by this `tppId` has access.",
        "example": "4h27g823-g73s-07v3-l49s-prte94bf21v"
      },
      {
        "name": "providers",
        "schema": "array",
        "required": false,
        "description": "Filters for banks that are accessed through any of the listed providers.",
        "example": "Token.io"
      },
      {
        "name": "bankCode",
        "schema": "string",
        "required": false,
        "description": "Filters for banks with a BIC (or BLZ, if German) that matches this `bankCode`. The BIC must have a string length of 8 or 11. The BLZ must have a string length of 8.",
        "example": "NBAGDE3E"
      },
      {
        "name": "countries",
        "schema": "array",
        "required": false,
        "description": "Filters for banks that are located in the countries specified by this list of <a href=\"https://www.iso.org/obp/ui/#search\" target=\"_blank\">ISO 3166-1 Alpha 2 country codes</a>, in upper case.",
        "example": [
          "IT",
          "DE",
          "RO"
        ]
      },
      {
        "name": "bankFeaturesSupportsSendPaymentValue",
        "schema": "boolean",
        "required": false,
        "description": "Filters for banks that support payment initiation.",
        "example": false,
        "default": false
      },
      {
        "name": "bankFeaturesSupportsReceivePaymentValue",
        "schema": "boolean",
        "required": false,
        "description": "Filters for banks that support receiving payments.",
        "example": false,
        "default": false
      },
      {
        "name": "bankFeaturesSupportsBalanceValue",
        "schema": "boolean",
        "required": false,
        "description": "Filters for the banks that support retrieving balances",
        "example": false,
        "default": false
      },
      {
        "name": "bankFeaturesSupportsScheduledPaymentValue",
        "schema": "boolean",
        "required": false,
        "description": "Filters for banks that support future dated scheduled payments.",
        "example": false,
        "default": false
      },
      {
        "name": "bankFeaturesSupportsStandingOrderValue",
        "schema": "boolean",
        "required": false,
        "description": "Filters for banks that support recurring payments/standing orders.",
        "example": false,
        "default": false
      },
      {
        "name": "bankFeaturesRequiresOneStepPaymentValue",
        "schema": "boolean",
        "required": false,
        "description": "Filters for banks that only support immediate redemption of transfers.",
        "example": false,
        "default": false
      },
      {
        "name": "bankFeaturesSupportsFundsConfirmationValue",
        "schema": "boolean",
        "required": false,
        "description": "Filters for the banks that support confirmation of available funds.",
        "example": false,
        "default": false
      },
      {
        "name": "bankFeaturesSupportsReturnRefundAccountValue",
        "schema": "boolean",
        "required": false,
        "description": "Filters for the banks that support request of refund account.",
        "example": false,
        "default": false
      },
      {
        "name": "bankFeaturesSupportsTransactionsDateFilterValue",
        "schema": "boolean",
        "required": false,
        "description": "Filters for banks that support retrieving transactions by date filter.",
        "example": false,
        "default": false
      },
      {
        "name": "bankFeaturesSupportsAccountInformationValue",
        "schema": "boolean",
        "required": false,
        "description": "Filters for banks that support retrieval of account information.",
        "example": false,
        "default": false
      },
      {
        "name": "bankFeaturesSupportsSinglePaymentValue",
        "schema": "boolean",
        "required": false,
        "description": "Filters for banks that support single immediate payments.",
        "example": false,
        "default": false
      },
      {
        "name": "bankFeaturesSupportsVariableRecurringPaymentValue",
        "schema": "boolean",
        "required": false,
        "description": "Filters for banks that support variable recurring payments.",
        "example": false,
        "default": false
      },
      {
        "name": "bics",
        "schema": "array",
        "required": false,
        "description": "Filters for banks whose BIC matches any of the listed BICs (https://reference.token.io/, up to a maximum of 1000."
      },
      {
        "name": "supportedPaymentNetworks",
        "schema": "array",
        "required": false,
        "description": "Filters for banks that support any of the listed payment networks."
      },
      {
        "name": "bankGroup",
        "schema": "string",
        "required": false,
        "description": "Filters for banks that are part of the bank group specified.",
        "example": [
          "HSBC",
          "Coop"
        ]
      },
      {
        "name": "bankSubGroup",
        "schema": "string",
        "required": false,
        "description": "Filters for banks that are part of the bank sub-group specified.",
        "example": [
          "CMM Grand",
          "Banque Populaire",
          "La Banque"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/bank/countries",
    "method": "getBankCountries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Banks v1",
    "typeScriptTag": "banksV1",
    "description": "Get bank countries",
    "parameters": [
      {
        "name": "ids",
        "schema": "array",
        "required": false,
        "description": "Filters for banks with bank ids that are represented in this list of ids (https://reference.token.io/, up to a maximum of 1000.",
        "example": [
          "goldbank",
          "opalbank",
          "platinumbank"
        ]
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Filters for banks with names or identifiers that contain this search string (case sensitive).",
        "example": "banca"
      },
      {
        "name": "tppId",
        "schema": "string",
        "required": false,
        "description": "Filters for banks to which the TPP with this `tppId` has access.",
        "example": "9fk3m361-f12r-04b9-p39f-rio2m3pw9v8s"
      },
      {
        "name": "bankCode",
        "schema": "string",
        "required": false,
        "description": "Filters for banks with a BIC (or BLZ, if German) that matches this `bankCode`. The BIC must have a string length of 8 or 11. The BLZ must have a string length of 8.",
        "example": "NBAGDE3E"
      },
      {
        "name": "countries",
        "schema": "array",
        "required": false,
        "description": "Filters for banks that are located in the countries specified by this list of <a href=\"https://www.iso.org/obp/ui/#search\" target=\"_blank\">ISO 3166-1 Alpha 2 country codes</a>, in upper case."
      },
      {
        "name": "providers",
        "schema": "array",
        "required": false,
        "description": "Filters for banks that are accessed through any of this list of providers.",
        "example": "Token.io"
      },
      {
        "name": "bankFeaturesSupportsSendPaymentValue",
        "schema": "boolean",
        "required": false,
        "description": "Filters for banks that support payment initiation.",
        "example": false,
        "default": false
      },
      {
        "name": "bankFeaturesSupportsReceivePaymentValue",
        "schema": "boolean",
        "required": false,
        "description": "Filters for banks that support the receipt of payments.",
        "example": false,
        "default": false
      },
      {
        "name": "bankFeaturesSupportsBalanceValue",
        "schema": "boolean",
        "required": false,
        "description": "Filters for the banks that support retrieving account balances.",
        "example": false,
        "default": false
      },
      {
        "name": "bankFeaturesSupportsScheduledPaymentValue",
        "schema": "boolean",
        "required": false,
        "description": "Filters for banks that support future dated scheduled payments.",
        "example": false,
        "default": false
      },
      {
        "name": "bankFeaturesSupportsStandingOrderValue",
        "schema": "boolean",
        "required": false,
        "description": "Filters for banks that support standing orders/recurring payments.",
        "example": false,
        "default": false
      },
      {
        "name": "bankFeaturesRequiresOneStepPaymentValue",
        "schema": "boolean",
        "required": false,
        "description": "Filters for banks that only support immediate redemption of transfer tokens.",
        "example": false,
        "default": false
      },
      {
        "name": "bankFeaturesSupportsFundsConfirmationValue",
        "schema": "boolean",
        "required": false,
        "description": "Filters for banks that support confirmation of available funds.",
        "example": false,
        "default": false
      },
      {
        "name": "bankFeaturesSupportsReturnRefundAccountValue",
        "schema": "boolean",
        "required": false,
        "description": "Filters for banks that support the request of refund account.",
        "example": false,
        "default": false
      },
      {
        "name": "bankFeaturesSupportsTransactionsDateFilterValue",
        "schema": "boolean",
        "required": false,
        "description": "Filters for banks that support retrieving transactions by date filter.",
        "example": false,
        "default": false
      },
      {
        "name": "bankFeaturesSupportsAccountInformationValue",
        "schema": "boolean",
        "required": false,
        "description": "Filters for banks that support retrieving account information using Account Information Services (https://reference.token.io/.",
        "example": false,
        "default": false
      },
      {
        "name": "bankFeaturesSupportsSinglePaymentValue",
        "schema": "boolean",
        "required": false,
        "description": "Filters for banks that support single immediate payments.",
        "example": false,
        "default": false
      },
      {
        "name": "bankFeaturesSupportsVariableRecurringPaymentValue",
        "schema": "boolean",
        "required": false,
        "description": "Filters for banks that support variable recurring payments.",
        "example": false,
        "default": false
      },
      {
        "name": "memberId",
        "schema": "string",
        "required": false,
        "description": "The Token.io-assigned member id of the TPP.",
        "example": "m:nP4w3u5y8ddrxDJkjimgSX9e4fZ:5zKtXEAq"
      },
      {
        "name": "supportedPaymentNetworks",
        "schema": "array",
        "required": false,
        "description": "Filters for banks that support any of the listed payment networks."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/member/sub-tpps",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sub-TPPs",
    "typeScriptTag": "subTpPs",
    "description": "Get sub-TPPs",
    "parameters": [
      {
        "name": "pageOffset",
        "schema": "string",
        "required": false,
        "description": "The offset for the current page. If the offset has been provided in the request, this offset will be equal to the provided one. But if no offset was provided in the request (<i>i.e.</i> this is the first page) and the page is not empty, this field will be populated with a non-empty string. This may be helpful for loading the same page again, which might not always be possible with an empty offset due to a dynamic nature of the data. <br/>The offset is not visible to a user and should not be parsed and/or understood in any way.",
        "example": "LerV6Jmex"
      },
      {
        "name": "pageLimit",
        "schema": "integer",
        "required": true,
        "description": "The maximum number of records to return. This must be less than 200.",
        "example": 175,
        "default": 1
      },
      {
        "name": "filterByCompanyNames",
        "schema": "array",
        "required": false,
        "description": "Filters the sub-TPPs by the list of company names submitted."
      },
      {
        "name": "filterByRegistrationDates",
        "schema": "array",
        "required": false,
        "description": "Filters the sub-TPPs by the list of registration dates submitted."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/member/sub-tpps",
    "method": "createSubTpp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sub-TPPs",
    "typeScriptTag": "subTpPs",
    "description": "Create a sub-TPP",
    "parameters": [
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "somehost.example.com"
      },
      {
        "name": "logo",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "b0Y5cVl6aDc3RkE5blZyQ24yamlh"
      },
      {
        "name": "merchant",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Sub-TPP Business Ltd"
      },
      {
        "name": "parentSubTppId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "6f34h397-b29h-23b0-s30g-hkd0d2dk4k1s"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/member/sub-tpps/{subTppId}",
    "method": "deleteSubTpp",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Sub-TPPs",
    "typeScriptTag": "subTpPs",
    "description": "Delete a sub-TPP",
    "parameters": [
      {
        "name": "subTppId",
        "schema": "string",
        "required": true,
        "description": "Specifies the sub-TPP to delete.",
        "example": "8d54f066-c14a-47c0-b58b-fec6b0ed6b4c"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No data returned in the successful response."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/member/sub-tpps/{subTppId}",
    "method": "getSubTppInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sub-TPPs",
    "typeScriptTag": "subTpPs",
    "description": "Get sub-TPP information",
    "parameters": [
      {
        "name": "subTppId",
        "schema": "string",
        "required": true,
        "description": "This id specifies the sub-TPP to be retrieved.",
        "example": "8d54f066-c14a-47c0-b58b-fec6b0ed6b4c"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/member/sub-tpps/{subTppId}/children",
    "method": "getChildren",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sub-TPPs",
    "typeScriptTag": "subTpPs",
    "description": "Get sub-TPP children",
    "parameters": [
      {
        "name": "subTppId",
        "schema": "string",
        "required": true,
        "description": "Specifies the sub-TPP for which the children are to be retrieved.",
        "example": "8d54f066-c14a-47c0-b58b-fec6b0ed6b4c"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains each sub-TPP member onboarded by the reseller."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/reports/banks/status",
    "method": "getBankStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get bank statuses",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains information on the current status of the Token.io-connected bank."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/reports/banks/{bankId}/status",
    "method": "bankStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get a bank status",
    "parameters": [
      {
        "name": "bankId",
        "schema": "string",
        "required": true,
        "description": "The Token.io bank identifier, identical to the `id` in the repsonse to `GET /banks`.",
        "example": "goldbank"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/token-requests",
    "method": "initiateTokenRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Requests",
    "typeScriptTag": "requests",
    "description": "Initiate a token request",
    "parameters": [
      {
        "name": "requestOptions",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "requestPayload",
        "schema": "object",
        "required": true,
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/token-requests/{tokenRequestId}/result",
    "method": "checkTokenResult",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Requests",
    "typeScriptTag": "requests",
    "description": "Get a token request",
    "parameters": [
      {
        "name": "tokenRequestId",
        "schema": "string",
        "required": true,
        "description": "The token request id received in response to the original token request.",
        "example": "rq:ej5ACWNwi1EcqBeuDPc4Z8C4Bgc:5zKtXEAq"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/callback/initiation",
    "method": "processBankCallback",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TSP",
    "typeScriptTag": "tsp",
    "description": "Initiate a callback",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "description": "",
        "example": "param1=value1&param2=value2"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/tokens",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tokens",
    "typeScriptTag": "tokens",
    "description": "Get tokens",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Specifies the type of token returned.",
        "example": "ACCESS",
        "default": "INVALID"
      },
      {
        "name": "pageOffset",
        "schema": "string",
        "required": false,
        "description": "The offset for the current page. If the offset has been provided in the request, this offset will be equal to the provided one. But if no offset was provided in the request (<i>i.e.</i> this is the first page) and the page is not empty, this field will be populated with a non-empty string. This may be helpful for loading the same page again, which might not always be possible with an empty offset due to a dynamic nature of the data. <br/>The offset is not visible to a user and should not be parsed and/or understood in any way.",
        "example": "LerV6Jmex"
      },
      {
        "name": "pageLimit",
        "schema": "integer",
        "required": true,
        "description": "The maximum number of records to return. This must be less than 200.",
        "example": 175,
        "default": 1
      },
      {
        "name": "filterSourceAccountId",
        "schema": "string",
        "required": false,
        "description": "Identifies the payer's account.",
        "example": "a:J72REftaRoiaDYRDU7M9FDgf8jeh3eqek9DvKeyBWbuA:3VMczyq7r7b6HwC"
      },
      {
        "name": "filterDestinationAccountId",
        "schema": "string",
        "required": false,
        "description": "Identifies the payee/beneficiary's account.",
        "example": "a:f34VSeqwfWGTGH23vsa2cDgecew209jdvcd5vdfv4vds:5VSWVRqicm4Csa2"
      },
      {
        "name": "filterStartTimeMs",
        "schema": "string",
        "required": false,
        "description": "The filtered list start timestamp in milliseconds, 1 day (24 hours) = 8640000000, 1 hour = 36000000, and 1 minute = 60000.",
        "example": 67505
      },
      {
        "name": "filterEndTimeMs",
        "schema": "string",
        "required": false,
        "description": "The filtered list end timestamp in milliseconds, 1 day (24 hours) = 8640000000, 1 hour = 36000000, and 1 minute = 60000.",
        "example": 365650
      },
      {
        "name": "filterRole",
        "schema": "string",
        "required": false,
        "description": "Filters by `accountHolder` role.",
        "example": "ISSUER",
        "default": "ANY"
      },
      {
        "name": "filterActingAsRefId",
        "schema": "string",
        "required": false,
        "description": "Filters the list by the sub-TPP identifier generated by Token.io once a merchant has been onboarded.",
        "example": "4kwl35c9sp3fwp4xq"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/tokens/{tokenId}",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tokens",
    "typeScriptTag": "tokens",
    "description": "Get a token",
    "parameters": [
      {
        "name": "tokenId",
        "schema": "string",
        "required": true,
        "description": "Identifies a unique authorization token for a transfer, standing order, or account information access.",
        "example": "tt:8zK1dic95omjWb72gvc3z3ELKbTNfnGd89MbDnM73er4:ZhBVAJSH8DeU1"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/tokens/{tokenId}/cancel",
    "method": "cancelToken",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tokens",
    "typeScriptTag": "tokens",
    "description": "Cancel a token",
    "parameters": [
      {
        "name": "tokenCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The user's IP address if the user is currently logged in with the TPP. If the customer  IP address is supplied (https://reference.token.io/, it is inferred that the user is present during the session (<i>i.e.</i>, the request is user-initiated; adding a `customer-initiated` = `true` header makes this explicit). For AIS calls, if the customer's IP address is not provided in the request, the bank assumes it is a TPP-initiated request and may limit the TPP to 4 TPP-initiated access attempts within a given 24-hour period.",
        "example": "172.16.254.1"
      },
      {
        "name": "tokenId",
        "schema": "string",
        "required": true,
        "description": "Identifies a unique authorization token for a transfer, standing order, or account information access.",
        "example": "ta:3eYPU1BEKKunfmYgQuSKXFCeo851C5Y3XiZW3XA465TU:5zKtXEAq"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/transfers",
    "method": "getTransfers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Single Immediate Payments v1",
    "typeScriptTag": "singleImmediatePaymentsV1",
    "description": "Get transfers",
    "parameters": [
      {
        "name": "tokenId",
        "schema": "string",
        "required": false,
        "description": "Identifies the authorization token for the request.",
        "example": "rq:ej5ACWNwi1EcqBeuDPc4Z8C4Bgc:5zKtXEAq"
      },
      {
        "name": "pageOffset",
        "schema": "string",
        "required": false,
        "description": "The offset for the current page. If the offset has been provided in the request, this offset will be equal to the provided one. But if no offset was provided in the request (<i>i.e.</i> this is the first page) and the page is not empty, this field will be populated with a non-empty string. This may be helpful for loading the same page again, which might not always be possible with an empty offset due to a dynamic nature of the data. <br/>The offset is not visible to a user and should not be parsed and/or understood in any way.",
        "example": "LerV6Jmex"
      },
      {
        "name": "pageLimit",
        "schema": "integer",
        "required": true,
        "description": "The maximum number of records to return. This must be less than 200.",
        "example": 175,
        "default": 1
      },
      {
        "name": "filterTokenId",
        "schema": "string",
        "required": false,
        "description": "Filters by the token id.",
        "example": "tt:3kFGtpEKHu8S2fJuEkb6YPnHZ4bJ2oUrYPCsJop68vCH:5zKcENpV"
      },
      {
        "name": "filterStartTimeMs",
        "schema": "string",
        "required": false,
        "description": "Filtered list start time boundary in milliseconds, 1 day (24 hours) = 8640000000, 1 hour = 36000000, and 1 minute = 60000.",
        "example": 72799
      },
      {
        "name": "filterEndTimeMs",
        "schema": "string",
        "required": false,
        "description": "Filtered list end time boundary in milliseconds, 1 day (24 hours) = 8640000000, 1 hour = 36000000, and 1 minute = 60000.",
        "example": 3341983424
      },
      {
        "name": "filterTransactionStatus",
        "schema": "string",
        "required": false,
        "description": "Filters by transaction status. <ul> <li><b>PROCESSING</b> – This status indicates that the transaction is in process and that the final status has not been received from the bank.</li><li><b>SUCCESS</b> – This status indicates that successful payment initiation has been received from the bank. Settlement might not be complete.</li> <li><b>INITIATED</b> – This status is set when the status has remained as PROCESSING for 30 days and cannot be updated. The transaction has been initiated but the result is unknown. This is the final status and will not be updated later.</li> <li><b>PENDING</b> – This status indicates that the user has successfully completed the authorization process at the bank and the transfer is pending redemption. This status is only relevant for 2-step payment flows.</li><li><b>PENDING_EXTERNAL_AUTHORIZATION</b> – This status indicates that the user has been sent to the bank to complete the authorization process. If not completed within the allowed timeframe (usually around 15 mins, but there are variations between banks) the transaction will expire and transition to `FAILURE_EXPIRED`. This status is only relevant for 1-step payment flows.</li> <li><b>FAILURE_GENERIC</b> – This status usually indicates a technical failure. Possibly, a failure callback was received from the bank, with no transaction status and no further information.</li> <li><b>FAILURE_PERMISSION_DENIED</b> – This status indicates that the user has been denied authorization at the bank This status is only relevant for 2-step payment flows.</li> <li><b>FAILURE_CANCELED</b> – This status indicates that the payment initiation has been canceled before execution.</li> <li><b>FAILURE_EXPIRED</b> – This status indicates that the user did not complete the authorization process within the allowed timeframe (usually around 15 mins, but there are variations between banks) and the payment has expired.</li> <li><b>FAILURE_INSUFFICIENT_FUNDS</b> – This status indicates that the payment initiation request has been rejected due to insufficient funds.</li> <li><b>FAILURE_DECLINED</b> – This status indicates that the payment initiation has been rejected by the bank.</li> <li><b>SETTLEMENT_IN_PROGRESS</b> – This status is provided when a Token.io virtual account is used as the beneficiary for the payment, and replaces the payment initiation status. Token.io is waiting for the payment to reach the payee bank. No action is required; await the next step, <i>e.g.</i>, Token.io sends a webhook with the status update, or a polling call. The status will change to `SETTLEMENT_IN_PROGRESS` soon after Token.io receives the final status from the debtor bank.</li> <li><b>SETTLEMENT_COMPLETED</b> – This status is provided when a Token.io virtual account is used as the beneficiary for the payment, and replaces the payment initiation status. The payment has reached the payee bank and Token.io has matched the transaction in the TPP’s settlement account to the initiated payment. For instant payments, `SETTLEMENT_COMPLETED` will be achieved within 30-45 minutes from payment initiation, at the latest. For non-instant payments, the time to reach `SETTLEMENT_COMPLETED` will depend on the clearing period for the payment.</li><li><b>SETTLEMENT_INCOMPLETE</b> – This status is provided when a Token.io virtual account is used as the beneficiary for the payment, and replaces the payment initiation status. Reconciliation has failed. This happens when Token.io doesn't find the corresponding transaction in the TPP’s settlement account automatically.</li></ul><br/>During settlement of a virtual accounts payment, the status update job will run first for up to 30 days. Payment will then enter into a 'final' status, normally `SUCCESS`.<br/>Once the status update job has run, the reconciliation job looks for matching inbound payments.<br/><br/>For SEPA payments:<ul><li>if a matching inbound payment is found within 15 days of the final payment status update -> `SETTLEMENT_COMPLETED`</li><li>if no matching inbound payment is found within 15 days of the final payment status update -> `SETTLEMENT_INCOMPLETE`</li></ul>For SEPA Instant payments:<ul><li>if a matching inbound payment is found within 1 day of the final payment status update -> `SETTLEMENT_COMPLETED`</li><li>if no matching inbound payment is found within 1 day of the final payment status update -> `SETTLEMENT_INCOMPLETE`</li></ul>",
        "example": "SUCCESS"
      },
      {
        "name": "filterRole",
        "schema": "string",
        "required": false,
        "description": "Filters list by the account holder role.",
        "example": "PAYER"
      },
      {
        "name": "filterActingAsRefId",
        "schema": "string",
        "required": false,
        "description": "Filters the list by the sub-TPP identifier generated by Token.io once a merchant has been onboarded.",
        "example": "4kwl35c9sp3fwp4xq"
      },
      {
        "name": "filterRefId",
        "schema": "string",
        "required": false,
        "description": "Filters list by `refID`.",
        "example": "9htio4a1sp2akdr1aa"
      },
      {
        "name": "filterTransferRefundStatus",
        "schema": "string",
        "required": false,
        "description": "Filters list by refund status.",
        "example": "PARTIAL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/transfers",
    "method": "createTransferRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Single Immediate Payments v1",
    "typeScriptTag": "singleImmediatePaymentsV1",
    "description": "Redeem a transfer token",
    "parameters": [
      {
        "name": "payload",
        "schema": "object",
        "required": true,
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/token-requests/{tokenRequestId}/authorization",
    "method": "initiateBankAuthorization",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Single Immediate Payments v1",
    "typeScriptTag": "singleImmediatePaymentsV1",
    "description": "Initiate bank authorization",
    "parameters": [
      {
        "name": "tokenRequestId",
        "schema": "string",
        "required": true,
        "description": "The token request id received in response to the original token request.",
        "example": "rq:ej5ACWNwi1EcqBeuDPc4Z8C4Bgc:5zKtXEAq"
      },
      {
        "name": "consentAccepted",
        "schema": "boolean",
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "credentials",
        "schema": "object",
        "description": ""
      },
      {
        "name": "useCredentialFlow",
        "schema": "boolean",
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "useWebappCredentialsFlow",
        "schema": "boolean",
        "description": "",
        "example": false,
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/transfers/{transferId}",
    "method": "getTransferDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Single Immediate Payments v1",
    "typeScriptTag": "singleImmediatePaymentsV1",
    "description": "Get a transfer",
    "parameters": [
      {
        "name": "transferId",
        "schema": "string",
        "required": true,
        "description": "The unique id of the transfer sent in the `POST /transfers` response and/or included in a respective `GET /transfers` response.",
        "example": "TRANSFERID"
      },
      {
        "name": "skipTransferUpdate",
        "schema": "boolean",
        "required": false,
        "description": "If `skipTransferUpdate` is false, the request will call the bank for a status update. If set to true, the cached result will be returned instead.",
        "example": false,
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhook/config",
    "method": "deleteConfig",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Delete webhook config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "No data returned in the successful response."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhook/config",
    "method": "getConfig",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Get webhook config",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Specifies details of the webhook."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhook/config",
    "method": "setConfig",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Set webhook config",
    "parameters": [
      {
        "name": "config",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No data included or required in the response."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/vrp-consents",
    "method": "getConsents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Variable Recurring Payments",
    "typeScriptTag": "variableRecurringPayments",
    "description": "Get VRP consents",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": true,
        "description": "The maximum number of records to return.",
        "example": 10
      },
      {
        "name": "offset",
        "schema": "string",
        "required": false,
        "description": "The offset from the previous page.",
        "example": "LerV6Jmex"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/vrp-consents",
    "method": "createConsent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Variable Recurring Payments",
    "typeScriptTag": "variableRecurringPayments",
    "description": "Create a VRP consent",
    "parameters": [
      {
        "name": "initiation",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "pispConsentAccepted",
        "schema": "boolean",
        "required": false,
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/vrp-consents/{id}",
    "method": "revokeConsent",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Variable Recurring Payments",
    "typeScriptTag": "variableRecurringPayments",
    "description": "Revoke a VRP consent",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "vc:12345abcd:abcde"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/vrp-consents/{id}",
    "method": "getConsentDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Variable Recurring Payments",
    "typeScriptTag": "variableRecurringPayments",
    "description": "Get a VRP consent",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "vc:12345abcd:abcde"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/vrp-consents/{id}/payments",
    "method": "getPaymentsUnderConsent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Variable Recurring Payments",
    "typeScriptTag": "variableRecurringPayments",
    "description": "Get payments under a VRP consent",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "VRP consent id",
        "example": "vc:12345abcd:abcde"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": true,
        "description": "The maximum number of records to return.",
        "example": 10
      },
      {
        "name": "offset",
        "schema": "string",
        "required": false,
        "description": "The offset from the previous page.",
        "example": "LerV6Jmex"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/vrps",
    "method": "listPayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Variable Recurring Payments",
    "typeScriptTag": "variableRecurringPayments",
    "description": "Get VRP payments",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": true,
        "description": "The maximum number of records to return.",
        "example": 10
      },
      {
        "name": "offset",
        "schema": "string",
        "required": false,
        "description": "The offset from the previous page.",
        "example": "LerV6Jmex"
      },
      {
        "name": "ids",
        "schema": "array",
        "required": false,
        "description": "Filters vrp payments by their ids - returns only payments with ids listed in this parameter.",
        "example": [
          "vrp:4QExXrhKTxfShBdcTeqFabqJJhUF:2gFUX1NDgpN",
          "vrp:N5cJDFsQzVca3Qvr8kQocgEnjgX:2gFUX1NEdYA"
        ]
      },
      {
        "name": "invertIds",
        "schema": "boolean",
        "required": false,
        "description": "Invert ids query - returns only vrp payments with ids not listed in the ids parameter.",
        "example": false
      },
      {
        "name": "statuses",
        "schema": "array",
        "required": false,
        "description": "Filters vrp payments by their statuses - returns only payments with statuses listed in this parameter.",
        "example": [
          "INITIATION_COMPLETED",
          "INITIATION_REJECTED"
        ]
      },
      {
        "name": "invertStatuses",
        "schema": "boolean",
        "required": false,
        "description": "Invert statuses query - returns only vrp payments with statuses not listed in the statuses parameter.",
        "example": true
      },
      {
        "name": "createdAfter",
        "schema": "string",
        "required": false,
        "description": "Returns only vrp payments created after this time (in <a href=\"https://www.iso.org/iso-8601-date-and-time-format.html\" target=\"_blank\">ISO 8601</a> format).",
        "example": "2022-04-05T17:00:00.000Z"
      },
      {
        "name": "createdBefore",
        "schema": "string",
        "required": false,
        "description": "Returns only vrp payments created before this time (in <a href=\"https://www.iso.org/iso-8601-date-and-time-format.html\" target=\"_blank\">ISO 8601</a> format).",
        "example": "2022-04-05T17:00:00.000Z"
      },
      {
        "name": "refIds",
        "schema": "array",
        "required": false,
        "description": "Filters vrp payments by their `refId` values - returns only payments with `refIds` listed in this parameter.",
        "example": [
          "ShBdcTeqFabqJJhUF",
          "N5cJDFsQzVca3Q"
        ]
      },
      {
        "name": "vrpConsentId",
        "schema": "string",
        "required": false,
        "description": "Filters vrp payments by their `VRP consent id` value - returns only payments with `vrpConsentId` listed in this parameter.",
        "example": "vc:12345abcd:abcde"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The request does not have valid authentication credentials needed to perform the operation."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/vrps",
    "method": "initiatePayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Variable Recurring Payments",
    "typeScriptTag": "variableRecurringPayments",
    "description": "Initiate a VRP payment",
    "parameters": [
      {
        "name": "initiation",
        "schema": "object",
        "required": true,
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/vrps/{id}",
    "method": "getPaymentDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Variable Recurring Payments",
    "typeScriptTag": "variableRecurringPayments",
    "description": "Get a VRP payment",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "VRP id",
        "example": "vrp:12345abcd:abcde"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/vrps/{id}/confirm-funds",
    "method": "checkFundsAvailability",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Variable Recurring Payments",
    "typeScriptTag": "variableRecurringPayments",
    "description": "Verify if funds are available or not",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The VRP consent id.",
        "example": "vc:12345abcd:abcde"
      },
      {
        "name": "amount",
        "schema": "string",
        "required": true,
        "description": "The amount to confirm availability for.",
        "example": 1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A flag indicating whether funds are available or not. If set to `true`, funds are available for transfer."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/refunds",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Refunds - BETA",
    "typeScriptTag": "refundsBeta",
    "description": "Get refunds",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": true,
        "description": "The maximum number of records to return.",
        "example": 10
      },
      {
        "name": "offset",
        "schema": "string",
        "required": false,
        "description": "The offset from the previous page.",
        "example": "LerV6Jmex"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "Lower bound for a refund creation date in the format 'YYYY-MM-DD' (UTC time zone). If specified, only refunds created at or after the given date will be returned.",
        "example": "2010-01-01"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "Upper bound for a refund creation date in the format 'YYYY-MM-DD' (UTC time zone). If specified, only refunds created at or before the given date will be returned.",
        "example": "2010-01-01"
      },
      {
        "name": "ids",
        "schema": "array",
        "required": false,
        "description": "Filters refunds by their ids - returns only refunds with ids listed in this parameter.",
        "example": [
          "rf:4QExXrhKTxfShBdcTeqFabqJJhUF:2gFUX1NDgpN",
          "rf:N5cJDFsQzVca3Qvr8kQocgEnjgX:2gFUX1NEdYA"
        ]
      },
      {
        "name": "invertIds",
        "schema": "boolean",
        "required": false,
        "description": "Invert ids query - returns only refunds with ids not listed in the ids parameter.",
        "example": false
      },
      {
        "name": "statuses",
        "schema": "array",
        "required": false,
        "description": "Filters refunds by their statuses - returns only refunds with statuses listed in this parameter.",
        "example": [
          "INITIATION_COMPLETED",
          "INITIATION_REJECTED"
        ]
      },
      {
        "name": "invertStatuses",
        "schema": "boolean",
        "required": false,
        "description": "Invert statuses query - returns only refunds with statuses not listed in the statuses parameter.",
        "example": true
      },
      {
        "name": "refIds",
        "schema": "array",
        "required": false,
        "description": "Filters refunds by their `refId` values - returns only refunds with `refIds` listed in this parameter.",
        "example": [
          "ShBdcTeqFabqJJhUF",
          "N5cJDFsQzVca3Q"
        ]
      },
      {
        "name": "partial",
        "schema": "boolean",
        "required": false,
        "description": "Returns refunds in a partial format - with only id and status fields populated.",
        "example": true
      },
      {
        "name": "onBehalfOfIds",
        "schema": "array",
        "required": false,
        "description": "The result can be filtered on the basis of multiple OnBehalfOfIds.",
        "example": [
          "c5a863bc-86f2-4418-a26f-25b24c7983c7",
          "6f34h397-b29h-23b0-s30g-hkd0d2dk4k1s"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/refunds",
    "method": "initiateRefund",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Refunds - BETA",
    "typeScriptTag": "refundsBeta",
    "description": "Initiate a refund",
    "parameters": [
      {
        "name": "initiation",
        "schema": "object",
        "required": true,
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/refunds/{id}",
    "method": "getRefund",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Refunds - BETA",
    "typeScriptTag": "refundsBeta",
    "description": "Get a refund",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "your refund id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/transfers/{id}/refunds",
    "method": "getAllRefunds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Refunds - BETA",
    "typeScriptTag": "refundsBeta",
    "description": "Get all refunds by transfer",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": true,
        "description": "The maximum number of records to return.",
        "example": 10
      },
      {
        "name": "offset",
        "schema": "string",
        "required": false,
        "description": "The offset from the previous page.",
        "example": "LerV6Jmex"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "your transfer id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/payouts",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payouts - BETA",
    "typeScriptTag": "payoutsBeta",
    "description": "Get payouts",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": true,
        "description": "The maximum number of records to return.",
        "example": 10
      },
      {
        "name": "offset",
        "schema": "string",
        "required": false,
        "description": "The offset from the previous page.",
        "example": "LerV6Jmex"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "Lower bound for a payout creation date in the format 'YYYY-MM-DD' (UTC time zone). If specified, only payouts created at or after the given date will be returned.",
        "example": "2010-01-01"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "Upper bound for a payout creation date in the format 'YYYY-MM-DD' (UTC time zone). If specified, only payouts created at or before the given date will be returned.",
        "example": "2010-01-01"
      },
      {
        "name": "ids",
        "schema": "array",
        "required": false,
        "description": "Filters payouts by their ids - returns only payouts with ids listed in this parameter.",
        "example": [
          "po:28oivvd3iFhBrcbNj4tmtLEhxRTk:2gFUX1NE1T6",
          "po:3ZfdHxbpXmRZ1TVmiYNPgcwEocBy:2gFUX1NDdqr"
        ]
      },
      {
        "name": "invertIds",
        "schema": "boolean",
        "required": false,
        "description": "Invert ids query - returns only payouts with ids not listed in the ids parameter.",
        "example": false
      },
      {
        "name": "statuses",
        "schema": "array",
        "required": false,
        "description": "Filters payouts by their statuses - returns only payouts with statuses listed in this parameter.",
        "example": [
          "INITIATION_COMPLETED",
          "INITIATION_REJECTED"
        ]
      },
      {
        "name": "invertStatuses",
        "schema": "boolean",
        "required": false,
        "description": "Invert statuses query - returns only payouts with statuses not listed in the statuses parameter.",
        "example": true
      },
      {
        "name": "refIds",
        "schema": "array",
        "required": false,
        "description": "Filters payouts by their `refId` values - returns only payouts with `refIds` listed in this parameter.",
        "example": [
          "ShBdcTeqFabqJJhUF",
          "N5cJDFsQzVca3Q"
        ]
      },
      {
        "name": "onBehalfOfId",
        "schema": "string",
        "required": false,
        "description": "Filters payouts by their `onBehalfOfId` value - returns only payouts with `onBehalfOfId` listed in this parameter.",
        "example": "onBahalfOfId001"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/payouts",
    "method": "initializePayout",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payouts - BETA",
    "typeScriptTag": "payoutsBeta",
    "description": "Initiate a payout",
    "parameters": [
      {
        "name": "initiation",
        "schema": "object",
        "required": true,
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/payouts/{id}",
    "method": "getPayout",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payouts - BETA",
    "typeScriptTag": "payoutsBeta",
    "description": "Get a payout",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "your payout id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/secrets/upload/key-and-certificate",
    "method": "uploadKeyAndCertificate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Refunds - BETA",
    "typeScriptTag": "refundsBeta",
    "description": "Upload a private key and certificate",
    "parameters": [
      {
        "name": "upload",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/banks",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Banks v2",
    "typeScriptTag": "banksV2",
    "description": "Get banks v2",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The index of the page currently being retrieved."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "The number of records per page.",
        "example": 10,
        "default": 200
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The key to sort the result. This can be `NAME` (Bank's name), `STANDARD` (https://reference.token.io/, `RANK`, or `COUNTRY`.",
        "example": "COUNTRY",
        "default": "NAME"
      },
      {
        "name": "memberId",
        "schema": "string",
        "required": false,
        "description": "The Token.io-assigned member id of the TPP."
      },
      {
        "name": "tppId",
        "schema": "string",
        "required": false,
        "description": "Filters for banks for which the TPP represented by this `tppId` has access."
      },
      {
        "name": "ids",
        "schema": "array",
        "required": false,
        "description": "Filters for banks with a `bankId` (https://reference.token.io/ matching any of the ids listed, up to a maximum of 1000. Only exact (full string) matches are returned."
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Filters for banks with a name or identifiers containing this search string.",
        "example": "hsbc"
      },
      {
        "name": "bankGroup",
        "schema": "string",
        "required": false,
        "description": "Filters for banks that are members of the bank group specified.",
        "example": [
          "HSBC",
          "Coop"
        ]
      },
      {
        "name": "bankSubGroup",
        "schema": "string",
        "required": false,
        "description": "Filters for banks that are part of the bank sub-group specified.",
        "example": [
          "CMM Grand",
          "Banque Populaire",
          "La Banque"
        ]
      },
      {
        "name": "bankCode",
        "schema": "string",
        "required": false,
        "description": "Filters for banks with a BIC (or BLZ, if German) that matches this `bankCode`. The BIC must have a string length of 8 or 11. The BLZ must have a string length of 8."
      },
      {
        "name": "openBankingStandards",
        "schema": "array",
        "required": false,
        "description": "Filters for banks that are accessed through any of the listed standards."
      },
      {
        "name": "countries",
        "schema": "array",
        "required": false,
        "description": "Filters for banks that are located in the countries specified by this list of <a href=\"https://www.iso.org/obp/ui/#search\" target=\"_blank\">ISO 3166-1 Alpha 2 country codes</a>, in upper case."
      },
      {
        "name": "bics",
        "schema": "array",
        "required": false,
        "description": "Filters for banks whose BIC matches any of the listed BICs (https://reference.token.io/, up to a maximum of 1000."
      },
      {
        "name": "supportedLocalInstruments",
        "schema": "array",
        "required": false,
        "description": "Filters for banks that support any of the listed payment networks.",
        "example": [
          "SEPA_INSTANT",
          "FASTER_PAYMENTS",
          "SEPA"
        ]
      },
      {
        "name": "supportsAccountList",
        "schema": "boolean",
        "required": false,
        "description": "Filters for banks that support fetching accounts."
      },
      {
        "name": "supportsAccountDetails",
        "schema": "boolean",
        "required": false,
        "description": "Filters for banks that support fetching account details."
      },
      {
        "name": "supportsAccountBalance",
        "schema": "boolean",
        "required": false,
        "description": "Filters for banks that support fetching account balances."
      },
      {
        "name": "supportsTransactionList",
        "schema": "boolean",
        "required": false,
        "description": "Filters for banks that support fetching transactions."
      },
      {
        "name": "supportsTransactionDetails",
        "schema": "boolean",
        "required": false,
        "description": "Filters for banks that support fetching transaction details."
      },
      {
        "name": "supportsStandingOrderList",
        "schema": "boolean",
        "required": false,
        "description": "Filters for banks that support the fetching standing orders."
      },
      {
        "name": "supportsTransactionsDateFilter",
        "schema": "boolean",
        "required": false,
        "description": "Filters for banks that support feting transactions using a date filter."
      },
      {
        "name": "requiresOneStepPayment",
        "schema": "boolean",
        "required": false,
        "description": "Filters for banks that only support immediate redemption of transfers."
      },
      {
        "name": "supportsSinglePayment",
        "schema": "boolean",
        "required": false,
        "description": "Filters for banks that support single immediate payments.",
        "example": true
      },
      {
        "name": "supportsScheduledPayment",
        "schema": "boolean",
        "required": false,
        "description": "Filters for banks that support future dated scheduled payments."
      },
      {
        "name": "supportsStandingOrder",
        "schema": "boolean",
        "required": false,
        "description": "Filters for banks that support recurring payments/standing orders."
      },
      {
        "name": "supportsReturnRefundAccount",
        "schema": "boolean",
        "required": false,
        "description": "Filters for the banks that support request of refund account."
      },
      {
        "name": "supportsReturnRefundAccountHolderName",
        "schema": "boolean",
        "required": false,
        "description": "Filters for banks that support returning the refund account holder name."
      },
      {
        "name": "supportsFundsConfirmation",
        "schema": "boolean",
        "required": false,
        "description": "Filters for the banks that support confirmation of available funds."
      },
      {
        "name": "supportsVariableRecurringPayment",
        "schema": "boolean",
        "required": false,
        "description": "Filters for banks that support variable recurring payments."
      },
      {
        "name": "bankSubGroup",
        "schema": "string",
        "required": false,
        "description": "Filters for banks that are part of the bank sub-group specified.",
        "example": [
          "CMM Grand",
          "Banque Populaire",
          "La Banque"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/payments",
    "method": "listPayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Single Immediate Payments v2",
    "typeScriptTag": "singleImmediatePaymentsV2",
    "description": "Get payments",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": true,
        "description": "The maximum number of records to return.",
        "example": 10
      },
      {
        "name": "offset",
        "schema": "string",
        "required": false,
        "description": "The offset from the previous page.",
        "example": "LerV6Jmex"
      },
      {
        "name": "ids",
        "schema": "array",
        "required": false,
        "description": "Filters payments by their ids - returns only payments with ids listed in this parameter.",
        "example": [
          "pm2:4QExXrhKTxfShBdcTeqFabqJJhUF:2gFUX1NDgpN",
          "pm2:N5cJDFsQzVca3Qvr8kQocgEnjgX:2gFUX1NEdYA"
        ]
      },
      {
        "name": "invertIds",
        "schema": "boolean",
        "required": false,
        "description": "Invert ids query - returns only payments with ids not listed in the ids parameter.",
        "example": false
      },
      {
        "name": "statuses",
        "schema": "array",
        "required": false,
        "description": "Filters payments by their statuses - returns only payments with statuses listed in this parameter.",
        "example": [
          "INITIATION_COMPLETED",
          "INITIATION_REJECTED"
        ]
      },
      {
        "name": "invertStatuses",
        "schema": "boolean",
        "required": false,
        "description": "Invert statuses query - returns only payments with statuses not listed in the statuses parameter.",
        "example": true
      },
      {
        "name": "createdAfter",
        "schema": "string",
        "required": false,
        "description": "Returns only payments created after this time (in <a href=\"https://www.iso.org/iso-8601-date-and-time-format.html\" target=\"_blank\">ISO 8601</a> format).",
        "example": "2022-04-05T17:00:00.000Z"
      },
      {
        "name": "createdBefore",
        "schema": "string",
        "required": false,
        "description": "Returns only payments created before this time (in <a href=\"https://www.iso.org/iso-8601-date-and-time-format.html\" target=\"_blank\">ISO 8601</a> format).",
        "example": "2022-04-05T17:00:00.000Z"
      },
      {
        "name": "refIds",
        "schema": "array",
        "required": false,
        "description": "Filters payments by their `refId` values - returns only payments with `refIds` listed in this parameter.",
        "example": [
          "ShBdcTeqFabqJJhUF",
          "N5cJDFsQzVca3Q"
        ]
      },
      {
        "name": "onBehalfOfId",
        "schema": "string",
        "required": false,
        "description": "Filters payments by the `onBehalfOfId` value - returns only payments with `onBehalfOfId` specified in this parameter.",
        "example": "c5a863bc-86f2-4418-a26f-25b24c7983c7"
      },
      {
        "name": "refundStatuses",
        "schema": "array",
        "required": false,
        "description": "Filters payments by their refund status values - returns only payments with refund statuses listed in this parameter.",
        "example": [
          "PARTIAL",
          "NONE"
        ]
      },
      {
        "name": "partial",
        "schema": "boolean",
        "required": false,
        "description": "Returns payments in a partial format - with only id and status fields populated.",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The request does not have valid authentication credentials needed to perform the operation."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/payments",
    "method": "initiatePayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Single Immediate Payments v2",
    "typeScriptTag": "singleImmediatePaymentsV2",
    "description": "Initiate a payment",
    "parameters": [
      {
        "name": "requestTimeout",
        "schema": "integer",
        "required": false,
        "description": "Sets the number of elapsed seconds until the call is aborted with a `DEADLINE_EXCEEDED` exception due to no response received.",
        "example": 10
      },
      {
        "name": "initiation",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "pispConsentAccepted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "initialEmbeddedAuth",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "username": "John Smith"
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/payments/{paymentId}/embedded-auth",
    "method": "provideEmbeddedAuthInfo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Single Immediate Payments v2",
    "typeScriptTag": "singleImmediatePaymentsV2",
    "description": "Provide information for embedded authentication",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENTID"
      },
      {
        "name": "embeddedAuth",
        "schema": "object",
        "description": "",
        "example": {
          "123": "SMS message"
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/payments/{paymentId}",
    "method": "getPaymentDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Single Immediate Payments v2",
    "typeScriptTag": "singleImmediatePaymentsV2",
    "description": "Get a payment",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/virtual-accounts",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Virtual Accounts - BETA",
    "typeScriptTag": "virtualAccountsBeta",
    "description": "Get virtual accounts",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of records to return. <br/>The maximum allowed limit is 200. If the passed limit is bigger than this, it will be set to 200."
      },
      {
        "name": "offset",
        "schema": "string",
        "required": false,
        "description": "The offset for the current page. The offset is not required to fetch the first page. To fetch subsequent pages, use the 'nextOffset' value from the previous page response. <br/>The offset value should not be parsed and/or understood in any way."
      },
      {
        "name": "currency",
        "schema": "string",
        "required": false,
        "description": "The <a href=\"https://www.iso.org/iso-4217-currency-codes.html\" target=\"_blank\">ISO 4217</a> three letter currency code.",
        "example": "EUR"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "The <a href=\"https://www.iso.org/obp/ui/#search\" target=\"_blank\">ISO 3166-1 Alpha 2 country codes</a>.",
        "example": "PL"
      },
      {
        "name": "nickname",
        "schema": "string",
        "required": false,
        "description": "The alias name that identifies the virtual account.",
        "example": "Account Alias"
      },
      {
        "name": "onBehalfOfId",
        "schema": "string",
        "required": false,
        "description": "An id of the ultimate client on whose behalf the account is created. If the account is created on behalf of a sub-TPP, this field should contain the sub-TPP `referenceId`.",
        "example": "c5a863bc-86f2-4418-a26f-25b24c7983c7"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains the response to the get virtual accounts request."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/virtual-accounts",
    "method": "createAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Virtual Accounts - BETA",
    "typeScriptTag": "virtualAccountsBeta",
    "description": "Create a virtual account",
    "parameters": [
      {
        "name": "accountNickName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Account Alias"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EUR"
      },
      {
        "name": "onBehalfOfId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": [
          "c5a863bc-86f2-4418-a26f-25b24c7983c7",
          "6f34h397-b29h-23b0-s30g-hkd0d2dk4k1s"
        ]
      },
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COUNTRY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains the response to the submitted request."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/virtual-accounts/{accountId}",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Virtual Accounts - BETA",
    "typeScriptTag": "virtualAccountsBeta",
    "description": "Get a virtual account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains the response to the create virtual account request."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/virtual-accounts/{accountId}/transactions",
    "method": "getTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Virtual Accounts - BETA",
    "typeScriptTag": "virtualAccountsBeta",
    "description": "Get virtual account transactions",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNTID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of records to return. <br/>The maximum allowed limit is 200. If the passed limit is bigger than this, it will be set to 200."
      },
      {
        "name": "offset",
        "schema": "string",
        "required": false,
        "description": "The offset for the current page. The offset is not required to fetch the first page. To fetch subsequent pages, use the 'nextOffset' value from the previous page response. <br/>The offset value should not be parsed and/or understood in any way."
      },
      {
        "name": "refId",
        "schema": "string",
        "required": false,
        "description": "Filters transactions by their `refId` value - returns only transactions with `refId` mentioned in the reference."
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "Returns transactions created on or after this date, inclusive (in <a href=\"https://www.iso.org/iso-8601-date-and-time-format.html\" target=\"_blank\">ISO 8601</a> format).",
        "example": "2022-04-05"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "Returns transactions created on or before this date, inclusive (in <a href=\"https://www.iso.org/iso-8601-date-and-time-format.html\" target=\"_blank\">ISO 8601</a> format).",
        "example": "2022-04-05"
      },
      {
        "name": "amount",
        "schema": "string",
        "required": false,
        "description": "Filters transactions by their transaction amount."
      },
      {
        "name": "providerPaymentId",
        "schema": "string",
        "required": false,
        "description": "Filters transactions by the provider-payment-id."
      },
      {
        "name": "transactionType",
        "schema": "string",
        "required": false,
        "description": "Filters transactions by type to include only CREDIT or DEBIT transactions.",
        "example": "CREDIT",
        "default": "INVALID_TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/virtual-accounts/{accountId}/transactions/{providerPaymentId}",
    "method": "getTransaction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Virtual Accounts - BETA",
    "typeScriptTag": "virtualAccountsBeta",
    "description": "Get a virtual account transaction",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNTID"
      },
      {
        "name": "providerPaymentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERPAYMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/virtual-accounts/{account_id}/settlement-rule",
    "method": "createSettlementRule",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Virtual Accounts - BETA",
    "typeScriptTag": "virtualAccountsBeta",
    "description": "Create a settlement rule",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "pa:8DbPteGnytmMbKXdnWTReeRB6cYWKXZ84JgLTBC7fKL4:5zKcENpV"
      },
      {
        "name": "payeeAccountDetails",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "amountType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AMOUNTTYPE"
      },
      {
        "name": "amountValue",
        "schema": "string",
        "required": true,
        "description": "",
        "example": 10
      },
      {
        "name": "timeInterval",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TIMEINTERVAL"
      },
      {
        "name": "effectiveFrom",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2024-01-01T12:34:56Z"
      },
      {
        "name": "effectiveTo",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2024-12-01T12:34:56Z"
      },
      {
        "name": "intradayIntervalHours",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 2
      },
      {
        "name": "intradayIntervalMinutes",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains the response of the create virtual account settlement rule request."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/virtual-accounts/{account_id}/settlement-rules/{settlement_rule_id}",
    "method": "deleteSettlementRule",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Virtual Accounts - BETA",
    "typeScriptTag": "virtualAccountsBeta",
    "description": "Delete a settlement rule",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The id of the virtual account.",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "settlementRuleId",
        "schema": "string",
        "required": true,
        "description": "The id of the settlement rule.",
        "example": "SETTLEMENT_RULE_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No data returned in the successful response."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/virtual-accounts/{account_id}/settlement-rules/{settlement_rule_id}",
    "method": "getRule",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Virtual Accounts - BETA",
    "typeScriptTag": "virtualAccountsBeta",
    "description": "Get a settlement rule",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The id of the virtual account.",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "settlementRuleId",
        "schema": "string",
        "required": true,
        "description": "The id of the settlement rule.",
        "example": "SETTLEMENT_RULE_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains the response of the get virtual account settlement rule request."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/virtual-accounts/{account_id}/settlement-rules",
    "method": "getSettlementRules",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Virtual Accounts - BETA",
    "typeScriptTag": "virtualAccountsBeta",
    "description": "Get settlement rules",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The id of the virtual account.",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "pa:8DbPteGnytmMbKXdnWTReeRB6cYWKXZ84JgLTBC7fKL4:5zKcENpV"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains the response of the get virtual account settlement rules request."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/virtual-accounts/{account_id}/settlement-rule-payouts",
    "method": "getSettlementPayouts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Virtual Accounts - BETA",
    "typeScriptTag": "virtualAccountsBeta",
    "description": "Get virtual account settlement payouts",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The id of the virtual account.",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "pa:8DbPteGnytmMbKXdnWTReeRB6cYWKXZ84JgLTBC7fKL4:5zKcENpV"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 10
      },
      {
        "name": "offset",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "LerV6Jmex"
      },
      {
        "name": "settlementRuleId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "123e4567-e89b-12d3-a456-426614174000"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2024-01-01"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2024-12-01"
      },
      {
        "name": "ids",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "123e4567-e89b-12d3-a456-426614174000"
        ]
      },
      {
        "name": "invertIds",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "statuses",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "INITIATION_PENDING",
          "INITIATION_PROCESSING"
        ]
      },
      {
        "name": "invertStatuses",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "refIds",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "ShBdcTeqFabqJJhUF"
        ]
      },
      {
        "name": "onBehalfOfId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": [
          "c5a863bc-86f2-4418-a26f-25b24c7983c7"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contains the response of the get virtual account settlement payouts request."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Token.io's Open Banking API for TPPs"
      apiBaseUrl="https://api.token.io"
      apiVersion="v1.2.3.2"
      endpoints={50}
      sdkMethods={63}
      schemas={415}
      parameters={271}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/token/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/token/openapi.yaml"
      developerDocumentation="reference.token.io/"
    />
  );
}
  