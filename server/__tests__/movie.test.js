const app = require('../src/app')();
const request = require('supertest');

describe('When search for especific movie', () => {
  it('should return movie object', async () => {
    await app.ready();
    const response = await request(app.server).get('/movies/475557');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toBe(
      'application/json; charset=utf-8'
    );
    expect(response.body).toHaveProperty('title');
    expect(response.body).toHaveProperty('release_date');
    expect(response.body).toHaveProperty('poster_path');
    expect(response.body).toHaveProperty('overview');
    expect(response.body.title).toBe('Joker');
  });
});
