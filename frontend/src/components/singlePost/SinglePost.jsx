import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlePost.css";

export const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const { user } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: {
          username: user.username,
        },
      });
      window.location.replace("/");
    } catch (error) {}
  };

  const updateHandler = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      // window.location.reload();
      setUpdateMode(false);
    } catch (error) {}
  };

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`/posts/${path}`);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    fetchPost();
  }, [path]);
  return (
    <React.Fragment>
      <div className="single-post">
        <div className="single-post-wrapper">
          {PF + post.photo && (
            <img
              src={PF + post.photo}
              alt="random"
              className="single-post-img"
            />
          )}
          {updateMode ? (
            <input
              type="text"
              value={title}
              className="single-post-title-input"
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            <h1 className="single-post-title">
              {title}
              {post.username === user?.username && (
                <div className="single-post-edit">
                  <i
                    className=" single-post-icon far fa-edit"
                    onClick={() => setUpdateMode(true)}
                  ></i>
                  <i
                    className="single-post-icon far fa-trash-alt"
                    onClick={handleDelete}
                  ></i>
                </div>
              )}
            </h1>
          )}

          <div className="single-post-info">
            <span className="single-post-author">
              Author:
              <Link to={`/?user=${post.username}`} className="link">
                <b>{post.username}</b>
              </Link>
            </span>
            <span className="single-post-date">
              {new Date(post.createdAt).toDateString()}
            </span>
          </div>
          {updateMode ? (
            <>
              <textarea
                className="single-post-desc-textarea"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
              <button className="single-post-button" onClick={updateHandler}>
                Update
              </button>
            </>
          ) : (
            <p className="single-post-desc">{desc}</p>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
