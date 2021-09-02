import React, { useRef } from "react";

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" ref={refContainer} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UseRefBasics;
