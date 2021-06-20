import React from "react";
import "./post.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const PF = "http://localhost:5000/images/";
  console.log(PF + post.photo);
  return (
    <React.Fragment>
      <div className="post">
        {post.photo && (
          <img className="post-img" src={PF + post.photo} alt="random" />
        )}

        <div className="post-info">
          <div className="post-cats">
            {post.categories.map((category) => (
              <span className="post-cat">{category.name}</span>
            ))}
          </div>
          <Link to={`/post/${post._id}`} className="link">
            <span className="post-title">{post.title}</span>
          </Link>
          <hr />
          <span className="post-date">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="post-desc">{post.desc}</p>
      </div>
    </React.Fragment>
  );
};
export default Post;
