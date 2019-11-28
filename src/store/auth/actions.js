import api from "../../api";

export function login(email, password) {
  // Return the thunk itself, i.e. a function
  return function thunk(dispatch, getState) {
    api("/login", {
      method: "POST",
      body: {
        email: email,
        password: password
      }
    })
      .then(data => {
        console.log(data);
        dispatch(saveAccessToken(data.jwt));
      })
      .catch(err => console.log("err", err));
  };
}

// An action creator
export function saveAccessToken(accessToken) {
  return {
    type: "auth/SAVE_ACCESS_TOKEN",
    payload: accessToken
  };
}
