const app = require('../src/app');
describe('When search for movies', () => {
  it('should return a object that has `results` key if has q parameter', () => {
    const fastify = app();
    fastify.inject(
      {
        method: 'GET',
        url: '/search',
        query: {
          q: 'joker',
        },
      },
      (err, response) => {
        expect(err).toBeNull;
        expect(response.statusCode).toBe(200);
        expect(response.headers['content-type']).toBe(
          'application/json; charset=utf-8'
        );
        const responseData = JSON.parse(response.payload);
        expect(responseData).toHaveProperty('results');
      }
    );
    fastify.close();
  });

  it('should return code 400 when `q` parameter is not passed', () => {
    const fastify = app();
    fastify.inject(
      {
        method: 'GET',
        url: '/search',
      },
      (err, response) => {
        expect(err).toBeNull;
        expect(response.statusCode).toBe(400);
        expect(response.headers['content-type']).toBe(
          'application/json; charset=utf-8'
        );
        const responseData = JSON.parse(response.payload);
        expect(responseData).toHaveProperty('error');
      }
    );
    fastify.close();
  });
  it('should return code 400 when `q` is empty string', () => {
    const fastify = app();
    fastify.inject(
      {
        method: 'GET',
        url: '/search',
        query: {
          q: '',
        },
      },
      (err, response) => {
        expect(err).toBeNull;
        expect(response.statusCode).toBe(400);
        expect(response.headers['content-type']).toBe(
          'application/json; charset=utf-8'
        );
        const responseData = JSON.parse(response.payload);
        expect(responseData).toHaveProperty('error');
      }
    );
    fastify.close();
  });
  it('results must have not be empty when search for Joker movie', () => {
    const fastify = app();
    fastify.inject(
      {
        method: 'GET',
        url: '/search',
        query: {
          q: 'joker',
        },
      },
      (err, response) => {
        expect(err).toBeNull;
        expect(response.statusCode).toBe(200);
        expect(response.headers['content-type']).toBe(
          'application/json; charset=utf-8'
        );
        const responseData = JSON.parse(response.payload);
        expect(responseData.results.length).toBeGreaterThan(0);
      }
    );
    fastify.close();
  });
});
