import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import deleteAccount from "../store/delete/actions";

class DeleteAccount extends Component {
  handleClick = token => {
    this.props.dispatch(deleteAccount());
  };

  render() {
    const token = this.props.auth.accessToken;
    return (
      <div>
        {!token ? (
          <p>
            Go to <Link to="/login">login</Link> page
          </p>
        ) : (
          <p>
            <button onClick={() => this.handleClick(token)}>
              Delete Account
            </button>
          </p>
        )}
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    auth: reduxState.auth
  };
};

export default connect(mapStateToProps)(DeleteAccount);
