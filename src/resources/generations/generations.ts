// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ConceptsAPI from './concepts';
import { ConceptListResponse, Concepts } from './concepts';
import * as ImageAPI from './image';
import { Image, ImageCreateParams } from './image';
import * as VideoAPI from './video';
import { Video, VideoCreateParams } from './video';

export class Generations extends APIResource {
  concepts: ConceptsAPI.Concepts = new ConceptsAPI.Concepts(this._client);
  image: ImageAPI.Image = new ImageAPI.Image(this._client);
  video: VideoAPI.Video = new VideoAPI.Video(this._client);

  /**
   * Initiate a new generation with the provided prompt
   *
   * @example
   * ```ts
   * const generation = await client.generations.create({
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
  create(body: GenerationCreateParams, options?: Core.RequestOptions): Core.APIPromise<Generation> {
    return this._client.post('/generations', { body, ...options });
  }

  /**
   * Retrieve a list of generations with optional filtering and sorting
   *
   * @example
   * ```ts
   * const generations = await client.generations.list();
   * ```
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
   *
   * @example
   * ```ts
   * await client.generations.delete('id');
   * ```
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/generations/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Add audio to a generation by its ID
   *
   * @example
   * ```ts
   * const generation = await client.generations.audio('id');
   * ```
   */
  audio(id: string, body: GenerationAudioParams, options?: Core.RequestOptions): Core.APIPromise<Generation> {
    return this._client.post(`/generations/${id}/audio`, { body, ...options });
  }

  /**
   * Retrieve details of a specific generation by its ID
   *
   * @example
   * ```ts
   * const generation = await client.generations.get('id');
   * ```
   */
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<Generation> {
    return this._client.get(`/generations/${id}`, options);
  }

  /**
   * Upscale a generation by its ID
   *
   * @example
   * ```ts
   * const generation = await client.generations.upscale('id');
   * ```
   */
  upscale(
    id: string,
    body: GenerationUpscaleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Generation> {
    return this._client.post(`/generations/${id}/upscale`, { body, ...options });
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
  request?:
    | Generation.GenerationRequest
    | Generation.ImageGenerationRequest
    | Generation.UpscaleVideoGenerationRequest
    | Generation.AudioGenerationRequest;

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
     * The URL of the progress video
     */
    progress_video?: string;

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
    concepts?: Array<GenerationRequest.Concept>;

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
     * The prompt of the generation
     */
    prompt?: string;

    /**
     * The resolution of the generation
     */
    resolution?: '540p' | '720p' | '1080p' | '4k' | (string & {});
  }

  export namespace GenerationRequest {
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

  /**
   * The image generation request object
   */
  export interface ImageGenerationRequest {
    /**
     * The model used for the generation
     */
    model: 'photon-1' | 'photon-flash-1';

    /**
     * The aspect ratio of the generation
     */
    aspect_ratio?: '1:1' | '16:9' | '9:16' | '4:3' | '3:4' | '21:9' | '9:21';

    /**
     * The callback URL for the generation
     */
    callback_url?: string;

    character_ref?: ImageGenerationRequest.CharacterRef;

    /**
     * The format of the image
     */
    format?: 'jpg' | 'png';

    generation_type?: 'image';

    image_ref?: Array<ImageGenerationRequest.ImageRef>;

    /**
     * The modify image reference object
     */
    modify_image_ref?: ImageGenerationRequest.ModifyImageRef;

    /**
     * The prompt of the generation
     */
    prompt?: string;

    style_ref?: Array<ImageGenerationRequest.StyleRef>;

    /**
     * Create image in synchronous mode and return complated image
     */
    sync?: boolean;

    /**
     * The timeout for the synchronous image generation
     */
    sync_timeout?: number;
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

  /**
   * The upscale generation request object
   */
  export interface UpscaleVideoGenerationRequest {
    /**
     * The callback URL for the upscale
     */
    callback_url?: string;

    generation_type?: 'upscale_video';

    /**
     * The resolution of the upscale
     */
    resolution?: '540p' | '720p' | '1080p' | '4k' | (string & {});
  }

  /**
   * The audio generation request object
   */
  export interface AudioGenerationRequest {
    /**
     * The callback URL for the audio
     */
    callback_url?: string;

    generation_type?: 'add_audio';

    /**
     * The negative prompt of the audio
     */
    negative_prompt?: string;

    /**
     * The prompt of the audio
     */
    prompt?: string;
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
  concepts?: Array<GenerationCreateParams.Concept>;

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
   * The prompt of the generation
   */
  prompt?: string;

  /**
   * The resolution of the generation
   */
  resolution?: '540p' | '720p' | '1080p' | '4k' | (string & {});
}

export namespace GenerationCreateParams {
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

export interface GenerationListParams {
  limit?: number;

  offset?: number;
}

export interface GenerationAudioParams {
  /**
   * The callback URL for the audio
   */
  callback_url?: string;

  generation_type?: 'add_audio';

  /**
   * The negative prompt of the audio
   */
  negative_prompt?: string;

  /**
   * The prompt of the audio
   */
  prompt?: string;
}

export interface GenerationUpscaleParams {
  /**
   * The callback URL for the upscale
   */
  callback_url?: string;

  generation_type?: 'upscale_video';

  /**
   * The resolution of the upscale
   */
  resolution?: '540p' | '720p' | '1080p' | '4k' | (string & {});
}

Generations.Concepts = Concepts;
Generations.Image = Image;
Generations.Video = Video;

export declare namespace Generations {
  export {
    type Generation as Generation,
    type GenerationListResponse as GenerationListResponse,
    type GenerationCreateParams as GenerationCreateParams,
    type GenerationListParams as GenerationListParams,
    type GenerationAudioParams as GenerationAudioParams,
    type GenerationUpscaleParams as GenerationUpscaleParams,
  };

  export { Concepts as Concepts, type ConceptListResponse as ConceptListResponse };

  export { Image as Image, type ImageCreateParams as ImageCreateParams };

  export { Video as Video, type VideoCreateParams as VideoCreateParams };
}
