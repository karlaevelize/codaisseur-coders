import { combineReducers } from "redux";
import developersReducer from "./developers/reducer";

export default combineReducers({
  developers: developersReducer
  // we can add "slice" subreducers here later on...
});
