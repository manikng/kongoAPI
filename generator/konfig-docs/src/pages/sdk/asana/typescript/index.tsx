import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function AsanaTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="asana-typescript-sdk"
      metaDescription={`Asana helps teams orchestrate their work, from small projects to strategic initiatives. Headquartered in San Francisco, CA, Asana has more than 131,000 paying customers and millions of free organizations across 190 countries. Global customers such as Amazon, Japan Airlines, Sky, and Affirm rely on Asana to manage everything from company objectives to digital transformation to product launches and marketing campaigns. For more information, visit www.asana.com.`}
      company="Asana"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/asana/logo.png"
      companyKebabCase="asana"
      clientNameCamelCase="asana"
      homepage="asana.com"
      lastUpdated={new Date("2024-03-14T08:10:33.678Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/asana/favicon.png"
      contactUrl="https://asana.com/support"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/asana/imagePreview.jpg"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["productivity","collaboration","planning","agile","automation","docs","documentation","okr","goals","gantt","kanban","forms","wikis","roadmap","reporting","collaboration","productivity","workspace","productivity_software","task_management","information_technology","business_productivity","enterprise_software","work_management","project_management","organization"]}
      methods={[
  {
    "url": "/attachments/{attachment_gid}",
    "method": "deleteSpecific",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Attachments",
    "typeScriptTag": "attachments",
    "description": "Delete an attachment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/attachments/{attachment_gid}",
    "method": "getAttachmentRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Attachments",
    "typeScriptTag": "attachments",
    "description": "Get an attachment",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "connected_to_app",
          "created_at",
          "download_url",
          "host",
          "name",
          "parent",
          "parent.created_by",
          "parent.name",
          "parent.resource_subtype",
          "permanent_url",
          "resource_subtype",
          "size",
          "view_url"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "402",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "424",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "501",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "503",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "504",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/attachments",
    "method": "getAllForObject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Attachments",
    "typeScriptTag": "attachments",
    "description": "Get attachments from an object",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.",
        "example": 50
      },
      {
        "name": "offset",
        "schema": "string",
        "description": "Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n'Note: You can only pass in an offset that was returned to you via a previously paginated request.'",
        "example": "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9"
      },
      {
        "name": "parent",
        "schema": "string",
        "required": true,
        "description": "Globally unique identifier for object to fetch statuses from. Must be a GID for a `project`, `project_brief`, or `task`.",
        "example": "159874"
      },
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "connected_to_app",
          "created_at",
          "download_url",
          "host",
          "name",
          "offset",
          "parent",
          "parent.created_by",
          "parent.name",
          "parent.resource_subtype",
          "path",
          "permanent_url",
          "resource_subtype",
          "size",
          "uri",
          "view_url"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/attachments",
    "method": "uploadAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Attachments",
    "typeScriptTag": "attachments",
    "description": "Upload an attachment",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "connected_to_app",
          "created_at",
          "download_url",
          "host",
          "name",
          "parent",
          "parent.created_by",
          "parent.name",
          "parent.resource_subtype",
          "permanent_url",
          "resource_subtype",
          "size",
          "view_url"
        ]
      },
      {
        "name": "resource_subtype",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "external"
      },
      {
        "name": "file",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "parent",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARENT"
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "connect_to_app",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace_gid}/audit_log_events",
    "method": "getAuditLogEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Audit log API",
    "typeScriptTag": "auditLogApi",
    "description": "Get audit log events",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/batch",
    "method": "submitParallelRequests",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch API",
    "typeScriptTag": "batchApi",
    "description": "Submit parallel requests",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "body",
          "headers",
          "status_code"
        ]
      },
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/projects/{project_gid}/custom_field_settings",
    "method": "getProjectCustomFieldSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom field settings",
    "typeScriptTag": "customFieldSettings",
    "description": "Get a project's custom fields",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "custom_field",
          "custom_field.asana_created_field",
          "custom_field.created_by",
          "custom_field.created_by.name",
          "custom_field.currency_code",
          "custom_field.custom_label",
          "custom_field.custom_label_position",
          "custom_field.date_value",
          "custom_field.date_value.date",
          "custom_field.date_value.date_time",
          "custom_field.description",
          "custom_field.display_value",
          "custom_field.enabled",
          "custom_field.enum_options",
          "custom_field.enum_options.color",
          "custom_field.enum_options.enabled",
          "custom_field.enum_options.name",
          "custom_field.enum_value",
          "custom_field.enum_value.color",
          "custom_field.enum_value.enabled",
          "custom_field.enum_value.name",
          "custom_field.format",
          "custom_field.has_notifications_enabled",
          "custom_field.id_prefix",
          "custom_field.is_formula_field",
          "custom_field.is_global_to_workspace",
          "custom_field.is_value_read_only",
          "custom_field.multi_enum_values",
          "custom_field.multi_enum_values.color",
          "custom_field.multi_enum_values.enabled",
          "custom_field.multi_enum_values.name",
          "custom_field.name",
          "custom_field.number_value",
          "custom_field.people_value",
          "custom_field.people_value.name",
          "custom_field.precision",
          "custom_field.representation_type",
          "custom_field.resource_subtype",
          "custom_field.text_value",
          "custom_field.type",
          "is_important",
          "offset",
          "parent",
          "parent.name",
          "path",
          "project",
          "project.name",
          "uri"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/portfolios/{portfolio_gid}/custom_field_settings",
    "method": "getPortfolioCustomFieldSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom field settings",
    "typeScriptTag": "customFieldSettings",
    "description": "Get a portfolio's custom fields",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "custom_field",
          "custom_field.asana_created_field",
          "custom_field.created_by",
          "custom_field.created_by.name",
          "custom_field.currency_code",
          "custom_field.custom_label",
          "custom_field.custom_label_position",
          "custom_field.date_value",
          "custom_field.date_value.date",
          "custom_field.date_value.date_time",
          "custom_field.description",
          "custom_field.display_value",
          "custom_field.enabled",
          "custom_field.enum_options",
          "custom_field.enum_options.color",
          "custom_field.enum_options.enabled",
          "custom_field.enum_options.name",
          "custom_field.enum_value",
          "custom_field.enum_value.color",
          "custom_field.enum_value.enabled",
          "custom_field.enum_value.name",
          "custom_field.format",
          "custom_field.has_notifications_enabled",
          "custom_field.id_prefix",
          "custom_field.is_formula_field",
          "custom_field.is_global_to_workspace",
          "custom_field.is_value_read_only",
          "custom_field.multi_enum_values",
          "custom_field.multi_enum_values.color",
          "custom_field.multi_enum_values.enabled",
          "custom_field.multi_enum_values.name",
          "custom_field.name",
          "custom_field.number_value",
          "custom_field.people_value",
          "custom_field.people_value.name",
          "custom_field.precision",
          "custom_field.representation_type",
          "custom_field.resource_subtype",
          "custom_field.text_value",
          "custom_field.type",
          "is_important",
          "offset",
          "parent",
          "parent.name",
          "path",
          "project",
          "project.name",
          "uri"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/custom_fields",
    "method": "createNewFieldRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom fields",
    "typeScriptTag": "customFields",
    "description": "Create a custom field",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "asana_created_field",
          "created_by",
          "created_by.name",
          "currency_code",
          "custom_label",
          "custom_label_position",
          "date_value",
          "date_value.date",
          "date_value.date_time",
          "description",
          "display_value",
          "enabled",
          "enum_options",
          "enum_options.color",
          "enum_options.enabled",
          "enum_options.name",
          "enum_value",
          "enum_value.color",
          "enum_value.enabled",
          "enum_value.name",
          "format",
          "has_notifications_enabled",
          "id_prefix",
          "is_formula_field",
          "is_global_to_workspace",
          "is_value_read_only",
          "multi_enum_values",
          "multi_enum_values.color",
          "multi_enum_values.enabled",
          "multi_enum_values.name",
          "name",
          "number_value",
          "people_value",
          "people_value.name",
          "precision",
          "representation_type",
          "resource_subtype",
          "text_value",
          "type"
        ]
      },
      {
        "name": "data",
        "schema": "undefined",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/custom_fields/{custom_field_gid}",
    "method": "deleteFieldRecord",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Custom fields",
    "typeScriptTag": "customFields",
    "description": "Delete a custom field",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/custom_fields/{custom_field_gid}",
    "method": "getMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom fields",
    "typeScriptTag": "customFields",
    "description": "Get a custom field",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "asana_created_field",
          "created_by",
          "created_by.name",
          "currency_code",
          "custom_label",
          "custom_label_position",
          "date_value",
          "date_value.date",
          "date_value.date_time",
          "description",
          "display_value",
          "enabled",
          "enum_options",
          "enum_options.color",
          "enum_options.enabled",
          "enum_options.name",
          "enum_value",
          "enum_value.color",
          "enum_value.enabled",
          "enum_value.name",
          "format",
          "has_notifications_enabled",
          "id_prefix",
          "is_formula_field",
          "is_global_to_workspace",
          "is_value_read_only",
          "multi_enum_values",
          "multi_enum_values.color",
          "multi_enum_values.enabled",
          "multi_enum_values.name",
          "name",
          "number_value",
          "people_value",
          "people_value.name",
          "precision",
          "representation_type",
          "resource_subtype",
          "text_value",
          "type"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/custom_fields/{custom_field_gid}",
    "method": "updateFieldRecord",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Custom fields",
    "typeScriptTag": "customFields",
    "description": "Update a custom field",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "asana_created_field",
          "created_by",
          "created_by.name",
          "currency_code",
          "custom_label",
          "custom_label_position",
          "date_value",
          "date_value.date",
          "date_value.date_time",
          "description",
          "display_value",
          "enabled",
          "enum_options",
          "enum_options.color",
          "enum_options.enabled",
          "enum_options.name",
          "enum_value",
          "enum_value.color",
          "enum_value.enabled",
          "enum_value.name",
          "format",
          "has_notifications_enabled",
          "id_prefix",
          "is_formula_field",
          "is_global_to_workspace",
          "is_value_read_only",
          "multi_enum_values",
          "multi_enum_values.color",
          "multi_enum_values.enabled",
          "multi_enum_values.name",
          "name",
          "number_value",
          "people_value",
          "people_value.name",
          "precision",
          "representation_type",
          "resource_subtype",
          "text_value",
          "type"
        ]
      },
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace_gid}/custom_fields",
    "method": "listWorkspaceCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom fields",
    "typeScriptTag": "customFields",
    "description": "Get a workspace's custom fields",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "asana_created_field",
          "created_by",
          "created_by.name",
          "currency_code",
          "custom_label",
          "custom_label_position",
          "date_value",
          "date_value.date",
          "date_value.date_time",
          "description",
          "display_value",
          "enabled",
          "enum_options",
          "enum_options.color",
          "enum_options.enabled",
          "enum_options.name",
          "enum_value",
          "enum_value.color",
          "enum_value.enabled",
          "enum_value.name",
          "format",
          "has_notifications_enabled",
          "id_prefix",
          "is_formula_field",
          "is_global_to_workspace",
          "is_value_read_only",
          "multi_enum_values",
          "multi_enum_values.color",
          "multi_enum_values.enabled",
          "multi_enum_values.name",
          "name",
          "number_value",
          "offset",
          "path",
          "people_value",
          "people_value.name",
          "precision",
          "representation_type",
          "resource_subtype",
          "text_value",
          "type",
          "uri"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/custom_fields/{custom_field_gid}/enum_options",
    "method": "addEnumOption",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom fields",
    "typeScriptTag": "customFields",
    "description": "Create an enum option",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "color",
          "enabled",
          "name"
        ]
      },
      {
        "name": "data",
        "schema": "undefined",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/custom_fields/{custom_field_gid}/enum_options/insert",
    "method": "reorderEnumOption",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom fields",
    "typeScriptTag": "customFields",
    "description": "Reorder a custom field's enum",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "color",
          "enabled",
          "name"
        ]
      },
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/enum_options/{enum_option_gid}",
    "method": "updateEnumOption",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Custom fields",
    "typeScriptTag": "customFields",
    "description": "Update an enum option",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "color",
          "enabled",
          "name"
        ]
      },
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/events",
    "method": "getResourceEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Get events on a resource",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "action",
          "change",
          "change.action",
          "change.added_value",
          "change.field",
          "change.new_value",
          "change.removed_value",
          "created_at",
          "parent",
          "parent.name",
          "resource",
          "resource.name",
          "type",
          "user",
          "user.name"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The full record for all events that have occurred since the sync token was created."
      },
      {
        "statusCode": "400",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "412",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/goal_relationships/{goal_relationship_gid}",
    "method": "getRecordById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Goal relationships",
    "typeScriptTag": "goalRelationships",
    "description": "Get a goal relationship",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "contribution_weight",
          "resource_subtype",
          "supported_goal",
          "supported_goal.name",
          "supported_goal.owner",
          "supported_goal.owner.name",
          "supporting_resource",
          "supporting_resource.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/goal_relationships/{goal_relationship_gid}",
    "method": "updateGoalRelationshipRecord",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Goal relationships",
    "typeScriptTag": "goalRelationships",
    "description": "Update a goal relationship",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "contribution_weight",
          "resource_subtype",
          "supported_goal",
          "supported_goal.name",
          "supported_goal.owner",
          "supported_goal.owner.name",
          "supporting_resource",
          "supporting_resource.name"
        ]
      },
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/goal_relationships",
    "method": "getCompactRecords",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Goal relationships",
    "typeScriptTag": "goalRelationships",
    "description": "Get goal relationships",
    "parameters": [
      {
        "name": "optPretty",
        "schema": "boolean",
        "required": false,
        "description": "Provides “pretty” output.\nProvides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.",
        "example": true
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.",
        "example": 50
      },
      {
        "name": "offset",
        "schema": "string",
        "description": "Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n'Note: You can only pass in an offset that was returned to you via a previously paginated request.'",
        "example": "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9"
      },
      {
        "name": "supportedGoal",
        "schema": "string",
        "required": true,
        "description": "Globally unique identifier for the supported goal in the goal relationship.",
        "example": "12345"
      },
      {
        "name": "resourceSubtype",
        "schema": "string",
        "description": "If provided, filter to goal relationships with a given resource_subtype.",
        "example": "subgoal"
      },
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "contribution_weight",
          "offset",
          "path",
          "resource_subtype",
          "supported_goal",
          "supported_goal.name",
          "supported_goal.owner",
          "supported_goal.owner.name",
          "supporting_resource",
          "supporting_resource.name",
          "uri"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/goals/{goal_gid}/addSupportingRelationship",
    "method": "createSupportingRelationship",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Goal relationships",
    "typeScriptTag": "goalRelationships",
    "description": "Add a supporting goal relationship",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "contribution_weight",
          "resource_subtype",
          "supported_goal",
          "supported_goal.name",
          "supported_goal.owner",
          "supported_goal.owner.name",
          "supporting_resource",
          "supporting_resource.name"
        ]
      },
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/goals/{goal_gid}/removeSupportingRelationship",
    "method": "removeSupportingRelationship",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Goal relationships",
    "typeScriptTag": "goalRelationships",
    "description": "Removes a supporting goal relationship",
    "parameters": [
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/goals/{goal_gid}",
    "method": "deleteRecord",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Delete a goal",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "402",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/goals/{goal_gid}",
    "method": "getGoalRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Get a goal",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "current_status_update",
          "current_status_update.resource_subtype",
          "current_status_update.title",
          "due_on",
          "followers",
          "followers.name",
          "html_notes",
          "is_workspace_level",
          "liked",
          "likes",
          "likes.user",
          "likes.user.name",
          "metric",
          "metric.can_manage",
          "metric.currency_code",
          "metric.current_display_value",
          "metric.current_number_value",
          "metric.initial_number_value",
          "metric.precision",
          "metric.progress_source",
          "metric.resource_subtype",
          "metric.target_number_value",
          "metric.unit",
          "name",
          "notes",
          "num_likes",
          "owner",
          "owner.name",
          "start_on",
          "status",
          "team",
          "team.name",
          "time_period",
          "time_period.display_name",
          "time_period.end_on",
          "time_period.period",
          "time_period.start_on",
          "workspace",
          "workspace.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "402",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/goals/{goal_gid}",
    "method": "updateGoalRecord",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Update a goal",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "current_status_update",
          "current_status_update.resource_subtype",
          "current_status_update.title",
          "due_on",
          "followers",
          "followers.name",
          "html_notes",
          "is_workspace_level",
          "liked",
          "likes",
          "likes.user",
          "likes.user.name",
          "metric",
          "metric.can_manage",
          "metric.currency_code",
          "metric.current_display_value",
          "metric.current_number_value",
          "metric.initial_number_value",
          "metric.precision",
          "metric.progress_source",
          "metric.resource_subtype",
          "metric.target_number_value",
          "metric.unit",
          "name",
          "notes",
          "num_likes",
          "owner",
          "owner.name",
          "start_on",
          "status",
          "team",
          "team.name",
          "time_period",
          "time_period.display_name",
          "time_period.end_on",
          "time_period.period",
          "time_period.start_on",
          "workspace",
          "workspace.name"
        ]
      },
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/goals",
    "method": "getCompactRecords",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Get goals",
    "parameters": [
      {
        "name": "portfolio",
        "schema": "string",
        "description": "Globally unique identifier for supporting portfolio.",
        "example": "159874"
      },
      {
        "name": "project",
        "schema": "string",
        "description": "Globally unique identifier for supporting project.",
        "example": "512241"
      },
      {
        "name": "task",
        "schema": "string",
        "description": "Globally unique identifier for supporting task.",
        "example": "78424"
      },
      {
        "name": "isWorkspaceLevel",
        "schema": "boolean",
        "description": "Filter to goals with is_workspace_level set to query value. Must be used with the workspace parameter.",
        "example": false
      },
      {
        "name": "team",
        "schema": "string",
        "description": "Globally unique identifier for the team.",
        "example": "31326"
      },
      {
        "name": "workspace",
        "schema": "string",
        "description": "Globally unique identifier for the workspace.",
        "example": "31326"
      },
      {
        "name": "timePeriods",
        "schema": "array",
        "description": "Globally unique identifiers for the time periods.",
        "example": "221693,506165"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.",
        "example": 50
      },
      {
        "name": "offset",
        "schema": "string",
        "description": "Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n'Note: You can only pass in an offset that was returned to you via a previously paginated request.'",
        "example": "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9"
      },
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "current_status_update",
          "current_status_update.resource_subtype",
          "current_status_update.title",
          "due_on",
          "followers",
          "followers.name",
          "html_notes",
          "is_workspace_level",
          "liked",
          "likes",
          "likes.user",
          "likes.user.name",
          "metric",
          "metric.can_manage",
          "metric.currency_code",
          "metric.current_display_value",
          "metric.current_number_value",
          "metric.initial_number_value",
          "metric.precision",
          "metric.progress_source",
          "metric.resource_subtype",
          "metric.target_number_value",
          "metric.unit",
          "name",
          "notes",
          "num_likes",
          "offset",
          "owner",
          "owner.name",
          "path",
          "start_on",
          "status",
          "team",
          "team.name",
          "time_period",
          "time_period.display_name",
          "time_period.end_on",
          "time_period.period",
          "time_period.start_on",
          "uri",
          "workspace",
          "workspace.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "402",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/goals",
    "method": "createNewGoalRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Create a goal",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "current_status_update",
          "current_status_update.resource_subtype",
          "current_status_update.title",
          "due_on",
          "followers",
          "followers.name",
          "html_notes",
          "is_workspace_level",
          "liked",
          "likes",
          "likes.user",
          "likes.user.name",
          "metric",
          "metric.can_manage",
          "metric.currency_code",
          "metric.current_display_value",
          "metric.current_number_value",
          "metric.initial_number_value",
          "metric.precision",
          "metric.progress_source",
          "metric.resource_subtype",
          "metric.target_number_value",
          "metric.unit",
          "name",
          "notes",
          "num_likes",
          "owner",
          "owner.name",
          "start_on",
          "status",
          "team",
          "team.name",
          "time_period",
          "time_period.display_name",
          "time_period.end_on",
          "time_period.period",
          "time_period.start_on",
          "workspace",
          "workspace.name"
        ]
      },
      {
        "name": "data",
        "schema": "undefined",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "402",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/goals/{goal_gid}/setMetric",
    "method": "createMetric",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Create a goal metric",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "current_status_update",
          "current_status_update.resource_subtype",
          "current_status_update.title",
          "due_on",
          "followers",
          "followers.name",
          "html_notes",
          "is_workspace_level",
          "liked",
          "likes",
          "likes.user",
          "likes.user.name",
          "metric",
          "metric.can_manage",
          "metric.currency_code",
          "metric.current_display_value",
          "metric.current_number_value",
          "metric.initial_number_value",
          "metric.precision",
          "metric.progress_source",
          "metric.resource_subtype",
          "metric.target_number_value",
          "metric.unit",
          "name",
          "notes",
          "num_likes",
          "owner",
          "owner.name",
          "start_on",
          "status",
          "team",
          "team.name",
          "time_period",
          "time_period.display_name",
          "time_period.end_on",
          "time_period.period",
          "time_period.start_on",
          "workspace",
          "workspace.name"
        ]
      },
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "402",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/goals/{goal_gid}/setMetricCurrentValue",
    "method": "updateMetricCurrentValue",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Update a goal metric",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "current_status_update",
          "current_status_update.resource_subtype",
          "current_status_update.title",
          "due_on",
          "followers",
          "followers.name",
          "html_notes",
          "is_workspace_level",
          "liked",
          "likes",
          "likes.user",
          "likes.user.name",
          "metric",
          "metric.can_manage",
          "metric.currency_code",
          "metric.current_display_value",
          "metric.current_number_value",
          "metric.initial_number_value",
          "metric.precision",
          "metric.progress_source",
          "metric.resource_subtype",
          "metric.target_number_value",
          "metric.unit",
          "name",
          "notes",
          "num_likes",
          "owner",
          "owner.name",
          "start_on",
          "status",
          "team",
          "team.name",
          "time_period",
          "time_period.display_name",
          "time_period.end_on",
          "time_period.period",
          "time_period.start_on",
          "workspace",
          "workspace.name"
        ]
      },
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "402",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/goals/{goal_gid}/addFollowers",
    "method": "addCollaboratorsToGoal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Add a collaborator to a goal",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "current_status_update",
          "current_status_update.resource_subtype",
          "current_status_update.title",
          "due_on",
          "followers",
          "followers.name",
          "html_notes",
          "is_workspace_level",
          "liked",
          "likes",
          "likes.user",
          "likes.user.name",
          "metric",
          "metric.can_manage",
          "metric.currency_code",
          "metric.current_display_value",
          "metric.current_number_value",
          "metric.initial_number_value",
          "metric.precision",
          "metric.progress_source",
          "metric.resource_subtype",
          "metric.target_number_value",
          "metric.unit",
          "name",
          "notes",
          "num_likes",
          "owner",
          "owner.name",
          "start_on",
          "status",
          "team",
          "team.name",
          "time_period",
          "time_period.display_name",
          "time_period.end_on",
          "time_period.period",
          "time_period.start_on",
          "workspace",
          "workspace.name"
        ]
      },
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "402",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/goals/{goal_gid}/removeFollowers",
    "method": "removeFollowersFromGoal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Remove a collaborator from a goal",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "current_status_update",
          "current_status_update.resource_subtype",
          "current_status_update.title",
          "due_on",
          "followers",
          "followers.name",
          "html_notes",
          "is_workspace_level",
          "liked",
          "likes",
          "likes.user",
          "likes.user.name",
          "metric",
          "metric.can_manage",
          "metric.currency_code",
          "metric.current_display_value",
          "metric.current_number_value",
          "metric.initial_number_value",
          "metric.precision",
          "metric.progress_source",
          "metric.resource_subtype",
          "metric.target_number_value",
          "metric.unit",
          "name",
          "notes",
          "num_likes",
          "owner",
          "owner.name",
          "start_on",
          "status",
          "team",
          "team.name",
          "time_period",
          "time_period.display_name",
          "time_period.end_on",
          "time_period.period",
          "time_period.start_on",
          "workspace",
          "workspace.name"
        ]
      },
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "402",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/goals/{goal_gid}/parentGoals",
    "method": "getParentGoals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Get parent goals from a goal",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "current_status_update",
          "current_status_update.resource_subtype",
          "current_status_update.title",
          "due_on",
          "followers",
          "followers.name",
          "html_notes",
          "is_workspace_level",
          "liked",
          "likes",
          "likes.user",
          "likes.user.name",
          "metric",
          "metric.can_manage",
          "metric.currency_code",
          "metric.current_display_value",
          "metric.current_number_value",
          "metric.initial_number_value",
          "metric.precision",
          "metric.progress_source",
          "metric.resource_subtype",
          "metric.target_number_value",
          "metric.unit",
          "name",
          "notes",
          "num_likes",
          "owner",
          "owner.name",
          "start_on",
          "status",
          "team",
          "team.name",
          "time_period",
          "time_period.display_name",
          "time_period.end_on",
          "time_period.period",
          "time_period.start_on",
          "workspace",
          "workspace.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "402",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/jobs/{job_gid}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Get a job by id",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "new_project",
          "new_project.name",
          "new_project_template",
          "new_project_template.name",
          "new_task",
          "new_task.created_by",
          "new_task.name",
          "new_task.resource_subtype",
          "new_task_template",
          "new_task_template.name",
          "resource_subtype",
          "status"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/memberships",
    "method": "getMultiple",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Memberships",
    "typeScriptTag": "memberships",
    "description": "Get multiple memberships",
    "parameters": [
      {
        "name": "parent",
        "schema": "string",
        "description": "Globally unique identifier for `goal` or `project`.",
        "example": "159874"
      },
      {
        "name": "member",
        "schema": "string",
        "description": "Globally unique identifier for `team` or `user`.",
        "example": "1061493"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.",
        "example": 50
      },
      {
        "name": "offset",
        "schema": "string",
        "description": "Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n'Note: You can only pass in an offset that was returned to you via a previously paginated request.'",
        "example": "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9"
      },
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "offset",
          "path",
          "uri"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/memberships",
    "method": "createNewRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Memberships",
    "typeScriptTag": "memberships",
    "description": "Create a membership",
    "parameters": [
      {
        "name": "data",
        "schema": "undefined",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/memberships/{membership_gid}",
    "method": "deleteRecord",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Memberships",
    "typeScriptTag": "memberships",
    "description": "Delete a membership",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/memberships/{membership_gid}",
    "method": "getMembershipRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Memberships",
    "typeScriptTag": "memberships",
    "description": "Get a membership",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "access_level",
          "member",
          "member.name",
          "parent",
          "parent.name",
          "resource_subtype"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/organization_exports",
    "method": "createExportRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organization exports",
    "typeScriptTag": "organizationExports",
    "description": "Create an organization export request",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "created_at",
          "download_url",
          "organization",
          "organization.name",
          "state"
        ]
      },
      {
        "name": "data",
        "schema": "object",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/organization_exports/{organization_export_gid}",
    "method": "getExportDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization exports",
    "typeScriptTag": "organizationExports",
    "description": "Get details on an org export request",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "created_at",
          "download_url",
          "organization",
          "organization.name",
          "state"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/portfolio_memberships",
    "method": "listMultipleMemberships",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portfolio memberships",
    "typeScriptTag": "portfolioMemberships",
    "description": "Get multiple portfolio memberships",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "offset",
          "path",
          "portfolio",
          "portfolio.name",
          "uri",
          "user",
          "user.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/portfolio_memberships/{portfolio_membership_gid}",
    "method": "getCompleteRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portfolio memberships",
    "typeScriptTag": "portfolioMemberships",
    "description": "Get a portfolio membership",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "portfolio",
          "portfolio.name",
          "user",
          "user.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/portfolios/{portfolio_gid}/portfolio_memberships",
    "method": "getCompact",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portfolio memberships",
    "typeScriptTag": "portfolioMemberships",
    "description": "Get memberships from a portfolio",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "offset",
          "path",
          "portfolio",
          "portfolio.name",
          "uri",
          "user",
          "user.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/portfolios",
    "method": "listMultiplePortfolios",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portfolios",
    "typeScriptTag": "portfolios",
    "description": "Get multiple portfolios",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.",
        "example": 50
      },
      {
        "name": "offset",
        "schema": "string",
        "description": "Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n'Note: You can only pass in an offset that was returned to you via a previously paginated request.'",
        "example": "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9"
      },
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "The workspace or organization to filter portfolios on.",
        "example": "1331"
      },
      {
        "name": "owner",
        "schema": "string",
        "required": false,
        "description": "The user who owns the portfolio. Currently, API users can only get a list of portfolios that they themselves own, unless the request is made from a Service Account. In the case of a Service Account, if this parameter is specified, then all portfolios owned by this parameter are returned. Otherwise, all portfolios across the workspace are returned.",
        "example": "14916"
      },
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "color",
          "created_at",
          "created_by",
          "created_by.name",
          "current_status_update",
          "current_status_update.resource_subtype",
          "current_status_update.title",
          "custom_field_settings",
          "custom_field_settings.custom_field",
          "custom_field_settings.custom_field.asana_created_field",
          "custom_field_settings.custom_field.created_by",
          "custom_field_settings.custom_field.created_by.name",
          "custom_field_settings.custom_field.currency_code",
          "custom_field_settings.custom_field.custom_label",
          "custom_field_settings.custom_field.custom_label_position",
          "custom_field_settings.custom_field.date_value",
          "custom_field_settings.custom_field.date_value.date",
          "custom_field_settings.custom_field.date_value.date_time",
          "custom_field_settings.custom_field.description",
          "custom_field_settings.custom_field.display_value",
          "custom_field_settings.custom_field.enabled",
          "custom_field_settings.custom_field.enum_options",
          "custom_field_settings.custom_field.enum_options.color",
          "custom_field_settings.custom_field.enum_options.enabled",
          "custom_field_settings.custom_field.enum_options.name",
          "custom_field_settings.custom_field.enum_value",
          "custom_field_settings.custom_field.enum_value.color",
          "custom_field_settings.custom_field.enum_value.enabled",
          "custom_field_settings.custom_field.enum_value.name",
          "custom_field_settings.custom_field.format",
          "custom_field_settings.custom_field.has_notifications_enabled",
          "custom_field_settings.custom_field.id_prefix",
          "custom_field_settings.custom_field.is_formula_field",
          "custom_field_settings.custom_field.is_global_to_workspace",
          "custom_field_settings.custom_field.is_value_read_only",
          "custom_field_settings.custom_field.multi_enum_values",
          "custom_field_settings.custom_field.multi_enum_values.color",
          "custom_field_settings.custom_field.multi_enum_values.enabled",
          "custom_field_settings.custom_field.multi_enum_values.name",
          "custom_field_settings.custom_field.name",
          "custom_field_settings.custom_field.number_value",
          "custom_field_settings.custom_field.people_value",
          "custom_field_settings.custom_field.people_value.name",
          "custom_field_settings.custom_field.precision",
          "custom_field_settings.custom_field.representation_type",
          "custom_field_settings.custom_field.resource_subtype",
          "custom_field_settings.custom_field.text_value",
          "custom_field_settings.custom_field.type",
          "custom_field_settings.is_important",
          "custom_field_settings.parent",
          "custom_field_settings.parent.name",
          "custom_field_settings.project",
          "custom_field_settings.project.name",
          "custom_fields",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "due_on",
          "members",
          "members.name",
          "name",
          "offset",
          "owner",
          "owner.name",
          "path",
          "permalink_url",
          "project_templates",
          "project_templates.name",
          "public",
          "start_on",
          "uri",
          "workspace",
          "workspace.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/portfolios",
    "method": "createNewPortfolioRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Portfolios",
    "typeScriptTag": "portfolios",
    "description": "Create a portfolio",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "color",
          "created_at",
          "created_by",
          "created_by.name",
          "current_status_update",
          "current_status_update.resource_subtype",
          "current_status_update.title",
          "custom_field_settings",
          "custom_field_settings.custom_field",
          "custom_field_settings.custom_field.asana_created_field",
          "custom_field_settings.custom_field.created_by",
          "custom_field_settings.custom_field.created_by.name",
          "custom_field_settings.custom_field.currency_code",
          "custom_field_settings.custom_field.custom_label",
          "custom_field_settings.custom_field.custom_label_position",
          "custom_field_settings.custom_field.date_value",
          "custom_field_settings.custom_field.date_value.date",
          "custom_field_settings.custom_field.date_value.date_time",
          "custom_field_settings.custom_field.description",
          "custom_field_settings.custom_field.display_value",
          "custom_field_settings.custom_field.enabled",
          "custom_field_settings.custom_field.enum_options",
          "custom_field_settings.custom_field.enum_options.color",
          "custom_field_settings.custom_field.enum_options.enabled",
          "custom_field_settings.custom_field.enum_options.name",
          "custom_field_settings.custom_field.enum_value",
          "custom_field_settings.custom_field.enum_value.color",
          "custom_field_settings.custom_field.enum_value.enabled",
          "custom_field_settings.custom_field.enum_value.name",
          "custom_field_settings.custom_field.format",
          "custom_field_settings.custom_field.has_notifications_enabled",
          "custom_field_settings.custom_field.id_prefix",
          "custom_field_settings.custom_field.is_formula_field",
          "custom_field_settings.custom_field.is_global_to_workspace",
          "custom_field_settings.custom_field.is_value_read_only",
          "custom_field_settings.custom_field.multi_enum_values",
          "custom_field_settings.custom_field.multi_enum_values.color",
          "custom_field_settings.custom_field.multi_enum_values.enabled",
          "custom_field_settings.custom_field.multi_enum_values.name",
          "custom_field_settings.custom_field.name",
          "custom_field_settings.custom_field.number_value",
          "custom_field_settings.custom_field.people_value",
          "custom_field_settings.custom_field.people_value.name",
          "custom_field_settings.custom_field.precision",
          "custom_field_settings.custom_field.representation_type",
          "custom_field_settings.custom_field.resource_subtype",
          "custom_field_settings.custom_field.text_value",
          "custom_field_settings.custom_field.type",
          "custom_field_settings.is_important",
          "custom_field_settings.parent",
          "custom_field_settings.parent.name",
          "custom_field_settings.project",
          "custom_field_settings.project.name",
          "custom_fields",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "due_on",
          "members",
          "members.name",
          "name",
          "owner",
          "owner.name",
          "permalink_url",
          "project_templates",
          "project_templates.name",
          "public",
          "start_on",
          "workspace",
          "workspace.name"
        ]
      },
      {
        "name": "data",
        "schema": "undefined",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/portfolios/{portfolio_gid}",
    "method": "deleteRecord",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Portfolios",
    "typeScriptTag": "portfolios",
    "description": "Delete a portfolio",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/portfolios/{portfolio_gid}",
    "method": "getRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portfolios",
    "typeScriptTag": "portfolios",
    "description": "Get a portfolio",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "color",
          "created_at",
          "created_by",
          "created_by.name",
          "current_status_update",
          "current_status_update.resource_subtype",
          "current_status_update.title",
          "custom_field_settings",
          "custom_field_settings.custom_field",
          "custom_field_settings.custom_field.asana_created_field",
          "custom_field_settings.custom_field.created_by",
          "custom_field_settings.custom_field.created_by.name",
          "custom_field_settings.custom_field.currency_code",
          "custom_field_settings.custom_field.custom_label",
          "custom_field_settings.custom_field.custom_label_position",
          "custom_field_settings.custom_field.date_value",
          "custom_field_settings.custom_field.date_value.date",
          "custom_field_settings.custom_field.date_value.date_time",
          "custom_field_settings.custom_field.description",
          "custom_field_settings.custom_field.display_value",
          "custom_field_settings.custom_field.enabled",
          "custom_field_settings.custom_field.enum_options",
          "custom_field_settings.custom_field.enum_options.color",
          "custom_field_settings.custom_field.enum_options.enabled",
          "custom_field_settings.custom_field.enum_options.name",
          "custom_field_settings.custom_field.enum_value",
          "custom_field_settings.custom_field.enum_value.color",
          "custom_field_settings.custom_field.enum_value.enabled",
          "custom_field_settings.custom_field.enum_value.name",
          "custom_field_settings.custom_field.format",
          "custom_field_settings.custom_field.has_notifications_enabled",
          "custom_field_settings.custom_field.id_prefix",
          "custom_field_settings.custom_field.is_formula_field",
          "custom_field_settings.custom_field.is_global_to_workspace",
          "custom_field_settings.custom_field.is_value_read_only",
          "custom_field_settings.custom_field.multi_enum_values",
          "custom_field_settings.custom_field.multi_enum_values.color",
          "custom_field_settings.custom_field.multi_enum_values.enabled",
          "custom_field_settings.custom_field.multi_enum_values.name",
          "custom_field_settings.custom_field.name",
          "custom_field_settings.custom_field.number_value",
          "custom_field_settings.custom_field.people_value",
          "custom_field_settings.custom_field.people_value.name",
          "custom_field_settings.custom_field.precision",
          "custom_field_settings.custom_field.representation_type",
          "custom_field_settings.custom_field.resource_subtype",
          "custom_field_settings.custom_field.text_value",
          "custom_field_settings.custom_field.type",
          "custom_field_settings.is_important",
          "custom_field_settings.parent",
          "custom_field_settings.parent.name",
          "custom_field_settings.project",
          "custom_field_settings.project.name",
          "custom_fields",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "due_on",
          "members",
          "members.name",
          "name",
          "owner",
          "owner.name",
          "permalink_url",
          "project_templates",
          "project_templates.name",
          "public",
          "start_on",
          "workspace",
          "workspace.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/portfolios/{portfolio_gid}",
    "method": "updatePortfolioRecord",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Portfolios",
    "typeScriptTag": "portfolios",
    "description": "Update a portfolio",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "color",
          "created_at",
          "created_by",
          "created_by.name",
          "current_status_update",
          "current_status_update.resource_subtype",
          "current_status_update.title",
          "custom_field_settings",
          "custom_field_settings.custom_field",
          "custom_field_settings.custom_field.asana_created_field",
          "custom_field_settings.custom_field.created_by",
          "custom_field_settings.custom_field.created_by.name",
          "custom_field_settings.custom_field.currency_code",
          "custom_field_settings.custom_field.custom_label",
          "custom_field_settings.custom_field.custom_label_position",
          "custom_field_settings.custom_field.date_value",
          "custom_field_settings.custom_field.date_value.date",
          "custom_field_settings.custom_field.date_value.date_time",
          "custom_field_settings.custom_field.description",
          "custom_field_settings.custom_field.display_value",
          "custom_field_settings.custom_field.enabled",
          "custom_field_settings.custom_field.enum_options",
          "custom_field_settings.custom_field.enum_options.color",
          "custom_field_settings.custom_field.enum_options.enabled",
          "custom_field_settings.custom_field.enum_options.name",
          "custom_field_settings.custom_field.enum_value",
          "custom_field_settings.custom_field.enum_value.color",
          "custom_field_settings.custom_field.enum_value.enabled",
          "custom_field_settings.custom_field.enum_value.name",
          "custom_field_settings.custom_field.format",
          "custom_field_settings.custom_field.has_notifications_enabled",
          "custom_field_settings.custom_field.id_prefix",
          "custom_field_settings.custom_field.is_formula_field",
          "custom_field_settings.custom_field.is_global_to_workspace",
          "custom_field_settings.custom_field.is_value_read_only",
          "custom_field_settings.custom_field.multi_enum_values",
          "custom_field_settings.custom_field.multi_enum_values.color",
          "custom_field_settings.custom_field.multi_enum_values.enabled",
          "custom_field_settings.custom_field.multi_enum_values.name",
          "custom_field_settings.custom_field.name",
          "custom_field_settings.custom_field.number_value",
          "custom_field_settings.custom_field.people_value",
          "custom_field_settings.custom_field.people_value.name",
          "custom_field_settings.custom_field.precision",
          "custom_field_settings.custom_field.representation_type",
          "custom_field_settings.custom_field.resource_subtype",
          "custom_field_settings.custom_field.text_value",
          "custom_field_settings.custom_field.type",
          "custom_field_settings.is_important",
          "custom_field_settings.parent",
          "custom_field_settings.parent.name",
          "custom_field_settings.project",
          "custom_field_settings.project.name",
          "custom_fields",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "due_on",
          "members",
          "members.name",
          "name",
          "owner",
          "owner.name",
          "permalink_url",
          "project_templates",
          "project_templates.name",
          "public",
          "start_on",
          "workspace",
          "workspace.name"
        ]
      },
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/portfolios/{portfolio_gid}/items",
    "method": "getItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portfolios",
    "typeScriptTag": "portfolios",
    "description": "Get portfolio items",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "archived",
          "color",
          "completed",
          "completed_at",
          "completed_by",
          "completed_by.name",
          "created_at",
          "created_from_template",
          "created_from_template.name",
          "current_status",
          "current_status.author",
          "current_status.author.name",
          "current_status.color",
          "current_status.created_at",
          "current_status.created_by",
          "current_status.created_by.name",
          "current_status.html_text",
          "current_status.modified_at",
          "current_status.text",
          "current_status.title",
          "current_status_update",
          "current_status_update.resource_subtype",
          "current_status_update.title",
          "custom_field_settings",
          "custom_field_settings.custom_field",
          "custom_field_settings.custom_field.asana_created_field",
          "custom_field_settings.custom_field.created_by",
          "custom_field_settings.custom_field.created_by.name",
          "custom_field_settings.custom_field.currency_code",
          "custom_field_settings.custom_field.custom_label",
          "custom_field_settings.custom_field.custom_label_position",
          "custom_field_settings.custom_field.date_value",
          "custom_field_settings.custom_field.date_value.date",
          "custom_field_settings.custom_field.date_value.date_time",
          "custom_field_settings.custom_field.description",
          "custom_field_settings.custom_field.display_value",
          "custom_field_settings.custom_field.enabled",
          "custom_field_settings.custom_field.enum_options",
          "custom_field_settings.custom_field.enum_options.color",
          "custom_field_settings.custom_field.enum_options.enabled",
          "custom_field_settings.custom_field.enum_options.name",
          "custom_field_settings.custom_field.enum_value",
          "custom_field_settings.custom_field.enum_value.color",
          "custom_field_settings.custom_field.enum_value.enabled",
          "custom_field_settings.custom_field.enum_value.name",
          "custom_field_settings.custom_field.format",
          "custom_field_settings.custom_field.has_notifications_enabled",
          "custom_field_settings.custom_field.id_prefix",
          "custom_field_settings.custom_field.is_formula_field",
          "custom_field_settings.custom_field.is_global_to_workspace",
          "custom_field_settings.custom_field.is_value_read_only",
          "custom_field_settings.custom_field.multi_enum_values",
          "custom_field_settings.custom_field.multi_enum_values.color",
          "custom_field_settings.custom_field.multi_enum_values.enabled",
          "custom_field_settings.custom_field.multi_enum_values.name",
          "custom_field_settings.custom_field.name",
          "custom_field_settings.custom_field.number_value",
          "custom_field_settings.custom_field.people_value",
          "custom_field_settings.custom_field.people_value.name",
          "custom_field_settings.custom_field.precision",
          "custom_field_settings.custom_field.representation_type",
          "custom_field_settings.custom_field.resource_subtype",
          "custom_field_settings.custom_field.text_value",
          "custom_field_settings.custom_field.type",
          "custom_field_settings.is_important",
          "custom_field_settings.parent",
          "custom_field_settings.parent.name",
          "custom_field_settings.project",
          "custom_field_settings.project.name",
          "custom_fields",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "default_access_level",
          "default_view",
          "due_date",
          "due_on",
          "followers",
          "followers.name",
          "html_notes",
          "icon",
          "members",
          "members.name",
          "minimum_access_level_for_customization",
          "minimum_access_level_for_sharing",
          "modified_at",
          "name",
          "notes",
          "offset",
          "owner",
          "path",
          "permalink_url",
          "privacy_setting",
          "project_brief",
          "public",
          "start_on",
          "team",
          "team.name",
          "uri",
          "workspace",
          "workspace.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/portfolios/{portfolio_gid}/addItem",
    "method": "addPortfolioItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Portfolios",
    "typeScriptTag": "portfolios",
    "description": "Add a portfolio item",
    "parameters": [
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/portfolios/{portfolio_gid}/removeItem",
    "method": "removeItemFromPortfolio",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Portfolios",
    "typeScriptTag": "portfolios",
    "description": "Remove a portfolio item",
    "parameters": [
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/portfolios/{portfolio_gid}/addCustomFieldSetting",
    "method": "addCustomFieldSetting",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Portfolios",
    "typeScriptTag": "portfolios",
    "description": "Add a custom field to a portfolio",
    "parameters": [
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/portfolios/{portfolio_gid}/removeCustomFieldSetting",
    "method": "removeCustomFieldSetting",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Portfolios",
    "typeScriptTag": "portfolios",
    "description": "Remove a custom field from a portfolio",
    "parameters": [
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/portfolios/{portfolio_gid}/addMembers",
    "method": "addMembersToPortfolio",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Portfolios",
    "typeScriptTag": "portfolios",
    "description": "Add users to a portfolio",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "color",
          "created_at",
          "created_by",
          "created_by.name",
          "current_status_update",
          "current_status_update.resource_subtype",
          "current_status_update.title",
          "custom_field_settings",
          "custom_field_settings.custom_field",
          "custom_field_settings.custom_field.asana_created_field",
          "custom_field_settings.custom_field.created_by",
          "custom_field_settings.custom_field.created_by.name",
          "custom_field_settings.custom_field.currency_code",
          "custom_field_settings.custom_field.custom_label",
          "custom_field_settings.custom_field.custom_label_position",
          "custom_field_settings.custom_field.date_value",
          "custom_field_settings.custom_field.date_value.date",
          "custom_field_settings.custom_field.date_value.date_time",
          "custom_field_settings.custom_field.description",
          "custom_field_settings.custom_field.display_value",
          "custom_field_settings.custom_field.enabled",
          "custom_field_settings.custom_field.enum_options",
          "custom_field_settings.custom_field.enum_options.color",
          "custom_field_settings.custom_field.enum_options.enabled",
          "custom_field_settings.custom_field.enum_options.name",
          "custom_field_settings.custom_field.enum_value",
          "custom_field_settings.custom_field.enum_value.color",
          "custom_field_settings.custom_field.enum_value.enabled",
          "custom_field_settings.custom_field.enum_value.name",
          "custom_field_settings.custom_field.format",
          "custom_field_settings.custom_field.has_notifications_enabled",
          "custom_field_settings.custom_field.id_prefix",
          "custom_field_settings.custom_field.is_formula_field",
          "custom_field_settings.custom_field.is_global_to_workspace",
          "custom_field_settings.custom_field.is_value_read_only",
          "custom_field_settings.custom_field.multi_enum_values",
          "custom_field_settings.custom_field.multi_enum_values.color",
          "custom_field_settings.custom_field.multi_enum_values.enabled",
          "custom_field_settings.custom_field.multi_enum_values.name",
          "custom_field_settings.custom_field.name",
          "custom_field_settings.custom_field.number_value",
          "custom_field_settings.custom_field.people_value",
          "custom_field_settings.custom_field.people_value.name",
          "custom_field_settings.custom_field.precision",
          "custom_field_settings.custom_field.representation_type",
          "custom_field_settings.custom_field.resource_subtype",
          "custom_field_settings.custom_field.text_value",
          "custom_field_settings.custom_field.type",
          "custom_field_settings.is_important",
          "custom_field_settings.parent",
          "custom_field_settings.parent.name",
          "custom_field_settings.project",
          "custom_field_settings.project.name",
          "custom_fields",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "due_on",
          "members",
          "members.name",
          "name",
          "owner",
          "owner.name",
          "permalink_url",
          "project_templates",
          "project_templates.name",
          "public",
          "start_on",
          "workspace",
          "workspace.name"
        ]
      },
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/portfolios/{portfolio_gid}/removeMembers",
    "method": "removeMembersFromPortfolio",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Portfolios",
    "typeScriptTag": "portfolios",
    "description": "Remove users from a portfolio",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "color",
          "created_at",
          "created_by",
          "created_by.name",
          "current_status_update",
          "current_status_update.resource_subtype",
          "current_status_update.title",
          "custom_field_settings",
          "custom_field_settings.custom_field",
          "custom_field_settings.custom_field.asana_created_field",
          "custom_field_settings.custom_field.created_by",
          "custom_field_settings.custom_field.created_by.name",
          "custom_field_settings.custom_field.currency_code",
          "custom_field_settings.custom_field.custom_label",
          "custom_field_settings.custom_field.custom_label_position",
          "custom_field_settings.custom_field.date_value",
          "custom_field_settings.custom_field.date_value.date",
          "custom_field_settings.custom_field.date_value.date_time",
          "custom_field_settings.custom_field.description",
          "custom_field_settings.custom_field.display_value",
          "custom_field_settings.custom_field.enabled",
          "custom_field_settings.custom_field.enum_options",
          "custom_field_settings.custom_field.enum_options.color",
          "custom_field_settings.custom_field.enum_options.enabled",
          "custom_field_settings.custom_field.enum_options.name",
          "custom_field_settings.custom_field.enum_value",
          "custom_field_settings.custom_field.enum_value.color",
          "custom_field_settings.custom_field.enum_value.enabled",
          "custom_field_settings.custom_field.enum_value.name",
          "custom_field_settings.custom_field.format",
          "custom_field_settings.custom_field.has_notifications_enabled",
          "custom_field_settings.custom_field.id_prefix",
          "custom_field_settings.custom_field.is_formula_field",
          "custom_field_settings.custom_field.is_global_to_workspace",
          "custom_field_settings.custom_field.is_value_read_only",
          "custom_field_settings.custom_field.multi_enum_values",
          "custom_field_settings.custom_field.multi_enum_values.color",
          "custom_field_settings.custom_field.multi_enum_values.enabled",
          "custom_field_settings.custom_field.multi_enum_values.name",
          "custom_field_settings.custom_field.name",
          "custom_field_settings.custom_field.number_value",
          "custom_field_settings.custom_field.people_value",
          "custom_field_settings.custom_field.people_value.name",
          "custom_field_settings.custom_field.precision",
          "custom_field_settings.custom_field.representation_type",
          "custom_field_settings.custom_field.resource_subtype",
          "custom_field_settings.custom_field.text_value",
          "custom_field_settings.custom_field.type",
          "custom_field_settings.is_important",
          "custom_field_settings.parent",
          "custom_field_settings.parent.name",
          "custom_field_settings.project",
          "custom_field_settings.project.name",
          "custom_fields",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "due_on",
          "members",
          "members.name",
          "name",
          "owner",
          "owner.name",
          "permalink_url",
          "project_templates",
          "project_templates.name",
          "public",
          "start_on",
          "workspace",
          "workspace.name"
        ]
      },
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/project_briefs/{project_brief_gid}",
    "method": "removeBrief",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Project briefs",
    "typeScriptTag": "projectBriefs",
    "description": "Delete a project brief",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/project_briefs/{project_brief_gid}",
    "method": "getFullRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project briefs",
    "typeScriptTag": "projectBriefs",
    "description": "Get a project brief",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "html_text",
          "permalink_url",
          "project",
          "project.name",
          "text",
          "title"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "402",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "424",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "501",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "503",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "504",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/project_briefs/{project_brief_gid}",
    "method": "updateBriefRecord",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Project briefs",
    "typeScriptTag": "projectBriefs",
    "description": "Update a project brief",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "html_text",
          "permalink_url",
          "project",
          "project.name",
          "text",
          "title"
        ]
      },
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/projects/{project_gid}/project_briefs",
    "method": "createNewRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Project briefs",
    "typeScriptTag": "projectBriefs",
    "description": "Create a project brief",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "html_text",
          "permalink_url",
          "project",
          "project.name",
          "text",
          "title"
        ]
      },
      {
        "name": "data",
        "schema": "undefined",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "402",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/project_memberships/{project_membership_gid}",
    "method": "getRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project memberships",
    "typeScriptTag": "projectMemberships",
    "description": "Get a project membership",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "access_level",
          "member",
          "member.name",
          "parent",
          "parent.name",
          "project",
          "project.name",
          "user",
          "user.name",
          "write_access"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/projects/{project_gid}/project_memberships",
    "method": "getCompactRecords",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project memberships",
    "typeScriptTag": "projectMemberships",
    "description": "Get memberships from a project",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "access_level",
          "member",
          "member.name",
          "offset",
          "parent",
          "parent.name",
          "path",
          "uri"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/project_statuses/{project_status_gid}",
    "method": "deleteSpecificStatusUpdate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Project statuses",
    "typeScriptTag": "projectStatuses",
    "description": "Delete a project status",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/project_statuses/{project_status_gid}",
    "method": "getStatusUpdateRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project statuses",
    "typeScriptTag": "projectStatuses",
    "description": "Get a project status",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "author",
          "author.name",
          "color",
          "created_at",
          "created_by",
          "created_by.name",
          "html_text",
          "modified_at",
          "text",
          "title"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/projects/{project_gid}/project_statuses",
    "method": "getProjectUpdates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project statuses",
    "typeScriptTag": "projectStatuses",
    "description": "Get statuses from a project",
    "parameters": [
      {
        "name": "projectGid",
        "schema": "string",
        "required": true,
        "description": "Globally unique identifier for the project.",
        "example": "1331"
      },
      {
        "name": "optPretty",
        "schema": "boolean",
        "required": false,
        "description": "Provides “pretty” output.\nProvides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.",
        "example": true
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.",
        "example": 50
      },
      {
        "name": "offset",
        "schema": "string",
        "description": "Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n'Note: You can only pass in an offset that was returned to you via a previously paginated request.'",
        "example": "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9"
      },
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "author",
          "author.name",
          "color",
          "created_at",
          "created_by",
          "created_by.name",
          "html_text",
          "modified_at",
          "offset",
          "path",
          "text",
          "title",
          "uri"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/projects/{project_gid}/project_statuses",
    "method": "createNewStatusUpdateRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Project statuses",
    "typeScriptTag": "projectStatuses",
    "description": "Create a project status",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "author",
          "author.name",
          "color",
          "created_at",
          "created_by",
          "created_by.name",
          "html_text",
          "modified_at",
          "text",
          "title"
        ]
      },
      {
        "name": "data",
        "schema": "undefined",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/project_templates/{project_template_gid}",
    "method": "deleteTemplateRecord",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Project templates",
    "typeScriptTag": "projectTemplates",
    "description": "Delete a project template",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "402",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/project_templates/{project_template_gid}",
    "method": "getRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project templates",
    "typeScriptTag": "projectTemplates",
    "description": "Get a project template",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "color",
          "description",
          "html_description",
          "name",
          "owner",
          "public",
          "requested_dates",
          "requested_dates.description",
          "requested_dates.name",
          "requested_roles",
          "requested_roles.name",
          "team",
          "team.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/project_templates",
    "method": "listMultiple",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project templates",
    "typeScriptTag": "projectTemplates",
    "description": "Get multiple project templates",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "description": "The workspace to filter results on.",
        "example": "12345"
      },
      {
        "name": "team",
        "schema": "string",
        "description": "The team to filter projects on.",
        "example": "14916"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.",
        "example": 50
      },
      {
        "name": "offset",
        "schema": "string",
        "description": "Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n'Note: You can only pass in an offset that was returned to you via a previously paginated request.'",
        "example": "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9"
      },
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "color",
          "description",
          "html_description",
          "name",
          "offset",
          "owner",
          "path",
          "public",
          "requested_dates",
          "requested_dates.description",
          "requested_dates.name",
          "requested_roles",
          "requested_roles.name",
          "team",
          "team.name",
          "uri"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/teams/{team_gid}/project_templates",
    "method": "getAllTemplateRecords",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Project templates",
    "typeScriptTag": "projectTemplates",
    "description": "Get a team's project templates",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.",
        "example": 50
      },
      {
        "name": "offset",
        "schema": "string",
        "description": "Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n'Note: You can only pass in an offset that was returned to you via a previously paginated request.'",
        "example": "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9"
      },
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "color",
          "description",
          "html_description",
          "name",
          "offset",
          "owner",
          "path",
          "public",
          "requested_dates",
          "requested_dates.description",
          "requested_dates.name",
          "requested_roles",
          "requested_roles.name",
          "team",
          "team.name",
          "uri"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/project_templates/{project_template_gid}/instantiateProject",
    "method": "instantiateProjectJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Project templates",
    "typeScriptTag": "projectTemplates",
    "description": "Instantiate a project from a project template",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "new_project",
          "new_project.name",
          "new_project_template",
          "new_project_template.name",
          "new_task",
          "new_task.created_by",
          "new_task.name",
          "new_task.resource_subtype",
          "new_task_template",
          "new_task_template.name",
          "resource_subtype",
          "status"
        ]
      },
      {
        "name": "data",
        "schema": "object",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/projects",
    "method": "listMultiple",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get multiple projects",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.",
        "example": 50
      },
      {
        "name": "offset",
        "schema": "string",
        "description": "Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n'Note: You can only pass in an offset that was returned to you via a previously paginated request.'",
        "example": "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9"
      },
      {
        "name": "workspace",
        "schema": "string",
        "description": "The workspace or organization to filter projects on.",
        "example": "1331"
      },
      {
        "name": "team",
        "schema": "string",
        "description": "The team to filter projects on.",
        "example": "14916"
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": "Only return projects whose `archived` field takes on the value of this parameter.",
        "example": false
      },
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "archived",
          "color",
          "completed",
          "completed_at",
          "completed_by",
          "completed_by.name",
          "created_at",
          "created_from_template",
          "created_from_template.name",
          "current_status",
          "current_status.author",
          "current_status.author.name",
          "current_status.color",
          "current_status.created_at",
          "current_status.created_by",
          "current_status.created_by.name",
          "current_status.html_text",
          "current_status.modified_at",
          "current_status.text",
          "current_status.title",
          "current_status_update",
          "current_status_update.resource_subtype",
          "current_status_update.title",
          "custom_field_settings",
          "custom_field_settings.custom_field",
          "custom_field_settings.custom_field.asana_created_field",
          "custom_field_settings.custom_field.created_by",
          "custom_field_settings.custom_field.created_by.name",
          "custom_field_settings.custom_field.currency_code",
          "custom_field_settings.custom_field.custom_label",
          "custom_field_settings.custom_field.custom_label_position",
          "custom_field_settings.custom_field.date_value",
          "custom_field_settings.custom_field.date_value.date",
          "custom_field_settings.custom_field.date_value.date_time",
          "custom_field_settings.custom_field.description",
          "custom_field_settings.custom_field.display_value",
          "custom_field_settings.custom_field.enabled",
          "custom_field_settings.custom_field.enum_options",
          "custom_field_settings.custom_field.enum_options.color",
          "custom_field_settings.custom_field.enum_options.enabled",
          "custom_field_settings.custom_field.enum_options.name",
          "custom_field_settings.custom_field.enum_value",
          "custom_field_settings.custom_field.enum_value.color",
          "custom_field_settings.custom_field.enum_value.enabled",
          "custom_field_settings.custom_field.enum_value.name",
          "custom_field_settings.custom_field.format",
          "custom_field_settings.custom_field.has_notifications_enabled",
          "custom_field_settings.custom_field.id_prefix",
          "custom_field_settings.custom_field.is_formula_field",
          "custom_field_settings.custom_field.is_global_to_workspace",
          "custom_field_settings.custom_field.is_value_read_only",
          "custom_field_settings.custom_field.multi_enum_values",
          "custom_field_settings.custom_field.multi_enum_values.color",
          "custom_field_settings.custom_field.multi_enum_values.enabled",
          "custom_field_settings.custom_field.multi_enum_values.name",
          "custom_field_settings.custom_field.name",
          "custom_field_settings.custom_field.number_value",
          "custom_field_settings.custom_field.people_value",
          "custom_field_settings.custom_field.people_value.name",
          "custom_field_settings.custom_field.precision",
          "custom_field_settings.custom_field.representation_type",
          "custom_field_settings.custom_field.resource_subtype",
          "custom_field_settings.custom_field.text_value",
          "custom_field_settings.custom_field.type",
          "custom_field_settings.is_important",
          "custom_field_settings.parent",
          "custom_field_settings.parent.name",
          "custom_field_settings.project",
          "custom_field_settings.project.name",
          "custom_fields",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "default_access_level",
          "default_view",
          "due_date",
          "due_on",
          "followers",
          "followers.name",
          "html_notes",
          "icon",
          "members",
          "members.name",
          "minimum_access_level_for_customization",
          "minimum_access_level_for_sharing",
          "modified_at",
          "name",
          "notes",
          "offset",
          "owner",
          "path",
          "permalink_url",
          "privacy_setting",
          "project_brief",
          "public",
          "start_on",
          "team",
          "team.name",
          "uri",
          "workspace",
          "workspace.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/projects",
    "method": "createNewProjectRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Create a project",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "archived",
          "color",
          "completed",
          "completed_at",
          "completed_by",
          "completed_by.name",
          "created_at",
          "created_from_template",
          "created_from_template.name",
          "current_status",
          "current_status.author",
          "current_status.author.name",
          "current_status.color",
          "current_status.created_at",
          "current_status.created_by",
          "current_status.created_by.name",
          "current_status.html_text",
          "current_status.modified_at",
          "current_status.text",
          "current_status.title",
          "current_status_update",
          "current_status_update.resource_subtype",
          "current_status_update.title",
          "custom_field_settings",
          "custom_field_settings.custom_field",
          "custom_field_settings.custom_field.asana_created_field",
          "custom_field_settings.custom_field.created_by",
          "custom_field_settings.custom_field.created_by.name",
          "custom_field_settings.custom_field.currency_code",
          "custom_field_settings.custom_field.custom_label",
          "custom_field_settings.custom_field.custom_label_position",
          "custom_field_settings.custom_field.date_value",
          "custom_field_settings.custom_field.date_value.date",
          "custom_field_settings.custom_field.date_value.date_time",
          "custom_field_settings.custom_field.description",
          "custom_field_settings.custom_field.display_value",
          "custom_field_settings.custom_field.enabled",
          "custom_field_settings.custom_field.enum_options",
          "custom_field_settings.custom_field.enum_options.color",
          "custom_field_settings.custom_field.enum_options.enabled",
          "custom_field_settings.custom_field.enum_options.name",
          "custom_field_settings.custom_field.enum_value",
          "custom_field_settings.custom_field.enum_value.color",
          "custom_field_settings.custom_field.enum_value.enabled",
          "custom_field_settings.custom_field.enum_value.name",
          "custom_field_settings.custom_field.format",
          "custom_field_settings.custom_field.has_notifications_enabled",
          "custom_field_settings.custom_field.id_prefix",
          "custom_field_settings.custom_field.is_formula_field",
          "custom_field_settings.custom_field.is_global_to_workspace",
          "custom_field_settings.custom_field.is_value_read_only",
          "custom_field_settings.custom_field.multi_enum_values",
          "custom_field_settings.custom_field.multi_enum_values.color",
          "custom_field_settings.custom_field.multi_enum_values.enabled",
          "custom_field_settings.custom_field.multi_enum_values.name",
          "custom_field_settings.custom_field.name",
          "custom_field_settings.custom_field.number_value",
          "custom_field_settings.custom_field.people_value",
          "custom_field_settings.custom_field.people_value.name",
          "custom_field_settings.custom_field.precision",
          "custom_field_settings.custom_field.representation_type",
          "custom_field_settings.custom_field.resource_subtype",
          "custom_field_settings.custom_field.text_value",
          "custom_field_settings.custom_field.type",
          "custom_field_settings.is_important",
          "custom_field_settings.parent",
          "custom_field_settings.parent.name",
          "custom_field_settings.project",
          "custom_field_settings.project.name",
          "custom_fields",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "default_access_level",
          "default_view",
          "due_date",
          "due_on",
          "followers",
          "followers.name",
          "html_notes",
          "icon",
          "members",
          "members.name",
          "minimum_access_level_for_customization",
          "minimum_access_level_for_sharing",
          "modified_at",
          "name",
          "notes",
          "owner",
          "permalink_url",
          "privacy_setting",
          "project_brief",
          "public",
          "start_on",
          "team",
          "team.name",
          "workspace",
          "workspace.name"
        ]
      },
      {
        "name": "data",
        "schema": "undefined",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/projects/{project_gid}",
    "method": "deleteProjectById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Delete a project",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/projects/{project_gid}",
    "method": "getProjectRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get a project",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "archived",
          "color",
          "completed",
          "completed_at",
          "completed_by",
          "completed_by.name",
          "created_at",
          "created_from_template",
          "created_from_template.name",
          "current_status",
          "current_status.author",
          "current_status.author.name",
          "current_status.color",
          "current_status.created_at",
          "current_status.created_by",
          "current_status.created_by.name",
          "current_status.html_text",
          "current_status.modified_at",
          "current_status.text",
          "current_status.title",
          "current_status_update",
          "current_status_update.resource_subtype",
          "current_status_update.title",
          "custom_field_settings",
          "custom_field_settings.custom_field",
          "custom_field_settings.custom_field.asana_created_field",
          "custom_field_settings.custom_field.created_by",
          "custom_field_settings.custom_field.created_by.name",
          "custom_field_settings.custom_field.currency_code",
          "custom_field_settings.custom_field.custom_label",
          "custom_field_settings.custom_field.custom_label_position",
          "custom_field_settings.custom_field.date_value",
          "custom_field_settings.custom_field.date_value.date",
          "custom_field_settings.custom_field.date_value.date_time",
          "custom_field_settings.custom_field.description",
          "custom_field_settings.custom_field.display_value",
          "custom_field_settings.custom_field.enabled",
          "custom_field_settings.custom_field.enum_options",
          "custom_field_settings.custom_field.enum_options.color",
          "custom_field_settings.custom_field.enum_options.enabled",
          "custom_field_settings.custom_field.enum_options.name",
          "custom_field_settings.custom_field.enum_value",
          "custom_field_settings.custom_field.enum_value.color",
          "custom_field_settings.custom_field.enum_value.enabled",
          "custom_field_settings.custom_field.enum_value.name",
          "custom_field_settings.custom_field.format",
          "custom_field_settings.custom_field.has_notifications_enabled",
          "custom_field_settings.custom_field.id_prefix",
          "custom_field_settings.custom_field.is_formula_field",
          "custom_field_settings.custom_field.is_global_to_workspace",
          "custom_field_settings.custom_field.is_value_read_only",
          "custom_field_settings.custom_field.multi_enum_values",
          "custom_field_settings.custom_field.multi_enum_values.color",
          "custom_field_settings.custom_field.multi_enum_values.enabled",
          "custom_field_settings.custom_field.multi_enum_values.name",
          "custom_field_settings.custom_field.name",
          "custom_field_settings.custom_field.number_value",
          "custom_field_settings.custom_field.people_value",
          "custom_field_settings.custom_field.people_value.name",
          "custom_field_settings.custom_field.precision",
          "custom_field_settings.custom_field.representation_type",
          "custom_field_settings.custom_field.resource_subtype",
          "custom_field_settings.custom_field.text_value",
          "custom_field_settings.custom_field.type",
          "custom_field_settings.is_important",
          "custom_field_settings.parent",
          "custom_field_settings.parent.name",
          "custom_field_settings.project",
          "custom_field_settings.project.name",
          "custom_fields",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "default_access_level",
          "default_view",
          "due_date",
          "due_on",
          "followers",
          "followers.name",
          "html_notes",
          "icon",
          "members",
          "members.name",
          "minimum_access_level_for_customization",
          "minimum_access_level_for_sharing",
          "modified_at",
          "name",
          "notes",
          "owner",
          "permalink_url",
          "privacy_setting",
          "project_brief",
          "public",
          "start_on",
          "team",
          "team.name",
          "workspace",
          "workspace.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/projects/{project_gid}",
    "method": "updateProjectRecord",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Update a project",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "archived",
          "color",
          "completed",
          "completed_at",
          "completed_by",
          "completed_by.name",
          "created_at",
          "created_from_template",
          "created_from_template.name",
          "current_status",
          "current_status.author",
          "current_status.author.name",
          "current_status.color",
          "current_status.created_at",
          "current_status.created_by",
          "current_status.created_by.name",
          "current_status.html_text",
          "current_status.modified_at",
          "current_status.text",
          "current_status.title",
          "current_status_update",
          "current_status_update.resource_subtype",
          "current_status_update.title",
          "custom_field_settings",
          "custom_field_settings.custom_field",
          "custom_field_settings.custom_field.asana_created_field",
          "custom_field_settings.custom_field.created_by",
          "custom_field_settings.custom_field.created_by.name",
          "custom_field_settings.custom_field.currency_code",
          "custom_field_settings.custom_field.custom_label",
          "custom_field_settings.custom_field.custom_label_position",
          "custom_field_settings.custom_field.date_value",
          "custom_field_settings.custom_field.date_value.date",
          "custom_field_settings.custom_field.date_value.date_time",
          "custom_field_settings.custom_field.description",
          "custom_field_settings.custom_field.display_value",
          "custom_field_settings.custom_field.enabled",
          "custom_field_settings.custom_field.enum_options",
          "custom_field_settings.custom_field.enum_options.color",
          "custom_field_settings.custom_field.enum_options.enabled",
          "custom_field_settings.custom_field.enum_options.name",
          "custom_field_settings.custom_field.enum_value",
          "custom_field_settings.custom_field.enum_value.color",
          "custom_field_settings.custom_field.enum_value.enabled",
          "custom_field_settings.custom_field.enum_value.name",
          "custom_field_settings.custom_field.format",
          "custom_field_settings.custom_field.has_notifications_enabled",
          "custom_field_settings.custom_field.id_prefix",
          "custom_field_settings.custom_field.is_formula_field",
          "custom_field_settings.custom_field.is_global_to_workspace",
          "custom_field_settings.custom_field.is_value_read_only",
          "custom_field_settings.custom_field.multi_enum_values",
          "custom_field_settings.custom_field.multi_enum_values.color",
          "custom_field_settings.custom_field.multi_enum_values.enabled",
          "custom_field_settings.custom_field.multi_enum_values.name",
          "custom_field_settings.custom_field.name",
          "custom_field_settings.custom_field.number_value",
          "custom_field_settings.custom_field.people_value",
          "custom_field_settings.custom_field.people_value.name",
          "custom_field_settings.custom_field.precision",
          "custom_field_settings.custom_field.representation_type",
          "custom_field_settings.custom_field.resource_subtype",
          "custom_field_settings.custom_field.text_value",
          "custom_field_settings.custom_field.type",
          "custom_field_settings.is_important",
          "custom_field_settings.parent",
          "custom_field_settings.parent.name",
          "custom_field_settings.project",
          "custom_field_settings.project.name",
          "custom_fields",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "default_access_level",
          "default_view",
          "due_date",
          "due_on",
          "followers",
          "followers.name",
          "html_notes",
          "icon",
          "members",
          "members.name",
          "minimum_access_level_for_customization",
          "minimum_access_level_for_sharing",
          "modified_at",
          "name",
          "notes",
          "owner",
          "permalink_url",
          "privacy_setting",
          "project_brief",
          "public",
          "start_on",
          "team",
          "team.name",
          "workspace",
          "workspace.name"
        ]
      },
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/projects/{project_gid}/duplicate",
    "method": "duplicateProjectJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Duplicate a project",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "new_project",
          "new_project.name",
          "new_project_template",
          "new_project_template.name",
          "new_task",
          "new_task.created_by",
          "new_task.name",
          "new_task.resource_subtype",
          "new_task_template",
          "new_task_template.name",
          "resource_subtype",
          "status"
        ]
      },
      {
        "name": "data",
        "schema": "object",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/tasks/{task_gid}/projects",
    "method": "taskProjectsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get projects a task is in",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "archived",
          "color",
          "completed",
          "completed_at",
          "completed_by",
          "completed_by.name",
          "created_at",
          "created_from_template",
          "created_from_template.name",
          "current_status",
          "current_status.author",
          "current_status.author.name",
          "current_status.color",
          "current_status.created_at",
          "current_status.created_by",
          "current_status.created_by.name",
          "current_status.html_text",
          "current_status.modified_at",
          "current_status.text",
          "current_status.title",
          "current_status_update",
          "current_status_update.resource_subtype",
          "current_status_update.title",
          "custom_field_settings",
          "custom_field_settings.custom_field",
          "custom_field_settings.custom_field.asana_created_field",
          "custom_field_settings.custom_field.created_by",
          "custom_field_settings.custom_field.created_by.name",
          "custom_field_settings.custom_field.currency_code",
          "custom_field_settings.custom_field.custom_label",
          "custom_field_settings.custom_field.custom_label_position",
          "custom_field_settings.custom_field.date_value",
          "custom_field_settings.custom_field.date_value.date",
          "custom_field_settings.custom_field.date_value.date_time",
          "custom_field_settings.custom_field.description",
          "custom_field_settings.custom_field.display_value",
          "custom_field_settings.custom_field.enabled",
          "custom_field_settings.custom_field.enum_options",
          "custom_field_settings.custom_field.enum_options.color",
          "custom_field_settings.custom_field.enum_options.enabled",
          "custom_field_settings.custom_field.enum_options.name",
          "custom_field_settings.custom_field.enum_value",
          "custom_field_settings.custom_field.enum_value.color",
          "custom_field_settings.custom_field.enum_value.enabled",
          "custom_field_settings.custom_field.enum_value.name",
          "custom_field_settings.custom_field.format",
          "custom_field_settings.custom_field.has_notifications_enabled",
          "custom_field_settings.custom_field.id_prefix",
          "custom_field_settings.custom_field.is_formula_field",
          "custom_field_settings.custom_field.is_global_to_workspace",
          "custom_field_settings.custom_field.is_value_read_only",
          "custom_field_settings.custom_field.multi_enum_values",
          "custom_field_settings.custom_field.multi_enum_values.color",
          "custom_field_settings.custom_field.multi_enum_values.enabled",
          "custom_field_settings.custom_field.multi_enum_values.name",
          "custom_field_settings.custom_field.name",
          "custom_field_settings.custom_field.number_value",
          "custom_field_settings.custom_field.people_value",
          "custom_field_settings.custom_field.people_value.name",
          "custom_field_settings.custom_field.precision",
          "custom_field_settings.custom_field.representation_type",
          "custom_field_settings.custom_field.resource_subtype",
          "custom_field_settings.custom_field.text_value",
          "custom_field_settings.custom_field.type",
          "custom_field_settings.is_important",
          "custom_field_settings.parent",
          "custom_field_settings.parent.name",
          "custom_field_settings.project",
          "custom_field_settings.project.name",
          "custom_fields",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "default_access_level",
          "default_view",
          "due_date",
          "due_on",
          "followers",
          "followers.name",
          "html_notes",
          "icon",
          "members",
          "members.name",
          "minimum_access_level_for_customization",
          "minimum_access_level_for_sharing",
          "modified_at",
          "name",
          "notes",
          "offset",
          "owner",
          "path",
          "permalink_url",
          "privacy_setting",
          "project_brief",
          "public",
          "start_on",
          "team",
          "team.name",
          "uri",
          "workspace",
          "workspace.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/teams/{team_gid}/projects",
    "method": "getTeamProjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get a team's projects",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.",
        "example": 50
      },
      {
        "name": "offset",
        "schema": "string",
        "description": "Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n'Note: You can only pass in an offset that was returned to you via a previously paginated request.'",
        "example": "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9"
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": "Only return projects whose `archived` field takes on the value of this parameter.",
        "example": false
      },
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "archived",
          "color",
          "completed",
          "completed_at",
          "completed_by",
          "completed_by.name",
          "created_at",
          "created_from_template",
          "created_from_template.name",
          "current_status",
          "current_status.author",
          "current_status.author.name",
          "current_status.color",
          "current_status.created_at",
          "current_status.created_by",
          "current_status.created_by.name",
          "current_status.html_text",
          "current_status.modified_at",
          "current_status.text",
          "current_status.title",
          "current_status_update",
          "current_status_update.resource_subtype",
          "current_status_update.title",
          "custom_field_settings",
          "custom_field_settings.custom_field",
          "custom_field_settings.custom_field.asana_created_field",
          "custom_field_settings.custom_field.created_by",
          "custom_field_settings.custom_field.created_by.name",
          "custom_field_settings.custom_field.currency_code",
          "custom_field_settings.custom_field.custom_label",
          "custom_field_settings.custom_field.custom_label_position",
          "custom_field_settings.custom_field.date_value",
          "custom_field_settings.custom_field.date_value.date",
          "custom_field_settings.custom_field.date_value.date_time",
          "custom_field_settings.custom_field.description",
          "custom_field_settings.custom_field.display_value",
          "custom_field_settings.custom_field.enabled",
          "custom_field_settings.custom_field.enum_options",
          "custom_field_settings.custom_field.enum_options.color",
          "custom_field_settings.custom_field.enum_options.enabled",
          "custom_field_settings.custom_field.enum_options.name",
          "custom_field_settings.custom_field.enum_value",
          "custom_field_settings.custom_field.enum_value.color",
          "custom_field_settings.custom_field.enum_value.enabled",
          "custom_field_settings.custom_field.enum_value.name",
          "custom_field_settings.custom_field.format",
          "custom_field_settings.custom_field.has_notifications_enabled",
          "custom_field_settings.custom_field.id_prefix",
          "custom_field_settings.custom_field.is_formula_field",
          "custom_field_settings.custom_field.is_global_to_workspace",
          "custom_field_settings.custom_field.is_value_read_only",
          "custom_field_settings.custom_field.multi_enum_values",
          "custom_field_settings.custom_field.multi_enum_values.color",
          "custom_field_settings.custom_field.multi_enum_values.enabled",
          "custom_field_settings.custom_field.multi_enum_values.name",
          "custom_field_settings.custom_field.name",
          "custom_field_settings.custom_field.number_value",
          "custom_field_settings.custom_field.people_value",
          "custom_field_settings.custom_field.people_value.name",
          "custom_field_settings.custom_field.precision",
          "custom_field_settings.custom_field.representation_type",
          "custom_field_settings.custom_field.resource_subtype",
          "custom_field_settings.custom_field.text_value",
          "custom_field_settings.custom_field.type",
          "custom_field_settings.is_important",
          "custom_field_settings.parent",
          "custom_field_settings.parent.name",
          "custom_field_settings.project",
          "custom_field_settings.project.name",
          "custom_fields",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "default_access_level",
          "default_view",
          "due_date",
          "due_on",
          "followers",
          "followers.name",
          "html_notes",
          "icon",
          "members",
          "members.name",
          "minimum_access_level_for_customization",
          "minimum_access_level_for_sharing",
          "modified_at",
          "name",
          "notes",
          "offset",
          "owner",
          "path",
          "permalink_url",
          "privacy_setting",
          "project_brief",
          "public",
          "start_on",
          "team",
          "team.name",
          "uri",
          "workspace",
          "workspace.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/teams/{team_gid}/projects",
    "method": "createProjectForTeam",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Create a project in a team",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "archived",
          "color",
          "completed",
          "completed_at",
          "completed_by",
          "completed_by.name",
          "created_at",
          "created_from_template",
          "created_from_template.name",
          "current_status",
          "current_status.author",
          "current_status.author.name",
          "current_status.color",
          "current_status.created_at",
          "current_status.created_by",
          "current_status.created_by.name",
          "current_status.html_text",
          "current_status.modified_at",
          "current_status.text",
          "current_status.title",
          "current_status_update",
          "current_status_update.resource_subtype",
          "current_status_update.title",
          "custom_field_settings",
          "custom_field_settings.custom_field",
          "custom_field_settings.custom_field.asana_created_field",
          "custom_field_settings.custom_field.created_by",
          "custom_field_settings.custom_field.created_by.name",
          "custom_field_settings.custom_field.currency_code",
          "custom_field_settings.custom_field.custom_label",
          "custom_field_settings.custom_field.custom_label_position",
          "custom_field_settings.custom_field.date_value",
          "custom_field_settings.custom_field.date_value.date",
          "custom_field_settings.custom_field.date_value.date_time",
          "custom_field_settings.custom_field.description",
          "custom_field_settings.custom_field.display_value",
          "custom_field_settings.custom_field.enabled",
          "custom_field_settings.custom_field.enum_options",
          "custom_field_settings.custom_field.enum_options.color",
          "custom_field_settings.custom_field.enum_options.enabled",
          "custom_field_settings.custom_field.enum_options.name",
          "custom_field_settings.custom_field.enum_value",
          "custom_field_settings.custom_field.enum_value.color",
          "custom_field_settings.custom_field.enum_value.enabled",
          "custom_field_settings.custom_field.enum_value.name",
          "custom_field_settings.custom_field.format",
          "custom_field_settings.custom_field.has_notifications_enabled",
          "custom_field_settings.custom_field.id_prefix",
          "custom_field_settings.custom_field.is_formula_field",
          "custom_field_settings.custom_field.is_global_to_workspace",
          "custom_field_settings.custom_field.is_value_read_only",
          "custom_field_settings.custom_field.multi_enum_values",
          "custom_field_settings.custom_field.multi_enum_values.color",
          "custom_field_settings.custom_field.multi_enum_values.enabled",
          "custom_field_settings.custom_field.multi_enum_values.name",
          "custom_field_settings.custom_field.name",
          "custom_field_settings.custom_field.number_value",
          "custom_field_settings.custom_field.people_value",
          "custom_field_settings.custom_field.people_value.name",
          "custom_field_settings.custom_field.precision",
          "custom_field_settings.custom_field.representation_type",
          "custom_field_settings.custom_field.resource_subtype",
          "custom_field_settings.custom_field.text_value",
          "custom_field_settings.custom_field.type",
          "custom_field_settings.is_important",
          "custom_field_settings.parent",
          "custom_field_settings.parent.name",
          "custom_field_settings.project",
          "custom_field_settings.project.name",
          "custom_fields",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "default_access_level",
          "default_view",
          "due_date",
          "due_on",
          "followers",
          "followers.name",
          "html_notes",
          "icon",
          "members",
          "members.name",
          "minimum_access_level_for_customization",
          "minimum_access_level_for_sharing",
          "modified_at",
          "name",
          "notes",
          "owner",
          "permalink_url",
          "privacy_setting",
          "project_brief",
          "public",
          "start_on",
          "team",
          "team.name",
          "workspace",
          "workspace.name"
        ]
      },
      {
        "name": "data",
        "schema": "undefined",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace_gid}/projects",
    "method": "getAllInWorkspace",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get all projects in a workspace",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.",
        "example": 50
      },
      {
        "name": "offset",
        "schema": "string",
        "description": "Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n'Note: You can only pass in an offset that was returned to you via a previously paginated request.'",
        "example": "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9"
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": "Only return projects whose `archived` field takes on the value of this parameter.",
        "example": false
      },
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "archived",
          "color",
          "completed",
          "completed_at",
          "completed_by",
          "completed_by.name",
          "created_at",
          "created_from_template",
          "created_from_template.name",
          "current_status",
          "current_status.author",
          "current_status.author.name",
          "current_status.color",
          "current_status.created_at",
          "current_status.created_by",
          "current_status.created_by.name",
          "current_status.html_text",
          "current_status.modified_at",
          "current_status.text",
          "current_status.title",
          "current_status_update",
          "current_status_update.resource_subtype",
          "current_status_update.title",
          "custom_field_settings",
          "custom_field_settings.custom_field",
          "custom_field_settings.custom_field.asana_created_field",
          "custom_field_settings.custom_field.created_by",
          "custom_field_settings.custom_field.created_by.name",
          "custom_field_settings.custom_field.currency_code",
          "custom_field_settings.custom_field.custom_label",
          "custom_field_settings.custom_field.custom_label_position",
          "custom_field_settings.custom_field.date_value",
          "custom_field_settings.custom_field.date_value.date",
          "custom_field_settings.custom_field.date_value.date_time",
          "custom_field_settings.custom_field.description",
          "custom_field_settings.custom_field.display_value",
          "custom_field_settings.custom_field.enabled",
          "custom_field_settings.custom_field.enum_options",
          "custom_field_settings.custom_field.enum_options.color",
          "custom_field_settings.custom_field.enum_options.enabled",
          "custom_field_settings.custom_field.enum_options.name",
          "custom_field_settings.custom_field.enum_value",
          "custom_field_settings.custom_field.enum_value.color",
          "custom_field_settings.custom_field.enum_value.enabled",
          "custom_field_settings.custom_field.enum_value.name",
          "custom_field_settings.custom_field.format",
          "custom_field_settings.custom_field.has_notifications_enabled",
          "custom_field_settings.custom_field.id_prefix",
          "custom_field_settings.custom_field.is_formula_field",
          "custom_field_settings.custom_field.is_global_to_workspace",
          "custom_field_settings.custom_field.is_value_read_only",
          "custom_field_settings.custom_field.multi_enum_values",
          "custom_field_settings.custom_field.multi_enum_values.color",
          "custom_field_settings.custom_field.multi_enum_values.enabled",
          "custom_field_settings.custom_field.multi_enum_values.name",
          "custom_field_settings.custom_field.name",
          "custom_field_settings.custom_field.number_value",
          "custom_field_settings.custom_field.people_value",
          "custom_field_settings.custom_field.people_value.name",
          "custom_field_settings.custom_field.precision",
          "custom_field_settings.custom_field.representation_type",
          "custom_field_settings.custom_field.resource_subtype",
          "custom_field_settings.custom_field.text_value",
          "custom_field_settings.custom_field.type",
          "custom_field_settings.is_important",
          "custom_field_settings.parent",
          "custom_field_settings.parent.name",
          "custom_field_settings.project",
          "custom_field_settings.project.name",
          "custom_fields",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "default_access_level",
          "default_view",
          "due_date",
          "due_on",
          "followers",
          "followers.name",
          "html_notes",
          "icon",
          "members",
          "members.name",
          "minimum_access_level_for_customization",
          "minimum_access_level_for_sharing",
          "modified_at",
          "name",
          "notes",
          "offset",
          "owner",
          "path",
          "permalink_url",
          "privacy_setting",
          "project_brief",
          "public",
          "start_on",
          "team",
          "team.name",
          "uri",
          "workspace",
          "workspace.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace_gid}/projects",
    "method": "createInWorkspace",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Create a project in a workspace",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "archived",
          "color",
          "completed",
          "completed_at",
          "completed_by",
          "completed_by.name",
          "created_at",
          "created_from_template",
          "created_from_template.name",
          "current_status",
          "current_status.author",
          "current_status.author.name",
          "current_status.color",
          "current_status.created_at",
          "current_status.created_by",
          "current_status.created_by.name",
          "current_status.html_text",
          "current_status.modified_at",
          "current_status.text",
          "current_status.title",
          "current_status_update",
          "current_status_update.resource_subtype",
          "current_status_update.title",
          "custom_field_settings",
          "custom_field_settings.custom_field",
          "custom_field_settings.custom_field.asana_created_field",
          "custom_field_settings.custom_field.created_by",
          "custom_field_settings.custom_field.created_by.name",
          "custom_field_settings.custom_field.currency_code",
          "custom_field_settings.custom_field.custom_label",
          "custom_field_settings.custom_field.custom_label_position",
          "custom_field_settings.custom_field.date_value",
          "custom_field_settings.custom_field.date_value.date",
          "custom_field_settings.custom_field.date_value.date_time",
          "custom_field_settings.custom_field.description",
          "custom_field_settings.custom_field.display_value",
          "custom_field_settings.custom_field.enabled",
          "custom_field_settings.custom_field.enum_options",
          "custom_field_settings.custom_field.enum_options.color",
          "custom_field_settings.custom_field.enum_options.enabled",
          "custom_field_settings.custom_field.enum_options.name",
          "custom_field_settings.custom_field.enum_value",
          "custom_field_settings.custom_field.enum_value.color",
          "custom_field_settings.custom_field.enum_value.enabled",
          "custom_field_settings.custom_field.enum_value.name",
          "custom_field_settings.custom_field.format",
          "custom_field_settings.custom_field.has_notifications_enabled",
          "custom_field_settings.custom_field.id_prefix",
          "custom_field_settings.custom_field.is_formula_field",
          "custom_field_settings.custom_field.is_global_to_workspace",
          "custom_field_settings.custom_field.is_value_read_only",
          "custom_field_settings.custom_field.multi_enum_values",
          "custom_field_settings.custom_field.multi_enum_values.color",
          "custom_field_settings.custom_field.multi_enum_values.enabled",
          "custom_field_settings.custom_field.multi_enum_values.name",
          "custom_field_settings.custom_field.name",
          "custom_field_settings.custom_field.number_value",
          "custom_field_settings.custom_field.people_value",
          "custom_field_settings.custom_field.people_value.name",
          "custom_field_settings.custom_field.precision",
          "custom_field_settings.custom_field.representation_type",
          "custom_field_settings.custom_field.resource_subtype",
          "custom_field_settings.custom_field.text_value",
          "custom_field_settings.custom_field.type",
          "custom_field_settings.is_important",
          "custom_field_settings.parent",
          "custom_field_settings.parent.name",
          "custom_field_settings.project",
          "custom_field_settings.project.name",
          "custom_fields",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "default_access_level",
          "default_view",
          "due_date",
          "due_on",
          "followers",
          "followers.name",
          "html_notes",
          "icon",
          "members",
          "members.name",
          "minimum_access_level_for_customization",
          "minimum_access_level_for_sharing",
          "modified_at",
          "name",
          "notes",
          "owner",
          "permalink_url",
          "privacy_setting",
          "project_brief",
          "public",
          "start_on",
          "team",
          "team.name",
          "workspace",
          "workspace.name"
        ]
      },
      {
        "name": "data",
        "schema": "undefined",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/projects/{project_gid}/addCustomFieldSetting",
    "method": "addCustomFieldSetting",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Add a custom field to a project",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "custom_field",
          "custom_field.asana_created_field",
          "custom_field.created_by",
          "custom_field.created_by.name",
          "custom_field.currency_code",
          "custom_field.custom_label",
          "custom_field.custom_label_position",
          "custom_field.date_value",
          "custom_field.date_value.date",
          "custom_field.date_value.date_time",
          "custom_field.description",
          "custom_field.display_value",
          "custom_field.enabled",
          "custom_field.enum_options",
          "custom_field.enum_options.color",
          "custom_field.enum_options.enabled",
          "custom_field.enum_options.name",
          "custom_field.enum_value",
          "custom_field.enum_value.color",
          "custom_field.enum_value.enabled",
          "custom_field.enum_value.name",
          "custom_field.format",
          "custom_field.has_notifications_enabled",
          "custom_field.id_prefix",
          "custom_field.is_formula_field",
          "custom_field.is_global_to_workspace",
          "custom_field.is_value_read_only",
          "custom_field.multi_enum_values",
          "custom_field.multi_enum_values.color",
          "custom_field.multi_enum_values.enabled",
          "custom_field.multi_enum_values.name",
          "custom_field.name",
          "custom_field.number_value",
          "custom_field.people_value",
          "custom_field.people_value.name",
          "custom_field.precision",
          "custom_field.representation_type",
          "custom_field.resource_subtype",
          "custom_field.text_value",
          "custom_field.type",
          "is_important",
          "parent",
          "parent.name",
          "project",
          "project.name"
        ]
      },
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/projects/{project_gid}/removeCustomFieldSetting",
    "method": "removeCustomField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Remove a custom field from a project",
    "parameters": [
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/projects/{project_gid}/task_counts",
    "method": "getTaskCounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get task count of a project",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "num_completed_milestones",
          "num_completed_tasks",
          "num_incomplete_milestones",
          "num_incomplete_tasks",
          "num_milestones",
          "num_tasks"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/projects/{project_gid}/addMembers",
    "method": "addMembersToProject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Add users to a project",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "archived",
          "color",
          "completed",
          "completed_at",
          "completed_by",
          "completed_by.name",
          "created_at",
          "created_from_template",
          "created_from_template.name",
          "current_status",
          "current_status.author",
          "current_status.author.name",
          "current_status.color",
          "current_status.created_at",
          "current_status.created_by",
          "current_status.created_by.name",
          "current_status.html_text",
          "current_status.modified_at",
          "current_status.text",
          "current_status.title",
          "current_status_update",
          "current_status_update.resource_subtype",
          "current_status_update.title",
          "custom_field_settings",
          "custom_field_settings.custom_field",
          "custom_field_settings.custom_field.asana_created_field",
          "custom_field_settings.custom_field.created_by",
          "custom_field_settings.custom_field.created_by.name",
          "custom_field_settings.custom_field.currency_code",
          "custom_field_settings.custom_field.custom_label",
          "custom_field_settings.custom_field.custom_label_position",
          "custom_field_settings.custom_field.date_value",
          "custom_field_settings.custom_field.date_value.date",
          "custom_field_settings.custom_field.date_value.date_time",
          "custom_field_settings.custom_field.description",
          "custom_field_settings.custom_field.display_value",
          "custom_field_settings.custom_field.enabled",
          "custom_field_settings.custom_field.enum_options",
          "custom_field_settings.custom_field.enum_options.color",
          "custom_field_settings.custom_field.enum_options.enabled",
          "custom_field_settings.custom_field.enum_options.name",
          "custom_field_settings.custom_field.enum_value",
          "custom_field_settings.custom_field.enum_value.color",
          "custom_field_settings.custom_field.enum_value.enabled",
          "custom_field_settings.custom_field.enum_value.name",
          "custom_field_settings.custom_field.format",
          "custom_field_settings.custom_field.has_notifications_enabled",
          "custom_field_settings.custom_field.id_prefix",
          "custom_field_settings.custom_field.is_formula_field",
          "custom_field_settings.custom_field.is_global_to_workspace",
          "custom_field_settings.custom_field.is_value_read_only",
          "custom_field_settings.custom_field.multi_enum_values",
          "custom_field_settings.custom_field.multi_enum_values.color",
          "custom_field_settings.custom_field.multi_enum_values.enabled",
          "custom_field_settings.custom_field.multi_enum_values.name",
          "custom_field_settings.custom_field.name",
          "custom_field_settings.custom_field.number_value",
          "custom_field_settings.custom_field.people_value",
          "custom_field_settings.custom_field.people_value.name",
          "custom_field_settings.custom_field.precision",
          "custom_field_settings.custom_field.representation_type",
          "custom_field_settings.custom_field.resource_subtype",
          "custom_field_settings.custom_field.text_value",
          "custom_field_settings.custom_field.type",
          "custom_field_settings.is_important",
          "custom_field_settings.parent",
          "custom_field_settings.parent.name",
          "custom_field_settings.project",
          "custom_field_settings.project.name",
          "custom_fields",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "default_access_level",
          "default_view",
          "due_date",
          "due_on",
          "followers",
          "followers.name",
          "html_notes",
          "icon",
          "members",
          "members.name",
          "minimum_access_level_for_customization",
          "minimum_access_level_for_sharing",
          "modified_at",
          "name",
          "notes",
          "owner",
          "permalink_url",
          "privacy_setting",
          "project_brief",
          "public",
          "start_on",
          "team",
          "team.name",
          "workspace",
          "workspace.name"
        ]
      },
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/projects/{project_gid}/removeMembers",
    "method": "removeMembersFromProject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Remove users from a project",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "archived",
          "color",
          "completed",
          "completed_at",
          "completed_by",
          "completed_by.name",
          "created_at",
          "created_from_template",
          "created_from_template.name",
          "current_status",
          "current_status.author",
          "current_status.author.name",
          "current_status.color",
          "current_status.created_at",
          "current_status.created_by",
          "current_status.created_by.name",
          "current_status.html_text",
          "current_status.modified_at",
          "current_status.text",
          "current_status.title",
          "current_status_update",
          "current_status_update.resource_subtype",
          "current_status_update.title",
          "custom_field_settings",
          "custom_field_settings.custom_field",
          "custom_field_settings.custom_field.asana_created_field",
          "custom_field_settings.custom_field.created_by",
          "custom_field_settings.custom_field.created_by.name",
          "custom_field_settings.custom_field.currency_code",
          "custom_field_settings.custom_field.custom_label",
          "custom_field_settings.custom_field.custom_label_position",
          "custom_field_settings.custom_field.date_value",
          "custom_field_settings.custom_field.date_value.date",
          "custom_field_settings.custom_field.date_value.date_time",
          "custom_field_settings.custom_field.description",
          "custom_field_settings.custom_field.display_value",
          "custom_field_settings.custom_field.enabled",
          "custom_field_settings.custom_field.enum_options",
          "custom_field_settings.custom_field.enum_options.color",
          "custom_field_settings.custom_field.enum_options.enabled",
          "custom_field_settings.custom_field.enum_options.name",
          "custom_field_settings.custom_field.enum_value",
          "custom_field_settings.custom_field.enum_value.color",
          "custom_field_settings.custom_field.enum_value.enabled",
          "custom_field_settings.custom_field.enum_value.name",
          "custom_field_settings.custom_field.format",
          "custom_field_settings.custom_field.has_notifications_enabled",
          "custom_field_settings.custom_field.id_prefix",
          "custom_field_settings.custom_field.is_formula_field",
          "custom_field_settings.custom_field.is_global_to_workspace",
          "custom_field_settings.custom_field.is_value_read_only",
          "custom_field_settings.custom_field.multi_enum_values",
          "custom_field_settings.custom_field.multi_enum_values.color",
          "custom_field_settings.custom_field.multi_enum_values.enabled",
          "custom_field_settings.custom_field.multi_enum_values.name",
          "custom_field_settings.custom_field.name",
          "custom_field_settings.custom_field.number_value",
          "custom_field_settings.custom_field.people_value",
          "custom_field_settings.custom_field.people_value.name",
          "custom_field_settings.custom_field.precision",
          "custom_field_settings.custom_field.representation_type",
          "custom_field_settings.custom_field.resource_subtype",
          "custom_field_settings.custom_field.text_value",
          "custom_field_settings.custom_field.type",
          "custom_field_settings.is_important",
          "custom_field_settings.parent",
          "custom_field_settings.parent.name",
          "custom_field_settings.project",
          "custom_field_settings.project.name",
          "custom_fields",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "default_access_level",
          "default_view",
          "due_date",
          "due_on",
          "followers",
          "followers.name",
          "html_notes",
          "icon",
          "members",
          "members.name",
          "minimum_access_level_for_customization",
          "minimum_access_level_for_sharing",
          "modified_at",
          "name",
          "notes",
          "owner",
          "permalink_url",
          "privacy_setting",
          "project_brief",
          "public",
          "start_on",
          "team",
          "team.name",
          "workspace",
          "workspace.name"
        ]
      },
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/projects/{project_gid}/addFollowers",
    "method": "addFollowersToProject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Add followers to a project",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "archived",
          "color",
          "completed",
          "completed_at",
          "completed_by",
          "completed_by.name",
          "created_at",
          "created_from_template",
          "created_from_template.name",
          "current_status",
          "current_status.author",
          "current_status.author.name",
          "current_status.color",
          "current_status.created_at",
          "current_status.created_by",
          "current_status.created_by.name",
          "current_status.html_text",
          "current_status.modified_at",
          "current_status.text",
          "current_status.title",
          "current_status_update",
          "current_status_update.resource_subtype",
          "current_status_update.title",
          "custom_field_settings",
          "custom_field_settings.custom_field",
          "custom_field_settings.custom_field.asana_created_field",
          "custom_field_settings.custom_field.created_by",
          "custom_field_settings.custom_field.created_by.name",
          "custom_field_settings.custom_field.currency_code",
          "custom_field_settings.custom_field.custom_label",
          "custom_field_settings.custom_field.custom_label_position",
          "custom_field_settings.custom_field.date_value",
          "custom_field_settings.custom_field.date_value.date",
          "custom_field_settings.custom_field.date_value.date_time",
          "custom_field_settings.custom_field.description",
          "custom_field_settings.custom_field.display_value",
          "custom_field_settings.custom_field.enabled",
          "custom_field_settings.custom_field.enum_options",
          "custom_field_settings.custom_field.enum_options.color",
          "custom_field_settings.custom_field.enum_options.enabled",
          "custom_field_settings.custom_field.enum_options.name",
          "custom_field_settings.custom_field.enum_value",
          "custom_field_settings.custom_field.enum_value.color",
          "custom_field_settings.custom_field.enum_value.enabled",
          "custom_field_settings.custom_field.enum_value.name",
          "custom_field_settings.custom_field.format",
          "custom_field_settings.custom_field.has_notifications_enabled",
          "custom_field_settings.custom_field.id_prefix",
          "custom_field_settings.custom_field.is_formula_field",
          "custom_field_settings.custom_field.is_global_to_workspace",
          "custom_field_settings.custom_field.is_value_read_only",
          "custom_field_settings.custom_field.multi_enum_values",
          "custom_field_settings.custom_field.multi_enum_values.color",
          "custom_field_settings.custom_field.multi_enum_values.enabled",
          "custom_field_settings.custom_field.multi_enum_values.name",
          "custom_field_settings.custom_field.name",
          "custom_field_settings.custom_field.number_value",
          "custom_field_settings.custom_field.people_value",
          "custom_field_settings.custom_field.people_value.name",
          "custom_field_settings.custom_field.precision",
          "custom_field_settings.custom_field.representation_type",
          "custom_field_settings.custom_field.resource_subtype",
          "custom_field_settings.custom_field.text_value",
          "custom_field_settings.custom_field.type",
          "custom_field_settings.is_important",
          "custom_field_settings.parent",
          "custom_field_settings.parent.name",
          "custom_field_settings.project",
          "custom_field_settings.project.name",
          "custom_fields",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "default_access_level",
          "default_view",
          "due_date",
          "due_on",
          "followers",
          "followers.name",
          "html_notes",
          "icon",
          "members",
          "members.name",
          "minimum_access_level_for_customization",
          "minimum_access_level_for_sharing",
          "modified_at",
          "name",
          "notes",
          "owner",
          "permalink_url",
          "privacy_setting",
          "project_brief",
          "public",
          "start_on",
          "team",
          "team.name",
          "workspace",
          "workspace.name"
        ]
      },
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/projects/{project_gid}/removeFollowers",
    "method": "removeProjectFollowers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Remove followers from a project",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "archived",
          "color",
          "completed",
          "completed_at",
          "completed_by",
          "completed_by.name",
          "created_at",
          "created_from_template",
          "created_from_template.name",
          "current_status",
          "current_status.author",
          "current_status.author.name",
          "current_status.color",
          "current_status.created_at",
          "current_status.created_by",
          "current_status.created_by.name",
          "current_status.html_text",
          "current_status.modified_at",
          "current_status.text",
          "current_status.title",
          "current_status_update",
          "current_status_update.resource_subtype",
          "current_status_update.title",
          "custom_field_settings",
          "custom_field_settings.custom_field",
          "custom_field_settings.custom_field.asana_created_field",
          "custom_field_settings.custom_field.created_by",
          "custom_field_settings.custom_field.created_by.name",
          "custom_field_settings.custom_field.currency_code",
          "custom_field_settings.custom_field.custom_label",
          "custom_field_settings.custom_field.custom_label_position",
          "custom_field_settings.custom_field.date_value",
          "custom_field_settings.custom_field.date_value.date",
          "custom_field_settings.custom_field.date_value.date_time",
          "custom_field_settings.custom_field.description",
          "custom_field_settings.custom_field.display_value",
          "custom_field_settings.custom_field.enabled",
          "custom_field_settings.custom_field.enum_options",
          "custom_field_settings.custom_field.enum_options.color",
          "custom_field_settings.custom_field.enum_options.enabled",
          "custom_field_settings.custom_field.enum_options.name",
          "custom_field_settings.custom_field.enum_value",
          "custom_field_settings.custom_field.enum_value.color",
          "custom_field_settings.custom_field.enum_value.enabled",
          "custom_field_settings.custom_field.enum_value.name",
          "custom_field_settings.custom_field.format",
          "custom_field_settings.custom_field.has_notifications_enabled",
          "custom_field_settings.custom_field.id_prefix",
          "custom_field_settings.custom_field.is_formula_field",
          "custom_field_settings.custom_field.is_global_to_workspace",
          "custom_field_settings.custom_field.is_value_read_only",
          "custom_field_settings.custom_field.multi_enum_values",
          "custom_field_settings.custom_field.multi_enum_values.color",
          "custom_field_settings.custom_field.multi_enum_values.enabled",
          "custom_field_settings.custom_field.multi_enum_values.name",
          "custom_field_settings.custom_field.name",
          "custom_field_settings.custom_field.number_value",
          "custom_field_settings.custom_field.people_value",
          "custom_field_settings.custom_field.people_value.name",
          "custom_field_settings.custom_field.precision",
          "custom_field_settings.custom_field.representation_type",
          "custom_field_settings.custom_field.resource_subtype",
          "custom_field_settings.custom_field.text_value",
          "custom_field_settings.custom_field.type",
          "custom_field_settings.is_important",
          "custom_field_settings.parent",
          "custom_field_settings.parent.name",
          "custom_field_settings.project",
          "custom_field_settings.project.name",
          "custom_fields",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "default_access_level",
          "default_view",
          "due_date",
          "due_on",
          "followers",
          "followers.name",
          "html_notes",
          "icon",
          "members",
          "members.name",
          "minimum_access_level_for_customization",
          "minimum_access_level_for_sharing",
          "modified_at",
          "name",
          "notes",
          "owner",
          "permalink_url",
          "privacy_setting",
          "project_brief",
          "public",
          "start_on",
          "team",
          "team.name",
          "workspace",
          "workspace.name"
        ]
      },
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/projects/{project_gid}/saveAsTemplate",
    "method": "createProjectTemplateJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Create a project template from a project",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "new_project",
          "new_project.name",
          "new_project_template",
          "new_project_template.name",
          "new_task",
          "new_task.created_by",
          "new_task.name",
          "new_task.resource_subtype",
          "new_task_template",
          "new_task_template.name",
          "resource_subtype",
          "status"
        ]
      },
      {
        "name": "data",
        "schema": "object",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/rule_triggers/{rule_trigger_gid}/run",
    "method": "triggerRuleRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Rules",
    "typeScriptTag": "rules",
    "description": "Trigger a rule",
    "parameters": [
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "402",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/sections/{section_gid}",
    "method": "deleteSection",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Sections",
    "typeScriptTag": "sections",
    "description": "Delete a section",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/sections/{section_gid}",
    "method": "getRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sections",
    "typeScriptTag": "sections",
    "description": "Get a section",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "created_at",
          "name",
          "project",
          "project.name",
          "projects",
          "projects.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/sections/{section_gid}",
    "method": "updateSectionRecord",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Sections",
    "typeScriptTag": "sections",
    "description": "Update a section",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "created_at",
          "name",
          "project",
          "project.name",
          "projects",
          "projects.name"
        ]
      },
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/projects/{project_gid}/sections",
    "method": "listProjectSections",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sections",
    "typeScriptTag": "sections",
    "description": "Get sections in a project",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.",
        "example": 50
      },
      {
        "name": "offset",
        "schema": "string",
        "description": "Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n'Note: You can only pass in an offset that was returned to you via a previously paginated request.'",
        "example": "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9"
      },
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "created_at",
          "name",
          "offset",
          "path",
          "project",
          "project.name",
          "projects",
          "projects.name",
          "uri"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/projects/{project_gid}/sections",
    "method": "createNewSection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sections",
    "typeScriptTag": "sections",
    "description": "Create a section in a project",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "created_at",
          "name",
          "project",
          "project.name",
          "projects",
          "projects.name"
        ]
      },
      {
        "name": "data",
        "schema": "object",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/sections/{section_gid}/addTask",
    "method": "addTaskToSection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sections",
    "typeScriptTag": "sections",
    "description": "Add task to section",
    "parameters": [
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/projects/{project_gid}/sections/insert",
    "method": "moveOrInsert",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sections",
    "typeScriptTag": "sections",
    "description": "Move or Insert sections",
    "parameters": [
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/status_updates/{status_update_gid}",
    "method": "deleteSpecificStatusUpdate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Status updates",
    "typeScriptTag": "statusUpdates",
    "description": "Delete a status update",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/status_updates/{status_update_gid}",
    "method": "getRecordById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Status updates",
    "typeScriptTag": "statusUpdates",
    "description": "Get a status update",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "author",
          "author.name",
          "created_at",
          "created_by",
          "created_by.name",
          "hearted",
          "hearts",
          "hearts.user",
          "hearts.user.name",
          "html_text",
          "liked",
          "likes",
          "likes.user",
          "likes.user.name",
          "modified_at",
          "num_hearts",
          "num_likes",
          "parent",
          "parent.name",
          "resource_subtype",
          "status_type",
          "text",
          "title"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/status_updates",
    "method": "getCompactRecords",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Status updates",
    "typeScriptTag": "statusUpdates",
    "description": "Get status updates from an object",
    "parameters": [
      {
        "name": "parent",
        "schema": "string",
        "required": true,
        "description": "Globally unique identifier for object to fetch statuses from. Must be a GID for a project, portfolio, or goal.",
        "example": "159874"
      },
      {
        "name": "createdSince",
        "schema": "string",
        "description": "Only return statuses that have been created since the given time.",
        "example": "2012-02-22T02:06:58.158Z"
      },
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "author",
          "author.name",
          "created_at",
          "created_by",
          "created_by.name",
          "hearted",
          "hearts",
          "hearts.user",
          "hearts.user.name",
          "html_text",
          "liked",
          "likes",
          "likes.user",
          "likes.user.name",
          "modified_at",
          "num_hearts",
          "num_likes",
          "offset",
          "parent",
          "parent.name",
          "path",
          "resource_subtype",
          "status_type",
          "text",
          "title",
          "uri"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/status_updates",
    "method": "createNewStatusUpdateRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Status updates",
    "typeScriptTag": "statusUpdates",
    "description": "Create a status update",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "author",
          "author.name",
          "created_at",
          "created_by",
          "created_by.name",
          "hearted",
          "hearts",
          "hearts.user",
          "hearts.user.name",
          "html_text",
          "liked",
          "likes",
          "likes.user",
          "likes.user.name",
          "modified_at",
          "num_hearts",
          "num_likes",
          "parent",
          "parent.name",
          "resource_subtype",
          "status_type",
          "text",
          "title"
        ]
      },
      {
        "name": "data",
        "schema": "undefined",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/stories/{story_gid}",
    "method": "deleteStoryRecord",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Stories",
    "typeScriptTag": "stories",
    "description": "Delete a story",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/stories/{story_gid}",
    "method": "getFullRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stories",
    "typeScriptTag": "stories",
    "description": "Get a story",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "assignee",
          "assignee.name",
          "created_at",
          "created_by",
          "created_by.name",
          "custom_field",
          "custom_field.date_value",
          "custom_field.date_value.date",
          "custom_field.date_value.date_time",
          "custom_field.display_value",
          "custom_field.enabled",
          "custom_field.enum_options",
          "custom_field.enum_options.color",
          "custom_field.enum_options.enabled",
          "custom_field.enum_options.name",
          "custom_field.enum_value",
          "custom_field.enum_value.color",
          "custom_field.enum_value.enabled",
          "custom_field.enum_value.name",
          "custom_field.id_prefix",
          "custom_field.is_formula_field",
          "custom_field.multi_enum_values",
          "custom_field.multi_enum_values.color",
          "custom_field.multi_enum_values.enabled",
          "custom_field.multi_enum_values.name",
          "custom_field.name",
          "custom_field.number_value",
          "custom_field.representation_type",
          "custom_field.resource_subtype",
          "custom_field.text_value",
          "custom_field.type",
          "dependency",
          "dependency.created_by",
          "dependency.name",
          "dependency.resource_subtype",
          "duplicate_of",
          "duplicate_of.created_by",
          "duplicate_of.name",
          "duplicate_of.resource_subtype",
          "duplicated_from",
          "duplicated_from.created_by",
          "duplicated_from.name",
          "duplicated_from.resource_subtype",
          "follower",
          "follower.name",
          "hearted",
          "hearts",
          "hearts.user",
          "hearts.user.name",
          "html_text",
          "is_editable",
          "is_edited",
          "is_pinned",
          "liked",
          "likes",
          "likes.user",
          "likes.user.name",
          "new_approval_status",
          "new_date_value",
          "new_dates",
          "new_dates.due_at",
          "new_dates.due_on",
          "new_dates.start_on",
          "new_enum_value",
          "new_enum_value.color",
          "new_enum_value.enabled",
          "new_enum_value.name",
          "new_multi_enum_values",
          "new_multi_enum_values.color",
          "new_multi_enum_values.enabled",
          "new_multi_enum_values.name",
          "new_name",
          "new_number_value",
          "new_people_value",
          "new_people_value.name",
          "new_resource_subtype",
          "new_section",
          "new_section.name",
          "new_text_value",
          "num_hearts",
          "num_likes",
          "old_approval_status",
          "old_date_value",
          "old_dates",
          "old_dates.due_at",
          "old_dates.due_on",
          "old_dates.start_on",
          "old_enum_value",
          "old_enum_value.color",
          "old_enum_value.enabled",
          "old_enum_value.name",
          "old_multi_enum_values",
          "old_multi_enum_values.color",
          "old_multi_enum_values.enabled",
          "old_multi_enum_values.name",
          "old_name",
          "old_number_value",
          "old_people_value",
          "old_people_value.name",
          "old_resource_subtype",
          "old_section",
          "old_section.name",
          "old_text_value",
          "previews",
          "previews.fallback",
          "previews.footer",
          "previews.header",
          "previews.header_link",
          "previews.html_text",
          "previews.text",
          "previews.title",
          "previews.title_link",
          "project",
          "project.name",
          "resource_subtype",
          "source",
          "sticker_name",
          "story",
          "story.created_at",
          "story.created_by",
          "story.created_by.name",
          "story.resource_subtype",
          "story.text",
          "tag",
          "tag.name",
          "target",
          "target.created_by",
          "target.name",
          "target.resource_subtype",
          "task",
          "task.created_by",
          "task.name",
          "task.resource_subtype",
          "text",
          "type"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/stories/{story_gid}",
    "method": "updateFullRecord",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Stories",
    "typeScriptTag": "stories",
    "description": "Update a story",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "assignee",
          "assignee.name",
          "created_at",
          "created_by",
          "created_by.name",
          "custom_field",
          "custom_field.date_value",
          "custom_field.date_value.date",
          "custom_field.date_value.date_time",
          "custom_field.display_value",
          "custom_field.enabled",
          "custom_field.enum_options",
          "custom_field.enum_options.color",
          "custom_field.enum_options.enabled",
          "custom_field.enum_options.name",
          "custom_field.enum_value",
          "custom_field.enum_value.color",
          "custom_field.enum_value.enabled",
          "custom_field.enum_value.name",
          "custom_field.id_prefix",
          "custom_field.is_formula_field",
          "custom_field.multi_enum_values",
          "custom_field.multi_enum_values.color",
          "custom_field.multi_enum_values.enabled",
          "custom_field.multi_enum_values.name",
          "custom_field.name",
          "custom_field.number_value",
          "custom_field.representation_type",
          "custom_field.resource_subtype",
          "custom_field.text_value",
          "custom_field.type",
          "dependency",
          "dependency.created_by",
          "dependency.name",
          "dependency.resource_subtype",
          "duplicate_of",
          "duplicate_of.created_by",
          "duplicate_of.name",
          "duplicate_of.resource_subtype",
          "duplicated_from",
          "duplicated_from.created_by",
          "duplicated_from.name",
          "duplicated_from.resource_subtype",
          "follower",
          "follower.name",
          "hearted",
          "hearts",
          "hearts.user",
          "hearts.user.name",
          "html_text",
          "is_editable",
          "is_edited",
          "is_pinned",
          "liked",
          "likes",
          "likes.user",
          "likes.user.name",
          "new_approval_status",
          "new_date_value",
          "new_dates",
          "new_dates.due_at",
          "new_dates.due_on",
          "new_dates.start_on",
          "new_enum_value",
          "new_enum_value.color",
          "new_enum_value.enabled",
          "new_enum_value.name",
          "new_multi_enum_values",
          "new_multi_enum_values.color",
          "new_multi_enum_values.enabled",
          "new_multi_enum_values.name",
          "new_name",
          "new_number_value",
          "new_people_value",
          "new_people_value.name",
          "new_resource_subtype",
          "new_section",
          "new_section.name",
          "new_text_value",
          "num_hearts",
          "num_likes",
          "old_approval_status",
          "old_date_value",
          "old_dates",
          "old_dates.due_at",
          "old_dates.due_on",
          "old_dates.start_on",
          "old_enum_value",
          "old_enum_value.color",
          "old_enum_value.enabled",
          "old_enum_value.name",
          "old_multi_enum_values",
          "old_multi_enum_values.color",
          "old_multi_enum_values.enabled",
          "old_multi_enum_values.name",
          "old_name",
          "old_number_value",
          "old_people_value",
          "old_people_value.name",
          "old_resource_subtype",
          "old_section",
          "old_section.name",
          "old_text_value",
          "previews",
          "previews.fallback",
          "previews.footer",
          "previews.header",
          "previews.header_link",
          "previews.html_text",
          "previews.text",
          "previews.title",
          "previews.title_link",
          "project",
          "project.name",
          "resource_subtype",
          "source",
          "sticker_name",
          "story",
          "story.created_at",
          "story.created_by",
          "story.created_by.name",
          "story.resource_subtype",
          "story.text",
          "tag",
          "tag.name",
          "target",
          "target.created_by",
          "target.name",
          "target.resource_subtype",
          "task",
          "task.created_by",
          "task.name",
          "task.resource_subtype",
          "text",
          "type"
        ]
      },
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/tasks/{task_gid}/stories",
    "method": "getTaskStories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stories",
    "typeScriptTag": "stories",
    "description": "Get stories from a task",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.",
        "example": 50
      },
      {
        "name": "offset",
        "schema": "string",
        "description": "Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n'Note: You can only pass in an offset that was returned to you via a previously paginated request.'",
        "example": "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9"
      },
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "assignee",
          "assignee.name",
          "created_at",
          "created_by",
          "created_by.name",
          "custom_field",
          "custom_field.date_value",
          "custom_field.date_value.date",
          "custom_field.date_value.date_time",
          "custom_field.display_value",
          "custom_field.enabled",
          "custom_field.enum_options",
          "custom_field.enum_options.color",
          "custom_field.enum_options.enabled",
          "custom_field.enum_options.name",
          "custom_field.enum_value",
          "custom_field.enum_value.color",
          "custom_field.enum_value.enabled",
          "custom_field.enum_value.name",
          "custom_field.id_prefix",
          "custom_field.is_formula_field",
          "custom_field.multi_enum_values",
          "custom_field.multi_enum_values.color",
          "custom_field.multi_enum_values.enabled",
          "custom_field.multi_enum_values.name",
          "custom_field.name",
          "custom_field.number_value",
          "custom_field.representation_type",
          "custom_field.resource_subtype",
          "custom_field.text_value",
          "custom_field.type",
          "dependency",
          "dependency.created_by",
          "dependency.name",
          "dependency.resource_subtype",
          "duplicate_of",
          "duplicate_of.created_by",
          "duplicate_of.name",
          "duplicate_of.resource_subtype",
          "duplicated_from",
          "duplicated_from.created_by",
          "duplicated_from.name",
          "duplicated_from.resource_subtype",
          "follower",
          "follower.name",
          "hearted",
          "hearts",
          "hearts.user",
          "hearts.user.name",
          "html_text",
          "is_editable",
          "is_edited",
          "is_pinned",
          "liked",
          "likes",
          "likes.user",
          "likes.user.name",
          "new_approval_status",
          "new_date_value",
          "new_dates",
          "new_dates.due_at",
          "new_dates.due_on",
          "new_dates.start_on",
          "new_enum_value",
          "new_enum_value.color",
          "new_enum_value.enabled",
          "new_enum_value.name",
          "new_multi_enum_values",
          "new_multi_enum_values.color",
          "new_multi_enum_values.enabled",
          "new_multi_enum_values.name",
          "new_name",
          "new_number_value",
          "new_people_value",
          "new_people_value.name",
          "new_resource_subtype",
          "new_section",
          "new_section.name",
          "new_text_value",
          "num_hearts",
          "num_likes",
          "offset",
          "old_approval_status",
          "old_date_value",
          "old_dates",
          "old_dates.due_at",
          "old_dates.due_on",
          "old_dates.start_on",
          "old_enum_value",
          "old_enum_value.color",
          "old_enum_value.enabled",
          "old_enum_value.name",
          "old_multi_enum_values",
          "old_multi_enum_values.color",
          "old_multi_enum_values.enabled",
          "old_multi_enum_values.name",
          "old_name",
          "old_number_value",
          "old_people_value",
          "old_people_value.name",
          "old_resource_subtype",
          "old_section",
          "old_section.name",
          "old_text_value",
          "path",
          "previews",
          "previews.fallback",
          "previews.footer",
          "previews.header",
          "previews.header_link",
          "previews.html_text",
          "previews.text",
          "previews.title",
          "previews.title_link",
          "project",
          "project.name",
          "resource_subtype",
          "source",
          "sticker_name",
          "story",
          "story.created_at",
          "story.created_by",
          "story.created_by.name",
          "story.resource_subtype",
          "story.text",
          "tag",
          "tag.name",
          "target",
          "target.created_by",
          "target.name",
          "target.resource_subtype",
          "task",
          "task.created_by",
          "task.name",
          "task.resource_subtype",
          "text",
          "type",
          "uri"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/tasks/{task_gid}/stories",
    "method": "createComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Stories",
    "typeScriptTag": "stories",
    "description": "Create a story on a task",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "assignee",
          "assignee.name",
          "created_at",
          "created_by",
          "created_by.name",
          "custom_field",
          "custom_field.date_value",
          "custom_field.date_value.date",
          "custom_field.date_value.date_time",
          "custom_field.display_value",
          "custom_field.enabled",
          "custom_field.enum_options",
          "custom_field.enum_options.color",
          "custom_field.enum_options.enabled",
          "custom_field.enum_options.name",
          "custom_field.enum_value",
          "custom_field.enum_value.color",
          "custom_field.enum_value.enabled",
          "custom_field.enum_value.name",
          "custom_field.id_prefix",
          "custom_field.is_formula_field",
          "custom_field.multi_enum_values",
          "custom_field.multi_enum_values.color",
          "custom_field.multi_enum_values.enabled",
          "custom_field.multi_enum_values.name",
          "custom_field.name",
          "custom_field.number_value",
          "custom_field.representation_type",
          "custom_field.resource_subtype",
          "custom_field.text_value",
          "custom_field.type",
          "dependency",
          "dependency.created_by",
          "dependency.name",
          "dependency.resource_subtype",
          "duplicate_of",
          "duplicate_of.created_by",
          "duplicate_of.name",
          "duplicate_of.resource_subtype",
          "duplicated_from",
          "duplicated_from.created_by",
          "duplicated_from.name",
          "duplicated_from.resource_subtype",
          "follower",
          "follower.name",
          "hearted",
          "hearts",
          "hearts.user",
          "hearts.user.name",
          "html_text",
          "is_editable",
          "is_edited",
          "is_pinned",
          "liked",
          "likes",
          "likes.user",
          "likes.user.name",
          "new_approval_status",
          "new_date_value",
          "new_dates",
          "new_dates.due_at",
          "new_dates.due_on",
          "new_dates.start_on",
          "new_enum_value",
          "new_enum_value.color",
          "new_enum_value.enabled",
          "new_enum_value.name",
          "new_multi_enum_values",
          "new_multi_enum_values.color",
          "new_multi_enum_values.enabled",
          "new_multi_enum_values.name",
          "new_name",
          "new_number_value",
          "new_people_value",
          "new_people_value.name",
          "new_resource_subtype",
          "new_section",
          "new_section.name",
          "new_text_value",
          "num_hearts",
          "num_likes",
          "old_approval_status",
          "old_date_value",
          "old_dates",
          "old_dates.due_at",
          "old_dates.due_on",
          "old_dates.start_on",
          "old_enum_value",
          "old_enum_value.color",
          "old_enum_value.enabled",
          "old_enum_value.name",
          "old_multi_enum_values",
          "old_multi_enum_values.color",
          "old_multi_enum_values.enabled",
          "old_multi_enum_values.name",
          "old_name",
          "old_number_value",
          "old_people_value",
          "old_people_value.name",
          "old_resource_subtype",
          "old_section",
          "old_section.name",
          "old_text_value",
          "previews",
          "previews.fallback",
          "previews.footer",
          "previews.header",
          "previews.header_link",
          "previews.html_text",
          "previews.text",
          "previews.title",
          "previews.title_link",
          "project",
          "project.name",
          "resource_subtype",
          "source",
          "sticker_name",
          "story",
          "story.created_at",
          "story.created_by",
          "story.created_by.name",
          "story.resource_subtype",
          "story.text",
          "tag",
          "tag.name",
          "target",
          "target.created_by",
          "target.name",
          "target.resource_subtype",
          "task",
          "task.created_by",
          "task.name",
          "task.resource_subtype",
          "text",
          "type"
        ]
      },
      {
        "name": "data",
        "schema": "undefined",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/tags",
    "method": "listFilteredTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Get multiple tags",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.",
        "example": 50
      },
      {
        "name": "offset",
        "schema": "string",
        "description": "Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n'Note: You can only pass in an offset that was returned to you via a previously paginated request.'",
        "example": "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9"
      },
      {
        "name": "workspace",
        "schema": "string",
        "description": "The workspace to filter tags on.",
        "example": "1331"
      },
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "color",
          "created_at",
          "followers",
          "followers.name",
          "name",
          "notes",
          "offset",
          "path",
          "permalink_url",
          "uri",
          "workspace",
          "workspace.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/tags",
    "method": "createNewTagRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Create a tag",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "color",
          "created_at",
          "followers",
          "followers.name",
          "name",
          "notes",
          "permalink_url",
          "workspace",
          "workspace.name"
        ]
      },
      {
        "name": "data",
        "schema": "undefined",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/tags/{tag_gid}",
    "method": "removeTag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Delete a tag",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/tags/{tag_gid}",
    "method": "getRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Get a tag",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "color",
          "created_at",
          "followers",
          "followers.name",
          "name",
          "notes",
          "permalink_url",
          "workspace",
          "workspace.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/tags/{tag_gid}",
    "method": "updateTagRecord",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Update a tag",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "color",
          "created_at",
          "followers",
          "followers.name",
          "name",
          "notes",
          "permalink_url",
          "workspace",
          "workspace.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/tasks/{task_gid}/tags",
    "method": "getTaskTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Get a task's tags",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "color",
          "created_at",
          "followers",
          "followers.name",
          "name",
          "notes",
          "offset",
          "path",
          "permalink_url",
          "uri",
          "workspace",
          "workspace.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace_gid}/tags",
    "method": "getFilteredTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Get tags in a workspace",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.",
        "example": 50
      },
      {
        "name": "offset",
        "schema": "string",
        "description": "Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n'Note: You can only pass in an offset that was returned to you via a previously paginated request.'",
        "example": "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9"
      },
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "color",
          "created_at",
          "followers",
          "followers.name",
          "name",
          "notes",
          "offset",
          "path",
          "permalink_url",
          "uri",
          "workspace",
          "workspace.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace_gid}/tags",
    "method": "createTagInWorkspace",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Create a tag in a workspace",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "color",
          "created_at",
          "followers",
          "followers.name",
          "name",
          "notes",
          "permalink_url",
          "workspace",
          "workspace.name"
        ]
      },
      {
        "name": "data",
        "schema": "undefined",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/task_templates",
    "method": "listMultiple",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Task templates",
    "typeScriptTag": "taskTemplates",
    "description": "Get multiple task templates",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.",
        "example": 50
      },
      {
        "name": "offset",
        "schema": "string",
        "description": "Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n'Note: You can only pass in an offset that was returned to you via a previously paginated request.'",
        "example": "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9"
      },
      {
        "name": "project",
        "schema": "string",
        "description": "The project to filter task templates on.",
        "example": "321654"
      },
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "created_at",
          "created_by",
          "name",
          "project",
          "template"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/task_templates/{task_template_gid}",
    "method": "deleteTaskTemplate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Task templates",
    "typeScriptTag": "taskTemplates",
    "description": "Delete a task template",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "402",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/task_templates/{task_template_gid}",
    "method": "getSingleTemplate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Task templates",
    "typeScriptTag": "taskTemplates",
    "description": "Get a task template",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "created_at",
          "created_by",
          "name",
          "project",
          "template"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/task_templates/{task_template_gid}/instantiateTask",
    "method": "instantiateTaskJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Task templates",
    "typeScriptTag": "taskTemplates",
    "description": "Instantiate a task from a task template",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "new_project",
          "new_project.name",
          "new_project_template",
          "new_project_template.name",
          "new_task",
          "new_task.created_by",
          "new_task.name",
          "new_task.resource_subtype",
          "new_task_template",
          "new_task_template.name",
          "resource_subtype",
          "status"
        ]
      },
      {
        "name": "data",
        "schema": "object",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/tasks",
    "method": "getMultiple",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get multiple tasks",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.",
        "example": 50
      },
      {
        "name": "offset",
        "schema": "string",
        "description": "Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n'Note: You can only pass in an offset that was returned to you via a previously paginated request.'",
        "example": "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9"
      },
      {
        "name": "assignee",
        "schema": "string",
        "description": "The assignee to filter tasks on. If searching for unassigned tasks, assignee.any = null can be specified.\n*Note: If you specify `assignee`, you must also specify the `workspace` to filter on.*",
        "example": "14641"
      },
      {
        "name": "project",
        "schema": "string",
        "description": "The project to filter tasks on.",
        "example": "321654"
      },
      {
        "name": "section",
        "schema": "string",
        "description": "The section to filter tasks on.",
        "example": "321654"
      },
      {
        "name": "workspace",
        "schema": "string",
        "description": "The workspace to filter tasks on.\n*Note: If you specify `workspace`, you must also specify the `assignee` to filter on.*",
        "example": "321654"
      },
      {
        "name": "completedSince",
        "schema": "string",
        "description": "Only return tasks that are either incomplete or that have been completed since this time.",
        "example": "2012-02-22T02:06:58.158Z"
      },
      {
        "name": "modifiedSince",
        "schema": "string",
        "description": "Only return tasks that have been modified since the given time.\n\n*Note: A task is considered “modified” if any of its properties\nchange, or associations between it and other objects are modified\n(e.g.  a task being added to a project). A task is not considered\nmodified just because another object it is associated with (e.g. a\nsubtask) is modified. Actions that count as modifying the task\ninclude assigning, renaming, completing, and adding stories.*",
        "example": "2012-02-22T02:06:58.158Z"
      },
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "actual_time_minutes",
          "approval_status",
          "assignee",
          "assignee.name",
          "assignee_section",
          "assignee_section.name",
          "assignee_status",
          "completed",
          "completed_at",
          "completed_by",
          "completed_by.name",
          "created_at",
          "created_by",
          "custom_fields",
          "custom_fields.asana_created_field",
          "custom_fields.created_by",
          "custom_fields.created_by.name",
          "custom_fields.currency_code",
          "custom_fields.custom_label",
          "custom_fields.custom_label_position",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.description",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.format",
          "custom_fields.has_notifications_enabled",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.is_global_to_workspace",
          "custom_fields.is_value_read_only",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.people_value",
          "custom_fields.people_value.name",
          "custom_fields.precision",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "dependencies",
          "dependents",
          "due_at",
          "due_on",
          "external",
          "external.data",
          "followers",
          "followers.name",
          "hearted",
          "hearts",
          "hearts.user",
          "hearts.user.name",
          "html_notes",
          "is_rendered_as_separator",
          "liked",
          "likes",
          "likes.user",
          "likes.user.name",
          "memberships",
          "memberships.project",
          "memberships.project.name",
          "memberships.section",
          "memberships.section.name",
          "modified_at",
          "name",
          "notes",
          "num_hearts",
          "num_likes",
          "num_subtasks",
          "offset",
          "parent",
          "parent.created_by",
          "parent.name",
          "parent.resource_subtype",
          "path",
          "permalink_url",
          "projects",
          "projects.name",
          "resource_subtype",
          "start_at",
          "start_on",
          "tags",
          "tags.name",
          "uri",
          "workspace",
          "workspace.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/tasks",
    "method": "createNewTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Create a task",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "actual_time_minutes",
          "approval_status",
          "assignee",
          "assignee.name",
          "assignee_section",
          "assignee_section.name",
          "assignee_status",
          "completed",
          "completed_at",
          "completed_by",
          "completed_by.name",
          "created_at",
          "created_by",
          "custom_fields",
          "custom_fields.asana_created_field",
          "custom_fields.created_by",
          "custom_fields.created_by.name",
          "custom_fields.currency_code",
          "custom_fields.custom_label",
          "custom_fields.custom_label_position",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.description",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.format",
          "custom_fields.has_notifications_enabled",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.is_global_to_workspace",
          "custom_fields.is_value_read_only",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.people_value",
          "custom_fields.people_value.name",
          "custom_fields.precision",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "dependencies",
          "dependents",
          "due_at",
          "due_on",
          "external",
          "external.data",
          "followers",
          "followers.name",
          "hearted",
          "hearts",
          "hearts.user",
          "hearts.user.name",
          "html_notes",
          "is_rendered_as_separator",
          "liked",
          "likes",
          "likes.user",
          "likes.user.name",
          "memberships",
          "memberships.project",
          "memberships.project.name",
          "memberships.section",
          "memberships.section.name",
          "modified_at",
          "name",
          "notes",
          "num_hearts",
          "num_likes",
          "num_subtasks",
          "parent",
          "parent.created_by",
          "parent.name",
          "parent.resource_subtype",
          "permalink_url",
          "projects",
          "projects.name",
          "resource_subtype",
          "start_at",
          "start_on",
          "tags",
          "tags.name",
          "workspace",
          "workspace.name"
        ]
      },
      {
        "name": "data",
        "schema": "undefined",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/tasks/{task_gid}",
    "method": "deleteTask",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Delete a task",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/tasks/{task_gid}",
    "method": "getTaskRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get a task",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "actual_time_minutes",
          "approval_status",
          "assignee",
          "assignee.name",
          "assignee_section",
          "assignee_section.name",
          "assignee_status",
          "completed",
          "completed_at",
          "completed_by",
          "completed_by.name",
          "created_at",
          "created_by",
          "custom_fields",
          "custom_fields.asana_created_field",
          "custom_fields.created_by",
          "custom_fields.created_by.name",
          "custom_fields.currency_code",
          "custom_fields.custom_label",
          "custom_fields.custom_label_position",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.description",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.format",
          "custom_fields.has_notifications_enabled",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.is_global_to_workspace",
          "custom_fields.is_value_read_only",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.people_value",
          "custom_fields.people_value.name",
          "custom_fields.precision",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "dependencies",
          "dependents",
          "due_at",
          "due_on",
          "external",
          "external.data",
          "followers",
          "followers.name",
          "hearted",
          "hearts",
          "hearts.user",
          "hearts.user.name",
          "html_notes",
          "is_rendered_as_separator",
          "liked",
          "likes",
          "likes.user",
          "likes.user.name",
          "memberships",
          "memberships.project",
          "memberships.project.name",
          "memberships.section",
          "memberships.section.name",
          "modified_at",
          "name",
          "notes",
          "num_hearts",
          "num_likes",
          "num_subtasks",
          "parent",
          "parent.created_by",
          "parent.name",
          "parent.resource_subtype",
          "permalink_url",
          "projects",
          "projects.name",
          "resource_subtype",
          "start_at",
          "start_on",
          "tags",
          "tags.name",
          "workspace",
          "workspace.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/tasks/{task_gid}",
    "method": "updateTaskRecord",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Update a task",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "actual_time_minutes",
          "approval_status",
          "assignee",
          "assignee.name",
          "assignee_section",
          "assignee_section.name",
          "assignee_status",
          "completed",
          "completed_at",
          "completed_by",
          "completed_by.name",
          "created_at",
          "created_by",
          "custom_fields",
          "custom_fields.asana_created_field",
          "custom_fields.created_by",
          "custom_fields.created_by.name",
          "custom_fields.currency_code",
          "custom_fields.custom_label",
          "custom_fields.custom_label_position",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.description",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.format",
          "custom_fields.has_notifications_enabled",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.is_global_to_workspace",
          "custom_fields.is_value_read_only",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.people_value",
          "custom_fields.people_value.name",
          "custom_fields.precision",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "dependencies",
          "dependents",
          "due_at",
          "due_on",
          "external",
          "external.data",
          "followers",
          "followers.name",
          "hearted",
          "hearts",
          "hearts.user",
          "hearts.user.name",
          "html_notes",
          "is_rendered_as_separator",
          "liked",
          "likes",
          "likes.user",
          "likes.user.name",
          "memberships",
          "memberships.project",
          "memberships.project.name",
          "memberships.section",
          "memberships.section.name",
          "modified_at",
          "name",
          "notes",
          "num_hearts",
          "num_likes",
          "num_subtasks",
          "parent",
          "parent.created_by",
          "parent.name",
          "parent.resource_subtype",
          "permalink_url",
          "projects",
          "projects.name",
          "resource_subtype",
          "start_at",
          "start_on",
          "tags",
          "tags.name",
          "workspace",
          "workspace.name"
        ]
      },
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/tasks/{task_gid}/duplicate",
    "method": "duplicateTaskJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Duplicate a task",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "new_project",
          "new_project.name",
          "new_project_template",
          "new_project_template.name",
          "new_task",
          "new_task.created_by",
          "new_task.name",
          "new_task.resource_subtype",
          "new_task_template",
          "new_task_template.name",
          "resource_subtype",
          "status"
        ]
      },
      {
        "name": "data",
        "schema": "object",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/projects/{project_gid}/tasks",
    "method": "getTasksByProject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get tasks from a project",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "actual_time_minutes",
          "approval_status",
          "assignee",
          "assignee.name",
          "assignee_section",
          "assignee_section.name",
          "assignee_status",
          "completed",
          "completed_at",
          "completed_by",
          "completed_by.name",
          "created_at",
          "created_by",
          "custom_fields",
          "custom_fields.asana_created_field",
          "custom_fields.created_by",
          "custom_fields.created_by.name",
          "custom_fields.currency_code",
          "custom_fields.custom_label",
          "custom_fields.custom_label_position",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.description",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.format",
          "custom_fields.has_notifications_enabled",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.is_global_to_workspace",
          "custom_fields.is_value_read_only",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.people_value",
          "custom_fields.people_value.name",
          "custom_fields.precision",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "dependencies",
          "dependents",
          "due_at",
          "due_on",
          "external",
          "external.data",
          "followers",
          "followers.name",
          "hearted",
          "hearts",
          "hearts.user",
          "hearts.user.name",
          "html_notes",
          "is_rendered_as_separator",
          "liked",
          "likes",
          "likes.user",
          "likes.user.name",
          "memberships",
          "memberships.project",
          "memberships.project.name",
          "memberships.section",
          "memberships.section.name",
          "modified_at",
          "name",
          "notes",
          "num_hearts",
          "num_likes",
          "num_subtasks",
          "offset",
          "parent",
          "parent.created_by",
          "parent.name",
          "parent.resource_subtype",
          "path",
          "permalink_url",
          "projects",
          "projects.name",
          "resource_subtype",
          "start_at",
          "start_on",
          "tags",
          "tags.name",
          "uri",
          "workspace",
          "workspace.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/sections/{section_gid}/tasks",
    "method": "getSectionTasks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get tasks from a section",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "actual_time_minutes",
          "approval_status",
          "assignee",
          "assignee.name",
          "assignee_section",
          "assignee_section.name",
          "assignee_status",
          "completed",
          "completed_at",
          "completed_by",
          "completed_by.name",
          "created_at",
          "created_by",
          "custom_fields",
          "custom_fields.asana_created_field",
          "custom_fields.created_by",
          "custom_fields.created_by.name",
          "custom_fields.currency_code",
          "custom_fields.custom_label",
          "custom_fields.custom_label_position",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.description",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.format",
          "custom_fields.has_notifications_enabled",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.is_global_to_workspace",
          "custom_fields.is_value_read_only",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.people_value",
          "custom_fields.people_value.name",
          "custom_fields.precision",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "dependencies",
          "dependents",
          "due_at",
          "due_on",
          "external",
          "external.data",
          "followers",
          "followers.name",
          "hearted",
          "hearts",
          "hearts.user",
          "hearts.user.name",
          "html_notes",
          "is_rendered_as_separator",
          "liked",
          "likes",
          "likes.user",
          "likes.user.name",
          "memberships",
          "memberships.project",
          "memberships.project.name",
          "memberships.section",
          "memberships.section.name",
          "modified_at",
          "name",
          "notes",
          "num_hearts",
          "num_likes",
          "num_subtasks",
          "offset",
          "parent",
          "parent.created_by",
          "parent.name",
          "parent.resource_subtype",
          "path",
          "permalink_url",
          "projects",
          "projects.name",
          "resource_subtype",
          "start_at",
          "start_on",
          "tags",
          "tags.name",
          "uri",
          "workspace",
          "workspace.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/tags/{tag_gid}/tasks",
    "method": "getMultipleWithTag",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get tasks from a tag",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "actual_time_minutes",
          "approval_status",
          "assignee",
          "assignee.name",
          "assignee_section",
          "assignee_section.name",
          "assignee_status",
          "completed",
          "completed_at",
          "completed_by",
          "completed_by.name",
          "created_at",
          "created_by",
          "custom_fields",
          "custom_fields.asana_created_field",
          "custom_fields.created_by",
          "custom_fields.created_by.name",
          "custom_fields.currency_code",
          "custom_fields.custom_label",
          "custom_fields.custom_label_position",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.description",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.format",
          "custom_fields.has_notifications_enabled",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.is_global_to_workspace",
          "custom_fields.is_value_read_only",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.people_value",
          "custom_fields.people_value.name",
          "custom_fields.precision",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "dependencies",
          "dependents",
          "due_at",
          "due_on",
          "external",
          "external.data",
          "followers",
          "followers.name",
          "hearted",
          "hearts",
          "hearts.user",
          "hearts.user.name",
          "html_notes",
          "is_rendered_as_separator",
          "liked",
          "likes",
          "likes.user",
          "likes.user.name",
          "memberships",
          "memberships.project",
          "memberships.project.name",
          "memberships.section",
          "memberships.section.name",
          "modified_at",
          "name",
          "notes",
          "num_hearts",
          "num_likes",
          "num_subtasks",
          "offset",
          "parent",
          "parent.created_by",
          "parent.name",
          "parent.resource_subtype",
          "path",
          "permalink_url",
          "projects",
          "projects.name",
          "resource_subtype",
          "start_at",
          "start_on",
          "tags",
          "tags.name",
          "uri",
          "workspace",
          "workspace.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/user_task_lists/{user_task_list_gid}/tasks",
    "method": "getUserTaskListTasks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get tasks from a user task list",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "actual_time_minutes",
          "approval_status",
          "assignee",
          "assignee.name",
          "assignee_section",
          "assignee_section.name",
          "assignee_status",
          "completed",
          "completed_at",
          "completed_by",
          "completed_by.name",
          "created_at",
          "created_by",
          "custom_fields",
          "custom_fields.asana_created_field",
          "custom_fields.created_by",
          "custom_fields.created_by.name",
          "custom_fields.currency_code",
          "custom_fields.custom_label",
          "custom_fields.custom_label_position",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.description",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.format",
          "custom_fields.has_notifications_enabled",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.is_global_to_workspace",
          "custom_fields.is_value_read_only",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.people_value",
          "custom_fields.people_value.name",
          "custom_fields.precision",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "dependencies",
          "dependents",
          "due_at",
          "due_on",
          "external",
          "external.data",
          "followers",
          "followers.name",
          "hearted",
          "hearts",
          "hearts.user",
          "hearts.user.name",
          "html_notes",
          "is_rendered_as_separator",
          "liked",
          "likes",
          "likes.user",
          "likes.user.name",
          "memberships",
          "memberships.project",
          "memberships.project.name",
          "memberships.section",
          "memberships.section.name",
          "modified_at",
          "name",
          "notes",
          "num_hearts",
          "num_likes",
          "num_subtasks",
          "offset",
          "parent",
          "parent.created_by",
          "parent.name",
          "parent.resource_subtype",
          "path",
          "permalink_url",
          "projects",
          "projects.name",
          "resource_subtype",
          "start_at",
          "start_on",
          "tags",
          "tags.name",
          "uri",
          "workspace",
          "workspace.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/tasks/{task_gid}/subtasks",
    "method": "getSubtaskList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get subtasks from a task",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.",
        "example": 50
      },
      {
        "name": "offset",
        "schema": "string",
        "description": "Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n'Note: You can only pass in an offset that was returned to you via a previously paginated request.'",
        "example": "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9"
      },
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "actual_time_minutes",
          "approval_status",
          "assignee",
          "assignee.name",
          "assignee_section",
          "assignee_section.name",
          "assignee_status",
          "completed",
          "completed_at",
          "completed_by",
          "completed_by.name",
          "created_at",
          "created_by",
          "custom_fields",
          "custom_fields.asana_created_field",
          "custom_fields.created_by",
          "custom_fields.created_by.name",
          "custom_fields.currency_code",
          "custom_fields.custom_label",
          "custom_fields.custom_label_position",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.description",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.format",
          "custom_fields.has_notifications_enabled",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.is_global_to_workspace",
          "custom_fields.is_value_read_only",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.people_value",
          "custom_fields.people_value.name",
          "custom_fields.precision",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "dependencies",
          "dependents",
          "due_at",
          "due_on",
          "external",
          "external.data",
          "followers",
          "followers.name",
          "hearted",
          "hearts",
          "hearts.user",
          "hearts.user.name",
          "html_notes",
          "is_rendered_as_separator",
          "liked",
          "likes",
          "likes.user",
          "likes.user.name",
          "memberships",
          "memberships.project",
          "memberships.project.name",
          "memberships.section",
          "memberships.section.name",
          "modified_at",
          "name",
          "notes",
          "num_hearts",
          "num_likes",
          "num_subtasks",
          "offset",
          "parent",
          "parent.created_by",
          "parent.name",
          "parent.resource_subtype",
          "path",
          "permalink_url",
          "projects",
          "projects.name",
          "resource_subtype",
          "start_at",
          "start_on",
          "tags",
          "tags.name",
          "uri",
          "workspace",
          "workspace.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/tasks/{task_gid}/subtasks",
    "method": "createSubtaskRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Create a subtask",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "actual_time_minutes",
          "approval_status",
          "assignee",
          "assignee.name",
          "assignee_section",
          "assignee_section.name",
          "assignee_status",
          "completed",
          "completed_at",
          "completed_by",
          "completed_by.name",
          "created_at",
          "created_by",
          "custom_fields",
          "custom_fields.asana_created_field",
          "custom_fields.created_by",
          "custom_fields.created_by.name",
          "custom_fields.currency_code",
          "custom_fields.custom_label",
          "custom_fields.custom_label_position",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.description",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.format",
          "custom_fields.has_notifications_enabled",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.is_global_to_workspace",
          "custom_fields.is_value_read_only",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.people_value",
          "custom_fields.people_value.name",
          "custom_fields.precision",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "dependencies",
          "dependents",
          "due_at",
          "due_on",
          "external",
          "external.data",
          "followers",
          "followers.name",
          "hearted",
          "hearts",
          "hearts.user",
          "hearts.user.name",
          "html_notes",
          "is_rendered_as_separator",
          "liked",
          "likes",
          "likes.user",
          "likes.user.name",
          "memberships",
          "memberships.project",
          "memberships.project.name",
          "memberships.section",
          "memberships.section.name",
          "modified_at",
          "name",
          "notes",
          "num_hearts",
          "num_likes",
          "num_subtasks",
          "parent",
          "parent.created_by",
          "parent.name",
          "parent.resource_subtype",
          "permalink_url",
          "projects",
          "projects.name",
          "resource_subtype",
          "start_at",
          "start_on",
          "tags",
          "tags.name",
          "workspace",
          "workspace.name"
        ]
      },
      {
        "name": "data",
        "schema": "undefined",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/tasks/{task_gid}/setParent",
    "method": "setParentTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Set the parent of a task",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "actual_time_minutes",
          "approval_status",
          "assignee",
          "assignee.name",
          "assignee_section",
          "assignee_section.name",
          "assignee_status",
          "completed",
          "completed_at",
          "completed_by",
          "completed_by.name",
          "created_at",
          "created_by",
          "custom_fields",
          "custom_fields.asana_created_field",
          "custom_fields.created_by",
          "custom_fields.created_by.name",
          "custom_fields.currency_code",
          "custom_fields.custom_label",
          "custom_fields.custom_label_position",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.description",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.format",
          "custom_fields.has_notifications_enabled",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.is_global_to_workspace",
          "custom_fields.is_value_read_only",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.people_value",
          "custom_fields.people_value.name",
          "custom_fields.precision",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "dependencies",
          "dependents",
          "due_at",
          "due_on",
          "external",
          "external.data",
          "followers",
          "followers.name",
          "hearted",
          "hearts",
          "hearts.user",
          "hearts.user.name",
          "html_notes",
          "is_rendered_as_separator",
          "liked",
          "likes",
          "likes.user",
          "likes.user.name",
          "memberships",
          "memberships.project",
          "memberships.project.name",
          "memberships.section",
          "memberships.section.name",
          "modified_at",
          "name",
          "notes",
          "num_hearts",
          "num_likes",
          "num_subtasks",
          "parent",
          "parent.created_by",
          "parent.name",
          "parent.resource_subtype",
          "permalink_url",
          "projects",
          "projects.name",
          "resource_subtype",
          "start_at",
          "start_on",
          "tags",
          "tags.name",
          "workspace",
          "workspace.name"
        ]
      },
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/tasks/{task_gid}/dependencies",
    "method": "getAllDependencies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get dependencies from a task",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "actual_time_minutes",
          "approval_status",
          "assignee",
          "assignee.name",
          "assignee_section",
          "assignee_section.name",
          "assignee_status",
          "completed",
          "completed_at",
          "completed_by",
          "completed_by.name",
          "created_at",
          "created_by",
          "custom_fields",
          "custom_fields.asana_created_field",
          "custom_fields.created_by",
          "custom_fields.created_by.name",
          "custom_fields.currency_code",
          "custom_fields.custom_label",
          "custom_fields.custom_label_position",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.description",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.format",
          "custom_fields.has_notifications_enabled",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.is_global_to_workspace",
          "custom_fields.is_value_read_only",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.people_value",
          "custom_fields.people_value.name",
          "custom_fields.precision",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "dependencies",
          "dependents",
          "due_at",
          "due_on",
          "external",
          "external.data",
          "followers",
          "followers.name",
          "hearted",
          "hearts",
          "hearts.user",
          "hearts.user.name",
          "html_notes",
          "is_rendered_as_separator",
          "liked",
          "likes",
          "likes.user",
          "likes.user.name",
          "memberships",
          "memberships.project",
          "memberships.project.name",
          "memberships.section",
          "memberships.section.name",
          "modified_at",
          "name",
          "notes",
          "num_hearts",
          "num_likes",
          "num_subtasks",
          "offset",
          "parent",
          "parent.created_by",
          "parent.name",
          "parent.resource_subtype",
          "path",
          "permalink_url",
          "projects",
          "projects.name",
          "resource_subtype",
          "start_at",
          "start_on",
          "tags",
          "tags.name",
          "uri",
          "workspace",
          "workspace.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "402",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/tasks/{task_gid}/addDependencies",
    "method": "setDependenciesForTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Set dependencies for a task",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
        "description": "",
        "example": {
          "dependencies": [
            "133713",
            "184253"
          ]
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "402",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/tasks/{task_gid}/removeDependencies",
    "method": "unlinkDependenciesFromTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Unlink dependencies from a task",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
        "description": "",
        "example": {
          "dependencies": [
            "133713",
            "184253"
          ]
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "402",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/tasks/{task_gid}/dependents",
    "method": "getDependents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get dependents from a task",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "actual_time_minutes",
          "approval_status",
          "assignee",
          "assignee.name",
          "assignee_section",
          "assignee_section.name",
          "assignee_status",
          "completed",
          "completed_at",
          "completed_by",
          "completed_by.name",
          "created_at",
          "created_by",
          "custom_fields",
          "custom_fields.asana_created_field",
          "custom_fields.created_by",
          "custom_fields.created_by.name",
          "custom_fields.currency_code",
          "custom_fields.custom_label",
          "custom_fields.custom_label_position",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.description",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.format",
          "custom_fields.has_notifications_enabled",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.is_global_to_workspace",
          "custom_fields.is_value_read_only",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.people_value",
          "custom_fields.people_value.name",
          "custom_fields.precision",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "dependencies",
          "dependents",
          "due_at",
          "due_on",
          "external",
          "external.data",
          "followers",
          "followers.name",
          "hearted",
          "hearts",
          "hearts.user",
          "hearts.user.name",
          "html_notes",
          "is_rendered_as_separator",
          "liked",
          "likes",
          "likes.user",
          "likes.user.name",
          "memberships",
          "memberships.project",
          "memberships.project.name",
          "memberships.section",
          "memberships.section.name",
          "modified_at",
          "name",
          "notes",
          "num_hearts",
          "num_likes",
          "num_subtasks",
          "offset",
          "parent",
          "parent.created_by",
          "parent.name",
          "parent.resource_subtype",
          "path",
          "permalink_url",
          "projects",
          "projects.name",
          "resource_subtype",
          "start_at",
          "start_on",
          "tags",
          "tags.name",
          "uri",
          "workspace",
          "workspace.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "402",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/tasks/{task_gid}/addDependents",
    "method": "setTaskDependents",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Set dependents for a task",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
        "description": "",
        "example": {
          "dependents": [
            "133713",
            "184253"
          ]
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "402",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/tasks/{task_gid}/removeDependents",
    "method": "unlinkDependents",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Unlink dependents from a task",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
        "description": "",
        "example": {
          "dependents": [
            "133713",
            "184253"
          ]
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "402",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/tasks/{task_gid}/addProject",
    "method": "addProjectToTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Add a project to a task",
    "parameters": [
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/tasks/{task_gid}/removeProject",
    "method": "removeProjectFromTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Remove a project from a task",
    "parameters": [
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/tasks/{task_gid}/addTag",
    "method": "addTagToTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Add a tag to a task",
    "parameters": [
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/tasks/{task_gid}/removeTag",
    "method": "removeTagFromTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Remove a tag from a task",
    "parameters": [
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/tasks/{task_gid}/addFollowers",
    "method": "addFollowersToTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Add followers to a task",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "actual_time_minutes",
          "approval_status",
          "assignee",
          "assignee.name",
          "assignee_section",
          "assignee_section.name",
          "assignee_status",
          "completed",
          "completed_at",
          "completed_by",
          "completed_by.name",
          "created_at",
          "created_by",
          "custom_fields",
          "custom_fields.asana_created_field",
          "custom_fields.created_by",
          "custom_fields.created_by.name",
          "custom_fields.currency_code",
          "custom_fields.custom_label",
          "custom_fields.custom_label_position",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.description",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.format",
          "custom_fields.has_notifications_enabled",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.is_global_to_workspace",
          "custom_fields.is_value_read_only",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.people_value",
          "custom_fields.people_value.name",
          "custom_fields.precision",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "dependencies",
          "dependents",
          "due_at",
          "due_on",
          "external",
          "external.data",
          "followers",
          "followers.name",
          "hearted",
          "hearts",
          "hearts.user",
          "hearts.user.name",
          "html_notes",
          "is_rendered_as_separator",
          "liked",
          "likes",
          "likes.user",
          "likes.user.name",
          "memberships",
          "memberships.project",
          "memberships.project.name",
          "memberships.section",
          "memberships.section.name",
          "modified_at",
          "name",
          "notes",
          "num_hearts",
          "num_likes",
          "num_subtasks",
          "parent",
          "parent.created_by",
          "parent.name",
          "parent.resource_subtype",
          "permalink_url",
          "projects",
          "projects.name",
          "resource_subtype",
          "start_at",
          "start_on",
          "tags",
          "tags.name",
          "workspace",
          "workspace.name"
        ]
      },
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/tasks/{task_gid}/removeFollowers",
    "method": "removeFollowersFromTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Remove followers from a task",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "actual_time_minutes",
          "approval_status",
          "assignee",
          "assignee.name",
          "assignee_section",
          "assignee_section.name",
          "assignee_status",
          "completed",
          "completed_at",
          "completed_by",
          "completed_by.name",
          "created_at",
          "created_by",
          "custom_fields",
          "custom_fields.asana_created_field",
          "custom_fields.created_by",
          "custom_fields.created_by.name",
          "custom_fields.currency_code",
          "custom_fields.custom_label",
          "custom_fields.custom_label_position",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.description",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.format",
          "custom_fields.has_notifications_enabled",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.is_global_to_workspace",
          "custom_fields.is_value_read_only",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.people_value",
          "custom_fields.people_value.name",
          "custom_fields.precision",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "dependencies",
          "dependents",
          "due_at",
          "due_on",
          "external",
          "external.data",
          "followers",
          "followers.name",
          "hearted",
          "hearts",
          "hearts.user",
          "hearts.user.name",
          "html_notes",
          "is_rendered_as_separator",
          "liked",
          "likes",
          "likes.user",
          "likes.user.name",
          "memberships",
          "memberships.project",
          "memberships.project.name",
          "memberships.section",
          "memberships.section.name",
          "modified_at",
          "name",
          "notes",
          "num_hearts",
          "num_likes",
          "num_subtasks",
          "parent",
          "parent.created_by",
          "parent.name",
          "parent.resource_subtype",
          "permalink_url",
          "projects",
          "projects.name",
          "resource_subtype",
          "start_at",
          "start_on",
          "tags",
          "tags.name",
          "workspace",
          "workspace.name"
        ]
      },
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace_gid}/tasks/custom_id/{custom_id}",
    "method": "getByCustomId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get a task for a given custom ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace_gid}/tasks/search",
    "method": "searchInWorkspace",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Search tasks in a workspace",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "actual_time_minutes",
          "approval_status",
          "assignee",
          "assignee.name",
          "assignee_section",
          "assignee_section.name",
          "assignee_status",
          "completed",
          "completed_at",
          "completed_by",
          "completed_by.name",
          "created_at",
          "created_by",
          "custom_fields",
          "custom_fields.asana_created_field",
          "custom_fields.created_by",
          "custom_fields.created_by.name",
          "custom_fields.currency_code",
          "custom_fields.custom_label",
          "custom_fields.custom_label_position",
          "custom_fields.date_value",
          "custom_fields.date_value.date",
          "custom_fields.date_value.date_time",
          "custom_fields.description",
          "custom_fields.display_value",
          "custom_fields.enabled",
          "custom_fields.enum_options",
          "custom_fields.enum_options.color",
          "custom_fields.enum_options.enabled",
          "custom_fields.enum_options.name",
          "custom_fields.enum_value",
          "custom_fields.enum_value.color",
          "custom_fields.enum_value.enabled",
          "custom_fields.enum_value.name",
          "custom_fields.format",
          "custom_fields.has_notifications_enabled",
          "custom_fields.id_prefix",
          "custom_fields.is_formula_field",
          "custom_fields.is_global_to_workspace",
          "custom_fields.is_value_read_only",
          "custom_fields.multi_enum_values",
          "custom_fields.multi_enum_values.color",
          "custom_fields.multi_enum_values.enabled",
          "custom_fields.multi_enum_values.name",
          "custom_fields.name",
          "custom_fields.number_value",
          "custom_fields.people_value",
          "custom_fields.people_value.name",
          "custom_fields.precision",
          "custom_fields.representation_type",
          "custom_fields.resource_subtype",
          "custom_fields.text_value",
          "custom_fields.type",
          "dependencies",
          "dependents",
          "due_at",
          "due_on",
          "external",
          "external.data",
          "followers",
          "followers.name",
          "hearted",
          "hearts",
          "hearts.user",
          "hearts.user.name",
          "html_notes",
          "is_rendered_as_separator",
          "liked",
          "likes",
          "likes.user",
          "likes.user.name",
          "memberships",
          "memberships.project",
          "memberships.project.name",
          "memberships.section",
          "memberships.section.name",
          "modified_at",
          "name",
          "notes",
          "num_hearts",
          "num_likes",
          "num_subtasks",
          "parent",
          "parent.created_by",
          "parent.name",
          "parent.resource_subtype",
          "permalink_url",
          "projects",
          "projects.name",
          "resource_subtype",
          "start_at",
          "start_on",
          "tags",
          "tags.name",
          "workspace",
          "workspace.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/team_memberships/{team_membership_gid}",
    "method": "getRecordById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team memberships",
    "typeScriptTag": "teamMemberships",
    "description": "Get a team membership",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "is_admin",
          "is_guest",
          "is_limited_access",
          "team",
          "team.name",
          "user",
          "user.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/team_memberships",
    "method": "getCompactRecords",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team memberships",
    "typeScriptTag": "teamMemberships",
    "description": "Get team memberships",
    "parameters": [
      {
        "name": "team",
        "schema": "string",
        "description": "Globally unique identifier for the team.",
        "example": "159874"
      },
      {
        "name": "user",
        "schema": "string",
        "description": "A string identifying a user. This can either be the string \"me\", an email, or the gid of a user. This parameter must be used with the workspace parameter.",
        "example": "512241"
      },
      {
        "name": "workspace",
        "schema": "string",
        "description": "Globally unique identifier for the workspace. This parameter must be used with the user parameter.",
        "example": "31326"
      },
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "is_admin",
          "is_guest",
          "is_limited_access",
          "offset",
          "path",
          "team",
          "team.name",
          "uri",
          "user",
          "user.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/teams/{team_gid}/team_memberships",
    "method": "getCompact",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team memberships",
    "typeScriptTag": "teamMemberships",
    "description": "Get memberships from a team",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "is_admin",
          "is_guest",
          "is_limited_access",
          "offset",
          "path",
          "team",
          "team.name",
          "uri",
          "user",
          "user.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/users/{user_gid}/team_memberships",
    "method": "getUserCompact",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team memberships",
    "typeScriptTag": "teamMemberships",
    "description": "Get memberships from a user",
    "parameters": [
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "Globally unique identifier for the workspace.",
        "example": "31326"
      },
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "is_admin",
          "is_guest",
          "is_limited_access",
          "offset",
          "path",
          "team",
          "team.name",
          "uri",
          "user",
          "user.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/teams",
    "method": "createTeamRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Create a team",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "description",
          "edit_team_name_or_description_access_level",
          "edit_team_visibility_or_trash_team_access_level",
          "guest_invite_management_access_level",
          "html_description",
          "join_request_management_access_level",
          "member_invite_management_access_level",
          "name",
          "organization",
          "organization.name",
          "permalink_url",
          "team_member_removal_access_level",
          "visibility"
        ]
      },
      {
        "name": "data",
        "schema": "undefined",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/teams/{team_gid}",
    "method": "getTeamRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Get a team",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "description",
          "edit_team_name_or_description_access_level",
          "edit_team_visibility_or_trash_team_access_level",
          "guest_invite_management_access_level",
          "html_description",
          "join_request_management_access_level",
          "member_invite_management_access_level",
          "name",
          "organization",
          "organization.name",
          "permalink_url",
          "team_member_removal_access_level",
          "visibility"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/teams/{team_gid}",
    "method": "updateTeamRecord",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Update a team",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "description",
          "edit_team_name_or_description_access_level",
          "edit_team_visibility_or_trash_team_access_level",
          "guest_invite_management_access_level",
          "html_description",
          "join_request_management_access_level",
          "member_invite_management_access_level",
          "name",
          "organization",
          "organization.name",
          "permalink_url",
          "team_member_removal_access_level",
          "visibility"
        ]
      },
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace_gid}/teams",
    "method": "listWorkspaceTeams",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Get teams in a workspace",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "description",
          "edit_team_name_or_description_access_level",
          "edit_team_visibility_or_trash_team_access_level",
          "guest_invite_management_access_level",
          "html_description",
          "join_request_management_access_level",
          "member_invite_management_access_level",
          "name",
          "offset",
          "organization",
          "organization.name",
          "path",
          "permalink_url",
          "team_member_removal_access_level",
          "uri",
          "visibility"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/users/{user_gid}/teams",
    "method": "getUserTeams",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Get teams for a user",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "description",
          "edit_team_name_or_description_access_level",
          "edit_team_visibility_or_trash_team_access_level",
          "guest_invite_management_access_level",
          "html_description",
          "join_request_management_access_level",
          "member_invite_management_access_level",
          "name",
          "offset",
          "organization",
          "organization.name",
          "path",
          "permalink_url",
          "team_member_removal_access_level",
          "uri",
          "visibility"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/teams/{team_gid}/addUser",
    "method": "addUserToTeam",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Add a user to a team",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "is_admin",
          "is_guest",
          "is_limited_access",
          "team",
          "team.name",
          "user",
          "user.name"
        ]
      },
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/teams/{team_gid}/removeUser",
    "method": "removeUserFromTeam",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Remove a user from a team",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/time_periods/{time_period_gid}",
    "method": "getFullRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time periods",
    "typeScriptTag": "timePeriods",
    "description": "Get a time period",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "display_name",
          "end_on",
          "parent",
          "parent.display_name",
          "parent.end_on",
          "parent.period",
          "parent.start_on",
          "period",
          "start_on"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/time_periods",
    "method": "getCompactTimePeriods",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time periods",
    "typeScriptTag": "timePeriods",
    "description": "Get time periods",
    "parameters": [
      {
        "name": "startOn",
        "schema": "string",
        "description": "ISO 8601 date string",
        "example": "2019-09-15"
      },
      {
        "name": "endOn",
        "schema": "string",
        "description": "ISO 8601 date string",
        "example": "2019-09-15"
      },
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "Globally unique identifier for the workspace.",
        "example": "31326"
      },
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "display_name",
          "end_on",
          "offset",
          "parent",
          "parent.display_name",
          "parent.end_on",
          "parent.period",
          "parent.start_on",
          "path",
          "period",
          "start_on",
          "uri"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/tasks/{task_gid}/time_tracking_entries",
    "method": "getForTask",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time tracking entries",
    "typeScriptTag": "timeTrackingEntries",
    "description": "Get time tracking entries for a task",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.",
        "example": 50
      },
      {
        "name": "offset",
        "schema": "string",
        "description": "Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n'Note: You can only pass in an offset that was returned to you via a previously paginated request.'",
        "example": "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9"
      },
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "created_by",
          "created_by.name",
          "duration_minutes",
          "entered_on",
          "offset",
          "path",
          "uri"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/tasks/{task_gid}/time_tracking_entries",
    "method": "createNewTimeEntryRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time tracking entries",
    "typeScriptTag": "timeTrackingEntries",
    "description": "Create a time tracking entry",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "created_at",
          "created_by",
          "created_by.name",
          "duration_minutes",
          "entered_on",
          "task",
          "task.created_by",
          "task.name",
          "task.resource_subtype"
        ]
      },
      {
        "name": "data",
        "schema": "object",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/time_tracking_entries/{time_tracking_entry_gid}",
    "method": "deleteTimeEntry",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Time tracking entries",
    "typeScriptTag": "timeTrackingEntries",
    "description": "Delete a time tracking entry",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/time_tracking_entries/{time_tracking_entry_gid}",
    "method": "getRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time tracking entries",
    "typeScriptTag": "timeTrackingEntries",
    "description": "Get a time tracking entry",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "created_at",
          "created_by",
          "created_by.name",
          "duration_minutes",
          "entered_on",
          "task",
          "task.created_by",
          "task.name",
          "task.resource_subtype"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/time_tracking_entries/{time_tracking_entry_gid}",
    "method": "updateTimeTrackingEntry",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Time tracking entries",
    "typeScriptTag": "timeTrackingEntries",
    "description": "Update a time tracking entry",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "created_at",
          "created_by",
          "created_by.name",
          "duration_minutes",
          "entered_on",
          "task",
          "task.created_by",
          "task.name",
          "task.resource_subtype"
        ]
      },
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace_gid}/typeahead",
    "method": "getResults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Typeahead",
    "typeScriptTag": "typeahead",
    "description": "Get objects via typeahead",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "name"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A generic list of objects, such as those returned by the typeahead search endpoint."
      },
      {
        "statusCode": "400",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/user_task_lists/{user_task_list_gid}",
    "method": "getRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User task lists",
    "typeScriptTag": "userTaskLists",
    "description": "Get a user task list",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "name",
          "owner",
          "workspace"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/users/{user_gid}/user_task_list",
    "method": "getUserTaskList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User task lists",
    "typeScriptTag": "userTaskLists",
    "description": "Get a user's task list",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "name",
          "owner",
          "workspace"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/users",
    "method": "listMultipleUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get multiple users",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "email",
          "name",
          "offset",
          "path",
          "photo",
          "photo.image_1024x1024",
          "photo.image_128x128",
          "photo.image_21x21",
          "photo.image_27x27",
          "photo.image_36x36",
          "photo.image_60x60",
          "uri",
          "workspaces",
          "workspaces.name"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/users/{user_gid}",
    "method": "getUserRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get a user",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "email",
          "name",
          "photo",
          "photo.image_1024x1024",
          "photo.image_128x128",
          "photo.image_21x21",
          "photo.image_27x27",
          "photo.image_36x36",
          "photo.image_60x60",
          "workspaces",
          "workspaces.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/users/{user_gid}/favorites",
    "method": "getFavoritesForUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get a user's favorites",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "name",
          "offset",
          "path",
          "uri"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/teams/{team_gid}/users",
    "method": "listTeamUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get users in a team",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "email",
          "name",
          "photo",
          "photo.image_1024x1024",
          "photo.image_128x128",
          "photo.image_21x21",
          "photo.image_27x27",
          "photo.image_36x36",
          "photo.image_60x60",
          "workspaces",
          "workspaces.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace_gid}/users",
    "method": "listWorkspaceUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get users in a workspace or organization",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "email",
          "name",
          "photo",
          "photo.image_1024x1024",
          "photo.image_128x128",
          "photo.image_21x21",
          "photo.image_27x27",
          "photo.image_36x36",
          "photo.image_60x60",
          "workspaces",
          "workspaces.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/webhooks",
    "method": "listMultipleWebhooks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Get multiple webhooks",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Results per page.\nThe number of objects to return per page. The value must be between 1 and 100.",
        "example": 50
      },
      {
        "name": "offset",
        "schema": "string",
        "description": "Offset token.\nAn offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.\n'Note: You can only pass in an offset that was returned to you via a previously paginated request.'",
        "example": "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9"
      },
      {
        "name": "workspace",
        "schema": "string",
        "required": true,
        "description": "The workspace to query for webhooks in.",
        "example": "1331"
      },
      {
        "name": "resource",
        "schema": "string",
        "description": "Only return webhooks for the given resource.",
        "example": "51648"
      },
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "active",
          "created_at",
          "filters",
          "filters.action",
          "filters.fields",
          "filters.resource_subtype",
          "last_failure_at",
          "last_failure_content",
          "last_success_at",
          "offset",
          "path",
          "resource",
          "resource.name",
          "target",
          "uri"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/webhooks",
    "method": "establishWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Establish a webhook",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "active",
          "created_at",
          "filters",
          "filters.action",
          "filters.fields",
          "filters.resource_subtype",
          "last_failure_at",
          "last_failure_content",
          "last_success_at",
          "resource",
          "resource.name",
          "target"
        ]
      },
      {
        "name": "data",
        "schema": "object",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/webhooks/{webhook_gid}",
    "method": "removeWebhook",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Delete a webhook",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/webhooks/{webhook_gid}",
    "method": "getWebhookRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Get a webhook",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "active",
          "created_at",
          "filters",
          "filters.action",
          "filters.fields",
          "filters.resource_subtype",
          "last_failure_at",
          "last_failure_content",
          "last_success_at",
          "resource",
          "resource.name",
          "target"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/webhooks/{webhook_gid}",
    "method": "updateWebhookFilters",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Update a webhook",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "active",
          "created_at",
          "filters",
          "filters.action",
          "filters.fields",
          "filters.resource_subtype",
          "last_failure_at",
          "last_failure_content",
          "last_success_at",
          "resource",
          "resource.name",
          "target"
        ]
      },
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/workspace_memberships/{workspace_membership_gid}",
    "method": "getRecordById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspace memberships",
    "typeScriptTag": "workspaceMemberships",
    "description": "Get a workspace membership",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "created_at",
          "is_active",
          "is_admin",
          "is_guest",
          "user",
          "user.name",
          "user_task_list",
          "user_task_list.name",
          "user_task_list.owner",
          "user_task_list.workspace",
          "vacation_dates",
          "vacation_dates.end_on",
          "vacation_dates.start_on",
          "workspace",
          "workspace.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/users/{user_gid}/workspace_memberships",
    "method": "getUserMemberships",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspace memberships",
    "typeScriptTag": "workspaceMemberships",
    "description": "Get workspace memberships for a user",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "created_at",
          "is_active",
          "is_admin",
          "is_guest",
          "offset",
          "path",
          "uri",
          "user",
          "user.name",
          "user_task_list",
          "user_task_list.name",
          "user_task_list.owner",
          "user_task_list.workspace",
          "vacation_dates",
          "vacation_dates.end_on",
          "vacation_dates.start_on",
          "workspace",
          "workspace.name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace_gid}/workspace_memberships",
    "method": "listForWorkspace",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspace memberships",
    "typeScriptTag": "workspaceMemberships",
    "description": "Get the workspace memberships for a workspace",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "created_at",
          "is_active",
          "is_admin",
          "is_guest",
          "offset",
          "path",
          "uri",
          "user",
          "user.name",
          "user_task_list",
          "user_task_list.name",
          "user_task_list.owner",
          "user_task_list.workspace",
          "vacation_dates",
          "vacation_dates.end_on",
          "vacation_dates.start_on",
          "workspace",
          "workspace.name"
        ]
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
    "url": "/workspaces",
    "method": "listMultiple",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Get multiple workspaces",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "email_domains",
          "is_organization",
          "name",
          "offset",
          "path",
          "uri"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace_gid}",
    "method": "getWorkspaceRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Get a workspace",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "email_domains",
          "is_organization",
          "name"
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace_gid}",
    "method": "updateWorkspaceRecord",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Update a workspace",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "email_domains",
          "is_organization",
          "name"
        ]
      },
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace_gid}/addUser",
    "method": "addUserToWorkspace",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Add a user to a workspace or organization",
    "parameters": [
      {
        "name": "optFields",
        "schema": "array",
        "required": false,
        "description": "This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.",
        "example": [
          "email",
          "name",
          "photo",
          "photo.image_1024x1024",
          "photo.image_128x128",
          "photo.image_21x21",
          "photo.image_27x27",
          "photo.image_36x36",
          "photo.image_60x60"
        ]
      },
      {
        "name": "data",
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
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  },
  {
    "url": "/workspaces/{workspace_gid}/removeUser",
    "method": "removeUserFromWorkspace",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Remove a user from a workspace or organization",
    "parameters": [
      {
        "name": "data",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "401",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "403",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "404",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      },
      {
        "statusCode": "500",
        "description": "Sadly, sometimes requests to the API are not successful. Failures can\noccur for a wide range of reasons. In all cases, the API should return\nan HTTP Status Code that indicates the nature of the failure,\nwith a response body in JSON format containing additional information.\n\n\nIn the event of a server error the response body will contain an error\nphrase. These phrases are automatically generated using the\n[node-asana-phrase\nlibrary](https://github.com/Asana/node-asana-phrase) and can be used by\nAsana support to quickly look up the incident that caused the server\nerror."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Asana"
      apiBaseUrl="https://app.asana.com/api/1.0"
      apiVersion="1.0"
      endpoints={135}
      sdkMethods={317}
      schemas={423}
      parameters={311}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/asana/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/asana/openapi.yaml"
      developerDocumentation="developers.asana.com/reference/rest-api-reference"
    />
  );
}
  