/*
partner-api

Bellhop's Partner API

The version of the OpenAPI document: 5.0.0
Contact: engineering@bellhop.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ServiceType } from './service-type';

/**
 * CreateQuoteServiceGroupRequest
 * @export
 * @interface CreateQuoteServiceGroupRequest
 */
export interface CreateQuoteServiceGroupRequest {
    /**
     * List of service codes
     * @type {Array<ServiceType>}
     * @memberof CreateQuoteServiceGroupRequest
     */
    'service_codes': Array<ServiceType>;
    /**
     * List of location ids
     * @type {Array<string>}
     * @memberof CreateQuoteServiceGroupRequest
     */
    'locations': Array<string>;
    /**
     * Start datetime of service group
     * @type {string}
     * @memberof CreateQuoteServiceGroupRequest
     */
    'start_datetime': string;
}
