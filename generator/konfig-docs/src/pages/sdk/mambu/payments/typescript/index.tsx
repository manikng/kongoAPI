import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function MambuPaymentsTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="mambu-payments-typescript-sdk"
      metaDescription={`Heard of composable banking? The concept originated here at Mambu. We've been champions of composable for over a decade.

Mambu is the only true SaaS cloud core banking platform. Our unique and sustainable composable approach means that independent engines, systems and connectors can be assembled in any configuration to meet business requirements and the ever-changing demands of your customers. 260+ banks, lenders, fintechs, and even retailers in 65 countries turn to us to help them build modern digital financial products faster, securely and cost-effectively.

Ready to become a Mambuvian? Check our Jobs tab.`}
      company="Mambu"
      serviceName="Payments"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/mambu/payments/logo.png"
      companyKebabCase="mambu"
      clientNameCamelCase="mambuPayments"
      homepage="mambu.com"
      lastUpdated={new Date("2024-03-29T22:25:17.346Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/mambu/payments/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/mambu/payments/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["finance","banking"]}
      methods={[
  {
    "url": "/accounts/{accountId}/blocking-rules",
    "method": "removeBlockingRules",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "SEPA Direct Debit",
    "typeScriptTag": "sepaDirectDebit",
    "description": "Request deletion of blocking rules for the specified Mambu account. If no request body is provided, all rules for the account will be removed, if you provide a JSON body with a specific mandate ID, only the rule for that mandate will be removed. For more information on blocking SEPA Direct Debits, consult the [Blocking SEPA Direct Debits](https://support.mambu.com/docs/blocking-sepa-direct-debits) article in our user guide.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNTID"
      },
      {
        "name": "creditorMandate",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "product",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRODUCT"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted - Blocking rules for the specified account have been submitted for deletion."
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/accounts/{accountId}/blocking-rules",
    "method": "addBlockingRule",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SEPA Direct Debit",
    "typeScriptTag": "sepaDirectDebit",
    "description": "Request a blocking rule to be added to a specific Mambu account. When a blocking rule has been added for a specific mandate ID, collection requests for that mandate will be rejected and a pacs.002 message sent as response with reason code MS02. If no specific mandate ID is provided, all direct debit collection requests for the given account will be rejected. For more information on blocking SEPA Direct Debits, consult the [Blocking SEPA Direct Debits](https://support.mambu.com/docs/blocking-sepa-direct-debits) article in our user guide.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNTID"
      },
      {
        "name": "creditorMandate",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "product",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRODUCT"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted - The Blocking Rule has been prepared for processing."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/accounts/{accountId}/identifications",
    "method": "getIdentifications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "External Account Representation",
    "typeScriptTag": "externalAccountRepresentation",
    "description": "Gets associations of an external account identification (IBAN or proprietary) to a Mambu Account.",
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
        "description": "",
        "default": 50
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "",
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/accounts/{accountId}/identifications",
    "method": "addIdentificationAssociation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "External Account Representation",
    "typeScriptTag": "externalAccountRepresentation",
    "description": "Adds association of an external account identification (IBAN or proprietary) to a Mambu Account. The currency of the association will be the one of the underlining Mambu account. If an IBAN is supposed to be a multi-currency one, this API needs to be invoked multiple times with different Mambu accounts (for the different currencies).",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNTID"
      },
      {
        "name": "identification",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/accounts/identifications",
    "method": "associateIban",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "External Account Representation",
    "typeScriptTag": "externalAccountRepresentation",
    "description": "Create or replace associations of an external account identification (IBAN or proprietary) to one of Mambu Accounts. The currency of the association will be the one of the underlining Mambu account. ",
    "parameters": [
      {
        "name": "accountIds",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "identification",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/accounts/identifications:search",
    "method": "searchIdentifications",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "External Account Representation",
    "typeScriptTag": "externalAccountRepresentation",
    "description": "Searches identifications (with MambuID included) based on provided filter criteria",
    "parameters": [
      {
        "name": "filterCriteria",
        "schema": "array",
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
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/collections",
    "method": "createCollectionInitiationRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SEPA Direct Debit",
    "typeScriptTag": "sepaDirectDebit",
    "description": "Creates a collection initiation request. This covers the flows as described in the [SEPA Direct Debit](https://support.mambu.com/docs/sepa-direct-debit-creditor-flow) section of our user guide.",
    "parameters": [
      {
        "name": "xRequestId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-REQUEST-ID"
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "creditorAccount",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "creditorAddress",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "creditorAgent",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "creditorIdentification",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "creditorName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREDITORNAME"
      },
      {
        "name": "creditorSchemeIdentification",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "debtorAccount",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "debtorAddress",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "debtorAgent",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "debtorIdentification",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "debtorName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEBTORNAME"
      },
      {
        "name": "instructedAmount",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "localInstrument",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mandateRelatedInformation",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "paymentIdentification",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentTypeInformation",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "purposeCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "remittanceInformationStructured",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "remittanceInformationUnstructured",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "requestedExecutionDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "requestedExecutionTime",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "serviceLevel",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ultimateCreditor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ultimateDebtor",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/log",
    "method": "createOrUpdateLog",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "External Account Representation",
    "typeScriptTag": "externalAccountRepresentation",
    "description": "",
    "parameters": [
      {
        "name": "log",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LOG"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/payments/financial-institution-credit-transfers",
    "method": "submitPaymentRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CreditTransfer",
    "typeScriptTag": "creditTransfer",
    "description": "",
    "parameters": [
      {
        "name": "xRequestId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-REQUEST-ID"
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "categoryPurposeCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "creditor",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "creditorAccount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "creditorAgent",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "debtor",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "debtorAccount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "debtorAgent",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "instructedAmount",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "intermediaryAgent1",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "intermediaryAgent2",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "intermediaryAgent3",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentIdentification",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "purposeCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "remittanceInformationStructured",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "remittanceInformationUnstructured",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "requestedExecutionDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "scheme",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SCHEME"
      },
      {
        "name": "settlementInformation",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "ultimateCreditor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ultimateDebtor",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/payments/credit-transfers",
    "method": "createRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SEPA Credit Transfers",
    "typeScriptTag": "sepaCreditTransfers",
    "description": "",
    "parameters": [
      {
        "name": "xRequestId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-REQUEST-ID"
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "categoryPurposeCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "creditorAccount",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "creditorAddress",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "creditorAgent",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "creditorIdentification",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "creditorName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREDITORNAME"
      },
      {
        "name": "debtorAccount",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "debtorAddress",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "debtorAgent",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "debtorIdentification",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "debtorName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEBTORNAME"
      },
      {
        "name": "instructedAmount",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "localInstrument",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentIdentification",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "purposeCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "remittanceInformationStructured",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "remittanceInformationUnstructured",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "requestedExecutionDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "requestedExecutionTime",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "scheme",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SCHEME"
      },
      {
        "name": "serviceLevel",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "settlementInformation",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "ultimateCreditor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ultimateDebtor",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/payments",
    "method": "createPaymentRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SEPA Credit Transfers",
    "typeScriptTag": "sepaCreditTransfers",
    "description": "Creates a payment initiation request. Payments using the SEPA Credit Transfer scheme can only be created for the current date. A pacs.008 message will be generated from the data provided in this request. For more information on how these fields map to SEPA XML messages, refer to the [SEPA Credit Transfer Techincal Information](https://support.mambu.com/docs/sepa-credit-transfer-technical-information#pacs00800102) article in our user guide.",
    "parameters": [
      {
        "name": "xRequestId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-REQUEST-ID"
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "creditorAccount",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "creditorAddress",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "creditorAgent",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "creditorIdentification",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "creditorName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREDITORNAME"
      },
      {
        "name": "debtorAccount",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "debtorAddress",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "debtorAgent",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "debtorIdentification",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "debtorName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEBTORNAME"
      },
      {
        "name": "instructedAmount",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "localInstrument",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentIdentification",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "purposeCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "remittanceInformationStructured",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "remittanceInformationUnstructured",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "requestedExecutionDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "requestedExecutionTime",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "serviceLevel",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ultimateCreditor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ultimateDebtor",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/payments/standing-orders/{id}/executions",
    "method": "listExecutions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Standing Order",
    "typeScriptTag": "standingOrder",
    "description": "Get executions of standing order",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": "ApiKey header that is used for authentication",
        "example": "APIKEY"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
    "url": "/payments/standing-orders/{id}",
    "method": "cancel",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Standing Order",
    "typeScriptTag": "standingOrder",
    "description": "Cancel Standing order",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Standing order canceled."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/payments/standing-orders/{id}",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Standing Order",
    "typeScriptTag": "standingOrder",
    "description": "Gets Standing order information",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
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
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/payments/standing-orders",
    "method": "createStandingOrderRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Standing Order",
    "typeScriptTag": "standingOrder",
    "description": "API creates standing orders. Standing order creation will trigger periodic payments for provided frequency from start date until the end date.",
    "parameters": [
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "frequency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FREQUENCY"
      },
      {
        "name": "ownerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OWNERID"
      },
      {
        "name": "payment",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "retryPolicy",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTDATE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/payments/standing-orders:search",
    "method": "searchByFilters",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Standing Order",
    "typeScriptTag": "standingOrder",
    "description": "Search for standing orders by search filters such as ownerId",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": "ApiKey header that is used for authentication",
        "example": "APIKEY"
      },
      {
        "name": "filterCriteria",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": ""
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
    "url": "/payments/standing-orders:suspend",
    "method": "suspendRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Standing Order",
    "typeScriptTag": "standingOrder",
    "description": "API suspends standing order for a particular period of time.",
    "parameters": [
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENDDATE"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK - Standing order successfully suspended."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/collections/{collectionId}",
    "method": "getCollectionDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SEPA Direct Debit",
    "typeScriptTag": "sepaDirectDebit",
    "description": "",
    "parameters": [
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COLLECTIONID"
      },
      {
        "name": "detailsLevel",
        "schema": "string",
        "description": "",
        "default": "FULL"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/payments/credit-transfers/{paymentId}",
    "method": "getPaymentDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SEPA Credit Transfers",
    "typeScriptTag": "sepaCreditTransfers",
    "description": "",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENTID"
      },
      {
        "name": "detailsLevel",
        "schema": "string",
        "description": "",
        "default": "FULL"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/payments/{paymentId}",
    "method": "getPaymentDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SEPA Credit Transfers",
    "typeScriptTag": "sepaCreditTransfers",
    "description": "",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENTID"
      },
      {
        "name": "detailsLevel",
        "schema": "string",
        "description": "",
        "default": "FULL"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/payments:settleInstantPayment",
    "method": "acceptInstantPaymentSettlement",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SEPA Credit Transfers",
    "typeScriptTag": "sepaCreditTransfers",
    "description": "Accepts requests for an instant payment settlement.",
    "parameters": [
      {
        "name": "groupHeader",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "transaction",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted - The instant payment settlement request has been accepted for processing."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/payments/{paymentOrderId}:reject",
    "method": "manuallyRejectPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SEPA Credit Transfers",
    "typeScriptTag": "sepaCreditTransfers",
    "description": "Manually Reject an Outgoing Payment.",
    "parameters": [
      {
        "name": "paymentOrderId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENTORDERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK - The specified payment order has been marked to be manually rejected."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/payments/{paymentOrderId}:recall",
    "method": "recallPaymentRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SEPA Credit Transfers",
    "typeScriptTag": "sepaCreditTransfers",
    "description": "Recall an outgoing payment.",
    "parameters": [
      {
        "name": "paymentOrderId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENTORDERID"
      },
      {
        "name": "customerRecallReasonCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "recallReasonCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECALLREASONCODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK - Payment marked to be recalled successfully."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/payments/{paymentOrderId}:denyOutgoingRecall",
    "method": "denyOutgoingRecallAction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SEPA Credit Transfers",
    "typeScriptTag": "sepaCreditTransfers",
    "description": "Deny an Outgoing Recall.",
    "parameters": [
      {
        "name": "paymentOrderId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENTORDERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK - The specified outgoing recall has been marked to be rejected."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/payments/{paymentOrderId}:denyIncomingRecall",
    "method": "denyIncomingRecallAction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SEPA Credit Transfers",
    "typeScriptTag": "sepaCreditTransfers",
    "description": "Deny an Incoming Recall.",
    "parameters": [
      {
        "name": "paymentOrderId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENTORDERID"
      },
      {
        "name": "additionalInformation",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "originalRecallReasonAdditionalInformation",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "rejectionReason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REJECTIONREASON"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK - The specified incoming recall has been marked to be rejected."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/payments/{paymentOrderId}:approveOutgoingRecall",
    "method": "approveOutgoingRecallAction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SEPA Credit Transfers",
    "typeScriptTag": "sepaCreditTransfers",
    "description": "Approve an Outgoing Recall.",
    "parameters": [
      {
        "name": "paymentOrderId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENTORDERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK - The specified outgoing recall has been authorized."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/payments/{paymentOrderId}:approveIncomingRecall",
    "method": "approveIncomingRecall",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SEPA Credit Transfers",
    "typeScriptTag": "sepaCreditTransfers",
    "description": "Approve an Incoming Recall.",
    "parameters": [
      {
        "name": "paymentOrderId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENTORDERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK - The specified incoming recall has been authorized."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/payments/{paymentOrderId}/aml:resendCallout",
    "method": "resendCallout",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AML",
    "typeScriptTag": "aml",
    "description": "Resends the AML callout for an Outgoing payment.",
    "parameters": [
      {
        "name": "paymentOrderId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENTORDERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK - The AML callout was resent for the provided payment order."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/payments/incoming",
    "method": "createRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Incoming Messages",
    "typeScriptTag": "incomingMessages",
    "description": "Creates an incoming message request.",
    "parameters": [
      {
        "name": "xRequestId",
        "schema": "string",
        "required": true,
        "description": "ID of the request, unique to the call, as determined by the initiating party.",
        "example": "X-REQUEST-ID"
      },
      {
        "name": "xPaymentScheme",
        "schema": "string",
        "required": false,
        "description": "Specifies payment scheme for processing."
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/payments/aml",
    "method": "submitAmlCheckResult",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AML",
    "typeScriptTag": "aml",
    "description": "Accepts AML check results for Payment Orders, for example SEPA Credit Transfers.",
    "parameters": [
      {
        "name": "xRequestId",
        "schema": "string",
        "required": true,
        "description": "ID of the request, unique to the call, as determined by the initiating party.",
        "example": "X-REQUEST-ID"
      },
      {
        "name": "groupHeader",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "transactions",
        "schema": "array",
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
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/inquiries:skipStatusUpdateOnRecall",
    "method": "skipRecallStatusUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SEPA Credit Transfer Inquiries",
    "typeScriptTag": "sepaCreditTransferInquiries",
    "description": "Skips response for Request for Status Update on Recall with given details.",
    "parameters": [
      {
        "name": "groupHeader",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "transactionInformation",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK - Request for skipping Status Update on Recall response was received"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/inquiries:requestStatusUpdateOnRecall",
    "method": "requestStatusUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SEPA Credit Transfer Inquiries",
    "typeScriptTag": "sepaCreditTransferInquiries",
    "description": "Create inquiry to request status update for a payment cancellation.",
    "parameters": [
      {
        "name": "cancellationIdentification",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CANCELLATIONIDENTIFICATION"
      },
      {
        "name": "groupHeader",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "historicCancellationRequest",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK - Inquiry created successfully."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/inquiries:requestStatusUpdateOnInquiry",
    "method": "createStatusUpdateRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SEPA Credit Transfer Inquiries",
    "typeScriptTag": "sepaCreditTransferInquiries",
    "description": "Create status update request for existing camt.087 or camt.027 inquiry",
    "parameters": [
      {
        "name": "assignment",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "caseIdentification",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CASEIDENTIFICATION"
      },
      {
        "name": "historicClaimRequest",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "messageTypeName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MESSAGETYPENAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK - Inquiry created successfully."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/inquiries:rejectStatusUpdateOnRecall",
    "method": "handleNegativeStatusUpdateOnRecall",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SEPA Credit Transfer Inquiries",
    "typeScriptTag": "sepaCreditTransferInquiries",
    "description": "Handles negative response for Request for Status Update on Recall with given details.",
    "parameters": [
      {
        "name": "cancellationDetails",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "groupHeader",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "transactionInformation",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK - Request for Status Update on Recall negative response was received"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/inquiries:claimValueDateCorrection",
    "method": "requestValueDateChange",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SEPA Credit Transfer Inquiries",
    "typeScriptTag": "sepaCreditTransferInquiries",
    "description": "Create inquiry to request claim for value-date change.",
    "parameters": [
      {
        "name": "claimedValueDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "groupHeader",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "historicCreditTransferRequest",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentIdentification",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK - Inquiry created successfully."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/inquiries:claimNonReceipt",
    "method": "createNonReceiptInquiry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SEPA Credit Transfer Inquiries",
    "typeScriptTag": "sepaCreditTransferInquiries",
    "description": "Create inquiry for claim of non-receipt",
    "parameters": [
      {
        "name": "claimedValueDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "groupHeader",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "historicCreditTransferRequest",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentIdentification",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK - Inquiry created successfully."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/inquiries:acceptStatusUpdateOnRecall",
    "method": "acceptStatusUpdateOnRecall",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SEPA Credit Transfer Inquiries",
    "typeScriptTag": "sepaCreditTransferInquiries",
    "description": "Handles positive response for Request for Status Update on Recall with given details.",
    "parameters": [
      {
        "name": "groupHeader",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "transactionInformation",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK - Request for Status Update on Recall positive response was received"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/collections/{collectionOrderId}:reject",
    "method": "manuallyRejectCollection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SEPA Direct Debit",
    "typeScriptTag": "sepaDirectDebit",
    "description": "Manually Reject an Outgoing Collection.",
    "parameters": [
      {
        "name": "collectionOrderId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COLLECTIONORDERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK - The specified collection order has been marked to be manually rejected."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/collections/{collectionOrderId}:rejectIncoming",
    "method": "manuallyRejectCollection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SEPA Direct Debit",
    "typeScriptTag": "sepaDirectDebit",
    "description": "Manually Reject an Incoming Collection.",
    "parameters": [
      {
        "name": "collectionOrderId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COLLECTIONORDERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK - The specified collection order has been marked to be manually rejected."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/collections/{collectionId}:reverse",
    "method": "reverseCollectionInstruction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SEPA Direct Debit",
    "typeScriptTag": "sepaDirectDebit",
    "description": "Reverse a Collection Instruction.",
    "parameters": [
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COLLECTIONID"
      },
      {
        "name": "reasonCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REASONCODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK - Collection Instruction marked to be reversed successfully."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/collections/{collectionId}:refund",
    "method": "refundCollectionInstruction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SEPA Direct Debit",
    "typeScriptTag": "sepaDirectDebit",
    "description": "Refund a Collection Instruction.",
    "parameters": [
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COLLECTIONID"
      },
      {
        "name": "reasonCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REASONCODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK - Collection Instruction marked to be refunded successfully."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/collections/{collectionId}/aml:resendCallout",
    "method": "resendCallout",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AML",
    "typeScriptTag": "aml",
    "description": "Resends the AML callout for an Outgoing collection.",
    "parameters": [
      {
        "name": "collectionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COLLECTIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK - The AML callout was resent for the provided collection order."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/collections/aml",
    "method": "submitAmlCheckResults",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AML",
    "typeScriptTag": "aml",
    "description": "Accepts AML check results for collections, for example, SEPA Direct Debits.",
    "parameters": [
      {
        "name": "xRequestId",
        "schema": "string",
        "required": true,
        "description": "ID of the request, unique to the call, as determined by the initiating party.",
        "example": "X-REQUEST-ID"
      },
      {
        "name": "groupHeader",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "transactions",
        "schema": "array",
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
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/aml:resendCallouts",
    "method": "resendCalloutsOperation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AML",
    "typeScriptTag": "aml",
    "description": "Resends the AML callouts.",
    "parameters": [
      {
        "name": "category",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "direction",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DIRECTION"
      },
      {
        "name": "instructingAgent",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "interbankSettlementDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "messageId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK - The AML callouts were resent."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/accounts/identifications:mask",
    "method": "maskIdentifications",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "External Account Representation",
    "typeScriptTag": "externalAccountRepresentation",
    "description": "Mask identifications from Payments Gateway.",
    "parameters": [
      {
        "name": "identifications",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK - Identifications masked. This operation is irreversible."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  },
  {
    "url": "/instructions",
    "method": "details",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search Messages",
    "typeScriptTag": "searchMessages",
    "description": "Retrieve the SEPA messages details.",
    "parameters": [
      {
        "name": "sepaMessageFilter",
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
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": "Service Unavailable - The server is currently unavailable. Generally, this is a temporary state."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Payment Order API"
      apiBaseUrl="https://TENANT_NAME.mambu.com/api/v1"
      apiVersion="v1.44.15"
      endpoints={43}
      sdkMethods={46}
      schemas={100}
      parameters={208}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/mambu/payments/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/mambu/payments/openapi.yaml"
      developerDocumentation="api.mambu.com/payments-api/#welcome"
    />
  );
}
  