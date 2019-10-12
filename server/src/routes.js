const Movie = require('./Movie');

async function routes(fastify, options) {
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
  });

  fastify.get('/ok', async (request, reply) => {
    return { ok: true };
  });

  fastify.get('/search', Movie.search);
  fastify.get('/movies/:id', Movie.getById);
}

module.exports = routes;
