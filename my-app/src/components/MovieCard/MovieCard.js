import React from "react";
import "./MovieCard.css";


const MovieCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={() => props.removeMovie(props.id)} className="remove"  />
    </div>
  </div>);

export default MovieCard;
