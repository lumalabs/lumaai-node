// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as GenerationsAPI from './generations';

export class Image extends APIResource {
  /**
   * Generate an image with the provided prompt
   */
  create(body: ImageCreateParams, options?: Core.RequestOptions): Core.APIPromise<GenerationsAPI.Generation> {
    return this._client.post('/generations/image', { body, ...options });
  }
}

export interface ImageCreateParams {
  /**
   * The aspect ratio of the generation
   */
  aspect_ratio?: '1:1' | '16:9' | '9:16' | '4:3' | '3:4' | '21:9' | '9:21';

  /**
   * The callback URL for the generation
   */
  callback_url?: string;

  character_ref?: ImageCreateParams.CharacterRef;

  generation_type?: 'image';

  image_ref?: Array<ImageCreateParams.ImageRef>;

  /**
   * The model used for the generation
   */
  model?: 'photon-1' | 'photon-flash-1';

  /**
   * The modify image reference object
   */
  modify_image_ref?: ImageCreateParams.ModifyImageRef;

  /**
   * The prompt of the generation
   */
  prompt?: string;

  style_ref?: Array<ImageCreateParams.StyleRef>;
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

export declare namespace Image {
  export { type ImageCreateParams as ImageCreateParams };
}
