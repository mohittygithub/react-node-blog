import React, { useContext, useState } from "react";
import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { Context } from "../../context/Context";
import axios from "axios";

const Settings = () => {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const PF = "http://localhost:5000/images/";

  console.log(`/users/${user._id}`);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = { userId: user._id, username, email, password };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;

      try {
        await axios.post("/upload", data);
      } catch (error) {}
    }

    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      res.data && setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <React.Fragment>
      <div className="settings">
        <div className="settings-wrapper">
          <div className="settings-title">
            <span className="settings-update-title">Update Your Account</span>
            <span className="settings-delete-title">Delete Account</span>
          </div>
          <form className="settings-form" onSubmit={handleSubmit}>
            <label>Profile Picture</label>
            <div className="settings-pp">
              <img
                src={file ? URL.createObjectURL(file) : PF + user.profilePic}
                alt={user.username}
              />
              <label htmlFor="fileInput">
                <i className="settings-pp-icon far fa-user-circle"></i>{" "}
              </label>
              <input
                id="fileInput"
                type="file"
                style={{ display: "none" }}
                className="settings-pp-input"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <label htmlFor="">Username</label>
            <input
              type="text"
              placeholder={user.username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder={user.email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="">Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="settings-submit" type="submit">
              Update
            </button>
            {success && (
              <span style={{ color: "green", textAlign: "right" }}>
                Profile has been updated...
              </span>
            )}
          </form>
        </div>
        <Sidebar />
      </div>
    </React.Fragment>
  );
};
export default Settings;
