import React, { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((user) => {
        const { login } = user;
        setUser(login);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  if (loading) {
    return <h2> Loading....</h2>;
  }
  if (isError) {
    return <h2> Error</h2>;
  }
  return <h2>{user}</h2>;
};

export default MultipleReturns;
