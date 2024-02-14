import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MovieGenresList = () => {
  const nowPlayingMoviesList = useSelector(
    (store) => store.movies.nowPlayingMoviesList
  );
  console.log("nowpla", nowPlayingMoviesList);
  return (
    <div className="flex flex-col bg-black">
      <div>
        <h1>Now Playing</h1>
        <div className="flex overflow-x-auto ">
          <div className="flex gap-2">
            {nowPlayingMoviesList.map((movie) => (
              <MovieCard
                key={movie.id}
                poster={movie.poster_path}
                title={movie.title}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <h1>Popular</h1>
        <div className="flex overflow-x-auto">
          <div className="flex gap-2">
            {nowPlayingMoviesList.map((movie) => (
              <MovieCard
                key={movie.id}
                poster={movie.poster_path}
                title={movie.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieGenresList;
