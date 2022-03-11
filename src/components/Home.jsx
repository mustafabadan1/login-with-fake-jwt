import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const isLoginTrue = JSON.parse(localStorage.getItem("login"));

  const userNotLogin = () => (
    <>
      <h2>It seem's like you are not login</h2>
      <h3>
        If you have an account, then please <Link to="/Login">Login</Link>
      </h3>
     
    </>
  );
  return (
    <div>
      {isLoginTrue && isLoginTrue.userLogin ? (
        <h2>Welcome Back User</h2>
      ) : (
        <>{userNotLogin()}</>
      )}
    </div>
  );
};

export default Home;