// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Spitchjs from 'spitchjs';

const client = new Spitchjs({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource speech', () => {
  test('create: required and optional params', async () => {
    const response = await client.speech.create({ language: 'yo', text: 'text', voice: 'sade' });
  });
});
