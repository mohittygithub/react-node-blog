import React, { useState, useEffect } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get(`/categories`);
      setCategories(res.data);
    };
    fetchCategories();
  }, []);

  return (
    <React.Fragment>
      <div className="sidebar">
        <div className="sidebar-item">
          <span className="sidebar-title">ABOUT ME</span>
          <img
            src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sit
            illo alias deleniti amet.
          </p>
        </div>
        <div className="sidebar-item">
          <span className="sidebar-title">CATEGORIES</span>
          <ul className="sidebar-list">
            {categories.map((category) => (
              <Link
                to={`/?category=${category.name}`}
                className="link"
                key={category._id}
              >
                <li className="sidebar-list-item">{category.name} </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="sidebar-item">
          <span className="sidebar-title">FOLLOW US</span>
          <div className="sidebar-social">
            <i className=" sidebar-icon fab fa-facebook-square"></i>
            <i className=" sidebar-icon fab fa-twitter-square"></i>
            <i className=" sidebar-icon fab fa-pinterest-square"></i>
            <i className=" sidebar-icon fab fa-instagram-square"></i>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Sidebar;
