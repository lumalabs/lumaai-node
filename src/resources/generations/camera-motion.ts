// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class CameraMotion extends APIResource {
  /**
   * Get all possible camera motions
   */
  list(options?: Core.RequestOptions): Core.APIPromise<CameraMotionListResponse> {
    return this._client.get('/generations/camera_motion/list', options);
  }
}

export type CameraMotionListResponse = Array<string>;

export declare namespace CameraMotion {
  export { type CameraMotionListResponse as CameraMotionListResponse };
}
