/* tslint:disable */
/* eslint-disable */
/*
Carbon

Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { fromBuffer } from "file-type/browser"
const FormData = require("form-data")
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { HTTPValidationError } from '../models';
// @ts-ignore
import { OrganizationResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * OrganizationsApi - axios parameter creator
 * @export
 */
export const OrganizationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get Organization
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/organization`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication accessToken required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "authorization", keyParamName: "accessToken", configuration, prefix: "Token " })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/organization',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * OrganizationsApi - functional programming interface
 * @export
 */
export const OrganizationsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OrganizationsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get Organization
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async get(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OrganizationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.get(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * OrganizationsApi - factory interface
 * @export
 */
export const OrganizationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OrganizationsApiFp(configuration)
    return {
        /**
         * 
         * @summary Get Organization
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get(options?: AxiosRequestConfig): AxiosPromise<OrganizationResponse> {
            return localVarFp.get(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OrganizationsApiGenerated - object-oriented interface
 * @export
 * @class OrganizationsApiGenerated
 * @extends {BaseAPI}
 */
export class OrganizationsApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Get Organization
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizationsApiGenerated
     */
    public get(options?: AxiosRequestConfig) {
        return OrganizationsApiFp(this.configuration).get(options).then((request) => request(this.axios, this.basePath));
    }
}