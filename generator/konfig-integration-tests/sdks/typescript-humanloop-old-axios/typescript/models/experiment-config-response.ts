/*
Humanloop API

The Humanloop API allows you to interact with Humanloop from your product or service.

You can do this through HTTP requests from any language or via our official Python or TypeScript SDK.

To install the official [Python SDK](https://pypi.org/project/humanloop/), run the following command:

```bash
pip install humanloop
```

To install the official [TypeScript SDK](https://www.npmjs.com/package/humanloop), run the following command:

```bash
npm i humanloop
```

---

Guides and further details about key concepts can be found in [our docs](https://docs.humanloop.com/).

The version of the OpenAPI document: 4.0.1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ConfigProperty } from './config-property';

/**
 * 
 * @export
 * @interface ExperimentConfigResponse
 */
export interface ExperimentConfigResponse {
    /**
     * The mean performance of the model config.
     * @type {number}
     * @memberof ExperimentConfigResponse
     */
    'mean'?: number;
    /**
     * The spread of performance of the model config.
     * @type {number}
     * @memberof ExperimentConfigResponse
     */
    'spread'?: number;
    /**
     * Number of datapoints with feedback associated to the experiment.
     * @type {number}
     * @memberof ExperimentConfigResponse
     */
    'trials_count': number;
    /**
     * Whether the model config is active in the experiment. Only active model configs can be sampled from the experiment.
     * @type {boolean}
     * @memberof ExperimentConfigResponse
     */
    'active': boolean;
    /**
     * String ID of model config. Starts with `config_`.
     * @type {string}
     * @memberof ExperimentConfigResponse
     */
    'id': string;
    /**
     * Display name of model config. If this is not set by the user, a friendly name is generated.
     * @type {string}
     * @memberof ExperimentConfigResponse
     */
    'display_name': string;
    /**
     * 
     * @type {ConfigProperty}
     * @memberof ExperimentConfigResponse
     */
    'config': ConfigProperty;
    /**
     * 
     * @type {string}
     * @memberof ExperimentConfigResponse
     */
    'created_at': string;
    /**
     * 
     * @type {string}
     * @memberof ExperimentConfigResponse
     */
    'updated_at': string;
}
