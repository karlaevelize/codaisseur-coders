import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export default class Developer extends Component {
  render() {
    return (
      <div>
        {/* <Link to={`/developers/${developer.id}`}> */}
        <h3>{this.props.name}:</h3>
        {/* </Link> */}

        <p>{this.props.email}</p>
      </div>
    );
  }
}

// const mapStateToProps = reduxState => {
//   return {
//     developer: reduxState.developer
//   };
// };

// export default connect(mapStateToProps)(Developer);
