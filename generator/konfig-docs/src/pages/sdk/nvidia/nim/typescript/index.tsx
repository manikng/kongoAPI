import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function NvidiaNimTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="nvidia-nim-typescript-sdk"
      metaDescription={`Since its founding in 1993, NVIDIA (NASDAQ: NVDA) has been a pioneer in accelerated computing. The company's invention of the GPU in 1999 sparked the growth of the PC gaming market, redefined computer graphics, ignited the era of modern AI and is fueling the creation of the metaverse. NVIDIA is now a full-stack computing company with data-center-scale offerings that are reshaping industry.`}
      company="NVIDIA"
      serviceName="NIM"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nvidia/nim/logo.png"
      companyKebabCase="nvidia"
      clientNameCamelCase="nvidiaNim"
      homepage="www.nvidia.com/en-us/ai/"
      lastUpdated={new Date("2024-03-24T21:45:24.878Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nvidia/nim/favicon.png"
      contactUrl="https://help.nvidia.com/"
      contactEmail="earth2-support@exchange.nvidia.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nvidia/nim/imagePreview.jpg"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["ai","gpu","gpuaccelerated_computing","artificial_intelligence","deep_learning","parallel_computing"]}
      methods={[
  {
    "url": "/chat/completions",
    "method": "generateModelResponse",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Chat",
    "typeScriptTag": "chat",
    "description": "Creates a model response for the given chat conversation.",
    "parameters": [
      {
        "name": "model",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "mistralai/mixtral-8x7b-instruct-v0.1"
      },
      {
        "name": "max_tokens",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1024
      },
      {
        "name": "stream",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "temperature",
        "schema": "number",
        "required": false,
        "description": "",
        "default": 0.3
      },
      {
        "name": "top_p",
        "schema": "number",
        "required": false,
        "description": "",
        "default": 1
      },
      {
        "name": "stop",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": null
      },
      {
        "name": "frequency_penalty",
        "schema": "number",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "presence_penalty",
        "schema": "number",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "seed",
        "schema": "null",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "messages",
        "schema": "undefined",
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
        "statusCode": "402",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/retrieval/nvidia/embeddings",
    "method": "embedding",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "nvidia / embeddings-qa-4",
    "typeScriptTag": "nvidiaEmbeddingsQa4",
    "description": "Creates an embedding vector from the input text.",
    "parameters": [
      {
        "name": "input",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "model",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NV-Embed-QA"
      },
      {
        "name": "input_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "encoding_format",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "float"
      },
      {
        "name": "truncate",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "NONE"
      },
      {
        "name": "user",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/retrieval/nvidia/reranking",
    "method": "passageRanking",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "nvidia / reranking",
    "typeScriptTag": "nvidiaReranking",
    "description": "Rank passages by their relation to a query.",
    "parameters": [
      {
        "name": "model",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "nv-rerank-qa-mistral-4b:1"
      },
      {
        "name": "query",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "passages",
        "schema": "array",
        "required": true,
        "description": "",
        "example": {
          "text": "The Hopper GPU is paired with the Grace CPU using NVIDIA's ultra-fast chip-to-chip interconnect, delivering 900GB/s of bandwidth, 7X faster than PCIe Gen5. This innovative design will deliver up to 30X higher aggregate system memory bandwidth to the GPU compared to today's fastest servers and up to 10X higher performance for applications running terabytes of data."
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A response from the rank endpoint."
      },
      {
        "statusCode": "422",
        "description": "The request was invalid."
      }
    ]
  },
  {
    "url": "/genai/stabilityai/sdxl-turbo",
    "method": "stabilityPrediction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Inference",
    "typeScriptTag": "inference",
    "description": " Infer",
    "parameters": [
      {
        "name": "height",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1024
      },
      {
        "name": "width",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1024
      },
      {
        "name": "text_prompts",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "cfg_scale",
        "schema": "number",
        "required": false,
        "description": "",
        "default": 5
      },
      {
        "name": "clip_guidance_preset",
        "schema": "undefined",
        "required": false,
        "description": "",
        "default": "NONE"
      },
      {
        "name": "sampler",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "K_DPM_2_ANCESTRAL"
      },
      {
        "name": "samples",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1
      },
      {
        "name": "seed",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "steps",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 25
      },
      {
        "name": "style_preset",
        "schema": "undefined",
        "required": false,
        "description": "",
        "default": "none"
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
    "url": "/genai/stabilityai/sdxl",
    "method": "stabilityPrediction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Inference",
    "typeScriptTag": "inference",
    "description": " Infer",
    "parameters": [
      {
        "name": "height",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1024
      },
      {
        "name": "width",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1024
      },
      {
        "name": "text_prompts",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "cfg_scale",
        "schema": "number",
        "required": false,
        "description": "",
        "default": 5
      },
      {
        "name": "clip_guidance_preset",
        "schema": "undefined",
        "required": false,
        "description": "",
        "default": "NONE"
      },
      {
        "name": "sampler",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "K_DPM_2_ANCESTRAL"
      },
      {
        "name": "samples",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1
      },
      {
        "name": "seed",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "steps",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 25
      },
      {
        "name": "style_preset",
        "schema": "undefined",
        "required": false,
        "description": "",
        "default": "none"
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
    "url": "/genai/stabilityai/stable-video-diffusion",
    "method": "stableVideoDiffusionPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Inference",
    "typeScriptTag": "inference",
    "description": " Infer",
    "parameters": [
      {
        "name": "image",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAEElEQVR4nGK6HcwNCAAA//8DTgE8HuxwEQAAAABJRU5ErkJggg=="
      },
      {
        "name": "seed",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "cfg_scale",
        "schema": "number",
        "required": false,
        "description": "",
        "default": 1.8
      },
      {
        "name": "motion_bucket_id",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 127
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
    "url": "/vlm/adept/fuyu-8b",
    "method": "requestModelResponse",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Multimodal API",
    "typeScriptTag": "multimodalApi",
    "description": "Request response from the model",
    "parameters": [
      {
        "name": "nvcfInputAssetReferences",
        "schema": "string",
        "required": false,
        "description": "String of asset IDs separated by commas. Data is uploaded to AWS S3 using NVCF Asset APIs and associated with these asset IDs.If the size of an image is more than 200KB, it needs to be uploaded to a presigned S3 URL bucket. The presigned URL allows for secure and temporary access to the S3 bucket for uploading the image. Once the asset is requested, an asset ID is generated for it. Please include this asset ID in this header and to use the uploaded image in a prompt, you need to refer to it using the following format: `<img src=\"data:image/png;asset_id,{asset_id}\" />`."
      },
      {
        "name": "messages",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          {
            "content": "Hi! What is in this image? <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII==\" />",
            "name": null,
            "role": "user"
          }
        ]
      },
      {
        "name": "temperature",
        "schema": "number",
        "required": false,
        "description": "",
        "default": 0.2
      },
      {
        "name": "top_p",
        "schema": "number",
        "required": false,
        "description": "",
        "default": 0.7
      },
      {
        "name": "max_tokens",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1024
      },
      {
        "name": "seed",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 42,
        "default": null
      },
      {
        "name": "stream",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "grounded_response",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "bounding_boxes",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "response_mode",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "detailed"
      },
      {
        "name": "task",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "VQA"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/status/{requestId}",
    "method": "functionResultGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "cuOpt API",
    "typeScriptTag": "cuOptApi",
    "description": "Gets the result of an earlier function invocation request that returned a status of 202.",
    "parameters": [
      {
        "name": "requestId",
        "schema": "string",
        "required": true,
        "description": "requestId to poll results",
        "example": "REQUESTID"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/vlm/google/deplot",
    "method": "requestModelInference",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Multimodal API",
    "typeScriptTag": "multimodalApi",
    "description": "Request response from the model",
    "parameters": [
      {
        "name": "nvcfInputAssetReferences",
        "schema": "string",
        "required": false,
        "description": "String of asset IDs separated by commas. Data is uploaded to AWS S3 using NVCF Asset APIs and associated with these asset IDs.If the size of an image is more than 200KB, it needs to be uploaded to a presigned S3 URL bucket. The presigned URL allows for secure and temporary access to the S3 bucket for uploading the image. Once the asset is requested, an asset ID is generated for it. Please include this asset ID in this header and to use the uploaded image in a prompt, you need to refer to it using the following format:  `<img src=\"data:image/png;asset_id,{asset_id}\" />`."
      },
      {
        "name": "messages",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          {
            "content": "Hi! What is in this image? <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII==\" />",
            "name": null,
            "role": "user"
          }
        ]
      },
      {
        "name": "temperature",
        "schema": "number",
        "required": false,
        "description": "",
        "default": 0.2
      },
      {
        "name": "top_p",
        "schema": "number",
        "required": false,
        "description": "",
        "default": 0.7
      },
      {
        "name": "max_tokens",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1024
      },
      {
        "name": "seed",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 42,
        "default": null
      },
      {
        "name": "stream",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "grounded_response",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "bounding_boxes",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "response_mode",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "detailed"
      },
      {
        "name": "task",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "VQA"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/vlm/microsoft/kosmos-2",
    "method": "requestModelResponse",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Multimodal API",
    "typeScriptTag": "multimodalApi",
    "description": "Request response from the model",
    "parameters": [
      {
        "name": "nvcfInputAssetReferences",
        "schema": "string",
        "required": false,
        "description": "String of asset IDs separated by commas. Data is uploaded to AWS S3 using NVCF Asset APIs and associated with these asset IDs.If the size of an image is more than 200KB, it needs to be uploaded to a presigned S3 URL bucket. The presigned URL allows for secure and temporary access to the S3 bucket for uploading the image. Once the asset is requested, an asset ID is generated for it. Please include this asset ID in this header and to use the uploaded image in a prompt, you need to refer to it using the following format: `<img src=\"data:image/png;asset_id,{asset_id}\" />`."
      },
      {
        "name": "messages",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          {
            "content": "Hi! What is in this image? <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII==\" />",
            "name": null,
            "role": "user"
          }
        ]
      },
      {
        "name": "temperature",
        "schema": "number",
        "required": false,
        "description": "",
        "default": 0.2
      },
      {
        "name": "top_p",
        "schema": "number",
        "required": false,
        "description": "",
        "default": 0.7
      },
      {
        "name": "max_tokens",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1024
      },
      {
        "name": "seed",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 42,
        "default": null
      },
      {
        "name": "stream",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "grounded_response",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "bounding_boxes",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "response_mode",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "detailed"
      },
      {
        "name": "task",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "VQA"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/vlm/nvidia/neva-22b",
    "method": "invokeModelInference",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Multimodal API",
    "typeScriptTag": "multimodalApi",
    "description": "Request response from the model",
    "parameters": [
      {
        "name": "nvcfInputAssetReferences",
        "schema": "string",
        "required": false,
        "description": "String of asset IDs separated by commas. Data is uploaded to AWS S3 using NVCF Asset APIs and associated with these asset IDs.If the size of an image is more than 200KB, it needs to be uploaded to a presigned S3 URL bucket. The presigned URL allows for secure and temporary access to the S3 bucket for uploading the image. Once the asset is requested, an asset ID is generated for it. Please include this asset ID in this header and to use the uploaded image in a prompt, you need to refer to it using the following format: `<img src=\"data:image/png;asset_id,{asset_id}\" />`."
      },
      {
        "name": "messages",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          {
            "content": "Hi! What is in this image? <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII==\" />",
            "name": null,
            "role": "user"
          }
        ]
      },
      {
        "name": "temperature",
        "schema": "number",
        "required": false,
        "description": "",
        "default": 0.2
      },
      {
        "name": "top_p",
        "schema": "number",
        "required": false,
        "description": "",
        "default": 0.7
      },
      {
        "name": "max_tokens",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1024
      },
      {
        "name": "seed",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 42,
        "default": null
      },
      {
        "name": "stream",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "grounded_response",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "bounding_boxes",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "response_mode",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "detailed"
      },
      {
        "name": "task",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "VQA"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/biology/mit/diffdock",
    "method": "docking",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Default",
    "typeScriptTag": "default",
    "description": "Molecular Docking Pose Generation",
    "parameters": [
      {
        "name": "ligand",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LIGAND"
      },
      {
        "name": "ligand_file_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LIGAND_FILE_TYPE"
      },
      {
        "name": "protein",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROTEIN"
      },
      {
        "name": "num_poses",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 20
      },
      {
        "name": "time_divisions",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 20
      },
      {
        "name": "steps",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 18
      },
      {
        "name": "save_trajectory",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "is_staged",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/biology/nvidia/esmfold",
    "method": "proteinStructurePredictionNoAln",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Default",
    "typeScriptTag": "default",
    "description": "Protein Structure Prediction (Alignment-free)",
    "parameters": [
      {
        "name": "sequence",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SEQUENCE"
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
    "url": "/biology/nvidia/molmim/generate",
    "method": "generate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Default",
    "typeScriptTag": "default",
    "description": "Molecule Generation",
    "parameters": [
      {
        "name": "algorithm",
        "schema": "string",
        "description": ""
      },
      {
        "name": "smi",
        "schema": "string",
        "description": ""
      },
      {
        "name": "num_molecules",
        "schema": "integer",
        "description": "",
        "default": 10
      },
      {
        "name": "iterations",
        "schema": "integer",
        "description": "",
        "default": 10
      },
      {
        "name": "property_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "particles",
        "schema": "integer",
        "description": "",
        "default": 20
      },
      {
        "name": "minimize",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "min_similarity",
        "schema": "number",
        "description": "",
        "default": 0.7
      },
      {
        "name": "scaled_radius",
        "schema": "number",
        "description": "",
        "default": 1
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
    "url": "/genomics/nvidia/deepvariant",
    "method": "runParabricksUvcInference",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Default",
    "typeScriptTag": "default",
    "description": "Run Parabricks UVC inference to call variants using accelerated DeepVariant.",
    "parameters": [
      {
        "name": "in_ref_tarball",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IN_REF_TARBALL"
      },
      {
        "name": "in_bam",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IN_BAM"
      },
      {
        "name": "in_bai",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IN_BAI"
      },
      {
        "name": "mode",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "shortread"
      },
      {
        "name": "use_gvcf",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "use_wes_model",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "out_variants",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "out_variants_parts_manifest",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OUT_VARIANTS_PARTS_MANIFEST"
      },
      {
        "name": "out_stderr",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OUT_STDERR"
      },
      {
        "name": "out_stdout",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OUT_STDOUT"
      },
      {
        "name": "additional_args",
        "schema": "string",
        "required": false,
        "description": "",
        "default": ""
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
    "url": "/genomics/nvidia/fq2bam",
    "method": "fq2Bam",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Default",
    "typeScriptTag": "default",
    "description": "Run Parabricks fq2bam to align sequence reads.",
    "parameters": [
      {
        "name": "in_ref_tarball",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IN_REF_TARBALL"
      },
      {
        "name": "in_fq",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IN_FQ"
      },
      {
        "name": "out_bam",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "out_bam_parts_manifest",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OUT_BAM_PARTS_MANIFEST"
      },
      {
        "name": "out_bai",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OUT_BAI"
      },
      {
        "name": "out_chrs",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OUT_CHRS"
      },
      {
        "name": "out_stderr",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OUT_STDERR"
      },
      {
        "name": "out_stdout",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OUT_STDOUT"
      },
      {
        "name": "additional_args",
        "schema": "string",
        "required": false,
        "description": "",
        "default": ""
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
    "url": "/medicalimaging/nvidia/vista-3d",
    "method": "runInferenceVista3D",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Models",
    "typeScriptTag": "models",
    "description": "Run Inference",
    "parameters": [
      {
        "name": "image",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://raw.githubusercontent.com/NVIDIA/ai-assisted-annotation-client/master/py_client/test-data/image.nii.gz"
      },
      {
        "name": "prompts",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "output",
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
    "url": "/nvidia/cuopt",
    "method": "managedServiceEndpoint",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "cuOpt API",
    "typeScriptTag": "cuOptApi",
    "description": "Managed Service Endpoint",
    "parameters": [
      {
        "name": "nvcfInputAssetReferences",
        "schema": "string",
        "required": false,
        "description": "String of asset IDs separated by commas. Data is uploaded to AWS S3 using NVCF Asset APIs and associated with these asset IDs.If the size of the json is more than 200KB, it needs to be uploaded to a presigned S3 URL bucket. The presigned URL allows for secure and temporary access to the S3 bucket for uploading the image. Once the asset is requested, an asset ID is generated for it. Please include this asset ID in this header and to use the uploaded json the 'data' field in the request body should be null; otherwise, it will be ignored."
      },
      {
        "name": "parameters",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "action",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "cuOpt_OptimizedRouting"
      },
      {
        "name": "data",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "client_version",
        "schema": "string",
        "required": false,
        "description": "",
        "default": ""
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
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/nvidia/ai-weather-forecasting",
    "method": "inferenceSubmission",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "forecast",
    "typeScriptTag": "forecast",
    "description": "Infer",
    "parameters": [
      {
        "name": "parameters",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "outputs",
        "schema": "array",
        "required": false,
        "description": "",
        "default": [
          {
            "diagnostics": [
              {
                "channels": [],
                "function": [],
                "properties": {},
                "type": "control"
              }
            ],
            "domain": {
              "lat_max": 90,
              "lat_min": -90,
              "lon_max": 360,
              "lon_min": 0,
              "name": "global",
              "type": "Window"
            }
          }
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response schema."
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
      apiTitle="Earth-2 Inference Server"
      apiBaseUrl="https://climate.api.nvidia.com/v1"
      apiVersion="0.1.0"
      endpoints={19}
      sdkMethods={19}
      schemas={108}
      parameters={136}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nvidia/nim/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/nvidia/nim/openapi.yaml"
      developerDocumentation="docs.api.nvidia.com/nim/reference/google-gemma7b"
    />
  );
}
  