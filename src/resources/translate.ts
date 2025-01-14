// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Translate extends APIResource {
  /**
   * Translate
   */
  create(body: TranslateCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/v1/translate', { body, ...options });
  }
}

export type TranslateCreateResponse = unknown;

export interface TranslateCreateParams {
  text: string;

  source?: 'yo' | 'en' | 'ha' | 'ig';

  target?: 'yo' | 'en' | 'ha' | 'ig';
}

export declare namespace Translate {
  export {
    type TranslateCreateResponse as TranslateCreateResponse,
    type TranslateCreateParams as TranslateCreateParams,
  };
}
