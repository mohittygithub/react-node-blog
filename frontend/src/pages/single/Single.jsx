import React from "react";
import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { SinglePost } from "../../components/singlePost/SinglePost";

const Single = () => {
  return (
    <React.Fragment>
      <div className="single">
        <SinglePost />
        <Sidebar />
      </div>
    </React.Fragment>
  );
};
export default Single;
