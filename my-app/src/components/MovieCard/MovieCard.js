import React from "react";
import "./MovieCard.css";

const MovieCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />  
    </div>
    <strong>Name:</strong> {props.name}
    <span onClick={() => props.removeMovie(props.id)} className="remove">
      𝘅
    </span>
  </div>
);

export default MovieCard;
