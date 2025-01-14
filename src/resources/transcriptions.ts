// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Transcriptions extends APIResource {
  /**
   * Transcribe
   */
  create(body: TranscriptionCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/v1/transcriptions', Core.multipartFormRequestOptions({ body, ...options }));
  }
}

export type TranscriptionCreateResponse = unknown;

export interface TranscriptionCreateParams {
  language: 'yo' | 'en' | 'ha' | 'ig';

  content?: Core.Uploadable | null;

  url?: string | null;
}

export declare namespace Transcriptions {
  export {
    type TranscriptionCreateResponse as TranscriptionCreateResponse,
    type TranscriptionCreateParams as TranscriptionCreateParams,
  };
}
