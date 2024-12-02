// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LumaAI from 'lumaai';
import { Response } from 'node-fetch';

const client = new LumaAI({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource video', () => {
  test('create', async () => {
    const responsePromise = client.generations.video.create({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
