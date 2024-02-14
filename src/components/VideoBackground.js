import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movie_id }) => {
  useMovieTrailer(movie_id);
  const movieTrailer = useSelector((store) => store.movies.movieTrailer);
  console.log("movieTrailer", movieTrailer);
  const { key } = movieTrailer || {};
  return (
    <div className="w-screen ">
      <iframe
        className="aspect-video w-screen pointer-events-none"
        src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&controls=0&showinfo=0&loop=1`}
        title="YouTube video player"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
