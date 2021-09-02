import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "sofia",
    age: 8,
    message: "pretty like MUM",
  });
  const changeMessage = () => {
    setPerson({ ...person, message: "hello world" });
  };
  return (
    <div>
      <div>
        <h4> {person.name}</h4>
        <h4>{person.age}</h4>
        <h4>{person.message}</h4>
        <button type="button" onClick={changeMessage} className="btn">
          ChanegMessage
        </button>
      </div>
    </div>
  );
};

export default UseStateObject;
