import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function BillsbyTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="billsby-typescript-sdk"
      metaDescription={`Billsby is a feature-rich "Saas" recurring payment platform, ranked as the leading subscription billing software by G2.

Billsby is designed to ensure customers can go live quickly, often within 1-2 hours.  To help facilitate this process we have a team of friendly knowledgeable advisors ready to help your business go live.

Billsby specializes in providing great customer service at an affordable price point - our technology is rated No 1 on G2 by our customers.

If you are a developer creating a solution for your customer, Billsby has a friendly well-documented API.  The Billsby team are here to provide support to developers in order to ensure a smooth migration or new system build.

Why not book a call, talk through your Billing requirements and we can let you know how we can help you transform your business..`}
      company="Billsby"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/billsby/logo.png"
      companyKebabCase="billsby"
      clientNameCamelCase="billsby"
      homepage="www.billsby.com/"
      lastUpdated={new Date("2024-03-26T00:52:31.854Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/billsby/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/billsby/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["billing","payments","subscription_billing","recurring_payments","payment_services"]}
      methods={[
  {
    "url": "/{companyDomain}/customers",
    "method": "listCustomers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "List customers",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": true,
        "description": "The page of customers you would like to view",
        "example": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": true,
        "description": "The number of records to return per page (max 100)",
        "example": 0
      },
      {
        "name": "search",
        "schema": "string",
        "description": "Filter customers by name (this can be a partial name)"
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
    "url": "/{companyDomain}/customers",
    "method": "createWithoutSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Create without subscription",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "addressLine1",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ADDRESSLINE1"
      },
      {
        "name": "addressLine2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CITY"
      },
      {
        "name": "state",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATE"
      },
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COUNTRY"
      },
      {
        "name": "postCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSTCODE"
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNAME"
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LASTNAME"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "cardDetails",
        "schema": "object",
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
    "url": "/{companyDomain}/customers/{customerUniqueId}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Delete a customer",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "customerUniqueId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the customer in the Billsby platform",
        "example": "CUSTOMERUNIQUEID"
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
    "url": "/{companyDomain}/customers/{customerUniqueId}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Customer details",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "customerUniqueId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the customer in the Billsby platform",
        "example": "CUSTOMERUNIQUEID"
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
    "url": "/{companyDomain}/customers/{customerUniqueId}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Update customer",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "customerUniqueId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the customer in the Billsby platform",
        "example": "CUSTOMERUNIQUEID"
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNAME"
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LASTNAME"
      },
      {
        "name": "phoneNumberDialCountry",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phoneNumberDialCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "billingAddress",
        "schema": "object",
        "required": true,
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
    "url": "/{companyDomain}/customers/{customerUniqueId}/subscriptions",
    "method": "getSubscriptionsByUniqueId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Customer subscriptions",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "customerUniqueId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the customer in the Billsby platform",
        "example": "CUSTOMERUNIQUEID"
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
    "url": "/{companyDomain}/customers/{customerUniqueId}/subscriptions",
    "method": "addSubscriptionToExistingCustomer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Add subscription to existing customer",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "customerUniqueId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the customer in the Billsby platform",
        "example": "CUSTOMERUNIQUEID"
      },
      {
        "name": "cycleId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "units",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "address",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "shippingAddress",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "additionalEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phoneNumberDialCountry",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phoneNumberDialCode",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "marketingConsent",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "taxRegNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ipAddress",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customFieldResponse",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "addOns",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "allowances",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "couponCodes",
        "schema": "array",
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
    "url": "/{companyDomain}/customers/{customerUniqueId}/subscriptions/featuretags",
    "method": "getFeatureTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Customer feature tags",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "customerUniqueId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the customer in the Billsby platform",
        "example": "CUSTOMERUNIQUEID"
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
    "url": "/{companyDomain}/customers/{customerUniqueId}/invoices/{invoiceNumber}/paymentlogs",
    "method": "getPaymentLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice",
    "typeScriptTag": "invoice",
    "description": "Customer payment logs",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "customerUniqueId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the customer in the Billsby platform",
        "example": "CUSTOMERUNIQUEID"
      },
      {
        "name": "invoiceNumber",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the invoice in the Billsby platform",
        "example": "INVOICENUMBER"
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
    "url": "/{companyDomain}/customers/{customerUniqueId}/paymentdetailsrequest",
    "method": "updatePaymentDetailsRequest",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Request to update payment details",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "customerUniqueId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the customer in the Billsby platform",
        "example": "CUSTOMERUNIQUEID"
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
    "url": "/{companyDomain}/customers/{customerUniqueId}/paymentCard",
    "method": "updatePaymentCardToken",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Update payment card token",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "customerUniqueId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the customer in the Billsby platform",
        "example": "CUSTOMERUNIQUEID"
      },
      {
        "name": "fullName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentCardtoken",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expiryMonth",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "expiryYear",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "cardType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "last4Digits",
        "schema": "string",
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
    "url": "/{companyDomain}/customers/{customerUniqueId}/invoices",
    "method": "getCustomerInvoices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice",
    "typeScriptTag": "invoice",
    "description": "Customer invoices",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "customerUniqueId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the customer in the Billsby platform",
        "example": "CUSTOMERUNIQUEID"
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
    "url": "/{companyDomain}/customers/{customerUniqueId}/invoices",
    "method": "createOneTimeCharge",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoice",
    "typeScriptTag": "invoice",
    "description": "Create a one-time charge",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "customerUniqueId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the customer in the Billsby platform",
        "example": "CUSTOMERUNIQUEID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCYCODE"
      },
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/{companyDomain}/customers/{customerUniqueId}/gdprcleanup",
    "method": "clearGdprData",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Clear customer data (GDPR)",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "customerUniqueId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the customer in the Billsby platform",
        "example": "CUSTOMERUNIQUEID"
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
    "url": "/{companyDomain}/subscriptions",
    "method": "listSubscriptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "List subscriptions",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": true,
        "description": "The page of customers you would like to view",
        "example": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": true,
        "description": "The number of records to return per page",
        "example": 0
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "You can order the subscriptions by any of the subscription object properties (e.g. CreatedOn to sort by date of creation)"
      },
      {
        "name": "orderByDescending",
        "schema": "string",
        "description": "The ordering direction of the previously set property (e.g. Descending in CreatedOn will sort from newest to oldest, non-descending from oldest to newest)"
      },
      {
        "name": "isActive",
        "schema": "boolean",
        "description": "Will show only the subscriptions that are active"
      },
      {
        "name": "isInFreeTrial",
        "schema": "boolean",
        "description": "Will show only the subscriptions that are in free trial"
      },
      {
        "name": "productName",
        "schema": "string",
        "description": "Will show only the subscriptions that has products whose names matches the value provided here"
      },
      {
        "name": "planName",
        "schema": "string",
        "description": "Will show only the subscriptions that has plans whose names matches the value provided here"
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
    "url": "/{companyDomain}/subscriptions",
    "method": "createNewCustomerAndSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Create new customer and subscription",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNAME"
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LASTNAME"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "cycleId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "Units",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "address",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "shippingAddress",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "additionalEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phoneNumberDialCountry",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phoneNumberDialCode",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "marketingConsent",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "customFieldResponse",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "addOns",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "allowances",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "couponCodes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "cardDetails",
        "schema": "object",
        "required": true,
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
    "url": "/{companyDomain}/subscriptions/{subscriptionUniqueId}",
    "method": "cancelSubscription",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Cancel a subscription",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "subscriptionUniqueId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the subscription in the Billsby platform",
        "example": "SUBSCRIPTIONUNIQUEID"
      },
      {
        "name": "customerUniqueId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the customer in the Billsby platform",
        "example": "CUSTOMERUNIQUEID"
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
    "url": "/{companyDomain}/subscriptions/{subscriptionUniqueId}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Subscription details",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "subscriptionUniqueId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the subscription in the Billsby platform",
        "example": "SUBSCRIPTIONUNIQUEID"
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
    "url": "/{companyDomain}/subscriptions/{subscriptionUniqueId}/shippingAddress",
    "method": "getShippingAddress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Shipping address",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "subscriptionUniqueId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the subscription in the Billsby platform",
        "example": "SUBSCRIPTIONUNIQUEID"
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
    "url": "/{companyDomain}/subscriptions/{subscriptionUniqueId}/shippingAddress",
    "method": "updateShippingAddress",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Update subscription shipping address",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "subscriptionUniqueId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the subscription in the Billsby platform",
        "example": "SUBSCRIPTIONUNIQUEID"
      },
      {
        "name": "addressLine1",
        "schema": "string",
        "description": ""
      },
      {
        "name": "addressLine2",
        "schema": "string",
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postCode",
        "schema": "string",
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
    "url": "/{companyDomain}/subscriptions/{subscriptionUniqueId}/tags",
    "method": "listTagsBySubscription",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Feature tags by Subscription",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "subscriptionUniqueId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the subscription in the Billsby platform",
        "example": "SUBSCRIPTIONUNIQUEID"
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
    "url": "/{companyDomain}/subscriptions/{subscriptionUniqueId}/tags/split",
    "method": "featureTagsSplit",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Feature tags by plan and custom tags",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "subscriptionUniqueId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the subscription in the Billsby platform",
        "example": "SUBSCRIPTIONUNIQUEID"
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
    "url": "/{companyDomain}/subscriptions/{subscriptionUniqueId}/logs",
    "method": "getEventLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Event logs",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "subscriptionUniqueId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the subscription in the Billsby platform",
        "example": "SUBSCRIPTIONUNIQUEID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": true,
        "description": "The page of customers you would like to view",
        "example": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": true,
        "description": "The number of records to return per page (max 100)",
        "example": 0
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
    "url": "/{companyDomain}/subscriptions/tags",
    "method": "addFeatureTags",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Add feature tags",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "subscriptionUniqueIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "tagNames",
        "schema": "array",
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
    "url": "/{companyDomain}/subscriptions/{subscriptionUniqueId}/plan",
    "method": "changePlan",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Change plan",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "subscriptionUniqueId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the subscription in the Billsby platform",
        "example": "SUBSCRIPTIONUNIQUEID"
      },
      {
        "name": "planId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "cycleId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "customerUniqueId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMERUNIQUEID"
      },
      {
        "name": "planChangeType",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1
      },
      {
        "name": "units",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "addOns",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "allowances",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "issueRefund",
        "schema": "boolean",
        "required": false,
        "description": "",
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
    "url": "/{companyDomain}/subscriptions/tags/{tagname}",
    "method": "removeFeatureTag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Delete feature tag",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "tagname",
        "schema": "string",
        "required": true,
        "description": "The name of the custom feature tag you would like to delete",
        "example": "TAGNAME"
      },
      {
        "name": "subsId",
        "schema": "string",
        "description": "The unique identifier of the subscription in the Billsby platform"
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
    "url": "/{companyDomain}/subscriptions/{subscriptionUniqueId}/renewaldate",
    "method": "updateRenewalDate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Update next renewal date",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "subscriptionUniqueId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the subscription in the Billsby platform",
        "example": "SUBSCRIPTIONUNIQUEID"
      },
      {
        "name": "pauseSubscription",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "newRenewalDate",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/{invoiceNumber}",
    "method": "details",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice",
    "typeScriptTag": "invoice",
    "description": "Individual invoices",
    "parameters": [
      {
        "name": "invoiceNumber",
        "schema": "string",
        "required": true,
        "description": "The invoice number for the invoice you'd like to retrieve",
        "example": "INVOICENUMBER"
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
      }
    ]
  },
  {
    "url": "/{companyDomain}/companies/invoices",
    "method": "listCompanyInvoices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoice",
    "typeScriptTag": "invoice",
    "description": "Company invoices",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": true,
        "description": "The page of invoices you would like to view",
        "example": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": true,
        "description": "The number of records to return per page (max 100)",
        "example": 0
      },
      {
        "name": "query",
        "schema": "string",
        "description": "Add search terms here to filter results"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Sort the results by particular properties"
      },
      {
        "name": "orderByDescending",
        "schema": "string",
        "description": "Sort the results by particular properties in descending order"
      },
      {
        "name": "isPending",
        "schema": "boolean",
        "description": "Do you want to show invoices with the status 'pending'; true or false"
      },
      {
        "name": "isPaid",
        "schema": "boolean",
        "description": "Do you want to show invoices with the status 'paid'; true or false"
      },
      {
        "name": "isUnpaid",
        "schema": "string",
        "description": "Do you want to show invoices with the status 'unpaid'; true or false"
      },
      {
        "name": "isPaidOffline",
        "schema": "boolean",
        "description": "Do you want to show invoices with the status 'paid offline'; true or false"
      },
      {
        "name": "isWrittenOff",
        "schema": "boolean",
        "description": "Do you want to show invoices with the status 'written off'; true or false"
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
    "url": "/{companyDomain}/customers/{customerUniqueId}/refunds",
    "method": "createRefund",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoice",
    "typeScriptTag": "invoice",
    "description": "Refund an invoice",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "customerUniqueId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the customer in the Billsby platform",
        "example": "CUSTOMERUNIQUEID"
      },
      {
        "name": "invoiceNumber",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INVOICENUMBER"
      },
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/{companyDomain}/invoices/{invoiceNumber}/Payment",
    "method": "reattemptPayment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Invoice",
    "typeScriptTag": "invoice",
    "description": "Reattempt invoice payment",
    "parameters": [
      {
        "name": "invoiceNumber",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the invoice in the Billsby platform",
        "example": "INVOICENUMBER"
      },
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
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
    "url": "/{companyDomain}/invoices/{invoiceNumber}/PaidOffline",
    "method": "markAsPaidOffline",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Invoice",
    "typeScriptTag": "invoice",
    "description": "Invoice paid offline",
    "parameters": [
      {
        "name": "invoiceNumber",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the invoice in the Billsby platform",
        "example": "INVOICENUMBER"
      },
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
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
      }
    ]
  },
  {
    "url": "/{companyDomain}/invoices/{invoiceNumber}/WrittenOff",
    "method": "markWrittenOff",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Invoice",
    "typeScriptTag": "invoice",
    "description": "Invoice written off",
    "parameters": [
      {
        "name": "invoiceNumber",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the invoice in the Billsby platform",
        "example": "INVOICENUMBER"
      },
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
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
    "url": "/{companyDomain}/companies/creditnotes",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Creditnote",
    "typeScriptTag": "creditnote",
    "description": "Company credit notes",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": true,
        "description": "The page of credit notes you would like to view",
        "example": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": true,
        "description": "The number of records to return per page (max 100)",
        "example": 0
      },
      {
        "name": "query",
        "schema": "string",
        "description": "Add search terms here to filter results"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Sort the results by particular properties"
      },
      {
        "name": "orderByDescending",
        "schema": "string",
        "description": "Sort the results by particular properties in descending order"
      },
      {
        "name": "isPending",
        "schema": "boolean",
        "description": "Do you want to show credit notes with the status 'pending'; true or false"
      },
      {
        "name": "isPaid",
        "schema": "boolean",
        "description": "Do you want to show credit notes with the status 'paid'; true or false"
      },
      {
        "name": "isFailed",
        "schema": "boolean",
        "description": "Do you want to show credit notes with the status 'failed'; true or false"
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
    "url": "/{companyDomain}/customers/{customerUniqueId}/creditNotes",
    "method": "getCreditNotes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Customer credit notes",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "customerUniqueId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the customer in the Billsby platform",
        "example": "CUSTOMERUNIQUEID"
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
    "url": "/{companyDomain} /creditNotes /{creditNoteNumber} /Payment",
    "method": "reattemptPayment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Creditnote",
    "typeScriptTag": "creditnote",
    "description": "Reattempt credit note payment",
    "parameters": [
      {
        "name": "creditNoteNumber",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the credit note in the Billsby platform",
        "example": "CREDITNOTENUMBER"
      },
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
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
    "url": "/{companyDomain}/products/{productId}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "Product details",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "productId",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier of the product in the Billsby platform",
        "example": 0
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
    "url": "/{companyDomain}/products/{productId}",
    "method": "updateProduct",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "Update a product",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "productId",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier of the product in the Billsby platform",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "visibility",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "billingCurrency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "decription",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isShippingAddressRequired",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isShippingAddressValidationRequired",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isBillingAddressValidationRequired",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isAdditionalEmailRequired",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isPhoneNumberRequired",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "is MarketingConsentRequired",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "alertEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "orderedCustomFields",
        "schema": "object",
        "description": ""
      },
      {
        "name": "typeOfProduct",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "productCountryLimitations",
        "schema": "object",
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
    "url": "/{companyDomain}/products",
    "method": "listProducts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "List products",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": true,
        "description": "The number of the page you would like to return",
        "example": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": true,
        "description": "The number of entries per page you would like to return",
        "example": 0
      },
      {
        "name": "search",
        "schema": "string",
        "description": "Filter products by name (this can be a partial name)"
      },
      {
        "name": "visibilityType",
        "schema": "integer",
        "description": "The type of visibility of each product; public, hidden and on-sale. Available values: 0, 1, 2, 3 (Public=0, Hidden=1, Internal=2, OffSale=3)"
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
    "url": "/{companyDomain}/products",
    "method": "createNewProduct",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "Create a product",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
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
        "name": "visibility",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "billingCurrency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isShippingAddressRequired",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isShippingAddressValidationRequired",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isBillingAddressValidationRequired",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isAdditionalEmailRequired",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isPhoneNumberRequired",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "is MarketingConsentRequired",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "alertEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "orderedCustomFields",
        "schema": "object",
        "description": ""
      },
      {
        "name": "typeOfProduct",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "productCountryLimitation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "isAnyCountryAllowed",
        "schema": "boolean",
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
    "url": "/{companyDomain}/products/{productId}/plans",
    "method": "listPlans",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "List plans",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "productId",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier of the product in the Billsby platform",
        "example": 0
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
    "url": "/{companyDomain}/products/{productId}/plans",
    "method": "createPlan",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "Create a plan",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "productId",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier of the product in the Billsby platform",
        "example": 0
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
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pricingModel",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "featureTags",
        "schema": "string",
        "description": ""
      },
      {
        "name": "visibility",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "redirectUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "alertEmail",
        "schema": "string",
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
    "url": "/{companyDomain}/products/{productId}/plans/{planId}/cycles",
    "method": "createCycle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "Create a cycle",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "productId",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier of the product in the Billsby platform",
        "example": 0
      },
      {
        "name": "planId",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier of the plan in the Billsby platform",
        "example": 0
      },
      {
        "name": "cyclesInputModel",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "addonPlanInputModels",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "allowancePlanInputModel",
        "schema": "array",
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
    "url": "/{companyDomain}/products/{productId}/plans/{planId}",
    "method": "updatePlanAndCycle",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "Update a plan and cycle",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "productId",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier of the product in the Billsby platform",
        "example": 0
      },
      {
        "name": "planId",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier of the plan in the Billsby platform",
        "example": 0
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
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "featureTags",
        "schema": "string",
        "description": ""
      },
      {
        "name": "visibility",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "cycles",
        "schema": "object",
        "description": ""
      },
      {
        "name": "redirectUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "alertEmail",
        "schema": "string",
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
    "url": "/{companyDomain}/products/{productId}/plans/orders",
    "method": "updatePlanOrder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Product",
    "typeScriptTag": "product",
    "description": "Update plan order",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the product in the Billsby platform",
        "example": "PRODUCTID"
      },
      {
        "name": "orderedPlanIds",
        "schema": "array",
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
    "url": "/usage/{companyDomain}/subscriptions/{subscriptionUniqueId}/counters/{counterId}",
    "method": "getCountersValue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Counter value",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "subscriptionUniqueId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the subscription in the Billsby platform",
        "example": "SUBSCRIPTIONUNIQUEID"
      },
      {
        "name": "counterId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the counter in the Billsby platform",
        "example": "COUNTERID"
      },
      {
        "name": "from",
        "schema": "string",
        "description": "The date you would like the counter value from; format is ISO 8601, e.g. 2020-08-25T18:35:00.000Z"
      },
      {
        "name": "to",
        "schema": "string",
        "description": "The date you would like the counter value to; format is ISO 8601, e.g. 2020-08-25T18:35:00.000Z"
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
    "url": "/operations/{companyDomain}/subscriptions/{subscriptionUniqueId}/counters/{counterId}",
    "method": "updateCounter",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Update counter",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "subscriptionUniqueId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the subscription in the Billsby platform",
        "example": "SUBSCRIPTIONUNIQUEID"
      },
      {
        "name": "counterId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the counter in the Billsby platform",
        "example": "COUNTERID"
      },
      {
        "name": "operationType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OPERATIONTYPE"
      },
      {
        "name": "value",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/{companyDomain}/addons",
    "method": "listAvailableAddons",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Addon",
    "typeScriptTag": "addon",
    "description": "Get a list of available add-ons",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
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
    "url": "/{companyDomain}/addons/{addonId}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Addon",
    "typeScriptTag": "addon",
    "description": "Get add-on details",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "addonId",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier of the add-on in the Billsby platform",
        "example": 0
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
    "url": "/{companyDomain}/allowances",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Allowance",
    "typeScriptTag": "allowance",
    "description": "Get a list of available allowances",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
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
    "url": "/{companyDomain}/allowances/{allowanceId}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Allowance",
    "typeScriptTag": "allowance",
    "description": "Get allowance details",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "allowanceId",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier of the customer in the Billsby platform",
        "example": 0
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
    "url": "/{companyDomain}/subscriptions/{subscriptionUniqueId}/addons",
    "method": "getAddonList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Addon",
    "typeScriptTag": "addon",
    "description": "Get add-ons for specific subscription",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "subscriptionUniqueId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the subscription in the Billsby platform",
        "example": "SUBSCRIPTIONUNIQUEID"
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
    "url": "/{companyDomain}/subscriptions/{subscriptionUniqueId}/allowances",
    "method": "getSpecificSubscriptionAllowances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Allowance",
    "typeScriptTag": "allowance",
    "description": "Get allowances for specific subscription",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "subscriptionUniqueId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the subscription in the Billsby platform",
        "example": "SUBSCRIPTIONUNIQUEID"
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
    "url": "/{companyDomain}/customfields",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CustomField",
    "typeScriptTag": "customField",
    "description": "Custom fields",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
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
    "url": "/{companyDomain}/customfields",
    "method": "createNewField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CustomField",
    "typeScriptTag": "customField",
    "description": "Create custom field",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "type",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LABEL"
      },
      {
        "name": "options",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "compulsory",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
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
    "url": "/{companyDomain}/customfields/{customFieldId}",
    "method": "updateField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "CustomField",
    "typeScriptTag": "customField",
    "description": "Update custom field",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "customFieldId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the custom field in the Billsby platform",
        "example": "CUSTOMFIELDID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "label",
        "schema": "string",
        "description": ""
      },
      {
        "name": "options",
        "schema": "string",
        "description": ""
      },
      {
        "name": "compulsory",
        "schema": "boolean",
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
    "url": "/{companyDomain}/customfieldResponses",
    "method": "getResponse",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CustomField",
    "typeScriptTag": "customField",
    "description": "Custom fields response",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "productId",
        "schema": "integer",
        "description": "The unique identifier of the product in the Billsby platform"
      },
      {
        "name": "customerUniqueId",
        "schema": "string",
        "description": "The unique identifier of the customer in the Billsby platform"
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
      }
    ]
  },
  {
    "url": "/{companyDomain}/customfieldResponses/{customFieldResponseId}",
    "method": "updateCustomFieldResponse",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Customer",
    "typeScriptTag": "customer",
    "description": "Update customer response to custom fields",
    "parameters": [
      {
        "name": "companyDomain",
        "schema": "string",
        "required": true,
        "description": "Your companies Billsby subdomain - for example, if you login at widgets.billsby.com, your companyDomain is widgets",
        "example": "COMPANYDOMAIN"
      },
      {
        "name": "customFieldResponseId",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier for an individual customers response to a question",
        "example": 0
      },
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VALUE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Billsby API"
      apiBaseUrl="https://public.billsby.com/api/v1/rest/core"
      apiVersion="1.3.5"
      endpoints={46}
      sdkMethods={58}
      schemas={83}
      parameters={288}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/billsby/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/billsby/openapi.yaml"
      developerDocumentation="support.billsby.com/reference"
    />
  );
}
  