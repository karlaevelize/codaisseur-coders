import React, { Component } from "react";
import { Link } from "react-router-dom";

class Toolbar extends Component {
  render() {
    return (
      <div>
        <Link to="/">Homepage</Link>
        <br />
        <Link to="/developers">Go to Developers page</Link>
        <br />
        <Link to="/read/:id">Go to Postpage</Link>
      </div>
    );
  }
}

export default Toolbar;
