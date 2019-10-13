const axios = require('axios');
const { API_KEY, BASE_URL } = require('../constants');
const Movie = {
  async search(request, reply) {
    const searchTerm = request.query.q;
    if (searchTerm) {
      try {
        const response = await axios.get(
          `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchTerm}`
        );
        return { results: response.data.results };
      } catch (error) {
        return reply.status(500).send({ message: 'server error' });
      }
    } else {
      reply
        .status(400)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({ error: 'You must pass a q parameter' });
    }
  },

  async getById(request, reply) {
    const movieId = request.params.id;

    try {
      const response = await axios.get(
        `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
      );
      const {
        id,
        imdb_id,
        title,
        release_date,
        poster_path,
        backdrop_path,
        overview,
        vote_average,
        genres,
      } = response.data;

      return reply
        .status(200)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({
          id,
          imdb_id,
          title,
          release_date,
          poster_path,
          backdrop_path,
          overview,
          vote_average,
          genres: genres.map(genre => genre.name),
        });
    } catch (error) {
      return reply.status(500).send({ message: 'server error' });
    }
  },
};

module.exports = Movie;
