import api from "../../api";

export default function deleteAccount() {
  return function thunk(dispatch, getState) {
    const jwt = getState().auth.accessToken;
    console.log("hello", jwt);
    api(`/developers/1`, {
      method: "DELETE",
      jwt: jwt
    })
      .then(data => {
        console.log("hello", data);
        dispatch(deleter(data));
      })
      .catch(err => console.log("err", err));
  };
}

export function deleter(data) {
  return {
    type: "delete/DELETE",
    payload: data
  };
}
