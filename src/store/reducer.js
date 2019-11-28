import { combineReducers } from "redux";
import developersReducer from "./developers/reducer";
import postReducer from "./post/reducer";
import authReducer from "./auth/reducer";
import signUpReducer from "./signup/reducer";
import detailsReducer from "./developer_details/reducer";

export default combineReducers({
  developers: developersReducer,
  postData: postReducer,
  auth: authReducer,
  signUp: signUpReducer,
  details: detailsReducer
  // we can add "slice" subreducers here later on...
});
