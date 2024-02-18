export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjAyNjBlZTk5ZjQ4Y2QyMzE2ZWM3ZDFkMDY4MjRjNSIsInN1YiI6IjY1YzdjZDljYjZjZmYxMDE4NWE1YmU3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DyOKoqJeYyFLNeFEtxZFrihgUDd0slxvEVNpQUiqHxI",
  },
};

export const NOW_PLAYING_API_URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const BASE_URL = "https://api.themoviedb.org/3/movie/";

export const IMG_CDN = "https://image.tmdb.org/t/p/w780";

export const lang = [
  { name: "English", langCode: "en" },
  { name: "Telugu", langCode: "tel" },
  { name: "Spanish", langCode: "es" },
];
