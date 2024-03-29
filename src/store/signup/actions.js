import api from "../../api";

export function signUp(name, email, password) {
  return function thunk(dispatch, getState) {
    api("/signup", {
      method: "POST",
      body: {
        name: name,
        email: email,
        password: password
      }
    })
      .then(data => console.log("data", data))
      .catch(err => console.log("err", err));
  };
}

export function successSignUp(successToken) {
  return {
    type: "sign_up/SUCCESS_SIGN_UP",
    payload: successToken
  };
}
