import { combineReducers } from "redux";

const initialState = {
  developers: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "developers": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

// export default combineReducers({
//   // we can add "slice" subreducers here later on...
// });
