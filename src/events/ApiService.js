const API_KEY = "54a3853d4adea9297616896d7d257650";
const BASE_URL = "https://api.themoviedb.org/3";

async function ApiService(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) throw Error("Wrong request! Please, try again");

    return await response.json();
  } catch (error) {
    throw error;
  }
}

export function getMovieTranding() {
  return ApiService(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
}

export function getMovieById(movieId) {
  return ApiService(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
}

export async function getMovieByName(query) {
  try {
    const response = await ApiService(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
    );

    if (response.results.length === 0)
      throw Error(`'${query}' - wrong request! Please, try another`);

    return response;
  } catch (error) {
    throw error;
  }
}

export function getActors(movieId) {
  return ApiService(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
}

export function getReviews(movieId) {
  return ApiService(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
}
