import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function BelvoTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="belvo-typescript-sdk"
      metaDescription={`Belvo es la plataforma líder de datos y pagos de open finance en Latinoamérica. Ayudamos a innovadores financieros a acceder a los datos financieros de tus usuarios, entender mejor su comportamiento y habilitar pagos instantáneos gracias al open finance, con el objetivo de impulsar productos más eficientes, seguros e inclusivos.`}
      company="Belvo"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/belvo/logo.png"
      companyKebabCase="belvo"
      clientNameCamelCase="belvo"
      homepage="belvo.com"
      lastUpdated={new Date("2024-03-28T23:23:00.755Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/belvo/favicon.png"
      contactUrl="https://developers.belvo.com"
      contactEmail="support@belvo.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/belvo/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["finance","open_banking","fintech","financial_services","latam","latin_america","open_finance"]}
      methods={[
  {
    "url": "/api/links",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Links",
    "typeScriptTag": "links",
    "description": "List all links",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "A page number within the paginated result set.",
        "example": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Indicates how many results to return per page. By default we return 100 results per page.\n\nℹ️ The minimum number of results returned per page is 1 and the maximum is 1000. If you enter a value greater than 1000, our API will default to the maximum value (https://developers.belvo.com.\n",
        "example": 100,
        "default": 100
      },
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "Return information only for this resource `id`.",
        "example": "24ccab1d-3a86-4136-a6eb-e04bf52b356f"
      },
      {
        "name": "idIn",
        "schema": "array",
        "description": "Return information for these resource `id`s.",
        "example": "24ccab1d-3a86-4136-a6eb-e04bf52b356f,beb2b197-3cf7-428d-bef3-f415c0d57509"
      },
      {
        "name": "institution",
        "schema": "string",
        "description": "Return results only for this institution (use the Belvo-designated name, such as `erebor_mx_retail`).",
        "example": "erebor_mx_retail"
      },
      {
        "name": "institutionIn",
        "schema": "array",
        "description": "Return results only for these institutions (use the Belvo-designated names, such as `erebor_mx_retail` and `gringotts_mx_retail`).",
        "example": "erebor_mx_retail,gringotts_mx_retail"
      },
      {
        "name": "accessMode",
        "schema": "string",
        "description": "Return links only with this access mode. Can be either `single` or `recurrent`.",
        "example": "single"
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database on this date (in `YYYY-MM-DD` format).",
        "example": "2022-05-05"
      },
      {
        "name": "createdAtGt",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database after this date (in `YYYY-MM-DD` format).",
        "example": "2022-05-05"
      },
      {
        "name": "createdAtGte",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database after or on this date (in `YYYY-MM-DD` format).",
        "example": "2022-05-04"
      },
      {
        "name": "createdAtLt",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database before this date (in `YYYY-MM-DD` format).",
        "example": "2022-04-01"
      },
      {
        "name": "createdAtLte",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database before or on this date (in `YYYY-MM-DD` format).",
        "example": "2022-03-30"
      },
      {
        "name": "createdAtRange",
        "schema": "array",
        "description": "Return accounts that were last updated in Belvo's database between two dates (in `YYYY-MM-DD` format).",
        "example": "2022-03-03,2022-05-04"
      },
      {
        "name": "createdByNotIn",
        "schema": "array",
        "description": "Return links that were not created by these Belvo users.",
        "example": "578947e2-3c9a-4401-bbad-59b2f2d2b91b,d3d941ab-4ca5-43c1-8b23-db329ee4cb7e"
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": "Return links with this external ID.",
        "example": "InternalUser4000"
      },
      {
        "name": "externalIdIn",
        "schema": "array",
        "description": "Return links with these external IDs.",
        "example": "InternalUser4000,InternalUser4001"
      },
      {
        "name": "institutionUserId",
        "schema": "string",
        "description": "Return links with this specific institution user ID.",
        "example": "ezFoxjPDr7YnASnOaft5F3zt7D0kurgDNlLtZFjxUo0="
      },
      {
        "name": "institutionUserIdIn",
        "schema": "array",
        "description": "Return links with these institution user IDs.",
        "example": "ezFoxjPDr7YnASnOaft5F3zt7D0kurgDNlLtZFjxUo0=,YwuTM0uEEh1BbVgDZBcNpa_-Tm3l2q8ZkZNrlhp-pNA="
      },
      {
        "name": "refreshRate",
        "schema": "string",
        "description": "Return links with this refresh rate. Choose between `6h`, `12h`, `24h`, `7d`, or `30d`.",
        "example": "24h"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Return links with this status. Choose between `valid`, `invalid`, `unconfirmed`, or `token_required`.",
        "example": "invalid"
      },
      {
        "name": "statusIn",
        "schema": "array",
        "description": "Return links with these statuses. Choose between `valid`, `invalid`, `unconfirmed`, or `token_required`.",
        "example": "invalid,unconfirmed"
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
      }
    ]
  },
  {
    "url": "/api/links",
    "method": "resumeSession",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Links",
    "typeScriptTag": "links",
    "description": "Complete a links request",
    "parameters": [
      {
        "name": "session",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "6e7b283c6efa449c9c028a16b5c249fa"
      },
      {
        "name": "token",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1234ab"
      },
      {
        "name": "link",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "683005d6-f45c-4adb-b289-f1a12f50f80c"
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
        "statusCode": "428",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "This error occurs when we (https://developers.belvo.com have encountered an internal system error (sorry about that) or due to an unsupported response from the institution.\n  \n"
      }
    ]
  },
  {
    "url": "/api/links",
    "method": "registerNewLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Links",
    "typeScriptTag": "links",
    "description": "Register a new link",
    "parameters": [
      {
        "name": "institution",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "erebor_mx_retail"
      },
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "username"
      },
      {
        "name": "password",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "password"
      },
      {
        "name": "external_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "56ab5706-6e00-48a4-91c9-ca55968678d9"
      },
      {
        "name": "username2",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "secondusername"
      },
      {
        "name": "username3",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "thirdusername"
      },
      {
        "name": "password2",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "pin"
      },
      {
        "name": "token",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1234ab"
      },
      {
        "name": "access_mode",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "recurrent"
      },
      {
        "name": "fetch_resources",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "ACCOUNTS",
          "TRANSACTIONS"
        ]
      },
      {
        "name": "credentials_storage",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "27d"
      },
      {
        "name": "stale_in",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "42d"
      },
      {
        "name": "username_type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "001"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "428",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "This error occurs when we (https://developers.belvo.com have encountered an internal system error (sorry about that) or due to an unsupported response from the institution.\n  \n"
      }
    ]
  },
  {
    "url": "/api/links/{id}",
    "method": "deleteLinkAccounts",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Links",
    "typeScriptTag": "links",
    "description": "Delete a link",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The `link.id` that you want to delete.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      }
    ]
  },
  {
    "url": "/api/links/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Links",
    "typeScriptTag": "links",
    "description": "Get a link's details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The `link.id` you want to get detailed information about.",
        "example": "ID"
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
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      }
    ]
  },
  {
    "url": "/api/links/{id}",
    "method": "changeAccessMode",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Links",
    "typeScriptTag": "links",
    "description": "Change a link's access mode",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The `link.id` you want to change the `access_mode` for.",
        "example": "e4bb1afb-4a4f-4dd6-8be0-e615d233185b"
      },
      {
        "name": "access_mode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCESS_MODE",
        "default": "recurrent"
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
        "statusCode": "404",
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      },
      {
        "statusCode": "428",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "This error occurs when we (https://developers.belvo.com have encountered an internal system error (sorry about that) or due to an unsupported response from the institution.\n  \n"
      }
    ]
  },
  {
    "url": "/api/links/{id}",
    "method": "updateCredentials",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Links",
    "typeScriptTag": "links",
    "description": "Update a link's credentials",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The `link.id` you want to update.",
        "example": "ID"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "password"
      },
      {
        "name": "password2",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "pin"
      },
      {
        "name": "token",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1234ab"
      },
      {
        "name": "username_type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "001"
      },
      {
        "name": "certificate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1234567890abcd="
      },
      {
        "name": "private_key",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1234567890abcd="
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
        "statusCode": "404",
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      },
      {
        "statusCode": "428",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "This error occurs when we (https://developers.belvo.com have encountered an internal system error (sorry about that) or due to an unsupported response from the institution.\n  \n"
      }
    ]
  },
  {
    "url": "/api/accounts",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "List all accounts",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "A page number within the paginated result set.",
        "example": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Indicates how many results to return per page. By default we return 100 results per page. \n\nℹ️ The minimum number of results returned per page is 1 and the maximum is 1000. If you enter a value greater than 1000, our API will default to the maximum value (https://developers.belvo.com.\n",
        "example": 100,
        "default": 100
      },
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "link",
        "schema": "string",
        "description": "The `link.id` you want to filter by.\n\nℹ️ We highly recommend adding the `link.id` filter in order to improve your performance.\n",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4"
      },
      {
        "name": "linkIn",
        "schema": "array",
        "description": "Return results only for these `link.id`s.",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4,cc2b13cf-336e-497c-9fad-e074b580df65"
      },
      {
        "name": "balanceAvailable",
        "schema": "number",
        "description": "Return accounts that have a `balance.available` matching exactly this value.",
        "example": 4000
      },
      {
        "name": "balanceAvailableLt",
        "schema": "number",
        "description": "Return accounts that have a `balance.available` less than this value.",
        "example": 6000
      },
      {
        "name": "balanceAvailableLte",
        "schema": "number",
        "description": "Return accounts that have a `balance.available` less than or equal to this value.",
        "example": 5999
      },
      {
        "name": "balanceAvailableGt",
        "schema": "number",
        "description": "Return accounts that have a `balance.available` greater than this value.",
        "example": 2000
      },
      {
        "name": "balanceAvailableGte",
        "schema": "number",
        "description": "Return accounts that have a `balance.available` greater than or equal to this value.",
        "example": 1999
      },
      {
        "name": "balanceAvailableRange",
        "schema": "array",
        "description": "Return accounts that have a `balance.available` within a range of two values.",
        "example": "3000.00,4350.00"
      },
      {
        "name": "balanceCurrent",
        "schema": "number",
        "description": "Return accounts that have a `balance.current` matching exactly this value.",
        "example": 4000
      },
      {
        "name": "balanceCurrentLt",
        "schema": "number",
        "description": "Return accounts that have a `balance.current` less than this value.",
        "example": 6000
      },
      {
        "name": "balanceCurrentLte",
        "schema": "number",
        "description": "Return accounts that have a `balance.available` less than or equal to this value.",
        "example": 5999
      },
      {
        "name": "balanceCurrentGt",
        "schema": "number",
        "description": "Return accounts that have a `balance.current` greater than this value.",
        "example": 2000
      },
      {
        "name": "balanceCurrentGte",
        "schema": "number",
        "description": "Return accounts that have a `balance.available` greater than or equal to this value.",
        "example": 1999
      },
      {
        "name": "balanceCurrentRange",
        "schema": "array",
        "description": "Return accounts that have a `balance.current` within a range of two values.",
        "example": "3000.00,4350.00"
      },
      {
        "name": "category",
        "schema": "string",
        "description": "Return accounts only for the given category (for example, `CHECKING_ACCOUNT` and `SAVINGS_ACCOUNT`).",
        "example": "CREDIT_ACCOUNT"
      },
      {
        "name": "categoryIn",
        "schema": "array",
        "description": "Return accounts only for the given categories (for example, `CHECKING_ACCOUNT` and `SAVINGS_ACCOUNT`).",
        "example": "CHECKING_ACCOUNT,SAVINGS_ACCOUNT"
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database on this date (in `YYYY-MM-DD` format).",
        "example": "2022-05-05"
      },
      {
        "name": "createdAtGt",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database after this date (in `YYYY-MM-DD` format).",
        "example": "2022-05-05"
      },
      {
        "name": "createdAtGte",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database after or on this date (in `YYYY-MM-DD` format).",
        "example": "2022-05-04"
      },
      {
        "name": "createdAtLt",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database before this date (in `YYYY-MM-DD` format).",
        "example": "2022-04-01"
      },
      {
        "name": "createdAtLte",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database before or on this date (in `YYYY-MM-DD` format).",
        "example": "2022-03-30"
      },
      {
        "name": "createdAtRange",
        "schema": "array",
        "description": "Return accounts that were last updated in Belvo's database between two dates (in `YYYY-MM-DD` format).",
        "example": "2022-03-03,2022-05-04"
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "Return results that hold finances or balances in only this three-letter currency code.",
        "example": "COP"
      },
      {
        "name": "currencyIn",
        "schema": "array",
        "description": "Return results that have funds or balances in one of these three-letter currency codes.",
        "example": "COP,MXN"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "Return information only for this resource `id`.",
        "example": "24ccab1d-3a86-4136-a6eb-e04bf52b356f"
      },
      {
        "name": "idIn",
        "schema": "array",
        "description": "Return information for these resource `id`s.",
        "example": "24ccab1d-3a86-4136-a6eb-e04bf52b356f,beb2b197-3cf7-428d-bef3-f415c0d57509"
      },
      {
        "name": "institution",
        "schema": "string",
        "description": "Return results only for this institution (use the Belvo-designated name, such as `erebor_mx_retail`).",
        "example": "erebor_mx_retail"
      },
      {
        "name": "institutionIn",
        "schema": "array",
        "description": "Return results only for these institutions (use the Belvo-designated names, such as `erebor_mx_retail` and `gringotts_mx_retail`).",
        "example": "erebor_mx_retail,gringotts_mx_retail"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "Return accounts with exactly this internal (specified by the institution) name.",
        "example": "Cuenta Perfiles- M.N. - MXN-666"
      },
      {
        "name": "nameIcontains",
        "schema": "string",
        "description": "Return accounts partially matching this internal (specified by the institution) name.",
        "example": "Perfiles"
      },
      {
        "name": "number",
        "schema": "string",
        "description": "Return information only for this account number (as specified by the institution).",
        "example": "4057068115181"
      },
      {
        "name": "numberIn",
        "schema": "array",
        "description": "Return information for these account numbers (as specified by the institution).",
        "example": "4057068115181,7809346821648"
      },
      {
        "name": "publicIdentificationName",
        "schema": "string",
        "description": "Return information only for this type of account ID. For example, CLABE accounts.",
        "example": "CLABE"
      },
      {
        "name": "publicIdentificationValue",
        "schema": "string",
        "description": "Return information only for this account ID. For example, the account number for a CLABE account.",
        "example": "150194683119900273"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "Return information only for accounts matching this account type, as designated by the institution.",
        "example": "Cuentas de efectivo"
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
      }
    ]
  },
  {
    "url": "/api/accounts",
    "method": "resumeRetrieveSession",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Complete an accounts request",
    "parameters": [
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "session",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "6e7b283c6efa449c9c028a16b5c249fa"
      },
      {
        "name": "token",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1234ab"
      },
      {
        "name": "link",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "683005d6-f45c-4adb-b289-f1a12f50f80c"
      },
      {
        "name": "save_data",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
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
        "statusCode": "408",
        "description": "Belvo has a limit regarding the time it takes to log in, retrieve account data, and log out. A timeout occurs when there is a very high amount of data and everything could not be obtained within the allotted time.\n  \n"
      },
      {
        "statusCode": "428",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "This error occurs when we (https://developers.belvo.com have encountered an internal system error (sorry about that) or due to an unsupported response from the institution.\n  \n"
      }
    ]
  },
  {
    "url": "/api/accounts",
    "method": "createLinkAccounts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Retrieve accounts for a link",
    "parameters": [
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "link",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2ccd5e15-194a-4a19-a45a-e7223c7e6717"
      },
      {
        "name": "token",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1234ab"
      },
      {
        "name": "save_data",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
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
        "statusCode": "408",
        "description": "Belvo has a limit regarding the time it takes to log in, retrieve account data, and log out. A timeout occurs when there is a very high amount of data and everything could not be obtained within the allotted time.\n  \n"
      },
      {
        "statusCode": "428",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "This error occurs when we (https://developers.belvo.com have encountered an internal system error (sorry about that) or due to an unsupported response from the institution.\n  \n"
      }
    ]
  },
  {
    "url": "/api/accounts/{id}",
    "method": "deleteSpecificAccount",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Delete an account",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The `account.id` you want to delete.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      }
    ]
  },
  {
    "url": "/api/accounts/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get an account's details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The `account.id` you want to get detailed information about.",
        "example": "ID"
      },
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
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
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      }
    ]
  },
  {
    "url": "/api/transactions",
    "method": "listAllTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "List all transactions",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "A page number within the paginated result set.",
        "example": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Indicates how many results to return per page. By default we return 100 results per page.\n\nℹ️ The minimum number of results returned per page is 1 and the maximum is 1000. If you enter a value greater than 1000, our API will default to the maximum value (https://developers.belvo.com.\n",
        "example": 100,
        "default": 100
      },
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "link",
        "schema": "string",
        "required": true,
        "description": "The `link.id` you want to filter by.\n\nℹ️ We highly recommend adding the `link.id` filter in order to improve your performance.\n",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4"
      },
      {
        "name": "linkIn",
        "schema": "array",
        "description": "Return results only for these `link.id`s.",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4,cc2b13cf-336e-497c-9fad-e074b580df65"
      },
      {
        "name": "account",
        "schema": "string",
        "description": "The `account.id` you want to filter by.\n\nℹ️ We highly recommend adding either the `link.id` or the `account.id` filters in order to improve your performance.\n",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4"
      },
      {
        "name": "accountIn",
        "schema": "array",
        "description": "Return results only for these `account.id`s.",
        "example": "24ccab1d-3a86-4136-a6eb-e04bf52b356f,beb2b197-3cf7-428d-bef3-f415c0d57509"
      },
      {
        "name": "accountBalanceAvailable",
        "schema": "number",
        "description": "Return transactions that have a `account.balance.available` matching exactly this value.",
        "example": 4000
      },
      {
        "name": "accountBalanceAvailableLt",
        "schema": "number",
        "description": "Return transactions that have a `account.balance.available` less than this value.",
        "example": 6000
      },
      {
        "name": "accountBalanceAvailableLte",
        "schema": "number",
        "description": "Return transactions that have a `account.balance.available` less than or equal to this value.",
        "example": 5999
      },
      {
        "name": "accountBalanceAvailableGt",
        "schema": "number",
        "description": "Return transactions that have a `account.balance.available` more than this value.",
        "example": 6000
      },
      {
        "name": "accountBalanceAvailableGte",
        "schema": "number",
        "description": "Return transactions that have a `account.balance.available` more than or equal to this value.",
        "example": 5999
      },
      {
        "name": "accountBalanceAvailableRange",
        "schema": "array",
        "description": "Return transactions that have a `account.balance.available` within a range of two values.",
        "example": "3000.00,4350.00"
      },
      {
        "name": "accountBalanceCurrent",
        "schema": "number",
        "description": "Return transactions that have a `account.balance.current` matching exactly this value.",
        "example": 4000
      },
      {
        "name": "accountBalanceCurrentGt",
        "schema": "number",
        "description": "Return transactions that have a `account.balance.current` greater than this value.",
        "example": 4020
      },
      {
        "name": "accountBalanceCurrentGte",
        "schema": "number",
        "description": "Return transactions that have a `account.balance.current` greater than or equal to this value.",
        "example": 4019
      },
      {
        "name": "accountBalanceCurrentLt",
        "schema": "number",
        "description": "Return transactions that have a `account.balance.current` less than this value.",
        "example": 3000
      },
      {
        "name": "accountBalanceCurrentLte",
        "schema": "number",
        "description": "Return transactions that have a `account.balance.current` less than or equal to this value.",
        "example": 2999
      },
      {
        "name": "accountBalanceCurrentRange",
        "schema": "array",
        "description": "Return transactions that have a `account.balance.current` within a range of two values.",
        "example": "3000.00,4350.00"
      },
      {
        "name": "accountType",
        "schema": "string",
        "description": "Return information only for transactions matching this account type, as designated by the institution.",
        "example": "Cuentas de efectivo"
      },
      {
        "name": "accountTypeIn",
        "schema": "array",
        "description": "Return information only for transactions matching these account types, as designated by the institution.",
        "example": "Cuentas de efectivo,Depositos Ahorro"
      },
      {
        "name": "accountingDate",
        "schema": "string",
        "description": "Return transactions that were processed by the institution on exactly this date (`YYYY-MM-DD`).",
        "example": "2022-05-05"
      },
      {
        "name": "accountingDateGt",
        "schema": "string",
        "description": "Return transactions that were processed by the institution after this date (`YYYY-MM-DD`).",
        "example": "2022-05-06"
      },
      {
        "name": "accountingDateGte",
        "schema": "string",
        "description": "Return transactions that were processed by the institution on this date (`YYYY-MM-DD`) or later.",
        "example": "2022-05-04"
      },
      {
        "name": "accountingDateLt",
        "schema": "string",
        "description": "Return transactions that were processed by the institution before this date (`YYYY-MM-DD`).",
        "example": "2022-03-02"
      },
      {
        "name": "accountingDateLte",
        "schema": "string",
        "description": "Return transactions that were processed by the institution on this date (`YYYY-MM-DD`) or earlier.",
        "example": "2022-03-01"
      },
      {
        "name": "accountingDateRange",
        "schema": "array",
        "description": "Return transactions that were processed by the institution in this date range (`YYYY-MM-DD`).",
        "example": "2022-03-01,2022-05-06"
      },
      {
        "name": "amount",
        "schema": "number",
        "description": "Return results only for this value.",
        "example": 1000
      },
      {
        "name": "amountGt",
        "schema": "number",
        "description": "Return results only for more than this amount.",
        "example": 1000
      },
      {
        "name": "amountGte",
        "schema": "number",
        "description": "Return results only for and more than this amount.",
        "example": 1000
      },
      {
        "name": "amountLt",
        "schema": "number",
        "description": "Return results only for less than this amount.",
        "example": 1000
      },
      {
        "name": "amountLte",
        "schema": "number",
        "description": "Return results only for this amount or less.",
        "example": 1000
      },
      {
        "name": "amountRange",
        "schema": "array",
        "description": "Return results between this amount range.",
        "example": "1001.00,2000.00"
      },
      {
        "name": "collectedAt",
        "schema": "string",
        "description": "Return items that were retrieved from the institution on this date (`YYYY-MM-DD` or full `ISO-8601` timestamp).",
        "example": "2022-05-01"
      },
      {
        "name": "collectedAtGt",
        "schema": "string",
        "description": "Return items that were retrieved from the institution after this date (`YYYY-MM-DD` or full `ISO-8601` timestamp).",
        "example": "2022-05-05"
      },
      {
        "name": "collectedAtGte",
        "schema": "string",
        "description": "Return items that were retrieved from the institution after or on this date (`YYYY-MM-DD` or full `ISO-8601` timestamp).",
        "example": "2022-05-04"
      },
      {
        "name": "collectedAtLt",
        "schema": "string",
        "description": "Return items that were retrieved from the institution before this date (`YYYY-MM-DD` or full `ISO-8601` timestamp).",
        "example": "2022-04-01"
      },
      {
        "name": "collectedAtLte",
        "schema": "string",
        "description": "Return items that were retrieved from the institution before or on this date (`YYYY-MM-DD` or full `ISO-8601` timestamp).",
        "example": "2022-03-30"
      },
      {
        "name": "collectedAtRange",
        "schema": "array",
        "description": "Return items that were retrieved from the institution between two dates (`YYYY-MM-DD` or full `ISO-8601` timestamp).",
        "example": "2022-03-03,2022-05-04"
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database on this date (in `YYYY-MM-DD` format).",
        "example": "2022-05-05"
      },
      {
        "name": "createdAtGt",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database after this date (in `YYYY-MM-DD` format).",
        "example": "2022-05-05"
      },
      {
        "name": "createdAtGte",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database after or on this date (in `YYYY-MM-DD` format).",
        "example": "2022-05-04"
      },
      {
        "name": "createdAtLt",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database before this date (in `YYYY-MM-DD` format).",
        "example": "2022-04-01"
      },
      {
        "name": "createdAtLte",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database before or on this date (in `YYYY-MM-DD` format).",
        "example": "2022-03-30"
      },
      {
        "name": "createdAtRange",
        "schema": "array",
        "description": "Return accounts that were last updated in Belvo's database between two dates (in `YYYY-MM-DD` format).",
        "example": "2022-03-03,2022-05-04"
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "Return results that hold finances or balances in only this three-letter currency code.",
        "example": "COP"
      },
      {
        "name": "currencyIn",
        "schema": "array",
        "description": "Return results that have funds or balances in one of these three-letter currency codes.",
        "example": "COP,MXN"
      },
      {
        "name": "creditCardDataBillNameIn",
        "schema": "array",
        "description": "Return transactions for one of these bill names.",
        "example": "maio-2022,feb-2022"
      },
      {
        "name": "reference",
        "schema": "string",
        "description": "Returns transactions with this institution-assigned reference number.",
        "example": "085904452810319225"
      },
      {
        "name": "referenceIn",
        "schema": "array",
        "description": "Returns transactions with these institution-assigned reference numbers.",
        "example": "085904452810319225,8703"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Return transactions with this status. Can be either `PENDING`, `PROCESSED`, or `UNCATEGORIZED`.",
        "example": "PENDING"
      },
      {
        "name": "statusIn",
        "schema": "array",
        "description": "Return transactions with these statuses. Can be either `PENDING`, `PROCESSED`, or `UNCATEGORIZED`.",
        "example": "PENDING,PROCESSED"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "Return transactions with this type. Can be either `INFLOW` or `OUTFLOW`.",
        "example": "OUTFLOW"
      },
      {
        "name": "typeIn",
        "schema": "array",
        "description": "Return transactions with this types. Can be either `INFLOW` or `OUTFLOW`.",
        "example": "INFLOW,OUTFLOW"
      },
      {
        "name": "valueDate",
        "schema": "string",
        "description": "Return results for exactly this date (`YYYY-MM-DD`).",
        "example": "2022-05-05"
      },
      {
        "name": "valueDateGt",
        "schema": "string",
        "description": "Return results that occurred after this date (`YYYY-MM-DD`).",
        "example": "2022-05-06"
      },
      {
        "name": "valueDateGte",
        "schema": "string",
        "description": "Return results for this date (`YYYY-MM-DD`) or later.",
        "example": "2022-05-04"
      },
      {
        "name": "valueDateLt",
        "schema": "string",
        "description": "Return results for before this date (`YYYY-MM-DD`).",
        "example": "2022-03-02"
      },
      {
        "name": "valueDateLte",
        "schema": "string",
        "description": "Return results for this date (`YYYY-MM-DD`) or earlier.",
        "example": "2022-03-01"
      },
      {
        "name": "valueDateRange",
        "schema": "array",
        "description": "Return results for this date (`YYYY-MM-DD`) range.",
        "example": "2022-03-01,2022-05-06"
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
      }
    ]
  },
  {
    "url": "/api/transactions",
    "method": "resumeRetrieveSession",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Complete a transactions request",
    "parameters": [
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "session",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "6e7b283c6efa449c9c028a16b5c249fa"
      },
      {
        "name": "token",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1234ab"
      },
      {
        "name": "link",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "683005d6-f45c-4adb-b289-f1a12f50f80c"
      },
      {
        "name": "save_data",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
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
        "statusCode": "408",
        "description": "Belvo has a limit regarding the time it takes to log in, retrieve account data, and log out. A timeout occurs when there is a very high amount of data and everything could not be obtained within the allotted time.\n  \n"
      },
      {
        "statusCode": "428",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "This error occurs when we (https://developers.belvo.com have encountered an internal system error (sorry about that) or due to an unsupported response from the institution.\n  \n"
      }
    ]
  },
  {
    "url": "/api/transactions",
    "method": "createLinkTransactions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Retrieve transactions for a link",
    "parameters": [
      {
        "name": "xBelvoRequestMode",
        "schema": "string",
        "description": "",
        "example": "async"
      },
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "link",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2ccd5e15-194a-4a19-a45a-e7223c7e6717"
      },
      {
        "name": "account",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "d4617561-1c01-4b2f-83b6-a594f7b3bc57"
      },
      {
        "name": "date_from",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2020-08-05"
      },
      {
        "name": "date_to",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2020-10-05"
      },
      {
        "name": "token",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1234ab"
      },
      {
        "name": "save_data",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "202",
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
        "statusCode": "408",
        "description": "Belvo has a limit regarding the time it takes to log in, retrieve account data, and log out. A timeout occurs when there is a very high amount of data and everything could not be obtained within the allotted time.\n  \n"
      },
      {
        "statusCode": "428",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "This error occurs when we (https://developers.belvo.com have encountered an internal system error (sorry about that) or due to an unsupported response from the institution.\n  \n"
      }
    ]
  },
  {
    "url": "/api/transactions/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Delete a transaction",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The `transaction.id` that you want to delete.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      }
    ]
  },
  {
    "url": "/api/transactions/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Get a transaction's details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The `transaction.id` you want to get detailed information about.",
        "example": "ID"
      },
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
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
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      }
    ]
  },
  {
    "url": "/api/balances",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Balances",
    "typeScriptTag": "balances",
    "description": "List all balances",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "A page number within the paginated result set.",
        "example": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Indicates how many results to return per page. By default we return 100 results per page.\n\nℹ️ The minimum number of results returned per page is 1 and the maximum is 1000. If you enter a value greater than 1000, our API will default to the maximum value (https://developers.belvo.com.\n",
        "example": 100,
        "default": 100
      },
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "link",
        "schema": "string",
        "description": "The `link.id` you want to filter by.\n\nℹ️ We highly recommend adding the `link.id` filter in order to improve your performance.\n",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4"
      },
      {
        "name": "linkIn",
        "schema": "array",
        "description": "Return results only for these `link.id`s.",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4,cc2b13cf-336e-497c-9fad-e074b580df65"
      },
      {
        "name": "account",
        "schema": "string",
        "description": "The `account.id` you want to filter by.\n\nℹ️ We highly recommend adding either the `link.id` or the `account.id` filters in order to improve your performance.\n",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4"
      },
      {
        "name": "accountIn",
        "schema": "array",
        "description": "Return results only for these `account.id`s.",
        "example": "24ccab1d-3a86-4136-a6eb-e04bf52b356f,beb2b197-3cf7-428d-bef3-f415c0d57509"
      },
      {
        "name": "accountType",
        "schema": "string",
        "description": "Return information only for accounts matching this account type, as designated by the institution.",
        "example": "Cuentas de efectivo"
      },
      {
        "name": "accountTypeIn",
        "schema": "array",
        "description": "Return information only for accounts matching these account types, as designated by the institution.",
        "example": "Cuentas de efectivo,Credito"
      },
      {
        "name": "balance",
        "schema": "number",
        "description": "Return balances matching exactly this value.",
        "example": 530
      },
      {
        "name": "balanceLt",
        "schema": "number",
        "description": "Return balances less than this value.",
        "example": 540
      },
      {
        "name": "balanceLte",
        "schema": "number",
        "description": "Return balances less than or equal to this value.",
        "example": 541
      },
      {
        "name": "balanceGt",
        "schema": "number",
        "description": "Return balances greater than this value.",
        "example": 520
      },
      {
        "name": "balanceGte",
        "schema": "number",
        "description": "Return balances greater than or equal to this value.",
        "example": 519
      },
      {
        "name": "balanceRange",
        "schema": "array",
        "description": "Return balances between these two values.",
        "example": "519.00,541.00"
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "Return results that hold finances or balances in only this three-letter currency code.",
        "example": "COP"
      },
      {
        "name": "currencyIn",
        "schema": "array",
        "description": "Return results that have funds or balances in one of these three-letter currency codes.",
        "example": "COP,MXN"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "Return information only for this resource `id`.",
        "example": "24ccab1d-3a86-4136-a6eb-e04bf52b356f"
      },
      {
        "name": "idIn",
        "schema": "array",
        "description": "Return information for these resource `id`s.",
        "example": "24ccab1d-3a86-4136-a6eb-e04bf52b356f,beb2b197-3cf7-428d-bef3-f415c0d57509"
      },
      {
        "name": "institution",
        "schema": "string",
        "description": "Return results only for this institution (use the Belvo-designated name, such as `erebor_mx_retail`).",
        "example": "erebor_mx_retail"
      },
      {
        "name": "institutionIn",
        "schema": "array",
        "description": "Return results only for these institutions (use the Belvo-designated names, such as `erebor_mx_retail` and `gringotts_mx_retail`).",
        "example": "erebor_mx_retail,gringotts_mx_retail"
      },
      {
        "name": "valueDate",
        "schema": "string",
        "description": "Return results for exactly this date (`YYYY-MM-DD`).",
        "example": "2022-05-05"
      },
      {
        "name": "valueDateGt",
        "schema": "string",
        "description": "Return results that occurred after this date (`YYYY-MM-DD`).",
        "example": "2022-05-06"
      },
      {
        "name": "valueDateGte",
        "schema": "string",
        "description": "Return results for this date (`YYYY-MM-DD`) or later.",
        "example": "2022-05-04"
      },
      {
        "name": "valueDateLt",
        "schema": "string",
        "description": "Return results for before this date (`YYYY-MM-DD`).",
        "example": "2022-03-02"
      },
      {
        "name": "valueDateLte",
        "schema": "string",
        "description": "Return results for this date (`YYYY-MM-DD`) or earlier.",
        "example": "2022-03-01"
      },
      {
        "name": "valueDateRange",
        "schema": "array",
        "description": "Return results for this date (`YYYY-MM-DD`) range.",
        "example": "2022-03-01,2022-05-06"
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
      }
    ]
  },
  {
    "url": "/api/balances",
    "method": "resumeSession",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Balances",
    "typeScriptTag": "balances",
    "description": "Complete a balances request",
    "parameters": [
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "session",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "6e7b283c6efa449c9c028a16b5c249fa"
      },
      {
        "name": "token",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1234ab"
      },
      {
        "name": "link",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "683005d6-f45c-4adb-b289-f1a12f50f80c"
      },
      {
        "name": "save_data",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
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
        "statusCode": "408",
        "description": "Belvo has a limit regarding the time it takes to log in, retrieve account data, and log out. A timeout occurs when there is a very high amount of data and everything could not be obtained within the allotted time.\n  \n"
      },
      {
        "statusCode": "428",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "This error occurs when we (https://developers.belvo.com have encountered an internal system error (sorry about that) or due to an unsupported response from the institution.\n  \n"
      }
    ]
  },
  {
    "url": "/api/balances",
    "method": "getLinkBalances",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Balances",
    "typeScriptTag": "balances",
    "description": "Retrieve balances for a link",
    "parameters": [
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "link",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2ccd5e15-194a-4a19-a45a-e7223c7e6717"
      },
      {
        "name": "account",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "d4617561-1c01-4b2f-83b6-a594f7b3bc57"
      },
      {
        "name": "date_from",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2021-01-18"
      },
      {
        "name": "date_to",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2021-02-15"
      },
      {
        "name": "token",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1234ab"
      },
      {
        "name": "save_data",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
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
        "statusCode": "408",
        "description": "Belvo has a limit regarding the time it takes to log in, retrieve account data, and log out. A timeout occurs when there is a very high amount of data and everything could not be obtained within the allotted time.\n  \n"
      },
      {
        "statusCode": "428",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "This error occurs when we (https://developers.belvo.com have encountered an internal system error (sorry about that) or due to an unsupported response from the institution.\n  \n"
      }
    ]
  },
  {
    "url": "/api/balances/{id}",
    "method": "deleteBalance",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Balances",
    "typeScriptTag": "balances",
    "description": "Delete a balance",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The `balance.id` that you want to delete.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      }
    ]
  },
  {
    "url": "/api/balances/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Balances",
    "typeScriptTag": "balances",
    "description": "Get a balance's details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The `balance.id` you want to get detailed information about.",
        "example": "ID"
      },
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
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
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      }
    ]
  },
  {
    "url": "/api/institutions",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Institutions",
    "typeScriptTag": "institutions",
    "description": "List all institutions",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "A page number within the paginated result set.",
        "example": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Indicates how many results to return per page. By default we return 100 results per page.\n\nℹ️ The minimum number of results returned per page is 1 and the maximum is 1000. If you enter a value greater than 1000, our API will default to the maximum value (https://developers.belvo.com.\n",
        "example": 100,
        "default": 100
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": "Return institutions that partially match this display name.",
        "example": "Erebor Bank"
      },
      {
        "name": "countryCode",
        "schema": "string",
        "description": "Return institutions only for this two-letter country code.",
        "example": "MX"
      },
      {
        "name": "countryCodeIn",
        "schema": "array",
        "description": "Return institutions only for these two-letter country codes.",
        "example": "CO,BR"
      },
      {
        "name": "resourcesAllin",
        "schema": "array",
        "description": "Return institutions that support these resources.",
        "example": "ACCOUNTS,OWNERS,TRANSACTIONS"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "Return an institution with this Belvo-designated name.",
        "example": "erebor_mx_retail"
      },
      {
        "name": "nameIn",
        "schema": "array",
        "description": "Return institutions with one or more of these Belvo-designated names.",
        "example": "erebor_br_retail,gotham_co_business"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Return institutions with the given status. You can choose between `healthy` or `down`.",
        "example": "healthy"
      },
      {
        "name": "statusIn",
        "schema": "array",
        "description": "Return institutions with one of the given statuses. You can choose between `healthy` or `down`.",
        "example": "healthy,down"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "Return institutions of this type. You can choose between `bank`, `fiscal`, or `employment`.",
        "example": "fiscal"
      },
      {
        "name": "typeIn",
        "schema": "array",
        "description": "Return institutions of one of these types. You can choose between `bank`, `fiscal`, or `employment`.",
        "example": "fiscal,bank"
      },
      {
        "name": "website",
        "schema": "string",
        "description": "Return institutions with this website URL.",
        "example": "https://www.erebor.mx"
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
      }
    ]
  },
  {
    "url": "/api/institutions/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Institutions",
    "typeScriptTag": "institutions",
    "description": "Get an institution's details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The `institution.id` you want to get detailed information about.",
        "example": "ID"
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
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      }
    ]
  },
  {
    "url": "/api/owners",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Owners",
    "typeScriptTag": "owners",
    "description": "List all owners",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "A page number within the paginated result set.",
        "example": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Indicates how many results to return per page. By default we return 100 results per page.\n\nℹ️ The minimum number of results returned per page is 1 and the maximum is 1000. If you enter a value greater than 1000, our API will default to the maximum value (https://developers.belvo.com.\n",
        "example": 100,
        "default": 100
      },
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "link",
        "schema": "string",
        "description": "The `link.id` you want to filter by.\n\nℹ️ We highly recommend adding the `link.id` filter in order to improve your performance.\n",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4"
      },
      {
        "name": "linkIn",
        "schema": "array",
        "description": "Return results only for these `link.id`s.",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4,cc2b13cf-336e-497c-9fad-e074b580df65"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "Return information only for this resource `id`.",
        "example": "24ccab1d-3a86-4136-a6eb-e04bf52b356f"
      },
      {
        "name": "idIn",
        "schema": "array",
        "description": "Return information for these resource `id`s.",
        "example": "24ccab1d-3a86-4136-a6eb-e04bf52b356f,beb2b197-3cf7-428d-bef3-f415c0d57509"
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database on this date (in `YYYY-MM-DD` format).",
        "example": "2022-05-05"
      },
      {
        "name": "createdAtGt",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database after this date (in `YYYY-MM-DD` format).",
        "example": "2022-05-05"
      },
      {
        "name": "createdAtGte",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database after or on this date (in `YYYY-MM-DD` format).",
        "example": "2022-05-04"
      },
      {
        "name": "createdAtLt",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database before this date (in `YYYY-MM-DD` format).",
        "example": "2022-04-01"
      },
      {
        "name": "createdAtLte",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database before or on this date (in `YYYY-MM-DD` format).",
        "example": "2022-03-30"
      },
      {
        "name": "createdAtRange",
        "schema": "array",
        "description": "Return accounts that were last updated in Belvo's database between two dates (in `YYYY-MM-DD` format).",
        "example": "2022-03-03,2022-05-04"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "Returns owners whose email address match your query.",
        "example": "lopes.d@gmail.com"
      },
      {
        "name": "displayNameIcontains",
        "schema": "string",
        "description": "Return owners whose full display name partially matches your query. For example, `mar` will return results for Mark, Maria, Neymar, Remarque, and so on.",
        "example": "Daniela"
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
      }
    ]
  },
  {
    "url": "/api/owners",
    "method": "resumeRetrieveSession",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Owners",
    "typeScriptTag": "owners",
    "description": "Complete an owners request",
    "parameters": [
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "session",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "6e7b283c6efa449c9c028a16b5c249fa"
      },
      {
        "name": "token",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1234ab"
      },
      {
        "name": "link",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "683005d6-f45c-4adb-b289-f1a12f50f80c"
      },
      {
        "name": "save_data",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
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
        "statusCode": "408",
        "description": "Belvo has a limit regarding the time it takes to log in, retrieve account data, and log out. A timeout occurs when there is a very high amount of data and everything could not be obtained within the allotted time.\n  \n"
      },
      {
        "statusCode": "428",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "This error occurs when we (https://developers.belvo.com have encountered an internal system error (sorry about that) or due to an unsupported response from the institution.\n  \n"
      }
    ]
  },
  {
    "url": "/api/owners",
    "method": "getLinkOwner",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Owners",
    "typeScriptTag": "owners",
    "description": "Retrieve owners for a link",
    "parameters": [
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "link",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2ccd5e15-194a-4a19-a45a-e7223c7e6717"
      },
      {
        "name": "token",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1234ab"
      },
      {
        "name": "save_data",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
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
        "statusCode": "408",
        "description": "Belvo has a limit regarding the time it takes to log in, retrieve account data, and log out. A timeout occurs when there is a very high amount of data and everything could not be obtained within the allotted time.\n  \n"
      },
      {
        "statusCode": "428",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "This error occurs when we (https://developers.belvo.com have encountered an internal system error (sorry about that) or due to an unsupported response from the institution.\n  \n"
      }
    ]
  },
  {
    "url": "/api/owners/{id}",
    "method": "deleteOwner",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Owners",
    "typeScriptTag": "owners",
    "description": "Delete an owner",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The `owner.id` that you want to delete.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      }
    ]
  },
  {
    "url": "/api/owners/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Owners",
    "typeScriptTag": "owners",
    "description": "Get an owner's details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The `owner.id` you want to get detailed information about.",
        "example": "ID"
      },
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
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
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      }
    ]
  },
  {
    "url": "/api/invoices",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "List all invoices",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "A page number within the paginated result set.",
        "example": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Indicates how many results to return per page. By default we return 100 results per page.\n\nℹ️ The minimum number of results returned per page is 1 and the maximum is 1000. If you enter a value greater than 1000, our API will default to the maximum value (https://developers.belvo.com.\n",
        "example": 100,
        "default": 100
      },
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "link",
        "schema": "string",
        "description": "The `link.id` you want to filter by.\n\nℹ️ We highly recommend adding the `link.id` filter in order to improve your performance.\n",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4"
      },
      {
        "name": "linkIn",
        "schema": "array",
        "description": "Return results only for these `link.id`s.",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4,cc2b13cf-336e-497c-9fad-e074b580df65"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "Return information only for this resource `id`.",
        "example": "24ccab1d-3a86-4136-a6eb-e04bf52b356f"
      },
      {
        "name": "idIn",
        "schema": "array",
        "description": "Return information for these resource `id`s.",
        "example": "24ccab1d-3a86-4136-a6eb-e04bf52b356f,beb2b197-3cf7-428d-bef3-f415c0d57509"
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database on this date (in `YYYY-MM-DD` format).",
        "example": "2022-05-05"
      },
      {
        "name": "createdAtGt",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database after this date (in `YYYY-MM-DD` format).",
        "example": "2022-05-05"
      },
      {
        "name": "createdAtGte",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database after or on this date (in `YYYY-MM-DD` format).",
        "example": "2022-05-04"
      },
      {
        "name": "createdAtLt",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database before this date (in `YYYY-MM-DD` format).",
        "example": "2022-04-01"
      },
      {
        "name": "createdAtLte",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database before or on this date (in `YYYY-MM-DD` format).",
        "example": "2022-03-30"
      },
      {
        "name": "createdAtRange",
        "schema": "array",
        "description": "Return accounts that were last updated in Belvo's database between two dates (in `YYYY-MM-DD` format).",
        "example": "2022-03-03,2022-05-04"
      },
      {
        "name": "invoiceDate",
        "schema": "string",
        "description": "Return invoices issued exactly on this date (`YYYY-MM-DD`).",
        "example": "2022-05-05"
      },
      {
        "name": "invoiceDateLt",
        "schema": "string",
        "description": "Return balances issued before this date (`YYYY-MM-DD`).",
        "example": "2022-03-02"
      },
      {
        "name": "invoiceDateLte",
        "schema": "string",
        "description": "Return balances issued on this date or earlier (`YYYY-MM-DD`).",
        "example": "2022-03-01"
      },
      {
        "name": "invoiceDateGt",
        "schema": "string",
        "description": "Return invoices issued after this date (`YYYY-MM-DD`).",
        "example": "2022-05-06"
      },
      {
        "name": "invoiceDateGte",
        "schema": "string",
        "description": "Return invoices issued on this date or later (`YYYY-MM-DD`)",
        "example": "2022-05-04"
      },
      {
        "name": "invoiceDateRange",
        "schema": "array",
        "description": "Return invoices issued within this date range (`YYYY-MM-DD`).",
        "example": "2022-03-01,2022-05-06"
      },
      {
        "name": "invoiceIdentification",
        "schema": "string",
        "description": "Return an invoice with this ID (as provided by the insitution).",
        "example": "862B9918-3K6H-4E0B-NAI9-2BE2D833B840"
      },
      {
        "name": "invoiceIdentificationIn",
        "schema": "array",
        "description": "Return invoices with these IDs (as provided by the institution).",
        "example": "862B9918-3K6H-4E0B-NAI9-2BE2D833B840,992B9918-3G6H-4E0B-DAI9-2BE2D833B833"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Return invoices with this status. Can be either `Vigente` (https://developers.belvo.com or `Cancelado` (https://developers.belvo.com.",
        "example": "Vigente"
      },
      {
        "name": "statusIn",
        "schema": "array",
        "description": "Return invoices with these statuses. Can be either `Vigente` (https://developers.belvo.com or `Cancelado` (https://developers.belvo.com.",
        "example": "Vigente,Cancelado"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "Return invoices of this type. Can be either `OUTFLOW` or `INFLOW`.",
        "example": "OUTFLOW"
      },
      {
        "name": "typeIn",
        "schema": "array",
        "description": "Return invoices of these types. Can be either `OUTFLOW` or `INFLOW`.",
        "example": "OUTFLOW,INFLOW"
      },
      {
        "name": "totalAmount",
        "schema": "number",
        "description": "Return invoices matching exactly this value.",
        "example": 1000
      },
      {
        "name": "totalAmountLt",
        "schema": "number",
        "description": "Return invoices less than this value.",
        "example": 540
      },
      {
        "name": "totalAmountLte",
        "schema": "number",
        "description": "Return invoices less than or equal to this value.",
        "example": 541
      },
      {
        "name": "totalAmountGt",
        "schema": "number",
        "description": "Return invoices greater than this value.",
        "example": 520
      },
      {
        "name": "totalAmountGte",
        "schema": "number",
        "description": "Return invoices greater than or equal to this value.",
        "example": 519
      },
      {
        "name": "totalAmountRange",
        "schema": "array",
        "description": "Return invoices between these two values.",
        "example": "519.00,541.00"
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
      }
    ]
  },
  {
    "url": "/api/invoices",
    "method": "completeRequest",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Complete an invoices request",
    "parameters": [
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "session",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "6e7b283c6efa449c9c028a16b5c249fa"
      },
      {
        "name": "token",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1234ab"
      },
      {
        "name": "link",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "683005d6-f45c-4adb-b289-f1a12f50f80c"
      },
      {
        "name": "save_data",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
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
        "statusCode": "408",
        "description": "Belvo has a limit regarding the time it takes to log in, retrieve account data, and log out. A timeout occurs when there is a very high amount of data and everything could not be obtained within the allotted time.\n  \n"
      },
      {
        "statusCode": "428",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "This error occurs when we (https://developers.belvo.com have encountered an internal system error (sorry about that) or due to an unsupported response from the institution.\n  \n"
      }
    ]
  },
  {
    "url": "/api/invoices",
    "method": "getLinkInvoices",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Retrieve invoices for a link",
    "parameters": [
      {
        "name": "xBelvoRequestMode",
        "schema": "string",
        "description": "",
        "example": "async"
      },
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "link",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "d4617561-1c01-4b2f-83b6-a594f7b3bc57"
      },
      {
        "name": "date_from",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2020-01-01"
      },
      {
        "name": "date_to",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2020-02-01"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INFLOW"
      },
      {
        "name": "attach_xml",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "save_data",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "202",
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
        "statusCode": "408",
        "description": "Belvo has a limit regarding the time it takes to log in, retrieve account data, and log out. A timeout occurs when there is a very high amount of data and everything could not be obtained within the allotted time.\n  \n"
      },
      {
        "statusCode": "500",
        "description": "This error occurs when we (https://developers.belvo.com have encountered an internal system error (sorry about that) or due to an unsupported response from the institution.\n  \n"
      }
    ]
  },
  {
    "url": "/api/invoices/{id}",
    "method": "deleteInvoice",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Delete an invoice",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The `invoice.id` that you want to delete.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      }
    ]
  },
  {
    "url": "/api/invoices/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Get an invoice's details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The `invoice.id` you want to get detailed information about.",
        "example": "ID"
      },
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
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
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      }
    ]
  },
  {
    "url": "/api/tax-returns",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tax returns",
    "typeScriptTag": "taxReturns",
    "description": "List all tax returns",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "A page number within the paginated result set.",
        "example": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Indicates how many results to return per page. By default we return 100 results per page.\n\nℹ️ The minimum number of results returned per page is 1 and the maximum is 1000. If you enter a value greater than 1000, our API will default to the maximum value (https://developers.belvo.com.\n",
        "example": 100,
        "default": 100
      },
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "link",
        "schema": "string",
        "description": "The `link.id` you want to filter by.\n\nℹ️ We highly recommend adding the `link.id` filter in order to improve your performance.\n",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4"
      },
      {
        "name": "linkIn",
        "schema": "array",
        "description": "Return results only for these `link.id`s.",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4,cc2b13cf-336e-497c-9fad-e074b580df65"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "Return information only for this resource `id`.",
        "example": "24ccab1d-3a86-4136-a6eb-e04bf52b356f"
      },
      {
        "name": "idIn",
        "schema": "array",
        "description": "Return information for these resource `id`s.",
        "example": "24ccab1d-3a86-4136-a6eb-e04bf52b356f,beb2b197-3cf7-428d-bef3-f415c0d57509"
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database on this date (in `YYYY-MM-DD` format).",
        "example": "2022-05-05"
      },
      {
        "name": "createdAtGt",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database after this date (in `YYYY-MM-DD` format).",
        "example": "2022-05-05"
      },
      {
        "name": "createdAtGte",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database after or on this date (in `YYYY-MM-DD` format).",
        "example": "2022-05-04"
      },
      {
        "name": "createdAtLt",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database before this date (in `YYYY-MM-DD` format).",
        "example": "2022-04-01"
      },
      {
        "name": "createdAtLte",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database before or on this date (in `YYYY-MM-DD` format).",
        "example": "2022-03-30"
      },
      {
        "name": "createdAtRange",
        "schema": "array",
        "description": "Return accounts that were last updated in Belvo's database between two dates (in `YYYY-MM-DD` format).",
        "example": "2022-03-03,2022-05-04"
      },
      {
        "name": "ejercicio",
        "schema": "string",
        "description": "Return tax returns for exactly this year (`YYYY`).",
        "example": "2018"
      },
      {
        "name": "ejercicioLt",
        "schema": "string",
        "description": "Return tax returns for before this year (`YYYY`).",
        "example": "2020"
      },
      {
        "name": "ejercicioLte",
        "schema": "string",
        "description": "Return tax returns for this year and earlier (`YYYY`).",
        "example": "2021"
      },
      {
        "name": "ejercicioGt",
        "schema": "string",
        "description": "Return tax returns for after this year (`YYYY`).",
        "example": "2019"
      },
      {
        "name": "ejercicioGte",
        "schema": "string",
        "description": "Return tax returns for this year or later (`YYYY`).",
        "example": "2017"
      },
      {
        "name": "ejercicioRange",
        "schema": "array",
        "description": "Return tax returns for this range of years (`YYYY`).",
        "example": "2015,2021"
      },
      {
        "name": "tipoDeclaracion",
        "schema": "string",
        "description": "Return tax returns with this declaration type.",
        "example": "Normal"
      },
      {
        "name": "tipoDeclaracionIn",
        "schema": "array",
        "description": "Return tax returns with these declaration types.",
        "example": "Normal,Commercial"
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
      }
    ]
  },
  {
    "url": "/api/tax-returns",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tax returns",
    "typeScriptTag": "taxReturns",
    "description": "Retrieve tax returns for a link",
    "parameters": [
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
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
        "statusCode": "408",
        "description": "Belvo has a limit regarding the time it takes to log in, retrieve account data, and log out. A timeout occurs when there is a very high amount of data and everything could not be obtained within the allotted time.\n"
      },
      {
        "statusCode": "500",
        "description": "This error occurs when we (https://developers.belvo.com have encountered an internal system error (sorry about that) or due to an unsupported response from the institution.\n  \n"
      }
    ]
  },
  {
    "url": "/api/tax-returns/{id}",
    "method": "deleteSpecificTaxReturn",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tax returns",
    "typeScriptTag": "taxReturns",
    "description": "Delete a tax return",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the tax return you want to delete.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      }
    ]
  },
  {
    "url": "/api/tax-returns/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tax returns",
    "typeScriptTag": "taxReturns",
    "description": "Get a tax return's details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The `tax-return.id` you want to get detailed information about.",
        "example": "ID"
      },
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
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
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      }
    ]
  },
  {
    "url": "/api/tax-status",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tax status",
    "typeScriptTag": "taxStatus",
    "description": "List all tax statuses",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "A page number within the paginated result set.",
        "example": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Indicates how many results to return per page. By default we return 100 results per page.\n\nℹ️ The minimum number of results returned per page is 1 and the maximum is 1000. If you enter a value greater than 1000, our API will default to the maximum value (https://developers.belvo.com.\n",
        "example": 100,
        "default": 100
      },
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "link",
        "schema": "string",
        "description": "The `link.id` you want to filter by.\n\nℹ️ We highly recommend adding the `link.id` filter in order to improve your performance.\n",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4"
      },
      {
        "name": "linkIn",
        "schema": "array",
        "description": "Return results only for these `link.id`s.",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4,cc2b13cf-336e-497c-9fad-e074b580df65"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "Return information only for this resource `id`.",
        "example": "24ccab1d-3a86-4136-a6eb-e04bf52b356f"
      },
      {
        "name": "idIn",
        "schema": "array",
        "description": "Return information for these resource `id`s.",
        "example": "24ccab1d-3a86-4136-a6eb-e04bf52b356f,beb2b197-3cf7-428d-bef3-f415c0d57509"
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database on this date (in `YYYY-MM-DD` format).",
        "example": "2022-05-05"
      },
      {
        "name": "createdAtGt",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database after this date (in `YYYY-MM-DD` format).",
        "example": "2022-05-05"
      },
      {
        "name": "createdAtGte",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database after or on this date (in `YYYY-MM-DD` format).",
        "example": "2022-05-04"
      },
      {
        "name": "createdAtLt",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database before this date (in `YYYY-MM-DD` format).",
        "example": "2022-04-01"
      },
      {
        "name": "createdAtLte",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database before or on this date (in `YYYY-MM-DD` format).",
        "example": "2022-03-30"
      },
      {
        "name": "createdAtRange",
        "schema": "array",
        "description": "Return accounts that were last updated in Belvo's database between two dates (in `YYYY-MM-DD` format).",
        "example": "2022-03-03,2022-05-04"
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
      }
    ]
  },
  {
    "url": "/api/tax-status",
    "method": "getLinkTaxStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tax status",
    "typeScriptTag": "taxStatus",
    "description": "Retrieve tax statuses for a link",
    "parameters": [
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "link",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "d4617561-1c01-4b2f-83b6-a594f7b3bc57"
      },
      {
        "name": "attach_pdf",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "save_data",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
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
        "statusCode": "408",
        "description": "Belvo has a limit regarding the time it takes to log in, retrieve account data, and log out. A timeout occurs when there is a very high amount of data and everything could not be obtained within the allotted time.\n  \n"
      },
      {
        "statusCode": "500",
        "description": "This error occurs when we (https://developers.belvo.com have encountered an internal system error (sorry about that) or due to an unsupported response from the institution.\n  \n"
      }
    ]
  },
  {
    "url": "/api/tax-status/{id}",
    "method": "deleteSpecificTaxStatus",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tax status",
    "typeScriptTag": "taxStatus",
    "description": "Delete a tax status",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "the `tax-status.id` that you want to delete",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      }
    ]
  },
  {
    "url": "/api/tax-status/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tax status",
    "typeScriptTag": "taxStatus",
    "description": "Get a tax status's details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The `tax-status.id` you want to get detailed information about.",
        "example": "ID"
      },
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
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
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      }
    ]
  },
  {
    "url": "/api/tax-compliance-status",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tax compliance status",
    "typeScriptTag": "taxComplianceStatus",
    "description": "List all tax compliance statuses",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "A page number within the paginated result set.",
        "example": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Indicates how many results to return per page. By default we return 100 results per page.\n\nℹ️ The minimum number of results returned per page is 1 and the maximum is 1000. If you enter a value greater than 1000, our API will default to the maximum value (https://developers.belvo.com.\n",
        "example": 100,
        "default": 100
      },
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "link",
        "schema": "string",
        "description": "The `link.id` you want to filter by.\n\nℹ️ We highly recommend adding the `link.id` filter in order to improve your performance.\n",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4"
      },
      {
        "name": "linkIn",
        "schema": "array",
        "description": "Return results only for these `link.id`s.",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4,cc2b13cf-336e-497c-9fad-e074b580df65"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "Return information only for this resource `id`.",
        "example": "24ccab1d-3a86-4136-a6eb-e04bf52b356f"
      },
      {
        "name": "idIn",
        "schema": "array",
        "description": "Return information for these resource `id`s.",
        "example": "24ccab1d-3a86-4136-a6eb-e04bf52b356f,beb2b197-3cf7-428d-bef3-f415c0d57509"
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database on this date (in `YYYY-MM-DD` format).",
        "example": "2022-05-05"
      },
      {
        "name": "createdAtGt",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database after this date (in `YYYY-MM-DD` format).",
        "example": "2022-05-05"
      },
      {
        "name": "createdAtGte",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database after or on this date (in `YYYY-MM-DD` format).",
        "example": "2022-05-04"
      },
      {
        "name": "createdAtLt",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database before this date (in `YYYY-MM-DD` format).",
        "example": "2022-04-01"
      },
      {
        "name": "createdAtLte",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database before or on this date (in `YYYY-MM-DD` format).",
        "example": "2022-03-30"
      },
      {
        "name": "createdAtRange",
        "schema": "array",
        "description": "Return accounts that were last updated in Belvo's database between two dates (in `YYYY-MM-DD` format).",
        "example": "2022-03-03,2022-05-04"
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
      }
    ]
  },
  {
    "url": "/api/tax-compliance-status",
    "method": "getFiscalLinkInfo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tax compliance status",
    "typeScriptTag": "taxComplianceStatus",
    "description": "Retrieve tax compliance statuses for a link",
    "parameters": [
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "link",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "d4617561-1c01-4b2f-83b6-a594f7b3bc57"
      },
      {
        "name": "attach_pdf",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "save_data",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
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
        "statusCode": "408",
        "description": "Belvo has a limit regarding the time it takes to log in, retrieve account data, and log out. A timeout occurs when there is a very high amount of data and everything could not be obtained within the allotted time.\n  \n"
      },
      {
        "statusCode": "500",
        "description": "This error occurs when we (https://developers.belvo.com have encountered an internal system error (sorry about that) or due to an unsupported response from the institution.\n  \n"
      }
    ]
  },
  {
    "url": "/api/tax-compliance-status/{id}",
    "method": "deleteSpecificTaxComplianceStatus",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tax compliance status",
    "typeScriptTag": "taxComplianceStatus",
    "description": "Delete a tax compliance status",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The `tax-compliance-status.id` that you want to delete.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      }
    ]
  },
  {
    "url": "/api/tax-compliance-status/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tax compliance status",
    "typeScriptTag": "taxComplianceStatus",
    "description": "Get a tax compliance status's details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The `tax-compliance-status.id` you want to get detailed information\nabout.\n",
        "example": "ID"
      },
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
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
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      }
    ]
  },
  {
    "url": "/api/incomes",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Incomes",
    "typeScriptTag": "incomes",
    "description": "List all incomes",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "A page number within the paginated result set.",
        "example": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Indicates how many results to return per page. By default we return 100 results per page.\n\nℹ️ The minimum number of results returned per page is 1 and the maximum is 1000. If you enter a value greater than 1000, our API will default to the maximum value (https://developers.belvo.com.\n",
        "example": 100,
        "default": 100
      },
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "account",
        "schema": "string",
        "description": "The `account.id` you want to filter by.\n\nℹ️ We highly recommend adding either the `link.id` or the `account.id` filters in order to improve your performance.\n",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4"
      },
      {
        "name": "accountIn",
        "schema": "array",
        "description": "Return results only for these `account.id`s.",
        "example": "24ccab1d-3a86-4136-a6eb-e04bf52b356f,beb2b197-3cf7-428d-bef3-f415c0d57509"
      },
      {
        "name": "link",
        "schema": "string",
        "description": "The `link.id` you want to filter by.\n\nℹ️ We highly recommend adding the `link.id` filter in order to improve your performance.\n",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4"
      },
      {
        "name": "linkIn",
        "schema": "array",
        "description": "Return results only for these `link.id`s.",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4,cc2b13cf-336e-497c-9fad-e074b580df65"
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
      }
    ]
  },
  {
    "url": "/api/incomes",
    "method": "resumeSession",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Incomes",
    "typeScriptTag": "incomes",
    "description": "Complete an incomes request",
    "parameters": [
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "session",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "6e7b283c6efa449c9c028a16b5c249fa"
      },
      {
        "name": "token",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1234ab"
      },
      {
        "name": "link",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "683005d6-f45c-4adb-b289-f1a12f50f80c"
      },
      {
        "name": "save_data",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
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
        "statusCode": "408",
        "description": "Belvo has a limit regarding the time it takes to log in, retrieve account data, and log out. A timeout occurs when there is a very high amount of data and everything could not be obtained within the allotted time.\n  \n"
      },
      {
        "statusCode": "428",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "This error occurs when we (https://developers.belvo.com have encountered an internal system error (sorry about that) or due to an unsupported response from the institution.\n  \n"
      }
    ]
  },
  {
    "url": "/api/incomes",
    "method": "getInsights",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Incomes",
    "typeScriptTag": "incomes",
    "description": "Retrieve incomes for a link",
    "parameters": [
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "link",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2ccd5e15-194a-4a19-a45a-e7223c7e6717"
      },
      {
        "name": "allowed_income_types",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "minimum_confidence_level",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "HIGH"
      },
      {
        "name": "date_from",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-08-01"
      },
      {
        "name": "date_to",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-12-30"
      },
      {
        "name": "token",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1234ab"
      },
      {
        "name": "save_data",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Income insights"
      },
      {
        "statusCode": "201",
        "description": "Income insights"
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
        "statusCode": "408",
        "description": "Belvo has a limit regarding the time it takes to log in, retrieve account data, and log out. A timeout occurs when there is a very high amount of data and everything could not be obtained within the allotted time.\n  \n"
      },
      {
        "statusCode": "428",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "This error occurs when we (https://developers.belvo.com have encountered an internal system error (sorry about that) or due to an unsupported response from the institution.\n  \n"
      }
    ]
  },
  {
    "url": "/api/incomes/{id}",
    "method": "deleteIncome",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Incomes",
    "typeScriptTag": "incomes",
    "description": "Delete an income",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "the `income.id` that you want to delete",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      }
    ]
  },
  {
    "url": "/api/incomes/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Incomes",
    "typeScriptTag": "incomes",
    "description": "Get an income's details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The `income.id` you want to get detailed information about.",
        "example": "ID"
      },
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Income insights"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      }
    ]
  },
  {
    "url": "/api/recurring-expenses",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recurring Expenses",
    "typeScriptTag": "recurringExpenses",
    "description": "List all recurring expenses",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "A page number within the paginated result set.",
        "example": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Indicates how many results to return per page. By default we return 100 results per page.\n\nℹ️ The minimum number of results returned per page is 1 and the maximum is 1000. If you enter a value greater than 1000, our API will default to the maximum value (https://developers.belvo.com.\n",
        "example": 100,
        "default": 100
      },
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "link",
        "schema": "string",
        "description": "The `link.id` you want to filter by.\n\nℹ️ We highly recommend adding the `link.id` filter in order to improve your performance.\n",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4"
      },
      {
        "name": "linkIn",
        "schema": "array",
        "description": "Return results only for these `link.id`s.",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4,cc2b13cf-336e-497c-9fad-e074b580df65"
      },
      {
        "name": "account",
        "schema": "string",
        "description": "The `account.id` you want to filter by.\n\nℹ️ We highly recommend adding either the `link.id` or the `account.id` filters in order to improve your performance.\n",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4"
      },
      {
        "name": "accountIn",
        "schema": "array",
        "description": "Return results only for these `account.id`s.",
        "example": "24ccab1d-3a86-4136-a6eb-e04bf52b356f,beb2b197-3cf7-428d-bef3-f415c0d57509"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "Return information only for this resource `id`.",
        "example": "24ccab1d-3a86-4136-a6eb-e04bf52b356f"
      },
      {
        "name": "idIn",
        "schema": "array",
        "description": "Return information for these resource `id`s.",
        "example": "24ccab1d-3a86-4136-a6eb-e04bf52b356f,beb2b197-3cf7-428d-bef3-f415c0d57509"
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
      }
    ]
  },
  {
    "url": "/api/recurring-expenses",
    "method": "resumeRequest",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Recurring Expenses",
    "typeScriptTag": "recurringExpenses",
    "description": "Complete a recurring expenses request",
    "parameters": [
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "session",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "6e7b283c6efa449c9c028a16b5c249fa"
      },
      {
        "name": "token",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1234ab"
      },
      {
        "name": "link",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "683005d6-f45c-4adb-b289-f1a12f50f80c"
      },
      {
        "name": "save_data",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
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
        "statusCode": "408",
        "description": "Belvo has a limit regarding the time it takes to log in, retrieve account data, and log out. A timeout occurs when there is a very high amount of data and everything could not be obtained within the allotted time.\n  \n"
      },
      {
        "statusCode": "428",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "This error occurs when we (https://developers.belvo.com have encountered an internal system error (sorry about that) or due to an unsupported response from the institution.\n  \n"
      }
    ]
  },
  {
    "url": "/api/recurring-expenses",
    "method": "getInsights",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Recurring Expenses",
    "typeScriptTag": "recurringExpenses",
    "description": "Retrieve recurring expenses for a link",
    "parameters": [
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "link",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2ccd5e15-194a-4a19-a45a-e7223c7e6717"
      },
      {
        "name": "token",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1234ab"
      },
      {
        "name": "save_data",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "date_from",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2022-08-01"
      },
      {
        "name": "date_to",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2022-12-30"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
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
        "statusCode": "408",
        "description": "Belvo has a limit regarding the time it takes to log in, retrieve account data, and log out. A timeout occurs when there is a very high amount of data and everything could not be obtained within the allotted time.\n  \n"
      },
      {
        "statusCode": "428",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "This error occurs when we (https://developers.belvo.com have encountered an internal system error (sorry about that) or due to an unsupported response from the institution.\n  \n"
      }
    ]
  },
  {
    "url": "/api/recurring-expenses/{id}",
    "method": "deleteExpense",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Recurring Expenses",
    "typeScriptTag": "recurringExpenses",
    "description": "Delete a recurring expense",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The `recurring-expenses.id` that you want to delete",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      }
    ]
  },
  {
    "url": "/api/recurring-expenses/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recurring Expenses",
    "typeScriptTag": "recurringExpenses",
    "description": "Get a recurring expense's details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The `recurring-expenses.id` you want to get detailed information about.",
        "example": "ID"
      },
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
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
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      }
    ]
  },
  {
    "url": "/api/risk-insights",
    "method": "listAllRiskInsights",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Risk Insights",
    "typeScriptTag": "riskInsights",
    "description": "List all risk insights",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "A page number within the paginated result set.",
        "example": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Indicates how many results to return per page. By default we return 100 results per page.\n\nℹ️ The minimum number of results returned per page is 1 and the maximum is 1000. If you enter a value greater than 1000, our API will default to the maximum value (https://developers.belvo.com.\n",
        "example": 100,
        "default": 100
      },
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "link",
        "schema": "string",
        "description": "The `link.id` you want to filter by.\n\nℹ️ We highly recommend adding the `link.id` filter in order to improve your performance.\n",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4"
      },
      {
        "name": "linkIn",
        "schema": "array",
        "description": "Return results only for these `link.id`s.",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4,cc2b13cf-336e-497c-9fad-e074b580df65"
      },
      {
        "name": "account",
        "schema": "string",
        "description": "The `account.id` you want to filter by.\n\nℹ️ We highly recommend adding either the `link.id` or the `account.id` filters in order to improve your performance.\n",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4"
      },
      {
        "name": "accountIn",
        "schema": "array",
        "description": "Return results only for these `account.id`s.",
        "example": "24ccab1d-3a86-4136-a6eb-e04bf52b356f,beb2b197-3cf7-428d-bef3-f415c0d57509"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "Return information only for this resource `id`.",
        "example": "24ccab1d-3a86-4136-a6eb-e04bf52b356f"
      },
      {
        "name": "idIn",
        "schema": "array",
        "description": "Return information for these resource `id`s.",
        "example": "24ccab1d-3a86-4136-a6eb-e04bf52b356f,beb2b197-3cf7-428d-bef3-f415c0d57509"
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
      }
    ]
  },
  {
    "url": "/api/risk-insights",
    "method": "resumeInsightsSession",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Risk Insights",
    "typeScriptTag": "riskInsights",
    "description": "Complete a risk insights request",
    "parameters": [
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "session",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "6e7b283c6efa449c9c028a16b5c249fa"
      },
      {
        "name": "token",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1234ab"
      },
      {
        "name": "link",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "683005d6-f45c-4adb-b289-f1a12f50f80c"
      },
      {
        "name": "save_data",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
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
        "statusCode": "408",
        "description": "Belvo has a limit regarding the time it takes to log in, retrieve account data, and log out. A timeout occurs when there is a very high amount of data and everything could not be obtained within the allotted time.\n  \n"
      },
      {
        "statusCode": "428",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "This error occurs when we (https://developers.belvo.com have encountered an internal system error (sorry about that) or due to an unsupported response from the institution.\n  \n"
      }
    ]
  },
  {
    "url": "/api/risk-insights",
    "method": "getForLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Risk Insights",
    "typeScriptTag": "riskInsights",
    "description": "Retrieve risk insights for a link",
    "parameters": [
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "link",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2ccd5e15-194a-4a19-a45a-e7223c7e6717"
      },
      {
        "name": "token",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1234ab"
      },
      {
        "name": "save_data",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
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
        "statusCode": "408",
        "description": "Belvo has a limit regarding the time it takes to log in, retrieve account data, and log out. A timeout occurs when there is a very high amount of data and everything could not be obtained within the allotted time.\n  \n"
      },
      {
        "statusCode": "428",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "This error occurs when we (https://developers.belvo.com have encountered an internal system error (sorry about that) or due to an unsupported response from the institution.\n  \n"
      }
    ]
  },
  {
    "url": "/api/risk-insights/{id}",
    "method": "deleteSpecificInsight",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Risk Insights",
    "typeScriptTag": "riskInsights",
    "description": "Delete a risk insight",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The `risk-insights.id` that you want to delete",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      }
    ]
  },
  {
    "url": "/api/risk-insights/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Risk Insights",
    "typeScriptTag": "riskInsights",
    "description": "Get a risk insight's details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The `risk-insights.id` you want to get detailed information about.",
        "example": "ID"
      },
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
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
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      }
    ]
  },
  {
    "url": "/api/tax-retentions",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tax retentions",
    "typeScriptTag": "taxRetentions",
    "description": "List all tax retentions",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "A page number within the paginated result set.",
        "example": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Indicates how many results to return per page. By default we return 100 results per page.\n\nℹ️ The minimum number of results returned per page is 1 and the maximum is 1000. If you enter a value greater than 1000, our API will default to the maximum value (https://developers.belvo.com.\n",
        "example": 100,
        "default": 100
      },
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "link",
        "schema": "string",
        "description": "The `link.id` you want to filter by.\n\nℹ️ We highly recommend adding the `link.id` filter in order to improve your performance.\n",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4"
      },
      {
        "name": "linkIn",
        "schema": "array",
        "description": "Return results only for these `link.id`s.",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4,cc2b13cf-336e-497c-9fad-e074b580df65"
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database on this date (in `YYYY-MM-DD` format).",
        "example": "2022-05-05"
      },
      {
        "name": "createdAtGt",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database after this date (in `YYYY-MM-DD` format).",
        "example": "2022-05-05"
      },
      {
        "name": "createdAtGte",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database after or on this date (in `YYYY-MM-DD` format).",
        "example": "2022-05-04"
      },
      {
        "name": "createdAtLt",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database before this date (in `YYYY-MM-DD` format).",
        "example": "2022-04-01"
      },
      {
        "name": "createdAtLte",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database before or on this date (in `YYYY-MM-DD` format).",
        "example": "2022-03-30"
      },
      {
        "name": "createdAtRange",
        "schema": "array",
        "description": "Return accounts that were last updated in Belvo's database between two dates (in `YYYY-MM-DD` format).",
        "example": "2022-03-03,2022-05-04"
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
      }
    ]
  },
  {
    "url": "/api/tax-retentions",
    "method": "getLinkTaxRetentions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tax retentions",
    "typeScriptTag": "taxRetentions",
    "description": "Retrieve tax retentions for a link",
    "parameters": [
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "link",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "9e432f18-36ca-4bd6-a3f3-1971e58dc1e8"
      },
      {
        "name": "date_from",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2020-01-01"
      },
      {
        "name": "date_to",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2020-02-01"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INFLOW"
      },
      {
        "name": "attach_xml",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "save_data",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
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
        "statusCode": "408",
        "description": "Belvo has a limit regarding the time it takes to log in, retrieve account data, and log out. A timeout occurs when there is a very high amount of data and everything could not be obtained within the allotted time.\n  \n"
      },
      {
        "statusCode": "500",
        "description": "This error occurs when we (https://developers.belvo.com have encountered an internal system error (sorry about that) or due to an unsupported response from the institution.\n  \n"
      }
    ]
  },
  {
    "url": "/api/tax-retentions/{id}",
    "method": "deleteSpecificTaxRetention",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tax retentions",
    "typeScriptTag": "taxRetentions",
    "description": "Delete a tax retention",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The `tax-retention.id` that you want to delete.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      }
    ]
  },
  {
    "url": "/api/tax-retentions/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tax retentions",
    "typeScriptTag": "taxRetentions",
    "description": "Get a tax retention's details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The `tax-retention.id` you want to get detailed information\nabout.\n",
        "example": "ID"
      },
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
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
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      }
    ]
  },
  {
    "url": "/api/tax-declarations",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tax declarations",
    "typeScriptTag": "taxDeclarations",
    "description": "List all tax declarations",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "A page number within the paginated result set.",
        "example": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Indicates how many results to return per page. By default we return 100 results per page.\n\nℹ️ The minimum number of results returned per page is 1 and the maximum is 1000. If you enter a value greater than 1000, our API will default to the maximum value (https://developers.belvo.com.\n",
        "example": 100,
        "default": 100
      },
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "link",
        "schema": "string",
        "description": "The `link.id` you want to filter by.\n\nℹ️ We highly recommend adding the `link.id` filter in order to improve your performance.\n",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4"
      },
      {
        "name": "linkIn",
        "schema": "array",
        "description": "Return results only for these `link.id`s.",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4,cc2b13cf-336e-497c-9fad-e074b580df65"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "Return information only for this resource `id`.",
        "example": "24ccab1d-3a86-4136-a6eb-e04bf52b356f"
      },
      {
        "name": "idIn",
        "schema": "array",
        "description": "Return information for these resource `id`s.",
        "example": "24ccab1d-3a86-4136-a6eb-e04bf52b356f,beb2b197-3cf7-428d-bef3-f415c0d57509"
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database on this date (in `YYYY-MM-DD` format).",
        "example": "2022-05-05"
      },
      {
        "name": "createdAtGt",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database after this date (in `YYYY-MM-DD` format).",
        "example": "2022-05-05"
      },
      {
        "name": "createdAtGte",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database after or on this date (in `YYYY-MM-DD` format).",
        "example": "2022-05-04"
      },
      {
        "name": "createdAtLt",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database before this date (in `YYYY-MM-DD` format).",
        "example": "2022-04-01"
      },
      {
        "name": "createdAtLte",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database before or on this date (in `YYYY-MM-DD` format).",
        "example": "2022-03-30"
      },
      {
        "name": "createdAtRange",
        "schema": "array",
        "description": "Return accounts that were last updated in Belvo's database between two dates (in `YYYY-MM-DD` format).",
        "example": "2022-03-03,2022-05-04"
      },
      {
        "name": "year",
        "schema": "number",
        "description": "Return results for this year (`YYYY`).",
        "example": 2020
      },
      {
        "name": "yearGt",
        "schema": "number",
        "description": "Return results for after this year (`YYYY`).",
        "example": 2020
      },
      {
        "name": "yearGte",
        "schema": "number",
        "description": "Return results for this year or after (`YYYY`).",
        "example": 2019
      },
      {
        "name": "yearLt",
        "schema": "number",
        "description": "Return results for before this year (`YYYY`).",
        "example": 2018
      },
      {
        "name": "yearLte",
        "schema": "number",
        "description": "Return results for this year or earlier (`YYYY`).",
        "example": 2017
      },
      {
        "name": "yearRange",
        "schema": "array",
        "description": "Return results between these two years (`YYYY`).",
        "example": "2017,2021"
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
      }
    ]
  },
  {
    "url": "/api/tax-declarations",
    "method": "getFiscalLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tax declarations",
    "typeScriptTag": "taxDeclarations",
    "description": "Retrieve tax declarations for a link",
    "parameters": [
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "link",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "d4617561-1c01-4b2f-83b6-a594f7b3bc57"
      },
      {
        "name": "year_from",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2018"
      },
      {
        "name": "year_to",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2019"
      },
      {
        "name": "attach_pdf",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "save_data",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
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
        "statusCode": "408",
        "description": "Belvo has a limit regarding the time it takes to log in, retrieve account data, and log out. A timeout occurs when there is a very high amount of data and everything could not be obtained within the allotted time.\n"
      },
      {
        "statusCode": "500",
        "description": "This error occurs when we (https://developers.belvo.com have encountered an internal system error (sorry about that) or due to an unsupported response from the institution.\n  \n"
      }
    ]
  },
  {
    "url": "/api/tax-declarations/{id}",
    "method": "deleteSpecificDeclaration",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tax declarations",
    "typeScriptTag": "taxDeclarations",
    "description": "Delete a tax declration",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The `tax-declration.id` that you want to delete.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      }
    ]
  },
  {
    "url": "/api/tax-declarations/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tax declarations",
    "typeScriptTag": "taxDeclarations",
    "description": "Get a tax declaration's details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The `tax-declaration.id` you want to get detailed information\nabout.\n",
        "example": "ID"
      },
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
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
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      }
    ]
  },
  {
    "url": "/api/employment-records",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employment Records Mexico",
    "typeScriptTag": "employmentRecordsMexico",
    "description": "List all employment records",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "A page number within the paginated result set.",
        "example": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Indicates how many results to return per page. By default we return 100 results per page.\n\nℹ️ The minimum number of results returned per page is 1 and the maximum is 1000. If you enter a value greater than 1000, our API will default to the maximum value (https://developers.belvo.com.\n",
        "example": 100,
        "default": 100
      },
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "Return information only for this resource `id`.",
        "example": "24ccab1d-3a86-4136-a6eb-e04bf52b356f"
      },
      {
        "name": "idIn",
        "schema": "array",
        "description": "Return information for these resource `id`s.",
        "example": "24ccab1d-3a86-4136-a6eb-e04bf52b356f,beb2b197-3cf7-428d-bef3-f415c0d57509"
      },
      {
        "name": "link",
        "schema": "string",
        "description": "The `link.id` you want to filter by.\n\nℹ️ We highly recommend adding the `link.id` filter in order to improve your performance.\n",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4"
      },
      {
        "name": "linkIn",
        "schema": "array",
        "description": "Return results only for these `link.id`s.",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4,cc2b13cf-336e-497c-9fad-e074b580df65"
      },
      {
        "name": "internalIdentification",
        "schema": "string",
        "description": "The `internal_identification` you want to filter by.\n",
        "example": "BLPM951331IONVGR54"
      },
      {
        "name": "internalIdentificationIn",
        "schema": "array",
        "description": "One or more `internal_identification`s you want to filter by.\n",
        "example": "BLPM951331IONVGR54,GNQM951221IOMCGR59"
      },
      {
        "name": "collectedAt",
        "schema": "string",
        "description": "Return items that were retrieved from the institution on this date (`YYYY-MM-DD` or full `ISO-8601` timestamp).",
        "example": "2022-05-01"
      },
      {
        "name": "collectedAtGt",
        "schema": "string",
        "description": "Return items that were retrieved from the institution after this date (`YYYY-MM-DD` or full `ISO-8601` timestamp).",
        "example": "2022-05-05"
      },
      {
        "name": "collectedAtGte",
        "schema": "string",
        "description": "Return items that were retrieved from the institution after or on this date (`YYYY-MM-DD` or full `ISO-8601` timestamp).",
        "example": "2022-05-04"
      },
      {
        "name": "collectedAtLt",
        "schema": "string",
        "description": "Return items that were retrieved from the institution before this date (`YYYY-MM-DD` or full `ISO-8601` timestamp).",
        "example": "2022-04-01"
      },
      {
        "name": "collectedAtLte",
        "schema": "string",
        "description": "Return items that were retrieved from the institution before or on this date (`YYYY-MM-DD` or full `ISO-8601` timestamp).",
        "example": "2022-03-30"
      },
      {
        "name": "collectedAtRange",
        "schema": "array",
        "description": "Return items that were retrieved from the institution between two dates (`YYYY-MM-DD` or full `ISO-8601` timestamp).",
        "example": "2022-03-03,2022-05-04"
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database on this date (in `YYYY-MM-DD` format).",
        "example": "2022-05-05"
      },
      {
        "name": "createdAtGt",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database after this date (in `YYYY-MM-DD` format).",
        "example": "2022-05-05"
      },
      {
        "name": "createdAtGte",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database after or on this date (in `YYYY-MM-DD` format).",
        "example": "2022-05-04"
      },
      {
        "name": "createdAtLt",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database before this date (in `YYYY-MM-DD` format).",
        "example": "2022-04-01"
      },
      {
        "name": "createdAtLte",
        "schema": "string",
        "description": "Return items that were last updated in Belvo's database before or on this date (in `YYYY-MM-DD` format).",
        "example": "2022-03-30"
      },
      {
        "name": "createdAtRange",
        "schema": "array",
        "description": "Return accounts that were last updated in Belvo's database between two dates (in `YYYY-MM-DD` format).",
        "example": "2022-03-03,2022-05-04"
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
      }
    ]
  },
  {
    "url": "/api/employment-records",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employment Records Mexico",
    "typeScriptTag": "employmentRecordsMexico",
    "description": "Retrieve employment record details",
    "parameters": [
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "link",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "d686c617-6d9e-4bc6-9801-5ac276ccb6a2"
      },
      {
        "name": "attach_pdf",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "save_data",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
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
        "statusCode": "408",
        "description": "Belvo has a limit regarding the time it takes to log in, retrieve account data, and log out. A timeout occurs when there is a very high amount of data and everything could not be obtained within the allotted time.\n  \n"
      },
      {
        "statusCode": "428",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "This error occurs when we (https://developers.belvo.com have encountered an internal system error (sorry about that) or due to an unsupported response from the institution.\n  \n"
      }
    ]
  },
  {
    "url": "/api/employment-records/{id}",
    "method": "deleteRecord",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Employment Records Mexico",
    "typeScriptTag": "employmentRecordsMexico",
    "description": "Delete an employment record",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The `employment-record.id` that you want to delete.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      }
    ]
  },
  {
    "url": "/api/employment-records/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employment Records Mexico",
    "typeScriptTag": "employmentRecordsMexico",
    "description": "Get an employment record's details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The `employment-record.id` you want to get detailed information about.",
        "example": "ID"
      },
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Employment record response payload"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      }
    ]
  },
  {
    "url": "/api/enrich/incomes",
    "method": "enrichUserIncomes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Income Verification",
    "typeScriptTag": "incomeVerification",
    "description": "Verify incomes",
    "parameters": [
      {
        "name": "language",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "pt"
      },
      {
        "name": "transactions",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "date_from",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2022-08-01"
      },
      {
        "name": "date_to",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2022-12-30"
      },
      {
        "name": "allowed_income_types",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "minimum_confidence_level",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "HIGH"
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
        "description": "This error occurs when you try to access Belvo's resource without the correct permissions.\n"
      },
      {
        "statusCode": "500",
        "description": "This error occurs when we (https://developers.belvo.com have encountered an internal system error (sorry about that) or due to an unsupported response from the institution.\n  \n"
      }
    ]
  },
  {
    "url": "/api/categorization",
    "method": "categorizeTransactions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Categorization",
    "typeScriptTag": "categorization",
    "description": "Categorize transactions",
    "parameters": [
      {
        "name": "language",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "pt"
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "This error occurs when you try to access Belvo's resource without the correct permissions.\n"
      },
      {
        "statusCode": "500",
        "description": "This error occurs when we (https://developers.belvo.com have encountered an internal system error (sorry about that) or due to an unsupported response from the institution.\n  \n"
      }
    ]
  },
  {
    "url": "/api/credit-score",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Credit Score",
    "typeScriptTag": "creditScore",
    "description": "List all credit scores",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "A page number within the paginated result set.",
        "example": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Indicates how many results to return per page. By default we return 100 results per page.\n\nℹ️ The minimum number of results returned per page is 1 and the maximum is 1000. If you enter a value greater than 1000, our API will default to the maximum value (https://developers.belvo.com.\n",
        "example": 100,
        "default": 100
      },
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "account",
        "schema": "string",
        "description": "The `account.id` you want to filter by.\n\nℹ️ We highly recommend adding either the `link.id` or the `account.id` filters in order to improve your performance.\n",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4"
      },
      {
        "name": "accountIn",
        "schema": "array",
        "description": "Return results only for these `account.id`s.",
        "example": "24ccab1d-3a86-4136-a6eb-e04bf52b356f,beb2b197-3cf7-428d-bef3-f415c0d57509"
      },
      {
        "name": "link",
        "schema": "string",
        "description": "The `link.id` you want to filter by.\n\nℹ️ We highly recommend adding the `link.id` filter in order to improve your performance.\n",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4"
      },
      {
        "name": "linkIn",
        "schema": "array",
        "description": "Return results only for these `link.id`s.",
        "example": "8848bd0c-9c7e-4f53-a732-ec896b11d4c4,cc2b13cf-336e-497c-9fad-e074b580df65"
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
      }
    ]
  },
  {
    "url": "/api/credit-score",
    "method": "getByLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Credit Score",
    "typeScriptTag": "creditScore",
    "description": "Retrieve a credit score for a link",
    "parameters": [
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      },
      {
        "name": "link",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2ccd5e15-194a-4a19-a45a-e7223c7e6717"
      },
      {
        "name": "date_to",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2023-02-28"
      },
      {
        "name": "save_data",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Credit Score response"
      },
      {
        "statusCode": "201",
        "description": "Credit Score response"
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
        "statusCode": "408",
        "description": "Belvo has a limit regarding the time it takes to log in, retrieve account data, and log out. A timeout occurs when there is a very high amount of data and everything could not be obtained within the allotted time.\n  \n"
      },
      {
        "statusCode": "428",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "This error occurs when we (https://developers.belvo.com have encountered an internal system error (sorry about that) or due to an unsupported response from the institution.\n  \n"
      }
    ]
  },
  {
    "url": "/api/credit-score/{id}",
    "method": "deleteSpecificScore",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Credit Score",
    "typeScriptTag": "creditScore",
    "description": "Delete a credit score",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "the `credit-score.id` that you want to delete",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      }
    ]
  },
  {
    "url": "/api/credit-score/{id}",
    "method": "getDetailsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Credit Score",
    "typeScriptTag": "creditScore",
    "description": "Get a credit score's details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The `credit-score.id` you want to get detailed information about.",
        "example": "ID"
      },
      {
        "name": "omit",
        "schema": "string",
        "description": "Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.",
        "example": "field1,field2,field3"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Credit Score response"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "You made a request where you:\n\n  - provided the wrong URL.\n  - used an ID (for a link, account, transaction, and so on) that is not associated with your Belvo account.\n  \n"
      }
    ]
  },
  {
    "url": "/api/enrich/credit-score",
    "method": "getUserCreditScore",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Credit Score (https://developers.belvo.com",
    "typeScriptTag": "creditScoreHttps:DevelopersBelvoCom",
    "description": "Retrieve Credit Score",
    "parameters": [],
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
        "description": "This error occurs when you try to access Belvo's resource without the correct permissions.\n"
      },
      {
        "statusCode": "500",
        "description": "This error occurs when we (https://developers.belvo.com have encountered an internal system error (sorry about that) or due to an unsupported response from the institution.\n  \n"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Belvo API Docs"
      apiBaseUrl="https://sandbox.belvo.com"
      apiVersion="1.102.0"
      endpoints={37}
      sdkMethods={80}
      schemas={575}
      parameters={590}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/belvo/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/belvo/openapi.yaml"
      developerDocumentation="developers.belvo.com"
    />
  );
}
  