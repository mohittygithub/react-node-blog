import React, { useContext } from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

const TopBar = () => {
  const { dispatch, user } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className=" top-icon top-left">
        <i className=" top-icon fab fa-facebook-square"></i>
        <i className=" top-icon fab fa-twitter-square"></i>
        <i className=" top-icon fab fa-pinterest-square"></i>
        <i className=" top-icon fab fa-instagram-square"></i>
      </div>
      <div className="top-center">
        <ul className="top-list">
          <li className="top-list-item">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="top-list-item">
            <Link to="/about " className="link">
              ABOUT
            </Link>
          </li>
          <li className="top-list-item">
            <Link to="/contact " className="link">
              CONTACT
            </Link>
          </li>
          <li className="top-list-item">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          {user && (
            <li className="top-list-item" onClick={logoutHandler}>
              LOGOUT
            </li>
          )}
        </ul>
      </div>
      <div className="top-right">
        {user ? (
          <Link to="/settings">
            <img
              src={PF + user.profilePic}
              alt={user.name}
              className="top-img"
            />
          </Link>
        ) : (
          <React.Fragment>
            <ul className="top-list">
              <li className="top-list-item">
                <Link to="/register" className="link">
                  REGISTER
                </Link>
              </li>
              <li className="top-list-item">
                <Link to="/login" className="link">
                  LOGIN
                </Link>
              </li>
            </ul>
          </React.Fragment>
        )}

        <i className="top-search-icon fas fa-search"></i>
      </div>
    </div>
  );
};
export default TopBar;
