// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as GenerationsAPI from './generations';

export class Image extends APIResource {
  /**
   * Generate an image with the provided prompt
   *
   * @example
   * ```ts
   * const generation = await client.generations.image.create({
   *   model: 'photon-1',
   * });
   * ```
   */
  create(body: ImageCreateParams, options?: Core.RequestOptions): Core.APIPromise<GenerationsAPI.Generation> {
    return this._client.post('/generations/image', { body, ...options });
  }

  /**
   * Reframe an image by its ID
   *
   * @example
   * ```ts
   * const generation = await client.generations.image.reframe({
   *   aspect_ratio: '16:9',
   *   generation_type: 'reframe_image',
   *   media: { url: 'https://example.com' },
   *   model: 'photon-1',
   * });
   * ```
   */
  reframe(
    body: ImageReframeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GenerationsAPI.Generation> {
    return this._client.post('/generations/image/reframe', { body, ...options });
  }
}

export interface ImageCreateParams {
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

  character_ref?: ImageCreateParams.CharacterRef;

  /**
   * The format of the image
   */
  format?: 'jpg' | 'png';

  generation_type?: 'image';

  image_ref?: Array<ImageCreateParams.ImageRef>;

  /**
   * The modify image reference object
   */
  modify_image_ref?: ImageCreateParams.ModifyImageRef;

  /**
   * The prompt of the generation
   */
  prompt?: string;

  style_ref?: Array<ImageCreateParams.StyleRef>;

  /**
   * Create image in synchronous mode and return complated image
   */
  sync?: boolean;

  /**
   * The timeout for the synchronous image generation
   */
  sync_timeout?: number;
}

export namespace ImageCreateParams {
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

export interface ImageReframeParams {
  /**
   * The aspect ratio of the generation
   */
  aspect_ratio: '1:1' | '16:9' | '9:16' | '4:3' | '3:4' | '21:9' | '9:21';

  generation_type: 'reframe_image';

  /**
   * The image entity object
   */
  media: ImageReframeParams.Media;

  /**
   * The model used for the reframe image
   */
  model: 'photon-1' | 'photon-flash-1';

  /**
   * The callback URL of the generation, a POST request with Generation object will
   * be sent to the callback URL when the generation is dreaming, completed, or
   * failed
   */
  callback_url?: string;

  /**
   * The format of the image
   */
  format?: 'jpg' | 'png';

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
   * Resized height of source image
   */
  resized_height?: number;

  /**
   * Resized width of source image
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

export namespace ImageReframeParams {
  /**
   * The image entity object
   */
  export interface Media {
    /**
     * The URL of the image
     */
    url: string;
  }
}

export declare namespace Image {
  export { type ImageCreateParams as ImageCreateParams, type ImageReframeParams as ImageReframeParams };
}
