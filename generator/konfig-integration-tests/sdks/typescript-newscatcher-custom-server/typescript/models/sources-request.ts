/*
NewsCatcher-V3 Production API

<img src='https://uploads-ssl.webflow.com/6429857b17973b636c2195c5/646c6f1eb774ff2f2997bec5_newscatcher_.svg' width='286' height='35' /> <br>  <br>Visit our website  <a href='https://newscatcherapi.com'>https://newscatcherapi.com</a>

The version of the OpenAPI document: 3.2.16
Contact: maksym@newscatcherapi.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Sources request DTO
 * @export
 * @interface SourcesRequest
 */
export interface SourcesRequest {
    /**
     * 
     * @type {string}
     * @memberof SourcesRequest
     */
    'lang'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourcesRequest
     */
    'countries'?: string;
    /**
     * 
     * @type {string}
     * @memberof SourcesRequest
     */
    'predefined_sources'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SourcesRequest
     */
    'include_additional_info'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SourcesRequest
     */
    'from_rank'?: number;
    /**
     * 
     * @type {number}
     * @memberof SourcesRequest
     */
    'to_rank'?: number;
    /**
     * 
     * @type {any}
     * @memberof SourcesRequest
     */
    'source_name'?: any;
    /**
     * 
     * @type {string}
     * @memberof SourcesRequest
     */
    'source_url'?: string;
}
