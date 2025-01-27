// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as CameraMotionAPI from './camera-motion';
import { CameraMotion, CameraMotionListResponse } from './camera-motion';
import * as ImageAPI from './image';
import { Image, ImageCreateParams } from './image';
import * as VideoAPI from './video';
import { Video, VideoCreateParams } from './video';

export class Generations extends APIResource {
  cameraMotion: CameraMotionAPI.CameraMotion = new CameraMotionAPI.CameraMotion(this._client);
  image: ImageAPI.Image = new ImageAPI.Image(this._client);
  video: VideoAPI.Video = new VideoAPI.Video(this._client);

  /**
   * Initiate a new generation with the provided prompt
   */
  create(body: GenerationCreateParams, options?: Core.RequestOptions): Core.APIPromise<Generation> {
    return this._client.post('/generations', { body, ...options });
  }

  /**
   * Retrieve a list of generations with optional filtering and sorting
   */
  list(query?: GenerationListParams, options?: Core.RequestOptions): Core.APIPromise<GenerationListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<GenerationListResponse>;
  list(
    query: GenerationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GenerationListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/generations', { query, ...options });
  }

  /**
   * Remove a specific generation by its ID
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/generations/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Retrieve details of a specific generation by its ID
   */
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<Generation> {
    return this._client.get(`/generations/${id}`, options);
  }
}

/**
 * The generation response object
 */
export interface Generation {
  /**
   * The ID of the generation
   */
  id?: string;

  /**
   * The assets of the generation
   */
  assets?: Generation.Assets;

  /**
   * The date and time when the generation was created
   */
  created_at?: string;

  /**
   * The reason for the state of the generation
   */
  failure_reason?: string;

  /**
   * The type of the generation
   */
  generation_type?: 'video' | 'image';

  /**
   * The model used for the generation
   */
  model?: string;

  /**
   * The request of the generation
   */
  request?: Generation.GenerationRequest | Generation.ImageGenerationRequest;

  /**
   * The state of the generation
   */
  state?: 'queued' | 'dreaming' | 'completed' | 'failed';
}

export namespace Generation {
  /**
   * The assets of the generation
   */
  export interface Assets {
    /**
     * The URL of the image
     */
    image?: string;

    /**
     * The URL of the video
     */
    video?: string;
  }

  /**
   * The generation request object
   */
  export interface GenerationRequest {
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
    keyframes?: GenerationRequest.Keyframes;

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

  export namespace GenerationRequest {
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

  /**
   * The image generation request object
   */
  export interface ImageGenerationRequest {
    /**
     * The aspect ratio of the generation
     */
    aspect_ratio?: '1:1' | '16:9' | '9:16' | '4:3' | '3:4' | '21:9' | '9:21';

    /**
     * The callback URL for the generation
     */
    callback_url?: string;

    character_ref?: ImageGenerationRequest.CharacterRef;

    generation_type?: 'image';

    image_ref?: Array<ImageGenerationRequest.ImageRef>;

    /**
     * The model used for the generation
     */
    model?: 'photon-1' | 'photon-flash-1';

    /**
     * The modify image reference object
     */
    modify_image_ref?: ImageGenerationRequest.ModifyImageRef;

    /**
     * The prompt of the generation
     */
    prompt?: string;

    style_ref?: Array<ImageGenerationRequest.StyleRef>;
  }

  export namespace ImageGenerationRequest {
    export interface CharacterRef {
      /**
       * The image identity object
       */
      identity0?: CharacterRef.Identity0;
    }

    export namespace CharacterRef {
      /**
       * The image identity object
       */
      export interface Identity0 {
        /**
         * The URLs of the image identity
         */
        images?: Array<string>;
      }
    }

    /**
     * The image reference object
     */
    export interface ImageRef {
      /**
       * The URL of the image reference
       */
      url?: string;

      /**
       * The weight of the image reference
       */
      weight?: number;
    }

    /**
     * The modify image reference object
     */
    export interface ModifyImageRef {
      /**
       * The URL of the image reference
       */
      url?: string;

      /**
       * The weight of the modify image reference
       */
      weight?: number;
    }

    /**
     * The image reference object
     */
    export interface StyleRef {
      /**
       * The URL of the image reference
       */
      url?: string;

      /**
       * The weight of the image reference
       */
      weight?: number;
    }
  }
}

/**
 * The generations response object
 */
export interface GenerationListResponse {
  /**
   * The generations requested
   */
  generations: Array<Generation>;

  /**
   * The number of generations returned
   */
  count?: number;

  /**
   * Whether there are more generations
   */
  has_more?: boolean;

  /**
   * The limit of the generations requested
   */
  limit?: number;

  /**
   * The offset of the generations requested
   */
  offset?: number;
}

export interface GenerationCreateParams {
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
  keyframes?: GenerationCreateParams.Keyframes;

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

export namespace GenerationCreateParams {
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

export interface GenerationListParams {
  limit?: number;

  offset?: number;
}

Generations.CameraMotion = CameraMotion;
Generations.Image = Image;
Generations.Video = Video;

export declare namespace Generations {
  export {
    type Generation as Generation,
    type GenerationListResponse as GenerationListResponse,
    type GenerationCreateParams as GenerationCreateParams,
    type GenerationListParams as GenerationListParams,
  };

  export { CameraMotion as CameraMotion, type CameraMotionListResponse as CameraMotionListResponse };

  export { Image as Image, type ImageCreateParams as ImageCreateParams };

  export { Video as Video, type VideoCreateParams as VideoCreateParams };
}
