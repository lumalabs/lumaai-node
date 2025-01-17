// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { CreditGetResponse, Credits } from './resources/credits';
import { Ping, PingCheckResponse } from './resources/ping';
import {
  Generation,
  GenerationCreateParams,
  GenerationListParams,
  GenerationListResponse,
  Generations,
} from './resources/generations/generations';

export interface ClientOptions {
  /**
   * Defaults to process.env['LUMAAI_API_KEY'].
   */
  authToken?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['LUMAAI_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
}

/**
 * API Client for interfacing with the LumaAI API.
 */
export class LumaAI extends Core.APIClient {
  authToken: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the LumaAI API.
   *
   * @param {string | undefined} [opts.authToken=process.env['LUMAAI_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['LUMAAI_BASE_URL'] ?? https://api.lumalabs.ai/dream-machine/v1] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('LUMAAI_BASE_URL'),
    authToken = Core.readEnv('LUMAAI_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (authToken === undefined) {
      throw new Errors.LumaAIError(
        "The LUMAAI_API_KEY environment variable is missing or empty; either provide it, or instantiate the LumaAI client with an authToken option, like new LumaAI({ authToken: 'My Auth Token' }).",
      );
    }

    const options: ClientOptions = {
      authToken,
      ...opts,
      baseURL: baseURL || `https://api.lumalabs.ai/dream-machine/v1`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.authToken = authToken;
  }

  generations: API.Generations = new API.Generations(this);
  ping: API.Ping = new API.Ping(this);
  credits: API.Credits = new API.Credits(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.authToken}` };
  }

  static LumaAI = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static LumaAIError = Errors.LumaAIError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

LumaAI.Generations = Generations;
LumaAI.Ping = Ping;
LumaAI.Credits = Credits;
export declare namespace LumaAI {
  export type RequestOptions = Core.RequestOptions;

  export {
    Generations as Generations,
    type Generation as Generation,
    type GenerationListResponse as GenerationListResponse,
    type GenerationCreateParams as GenerationCreateParams,
    type GenerationListParams as GenerationListParams,
  };

  export { Ping as Ping, type PingCheckResponse as PingCheckResponse };

  export { Credits as Credits, type CreditGetResponse as CreditGetResponse };
}

export { toFile, fileFromPath } from './uploads';
export {
  LumaAIError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default LumaAI;
