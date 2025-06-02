// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LumaAI from 'lumaai';
import { Response } from 'node-fetch';

const client = new LumaAI({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource image', () => {
  test('create: only required params', async () => {
    const responsePromise = client.generations.image.create({ model: 'photon-1' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.generations.image.create({
      model: 'photon-1',
      aspect_ratio: '16:9',
      callback_url: 'https://example.com',
      character_ref: { identity0: { images: ['https://example.com'] } },
      format: 'jpg',
      generation_type: 'image',
      image_ref: [{ url: 'https://example.com', weight: 0 }],
      modify_image_ref: { url: 'https://example.com', weight: 0 },
      prompt: 'prompt',
      style_ref: [{ url: 'https://example.com', weight: 0 }],
      sync: true,
      sync_timeout: 0,
    });
  });

  test('reframe: only required params', async () => {
    const responsePromise = client.generations.image.reframe({
      aspect_ratio: '16:9',
      generation_type: 'reframe_image',
      media: { url: 'https://example.com' },
      model: 'photon-1',
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
    const response = await client.generations.image.reframe({
      aspect_ratio: '16:9',
      generation_type: 'reframe_image',
      media: { url: 'https://example.com' },
      model: 'photon-1',
      callback_url: 'https://example.com',
      format: 'jpg',
      grid_position_x: 0,
      grid_position_y: 0,
      prompt: 'prompt',
      resized_height: 0,
      resized_width: 0,
      x_end: 0,
      x_start: 0,
      y_end: 0,
      y_start: 0,
    });
  });
});
