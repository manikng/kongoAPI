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

import { ValueProperty1 } from './value-property1';

/**
 * 
 * @export
 * @interface EvaluationResultResponse
 */
export interface EvaluationResultResponse {
    /**
     * 
     * @type {string}
     * @memberof EvaluationResultResponse
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof EvaluationResultResponse
     */
    'evaluator_id': string;
    /**
     * 
     * @type {string}
     * @memberof EvaluationResultResponse
     */
    'evaluation_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof EvaluationResultResponse
     */
    'log_id': string;
    /**
     * 
     * @type {ValueProperty1}
     * @memberof EvaluationResultResponse
     */
    'value'?: ValueProperty1;
    /**
     * 
     * @type {string}
     * @memberof EvaluationResultResponse
     */
    'error'?: string;
    /**
     * 
     * @type {string}
     * @memberof EvaluationResultResponse
     */
    'updated_at': string;
}
