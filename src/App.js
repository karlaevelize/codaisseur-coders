import React from "react";
import "./App.css";
import DevelopersList from "./components/DevelopersList";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Toolbar from "./components/Toolbar";
import PostPage from "./components/PostPage";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Switch>
        <Route path="/read/:id" component={PostPage} />
        <Route path="/developers" component={DevelopersList} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
