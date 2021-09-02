import React, { useState } from "react";
import { data } from "./data";
const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
    console.log(newPeople);
  };
  return (
    <div>
      <h2> use state array example</h2>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4> {name}</h4>
            <button onClick={() => removeItem(id)}> Remove Item</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear Item
      </button>
    </div>
  );
};

export default UseStateArray;
