import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTSearchResults = () => {
  const userSearchMovieResults = useSelector(
    (store) => store.movies.userSearchMovies
  );
  return userSearchMovieResults?.length === 0 ? (
    <div>We're on it!</div>
  ) : (
    <MovieList
      movieListHeading="Search Results"
      movieList={userSearchMovieResults}
    />
  );
};

export default GPTSearchResults;
