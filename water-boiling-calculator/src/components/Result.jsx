import React from "react";

const Result = ({ celsius }) => {
  let content;
  if (celsius === "") {
    content = <h1>Please input Temperature</h1>;
  } else if (celsius >= 100) {
    content = <h1>water will boil</h1>;
  } else if (celsius < 100) {
    content = <h1>Water will not boil</h1>;
  }
  return <div>{content}</div>;
};

export default Result;
