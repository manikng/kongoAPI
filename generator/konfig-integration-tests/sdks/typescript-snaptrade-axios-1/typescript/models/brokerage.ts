/*
SnapTrade

Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BrokerageType } from './brokerage-type';

/**
 * 
 * @export
 * @interface Brokerage
 */
export interface Brokerage {
    [key: string]: any;

    /**
     * 
     * @type {string}
     * @memberof Brokerage
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof Brokerage
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof Brokerage
     */
    'display_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof Brokerage
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof Brokerage
     */
    'aws_s3_logo_url'?: string;
    /**
     * 
     * @type {string}
     * @memberof Brokerage
     */
    'slug'?: string;
    /**
     * 
     * @type {string}
     * @memberof Brokerage
     */
    'url'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Brokerage
     */
    'enabled'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Brokerage
     */
    'maintenance_mode'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Brokerage
     */
    'allows_fractional_units'?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof Brokerage
     */
    'allows_trading'?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof Brokerage
     */
    'has_reporting'?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof Brokerage
     */
    'is_real_time_connection'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Brokerage
     */
    'allows_trading_through_snaptrade_api'?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof Brokerage
     */
    'is_scraping_integration'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Brokerage
     */
    'default_currency'?: string;
    /**
     * 
     * @type {BrokerageType}
     * @memberof Brokerage
     */
    'brokerage_type'?: BrokerageType;
    /**
     * List of exchange ID supported by brokerage
     * @type {Array<any>}
     * @memberof Brokerage
     */
    'exchanges'?: Array<any>;
}

