import api from "./api";

export const getMovies = async () => {
  const {
    data: { results },
  } = await api.get("/movie/popular");

  return results;
};

export const getTopMovies = async () => {
  const {
    data: { results },
  } = await api.get("/movie/top_rated");

  return results;
};

export const getTopSeries = async () => {
  const {
    data: { results },
  } = await api.get("/tv/top_rated");

  return results;
};

export const getPopularSeries = async () => {
  const {
    data: { results },
  } = await api.get("/tv/popular");

  return results;
};

export const getOnTheAir = async () => {
  const {
    data: { results },
  } = await api.get("/tv/on_the_air");
  return results;
};

export const getAiringToday = async () => {
  const {
    data: { results },
  } = await api.get("/tv/airing_today");
  return results;
};

export const getPopularPerson = async () => {
  const {
    data: { results },
  } = await api.get("/person/popular");

  return results;
};

export const getMovieVideos = async (movieId) => {
  const {
    data: { results },
  } = await api.get(`/movie/${movieId}/videos`);

  return results;
};

export const getMovieCredits = async (movieId) => {
  const {
    data: { cast },
  } = await api.get(`/movie/${movieId}/credits`);

  return cast;
};

export const getMovieSimilar = async (movieId) => {
  const {
    data: { results },
  } = await api.get(`/movie/${movieId}/similar`);

  return results;
};

export const getMovieById = async (movieId) => {
  const { data } = await api.get(`/movie/${movieId}`);

  return data;
};

export const getNowPlaying = async () => {
  const {
    data: { results },
  } = await api.get("/movie/now_playing");
  return results;
};

export const getUpcoming = async () => {
  const {
    data: { results },
  } = await api.get("/movie/upcoming");
  return results;
};

export const getKeyword = async (nameMovie) => {
  const {
    data: { results },
  } = await api.get(`/search/multi?query=${nameMovie}`);
  return results;
};
