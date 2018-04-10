import React from "react";
import "./Title.css";


const Title = props => (
  <div className="title">
    <h5 className="float-left restart" onClick={() => props.restart()}><i className="fab fa-drupal"></i>Restart Game</h5>
    <h5 className="float-right"> {props.children}</h5>
    <hr></hr>
    <h2 className="text-center">Marvel's Brands List</h2>
  </div>
);

export default Title;
