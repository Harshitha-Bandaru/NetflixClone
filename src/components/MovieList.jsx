import MovieCard from "./MovieCard";
import { DEFAULT_MOVIE_POSTER, IMG_CDN } from "../utils/constants";

const MovieList = ({ movieListHeading, movieList }) => {
  console.log("movieList", movieList);
  return (
    <div>
      <h1>{movieListHeading}</h1>
      <div className="flex overflow-x-auto ">
        <div className="flex gap-2">
          {movieList?.map((movie) => (
            <MovieCard
              key={movie.id}
              poster={
                movie.poster_path
                  ? IMG_CDN + movie.poster_path
                  : DEFAULT_MOVIE_POSTER
              }
              title={movie.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
