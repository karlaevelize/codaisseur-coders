import api from "../../api";

export default function fetchPost(id) {
  return function thunk(dispatch, getState) {
    api(`/posts/${id}/`).then(post => {
      dispatch(setPost(post));
    });
  };
}

export function setPost(post) {
  return {
    type: "post/FETCHED",
    payload: post
  };
}

export function fetchComment(id) {
  return function thunk(dispatch, getState) {
    api(`/posts/${id}/comments`).then(comment => {
      dispatch(setComment(comment));
    });
  };
}

export function setComment(comment) {
  return {
    type: "comment/FETCHED",
    payload: comment
  };
}
