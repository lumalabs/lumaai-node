// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CameraMotionAPI from './camera-motion';

export class CameraMotionResource extends APIResource {
  /**
   * Get all possible camera motions
   */
  list(options?: Core.RequestOptions): Core.APIPromise<CameraMotionListResponse> {
    return this._client.get('/generations/camera_motion/list', options);
  }
}

/**
 * The camera motion of the generation
 */
export type CameraMotion =
  | 'static'
  | 'move_left'
  | 'move_right'
  | 'move_up'
  | 'move_down'
  | 'push_in'
  | 'pull_out'
  | 'zoom_in'
  | 'zoom_out'
  | 'pan_left'
  | 'pan_right'
  | 'orbit_left'
  | 'orbit_right'
  | 'crane_up'
  | 'crane_down';

export type CameraMotionListResponse = Array<CameraMotion>;

export namespace CameraMotionResource {
  export import CameraMotion = CameraMotionAPI.CameraMotion;
  export import CameraMotionListResponse = CameraMotionAPI.CameraMotionListResponse;
}
