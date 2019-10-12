require('dotenv').config();
const axios = require('axios');

async function getMovies(movieId) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`
  );
  const { original_tile, poster_path, overvie, release_date } = response.data;
}
axios
  .get(
    'https://api.themoviedb.org/3/movie/550?api_key=1bdce766d954223068eacafe6c05c383'
  )
  .then(res => {
    console.log(res.data);
  });
