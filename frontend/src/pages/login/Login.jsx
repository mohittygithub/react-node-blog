import React, { useContext, useRef, useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post("/auth/login", {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (error) {
      setError(true);
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  return (
    <React.Fragment>
      <div className="login">
        <span className="login-title">Login</span>
        <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
          <label>Username</label>
          <input
            className="login-input"
            type="text"
            placeholder="Enter you username"
            ref={usernameRef}
          />
          <label>Password</label>
          <input
            className="login-input"
            type="password"
            placeholder="Enter your password"
            ref={passwordRef}
          />
          <button className="login-button" type="submit" disabled={isFetching}>
            Login
          </button>
        </form>
        <button className="login-register-button">
          <Link to="/register" className="link">
            Register
          </Link>
        </button>
        {error && (
          <span style={{ color: "red", marginTop: "10px" }}>
            Something went wrong!
          </span>
        )}
      </div>
    </React.Fragment>
  );
};
export default Login;
