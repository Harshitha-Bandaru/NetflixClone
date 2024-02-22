import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMoviesList: [],
    movieTrailer: null,
    userSearchMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMoviesList = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addUserSearchMovies: (state, action) => {
      state.userSearchMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addMovieTrailer, addUserSearchMovies } =
  moviesSlice.actions;
export default moviesSlice.reducer;
