// src/components/DevelopersList.js
import React from "react";
import { connect } from "react-redux";
import api from "../api";
import Developer from "./Developer";

// The "unconnected" inner component:
class DevelopersList extends React.Component {
  componentDidMount() {
    // Do the data fetch...
    api("/developers").then(data => {
      // Tell the Redux store the data has been fetched
      //   console.log("data", data);
      this.props.dispatch({
        type: "developers/FETCHED",
        payload: data
      });
    });
  }

  render() {
    const loading = !this.props.devs;

    return (
      <div>
        <h1>Codaisseur developers</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <p>We have {this.props.devs.count} developers!</p>
        )}
        {this.props.devs
          ? this.props.devs.rows.map(developer => {
              return (
                <Developer name={developer.name} email={developer.email} />
              );
            })
          : "Loading..."}
      </div>
    );
  }
}

// The wrapper component that connects to the Redux store
//  and passes down props derived from the store's state
//  to the inner component:

function mapStateToProps(reduxState) {
  // console.log("redux state?", reduxState);
  return {
    devs: reduxState.developers
  };
}
// ...which is what we export as the default (only) export
export default connect(mapStateToProps)(DevelopersList);
