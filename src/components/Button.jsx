import React, { useEffect, useState } from "react";
import "./Button.css";
const Button = ({btnc,toggleMode,isToggled}) => {

  return (
    <div className="parentContainer">
      <div
        className={`childContainer ${isToggled ? "toggled" : ""}`}
        style={{ backgroundColor: btnc }}
        onClick={toggleMode}
      ></div>
    </div>
  );
};

export default Button;
