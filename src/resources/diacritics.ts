// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Diacritics extends APIResource {
  /**
   * Tone Mark
   */
  create(body: DiacriticCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/v1/diacritics', { body, ...options });
  }
}

export type DiacriticCreateResponse = unknown;

export interface DiacriticCreateParams {
  language: 'yo' | 'en' | 'ha' | 'ig';

  text: string;
}

export declare namespace Diacritics {
  export {
    type DiacriticCreateResponse as DiacriticCreateResponse,
    type DiacriticCreateParams as DiacriticCreateParams,
  };
}
