import React, { useContext } from "react";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/homepage/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Context } from "./context/Context";

const App = () => {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
