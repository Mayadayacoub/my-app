import React, { useEffect, useState } from "react";
//conditional and dependencies( dependency list)
const UsEffectConditional = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("call use effect");
    if (value > 5) {
      document.title = ` New Message ${value}`;
    }
  }, []);
  console.log("render component");

  return (
    <>
      <h1> {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </>
  );
};

export default UsEffectConditional;
