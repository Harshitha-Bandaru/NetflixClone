const MovieCard = ({ poster, title }) => {
  return (
    <div className="w-64">
      <img alt={title} src={poster} />
    </div>
  );
};

export default MovieCard;
