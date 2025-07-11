// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as GenerationsAPI from './generations';

export class Video extends APIResource {
  /**
   * Initiate a new generation with the provided prompt
   *
   * @example
   * ```ts
   * const generation = await client.generations.video.create({
   *   model: 'ray-1-6',
   *   aspect_ratio: '16:9',
   *   keyframes: {
   *     frame0: {
   *       type: 'image',
   *       url: 'https://example.com/image.jpg',
   *     },
   *     frame1: {
   *       type: 'generation',
   *       id: '123e4567-e89b-12d3-a456-426614174000',
   *     },
   *   },
   *   loop: true,
   *   prompt: 'A serene lake surrounded by mountains at sunset',
   * });
   * ```
   */
  create(body: VideoCreateParams, options?: Core.RequestOptions): Core.APIPromise<GenerationsAPI.Generation> {
    return this._client.post('/generations/video', { body, ...options });
  }

  /**
   * Modify a video with style transfer and prompt-based editing
   *
   * @example
   * ```ts
   * const generation = await client.generations.video.modify({
   *   generation_type: 'modify_video',
   *   media: { url: 'https://example.com' },
   *   mode: 'adhere_1',
   *   model: 'ray-2',
   * });
   * ```
   */
  modify(body: VideoModifyParams, options?: Core.RequestOptions): Core.APIPromise<GenerationsAPI.Generation> {
    return this._client.post('/generations/video/modify', { body, ...options });
  }

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

export interface VideoCreateParams {
  /**
   * The model used for the generation
   */
  model: 'ray-1-6' | 'ray-2' | 'ray-flash-2';

  /**
   * The aspect ratio of the generation
   */
  aspect_ratio?: '1:1' | '16:9' | '9:16' | '4:3' | '3:4' | '21:9' | '9:21';

  /**
   * The callback URL of the generation, a POST request with Generation object will
   * be sent to the callback URL when the generation is dreaming, completed, or
   * failed
   */
  callback_url?: string;

  /**
   * The concepts of the generation
   */
  concepts?: Array<VideoCreateParams.Concept>;

  /**
   * The duration of the generation
   */
  duration?: '5s' | '9s' | (string & {});

  generation_type?: 'video';

  /**
   * The keyframes of the generation
   */
  keyframes?: VideoCreateParams.Keyframes;

  /**
   * Whether to loop the video
   */
  loop?: boolean;

  /**
   * The prompt of the generation
   */
  prompt?: string;

  /**
   * The resolution of the generation
   */
  resolution?: '540p' | '720p' | '1080p' | '4k' | (string & {});
}

export namespace VideoCreateParams {
  /**
   * The concept object
   */
  export interface Concept {
    /**
     * The key of the concept
     */
    key: string;
  }

  /**
   * The keyframes of the generation
   */
  export interface Keyframes {
    /**
     * The frame 0 of the generation
     */
    frame0?: Keyframes.GenerationReference | Keyframes.ImageReference;

    /**
     * The frame 1 of the generation
     */
    frame1?: Keyframes.GenerationReference | Keyframes.ImageReference;
  }

  export namespace Keyframes {
    /**
     * The generation reference object
     */
    export interface GenerationReference {
      /**
       * The ID of the generation
       */
      id: string;

      type: 'generation';
    }

    /**
     * The image object
     */
    export interface ImageReference {
      type: 'image';

      /**
       * The URL of the image
       */
      url: string;
    }

    /**
     * The generation reference object
     */
    export interface GenerationReference {
      /**
       * The ID of the generation
       */
      id: string;

      type: 'generation';
    }

    /**
     * The image object
     */
    export interface ImageReference {
      type: 'image';

      /**
       * The URL of the image
       */
      url: string;
    }
  }
}

export interface VideoModifyParams {
  generation_type: 'modify_video';

  /**
   * The image entity object
   */
  media: VideoModifyParams.Media;

  /**
   * The mode of the modify video
   */
  mode:
    | 'adhere_1'
    | 'adhere_2'
    | 'adhere_3'
    | 'flex_1'
    | 'flex_2'
    | 'flex_3'
    | 'reimagine_1'
    | 'reimagine_2'
    | 'reimagine_3';

  /**
   * The model used for the modify video
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
  first_frame?: VideoModifyParams.FirstFrame;

  /**
   * The prompt of the generation
   */
  prompt?: string;
}

export namespace VideoModifyParams {
  /**
   * The image entity object
   */
  export interface Media {
    /**
     * The URL of the media
     */
    url: string;
  }

  /**
   * The image entity object
   */
  export interface FirstFrame {
    /**
     * The URL of the media
     */
    url: string;
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
   * Resized height of source video
   */
  resized_height?: number;

  /**
   * Resized width of source video
   */
  resized_width?: number;

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
     * The URL of the media
     */
    url: string;
  }

  /**
   * The image entity object
   */
  export interface FirstFrame {
    /**
     * The URL of the media
     */
    url: string;
  }
}

export declare namespace Video {
  export {
    type VideoCreateParams as VideoCreateParams,
    type VideoModifyParams as VideoModifyParams,
    type VideoReframeParams as VideoReframeParams,
  };
}
