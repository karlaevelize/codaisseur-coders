const initialState = {
  successToken: null
};

export default function signUpReducer(state = initialState, action) {
  switch (action.type) {
    case "sign_up/SUCCESS_SIGN_UP": {
      // => Ask yourself: what is action.payload?
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
