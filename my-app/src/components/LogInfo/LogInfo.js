import React from "react";
import "./LogInfo.css";

const LogInfo = props => (
  <div className="black">
    <h4 className="text-center">{props.text}</h4>
  </div>
);

export default LogInfo;
