// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as GenerationsAPI from './generations';
import * as CameraMotionAPI from './camera-motion';

export class Generations extends APIResource {
  cameraMotion: CameraMotionAPI.CameraMotion = new CameraMotionAPI.CameraMotion(this._client);

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
   * The generation request object
   */
  request?: Generation.Request;

  /**
   * The state of the generation
   */
  state?: 'queued' | 'dreaming' | 'completed' | 'failed';

  /**
   * The model version used for the generation eg. v1.6
   */
  version?: string;
}

export namespace Generation {
  /**
   * The assets of the generation
   */
  export interface Assets {
    /**
     * The URL of the video
     */
    video?: string;
  }

  /**
   * The generation request object
   */
  export interface Request {
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
     * The keyframes of the generation
     */
    keyframes?: Request.Keyframes;

    /**
     * Whether to loop the video
     */
    loop?: boolean;

    /**
     * The prompt of the generation
     */
    prompt?: string;
  }

  export namespace Request {
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
   * The keyframes of the generation
   */
  keyframes?: GenerationCreateParams.Keyframes;

  /**
   * Whether to loop the video
   */
  loop?: boolean;

  /**
   * The prompt of the generation
   */
  prompt?: string;
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

export namespace Generations {
  export import Generation = GenerationsAPI.Generation;
  export import GenerationListResponse = GenerationsAPI.GenerationListResponse;
  export import GenerationCreateParams = GenerationsAPI.GenerationCreateParams;
  export import GenerationListParams = GenerationsAPI.GenerationListParams;
  export import CameraMotion = CameraMotionAPI.CameraMotion;
  export import CameraMotionListResponse = CameraMotionAPI.CameraMotionListResponse;
}
