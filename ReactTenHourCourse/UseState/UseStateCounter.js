import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const increseByTime = () => {
    setTimeout(() => {
      //   setValue(p + 5);
      setValue((prevState) => {
        return prevState + 5;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2> Reagualr Counter</h2>
        <h1> {value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          {" "}
          Decrease
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          Reset{" "}
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increase{" "}
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2> More Complex Counter</h2>
        <h1> {value}</h1>
        <button className="btn" onClick={increseByTime}>
          Increase Later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
