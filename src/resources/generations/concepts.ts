// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Concepts extends APIResource {
  /**
   * Get all possible concepts
   *
   * @example
   * ```ts
   * const concepts = await client.generations.concepts.list();
   * ```
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ConceptListResponse> {
    return this._client.get('/generations/concepts/list', options);
  }
}

export type ConceptListResponse = Array<string>;

export declare namespace Concepts {
  export { type ConceptListResponse as ConceptListResponse };
}
