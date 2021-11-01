import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '4a16861085f8455514b0cadf3b11771d'; //Ключ API (v3 auth)

// list of the most popular films for today
export async function requestTrendingMovies(page = 1) {
  const { data } = await axios.get(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}&page=${page}&language=ru-RU&include_image_language=en`,
  );
  return data;
}

// movie information request
export async function requestDetails(movieId, type) {
  const { data } = await axios.get(
    `${BASE_URL}/${type}/${movieId}?api_key=${API_KEY}&language=ru-RU&append_to_response=videos&include_image_language=en`,
  );

  return data;
}

// list of the films
export async function requestLatestMovies(page = 1) {
  const { data } = await axios.get(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}&language=ru-RU&include_image_language=en`,
  );
  return data;
}

// list of the TVs
export async function requestTV(page = 1) {
  const { data } = await axios.get(
    `${BASE_URL}/tv/popular?api_key=${API_KEY}&page=${page}&language=ru-RU&include_image_language=en`,
  );
  return data;
}

// request for information about the cast
export async function requestCredits(movieId, type) {
  const { data } = await axios.get(
    `${BASE_URL}/${type}/${movieId}/credits?api_key=${API_KEY}&language=ru-RU`,
  );

  return data;
}

// request for movie reviews
export async function requestReviews(movieId, type) {
  const { data } = await axios.get(
    `${BASE_URL}/${type}/${movieId}/reviews?api_key=${API_KEY}`,
  );

  return data;
}

//searching for movies, tv shows  by keyword
export async function requestSearch(query, page = 1) {
  const { data } = await axios.get(
    `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${query}&page=${page}&language=ru-RU`,
  );
  return data;
}

// export async function fetchTrailers(movieId) {
//   const { data } = await axios.get(
//     `${BASE_URL}/${movieId}/videos?api_key=${API_KEY}`,
//   );
//   return data;
// }
