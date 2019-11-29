import React from "react";
import { connect } from "react-redux";
import fetchPost from "../store/post/actions";
// import { fetchComment } from "../store/post/actions";

class PostPage extends React.Component {
  componentDidMount() {
    const post_id = this.props.match.params.id;
    // console.log("Now let's fetch this post:", post_id);
    this.props.dispatch(fetchPost());
    // this.props.dispatch(fetchComment(post_id));
  }

  render() {
    console.log("hello", this.props);
    const loading = !this.props.postData.post;

    return (
      <div>
        <h1>Posts</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <p>We have {this.props.postData.post.rows.length} posts!</p> &&
          this.props.postData.post.rows.map(post => {
            return (
              <div>
                <p>{post.title}</p>
                <p>{post.content}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log("mapStateToProps(PostPage)", reduxState);
  return {
    postData: reduxState.post
  };
}

export default connect(mapStateToProps)(PostPage);
