// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Spitchjs from 'spitchjs';
import { Response } from 'node-fetch';

const client = new Spitchjs({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource translate', () => {
  test('create: only required params', async () => {
    const responsePromise = client.translate.create({ text: 'text' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.translate.create({ text: 'text', source: 'yo', target: 'yo' });
  });
});
