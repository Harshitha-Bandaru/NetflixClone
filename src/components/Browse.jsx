import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";
import MainMovieContainer from "./MainMovieContainer";
import MovieGenresList from "./MovieGenresList";

const Browse = () => {
  useNowPlayingMovies();
  const moviesList = useSelector((store) => store.movies.nowPlayingMoviesList);
  // early return if moviesList is empty
  if (!moviesList.length) return;
  const mainMovie = moviesList[0];
  console.log("mainMovie", mainMovie);
  const { original_title, overview, backdrop_path, poster_path, title, id } =
    mainMovie;
  console.log(id, title, overview, backdrop_path, poster_path, original_title);

  return (
    <div>
      <Header />
      <MainMovieContainer title={title} desc={overview} id={id} />
      <MovieGenresList />
    </div>
  );
  /**
   * Main Container
   *  - Video Background
   *  - Video Title
   * Secondary Container
   *  - Movies List*n
   *    - cards*n
   */
};

export default Browse;
