/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { sim } from './sim';

export type device = {
    /**
     * Type of object is always `device`.
     */
    object: string;
    /**
     * Unique identifier for the device.
     */
    id: string;
    /**
     * The IMEI (international mobile equipment identity) of the device if provided.
     */
    imei: string | null;
    model: any | null;
    /**
     * An optional custom name for the device.
     */
    name: string | null;
    /**
     * List of SIMs added to this device.
     */
    sims: Array<sim>;
    user: any | null;
    /**
     * Time when the device was created.
     */
    createdAt: string;
};

