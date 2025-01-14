// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import { type Response } from '../_shims/index';

export class Speech extends APIResource {
  /**
   * Synthesize
   */
  create(body: SpeechCreateParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.post('/v1/speech', {
      body,
      ...options,
      headers: { Accept: 'audio/wav', ...options?.headers },
      __binaryResponse: true,
    });
  }
}

export interface SpeechCreateParams {
  language: 'yo' | 'en' | 'ha' | 'ig';

  text: string;

  voice:
    | 'sade'
    | 'segun'
    | 'femi'
    | 'funmi'
    | 'amina'
    | 'aliyu'
    | 'hasan'
    | 'zainab'
    | 'ngozi'
    | 'amara'
    | 'ebuka'
    | 'obinna'
    | 'lucy'
    | 'lina'
    | 'john'
    | 'jude';
}

export declare namespace Speech {
  export { type SpeechCreateParams as SpeechCreateParams };
}
