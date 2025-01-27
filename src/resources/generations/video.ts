// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as GenerationsAPI from './generations';

export class Video extends APIResource {
  /**
   * Initiate a new generation with the provided prompt
   */
  create(body: VideoCreateParams, options?: Core.RequestOptions): Core.APIPromise<GenerationsAPI.Generation> {
    return this._client.post('/generations', { body, ...options });
  }
}

export interface VideoCreateParams {
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
   * The model used for the generation
   */
  model?: 'ray-1-6' | 'ray-2';

  /**
   * The prompt of the generation
   */
  prompt?: string;

  /**
   * The resolution of the generation
   */
  resolution?: '540p' | '720p' | (string & {});
}

export namespace VideoCreateParams {
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

export declare namespace Video {
  export { type VideoCreateParams as VideoCreateParams };
}
