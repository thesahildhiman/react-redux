import { combineReducers } from "redux";
import incDecReducer from "./incDecReducer";
import divMulReducer from "./divMulReducer";
const rootReducers = combineReducers({
  incDecReducer,
  divMulReducer,
});

export default rootReducers;
