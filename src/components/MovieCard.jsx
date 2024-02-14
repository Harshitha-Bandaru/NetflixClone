import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ poster, title }) => {
  return (
    <div className="w-64">
      <img alt={title} src={IMG_CDN + poster} />
    </div>
  );
};

export default MovieCard;
