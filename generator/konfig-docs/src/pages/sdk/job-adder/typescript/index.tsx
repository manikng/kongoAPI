import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function JobAdderTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="job-adder-typescript-sdk"
      metaDescription={`Recruiting is hard work. Your recruitment software shouldn't be.

JobAdder is simplifying recruitment for recruitment agencies, staffing firms and HR and talent acquisition teams who want everything in one place without the complexity. Use it as a standalone platform or plug and play with 10+ add-ons, 100+ partners and 200+ job boards to create a custom recruitment management solution.

Join us today to discover why we have a CSAT score of 99% from 26,000+ users worldwide.`}
      company="JobAdder"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jobadder/logo.png"
      companyKebabCase="job-adder"
      clientNameCamelCase="jobAdder"
      homepage="jobadder.com"
      lastUpdated={new Date("2024-03-28T00:10:52.272Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jobadder/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jobadder/imagePreview.webp"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["job_postings","recruiting"]}
      methods={[
  {
    "url": "/jobboards",
    "method": "findJobBoards",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Board API:Job Boards",
    "typeScriptTag": "jobBoardApi:jobBoards",
    "description": "Find job boards",
    "parameters": [
      {
        "name": "boardId",
        "schema": "array",
        "description": "Job Board Id"
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
    "url": "/jobboards/{boardId}",
    "method": "getBoard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Board API:Job Boards",
    "typeScriptTag": "jobBoardApi:jobBoards",
    "description": "Get a job board",
    "parameters": [
      {
        "name": "boardId",
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
      },
      {
        "statusCode": "404",
        "description": "Requested job board was not found"
      }
    ]
  },
  {
    "url": "/jobboards/{boardId}/ads",
    "method": "listJobAds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Board API:Job Ads",
    "typeScriptTag": "jobBoardApi:jobAds",
    "description": "Find job ads",
    "parameters": [
      {
        "name": "boardId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "adId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "reference",
        "schema": "array",
        "description": ""
      },
      {
        "name": "portalHotJob",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "portalValue",
        "schema": "array",
        "description": ""
      },
      {
        "name": "portalValueId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "portalTemplate",
        "schema": "array",
        "description": ""
      },
      {
        "name": "postedAt",
        "schema": "array",
        "description": "Search for job ads posted at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "updatedAt",
        "schema": "array",
        "description": "Search for job ads updated at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "expiresAt",
        "schema": "array",
        "description": "Search for job ads expiring at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "fields",
        "schema": "array",
        "description": "Additional fields to include with the results.\r\nFields available to include are: ```description```, ```portal.fields```"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/jobboards/{boardId}/ads/{adId}",
    "method": "getJobAd",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Board API:Job Ads",
    "typeScriptTag": "jobBoardApi:jobAds",
    "description": "Get a job ad",
    "parameters": [
      {
        "name": "boardId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "adId",
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
      },
      {
        "statusCode": "404",
        "description": "Requested job ad was not found"
      }
    ]
  },
  {
    "url": "/jobboards/{boardId}/ads/{adId}/applications",
    "method": "submitJobApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job Board API:Job Applications",
    "typeScriptTag": "jobBoardApi:jobApplications",
    "description": "Submit a job application",
    "parameters": [
      {
        "name": "boardId",
        "schema": "integer",
        "required": true,
        "description": "Job Board Id",
        "example": 0
      },
      {
        "name": "adId",
        "schema": "integer",
        "required": true,
        "description": "Job Ad Id",
        "example": 0
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
        "name": "salutation",
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
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mobile",
        "schema": "string",
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
        "name": "social",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "employment",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "availability",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "education",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "skillTags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "screening",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobboards/{boardId}/ads/{adId}/applications/{applicationId}/{attachmentType}",
    "method": "submitJobApplicationDocuments",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job Board API:Job Applications",
    "typeScriptTag": "jobBoardApi:jobApplications",
    "description": "Submit job application documents",
    "parameters": [
      {
        "name": "boardId",
        "schema": "integer",
        "required": true,
        "description": "Job Board Id",
        "example": 0
      },
      {
        "name": "adId",
        "schema": "integer",
        "required": true,
        "description": "Job Ad Id",
        "example": 0
      },
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "Job Application Id",
        "example": 0
      },
      {
        "name": "attachmentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ATTACHMENTTYPE"
      },
      {
        "name": "fileData",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILEDATA"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobs",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job API:Jobs",
    "typeScriptTag": "jobApi:jobs",
    "description": "Find jobs",
    "parameters": [
      {
        "name": "jobId",
        "schema": "array",
        "description": "Job Id"
      },
      {
        "name": "jobTitle",
        "schema": "string",
        "description": "Job title"
      },
      {
        "name": "companyCompanyId",
        "schema": "array",
        "description": "Companies by Id"
      },
      {
        "name": "companyName",
        "schema": "string",
        "description": "Company name"
      },
      {
        "name": "companyId",
        "schema": "array",
        "description": "Alias for company.companyId"
      },
      {
        "name": "contactId",
        "schema": "array",
        "description": "Contact Id"
      },
      {
        "name": "partnerActionActionId",
        "schema": "array",
        "description": "Unique identifier for partner actions"
      },
      {
        "name": "partnerActionReference",
        "schema": "array",
        "description": "Partner supplied unique reference for the action"
      },
      {
        "name": "partnerActionStage",
        "schema": "array",
        "description": "Include partner actions at a specific stage"
      },
      {
        "name": "partnerActionSubmittedAt",
        "schema": "array",
        "description": "Search for entities submitted to an action at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "statusId",
        "schema": "array",
        "description": "Job status"
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": "Search for active/open jobs"
      },
      {
        "name": "userFavourite",
        "schema": "boolean",
        "description": "Search for the user's favourite jobs"
      },
      {
        "name": "folderId",
        "schema": "array",
        "description": "Search in specific folders"
      },
      {
        "name": "userId",
        "schema": "array",
        "description": "User Id - search for jobs by owner or associated recruiter"
      },
      {
        "name": "ownerUserId",
        "schema": "array",
        "description": "User Id - search for jobs by owner"
      },
      {
        "name": "recruiterUserId",
        "schema": "array",
        "description": "User Id - search jobs by associated recruiters"
      },
      {
        "name": "createdBy",
        "schema": "array",
        "description": "User Id - search for jobs created by the specified user(https://api.jobadder.com/v2/docs"
      },
      {
        "name": "createdAt",
        "schema": "array",
        "description": "Search for jobs created at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "updatedBy",
        "schema": "array",
        "description": "User Id - search for jobs last updated by the specified user(https://api.jobadder.com/v2/docs"
      },
      {
        "name": "updatedAt",
        "schema": "array",
        "description": "Search for jobs updated at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "closedBy",
        "schema": "array",
        "description": "User Id - search for jobs last closed by the specified user(https://api.jobadder.com/v2/docs"
      },
      {
        "name": "closedAt",
        "schema": "array",
        "description": "Search for jobs closed at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "Sort the results by one or multiple fields, prefix with \"-\" to sort descending.<br />\r\nFields available for sorting are: jobTitle, status.name, createdAt, updatedAt, closedAt"
      },
      {
        "name": "fields",
        "schema": "array",
        "description": "Additional fields to include with the results.\r\nFields available to include are: recruiters, statistics, partnerActions"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Embed related resources.<br />\r\nResources available to embed are: self, notes, applications"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/jobs",
    "method": "createJobPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job API:Jobs",
    "typeScriptTag": "jobApi:jobs",
    "description": "Add a job",
    "parameters": [
      {
        "name": "jobTitle",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOBTITLE"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "contactId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "jobDescription",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "statusId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "userFavourite",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "category",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "location",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "workplaceAddressId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "start",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "duration",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "workTypeId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "salary",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "fee",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "numberOfJobs",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "source",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "skillTags",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "ownerUserId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "recruiterUserId",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobs/{jobId}",
    "method": "getJobById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job API:Jobs",
    "typeScriptTag": "jobApi:jobs",
    "description": "Get a job",
    "parameters": [
      {
        "name": "jobId",
        "schema": "integer",
        "required": true,
        "description": "Job Id",
        "example": 0
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Embed related resources.<br />\r\nResources available to embed are: applications, notes"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Requested job was not found"
      }
    ]
  },
  {
    "url": "/jobs/{jobId}",
    "method": "updateJobById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Job API:Jobs",
    "typeScriptTag": "jobApi:jobs",
    "description": "Update a job",
    "parameters": [
      {
        "name": "jobId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "jobTitle",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOBTITLE"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "contactId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "jobDescription",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "statusId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "userFavourite",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "category",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "location",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "workplaceAddressId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "start",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "duration",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "workTypeId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "salary",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "fee",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "numberOfJobs",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "source",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "skillTags",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "ownerUserId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "recruiterUserId",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Job was successfully updated"
      },
      {
        "statusCode": "404",
        "description": "Job was not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobs/{jobId}/applications",
    "method": "getJobApplications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job API:Job Applications",
    "typeScriptTag": "jobApi:jobApplications",
    "description": "Get job applications",
    "parameters": [
      {
        "name": "jobId",
        "schema": "integer",
        "required": true,
        "description": "Job Id",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />Setting to 0 will return only the total count of matching resources."
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
    "url": "/jobs/{jobId}/applications",
    "method": "addCandidatesToJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job API:Job Applications",
    "typeScriptTag": "jobApi:jobApplications",
    "description": "Add candidates to a job",
    "parameters": [
      {
        "name": "jobId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "candidateId",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "source",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobs/{jobId}/applications/active",
    "method": "getActive",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job API:Job Applications",
    "typeScriptTag": "jobApi:jobApplications",
    "description": "Get active job applications",
    "parameters": [
      {
        "name": "jobId",
        "schema": "integer",
        "required": true,
        "description": "Job Id",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />Setting to 0 will return only the total count of matching resources."
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
    "url": "/jobs/{jobId}/applications/submit",
    "method": "submitCandidate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job API:Job Applications",
    "typeScriptTag": "jobApi:jobApplications",
    "description": "Submit a candidate to an evergreen job",
    "parameters": [
      {
        "name": "jobId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "source",
        "schema": "string",
        "required": false,
        "description": ""
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
        "name": "salutation",
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
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mobile",
        "schema": "string",
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
        "name": "social",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "employment",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "availability",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "education",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "skillTags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "screening",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "object",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobs/{jobId}/attachments",
    "method": "find",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job API:Attachments",
    "typeScriptTag": "jobApi:attachments",
    "description": "Find attachments",
    "parameters": [
      {
        "name": "jobId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "type",
        "schema": "array",
        "description": "Attachment types to include"
      },
      {
        "name": "latest",
        "schema": "boolean",
        "description": "Find the latest version of each attachment type"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/jobs/{jobId}/attachments/{attach}",
    "method": "getAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job API:Attachments",
    "typeScriptTag": "jobApi:attachments",
    "description": "Get an attachment",
    "parameters": [
      {
        "name": "jobId",
        "schema": "integer",
        "required": true,
        "description": "Job Id",
        "example": 0
      },
      {
        "name": "attach",
        "schema": "integer",
        "required": true,
        "description": "Attachment Id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Requested job attachment was not found"
      }
    ]
  },
  {
    "url": "/jobs/{jobId}/attachments/{attach}",
    "method": "addSingleAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job API:Attachments",
    "typeScriptTag": "jobApi:attachments",
    "description": "Add a single attachment",
    "parameters": [
      {
        "name": "jobId",
        "schema": "integer",
        "required": true,
        "description": "Job Id",
        "example": 0
      },
      {
        "name": "attach",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ATTACH"
      },
      {
        "name": "fileData",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILEDATA"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Job was not found"
      }
    ]
  },
  {
    "url": "/jobs/{jobId}/attachments/{attach}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Job API:Attachments",
    "typeScriptTag": "jobApi:attachments",
    "description": "Update attachment details",
    "parameters": [
      {
        "name": "jobId",
        "schema": "integer",
        "required": true,
        "description": "Job Id",
        "example": 0
      },
      {
        "name": "attach",
        "schema": "integer",
        "required": true,
        "description": "Attachment Id",
        "example": 0
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "category",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expiry",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      },
      {
        "statusCode": "404",
        "description": "Attachment was not found"
      }
    ]
  },
  {
    "url": "/jobs/{jobId}/submissions",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job API:Submissions",
    "typeScriptTag": "jobApi:submissions",
    "description": "Get all submissions",
    "parameters": [
      {
        "name": "jobId",
        "schema": "integer",
        "required": true,
        "description": "Job Id",
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
    "url": "/jobs/{jobId}/placements",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job API:Placements",
    "typeScriptTag": "jobApi:placements",
    "description": "Get all placements",
    "parameters": [
      {
        "name": "jobId",
        "schema": "integer",
        "required": true,
        "description": "Job Id",
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
    "url": "/jobs/{jobId}/placements/approved",
    "method": "getApprovedPlacements",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job API:Placements",
    "typeScriptTag": "jobApi:placements",
    "description": "Get approved placements",
    "parameters": [
      {
        "name": "jobId",
        "schema": "integer",
        "required": true,
        "description": "Job Id",
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
    "url": "/jobs/{jobId}/status",
    "method": "updateStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Job API:Jobs",
    "typeScriptTag": "jobApi:jobs",
    "description": "Set a job status",
    "parameters": [
      {
        "name": "jobId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "statusId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "note",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Job status was successfully updated"
      },
      {
        "statusCode": "202",
        "description": "Job status already assigned"
      },
      {
        "statusCode": "404",
        "description": "Job was not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobs/{jobId}/notes",
    "method": "getJobNotes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job API:Notes",
    "typeScriptTag": "jobApi:notes",
    "description": "Get job notes",
    "parameters": [
      {
        "name": "jobId",
        "schema": "integer",
        "required": true,
        "description": "Job Id",
        "example": 0
      },
      {
        "name": "noteId",
        "schema": "array",
        "description": "Note Id"
      },
      {
        "name": "type",
        "schema": "array",
        "description": "Note type"
      },
      {
        "name": "reference",
        "schema": "array",
        "description": "Reference value used to identify a note or group of notes"
      },
      {
        "name": "createdAt",
        "schema": "array",
        "description": "Search for notes created at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "updatedAt",
        "schema": "array",
        "description": "Search for notes updated at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "Sort the results by one or multiple fields, prefix with \"-\" to sort descending.<br />\r\nFields available for sorting are: type, createdAt, updatedAt"
      },
      {
        "name": "fields",
        "schema": "array",
        "description": "Additional fields to include with the results.<br />\r\nFields available to include are: text"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/jobs/{jobId}/notes",
    "method": "addNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job API:Notes",
    "typeScriptTag": "jobApi:notes",
    "description": "Add a note",
    "parameters": [
      {
        "name": "jobId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEXT"
      },
      {
        "name": "applicationId",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "createdBy",
        "schema": "object",
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
        "statusCode": "404",
        "description": "Job was not found"
      }
    ]
  },
  {
    "url": "/jobs/{jobId}/activities",
    "method": "getJobActivities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job API:Activities",
    "typeScriptTag": "jobApi:activities",
    "description": "Get job activities",
    "parameters": [
      {
        "name": "jobId",
        "schema": "integer",
        "required": true,
        "description": "Job Id",
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
    "url": "/jobs/{jobId}/activities",
    "method": "addJobActivity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job API:Activities",
    "typeScriptTag": "jobApi:activities",
    "description": "Add a job activity",
    "parameters": [
      {
        "name": "jobId",
        "schema": "integer",
        "required": true,
        "description": "Job Id",
        "example": 0
      },
      {
        "name": "activitySettingId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "statusId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "answers",
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
        "statusCode": "404",
        "description": "Job was not found"
      }
    ]
  },
  {
    "url": "/jobs/{jobId}/activities/{activityId}",
    "method": "getActivity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job API:Activities",
    "typeScriptTag": "jobApi:activities",
    "description": "Get a job activity",
    "parameters": [
      {
        "name": "jobId",
        "schema": "integer",
        "required": true,
        "description": "Job Id",
        "example": 0
      },
      {
        "name": "activityId",
        "schema": "integer",
        "required": true,
        "description": "Activity Id",
        "example": 0
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
      }
    ]
  },
  {
    "url": "/jobs/{jobId}/invoices",
    "method": "getJobInvoices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job API:Invoices",
    "typeScriptTag": "jobApi:invoices",
    "description": "Get job invoices",
    "parameters": [
      {
        "name": "jobId",
        "schema": "integer",
        "required": true,
        "description": "Job Id",
        "example": 0
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
      }
    ]
  },
  {
    "url": "/jobs/{jobId}/invoices/{invoiceId}",
    "method": "getJobInvoice",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job API:Invoices",
    "typeScriptTag": "jobApi:invoices",
    "description": "Get a job invoice",
    "parameters": [
      {
        "name": "jobId",
        "schema": "integer",
        "required": true,
        "description": "Job Id",
        "example": 0
      },
      {
        "name": "invoiceId",
        "schema": "integer",
        "required": true,
        "description": "Invoice Id",
        "example": 0
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
      }
    ]
  },
  {
    "url": "/jobs/{jobId}/usertasks",
    "method": "addTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job API:UserTasks",
    "typeScriptTag": "jobApi:userTasks",
    "description": "Add a job user task",
    "parameters": [
      {
        "name": "jobId",
        "schema": "integer",
        "required": true,
        "description": "Job Id",
        "example": 0
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "startAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "allDay",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "assignees",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "candidates",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "jobs",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "placements",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "companies",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "contacts",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "applications",
        "schema": "array",
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
        "statusCode": "404",
        "description": "Job was not found"
      }
    ]
  },
  {
    "url": "/jobs/{jobId}/usertasks/{taskId}",
    "method": "getTask",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job API:UserTasks",
    "typeScriptTag": "jobApi:userTasks",
    "description": "Get a job user task",
    "parameters": [
      {
        "name": "jobId",
        "schema": "integer",
        "required": true,
        "description": "Job Id",
        "example": 0
      },
      {
        "name": "taskId",
        "schema": "integer",
        "required": true,
        "description": "Task Id",
        "example": 0
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
      }
    ]
  },
  {
    "url": "/jobs/{jobId}/usertasks/{taskId}",
    "method": "updateTask",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Job API:UserTasks",
    "typeScriptTag": "jobApi:userTasks",
    "description": "Update a job user task",
    "parameters": [
      {
        "name": "jobId",
        "schema": "integer",
        "required": true,
        "description": "Job Id",
        "example": 0
      },
      {
        "name": "taskId",
        "schema": "integer",
        "required": true,
        "description": "Task Id",
        "example": 0
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "startAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "allDay",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "assignees",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "candidates",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "jobs",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "placements",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "companies",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "contacts",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "applications",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Job user task was successfully updated"
      },
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Job user task was not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobs/{jobOrderId}/ratecard",
    "method": "removeRateCardId",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Job API:Payroll Billing",
    "typeScriptTag": "jobApi:payrollBilling",
    "description": "Remove the Rate Card ID for passed Job Order ID",
    "parameters": [
      {
        "name": "jobOrderId",
        "schema": "integer",
        "required": true,
        "description": "Job Order Id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      },
      {
        "statusCode": "404",
        "description": "Requested job rate card id was not found"
      }
    ]
  },
  {
    "url": "/jobs/{jobOrderId}/ratecard",
    "method": "getRateCardId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job API:Payroll Billing",
    "typeScriptTag": "jobApi:payrollBilling",
    "description": "Get the Rate Card ID for passed Job Order ID",
    "parameters": [
      {
        "name": "jobOrderId",
        "schema": "integer",
        "required": true,
        "description": "Job Order Id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Requested job rate card id was not found"
      }
    ]
  },
  {
    "url": "/jobs/{jobOrderId}/ratecard/{rateCardId}",
    "method": "addRateCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job API:Payroll Billing",
    "typeScriptTag": "jobApi:payrollBilling",
    "description": "Add the Rate Card ID for passed Job Order ID",
    "parameters": [
      {
        "name": "jobOrderId",
        "schema": "integer",
        "required": true,
        "description": "Job Order Id",
        "example": 0
      },
      {
        "name": "rateCardId",
        "schema": "integer",
        "required": true,
        "description": "Rate Card ID generated by RateCalc",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Job Order was not found"
      }
    ]
  },
  {
    "url": "/jobs/{jobOrderId}/ratecard/{rateCardId}",
    "method": "updateRateCardId",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Job API:Payroll Billing",
    "typeScriptTag": "jobApi:payrollBilling",
    "description": "Update the Rate Card ID for passed Job Order ID",
    "parameters": [
      {
        "name": "jobOrderId",
        "schema": "integer",
        "required": true,
        "description": "Job Order Id",
        "example": 0
      },
      {
        "name": "rateCardId",
        "schema": "integer",
        "required": true,
        "description": "Rate Card ID generated by RateCalc",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Job Order Rate Card was not found"
      }
    ]
  },
  {
    "url": "/jobs/activities",
    "method": "findJobActivities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job API:Activities",
    "typeScriptTag": "jobApi:activities",
    "description": "Find job activities",
    "parameters": [
      {
        "name": "createdAt",
        "schema": "array",
        "description": "Search for activities performed at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "updatedAt",
        "schema": "array",
        "description": "Search for activities updated at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "includeDetails",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/jobs/activitysettings",
    "method": "getAllActivitySettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job API:Activities",
    "typeScriptTag": "jobApi:activities",
    "description": "Get all job activity settings definitions",
    "parameters": [
      {
        "name": "query",
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
    "url": "/jobs/activitysettings/{settingId}",
    "method": "getActivitySettingDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job API:Activities",
    "typeScriptTag": "jobApi:activities",
    "description": "Get job activity setting with details",
    "parameters": [
      {
        "name": "settingId",
        "schema": "integer",
        "required": true,
        "description": "Activity Setting Id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Requested job activity settings were not found"
      }
    ]
  },
  {
    "url": "/jobs/deleted",
    "method": "getDeletedJobs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job API:Jobs",
    "typeScriptTag": "jobApi:jobs",
    "description": "Recently deleted jobs",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobs/fields/custom",
    "method": "customFieldsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job API:Lists",
    "typeScriptTag": "jobApi:lists",
    "description": "Get all custom fields",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobs/fields/custom/{fieldId}",
    "method": "customFieldGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job API:Lists",
    "typeScriptTag": "jobApi:lists",
    "description": "Get a custom field",
    "parameters": [
      {
        "name": "fieldId",
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
      },
      {
        "statusCode": "404",
        "description": "Requested job custom field definition was not found"
      }
    ]
  },
  {
    "url": "/jobs/fields/custom/custom/{fieldId}",
    "method": "modifyFieldValues",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Job API:Lists",
    "typeScriptTag": "jobApi:lists",
    "description": "Modify custom field list values",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "values",
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
        "statusCode": "404",
        "description": "Requested job custom field definition was not found"
      }
    ]
  },
  {
    "url": "/jobs/lists/attachmentcategory",
    "method": "getAllAttachmentCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job API:Attachments",
    "typeScriptTag": "jobApi:attachments",
    "description": "Get all attachment categories",
    "parameters": [
      {
        "name": "type",
        "schema": "array",
        "description": "Optionally filter to specific attachment types"
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
    "url": "/jobs/lists/notetype",
    "method": "getAllNoteTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job API:Notes",
    "typeScriptTag": "jobApi:notes",
    "description": "Get all note types",
    "parameters": [
      {
        "name": "name",
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
    "url": "/jobs/lists/source",
    "method": "getAllSources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job API:Lists",
    "typeScriptTag": "jobApi:lists",
    "description": "Get all job sources",
    "parameters": [
      {
        "name": "name",
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
    "url": "/jobs/lists/status",
    "method": "getAllStatusDefinitions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job API:Lists",
    "typeScriptTag": "jobApi:lists",
    "description": "Get all status definitions",
    "parameters": [
      {
        "name": "statusId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "default",
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
    "url": "/jobs/lists/status/{statusId}",
    "method": "getStatusDefinition",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job API:Lists",
    "typeScriptTag": "jobApi:lists",
    "description": "Get a status definition",
    "parameters": [
      {
        "name": "statusId",
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/requisitions",
    "method": "findRequisitions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Requisition API:Requisitions",
    "typeScriptTag": "requisitionApi:requisitions",
    "description": "Find requisitions",
    "parameters": [
      {
        "name": "requisitionId",
        "schema": "array",
        "description": "Requisition Id"
      },
      {
        "name": "companyId",
        "schema": "array",
        "description": "Company Id"
      },
      {
        "name": "status",
        "schema": "array",
        "description": ""
      },
      {
        "name": "hiringManagerContactId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "hiringManagerName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "approverContactId",
        "schema": "array",
        "description": "Find requisitions by approver contact id"
      },
      {
        "name": "approverName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "approverPending",
        "schema": "boolean",
        "description": "Find requisitions pending approval by contacts specified in approver.contactId"
      },
      {
        "name": "userId",
        "schema": "array",
        "description": "User Id - search for requisitions by owner or associated recruiter"
      },
      {
        "name": "ownerUserId",
        "schema": "array",
        "description": "User Id - search for requisitions by owner"
      },
      {
        "name": "recruiterUserId",
        "schema": "array",
        "description": "User Id - search for requisitions by associated recruiters"
      },
      {
        "name": "createdAt",
        "schema": "array",
        "description": "Search for jobs created at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "updatedAt",
        "schema": "array",
        "description": "Search for jobs updated at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "Sort the results by one or multiple fields, prefix with \"-\" to sort descending.<br />\r\nFields available for sorting are: jobTitle, status, createdAt, updatedAt"
      },
      {
        "name": "fields",
        "schema": "array",
        "description": "Additional fields to include with the results.<br />\r\nFields available to include are: workflow"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Linked resources to embed in the results<br />\r\nResources available are: self, notes"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/requisitions",
    "method": "addNewRequisition",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Requisition API:Requisitions",
    "typeScriptTag": "requisitionApi:requisitions",
    "description": "Add a requisition",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "jobTitle",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOBTITLE"
      },
      {
        "name": "jobDescription",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "category",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "location",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "workplaceAddressId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "start",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "duration",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "workTypeId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "salary",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "numberOfJobs",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "source",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "workflowId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "recruiterUserId",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "formID",
        "schema": "integer",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/requisitions/{requisitionId}",
    "method": "removeRequisitionById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Requisition API:Requisitions",
    "typeScriptTag": "requisitionApi:requisitions",
    "description": "Remove a requisition",
    "parameters": [
      {
        "name": "requisitionId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      }
    ]
  },
  {
    "url": "/requisitions/{requisitionId}",
    "method": "getRequisitionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Requisition API:Requisitions",
    "typeScriptTag": "requisitionApi:requisitions",
    "description": "Get a requisition",
    "parameters": [
      {
        "name": "requisitionId",
        "schema": "integer",
        "required": true,
        "description": "Requisition Id",
        "example": 0
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Embed related resources.<br />\r\nResources available to embed are: notes"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Requested requisition was not found"
      }
    ]
  },
  {
    "url": "/requisitions/{requisitionId}",
    "method": "updateRequisitionById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Requisition API:Requisitions",
    "typeScriptTag": "requisitionApi:requisitions",
    "description": "Update a requisition",
    "parameters": [
      {
        "name": "requisitionId",
        "schema": "integer",
        "required": true,
        "description": "Requisition Id",
        "example": 0
      },
      {
        "name": "contactId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "jobTitle",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOBTITLE"
      },
      {
        "name": "jobDescription",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "category",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "location",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "workplaceAddressId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "start",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "duration",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "workTypeId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "salary",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "numberOfJobs",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "source",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "workflowId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "recruiterUserId",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "formID",
        "schema": "integer",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      }
    ]
  },
  {
    "url": "/requisitions/{requisitionId}/attachments",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Requisition API:Attachments",
    "typeScriptTag": "requisitionApi:attachments",
    "description": "Get all attachments",
    "parameters": [
      {
        "name": "requisitionId",
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
    "url": "/requisitions/{requisitionId}/attachments/{attachmentId}",
    "method": "removeAttachment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Requisition API:Attachments",
    "typeScriptTag": "requisitionApi:attachments",
    "description": "Remove an attachment",
    "parameters": [
      {
        "name": "requisitionId",
        "schema": "integer",
        "required": true,
        "description": "Requisition Id",
        "example": 0
      },
      {
        "name": "attachmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ATTACHMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      },
      {
        "statusCode": "404",
        "description": "Requisition attachment was not found"
      }
    ]
  },
  {
    "url": "/requisitions/{requisitionId}/attachments/{attachmentId}",
    "method": "getAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Requisition API:Attachments",
    "typeScriptTag": "requisitionApi:attachments",
    "description": "Get an attachment",
    "parameters": [
      {
        "name": "requisitionId",
        "schema": "integer",
        "required": true,
        "description": "Requisition Id",
        "example": 0
      },
      {
        "name": "attachmentId",
        "schema": "string",
        "required": true,
        "description": "Attachment Id",
        "example": "ATTACHMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Requisition attachment was not found"
      }
    ]
  },
  {
    "url": "/requisitions/{requisitionId}/attachments/{attachmentType}",
    "method": "addAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Requisition API:Attachments",
    "typeScriptTag": "requisitionApi:attachments",
    "description": "Add an attachment",
    "parameters": [
      {
        "name": "requisitionId",
        "schema": "integer",
        "required": true,
        "description": "Requisition Id",
        "example": 0
      },
      {
        "name": "attachmentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ATTACHMENTTYPE"
      },
      {
        "name": "fileData",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILEDATA"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Created"
      },
      {
        "statusCode": "404",
        "description": "Requisition was not found"
      }
    ]
  },
  {
    "url": "/requisitions/{requisitionId}/approve",
    "method": "requisitionApprove",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Requisition API:Approval",
    "typeScriptTag": "requisitionApi:approval",
    "description": "Approve a requisition",
    "parameters": [
      {
        "name": "requisitionId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "approverId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "message",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "404",
        "description": "Requisition was not found"
      }
    ]
  },
  {
    "url": "/requisitions/{requisitionId}/history",
    "method": "getHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Requisition API:Approval",
    "typeScriptTag": "requisitionApi:approval",
    "description": "Get approval history",
    "parameters": [
      {
        "name": "requisitionId",
        "schema": "integer",
        "required": true,
        "description": "Requisition Id",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
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
    "url": "/requisitions/{requisitionId}/reject",
    "method": "rejectRequisition",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Requisition API:Approval",
    "typeScriptTag": "requisitionApi:approval",
    "description": "Reject a requisition",
    "parameters": [
      {
        "name": "requisitionId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "approverId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "reason",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "404",
        "description": "Requisition was not found"
      }
    ]
  },
  {
    "url": "/requisitions/{requisitionId}/submit",
    "method": "submitForApproval",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Requisition API:Approval",
    "typeScriptTag": "requisitionApi:approval",
    "description": "Submit a requisition for approval",
    "parameters": [
      {
        "name": "requisitionId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "404",
        "description": "Requisition was not found"
      }
    ]
  },
  {
    "url": "/requisitions/{requisitionId}/notes",
    "method": "getNotes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Requisition API:Notes",
    "typeScriptTag": "requisitionApi:notes",
    "description": "Get requisition notes",
    "parameters": [
      {
        "name": "requisitionId",
        "schema": "integer",
        "required": true,
        "description": "Requisition Id",
        "example": 0
      },
      {
        "name": "noteId",
        "schema": "array",
        "description": "Note Id"
      },
      {
        "name": "type",
        "schema": "array",
        "description": "Note type"
      },
      {
        "name": "reference",
        "schema": "array",
        "description": "Reference value used to identify a note or group of notes"
      },
      {
        "name": "createdAt",
        "schema": "array",
        "description": "Search for notes created at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "updatedAt",
        "schema": "array",
        "description": "Search for notes updated at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "Sort the results by one or multiple fields, prefix with \"-\" to sort descending.<br />\r\nFields available for sorting are: type, createdAt, updatedAt"
      },
      {
        "name": "fields",
        "schema": "array",
        "description": "Additional fields to include with the results.<br />\r\nFields available to include are: text"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/requisitions/{requisitionId}/notes",
    "method": "addNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Requisition API:Notes",
    "typeScriptTag": "requisitionApi:notes",
    "description": "Add a requisition note",
    "parameters": [
      {
        "name": "requisitionId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEXT"
      },
      {
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "createdBy",
        "schema": "object",
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
        "statusCode": "404",
        "description": "Requisition was not found"
      }
    ]
  },
  {
    "url": "/requisitions/forms",
    "method": "getAllFormsAndFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Requisition API:Notes",
    "typeScriptTag": "requisitionApi:notes",
    "description": "Get all requisition forms and fields",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/requisitions/fields/custom",
    "method": "getAllCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Requisition API:Lists",
    "typeScriptTag": "requisitionApi:lists",
    "description": "Get all custom fields",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/requisitions/fields/custom/{fieldId}",
    "method": "getFieldById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Requisition API:Lists",
    "typeScriptTag": "requisitionApi:lists",
    "description": "Get a custom field",
    "parameters": [
      {
        "name": "fieldId",
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
      },
      {
        "statusCode": "404",
        "description": "Requested requisition custom field definition was not found"
      }
    ]
  },
  {
    "url": "/jobads",
    "method": "find",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Ad API:Job Ads",
    "typeScriptTag": "jobAdApi:jobAds",
    "description": "Find job ads",
    "parameters": [
      {
        "name": "partnerActionActionId",
        "schema": "array",
        "description": "Unique identifier for partner actions"
      },
      {
        "name": "partnerActionReference",
        "schema": "array",
        "description": "Partner supplied unique reference for the action"
      },
      {
        "name": "partnerActionStage",
        "schema": "array",
        "description": "Include partner actions at a specific stage"
      },
      {
        "name": "partnerActionSubmittedAt",
        "schema": "array",
        "description": "Search for entities submitted to an action at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "fields",
        "schema": "array",
        "description": "Additional fields to include with the results.\r\nFields available to include are: self,applications,partnerActions"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Embed related resources.<br />\r\nResources available to embed are: self, applications"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/jobads",
    "method": "createDraftJobAd",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job Ad API:Job Ads",
    "typeScriptTag": "jobAdApi:jobAds",
    "description": "Add a draft job ad",
    "parameters": [
      {
        "name": "summary",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bulletPoints",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "jobId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ownerUserId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobads/{adId}",
    "method": "getJobAd",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Ad API:Job Ads",
    "typeScriptTag": "jobAdApi:jobAds",
    "description": "Get a job ad",
    "parameters": [
      {
        "name": "adId",
        "schema": "integer",
        "required": true,
        "description": "Job Ad Id",
        "example": 0
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Embed related resources.<br />\r\nResources available to embed are: applications"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Requested job ad was not found"
      }
    ]
  },
  {
    "url": "/jobads/{adId}",
    "method": "updateDraftJobAd",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Job Ad API:Job Ads",
    "typeScriptTag": "jobAdApi:jobAds",
    "description": "Update a draft job ad",
    "parameters": [
      {
        "name": "adId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "summary",
        "schema": "string",
        "description": ""
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
        "name": "reference",
        "schema": "string",
        "description": ""
      },
      {
        "name": "bulletPoints",
        "schema": "array",
        "description": ""
      },
      {
        "name": "jobId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "ownerUserId",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "204",
        "description": "NoContent"
      }
    ]
  },
  {
    "url": "/jobads/{adId}/applications",
    "method": "listApplications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Ad API:Job Applications",
    "typeScriptTag": "jobAdApi:jobApplications",
    "description": "Get job applications",
    "parameters": [
      {
        "name": "adId",
        "schema": "integer",
        "required": true,
        "description": "Job Ad Id",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/jobads/{adId}/applications/active",
    "method": "getActiveJobApplications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Ad API:Job Applications",
    "typeScriptTag": "jobAdApi:jobApplications",
    "description": "Get active job applications",
    "parameters": [
      {
        "name": "adId",
        "schema": "integer",
        "required": true,
        "description": "Job Ad Id",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/candidates",
    "method": "getCandidates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Candidates",
    "typeScriptTag": "candidateApi:candidates",
    "description": "Find candidates",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "array",
        "description": "Candidate Id"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "Candidate name"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "Candidate email"
      },
      {
        "name": "phone",
        "schema": "string",
        "description": "Candidate phone or mobile number"
      },
      {
        "name": "currentPosition",
        "schema": "string",
        "description": "Current Position"
      },
      {
        "name": "city",
        "schema": "string",
        "description": "City"
      },
      {
        "name": "state",
        "schema": "string",
        "description": "State"
      },
      {
        "name": "location",
        "schema": "string",
        "description": "Location (city and/or state)"
      },
      {
        "name": "dateOfBirth",
        "schema": "string",
        "description": "Candidate date of birth available ([ISO full-date](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6))"
      },
      {
        "name": "keywords",
        "schema": "string",
        "description": "Search for key-words within the latest candidate resume"
      },
      {
        "name": "partnerActionActionId",
        "schema": "array",
        "description": "Unique identifier for partner actions"
      },
      {
        "name": "partnerActionReference",
        "schema": "array",
        "description": "Partner supplied unique reference for the action"
      },
      {
        "name": "partnerActionStage",
        "schema": "array",
        "description": "Include partner actions at a specific stage"
      },
      {
        "name": "partnerActionSubmittedAt",
        "schema": "array",
        "description": "Search for entities submitted to an action at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "statusId",
        "schema": "array",
        "description": "Candidate status"
      },
      {
        "name": "recruiterUserId",
        "schema": "array",
        "description": "User Id - search candidates by associated recruiters"
      },
      {
        "name": "folderId",
        "schema": "array",
        "description": "Search in specific folders"
      },
      {
        "name": "createdAt",
        "schema": "array",
        "description": "Search for candidates created at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "updatedAt",
        "schema": "array",
        "description": "Search for candidates updated at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "Sort the results by one or multiple fields, prefix with \"-\" to sort descending.<br />\r\nDefault sort order is by candidateID in ascending order\r\nFields available for sorting are: firstName, lastName, status.name, candidateId, createdAt, updatedAt"
      },
      {
        "name": "fields",
        "schema": "array",
        "description": "Additional fields to include with the results.\r\nFields available to include are: recruiters, statistics"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Embed related resources.<br />\r\nResources available to embed are: self, applications, placements, skills, notes"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/candidates",
    "method": "addNewCandidate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate API:Candidates",
    "typeScriptTag": "candidateApi:candidates",
    "description": "Add a candidate",
    "parameters": [
      {
        "name": "xAllowDuplicates",
        "schema": "string",
        "description": "Duplicate override code from the header of an earlier 409 response"
      },
      {
        "name": "summary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mobile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "salutation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "statusId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "rating",
        "schema": "string",
        "description": ""
      },
      {
        "name": "source",
        "schema": "string",
        "description": ""
      },
      {
        "name": "seeking",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unsubscribed",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "dateOfBirth",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emergencyContact",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emergencyPhone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "social",
        "schema": "object",
        "description": ""
      },
      {
        "name": "address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "skillTags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "employment",
        "schema": "object",
        "description": ""
      },
      {
        "name": "availability",
        "schema": "object",
        "description": ""
      },
      {
        "name": "education",
        "schema": "array",
        "description": ""
      },
      {
        "name": "custom",
        "schema": "array",
        "description": ""
      },
      {
        "name": "recruiterUserId",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/candidates/{candidateId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Candidates",
    "typeScriptTag": "candidateApi:candidates",
    "description": "Get a candidate",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Candidate Id",
        "example": 0
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Embed related resources.<br />\r\nResources available to embed are: skills, notes, applications, placements"
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
      }
    ]
  },
  {
    "url": "/candidates/{candidateId}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Candidate API:Candidates",
    "typeScriptTag": "candidateApi:candidates",
    "description": "Update a candidate",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xAllowDuplicates",
        "schema": "string",
        "description": "Duplicate override code from the header of an earlier 409 response"
      },
      {
        "name": "summary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mobile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "salutation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "statusId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "rating",
        "schema": "string",
        "description": ""
      },
      {
        "name": "seeking",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unsubscribed",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "dateOfBirth",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emergencyContact",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emergencyPhone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "social",
        "schema": "object",
        "description": ""
      },
      {
        "name": "address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "skillTags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "employment",
        "schema": "object",
        "description": ""
      },
      {
        "name": "availability",
        "schema": "object",
        "description": ""
      },
      {
        "name": "education",
        "schema": "array",
        "description": ""
      },
      {
        "name": "custom",
        "schema": "array",
        "description": ""
      },
      {
        "name": "recruiterUserId",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Candidate was successfully updated"
      },
      {
        "statusCode": "404",
        "description": "Candidate was not found"
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/candidates/{candidateId}/photo",
    "method": "removePhoto",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Candidate API:Photo",
    "typeScriptTag": "candidateApi:photo",
    "description": "Remove a photo",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Candidate Id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      },
      {
        "statusCode": "404",
        "description": "Candidate was not found"
      }
    ]
  },
  {
    "url": "/candidates/{candidateId}/photo",
    "method": "getImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Photo",
    "typeScriptTag": "candidateApi:photo",
    "description": "Get a photo",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Candidate Id",
        "example": 0
      },
      {
        "name": "w",
        "schema": "integer",
        "description": "Reduce the size of the photo to fit the width specified by w"
      },
      {
        "name": "h",
        "schema": "integer",
        "description": "Reduce the size of the photo to fit the height specified by h"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Requested candidate photo was not found"
      }
    ]
  },
  {
    "url": "/candidates/{candidateId}/photo",
    "method": "getHeaders",
    "httpMethod": HttpMethodsEnum.HEAD,
    "tag": "Candidate API:Photo",
    "typeScriptTag": "candidateApi:photo",
    "description": "Get photo headers",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Candidate Id",
        "example": 0
      },
      {
        "name": "w",
        "schema": "integer",
        "description": "Reduce the size of the photo to fit the width specified by w"
      },
      {
        "name": "h",
        "schema": "integer",
        "description": "Reduce the size of the photo to fit the height specified by h"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "404",
        "description": "Requested candidate photo was not found"
      }
    ]
  },
  {
    "url": "/candidates/{candidateId}/photo",
    "method": "updatePhoto",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Candidate API:Photo",
    "typeScriptTag": "candidateApi:photo",
    "description": "Update a photo",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Candidate Id",
        "example": 0
      },
      {
        "name": "fileData",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILEDATA"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      },
      {
        "statusCode": "404",
        "description": "Candidate was not found"
      }
    ]
  },
  {
    "url": "/candidates/{candidateId}/availability",
    "method": "getAvailability",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Availability",
    "typeScriptTag": "candidateApi:availability",
    "description": "Get availability",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Candidate Id",
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
    "url": "/candidates/{candidateId}/availability/weekly",
    "method": "removeWeeklyAvailability",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Candidate API:Availability",
    "typeScriptTag": "candidateApi:availability",
    "description": "Remove weekly availability",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Candidate Id",
        "example": 0
      },
      {
        "name": "weekOf",
        "schema": "string",
        "required": true,
        "description": "Remove availability for the week (beginning Sunday) containing the specified date",
        "example": "WEEKOF"
      },
      {
        "name": "recurring",
        "schema": "boolean",
        "description": "Remove availability in following weeks. Previous/past recurring schedules will be terminated prior to this schedule, all existing future overlapping schedules will be cancelled."
      },
      {
        "name": "until",
        "schema": "string",
        "description": "Optional end date of repeating availability removal"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      },
      {
        "statusCode": "404",
        "description": "Candidate was not found"
      }
    ]
  },
  {
    "url": "/candidates/{candidateId}/availability/weekly",
    "method": "updateWeeklyAvailability",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Candidate API:Availability",
    "typeScriptTag": "candidateApi:availability",
    "description": "Update weekly availability",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Candidate Id",
        "example": 0
      },
      {
        "name": "weekOf",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WEEKOF"
      },
      {
        "name": "availability",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "recurring",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "until",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "Candidate was not found"
      }
    ]
  },
  {
    "url": "/candidates/{candidateId}/videos",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Videos",
    "typeScriptTag": "candidateApi:videos",
    "description": "Get all videos",
    "parameters": [
      {
        "name": "candidateId",
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
    "url": "/candidates/{candidateId}/videos/{videoType}",
    "method": "getRecentVideo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Videos",
    "typeScriptTag": "candidateApi:videos",
    "description": "Get a recent video",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "videoType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VIDEOTYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Requested candidate video was not found"
      }
    ]
  },
  {
    "url": "/candidates/{candidateId}/videos/{videoType}",
    "method": "addNewVideo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate API:Videos",
    "typeScriptTag": "candidateApi:videos",
    "description": "Add a video",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Candidate Id",
        "example": 0
      },
      {
        "name": "videoType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VIDEOTYPE"
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "reference",
        "schema": "string",
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
        "statusCode": "404",
        "description": "Candidate was not found"
      }
    ]
  },
  {
    "url": "/candidates/{candidateId}/skills",
    "method": "getCandidateSkills",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Skills",
    "typeScriptTag": "candidateApi:skills",
    "description": "Get skills",
    "parameters": [
      {
        "name": "candidateId",
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
    "url": "/candidates/{candidateId}/skills",
    "method": "removeSkill",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate API:Skills",
    "typeScriptTag": "candidateApi:skills",
    "description": "Remove skills",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "categories",
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
    "url": "/candidates/{candidateId}/skills",
    "method": "updateCandidateSkills",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Candidate API:Skills",
    "typeScriptTag": "candidateApi:skills",
    "description": "Update skills",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "categories",
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
    "url": "/candidates/{candidateId}/skills/{categoryId}",
    "method": "removeCategory",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Candidate API:Skills",
    "typeScriptTag": "candidateApi:skills",
    "description": "Remove a category",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "categoryId",
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
    "url": "/candidates/{candidateId}/attachments",
    "method": "findCandidateAttachments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Attachments",
    "typeScriptTag": "candidateApi:attachments",
    "description": "Find candidate attachments",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "type",
        "schema": "array",
        "description": "Attachment types to include"
      },
      {
        "name": "category",
        "schema": "array",
        "description": "Search by attachment category"
      },
      {
        "name": "latest",
        "schema": "boolean",
        "description": "Find the latest version of each attachment type"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/candidates/{candidateId}/attachments/{attach}",
    "method": "getAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Attachments",
    "typeScriptTag": "candidateApi:attachments",
    "description": "Get an attachment",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Candidate Id",
        "example": 0
      },
      {
        "name": "attach",
        "schema": "integer",
        "required": true,
        "description": "Attachment Id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Requested candidate attachment was not found"
      }
    ]
  },
  {
    "url": "/candidates/{candidateId}/attachments/{attach}",
    "method": "addSingleAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate API:Attachments",
    "typeScriptTag": "candidateApi:attachments",
    "description": "Add a single attachment",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Candidate Id",
        "example": 0
      },
      {
        "name": "attach",
        "schema": "string",
        "required": true,
        "description": "Type of attachment being added",
        "example": "ATTACH"
      },
      {
        "name": "fileData",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILEDATA"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Candidate was not found"
      }
    ]
  },
  {
    "url": "/candidates/{candidateId}/attachments/{attach}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Candidate API:Attachments",
    "typeScriptTag": "candidateApi:attachments",
    "description": "Update attachment details",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Candidate Id",
        "example": 0
      },
      {
        "name": "attach",
        "schema": "integer",
        "required": true,
        "description": "Attachment Id",
        "example": 0
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "category",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expiry",
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
        "statusCode": "404",
        "description": "Attachment was not found"
      }
    ]
  },
  {
    "url": "/candidates/attachments",
    "method": "findAttachments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Attachments",
    "typeScriptTag": "candidateApi:attachments",
    "description": "Find attachments",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "type",
        "schema": "array",
        "description": "Attachment types to include"
      },
      {
        "name": "category",
        "schema": "array",
        "description": "Search by attachment category"
      },
      {
        "name": "createdAt",
        "schema": "array",
        "description": "Search for candidate attachment created at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "updatedAt",
        "schema": "array",
        "description": "Search for candidate attachment updated at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "expiryDate",
        "schema": "array",
        "description": "Search for candidate attachment expiring in the specified date range\r\n([ISO full-date](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date.\r\nSpecify multiple parameters to search for a range."
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Embed related resources.<br />\r\nResources available to embed are: candidate"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/candidates/{candidateId}/floats",
    "method": "getAllFloats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Floats",
    "typeScriptTag": "candidateApi:floats",
    "description": "Get all floats",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Candidate Id",
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
    "url": "/candidates/{candidateId}/applications",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Job Applications",
    "typeScriptTag": "candidateApi:jobApplications",
    "description": "Get job applications",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Candidate Id",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />Setting to 0 will return only the total count of matching resources."
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
    "url": "/candidates/{candidateId}/applications",
    "method": "addCandidateJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate API:Job Applications",
    "typeScriptTag": "candidateApi:jobApplications",
    "description": "Add jobs to a candidate",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "jobId",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "source",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/candidates/{candidateId}/applications/active",
    "method": "listActive",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Job Applications",
    "typeScriptTag": "candidateApi:jobApplications",
    "description": "Get active job applications",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Candidate Id",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />Setting to 0 will return only the total count of matching resources."
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
    "url": "/candidates/{candidateId}/interviews",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Interviews",
    "typeScriptTag": "candidateApi:interviews",
    "description": "Get all Interviews",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Candidate Id",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/candidates/{candidateId}/submissions",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Submissions",
    "typeScriptTag": "candidateApi:submissions",
    "description": "Get all submissions",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Candidate Id",
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
    "url": "/candidates/{candidateId}/placements",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Placements",
    "typeScriptTag": "candidateApi:placements",
    "description": "Get all placements",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Candidate Id",
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
    "url": "/candidates/{candidateId}/placements/approved",
    "method": "getAllApproved",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Placements",
    "typeScriptTag": "candidateApi:placements",
    "description": "Get all approved placements",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Candidate Id",
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
    "url": "/candidates/{candidateId}/status",
    "method": "updateStatusAndNote",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Candidate API:Candidates",
    "typeScriptTag": "candidateApi:candidates",
    "description": "Set a candidate status",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "statusId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "note",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Candidate status was successfully updated"
      },
      {
        "statusCode": "202",
        "description": "Candidate status already assigned"
      },
      {
        "statusCode": "404",
        "description": "Candidate was not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/candidates/{candidateId}/notes",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Notes",
    "typeScriptTag": "candidateApi:notes",
    "description": "Get candidate notes",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Candidate Id",
        "example": 0
      },
      {
        "name": "noteId",
        "schema": "array",
        "description": "Note Id"
      },
      {
        "name": "type",
        "schema": "array",
        "description": "Note type"
      },
      {
        "name": "reference",
        "schema": "array",
        "description": "Reference value used to identify a note or group of notes"
      },
      {
        "name": "createdAt",
        "schema": "array",
        "description": "Search for notes created at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "updatedAt",
        "schema": "array",
        "description": "Search for notes updated at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "Sort the results by one or multiple fields, prefix with \"-\" to sort descending.<br />\r\nFields available for sorting are: type, createdAt, updatedAt"
      },
      {
        "name": "fields",
        "schema": "array",
        "description": "Additional fields to include with the results.<br />\r\nFields available to include are: text"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/candidates/{candidateId}/notes",
    "method": "addNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate API:Notes",
    "typeScriptTag": "candidateApi:notes",
    "description": "Add a note",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Candidate Id",
        "example": 0
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEXT"
      },
      {
        "name": "applicationId",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "createdByIntegration",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "createdBy",
        "schema": "object",
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
        "statusCode": "404",
        "description": "Candidate was not found"
      }
    ]
  },
  {
    "url": "/candidates/{candidateId}/privacy",
    "method": "removeAtRequest",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Candidate API:Privacy",
    "typeScriptTag": "candidateApi:privacy",
    "description": "Remove a candidate at their request",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Candidate Id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      },
      {
        "statusCode": "404",
        "description": "Candidate was not found"
      }
    ]
  },
  {
    "url": "/candidates/{candidateId}/activities",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Activities",
    "typeScriptTag": "candidateApi:activities",
    "description": "Get candidate activities",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Candidate Id",
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
    "url": "/candidates/{candidateId}/activities",
    "method": "addCandidateActivity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate API:Activities",
    "typeScriptTag": "candidateApi:activities",
    "description": "Add a candidate activity",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Candidate Id",
        "example": 0
      },
      {
        "name": "activitySettingId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "statusId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "answers",
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
        "statusCode": "404",
        "description": "Candidate was not found"
      }
    ]
  },
  {
    "url": "/candidates/{candidateId}/activities/{activityId}",
    "method": "getActivity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Activities",
    "typeScriptTag": "candidateApi:activities",
    "description": "Get a candidate activity",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Candidate Id",
        "example": 0
      },
      {
        "name": "activityId",
        "schema": "integer",
        "required": true,
        "description": "Activity Id",
        "example": 0
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
      }
    ]
  },
  {
    "url": "/candidates/{candidateId}/payrollbilling",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Payroll Billing",
    "typeScriptTag": "candidateApi:payrollBilling",
    "description": "Get a candidate payroll billing",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Candidate Id",
        "example": 0
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
      }
    ]
  },
  {
    "url": "/candidates/{candidateId}/usertasks",
    "method": "addTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate API:UserTasks",
    "typeScriptTag": "candidateApi:userTasks",
    "description": "Add a candidate user task",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Candidate Id",
        "example": 0
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "startAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "allDay",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "assignees",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "candidates",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "jobs",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "placements",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "companies",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "contacts",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "applications",
        "schema": "array",
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
        "statusCode": "404",
        "description": "Candidate was not found"
      }
    ]
  },
  {
    "url": "/candidates/{candidateId}/usertasks/{taskId}",
    "method": "getCandidateUserTask",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:UserTasks",
    "typeScriptTag": "candidateApi:userTasks",
    "description": "Get a candidate user task",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Candidate Id",
        "example": 0
      },
      {
        "name": "taskId",
        "schema": "integer",
        "required": true,
        "description": "Task Id",
        "example": 0
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
      }
    ]
  },
  {
    "url": "/candidates/{candidateId}/usertasks/{taskId}",
    "method": "updateUserTask",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Candidate API:UserTasks",
    "typeScriptTag": "candidateApi:userTasks",
    "description": "Update a candidate user task",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Candidate Id",
        "example": 0
      },
      {
        "name": "taskId",
        "schema": "integer",
        "required": true,
        "description": "Task Id",
        "example": 0
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "startAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "allDay",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "assignees",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "candidates",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "jobs",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "placements",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "companies",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "contacts",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "applications",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Candidate user task was successfully updated"
      },
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Candidate user task was not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/candidates/activities",
    "method": "findCandidateActivities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Activities",
    "typeScriptTag": "candidateApi:activities",
    "description": "Find candidate activities",
    "parameters": [
      {
        "name": "createdAt",
        "schema": "array",
        "description": "Search for activities performed at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "updatedAt",
        "schema": "array",
        "description": "Search for activities updated at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "includeDetails",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/candidates/activitysettings",
    "method": "getAllActivitySettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Activities",
    "typeScriptTag": "candidateApi:activities",
    "description": "Get all candidate activity settings definitions",
    "parameters": [
      {
        "name": "query",
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
    "url": "/candidates/activitysettings/{settingId}",
    "method": "getCandidateActivitySettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Activities",
    "typeScriptTag": "candidateApi:activities",
    "description": "Get candidate activity settings with details",
    "parameters": [
      {
        "name": "settingId",
        "schema": "integer",
        "required": true,
        "description": "Activity Setting Id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Requested candidate activity settings were not found"
      }
    ]
  },
  {
    "url": "/candidates/deleted",
    "method": "getRecentDeletions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Candidates",
    "typeScriptTag": "candidateApi:candidates",
    "description": "Recently deleted candidates",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/candidates/fields/custom",
    "method": "getCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Lists",
    "typeScriptTag": "candidateApi:lists",
    "description": "Get all candidate custom field definitions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/candidates/fields/custom/{fieldId}",
    "method": "getCustomFieldDefinition",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Lists",
    "typeScriptTag": "candidateApi:lists",
    "description": "Get a custom field definition",
    "parameters": [
      {
        "name": "fieldId",
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
      },
      {
        "statusCode": "404",
        "description": "Requested candidate custom field definition was not found"
      }
    ]
  },
  {
    "url": "/candidates/fields/custom/{fieldId}",
    "method": "modifyCustomFieldValues",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Candidate API:Lists",
    "typeScriptTag": "candidateApi:lists",
    "description": "Modify custom field list values",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "values",
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
        "statusCode": "404",
        "description": "Requested candidate custom field definition was not found"
      }
    ]
  },
  {
    "url": "/candidates/lists/attachmentcategory",
    "method": "getAllAttachmentCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Attachments",
    "typeScriptTag": "candidateApi:attachments",
    "description": "Get all attachment categories",
    "parameters": [
      {
        "name": "type",
        "schema": "array",
        "description": "Optionally filter to specific attachment types"
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
    "url": "/candidates/lists/notetype",
    "method": "getAllNoteTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Notes",
    "typeScriptTag": "candidateApi:notes",
    "description": "Get all note types",
    "parameters": [
      {
        "name": "name",
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
    "url": "/candidates/lists/rating",
    "method": "getInternalRatings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Lists",
    "typeScriptTag": "candidateApi:lists",
    "description": "Get internal ratings",
    "parameters": [
      {
        "name": "name",
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
    "url": "/candidates/lists/salutation",
    "method": "getSalutations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Lists",
    "typeScriptTag": "candidateApi:lists",
    "description": "Get salutations (https://api.jobadder.com/v2/docs",
    "parameters": [
      {
        "name": "name",
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
    "url": "/candidates/lists/source",
    "method": "getAllSources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Lists",
    "typeScriptTag": "candidateApi:lists",
    "description": "Get all candidate sources",
    "parameters": [
      {
        "name": "name",
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
    "url": "/candidates/lists/status",
    "method": "getStatusDefinitions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Lists",
    "typeScriptTag": "candidateApi:lists",
    "description": "Get all status definitions",
    "parameters": [
      {
        "name": "statusId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "default",
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
    "url": "/candidates/lists/status/{statusId}",
    "method": "getStatusDefinition",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Lists",
    "typeScriptTag": "candidateApi:lists",
    "description": "Get a status definition",
    "parameters": [
      {
        "name": "statusId",
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
      },
      {
        "statusCode": "404",
        "description": "Requested candidate status definition was not found"
      }
    ]
  },
  {
    "url": "/candidates/payrollbilling",
    "method": "findPayrollBillings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate API:Payroll Billing",
    "typeScriptTag": "candidateApi:payrollBilling",
    "description": "Find payroll billings",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "array",
        "description": "Candidate Ids"
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
    "url": "/floats",
    "method": "getFloatsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate Float API:Floats",
    "typeScriptTag": "candidateFloatApi:floats",
    "description": "Find floats",
    "parameters": [
      {
        "name": "floatId",
        "schema": "array",
        "description": "Float Id"
      },
      {
        "name": "candidateId",
        "schema": "array",
        "description": "Candidate Id"
      },
      {
        "name": "companyId",
        "schema": "array",
        "description": "Company Id"
      },
      {
        "name": "createdAt",
        "schema": "array",
        "description": "Search for floats created at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "updatedAt",
        "schema": "array",
        "description": "Search for floats updated at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Embed related resources.<br />\r\nResources available to embed are: self"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/floats/{floatId}",
    "method": "getFloatById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate Float API:Floats",
    "typeScriptTag": "candidateFloatApi:floats",
    "description": "Get a float",
    "parameters": [
      {
        "name": "floatId",
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
      },
      {
        "statusCode": "404",
        "description": "Requested candidate float was not found"
      }
    ]
  },
  {
    "url": "/submissions",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate Submission API:Submissions",
    "typeScriptTag": "candidateSubmissionApi:submissions",
    "description": "Find submissions",
    "parameters": [
      {
        "name": "submissionId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "candidateId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "companyId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "jobId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "array",
        "description": "Search for submissions created at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "updatedAt",
        "schema": "array",
        "description": "Search for submissions updated at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Embed related resources.<br />\r\nResources available to embed are: self"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/submissions/{submissionId}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate Submission API:Submissions",
    "typeScriptTag": "candidateSubmissionApi:submissions",
    "description": "Get a submission",
    "parameters": [
      {
        "name": "submissionId",
        "schema": "integer",
        "required": true,
        "description": "Submission Id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Requested candidate submission was not found"
      }
    ]
  },
  {
    "url": "/applications",
    "method": "listJobApplications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Application API:Job Applications",
    "typeScriptTag": "jobApplicationApi:jobApplications",
    "description": "Find job applications",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "array",
        "description": "Application Id"
      },
      {
        "name": "candidateId",
        "schema": "array",
        "description": "Candidate Id"
      },
      {
        "name": "jobId",
        "schema": "array",
        "description": "Job Id"
      },
      {
        "name": "adId",
        "schema": "array",
        "description": "Job Ad Id"
      },
      {
        "name": "statusId",
        "schema": "array",
        "description": "Job application status"
      },
      {
        "name": "jobTitle",
        "schema": "string",
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": "Search for active job applications"
      },
      {
        "name": "rejected",
        "schema": "boolean",
        "description": "Search for rejected job applications"
      },
      {
        "name": "reviewStage",
        "schema": "array",
        "description": "Search for job applications at the specified review stage."
      },
      {
        "name": "reviewUserId",
        "schema": "array",
        "description": "Search for job applications submitted for review by the specified users."
      },
      {
        "name": "reviewContactId",
        "schema": "array",
        "description": "Search for job applications submitted for review to the specified hiring manager contacts"
      },
      {
        "name": "reviewSubmittedAt",
        "schema": "array",
        "description": "Search for job applications submitted for review at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "reviewReviewedAt",
        "schema": "array",
        "description": "Search for job applications reviewed at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "keywords",
        "schema": "string",
        "description": "Search for key words within the applicant's resume"
      },
      {
        "name": "partnerActionActionId",
        "schema": "array",
        "description": "Unique identifier for partner actions"
      },
      {
        "name": "partnerActionReference",
        "schema": "array",
        "description": "Partner supplied unique reference for the action"
      },
      {
        "name": "partnerActionStage",
        "schema": "array",
        "description": "Include partner actions at a specific stage"
      },
      {
        "name": "partnerActionSubmittedAt",
        "schema": "array",
        "description": "Search for entities submitted to an action at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "folderId",
        "schema": "array",
        "description": "Search in specific folders"
      },
      {
        "name": "createdAt",
        "schema": "array",
        "description": "Search for job applications created at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "updatedBy",
        "schema": "array",
        "description": "User Id - search for job applications last updated by the specified user(https://api.jobadder.com/v2/docs"
      },
      {
        "name": "updatedAt",
        "schema": "array",
        "description": "Search for job applications updated at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "Sort the results by one or multiple fields, prefix with \"-\" to sort descending.<br />\r\nFields available for sorting are: createdAt, status.name, review.stage, review.submittedAt, review.reviewedAt"
      },
      {
        "name": "fields",
        "schema": "array",
        "description": "Additional fields to include with the results.\r\nFields available to include are: partnerActions"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Embed related resources.<br />\r\nResources available to embed are: self"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/applications/{applicationId}",
    "method": "getApplication",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Application API:Job Applications",
    "typeScriptTag": "jobApplicationApi:jobApplications",
    "description": "Get a job application",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "Job Application Id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Requested job application was not found"
      }
    ]
  },
  {
    "url": "/applications/{applicationId}",
    "method": "updateStatusAndCustomFields",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Job Application API:Job Applications",
    "typeScriptTag": "jobApplicationApi:jobApplications",
    "description": "Update a job application",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "statusId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "rating",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "custom",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Job application was successfully updated"
      },
      {
        "statusCode": "204",
        "description": "Job application was successfully updated"
      },
      {
        "statusCode": "404",
        "description": "Job application was not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/applications/{applicationId}/videos",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Application API:Videos",
    "typeScriptTag": "jobApplicationApi:videos",
    "description": "Get all videos",
    "parameters": [
      {
        "name": "applicationId",
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
    "url": "/applications/{applicationId}/videos/{videoType}",
    "method": "getRecentVideo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Application API:Videos",
    "typeScriptTag": "jobApplicationApi:videos",
    "description": "Get a recent video",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "videoType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VIDEOTYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Requested job application video was not found"
      }
    ]
  },
  {
    "url": "/applications/{applicationId}/videos/{videoType}",
    "method": "addVideo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job Application API:Videos",
    "typeScriptTag": "jobApplicationApi:videos",
    "description": "Add a video",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "Job Application Id",
        "example": 0
      },
      {
        "name": "videoType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VIDEOTYPE"
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "reference",
        "schema": "string",
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
        "statusCode": "404",
        "description": "Job application was not found"
      }
    ]
  },
  {
    "url": "/applications/{applicationId}/attachments",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Application API:Attachments",
    "typeScriptTag": "jobApplicationApi:attachments",
    "description": "Find attachments",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "type",
        "schema": "array",
        "description": "Attachment types to include"
      },
      {
        "name": "category",
        "schema": "array",
        "description": "Search by attachment label"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/applications/{applicationId}/attachments/{attach}",
    "method": "getAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Application API:Attachments",
    "typeScriptTag": "jobApplicationApi:attachments",
    "description": "Get an attachment",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "Job Application Id",
        "example": 0
      },
      {
        "name": "attach",
        "schema": "integer",
        "required": true,
        "description": "Attachment Id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Requested job application attachment was not found"
      }
    ]
  },
  {
    "url": "/applications/{applicationId}/attachments/{attach}",
    "method": "addAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job Application API:Attachments",
    "typeScriptTag": "jobApplicationApi:attachments",
    "description": "Add a single attachment",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "Job Application Id",
        "example": 0
      },
      {
        "name": "attach",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ATTACH"
      },
      {
        "name": "fileData",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILEDATA"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Job application was not found"
      }
    ]
  },
  {
    "url": "/applications/{applicationId}/attachments/{attach}",
    "method": "updateAttachmentDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Job Application API:Attachments",
    "typeScriptTag": "jobApplicationApi:attachments",
    "description": "Update attachment details",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "Job Application Id",
        "example": 0
      },
      {
        "name": "attach",
        "schema": "integer",
        "required": true,
        "description": "Attachment Id",
        "example": 0
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "category",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expiry",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      },
      {
        "statusCode": "404",
        "description": "Attachment was not found"
      }
    ]
  },
  {
    "url": "/applications/{applicationId}/review",
    "method": "submitForReview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job Application API:Review",
    "typeScriptTag": "jobApplicationApi:review",
    "description": "Submit a job application for review",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "submittedByUserId",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "404",
        "description": "Job application was not found"
      }
    ]
  },
  {
    "url": "/applications/{applicationId}/review",
    "method": "markAsViewed",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Job Application API:Review",
    "typeScriptTag": "jobApplicationApi:review",
    "description": "Mark a job application as viewed by the hiring manager",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "404",
        "description": "Job application was not found"
      }
    ]
  },
  {
    "url": "/applications/{applicationId}/review/accept",
    "method": "acceptApplication",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Job Application API:Review",
    "typeScriptTag": "jobApplicationApi:review",
    "description": "Accept a job application",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "message",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "404",
        "description": "Job application was not found"
      }
    ]
  },
  {
    "url": "/applications/{applicationId}/review/reject",
    "method": "rejectApplication",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Job Application API:Review",
    "typeScriptTag": "jobApplicationApi:review",
    "description": "Reject a job application",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "reason",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "404",
        "description": "Job application was not found"
      }
    ]
  },
  {
    "url": "/applications/{applicationId}/interviews",
    "method": "getAllInterviews",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Application API:Interviews",
    "typeScriptTag": "jobApplicationApi:interviews",
    "description": "Get all Interviews",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "Job Application Id",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/applications/{applicationId}/interviews/external",
    "method": "createExternalInterview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job Application API:Interviews",
    "typeScriptTag": "jobApplicationApi:interviews",
    "description": "Create an external interview",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "Application Id",
        "example": 0
      },
      {
        "name": "startAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "location",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LOCATION"
      },
      {
        "name": "interviewersContactIds",
        "schema": "array",
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
        "description": "BadRequest"
      },
      {
        "statusCode": "404",
        "description": "Application was not found"
      }
    ]
  },
  {
    "url": "/applications/{applicationId}/interviews/external/{interviewId}",
    "method": "updateExternalInterview",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Job Application API:Interviews",
    "typeScriptTag": "jobApplicationApi:interviews",
    "description": "Update an external interview",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "Application Id",
        "example": 0
      },
      {
        "name": "interviewId",
        "schema": "integer",
        "required": true,
        "description": "Interview Id",
        "example": 0
      },
      {
        "name": "startAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endAt",
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
        "description": "BadRequest"
      },
      {
        "statusCode": "404",
        "description": "Interview was not found"
      }
    ]
  },
  {
    "url": "/applications/{applicationId}/interviews/internal",
    "method": "createInternalInterview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job Application API:Interviews",
    "typeScriptTag": "jobApplicationApi:interviews",
    "description": "Create an internal interview",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "Application Id",
        "example": 0
      },
      {
        "name": "startAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "location",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LOCATION"
      },
      {
        "name": "interviewersUserIds",
        "schema": "array",
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
        "description": "BadRequest"
      },
      {
        "statusCode": "404",
        "description": "Application was not found"
      }
    ]
  },
  {
    "url": "/applications/{applicationId}/interviews/internal/{interviewId}",
    "method": "updateInternalInterview",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Job Application API:Interviews",
    "typeScriptTag": "jobApplicationApi:interviews",
    "description": "Update an internal interview",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "Application Id",
        "example": 0
      },
      {
        "name": "interviewId",
        "schema": "integer",
        "required": true,
        "description": "Interview Id",
        "example": 0
      },
      {
        "name": "startAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endAt",
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
        "description": "BadRequest"
      },
      {
        "statusCode": "404",
        "description": "Interview was not found"
      }
    ]
  },
  {
    "url": "/applications/{applicationId}/status",
    "method": "updateStatusWithNote",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Job Application API:Job Applications",
    "typeScriptTag": "jobApplicationApi:jobApplications",
    "description": "Set a job application status",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "statusId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "note",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Job application status was successfully updated"
      },
      {
        "statusCode": "202",
        "description": "Job application status already assigned"
      },
      {
        "statusCode": "404",
        "description": "Job application was not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/applications/{applicationId}/notes",
    "method": "getNotes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Application API:Notes",
    "typeScriptTag": "jobApplicationApi:notes",
    "description": "Get job application notes",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "Job Application Id",
        "example": 0
      },
      {
        "name": "noteId",
        "schema": "array",
        "description": "Note Id"
      },
      {
        "name": "type",
        "schema": "array",
        "description": "Note type"
      },
      {
        "name": "reference",
        "schema": "array",
        "description": "Reference value used to identify a note or group of notes"
      },
      {
        "name": "createdAt",
        "schema": "array",
        "description": "Search for notes created at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "updatedAt",
        "schema": "array",
        "description": "Search for notes updated at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "Sort the results by one or multiple fields, prefix with \"-\" to sort descending.<br />\r\nFields available for sorting are: type, createdAt, updatedAt"
      },
      {
        "name": "fields",
        "schema": "array",
        "description": "Additional fields to include with the results.<br />\r\nFields available to include are: text"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/applications/{applicationId}/notes",
    "method": "addNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job Application API:Notes",
    "typeScriptTag": "jobApplicationApi:notes",
    "description": "Add a note",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEXT"
      },
      {
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "createdBy",
        "schema": "object",
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
        "statusCode": "404",
        "description": "Job application was not found"
      }
    ]
  },
  {
    "url": "/applications/{applicationId}/activities",
    "method": "getJobApplicationActivities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Application API:Activities",
    "typeScriptTag": "jobApplicationApi:activities",
    "description": "Get job application activities",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "Job application Id",
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
    "url": "/applications/{applicationId}/activities",
    "method": "addActivity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job Application API:Activities",
    "typeScriptTag": "jobApplicationApi:activities",
    "description": "Add a job application activity",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "Job application Id",
        "example": 0
      },
      {
        "name": "activitySettingId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "statusId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "answers",
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
        "statusCode": "404",
        "description": "Job application was not found"
      }
    ]
  },
  {
    "url": "/applications/{applicationId}/activities/{activityId}",
    "method": "getJobActivity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Application API:Activities",
    "typeScriptTag": "jobApplicationApi:activities",
    "description": "Get a job application activity",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "Job application Id",
        "example": 0
      },
      {
        "name": "activityId",
        "schema": "integer",
        "required": true,
        "description": "Activity Id",
        "example": 0
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
      }
    ]
  },
  {
    "url": "/applications/{applicationId}/usertasks",
    "method": "addTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job Application API:UserTasks",
    "typeScriptTag": "jobApplicationApi:userTasks",
    "description": "Add an application user task",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "Application Id",
        "example": 0
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "startAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "allDay",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "assignees",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "candidates",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "jobs",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "placements",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "companies",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "contacts",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "applications",
        "schema": "array",
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
        "statusCode": "404",
        "description": "Application was not found"
      }
    ]
  },
  {
    "url": "/applications/{applicationId}/usertasks/{taskId}",
    "method": "getTaskDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Application API:UserTasks",
    "typeScriptTag": "jobApplicationApi:userTasks",
    "description": "Get an application user task",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "Application Id",
        "example": 0
      },
      {
        "name": "taskId",
        "schema": "integer",
        "required": true,
        "description": "Task Id",
        "example": 0
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
      }
    ]
  },
  {
    "url": "/applications/{applicationId}/usertasks/{taskId}",
    "method": "updateTask",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Job Application API:UserTasks",
    "typeScriptTag": "jobApplicationApi:userTasks",
    "description": "Update an application user task",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "Application Id",
        "example": 0
      },
      {
        "name": "taskId",
        "schema": "integer",
        "required": true,
        "description": "Task Id",
        "example": 0
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "startAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "allDay",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "assignees",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "candidates",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "jobs",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "placements",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "companies",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "contacts",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "applications",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Application user task was successfully updated"
      },
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Application user task was not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/applications/activities",
    "method": "findJobApplicationActivities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Application API:Activities",
    "typeScriptTag": "jobApplicationApi:activities",
    "description": "Find job application activities",
    "parameters": [
      {
        "name": "createdAt",
        "schema": "array",
        "description": "Search for activities performed at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "updatedAt",
        "schema": "array",
        "description": "Search for activities updated at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "includeDetails",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/applications/activitysettings",
    "method": "getAllActivitySettingsDefinitions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Application API:Activities",
    "typeScriptTag": "jobApplicationApi:activities",
    "description": "Get all job application activity settings definitions",
    "parameters": [
      {
        "name": "query",
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
    "url": "/applications/activitysettings/{settingId}",
    "method": "getActivitySettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Application API:Activities",
    "typeScriptTag": "jobApplicationApi:activities",
    "description": "Get job application activity settings with details",
    "parameters": [
      {
        "name": "settingId",
        "schema": "integer",
        "required": true,
        "description": "Activity Setting Id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Requested job application activity settings were not found"
      }
    ]
  },
  {
    "url": "/applications/deleted",
    "method": "getRecentDeletions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Application API:Job Applications",
    "typeScriptTag": "jobApplicationApi:jobApplications",
    "description": "Recently deleted job applications",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/applications/fields/custom",
    "method": "getCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Application API:Lists",
    "typeScriptTag": "jobApplicationApi:lists",
    "description": "Get all custom fields",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/applications/fields/custom/{fieldId}",
    "method": "getCustomField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Application API:Lists",
    "typeScriptTag": "jobApplicationApi:lists",
    "description": "Get a custom field",
    "parameters": [
      {
        "name": "fieldId",
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
      },
      {
        "statusCode": "404",
        "description": "Requested job application custom field definition was not found"
      }
    ]
  },
  {
    "url": "/applications/fields/custom/custom/{fieldId}",
    "method": "modifyCustomFieldValues",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Job Application API:Lists",
    "typeScriptTag": "jobApplicationApi:lists",
    "description": "Modify custom field list values",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "values",
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
        "statusCode": "404",
        "description": "Requested job application custom field definition was not found"
      }
    ]
  },
  {
    "url": "/applications/lists/status",
    "method": "getAllStatusDefinitions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Application API:Lists",
    "typeScriptTag": "jobApplicationApi:lists",
    "description": "Get all status definitions",
    "parameters": [
      {
        "name": "rejected",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "statusId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "default",
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
    "url": "/applications/lists/status/{statusId}",
    "method": "statusDefinitionGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Application API:Lists",
    "typeScriptTag": "jobApplicationApi:lists",
    "description": "Get a status definition",
    "parameters": [
      {
        "name": "statusId",
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
      },
      {
        "statusCode": "404",
        "description": "Requested job application status definition was not found"
      }
    ]
  },
  {
    "url": "/applications/lists/workflow",
    "method": "getWorkflow",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job Application API:Lists",
    "typeScriptTag": "jobApplicationApi:lists",
    "description": "Get the job application workflow",
    "parameters": [
      {
        "name": "query",
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
    "url": "/placements",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Placement API:Placements",
    "typeScriptTag": "placementApi:placements",
    "description": "Find placements",
    "parameters": [
      {
        "name": "placementId",
        "schema": "array",
        "description": "Placement Id"
      },
      {
        "name": "type",
        "schema": "array",
        "description": "Placement Type"
      },
      {
        "name": "partnerActionActionId",
        "schema": "array",
        "description": "Unique identifier for partner actions"
      },
      {
        "name": "partnerActionReference",
        "schema": "array",
        "description": "Partner supplied unique reference for the action"
      },
      {
        "name": "partnerActionStage",
        "schema": "array",
        "description": "Include partner actions at a specific stage"
      },
      {
        "name": "partnerActionSubmittedAt",
        "schema": "array",
        "description": "Search for entities submitted to an action at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "statusId",
        "schema": "array",
        "description": "Placement status"
      },
      {
        "name": "candidateCandidateId",
        "schema": "array",
        "description": "Candidate Id"
      },
      {
        "name": "candidateName",
        "schema": "string",
        "description": "Candidate name"
      },
      {
        "name": "candidateId",
        "schema": "array",
        "description": "Alias for candidate.candidateId"
      },
      {
        "name": "companyCompanyId",
        "schema": "array",
        "description": "Companies by Id"
      },
      {
        "name": "companyName",
        "schema": "string",
        "description": "Company name"
      },
      {
        "name": "companyId",
        "schema": "array",
        "description": "Alias for company.companyId"
      },
      {
        "name": "jobId",
        "schema": "array",
        "description": "Job Id"
      },
      {
        "name": "applicationId",
        "schema": "array",
        "description": "Job Application Id"
      },
      {
        "name": "startDate",
        "schema": "array",
        "description": "Search for placements starting in the specified date range\r\n([ISO full-date](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date.\r\nSpecify multiple parameters to search for a range."
      },
      {
        "name": "endDate",
        "schema": "array",
        "description": "Search for placements ending in the specified date range\r\n([ISO full-date](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date.\r\nSpecify multiple parameters to search for a range."
      },
      {
        "name": "folderId",
        "schema": "array",
        "description": "Search in specific folders"
      },
      {
        "name": "userId",
        "schema": "array",
        "description": "User Id - search for placements by owner or associated recruiter"
      },
      {
        "name": "ownerUserId",
        "schema": "array",
        "description": "User Id - search for placements by owner"
      },
      {
        "name": "recruiterUserId",
        "schema": "array",
        "description": "User Id - search placements by associated recruiters"
      },
      {
        "name": "createdBy",
        "schema": "array",
        "description": "User Id - search for placements created by the specified user(https://api.jobadder.com/v2/docs"
      },
      {
        "name": "createdAt",
        "schema": "array",
        "description": "Search for placements created at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "updatedBy",
        "schema": "array",
        "description": "User Id - search for placements last updated by the specified user(https://api.jobadder.com/v2/docs"
      },
      {
        "name": "updatedAt",
        "schema": "array",
        "description": "Search for placements updated at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "approved",
        "schema": "boolean",
        "description": "Search for approved placements"
      },
      {
        "name": "approvedBy",
        "schema": "array",
        "description": "User Id - search for placements approved by the specified user(https://api.jobadder.com/v2/docs"
      },
      {
        "name": "approvedAt",
        "schema": "array",
        "description": "Search for placements approved at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "export",
        "schema": "array",
        "description": "Search for placements that have been flagged by the user for export to integration partners."
      },
      {
        "name": "timesheetPeriod",
        "schema": "array",
        "description": "Find placements with timesheets in the specified date range\r\n([ISO full-date](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date.\r\nSpecify multiple parameters to search for a range."
      },
      {
        "name": "fields",
        "schema": "array",
        "description": "Additional fields to include with the results.\r\nFields available to include are: partnerActions"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Embed related resources.<br />\r\nResources available to embed are: self, notes"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/placements/{placementId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Placement API:Placements",
    "typeScriptTag": "placementApi:placements",
    "description": "Get a placement",
    "parameters": [
      {
        "name": "placementId",
        "schema": "integer",
        "required": true,
        "description": "Placement Id",
        "example": 0
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Embed related resources.<br />\r\nResources available to embed are: notes"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Requested placement was not found"
      }
    ]
  },
  {
    "url": "/placements/{placementId}",
    "method": "updatePlacement",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Placement API:Placements",
    "typeScriptTag": "placementApi:placements",
    "description": "Update a placement",
    "parameters": [
      {
        "name": "placementId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "summary",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "jobTitle",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOBTITLE"
      },
      {
        "name": "contactId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "statusId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "salary",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "contractRate",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "award",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "industryCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "billing",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "feeSplit",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "recruiters",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Placement was successfully updated"
      },
      {
        "statusCode": "404",
        "description": "Placement was not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/placements/{placementId}/attachments",
    "method": "find",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Placement API:Attachments",
    "typeScriptTag": "placementApi:attachments",
    "description": "Find attachments",
    "parameters": [
      {
        "name": "placementId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "type",
        "schema": "array",
        "description": "Attachment types to include"
      },
      {
        "name": "latest",
        "schema": "boolean",
        "description": "Find the latest version of each attachment type"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/placements/{placementId}/attachments/{attach}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Placement API:Attachments",
    "typeScriptTag": "placementApi:attachments",
    "description": "Get an attachment",
    "parameters": [
      {
        "name": "placementId",
        "schema": "integer",
        "required": true,
        "description": "Placement Id",
        "example": 0
      },
      {
        "name": "attach",
        "schema": "integer",
        "required": true,
        "description": "Attachment Id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Requested placement attachment was not found"
      }
    ]
  },
  {
    "url": "/placements/{placementId}/attachments/{attach}",
    "method": "addSingleAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Placement API:Attachments",
    "typeScriptTag": "placementApi:attachments",
    "description": "Add a single attachment",
    "parameters": [
      {
        "name": "placementId",
        "schema": "integer",
        "required": true,
        "description": "Placement Id",
        "example": 0
      },
      {
        "name": "attach",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ATTACH"
      },
      {
        "name": "fileData",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILEDATA"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Placement was not found"
      }
    ]
  },
  {
    "url": "/placements/{placementId}/attachments/{attach}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Placement API:Attachments",
    "typeScriptTag": "placementApi:attachments",
    "description": "Update attachment details",
    "parameters": [
      {
        "name": "placementId",
        "schema": "integer",
        "required": true,
        "description": "Placement Id",
        "example": 0
      },
      {
        "name": "attach",
        "schema": "integer",
        "required": true,
        "description": "Attachment Id",
        "example": 0
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "category",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expiry",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      },
      {
        "statusCode": "404",
        "description": "Attachment was not found"
      }
    ]
  },
  {
    "url": "/placements/{placementId}/status",
    "method": "setStatusNote",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Placement API:Placements",
    "typeScriptTag": "placementApi:placements",
    "description": "Set a placement status",
    "parameters": [
      {
        "name": "placementId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "statusId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "note",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Placement status was successfully updated"
      },
      {
        "statusCode": "202",
        "description": "Placement status already assigned"
      },
      {
        "statusCode": "404",
        "description": "Placement was not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/placements/{placementId}/timesheets",
    "method": "getTimesheets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Placement API:Timesheets",
    "typeScriptTag": "placementApi:timesheets",
    "description": "Get timesheets",
    "parameters": [
      {
        "name": "placementId",
        "schema": "integer",
        "required": true,
        "description": "Placement Id",
        "example": 0
      },
      {
        "name": "period",
        "schema": "array",
        "description": "Get timesheets for a specific date range\r\n([ISO full-date](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with < or > to search dates before or after (https://api.jobadder.com/v2/docs the specified date.\r\nSpecify multiple parameters to search for a range."
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
    "url": "/placements/{placementId}/notes",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Placement API:Notes",
    "typeScriptTag": "placementApi:notes",
    "description": "Get placement notes",
    "parameters": [
      {
        "name": "placementId",
        "schema": "integer",
        "required": true,
        "description": "Placement Id",
        "example": 0
      },
      {
        "name": "noteId",
        "schema": "array",
        "description": "Note Id"
      },
      {
        "name": "type",
        "schema": "array",
        "description": "Note type"
      },
      {
        "name": "reference",
        "schema": "array",
        "description": "Reference value used to identify a note or group of notes"
      },
      {
        "name": "createdAt",
        "schema": "array",
        "description": "Search for notes created at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "updatedAt",
        "schema": "array",
        "description": "Search for notes updated at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "Sort the results by one or multiple fields, prefix with \"-\" to sort descending.<br />\r\nFields available for sorting are: type, createdAt, updatedAt"
      },
      {
        "name": "fields",
        "schema": "array",
        "description": "Additional fields to include with the results.<br />\r\nFields available to include are: text"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/placements/{placementId}/notes",
    "method": "addNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Placement API:Notes",
    "typeScriptTag": "placementApi:notes",
    "description": "Add a note",
    "parameters": [
      {
        "name": "placementId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEXT"
      },
      {
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "createdBy",
        "schema": "object",
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
        "statusCode": "404",
        "description": "Placement was not found"
      }
    ]
  },
  {
    "url": "/placements/{placementId}/activities",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Placement API:Activities",
    "typeScriptTag": "placementApi:activities",
    "description": "Get placement activities",
    "parameters": [
      {
        "name": "placementId",
        "schema": "integer",
        "required": true,
        "description": "Placement Id",
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
    "url": "/placements/{placementId}/activities",
    "method": "addNewActivity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Placement API:Activities",
    "typeScriptTag": "placementApi:activities",
    "description": "Add a placement activity",
    "parameters": [
      {
        "name": "placementId",
        "schema": "integer",
        "required": true,
        "description": "Placement Id",
        "example": 0
      },
      {
        "name": "activitySettingId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "statusId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "answers",
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
        "statusCode": "404",
        "description": "Placement was not found"
      }
    ]
  },
  {
    "url": "/placements/{placementId}/activities/{activityId}",
    "method": "getActivity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Placement API:Activities",
    "typeScriptTag": "placementApi:activities",
    "description": "Get a placement activity",
    "parameters": [
      {
        "name": "placementId",
        "schema": "integer",
        "required": true,
        "description": "Placement Id",
        "example": 0
      },
      {
        "name": "activityId",
        "schema": "integer",
        "required": true,
        "description": "Activity Id",
        "example": 0
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
      }
    ]
  },
  {
    "url": "/placements/{placementId}/usertasks",
    "method": "addTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Placement API:UserTasks",
    "typeScriptTag": "placementApi:userTasks",
    "description": "Add a placement user task",
    "parameters": [
      {
        "name": "placementId",
        "schema": "integer",
        "required": true,
        "description": "Placement Id",
        "example": 0
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "startAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "allDay",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "assignees",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "candidates",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "jobs",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "placements",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "companies",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "contacts",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "applications",
        "schema": "array",
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
        "statusCode": "404",
        "description": "Placement was not found"
      }
    ]
  },
  {
    "url": "/placements/{placementId}/usertasks/{taskId}",
    "method": "getTask",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Placement API:UserTasks",
    "typeScriptTag": "placementApi:userTasks",
    "description": "Get a placement user task",
    "parameters": [
      {
        "name": "placementId",
        "schema": "integer",
        "required": true,
        "description": "Placement Id",
        "example": 0
      },
      {
        "name": "taskId",
        "schema": "integer",
        "required": true,
        "description": "Task Id",
        "example": 0
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
      }
    ]
  },
  {
    "url": "/placements/{placementId}/usertasks/{taskId}",
    "method": "updateTask",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Placement API:UserTasks",
    "typeScriptTag": "placementApi:userTasks",
    "description": "Update a placement user task",
    "parameters": [
      {
        "name": "placementId",
        "schema": "integer",
        "required": true,
        "description": "Placement Id",
        "example": 0
      },
      {
        "name": "taskId",
        "schema": "integer",
        "required": true,
        "description": "Task Id",
        "example": 0
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "startAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "allDay",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "assignees",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "candidates",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "jobs",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "placements",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "companies",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "contacts",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "applications",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Placement user task was successfully updated"
      },
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Placement user task was not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/placements/activities",
    "method": "find",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Placement API:Activities",
    "typeScriptTag": "placementApi:activities",
    "description": "Find placement activities",
    "parameters": [
      {
        "name": "createdAt",
        "schema": "array",
        "description": "Search for activities performed at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "updatedAt",
        "schema": "array",
        "description": "Search for activities updated at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "includeDetails",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/placements/activitysettings",
    "method": "getAllActivitySettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Placement API:Activities",
    "typeScriptTag": "placementApi:activities",
    "description": "Get all placement activity settings definitions",
    "parameters": [
      {
        "name": "query",
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
    "url": "/placements/activitysettings/{settingId}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Placement API:Activities",
    "typeScriptTag": "placementApi:activities",
    "description": "Get placement activity settings with details",
    "parameters": [
      {
        "name": "settingId",
        "schema": "integer",
        "required": true,
        "description": "Activity Setting Id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Requested placement activity settings were not found"
      }
    ]
  },
  {
    "url": "/placements/deleted",
    "method": "getRecentlyDeleted",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Placement API:Placements",
    "typeScriptTag": "placementApi:placements",
    "description": "Recently deleted placements",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/placements/fields/custom",
    "method": "getCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Placement API:Placements",
    "typeScriptTag": "placementApi:placements",
    "description": "Get all custom fields",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/placements/fields/custom/{fieldId}",
    "method": "getCustomField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Placement API:Placements",
    "typeScriptTag": "placementApi:placements",
    "description": "Get a custom field",
    "parameters": [
      {
        "name": "fieldId",
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
      },
      {
        "statusCode": "404",
        "description": "Requested placement custom field definition was not found"
      }
    ]
  },
  {
    "url": "/placements/fields/custom/custom/{fieldId}",
    "method": "modifyCustomFieldListValues",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Placement API:Placements",
    "typeScriptTag": "placementApi:placements",
    "description": "Modify custom field list values",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "values",
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
        "statusCode": "404",
        "description": "Requested placement custom field definition was not found"
      }
    ]
  },
  {
    "url": "/placements/lists/attachmentcategory",
    "method": "getAllAttachmentCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Placement API:Attachments",
    "typeScriptTag": "placementApi:attachments",
    "description": "Get all attachment categories",
    "parameters": [
      {
        "name": "type",
        "schema": "array",
        "description": "Optionally filter to specific attachment types"
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
    "url": "/placements/lists/awards",
    "method": "getAwards",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Placement API:Lists",
    "typeScriptTag": "placementApi:lists",
    "description": "Get all awards",
    "parameters": [
      {
        "name": "name",
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
    "url": "/placements/lists/billingterms",
    "method": "getAllBillingTerms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Placement API:Lists",
    "typeScriptTag": "placementApi:lists",
    "description": "Get all billing terms",
    "parameters": [
      {
        "name": "name",
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
    "url": "/placements/lists/industrycodes",
    "method": "getAllIndustryCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Placement API:Lists",
    "typeScriptTag": "placementApi:lists",
    "description": "Get all industry codes",
    "parameters": [
      {
        "name": "name",
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
    "url": "/placements/lists/notetype",
    "method": "getAllNoteTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Placement API:Notes",
    "typeScriptTag": "placementApi:notes",
    "description": "Get all note types",
    "parameters": [
      {
        "name": "name",
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
    "url": "/placements/lists/paymenttypes",
    "method": "getPaymentTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Placement API:Lists",
    "typeScriptTag": "placementApi:lists",
    "description": "Get all payment types",
    "parameters": [
      {
        "name": "name",
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
    "url": "/placements/lists/status",
    "method": "getAllStatusDefinitions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Placement API:Lists",
    "typeScriptTag": "placementApi:lists",
    "description": "Get all status definitions",
    "parameters": [
      {
        "name": "statusId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "default",
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
    "url": "/placements/lists/status/{statusId}",
    "method": "statusDefinitionGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Placement API:Lists",
    "typeScriptTag": "placementApi:lists",
    "description": "Get a status definition",
    "parameters": [
      {
        "name": "statusId",
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
      },
      {
        "statusCode": "404",
        "description": "Requested placement status definition was *not found*"
      }
    ]
  },
  {
    "url": "/companies",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company API:Companies",
    "typeScriptTag": "companyApi:companies",
    "description": "Find companies",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": "Company name"
      },
      {
        "name": "companyId",
        "schema": "array",
        "description": "Companies by Id"
      },
      {
        "name": "parentId",
        "schema": "array",
        "description": "Find subsidiaries of specified parent companies"
      },
      {
        "name": "subsidiaryId",
        "schema": "array",
        "description": "Find parents of specified subsidiaries"
      },
      {
        "name": "statusId",
        "schema": "array",
        "description": "Company status"
      },
      {
        "name": "partnerActionActionId",
        "schema": "array",
        "description": "Unique identifier for partner actions"
      },
      {
        "name": "partnerActionReference",
        "schema": "array",
        "description": "Partner supplied unique reference for the action"
      },
      {
        "name": "partnerActionStage",
        "schema": "array",
        "description": "Include partner actions at a specific stage"
      },
      {
        "name": "partnerActionSubmittedAt",
        "schema": "array",
        "description": "Search for entities submitted to an action at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "folderId",
        "schema": "array",
        "description": "Search in specific folders"
      },
      {
        "name": "createdBy",
        "schema": "array",
        "description": "User Id - search for companies created by the specified user(https://api.jobadder.com/v2/docs"
      },
      {
        "name": "createdAt",
        "schema": "array",
        "description": "Search for companies created at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "updatedBy",
        "schema": "array",
        "description": "User Id - search for companies last updated by the specified user(https://api.jobadder.com/v2/docs"
      },
      {
        "name": "updatedAt",
        "schema": "array",
        "description": "Search for companies updated at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "fields",
        "schema": "array",
        "description": "Additional fields to include with the results.\r\nFields available to include are: partnerActions"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Embed related resources.<br />\r\nResources available to embed are: self, addresses, contacts, subsidiaries, skills, notes, jobs, placements, workflows"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/companies",
    "method": "addNewCompany",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company API:Companies",
    "typeScriptTag": "companyApi:companies",
    "description": "Add a new company",
    "parameters": [
      {
        "name": "xAllowDuplicates",
        "schema": "string",
        "description": "Duplicate override code from the header of an earlier 409 response"
      },
      {
        "name": "summary",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "parentCompanyId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "legalName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "social",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "statusId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "ownerUserId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "recruiterUserId",
        "schema": "array",
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies/{companyId}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company API:Companies",
    "typeScriptTag": "companyApi:companies",
    "description": "Get a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company Id",
        "example": 0
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Embed related resources.<br />\r\nResources available to embed are: addresses, contacts, subsidiaries, skills, notes, jobs, placements, workflows"
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
      }
    ]
  },
  {
    "url": "/companies/{companyId}",
    "method": "updateExistingCompany",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Company API:Companies",
    "typeScriptTag": "companyApi:companies",
    "description": "Update an existing company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xAllowDuplicates",
        "schema": "string",
        "description": "Duplicate override code from the header of an earlier 409 response"
      },
      {
        "name": "summary",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "mainContactId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "primaryAddressId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "parentCompanyId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "legalName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "social",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "statusId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "custom",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "ownerUserId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "recruiterUserId",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Company was successfully updated"
      },
      {
        "statusCode": "404",
        "description": "Requested company was not found"
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies/{companyId}/logo",
    "method": "removeLogo",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Company API:Logo",
    "typeScriptTag": "companyApi:logo",
    "description": "Remove a company logo",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      },
      {
        "statusCode": "404",
        "description": "Company was not found"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/logo",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company API:Logo",
    "typeScriptTag": "companyApi:logo",
    "description": "Get a company logo",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company Id",
        "example": 0
      },
      {
        "name": "w",
        "schema": "integer",
        "description": "Reduce the size of the logo to fit the width specified by w"
      },
      {
        "name": "h",
        "schema": "integer",
        "description": "Reduce the size of the logo to fit the height specified by h"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Requested company logo was not found"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/logo",
    "method": "getHeaders",
    "httpMethod": HttpMethodsEnum.HEAD,
    "tag": "Company API:Logo",
    "typeScriptTag": "companyApi:logo",
    "description": "Get company logo headers",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company Id",
        "example": 0
      },
      {
        "name": "w",
        "schema": "integer",
        "description": "Reduce the size of the logo to fit the width specified by w"
      },
      {
        "name": "h",
        "schema": "integer",
        "description": "Reduce the size of the logo to fit the height specified by h"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "404",
        "description": "Requested company logo was not found"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/logo",
    "method": "updateLogo",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Company API:Logo",
    "typeScriptTag": "companyApi:logo",
    "description": "Add or update a company logo",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "fileData",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILEDATA"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      },
      {
        "statusCode": "404",
        "description": "Company was not found"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/addresses",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company API:Addresses",
    "typeScriptTag": "companyApi:addresses",
    "description": "Get all addresses",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company Id",
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
    "url": "/companies/{companyId}/addresses",
    "method": "addNewAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company API:Addresses",
    "typeScriptTag": "companyApi:addresses",
    "description": "Add an address",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "street",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "postalCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "countryCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fax",
        "schema": "string",
        "required": false,
        "description": ""
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
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "isPrimaryAddress",
        "schema": "boolean",
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
        "statusCode": "404",
        "description": "Company not found"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/addresses/{addressId}",
    "method": "removeAddress",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Company API:Addresses",
    "typeScriptTag": "companyApi:addresses",
    "description": "Remove an address",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "addressId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ADDRESSID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      },
      {
        "statusCode": "404",
        "description": "Company address not found"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/addresses/{addressId}",
    "method": "getAddress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company API:Addresses",
    "typeScriptTag": "companyApi:addresses",
    "description": "Get an address",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company Id",
        "example": 0
      },
      {
        "name": "addressId",
        "schema": "string",
        "required": true,
        "description": "Address Id",
        "example": "ADDRESSID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Requested company address was not found"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/addresses/{addressId}",
    "method": "updateAddress",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Company API:Addresses",
    "typeScriptTag": "companyApi:addresses",
    "description": "Update an address",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "addressId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ADDRESSID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "street",
        "schema": "array",
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postalCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "countryCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fax",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isPrimaryAddress",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      },
      {
        "statusCode": "404",
        "description": "Company address not found"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/skills",
    "method": "getCompanySkills",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company API:Skills",
    "typeScriptTag": "companyApi:skills",
    "description": "Get company skills",
    "parameters": [
      {
        "name": "companyId",
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
    "url": "/companies/{companyId}/subsidiaries",
    "method": "getAllSubsidiaries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company API:Companies",
    "typeScriptTag": "companyApi:companies",
    "description": "Get all subsidiaries for a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company Id",
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
    "url": "/companies/{companyId}/contacts",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company API:Contacts",
    "typeScriptTag": "companyApi:contacts",
    "description": "Get company contacts",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company Id",
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
    "url": "/companies/{companyId}/attachments",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company API:Attachments",
    "typeScriptTag": "companyApi:attachments",
    "description": "Find attachments",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "type",
        "schema": "array",
        "description": "Attachment types to include"
      },
      {
        "name": "latest",
        "schema": "boolean",
        "description": "Find the latest version of each attachment type"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/companies/{companyId}/attachments/{attach}",
    "method": "getAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company API:Attachments",
    "typeScriptTag": "companyApi:attachments",
    "description": "Get an attachment",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "attach",
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
      },
      {
        "statusCode": "404",
        "description": "Requested company attachment was not found"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/attachments/{attach}",
    "method": "addSingleAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company API:Attachments",
    "typeScriptTag": "companyApi:attachments",
    "description": "Add a single attachment",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company Id",
        "example": 0
      },
      {
        "name": "attach",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ATTACH"
      },
      {
        "name": "fileData",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILEDATA"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company was not found"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/attachments/{attach}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Company API:Attachments",
    "typeScriptTag": "companyApi:attachments",
    "description": "Update attachment details",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company Id",
        "example": 0
      },
      {
        "name": "attach",
        "schema": "integer",
        "required": true,
        "description": "Attachment Id",
        "example": 0
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "category",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expiry",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      },
      {
        "statusCode": "404",
        "description": "Attachment was not found"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/jobs",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company API:Jobs",
    "typeScriptTag": "companyApi:jobs",
    "description": "Get all jobs for a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company Id",
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
    "url": "/companies/{companyId}/jobs/active",
    "method": "getAllActiveJobs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company API:Jobs",
    "typeScriptTag": "companyApi:jobs",
    "description": "Get all active/open jobs for a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company Id",
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
    "url": "/companies/{companyId}/status",
    "method": "updateStatusWithNote",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Company API:Companies",
    "typeScriptTag": "companyApi:companies",
    "description": "Set a company status",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "statusId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "note",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Company status was successfully updated"
      },
      {
        "statusCode": "202",
        "description": "Company status already assigned"
      },
      {
        "statusCode": "404",
        "description": "Company was not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies/{companyId}/requisitions",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company API:Requisitions",
    "typeScriptTag": "companyApi:requisitions",
    "description": "Get all requisitions for a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company Id",
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
    "url": "/companies/{companyId}/floats",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company API:Floats",
    "typeScriptTag": "companyApi:floats",
    "description": "Get all floats for a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company Id",
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
    "url": "/companies/{companyId}/submissions",
    "method": "getAllSubmissions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company API:Submissions",
    "typeScriptTag": "companyApi:submissions",
    "description": "Get all candidate submissions for a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company Id",
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
    "url": "/companies/{companyId}/placements",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company API:Placements",
    "typeScriptTag": "companyApi:placements",
    "description": "Get all approved and unapproved placements for a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company Id",
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
    "url": "/companies/{companyId}/placements/approved",
    "method": "getAllApproved",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company API:Placements",
    "typeScriptTag": "companyApi:placements",
    "description": "Get all approved placements for a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company Id",
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
    "url": "/companies/{companyId}/workflows/{workflowType}",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company API:Workflows",
    "typeScriptTag": "companyApi:workflows",
    "description": "Get all company workflows",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company Id",
        "example": 0
      },
      {
        "name": "workflowType",
        "schema": "string",
        "required": true,
        "description": "Valid values: \"Requisition\"",
        "example": "WORKFLOWTYPE"
      },
      {
        "name": "workflowId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "include",
        "schema": "array",
        "description": ""
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Embed related resources within the results."
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
    "url": "/companies/{companyId}/workflows/{workflowType}",
    "method": "addNewWorkflow",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company API:Workflows",
    "typeScriptTag": "companyApi:workflows",
    "description": "Add a company workflow",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company Id",
        "example": 0
      },
      {
        "name": "workflowType",
        "schema": "string",
        "required": true,
        "description": "Valid values: \"Requisition\"",
        "example": "WORKFLOWTYPE"
      },
      {
        "name": "approvers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies/{companyId}/workflows/{workflowType}/{workflowId}",
    "method": "getApproverDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company API:Workflows",
    "typeScriptTag": "companyApi:workflows",
    "description": "Get a company workflow and approvers",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company Id",
        "example": 0
      },
      {
        "name": "workflowType",
        "schema": "string",
        "required": true,
        "description": "Valid values: \"Requisition\"",
        "example": "WORKFLOWTYPE"
      },
      {
        "name": "workflowId",
        "schema": "integer",
        "required": true,
        "description": "Workflow Id",
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
    "url": "/companies/{companyId}/workflows/{workflowType}/{workflowId}",
    "method": "updateWorkflow",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Company API:Workflows",
    "typeScriptTag": "companyApi:workflows",
    "description": "Update a company workflow",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company Id",
        "example": 0
      },
      {
        "name": "workflowType",
        "schema": "string",
        "required": true,
        "description": "Valid values: \"Requisition\"",
        "example": "WORKFLOWTYPE"
      },
      {
        "name": "workflowId",
        "schema": "integer",
        "required": true,
        "description": "Workflow Id",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "approvers",
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
    "url": "/companies/{companyId}/notes",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company API:Notes",
    "typeScriptTag": "companyApi:notes",
    "description": "Get company notes",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company Id",
        "example": 0
      },
      {
        "name": "noteId",
        "schema": "array",
        "description": "Note Id"
      },
      {
        "name": "type",
        "schema": "array",
        "description": "Note type"
      },
      {
        "name": "reference",
        "schema": "array",
        "description": "Reference value used to identify a note or group of notes"
      },
      {
        "name": "createdAt",
        "schema": "array",
        "description": "Search for notes created at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "updatedAt",
        "schema": "array",
        "description": "Search for notes updated at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "Sort the results by one or multiple fields, prefix with \"-\" to sort descending.<br />\r\nFields available for sorting are: type, createdAt, updatedAt"
      },
      {
        "name": "fields",
        "schema": "array",
        "description": "Additional fields to include with the results.<br />\r\nFields available to include are: text"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/companies/{companyId}/notes",
    "method": "addNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company API:Notes",
    "typeScriptTag": "companyApi:notes",
    "description": "Add a company note",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEXT"
      },
      {
        "name": "contactId",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "createdBy",
        "schema": "object",
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
        "statusCode": "404",
        "description": "Company was not found"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/activities",
    "method": "getCompanyActivities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company API:Activities",
    "typeScriptTag": "companyApi:activities",
    "description": "Get company activities",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company Id",
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
    "url": "/companies/{companyId}/activities",
    "method": "addNewActivity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company API:Activities",
    "typeScriptTag": "companyApi:activities",
    "description": "Add a company activity",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company Id",
        "example": 0
      },
      {
        "name": "activitySettingId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "statusId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "answers",
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
        "statusCode": "404",
        "description": "Company was not found"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/activities/{activityId}",
    "method": "getActivity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company API:Activities",
    "typeScriptTag": "companyApi:activities",
    "description": "Get a company activity",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company Id",
        "example": 0
      },
      {
        "name": "activityId",
        "schema": "integer",
        "required": true,
        "description": "Activity Id",
        "example": 0
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
      }
    ]
  },
  {
    "url": "/companies/{companyId}/usertasks",
    "method": "addTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company API:UserTasks",
    "typeScriptTag": "companyApi:userTasks",
    "description": "Add a company user task",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company Id",
        "example": 0
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "startAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "allDay",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "assignees",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "candidates",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "jobs",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "placements",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "companies",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "contacts",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "applications",
        "schema": "array",
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
        "statusCode": "404",
        "description": "Company was not found"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/usertasks/{taskId}",
    "method": "getTask",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company API:UserTasks",
    "typeScriptTag": "companyApi:userTasks",
    "description": "Get a company user task",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company Id",
        "example": 0
      },
      {
        "name": "taskId",
        "schema": "integer",
        "required": true,
        "description": "Task Id",
        "example": 0
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
      }
    ]
  },
  {
    "url": "/companies/{companyId}/usertasks/{taskId}",
    "method": "updateTask",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Company API:UserTasks",
    "typeScriptTag": "companyApi:userTasks",
    "description": "Update a company user task",
    "parameters": [
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company Id",
        "example": 0
      },
      {
        "name": "taskId",
        "schema": "integer",
        "required": true,
        "description": "Task Id",
        "example": 0
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "startAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "allDay",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "assignees",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "candidates",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "jobs",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "placements",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "companies",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "contacts",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "applications",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Company user task was successfully updated"
      },
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Company user task was not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies/activities",
    "method": "findCompanyActivities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company API:Activities",
    "typeScriptTag": "companyApi:activities",
    "description": "Find company activities",
    "parameters": [
      {
        "name": "createdAt",
        "schema": "array",
        "description": "Search for activities performed at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "updatedAt",
        "schema": "array",
        "description": "Search for activities updated at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "includeDetails",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/companies/activitysettings",
    "method": "getAllActivitySettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company API:Activities",
    "typeScriptTag": "companyApi:activities",
    "description": "Get all company activity settings definitions",
    "parameters": [
      {
        "name": "query",
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
    "url": "/companies/activitysettings/{settingId}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company API:Activities",
    "typeScriptTag": "companyApi:activities",
    "description": "Get Company activity settings with details",
    "parameters": [
      {
        "name": "settingId",
        "schema": "integer",
        "required": true,
        "description": "Activity Setting Id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Requested company activity settings were not found"
      }
    ]
  },
  {
    "url": "/companies/deleted",
    "method": "getRecentlyDeleted",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company API:Companies",
    "typeScriptTag": "companyApi:companies",
    "description": "Recently deleted companies",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies/fields/custom",
    "method": "customFieldsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company API:Lists",
    "typeScriptTag": "companyApi:lists",
    "description": "Get the list of company custom fields",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies/fields/custom/{fieldId}",
    "method": "customFieldGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company API:Lists",
    "typeScriptTag": "companyApi:lists",
    "description": "Get a company custom field",
    "parameters": [
      {
        "name": "fieldId",
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
      },
      {
        "statusCode": "404",
        "description": "Requested company custom field definition was not found"
      }
    ]
  },
  {
    "url": "/companies/fields/custom/{fieldId}",
    "method": "modifyFieldValues",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Company API:Lists",
    "typeScriptTag": "companyApi:lists",
    "description": "Modify custom field list values",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "values",
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
        "statusCode": "404",
        "description": "Requested company custom field definition was not found"
      }
    ]
  },
  {
    "url": "/companies/lists/attachmentcategory",
    "method": "getAllAttachmentCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company API:Attachments",
    "typeScriptTag": "companyApi:attachments",
    "description": "Get all attachment categories",
    "parameters": [
      {
        "name": "type",
        "schema": "array",
        "description": "Optionally filter to specific attachment types"
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
    "url": "/companies/lists/notetype",
    "method": "getNoteTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company API:Notes",
    "typeScriptTag": "companyApi:notes",
    "description": "Get a list of company note types",
    "parameters": [
      {
        "name": "name",
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
    "url": "/companies/lists/status",
    "method": "getStatusDefinitions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company API:Lists",
    "typeScriptTag": "companyApi:lists",
    "description": "Get a list of company status definitions",
    "parameters": [
      {
        "name": "statusId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "default",
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
    "url": "/companies/lists/status/{statusId}",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company API:Lists",
    "typeScriptTag": "companyApi:lists",
    "description": "Get a company status",
    "parameters": [
      {
        "name": "statusId",
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
      },
      {
        "statusCode": "404",
        "description": "Requested company status definition was not found"
      }
    ]
  },
  {
    "url": "/contacts",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact API:Contacts",
    "typeScriptTag": "contactApi:contacts",
    "description": "Find contacts",
    "parameters": [
      {
        "name": "contactId",
        "schema": "array",
        "description": "Contact Id"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "Contact name"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "Contact email"
      },
      {
        "name": "phone",
        "schema": "string",
        "description": "Contact phone or mobile number"
      },
      {
        "name": "companyId",
        "schema": "array",
        "description": "Company Id"
      },
      {
        "name": "hiringManager",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "statusId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "partnerActionActionId",
        "schema": "array",
        "description": "Unique identifier for partner actions"
      },
      {
        "name": "partnerActionReference",
        "schema": "array",
        "description": "Partner supplied unique reference for the action"
      },
      {
        "name": "partnerActionStage",
        "schema": "array",
        "description": "Include partner actions at a specific stage"
      },
      {
        "name": "partnerActionSubmittedAt",
        "schema": "array",
        "description": "Search for entities submitted to an action at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "folderId",
        "schema": "array",
        "description": "Search in specific folders"
      },
      {
        "name": "createdBy",
        "schema": "array",
        "description": "User Id - search for contacts created by the specified user(https://api.jobadder.com/v2/docs"
      },
      {
        "name": "createdAt",
        "schema": "array",
        "description": "Search for contacts created at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "updatedBy",
        "schema": "array",
        "description": "User Id - search for contacts last updated by the specified user(https://api.jobadder.com/v2/docs"
      },
      {
        "name": "updatedAt",
        "schema": "array",
        "description": "Search for contacts updated at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "fields",
        "schema": "array",
        "description": "Additional fields to include with the results.\r\nFields available to include are: partnerActions"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Embed related resources.<br />\r\nResources available to embed are: self, skills, notes, jobs"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/contacts",
    "method": "addNewContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact API:Contacts",
    "typeScriptTag": "contactApi:contacts",
    "description": "Add a new contact",
    "parameters": [
      {
        "name": "xAllowDuplicates",
        "schema": "string",
        "description": "Duplicate override code from the header of an earlier 409 response"
      },
      {
        "name": "summary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mobile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "salutation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unsubscribed",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "social",
        "schema": "object",
        "description": ""
      },
      {
        "name": "position",
        "schema": "string",
        "description": ""
      },
      {
        "name": "companyId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "reportsToContactId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "officeAddressId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "statusId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "custom",
        "schema": "array",
        "description": ""
      },
      {
        "name": "ownerUserId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "recruiterUserId",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{contactId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact API:Contacts",
    "typeScriptTag": "contactApi:contacts",
    "description": "Get a contact",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "Contact Id",
        "example": 0
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Embed related resources.<br />\r\nResources available to embed are: skills, notes, jobs"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Requested contact was not found"
      }
    ]
  },
  {
    "url": "/contacts/{contactId}",
    "method": "updateExistingContact",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contact API:Contacts",
    "typeScriptTag": "contactApi:contacts",
    "description": "Update an existing contact",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "xAllowDuplicates",
        "schema": "string",
        "description": "Duplicate override code from the header of an earlier 409 response"
      },
      {
        "name": "summary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mobile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "salutation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unsubscribed",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "social",
        "schema": "object",
        "description": ""
      },
      {
        "name": "position",
        "schema": "string",
        "description": ""
      },
      {
        "name": "companyId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "reportsToContactId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "officeAddressId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "statusId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "custom",
        "schema": "array",
        "description": ""
      },
      {
        "name": "ownerUserId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "recruiterUserId",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contact was successfully updated"
      },
      {
        "statusCode": "404",
        "description": "Requested contact was not found"
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{contactId}/photo",
    "method": "removePhoto",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contact API:Contacts",
    "typeScriptTag": "contactApi:contacts",
    "description": "Remove photo",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      },
      {
        "statusCode": "404",
        "description": "Contact was not found"
      }
    ]
  },
  {
    "url": "/contacts/{contactId}/photo",
    "method": "getPhoto",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact API:Contacts",
    "typeScriptTag": "contactApi:contacts",
    "description": "Get a contact photo",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "Contact Id",
        "example": 0
      },
      {
        "name": "w",
        "schema": "integer",
        "description": "Reduce the size of the photo to fit the width specified by w"
      },
      {
        "name": "h",
        "schema": "integer",
        "description": "Reduce the size of the photo to fit the height specified by g"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Requested contact photo was not found"
      }
    ]
  },
  {
    "url": "/contacts/{contactId}/photo",
    "method": "getPhotoHeaders",
    "httpMethod": HttpMethodsEnum.HEAD,
    "tag": "Contact API:Contacts",
    "typeScriptTag": "contactApi:contacts",
    "description": "Get a contact photo headers",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "Contact Id",
        "example": 0
      },
      {
        "name": "w",
        "schema": "integer",
        "description": "Reduce the size of the photo to fit the width specified by w"
      },
      {
        "name": "h",
        "schema": "integer",
        "description": "Reduce the size of the photo to fit the height specified by g"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "404",
        "description": "Requested contact photo was not found"
      }
    ]
  },
  {
    "url": "/contacts/{contactId}/photo",
    "method": "updatePhoto",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contact API:Contacts",
    "typeScriptTag": "contactApi:contacts",
    "description": "Update a contact photo",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "fileData",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILEDATA"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      },
      {
        "statusCode": "404",
        "description": "Contact was not found"
      }
    ]
  },
  {
    "url": "/contacts/{contactId}/jobs",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact API:Jobs",
    "typeScriptTag": "contactApi:jobs",
    "description": "Get all jobs for a contact",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "Contact Id",
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
    "url": "/contacts/{contactId}/jobs/active",
    "method": "getActive",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact API:Jobs",
    "typeScriptTag": "contactApi:jobs",
    "description": "Get all active/open jobs for a contact",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "Contact Id",
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
    "url": "/contacts/{contactId}/interviews",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact API:Interviews",
    "typeScriptTag": "contactApi:interviews",
    "description": "Get all Interviews",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "Contact Id",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/contacts/{contactId}/skills",
    "method": "getContactSkills",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact API:Skills",
    "typeScriptTag": "contactApi:skills",
    "description": "Get contact skills",
    "parameters": [
      {
        "name": "contactId",
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
    "url": "/contacts/{contactId}/attachments",
    "method": "find",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact API:Attachments",
    "typeScriptTag": "contactApi:attachments",
    "description": "Find attachments",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "type",
        "schema": "array",
        "description": "Attachment types to include"
      },
      {
        "name": "latest",
        "schema": "boolean",
        "description": "Find the latest version of each attachment type"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/contacts/{contactId}/attachments/{attach}",
    "method": "getAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact API:Attachments",
    "typeScriptTag": "contactApi:attachments",
    "description": "Get an attachment",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "attach",
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
      },
      {
        "statusCode": "404",
        "description": "Requested contact attachment was not found"
      }
    ]
  },
  {
    "url": "/contacts/{contactId}/attachments/{attach}",
    "method": "addSingleAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact API:Attachments",
    "typeScriptTag": "contactApi:attachments",
    "description": "Add a single attachment",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "Contact Id",
        "example": 0
      },
      {
        "name": "attach",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ATTACH"
      },
      {
        "name": "fileData",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILEDATA"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Contact was not found"
      }
    ]
  },
  {
    "url": "/contacts/{contactId}/attachments/{attach}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contact API:Attachments",
    "typeScriptTag": "contactApi:attachments",
    "description": "Update attachment details",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "Contact Id",
        "example": 0
      },
      {
        "name": "attach",
        "schema": "integer",
        "required": true,
        "description": "Attachment Id",
        "example": 0
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "category",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expiry",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      },
      {
        "statusCode": "404",
        "description": "Attachment was not found"
      }
    ]
  },
  {
    "url": "/contacts/{contactId}/status",
    "method": "updateStatusAndNote",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contact API:Contacts",
    "typeScriptTag": "contactApi:contacts",
    "description": "Set a contact status",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "statusId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "note",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contact status was successfully updated"
      },
      {
        "statusCode": "202",
        "description": "Contact status already assigned"
      },
      {
        "statusCode": "404",
        "description": "Contact was not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/{contactId}/notes",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact API:Notes",
    "typeScriptTag": "contactApi:notes",
    "description": "Get contact notes",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "Contact Id",
        "example": 0
      },
      {
        "name": "noteId",
        "schema": "array",
        "description": "Note Id"
      },
      {
        "name": "type",
        "schema": "array",
        "description": "Note type"
      },
      {
        "name": "reference",
        "schema": "array",
        "description": "Reference value used to identify a note or group of notes"
      },
      {
        "name": "createdAt",
        "schema": "array",
        "description": "Search for notes created at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "updatedAt",
        "schema": "array",
        "description": "Search for notes updated at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "Sort the results by one or multiple fields, prefix with \"-\" to sort descending.<br />\r\nFields available for sorting are: type, createdAt, updatedAt"
      },
      {
        "name": "fields",
        "schema": "array",
        "description": "Additional fields to include with the results.<br />\r\nFields available to include are: text"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/contacts/{contactId}/notes",
    "method": "addNewNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact API:Notes",
    "typeScriptTag": "contactApi:notes",
    "description": "Add a contact note",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEXT"
      },
      {
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "createdBy",
        "schema": "object",
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
        "statusCode": "404",
        "description": "Contact was not found"
      }
    ]
  },
  {
    "url": "/contacts/{contactId}/activities",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact API:Activities",
    "typeScriptTag": "contactApi:activities",
    "description": "Get contact activities",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "Contact Id",
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
    "url": "/contacts/{contactId}/activities",
    "method": "addNewActivity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact API:Activities",
    "typeScriptTag": "contactApi:activities",
    "description": "Add a contact activity",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "Contact Id",
        "example": 0
      },
      {
        "name": "activitySettingId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "statusId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "answers",
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
        "statusCode": "404",
        "description": "Contact was not found"
      }
    ]
  },
  {
    "url": "/contacts/{contactId}/activities/{activityId}",
    "method": "getOneActivity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact API:Activities",
    "typeScriptTag": "contactApi:activities",
    "description": "Get a contact activity",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "Contact Id",
        "example": 0
      },
      {
        "name": "activityId",
        "schema": "integer",
        "required": true,
        "description": "Activity Id",
        "example": 0
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
      }
    ]
  },
  {
    "url": "/contacts/{contactId}/usertasks",
    "method": "addNewTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact API:UserTasks",
    "typeScriptTag": "contactApi:userTasks",
    "description": "Add a contact user task",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "Contact Id",
        "example": 0
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "startAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "allDay",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "assignees",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "candidates",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "jobs",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "placements",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "companies",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "contacts",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "applications",
        "schema": "array",
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
        "statusCode": "404",
        "description": "Contact was not found"
      }
    ]
  },
  {
    "url": "/contacts/{contactId}/usertasks/{taskId}",
    "method": "getTask",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact API:UserTasks",
    "typeScriptTag": "contactApi:userTasks",
    "description": "Get a contact user task",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "Contact Id",
        "example": 0
      },
      {
        "name": "taskId",
        "schema": "integer",
        "required": true,
        "description": "Task Id",
        "example": 0
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
      }
    ]
  },
  {
    "url": "/contacts/{contactId}/usertasks/{taskId}",
    "method": "updateTask",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contact API:UserTasks",
    "typeScriptTag": "contactApi:userTasks",
    "description": "Update a contact user task",
    "parameters": [
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "Contact Id",
        "example": 0
      },
      {
        "name": "taskId",
        "schema": "integer",
        "required": true,
        "description": "Task Id",
        "example": 0
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "startAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "allDay",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "assignees",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "candidates",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "jobs",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "placements",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "companies",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "contacts",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "applications",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Contact user task was successfully updated"
      },
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Contact user task was not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/activities",
    "method": "find",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact API:Activities",
    "typeScriptTag": "contactApi:activities",
    "description": "Find contact activities",
    "parameters": [
      {
        "name": "createdAt",
        "schema": "array",
        "description": "Search for activities performed at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "updatedAt",
        "schema": "array",
        "description": "Search for activities updated at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "includeDetails",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/contacts/activitysettings",
    "method": "getAllActivitySettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact API:Activities",
    "typeScriptTag": "contactApi:activities",
    "description": "Get all contact activity settings definitions",
    "parameters": [
      {
        "name": "query",
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
    "url": "/contacts/activitysettings/{settingId}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact API:Activities",
    "typeScriptTag": "contactApi:activities",
    "description": "Get contact activity settings with details",
    "parameters": [
      {
        "name": "settingId",
        "schema": "integer",
        "required": true,
        "description": "Activity Setting Id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Requested contact activity settings were not found"
      }
    ]
  },
  {
    "url": "/contacts/deleted",
    "method": "getRecentDeletions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact API:Contacts",
    "typeScriptTag": "contactApi:contacts",
    "description": "Recently deleted contacts",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/fields/custom",
    "method": "customFieldsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact API:Lists",
    "typeScriptTag": "contactApi:lists",
    "description": "Get the list of Contact custom fields",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/fields/custom/{fieldId}",
    "method": "getCustomField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact API:Lists",
    "typeScriptTag": "contactApi:lists",
    "description": "Get a Contact custom field",
    "parameters": [
      {
        "name": "fieldId",
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
      },
      {
        "statusCode": "404",
        "description": "Requested contact custom field definition was not found"
      }
    ]
  },
  {
    "url": "/contacts/fields/custom/custom/{fieldId}",
    "method": "modifyCustomFieldListValues",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contact API:Lists",
    "typeScriptTag": "contactApi:lists",
    "description": "Modify custom field list values",
    "parameters": [
      {
        "name": "fieldId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "values",
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
        "statusCode": "404",
        "description": "Requested contact custom field definition was not found"
      }
    ]
  },
  {
    "url": "/contacts/lists/attachmentcategory",
    "method": "getAllAttachmentCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact API:Attachments",
    "typeScriptTag": "contactApi:attachments",
    "description": "Get all attachment categories",
    "parameters": [
      {
        "name": "type",
        "schema": "array",
        "description": "Optionally filter to specific attachment types"
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
    "url": "/contacts/lists/notetype",
    "method": "getNoteTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact API:Notes",
    "typeScriptTag": "contactApi:notes",
    "description": "Get a list of contact note types",
    "parameters": [
      {
        "name": "name",
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
    "url": "/contacts/lists/salutation",
    "method": "getSalutations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact API:Lists",
    "typeScriptTag": "contactApi:lists",
    "description": "Get salutations (https://api.jobadder.com/v2/docs",
    "parameters": [
      {
        "name": "name",
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
    "url": "/contacts/lists/status",
    "method": "getStatusDefinitions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact API:Lists",
    "typeScriptTag": "contactApi:lists",
    "description": "Get a list of contact status definitions",
    "parameters": [
      {
        "name": "statusId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "default",
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
    "url": "/contacts/lists/status/{statusId}",
    "method": "getStatusDefinition",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact API:Lists",
    "typeScriptTag": "contactApi:lists",
    "description": "Get a contact status definition",
    "parameters": [
      {
        "name": "statusId",
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
      },
      {
        "statusCode": "404",
        "description": "Requested contact status definition was not found"
      }
    ]
  },
  {
    "url": "/notes",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Note API:Notes",
    "typeScriptTag": "noteApi:notes",
    "description": "Find notes",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "array",
        "description": "Candidate Id"
      },
      {
        "name": "companyId",
        "schema": "array",
        "description": "Company Id"
      },
      {
        "name": "contactId",
        "schema": "array",
        "description": "Contact Id"
      },
      {
        "name": "jobId",
        "schema": "array",
        "description": "Job Id"
      },
      {
        "name": "requisitionId",
        "schema": "array",
        "description": "Requisition Id"
      },
      {
        "name": "applicationId",
        "schema": "array",
        "description": "Job Application Id"
      },
      {
        "name": "placementId",
        "schema": "array",
        "description": "Placement Id"
      },
      {
        "name": "entityType",
        "schema": "string",
        "description": "Filter notes by Entity Type.<br />\r\nEntity Type must be any of: candidate, contact, company, job, placement, requisition"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Embed related resources.<br />\r\nResources available to embed are: self, candidates, contacts, placements, jobs, jobapplications, companies, requisitions\r\nNote: embed=self everything is embeded by default"
      },
      {
        "name": "noteId",
        "schema": "array",
        "description": "Note Id"
      },
      {
        "name": "type",
        "schema": "array",
        "description": "Note type"
      },
      {
        "name": "reference",
        "schema": "array",
        "description": "Reference value used to identify a note or group of notes"
      },
      {
        "name": "createdAt",
        "schema": "array",
        "description": "Search for notes created at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "updatedAt",
        "schema": "array",
        "description": "Search for notes updated at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "sort",
        "schema": "array",
        "description": "Sort the results by one or multiple fields, prefix with \"-\" to sort descending.<br />\r\nFields available for sorting are: type, createdAt, updatedAt"
      },
      {
        "name": "fields",
        "schema": "array",
        "description": "Additional fields to include with the results.<br />\r\nFields available to include are: text"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/notes",
    "method": "createNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Note API:Notes",
    "typeScriptTag": "noteApi:notes",
    "description": "Add a note",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEXT"
      },
      {
        "name": "jobId",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "requisitionId",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "candidateId",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "applicationId",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "placementId",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "companyId",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "contactId",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "createdByIntegration",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "createdBy",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/notes/{noteId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Note API:Notes",
    "typeScriptTag": "noteApi:notes",
    "description": "Get a note",
    "parameters": [
      {
        "name": "noteId",
        "schema": "string",
        "required": true,
        "description": "Note Id",
        "example": "NOTEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Requested note was not found"
      }
    ]
  },
  {
    "url": "/notes/{noteId}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Note API:Notes",
    "typeScriptTag": "noteApi:notes",
    "description": "Update a note",
    "parameters": [
      {
        "name": "noteId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NOTEID"
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "text",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      },
      {
        "statusCode": "404",
        "description": "Specified note was not found"
      }
    ]
  },
  {
    "url": "/notes/{noteId}/attachments",
    "method": "addSingleAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Note API:Attachments",
    "typeScriptTag": "noteApi:attachments",
    "description": "Add a single attachment",
    "parameters": [
      {
        "name": "noteId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NOTEID"
      },
      {
        "name": "fileData",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILEDATA"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Created"
      },
      {
        "statusCode": "404",
        "description": "Note was not found"
      }
    ]
  },
  {
    "url": "/notes/{noteId}/attachments/{attachmentId}",
    "method": "getAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Note API:Attachments",
    "typeScriptTag": "noteApi:attachments",
    "description": "Get a note attachment",
    "parameters": [
      {
        "name": "noteId",
        "schema": "string",
        "required": true,
        "description": "Note Id",
        "example": "NOTEID"
      },
      {
        "name": "attachmentId",
        "schema": "string",
        "required": true,
        "description": "Attachment Id",
        "example": "ATTACHMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Requested note attachment was not found"
      }
    ]
  },
  {
    "url": "/folders",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Folder API:Folders",
    "typeScriptTag": "folderApi:folders",
    "description": "Find folders",
    "parameters": [
      {
        "name": "folderId",
        "schema": "array",
        "description": "Folder Id"
      },
      {
        "name": "jobId",
        "schema": "array",
        "description": "Job Id"
      },
      {
        "name": "candidateId",
        "schema": "array",
        "description": "Candidate Id"
      },
      {
        "name": "applicationId",
        "schema": "array",
        "description": "Job Application Id"
      },
      {
        "name": "placementId",
        "schema": "array",
        "description": "Placement Id"
      },
      {
        "name": "companyId",
        "schema": "array",
        "description": "Company Id"
      },
      {
        "name": "contactId",
        "schema": "array",
        "description": "Contact Id"
      },
      {
        "name": "userId",
        "schema": "array",
        "description": "User Id - search for folders by owner or shared with the specified users"
      },
      {
        "name": "ownerUserId",
        "schema": "array",
        "description": "User Id - search for folders by owner"
      },
      {
        "name": "sharedWithUserId",
        "schema": "array",
        "description": "User Id - search folders shared with the specified users"
      },
      {
        "name": "ownerStatus",
        "schema": "string",
        "description": "Owner status"
      },
      {
        "name": "createdAt",
        "schema": "array",
        "description": "Search for folders created at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "updatedAt",
        "schema": "array",
        "description": "Search for folders updated at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "fields",
        "schema": "array",
        "description": "Additional fields to include with the results.\r\nFields available to include are: sharedWith"
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Embed related resources.<br />\r\nResources available to embed are: self, jobs, candidates, applications, contacts, companies, placements"
      },
      {
        "name": "embedMode",
        "schema": "string",
        "description": "Determines what gets returned when embed option is one of self or candidates/contacts/etc.<br />\r\nResources available to embedMode are: id"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/folders/{folderId}",
    "method": "getFolder",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Folder API:Folders",
    "typeScriptTag": "folderApi:folders",
    "description": "Get a folder",
    "parameters": [
      {
        "name": "folderId",
        "schema": "integer",
        "required": true,
        "description": "Folder Id",
        "example": 0
      },
      {
        "name": "embedMode",
        "schema": "string",
        "description": "Determines what gets returned when embed option is one of self or canddiates/contacts/etc.<br />\r\nResources available to embedMode are: id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Requested folder was not found"
      }
    ]
  },
  {
    "url": "/folders/{folderId}",
    "method": "modifyEntitiesInFolder",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Folder API:Folders",
    "typeScriptTag": "folderApi:folders",
    "description": "Add or remove entities in folder",
    "parameters": [
      {
        "name": "folderId",
        "schema": "integer",
        "required": true,
        "description": "Folder Id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      },
      {
        "statusCode": "404",
        "description": "Specified folder was not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/users",
    "method": "find",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User API:Users",
    "typeScriptTag": "userApi:users",
    "description": "Find users",
    "parameters": [
      {
        "name": "userId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "officeId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "groupId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "array",
        "description": "Search for users created at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "updatedBy",
        "schema": "array",
        "description": "User Id - search for jobs last updated by the specified user(https://api.jobadder.com/v2/docs"
      },
      {
        "name": "updatedAt",
        "schema": "array",
        "description": "Search for users updated at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "include",
        "schema": "array",
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/users/{userId}",
    "method": "getUserById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User API:Users",
    "typeScriptTag": "userApi:users",
    "description": "Get a user",
    "parameters": [
      {
        "name": "userId",
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
      },
      {
        "statusCode": "404",
        "description": "Requested user was not found"
      }
    ]
  },
  {
    "url": "/users/current",
    "method": "getCurrentUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User API:Users",
    "typeScriptTag": "userApi:users",
    "description": "Get the current user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Current user was not found (https://api.jobadder.com/v2/docs"
      }
    ]
  },
  {
    "url": "/users/{userId}/photo",
    "method": "getUserPhoto",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User API:Users",
    "typeScriptTag": "userApi:users",
    "description": "Get a user photo",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "User Id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Requested user photo was not found"
      }
    ]
  },
  {
    "url": "/users/{userId}/usertasks",
    "method": "getUserTasks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User API:Tasks",
    "typeScriptTag": "userApi:tasks",
    "description": "Find user tasks",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "startAt",
        "schema": "array",
        "description": "Search for tasks starting at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "include",
        "schema": "array",
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/users/{userId}/interviews",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User API:Interviews",
    "typeScriptTag": "userApi:interviews",
    "description": "Get all Interviews",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "User Id",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/users/{userId}/usergroups",
    "method": "getUserGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User API:Groups",
    "typeScriptTag": "userApi:groups",
    "description": "Get user groups",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "User Id",
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
    "url": "/usergroups",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Group API:Groups",
    "typeScriptTag": "userGroupApi:groups",
    "description": "Find groups",
    "parameters": [
      {
        "name": "groupId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "userId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/usergroups/{groupId}",
    "method": "getGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Group API:Groups",
    "typeScriptTag": "userGroupApi:groups",
    "description": "Get a group",
    "parameters": [
      {
        "name": "groupId",
        "schema": "integer",
        "required": true,
        "description": "Group Id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Requested user group was not found"
      }
    ]
  },
  {
    "url": "/usergroups/{groupId}/users",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Group API:Users",
    "typeScriptTag": "userGroupApi:users",
    "description": "Get users",
    "parameters": [
      {
        "name": "groupId",
        "schema": "integer",
        "required": true,
        "description": "Group Id",
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
    "url": "/useroffices",
    "method": "findUserOffices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Office API:Offices",
    "typeScriptTag": "userOfficeApi:offices",
    "description": "Find user offices",
    "parameters": [
      {
        "name": "officeId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "userId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/useroffices/{officeId}",
    "method": "getUserOffice",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Office API:Offices",
    "typeScriptTag": "userOfficeApi:offices",
    "description": "Get a user office",
    "parameters": [
      {
        "name": "officeId",
        "schema": "integer",
        "required": true,
        "description": "Office Id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Requested user office was not found"
      }
    ]
  },
  {
    "url": "/useroffices/{officeId}/users",
    "method": "getByOfficeId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Office API:Users",
    "typeScriptTag": "userOfficeApi:users",
    "description": "Get users",
    "parameters": [
      {
        "name": "officeId",
        "schema": "integer",
        "required": true,
        "description": "Office Id",
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
    "url": "/usertasks",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Task API:Tasks",
    "typeScriptTag": "userTaskApi:tasks",
    "description": "Find user tasks",
    "parameters": [
      {
        "name": "userId",
        "schema": "array",
        "description": "Search for tasks assigned to or owned by the specified users"
      },
      {
        "name": "startAt",
        "schema": "array",
        "description": "Search for tasks starting at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "createdBy",
        "schema": "array",
        "description": "User Id - search for companies created by the specified user(https://api.jobadder.com/v2/docs"
      },
      {
        "name": "createdAt",
        "schema": "array",
        "description": "Search for tasks created at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "updatedBy",
        "schema": "array",
        "description": "User Id - search for companies last updated by the specified user(https://api.jobadder.com/v2/docs"
      },
      {
        "name": "updatedAt",
        "schema": "array",
        "description": "Search for tasks updated at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "include",
        "schema": "array",
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/usertasks",
    "method": "createTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User Task API:Tasks",
    "typeScriptTag": "userTaskApi:tasks",
    "description": "Create a user task",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "startAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "allDay",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "assignees",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/usertasks/{taskId}",
    "method": "deleteTask",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "User Task API:Tasks",
    "typeScriptTag": "userTaskApi:tasks",
    "description": "Delete a user task",
    "parameters": [
      {
        "name": "taskId",
        "schema": "integer",
        "required": true,
        "description": "Task Id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      },
      {
        "statusCode": "404",
        "description": "User task was not found"
      }
    ]
  },
  {
    "url": "/usertasks/{taskId}",
    "method": "getTask",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Task API:Tasks",
    "typeScriptTag": "userTaskApi:tasks",
    "description": "Get a user task",
    "parameters": [
      {
        "name": "taskId",
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
    "url": "/usertasks/{taskId}",
    "method": "updateTask",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User Task API:Tasks",
    "typeScriptTag": "userTaskApi:tasks",
    "description": "Update a user task",
    "parameters": [
      {
        "name": "taskId",
        "schema": "integer",
        "required": true,
        "description": "Task Id",
        "example": 0
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "startAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "allDay",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "assignees",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User task was successfully updated"
      },
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "User task was not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/usertasks/{taskId}/complete",
    "method": "markComplete",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User Task API:Tasks",
    "typeScriptTag": "userTaskApi:tasks",
    "description": "Mark user task as complete",
    "parameters": [
      {
        "name": "taskId",
        "schema": "integer",
        "required": true,
        "description": "Task Id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      },
      {
        "statusCode": "404",
        "description": "User task was not found"
      }
    ]
  },
  {
    "url": "/usertasks/{taskId}/incomplete",
    "method": "markAsIncomplete",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User Task API:Tasks",
    "typeScriptTag": "userTaskApi:tasks",
    "description": "Mark user task as incomplete",
    "parameters": [
      {
        "name": "taskId",
        "schema": "integer",
        "required": true,
        "description": "Task Id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      },
      {
        "statusCode": "404",
        "description": "User task was not found"
      }
    ]
  },
  {
    "url": "/interviews",
    "method": "find",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Interview API:Interviews",
    "typeScriptTag": "interviewApi:interviews",
    "description": "Find interviews",
    "parameters": [
      {
        "name": "interviewId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "jobId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "userId",
        "schema": "array",
        "description": "User Id - search for internal/user interviewers"
      },
      {
        "name": "contactId",
        "schema": "array",
        "description": "Contact Id - search for external/contact interviewers"
      },
      {
        "name": "candidateId",
        "schema": "array",
        "description": "Candidate Id - search for interviewees by candidateId"
      },
      {
        "name": "applicationId",
        "schema": "array",
        "description": "Application Id - search for interviewees by applicationId"
      },
      {
        "name": "type",
        "schema": "array",
        "description": ""
      },
      {
        "name": "startAt",
        "schema": "array",
        "description": "Search for interviews starting at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "endAt",
        "schema": "array",
        "description": "Search for interviews ending at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "location",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdBy",
        "schema": "array",
        "description": "User Id - search for interviews created by the specified user(https://api.jobadder.com/v2/docs"
      },
      {
        "name": "createdAt",
        "schema": "array",
        "description": "Search for interviews created at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "updatedAt",
        "schema": "array",
        "description": "Search for interviews updated at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Embed related resources.<br />\r\nResources available to embed are: self, evaluations"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/interviews/{interviewId}",
    "method": "deleteInterviewById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Interview API:Interviews",
    "typeScriptTag": "interviewApi:interviews",
    "description": "Delete an interview",
    "parameters": [
      {
        "name": "interviewId",
        "schema": "integer",
        "required": true,
        "description": "Interview Id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      },
      {
        "statusCode": "404",
        "description": "Interview was not found"
      }
    ]
  },
  {
    "url": "/interviews/{interviewId}/{applicationId}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Interview API:Interviews",
    "typeScriptTag": "interviewApi:interviews",
    "description": "Get an interview",
    "parameters": [
      {
        "name": "interviewId",
        "schema": "integer",
        "required": true,
        "description": "Interview Id",
        "example": 0
      },
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "Job Application Id",
        "example": 0
      },
      {
        "name": "embed",
        "schema": "array",
        "description": "Embed related resources.<br />\r\nResources available to embed are: evaluations"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Requested interview was not found"
      }
    ]
  },
  {
    "url": "/interviews/{interviewId}/{applicationId}/evaluations",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Interview API:Evaluations",
    "typeScriptTag": "interviewApi:evaluations",
    "description": "Get interview evaluations",
    "parameters": [
      {
        "name": "interviewId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "applicationId",
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
    "url": "/interviews/{interviewId}/{applicationId}/evaluations/external/{contactId}",
    "method": "getExternalContactEvaluation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Interview API:Evaluations",
    "typeScriptTag": "interviewApi:evaluations",
    "description": "Get an external/contact interview evaluation",
    "parameters": [
      {
        "name": "interviewId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "contactId",
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
    "url": "/interviews/{interviewId}/{applicationId}/evaluations/external/{contactId}",
    "method": "submitExternalContactEvaluation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Interview API:Evaluations",
    "typeScriptTag": "interviewApi:evaluations",
    "description": "Submit an external/contact interview evaluation",
    "parameters": [
      {
        "name": "interviewId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "comments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rating",
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
    "url": "/interviews/{interviewId}/{applicationId}/evaluations/internal/{userId}",
    "method": "getUserInterviewEvaluation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Interview API:Evaluations",
    "typeScriptTag": "interviewApi:evaluations",
    "description": "Get an internal/user interview evaluation",
    "parameters": [
      {
        "name": "interviewId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "userId",
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
    "url": "/interviews/{interviewId}/{applicationId}/evaluations/internal/{userId}",
    "method": "submitUserInterviewEvaluation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Interview API:Evaluations",
    "typeScriptTag": "interviewApi:evaluations",
    "description": "Submit an internal/user interview evaluation",
    "parameters": [
      {
        "name": "interviewId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "comments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rating",
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
    "url": "/categories",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Category API:Categories",
    "typeScriptTag": "categoryApi:categories",
    "description": "Find categories",
    "parameters": [
      {
        "name": "categoryId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "embed",
        "schema": "array",
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/countries",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Location API:Countries",
    "typeScriptTag": "locationApi:countries",
    "description": "Find countries",
    "parameters": [
      {
        "name": "code",
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
    "url": "/locations",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Location API:Locations",
    "typeScriptTag": "locationApi:locations",
    "description": "Find locations",
    "parameters": [
      {
        "name": "locationId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "embed",
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
    "url": "/worktypes",
    "method": "getAllWorkTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Work Type API:Work Types",
    "typeScriptTag": "workTypeApi:workTypes",
    "description": "Find work types",
    "parameters": [
      {
        "name": "workTypeId",
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
    "url": "/search/emailaddress",
    "method": "byEmailAddress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search API:Search",
    "typeScriptTag": "searchApi:search",
    "description": "Search by email address.",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "description": "Email address to search for."
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
    "url": "/search/phonenumber",
    "method": "byPhoneNumber",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search API:Search",
    "typeScriptTag": "searchApi:search",
    "description": "Search by phone number.",
    "parameters": [
      {
        "name": "e164",
        "schema": "string",
        "description": "[E.164 format phone number](https://en.wikipedia.org/wiki/E.164) to search for."
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
    "url": "/partners/actions",
    "method": "listActions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partner Action API:Actions",
    "typeScriptTag": "partnerActionApi:actions",
    "description": "Find partner actions",
    "parameters": [
      {
        "name": "actionType",
        "schema": "array",
        "description": "Type of action"
      },
      {
        "name": "actionId",
        "schema": "array",
        "description": "Unique identifier for partner actions"
      },
      {
        "name": "reference",
        "schema": "array",
        "description": "Partner supplied unique reference for the action"
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
    "url": "/partners/actions/{act}",
    "method": "deleteAction",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Partner Action API:Actions",
    "typeScriptTag": "partnerActionApi:actions",
    "description": "Delete a partner action",
    "parameters": [
      {
        "name": "act",
        "schema": "string",
        "required": true,
        "description": "Action Id",
        "example": "ACT"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      },
      {
        "statusCode": "404",
        "description": "Partner action was not found"
      }
    ]
  },
  {
    "url": "/partners/actions/{act}",
    "method": "getAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partner Action API:Actions",
    "typeScriptTag": "partnerActionApi:actions",
    "description": "Get a partner action",
    "parameters": [
      {
        "name": "act",
        "schema": "string",
        "required": true,
        "description": "Action Id",
        "example": "ACT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Partner action was not found"
      }
    ]
  },
  {
    "url": "/partners/actions/{act}",
    "method": "addPartnerAction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Partner Action API:Actions",
    "typeScriptTag": "partnerActionApi:actions",
    "description": "Add a partner action",
    "parameters": [
      {
        "name": "act",
        "schema": "string",
        "required": true,
        "description": "Action type. The type cannot be changed once assigned.",
        "example": "ACT"
      },
      {
        "name": "actionName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTIONNAME"
      },
      {
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "urlType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "allowResubmit",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "actionFilter",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "webhookData",
        "schema": "undefined",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/partners/actions/{act}",
    "method": "updateAction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Partner Action API:Actions",
    "typeScriptTag": "partnerActionApi:actions",
    "description": "Update a partner action",
    "parameters": [
      {
        "name": "act",
        "schema": "string",
        "required": true,
        "description": "Action Id",
        "example": "ACT"
      },
      {
        "name": "actionName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTIONNAME"
      },
      {
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "urlType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "allowResubmit",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "actionFilter",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "webhookData",
        "schema": "undefined",
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
        "statusCode": "404",
        "description": "Partner action was not found"
      }
    ]
  },
  {
    "url": "/partners/actions/{actionId}/applications",
    "method": "findSubmitted",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partner Action API:Job Applications",
    "typeScriptTag": "partnerActionApi:jobApplications",
    "description": "Find job applications submitted to an action",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "Action Id",
        "example": "ACTIONID"
      },
      {
        "name": "stage",
        "schema": "array",
        "description": "Include partner actions at a specific stage"
      },
      {
        "name": "submittedAt",
        "schema": "array",
        "description": "Search for entities submitted to an action at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/partners/actions/{actionId}/applications/{applicationId}/complete",
    "method": "completeAction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Partner Action API:Job Applications",
    "typeScriptTag": "partnerActionApi:jobApplications",
    "description": "Complete a job application action",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "Action Id",
        "example": "ACTIONID"
      },
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "Job Application Id",
        "example": 0
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "result",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      }
    ]
  },
  {
    "url": "/partners/actions/{actionId}/applications/{applicationId}/progress",
    "method": "updateProgress",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Partner Action API:Job Applications",
    "typeScriptTag": "partnerActionApi:jobApplications",
    "description": "Update job application action progress",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "Action Id",
        "example": "ACTIONID"
      },
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "Job Application Id",
        "example": 0
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "result",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      }
    ]
  },
  {
    "url": "/partners/actions/{actionId}/applications/{applicationId}/reject",
    "method": "rejectAction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Partner Action API:Job Applications",
    "typeScriptTag": "partnerActionApi:jobApplications",
    "description": "Reject a job application action",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "Action Id",
        "example": "ACTIONID"
      },
      {
        "name": "applicationId",
        "schema": "integer",
        "required": true,
        "description": "Job Application Id",
        "example": 0
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "result",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      }
    ]
  },
  {
    "url": "/partners/actions/{actionId}/candidates",
    "method": "findSubmittedCandidates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partner Action API:Candidates",
    "typeScriptTag": "partnerActionApi:candidates",
    "description": "Find candidates submitted to an action",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "Action Id",
        "example": "ACTIONID"
      },
      {
        "name": "stage",
        "schema": "array",
        "description": "Include partner actions at a specific stage"
      },
      {
        "name": "submittedAt",
        "schema": "array",
        "description": "Search for entities submitted to an action at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/partners/actions/{actionId}/candidates/{candidateId}/complete",
    "method": "completeAction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Partner Action API:Candidates",
    "typeScriptTag": "partnerActionApi:candidates",
    "description": "Complete a candidate action",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "Action Id",
        "example": "ACTIONID"
      },
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Candidate Id",
        "example": 0
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "result",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      }
    ]
  },
  {
    "url": "/partners/actions/{actionId}/candidates/{candidateId}/progress",
    "method": "updateProgress",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Partner Action API:Candidates",
    "typeScriptTag": "partnerActionApi:candidates",
    "description": "Update candidate action progress",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "Action Id",
        "example": "ACTIONID"
      },
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Candidate Id",
        "example": 0
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "result",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      }
    ]
  },
  {
    "url": "/partners/actions/{actionId}/candidates/{candidateId}/reject",
    "method": "rejectAction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Partner Action API:Candidates",
    "typeScriptTag": "partnerActionApi:candidates",
    "description": "Reject a candidate action",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "Action Id",
        "example": "ACTIONID"
      },
      {
        "name": "candidateId",
        "schema": "integer",
        "required": true,
        "description": "Candidate Id",
        "example": 0
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "result",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      }
    ]
  },
  {
    "url": "/partners/actions/{actionId}/companies",
    "method": "findSubmittedCompanies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partner Action API:Companies",
    "typeScriptTag": "partnerActionApi:companies",
    "description": "Find companies submitted to an action",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "Action Id",
        "example": "ACTIONID"
      },
      {
        "name": "stage",
        "schema": "array",
        "description": "Include partner actions at a specific stage"
      },
      {
        "name": "submittedAt",
        "schema": "array",
        "description": "Search for entities submitted to an action at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/partners/actions/{actionId}/companies/{companyId}/complete",
    "method": "completeAction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Partner Action API:Companies",
    "typeScriptTag": "partnerActionApi:companies",
    "description": "Complete a company action",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "Action Id",
        "example": "ACTIONID"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company Id",
        "example": 0
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "result",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      }
    ]
  },
  {
    "url": "/partners/actions/{actionId}/companies/{companyId}/progress",
    "method": "updateProgress",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Partner Action API:Companies",
    "typeScriptTag": "partnerActionApi:companies",
    "description": "Update company action progress",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "Action Id",
        "example": "ACTIONID"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company Id",
        "example": 0
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "result",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      }
    ]
  },
  {
    "url": "/partners/actions/{actionId}/companies/{companyId}/reject",
    "method": "rejectAction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Partner Action API:Companies",
    "typeScriptTag": "partnerActionApi:companies",
    "description": "Reject a company action",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "Action Id",
        "example": "ACTIONID"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "Company Id",
        "example": 0
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "result",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      }
    ]
  },
  {
    "url": "/partners/actions/{actionId}/contacts",
    "method": "findSubmittedContacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partner Action API:Contacts",
    "typeScriptTag": "partnerActionApi:contacts",
    "description": "Find contacts submitted to an action",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "Action Id",
        "example": "ACTIONID"
      },
      {
        "name": "stage",
        "schema": "array",
        "description": "Include partner actions at a specific stage"
      },
      {
        "name": "submittedAt",
        "schema": "array",
        "description": "Search for entities submitted to an action at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/partners/actions/{actionId}/contacts/{contactId}/complete",
    "method": "completeAction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Partner Action API:Contacts",
    "typeScriptTag": "partnerActionApi:contacts",
    "description": "Complete a contact action",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "Action Id",
        "example": "ACTIONID"
      },
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "Contact Id",
        "example": 0
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "result",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      }
    ]
  },
  {
    "url": "/partners/actions/{actionId}/contacts/{contactId}/progress",
    "method": "updateProgress",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Partner Action API:Contacts",
    "typeScriptTag": "partnerActionApi:contacts",
    "description": "Update contact action progress",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "Action Id",
        "example": "ACTIONID"
      },
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "Contact Id",
        "example": 0
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "result",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      }
    ]
  },
  {
    "url": "/partners/actions/{actionId}/contacts/{contactId}/reject",
    "method": "rejectAction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Partner Action API:Contacts",
    "typeScriptTag": "partnerActionApi:contacts",
    "description": "Reject a contact action",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "Action Id",
        "example": "ACTIONID"
      },
      {
        "name": "contactId",
        "schema": "integer",
        "required": true,
        "description": "Contact Id",
        "example": 0
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "result",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      }
    ]
  },
  {
    "url": "/partners/actions/{actionId}/jobads",
    "method": "findSubmittedJobAds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partner Action API:Job Ads",
    "typeScriptTag": "partnerActionApi:jobAds",
    "description": "Find job ads submitted to an action",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "Action Id",
        "example": "ACTIONID"
      },
      {
        "name": "stage",
        "schema": "array",
        "description": "Include partner actions at a specific stage"
      },
      {
        "name": "submittedAt",
        "schema": "array",
        "description": "Search for entities submitted to an action at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/partners/actions/{actionId}/jobads/{adId}/complete",
    "method": "completeAction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Partner Action API:Job Ads",
    "typeScriptTag": "partnerActionApi:jobAds",
    "description": "Complete a job ad action",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "Action Id",
        "example": "ACTIONID"
      },
      {
        "name": "adId",
        "schema": "integer",
        "required": true,
        "description": "Job Ad Id",
        "example": 0
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "result",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      }
    ]
  },
  {
    "url": "/partners/actions/{actionId}/jobads/{adId}/progress",
    "method": "updateProgress",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Partner Action API:Job Ads",
    "typeScriptTag": "partnerActionApi:jobAds",
    "description": "Update job ad action progress",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "Action Id",
        "example": "ACTIONID"
      },
      {
        "name": "adId",
        "schema": "integer",
        "required": true,
        "description": "Job Ad Id",
        "example": 0
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "result",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      }
    ]
  },
  {
    "url": "/partners/actions/{actionId}/jobads/{adId}/reject",
    "method": "rejectAction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Partner Action API:Job Ads",
    "typeScriptTag": "partnerActionApi:jobAds",
    "description": "Reject a job ad action",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "Action Id",
        "example": "ACTIONID"
      },
      {
        "name": "adId",
        "schema": "integer",
        "required": true,
        "description": "Job Ad Id",
        "example": 0
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "result",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      }
    ]
  },
  {
    "url": "/partners/actions/{actionId}/jobs",
    "method": "findJobsSubmitted",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partner Action API:Jobs",
    "typeScriptTag": "partnerActionApi:jobs",
    "description": "Find jobs submitted to an action",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "Action Id",
        "example": "ACTIONID"
      },
      {
        "name": "stage",
        "schema": "array",
        "description": "Include partner actions at a specific stage"
      },
      {
        "name": "submittedAt",
        "schema": "array",
        "description": "Search for entities submitted to an action at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/partners/actions/{actionId}/jobs/{jobId}/complete",
    "method": "completeJobAction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Partner Action API:Jobs",
    "typeScriptTag": "partnerActionApi:jobs",
    "description": "Complete a job action",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "Action Id",
        "example": "ACTIONID"
      },
      {
        "name": "jobId",
        "schema": "integer",
        "required": true,
        "description": "Job Id",
        "example": 0
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "result",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      }
    ]
  },
  {
    "url": "/partners/actions/{actionId}/jobs/{jobId}/progress",
    "method": "updateProgress",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Partner Action API:Jobs",
    "typeScriptTag": "partnerActionApi:jobs",
    "description": "Update job action progress",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "Action Id",
        "example": "ACTIONID"
      },
      {
        "name": "jobId",
        "schema": "integer",
        "required": true,
        "description": "Job Id",
        "example": 0
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "result",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      }
    ]
  },
  {
    "url": "/partners/actions/{actionId}/jobs/{jobId}/reject",
    "method": "rejectJobAction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Partner Action API:Jobs",
    "typeScriptTag": "partnerActionApi:jobs",
    "description": "Reject a job action",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "Action Id",
        "example": "ACTIONID"
      },
      {
        "name": "jobId",
        "schema": "integer",
        "required": true,
        "description": "Job Id",
        "example": 0
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "result",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      }
    ]
  },
  {
    "url": "/partners/actions/{actionId}/placements",
    "method": "findSubmittedPlacements",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Partner Action API:Placements",
    "typeScriptTag": "partnerActionApi:placements",
    "description": "Find placements submitted to an action",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "Action Id",
        "example": "ACTIONID"
      },
      {
        "name": "stage",
        "schema": "array",
        "description": "Include partner actions at a specific stage"
      },
      {
        "name": "submittedAt",
        "schema": "array",
        "description": "Search for entities submitted to an action at a specific date and time \r\n(UTC assumed, [ISO date-time](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#rfc.section.5.6)). \r\nPrefix with ```<``` or ```>``` to search dates before or after (https://api.jobadder.com/v2/docs the specified date and time.\r\nSpecify multiple times to search for a range."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first entry to return from the resource collection",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of entries to return.<br />\r\nSetting to 0 will return only the total count of matching resources.",
        "default": 100
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
    "url": "/partners/actions/{actionId}/placements/{placementId}/complete",
    "method": "completePlacementAction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Partner Action API:Placements",
    "typeScriptTag": "partnerActionApi:placements",
    "description": "Complete a placement action",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "Action Id",
        "example": "ACTIONID"
      },
      {
        "name": "placementId",
        "schema": "integer",
        "required": true,
        "description": "Placement Id",
        "example": 0
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "result",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      }
    ]
  },
  {
    "url": "/partners/actions/{actionId}/placements/{placementId}/progress",
    "method": "updateProgress",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Partner Action API:Placements",
    "typeScriptTag": "partnerActionApi:placements",
    "description": "Update placement action progress",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "Action Id",
        "example": "ACTIONID"
      },
      {
        "name": "placementId",
        "schema": "integer",
        "required": true,
        "description": "Placement Id",
        "example": 0
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "result",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      }
    ]
  },
  {
    "url": "/partners/actions/{actionId}/placements/{placementId}/reject",
    "method": "rejectPlacementAction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Partner Action API:Placements",
    "typeScriptTag": "partnerActionApi:placements",
    "description": "Reject a placement action",
    "parameters": [
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "Action Id",
        "example": "ACTIONID"
      },
      {
        "name": "placementId",
        "schema": "integer",
        "required": true,
        "description": "Placement Id",
        "example": 0
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "result",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      }
    ]
  },
  {
    "url": "/webhooks",
    "method": "findWebhooks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhook API:Webhooks",
    "typeScriptTag": "webhookApi:webhooks",
    "description": "Find webhooks",
    "parameters": [
      {
        "name": "status",
        "schema": "array",
        "description": ""
      },
      {
        "name": "events",
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
    "url": "/webhooks",
    "method": "addNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhook API:Webhooks",
    "typeScriptTag": "webhookApi:webhooks",
    "description": "Add a new webhook",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "events",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "eventFilters",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Basic dXNlcm5hbWU6cGFzc3dvcmQ="
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
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhooks/{webhookId}",
    "method": "removeWebhook",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhook API:Webhooks",
    "typeScriptTag": "webhookApi:webhooks",
    "description": "Delete a webhook",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "Webhook Id",
        "example": "WEBHOOKID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "NoContent"
      },
      {
        "statusCode": "404",
        "description": "Webhook was not found"
      }
    ]
  },
  {
    "url": "/webhooks/{webhookId}",
    "method": "getOne",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhook API:Webhooks",
    "typeScriptTag": "webhookApi:webhooks",
    "description": "Get a webhook",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WEBHOOKID"
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
    "url": "/webhooks/{webhookId}",
    "method": "updateExisting",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Webhook API:Webhooks",
    "typeScriptTag": "webhookApi:webhooks",
    "description": "Update an existing webhook",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WEBHOOKID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "events",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "eventFilters",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Basic dXNlcm5hbWU6cGFzc3dvcmQ="
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
        "description": "Webhook was successfully updated"
      },
      {
        "statusCode": "404",
        "description": "Webhook was not found"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="JobAdder API"
      apiBaseUrl="/v2"
      apiVersion="v2"
      endpoints={285}
      sdkMethods={372}
      schemas={572}
      parameters={1576}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jobadder/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/jobadder/openapi.yaml"
      developerDocumentation="api.jobadder.com/v2/docs"
    />
  );
}
  