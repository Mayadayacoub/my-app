import React, { useState } from "react";
//short circut evaluation

const ShortCircut = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(true);
  //   const firstValue = text || "Hello first";
  //   const secondValue = text && "Hello second";

  return (
    <div>
      {/* <h1> 1: {firstValue}</h1>
      <h2> 2:{secondValue}</h2> */}
      <h1> {text || "john de"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        {" "}
        TogglE Error
      </button>
      {isError && <h1> Error...</h1>}
      {isError ? <p> there is an error</p> : <p> no errors</p>}
    </div>
  );
};

export default ShortCircut;
