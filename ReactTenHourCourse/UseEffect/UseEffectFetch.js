import React, { useEffect, useState } from "react";
const url = "https://api.github.com/users";
const UseEffectFetch = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h3>Fetch Setup</h3>
      <h2> Github Users</h2>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              {" "}
              <img src={avatar_url} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}> Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UseEffectFetch;
