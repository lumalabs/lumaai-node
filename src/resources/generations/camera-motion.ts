// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CameraMotionAPI from './camera-motion';
import * as GenerationsAPI from './generations';

export class CameraMotion extends APIResource {
  /**
   * Get all possible camera motions
   */
  list(options?: Core.RequestOptions): Core.APIPromise<CameraMotionListResponse> {
    return this._client.get('/generations/camera_motion/list', options);
  }
}

export type CameraMotionListResponse = Array<GenerationsAPI.CameraMotion>;

export namespace CameraMotion {
  export import CameraMotionListResponse = CameraMotionAPI.CameraMotionListResponse;
}
