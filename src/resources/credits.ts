// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as CreditsAPI from './credits';

export class Credits extends APIResource {
  /**
   * Get the credits information for the api user
   */
  get(options?: Core.RequestOptions): Core.APIPromise<CreditGetResponse> {
    return this._client.get('/credits', options);
  }
}

/**
 * The credits object
 */
export interface CreditGetResponse {
  /**
   * Available credits balance in USD cents
   */
  credit_balance: number;
}

export namespace Credits {
  export import CreditGetResponse = CreditsAPI.CreditGetResponse;
}
