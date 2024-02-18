import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";
import MainMovieContainer from "./MainMovieContainer";
import MovieGenresList from "./MovieGenresList";
import GPTSearchPage from "./GPTSearchPage";

const Browse = () => {
  useNowPlayingMovies();
  const moviesList = useSelector((store) => store.movies.nowPlayingMoviesList);
  const gptSearchButton = useSelector((store) => store.gpt.gptSearchButton);
  // early return if moviesList is empty
  if (!moviesList.length) return;
  const mainMovie = moviesList[0];
  console.log("mainMovie", mainMovie);
  const { overview, title, id } = mainMovie;
  // console.log(id, title, overview, backdrop_path, poster_path, original_title);

  return (
    <div>
      <Header />
      {gptSearchButton ? (
        <GPTSearchPage />
      ) : (
        <>
          <MainMovieContainer title={title} desc={overview} id={id} />
          <MovieGenresList />
        </>
      )}
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
