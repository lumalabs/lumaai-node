// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LumaAI from 'lumaai';
import { Response } from 'node-fetch';

const client = new LumaAI({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource video', () => {
  test('reframe: only required params', async () => {
    const responsePromise = client.generations.video.reframe({
      aspect_ratio: '16:9',
      generation_type: 'reframe_video',
      media: { url: 'https://example.com' },
      model: 'ray-2',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('reframe: required and optional params', async () => {
    const response = await client.generations.video.reframe({
      aspect_ratio: '16:9',
      generation_type: 'reframe_video',
      media: { url: 'https://example.com' },
      model: 'ray-2',
      callback_url: 'https://example.com',
      first_frame: { url: 'https://example.com' },
      grid_position_x: 0,
      grid_position_y: 0,
      prompt: 'prompt',
      x_end: 0,
      x_start: 0,
      y_end: 0,
      y_start: 0,
    });
  });
});
