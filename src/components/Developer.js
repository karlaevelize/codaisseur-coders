import React, { Component } from "react";

export default class Developer extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}:</h3>

        <p>{this.props.email}</p>
      </div>
    );
  }
}
