const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('responds with HTML containing "Olá, JOE!"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('<h1>Olá, mundo!</h1>');
  });
});
