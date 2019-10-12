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
        `${BASE_URL}/movie/${movieId}/external_ids?api_key=${API_KEY}`
      );
      const { imdb_id } = response.data;

      const movieDetails = await axios.get(
        `${BASE_URL}/find/${imdb_id}?api_key=${API_KEY}&external_source=imdb_id`
      );
      const {
        title,
        release_date,
        poster_path,
        overview,
      } = movieDetails.data.movie_results[0];

      return reply
        .status(200)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({
          title,
          release_date,
          poster_path,
          overview,
        });
    } catch (error) {
      return reply.status(500).send({ message: 'server error' });
    }
  },
};

module.exports = Movie;
