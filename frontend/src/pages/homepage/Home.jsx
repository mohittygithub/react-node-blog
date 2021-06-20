import React, { useState, useEffect } from "react";
import "./home.css";
import axios from "axios";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`/posts/${search}`);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <React.Fragment>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </React.Fragment>
  );
};
export default Home;
