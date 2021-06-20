import React from "react";
import "./posts.css";
import Post from "../post/Post";

const Posts = ({ posts }) => {
  return (
    <React.Fragment>
      <div className="posts">
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </React.Fragment>
  );
};
export default Posts;
