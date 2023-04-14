import React from "react";
import "./Button.css";

const Button = ({ handler }) => {
  return (
    <div className="checkbox-wrapper-25">
      <input type="checkbox" onClick={() => handler()} />
    </div>
  );
};

export default Button;
