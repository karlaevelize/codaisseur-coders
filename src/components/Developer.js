import React, { Component } from "react";
import { connect } from "react-redux";

export default class Developer extends Component {
  render() {
    return (
      <div>
        <h2>
          {this.props.name}:
          <br />
          {this.props.email}
        </h2>
      </div>
    );
  }
}
