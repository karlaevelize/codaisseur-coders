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
        <br />
        <Link to="/login">Login</Link>
        <br />
        <Link to="/signup">Sign Up</Link>
        <br />
        <Link to="/delete">Delete Account</Link>
      </div>
    );
  }
}

export default Toolbar;
