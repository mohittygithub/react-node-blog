import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(`/auth/register`, {
        username,
        email,
        password,
      });
      console.log(res.data);
      res.data && window.location.replace("/login");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <React.Fragment>
      <div className="register">
        <span className="register-title">Register</span>
        <form className="register-form" onSubmit={(e) => handleSubmit(e)}>
          <label>Username</label>
          <input
            className="register-input"
            type="text"
            placeholder="Enter you username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            className="register-input"
            type="email"
            placeholder="Enter you email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            className="register-input"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="register-button" type="submit">
            Register
          </button>
        </form>
        <button className="register-login-button">
          <Link to="/login" className="link">
            Login
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
export default Register;
