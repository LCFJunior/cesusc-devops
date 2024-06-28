import request from 'supertest';
import app from '../src/app';

describe('GET /', () => {
  it('responds with HTML containing "Olá, mundo!"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('<h1>Olá, mundo!</h1>');
  });
});
