import React from "react";
import "./header.css";

const Header = () => {
  return (
    <React.Fragment>
      <div className="header">
        <div className="header-titles">
          <span className="header-title-sm">React & Node</span>
          <span className="header-title-lg">Blog</span>
        </div>
        <img
          src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="random"
          className="header-img"
        />
      </div>
    </React.Fragment>
  );
};
export default Header;
