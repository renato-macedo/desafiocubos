require('dotenv').config();
const Fastify = require('fastify');

function app() {
  const fastify = Fastify({ logger: true });

  fastify.register(require('./routes'));

  return fastify;
}

module.exports = app;
