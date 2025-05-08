const request = require('supertest');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.get('/api/get-home-page-data', (_, res) => {
  res.status(200).json({ message: 'Test passed' });
});

describe('GET /api/get-home-page-data', () => {
  it('responds with 200 and JSON body', async () => {
    const res = await request(app).get('/api/get-home-page-data');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Test passed' });
  });
});
