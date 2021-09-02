import React, { useState } from "react";

const ErrorExample = () => {
  const [title, setTitle] = useState("random title");
  const handleClick = () => {
    setTitle("hello");
  };
  return (
    <div className="container ">
      <h2> {title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        change tItle
      </button>
    </div>
  );
};

export default ErrorExample;
