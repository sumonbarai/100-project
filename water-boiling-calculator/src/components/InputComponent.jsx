import React from "react";

const InputComponent = ({ title, handler, val }) => {
  return (
    <fieldset className="fieldset">
      <legend>Enter Temperature in {title}</legend>
      <input
        value={val}
        type="number"
        name={title}
        onChange={(e) => handler(e)}
      />
    </fieldset>
  );
};

export default InputComponent;
