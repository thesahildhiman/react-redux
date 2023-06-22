import { combineReducers } from "redux";
import incDecReducer from "./incDecReducer";

const rootReducers = combineReducers({
  incDecReducer,
});

export default rootReducers;
