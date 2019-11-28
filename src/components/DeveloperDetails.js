import React, { Component } from "react";
import fetchDevelopers from "../store/developers/actions";
import { connect } from "react-redux";

class DeveloperDetails extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(fetchDevelopers);
  }

  render() {
    if (!this.props.developer) {
      return "Loading...";
    }
    const { name, intro, github_username, website } = this.props.developer;
    return (
      <div>
        <h1>{name}</h1>
        <h5>Github: {github_username}</h5>
        <p>{intro}</p>
        <a href={website}>My webzone</a>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    developer: reduxState.developerDetails
  };
};

export default connect(mapStateToProps)(DeveloperDetails);
