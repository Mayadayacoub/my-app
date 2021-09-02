import React, { useEffect, useState } from "react";
//clean up use effect
const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    console.log("use effect");
    window.addEventListener("resize", checkSize);
    // return () => {
    //   console.log("clean up");
    //   window.removeEventListener("resize", checkSize);
    // };
  });
  console.log("render");
  return (
    <>
      <h1> Use Effect Clean Up</h1>
      <h2> Window</h2>
      <h2> {size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
