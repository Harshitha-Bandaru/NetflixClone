import { useEffect } from "react";
import { BASE_URL, OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const fetch_movie_videos = async (movie_id) => {
    const MOVIE_VIDEOS_URL = `${BASE_URL}${movie_id}/videos?language=en-US`;
    const response = await fetch(MOVIE_VIDEOS_URL, OPTIONS);
    const data = await response.json();

    const trailers = data.results.filter((video) => (video.type = "Trailer"));
    const trailer = trailers[0] || data.results[0];
    dispatch(addMovieTrailer(trailer));
  };
  useEffect(() => {
    fetch_movie_videos(id);
  }, []);
};
export default useMovieTrailer;
