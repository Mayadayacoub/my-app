//
import React, { useEffect, useState } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1> Show & Hide</h1>
      <button className="btn" onClick={() => setShow(!show)}>
        Show & Hide
      </button>
      {show && <Item />}
    </div>
  );
};
const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  return (
    <>
      <h1> window</h1>
      <h2> size :{size}</h2>
    </>
  );
};

export default ShowHide;
