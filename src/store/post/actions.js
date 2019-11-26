export function fetchPost(id) {
  return function thunk(dispatch, getState) {
    api(`/posts/${id}`).then(post => {
      dispatch(setPost(post));
    });
  };
}

export function setPost(post) {
  switch (action.type) {
    case "posts/FETCHED": {
      // => Ask yourself: what is action.payload?
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
