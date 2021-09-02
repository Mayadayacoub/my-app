import React, { useState } from "react";

const Test = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(firstName, email);
    if (firstName && email) {
      //   console.log("items exists");
      const person = {
        id: new Date().getTime().toString(),
        firstName: firstName,
        email: email,
      };
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
    } else {
      console.log("empty");
    }
  };
  return (
    <div>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName"> Name :</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email"> Email :</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            {" "}
            Add Person{" "}
          </button>
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h5>{firstName}</h5>
              <h5>{email}</h5>
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default Test;
