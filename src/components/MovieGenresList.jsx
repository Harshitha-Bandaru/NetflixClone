import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieGenresList = () => {
  const nowPlayingMoviesList = useSelector(
    (store) => store.movies.nowPlayingMoviesList
  );
  console.log("nowpla", nowPlayingMoviesList);
  return (
    <div className="flex flex-col bg-black">
      <MovieList
        movieListHeading="Now Playing"
        movieList={nowPlayingMoviesList}
      />
      <MovieList movieListHeading="Popular" movieList={nowPlayingMoviesList} />
    </div>
  );
};

export default MovieGenresList;
