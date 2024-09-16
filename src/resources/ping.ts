// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as PingAPI from './ping';

export class Ping extends APIResource {
  /**
   * Check if the API is running
   */
  check(options?: Core.RequestOptions): Core.APIPromise<PingCheckResponse> {
    return this._client.get('/ping', options);
  }
}

export interface PingCheckResponse {
  /**
   * The message
   */
  message?: string;
}

export namespace Ping {
  export import PingCheckResponse = PingAPI.PingCheckResponse;
}