import React from "react";
import "./MovieCard.css";

const handleClick = (props) => {
    props.reArrangeMovies();
    props.clickedMovie(props.id);
};
const MovieCard = (props) => {
    return (
      <div className="card">
        <div className="img-container" onClick={() => handleClick(props)}>
          <img alt={props.name} src={props.image} />
        </div>
      </div>
    )
}
export default MovieCard;
