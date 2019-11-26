import React from "react";
import "./App.css";
import DevelopersList from "./components/DevelopersList";
const redux = require("redux");

function App() {
  return (
    <div className="App">
      <main>
        <DevelopersList />
      </main>
    </div>
  );
}

export default App;
