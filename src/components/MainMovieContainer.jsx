import VideoBackground from "./VideoBackground";

const MainMovieContainer = ({ title, desc, id }) => {
  return (
    <div>
      <div className="absolute w-screen aspect-video text-white bg-gradient-to-r from-black py-9">
        <h1>{title}</h1>
        <p className="w-1/2">{desc}</p>
        <div className="flex gap-3">
          <button className="">▶️ Play</button>
          <button className="">ℹ️ More Info</button>
        </div>
      </div>
      <VideoBackground movie_id={id} />
    </div>
  );
};

export default MainMovieContainer;
