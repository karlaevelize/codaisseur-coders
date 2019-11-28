import React from "react";
import "./App.css";
import DevelopersList from "./components/DevelopersList";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Toolbar from "./components/Toolbar";
import PostPage from "./components/PostPage";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import DeveloperDetails from "./components/DeveloperDetails";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/read/:id" component={PostPage} />
        <Route path="/developers" component={DevelopersList} />
        <Route path="/signup" component={SignUp} />
        <Route path="/details/:id" component={DeveloperDetails} />
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
