import React from "react";
import { useHistory } from "react-router-dom";

export default function Navbar({ user, setUser }) {
  let history = useHistory();

  const logout = () => {
    localStorage.setItem("user", null);
    setUser(null);
    history.push("/");
  };
  return (
    <div>
      {user ? (
        <div>
          <div>welcome, {user.email}</div>
          <div onClick={logout}>Logout</div>
        </div>
      ) : (
        <div>
          <p>Login to use chat</p>
        </div>
      )}
    </div>
  );
}
