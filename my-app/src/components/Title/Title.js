import React from "react";
import "./Title.css";

const Title = props => (
  <div className="title">
    <h5 className="float-left">"Game Restarts Button..Top Left"</h5>
    <h5 className="float-right"><i className="fab fa-drupal"></i> {props.children}</h5>
    <hr></hr>
    <h2 className="text-center">"#placeHolder...insert Incorrect/Correct Answer"</h2>
    <h2 className="text-center">"Only choose an image once to have score go up"</h2>
  </div>);

export default Title;
