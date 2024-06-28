const request = require('supertest');
const app = require('../src/app'); // Verifique se o caminho está correto

describe('GET /', () => {
  it('responds with HTML containing "Olá, MUNDO!"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('<h1>Olá, MUNDO!</h1>');
  });
});
