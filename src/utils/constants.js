export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_API_KEY,
  },
};

export const NOW_PLAYING_API_URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const BASE_URL = "https://api.themoviedb.org/3/movie/";

export const IMG_CDN = "https://image.tmdb.org/t/p/w780";

export const DEFAULT_MOVIE_POSTER =
  "https://eticketsolutions.com/demo/themes/e-ticket/img/movie.jpg";

export const lang = [
  { name: "English", langCode: "en" },
  { name: "Telugu", langCode: "tel" },
  { name: "Spanish", langCode: "es" },
];
