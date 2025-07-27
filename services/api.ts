export const TMDB_Config = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

type Query = {
  query: string;
};

export const fetchMovies = async ({ query }: Query) => {
  const endpoint = query
    ? `${TMDB_Config.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_Config.BASE_URL}/discover/movie?sort_by-popularity.desc`;

  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_Config.headers,
  });

  if (!response.ok) {
    // @ts-ignore
    throw new Error("Failed to fetch movies", response.statusText);
  } else {
    const data = await response.json();
    return data.results;
  }
};
