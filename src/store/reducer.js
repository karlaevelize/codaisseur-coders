import { combineReducers } from "redux";
import developersReducer from "./developers/reducer";
import postReducer from "./post/reducer";

export default combineReducers({
  developers: developersReducer,
  postData: postReducer
  // we can add "slice" subreducers here later on...
});
