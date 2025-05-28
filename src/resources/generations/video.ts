// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as GenerationsAPI from './generations';

export class Video extends APIResource {
  /**
   * Reframe a video by its ID
   *
   * @example
   * ```ts
   * const generation = await client.generations.video.reframe({
   *   aspect_ratio: '16:9',
   *   generation_type: 'reframe_video',
   *   media: { url: 'https://example.com' },
   *   model: 'ray-2',
   * });
   * ```
   */
  reframe(
    body: VideoReframeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GenerationsAPI.Generation> {
    return this._client.post('/generations/video/reframe', { body, ...options });
  }
}

export interface VideoReframeParams {
  /**
   * The aspect ratio of the generation
   */
  aspect_ratio: '1:1' | '16:9' | '9:16' | '4:3' | '3:4' | '21:9' | '9:21';

  generation_type: 'reframe_video';

  /**
   * The image entity object
   */
  media: VideoReframeParams.Media;

  /**
   * The model used for the reframe video
   */
  model: 'ray-2' | 'ray-flash-2';

  /**
   * The callback URL of the generation, a POST request with Generation object will
   * be sent to the callback URL when the generation is dreaming, completed, or
   * failed
   */
  callback_url?: string;

  /**
   * The image entity object
   */
  first_frame?: VideoReframeParams.FirstFrame;

  /**
   * The x position of the image in the grid
   */
  grid_position_x?: number;

  /**
   * The y position of the image in the grid
   */
  grid_position_y?: number;

  /**
   * The prompt of the generation
   */
  prompt?: string;

  /**
   * The x end of the crop bounds
   */
  x_end?: number;

  /**
   * The x start of the crop bounds
   */
  x_start?: number;

  /**
   * The y end of the crop bounds
   */
  y_end?: number;

  /**
   * The y start of the crop bounds
   */
  y_start?: number;
}

export namespace VideoReframeParams {
  /**
   * The image entity object
   */
  export interface Media {
    /**
     * The URL of the image
     */
    url: string;
  }

  /**
   * The image entity object
   */
  export interface FirstFrame {
    /**
     * The URL of the image
     */
    url: string;
  }
}

export declare namespace Video {
  export { type VideoReframeParams as VideoReframeParams };
}
