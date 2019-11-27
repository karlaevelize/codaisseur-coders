import React from "react";
import { connect } from "react-redux";
import fetchPost from "../store/post/actions";
import ReactMarkdown from "react-markdown";
import { fetchComment } from "../store/post/actions";

class PostPage extends React.Component {
  componentDidMount() {
    const post_id = this.props.match.params.id;
    // console.log("Now let's fetch this post:", post_id);
    this.props.dispatch(fetchPost(post_id));
    this.props.dispatch(fetchComment(post_id));
  }

  render() {
    console.log(this.props.postData.comments.rows);
    return (
      <div>
        {!this.props.postData.post && <p>Loading...</p>}
        {this.props.postData.post && (
          <div>
            <h2>{this.props.postData.post.title}</h2>
            <ReactMarkdown source={this.props.postData.post.content} />
          </div>
        )}
        {!this.props.postData.comments.rows && <p>Loading...</p>}
        {this.props.postData.comments.rows && (
          <div>
            <h2>Comment</h2>
            <p>{this.props.postData.comments.rows[0].text}</p>
            <p>{this.props.postData.comments.rows[1].text}</p>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    postData: reduxState.postData,
    comments: reduxState.postData.comments
  };
}

export default connect(mapStateToProps)(PostPage);
