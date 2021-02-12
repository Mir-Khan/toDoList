import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";

const reducer = combineReducers({ todos, visibilityFilter })
export default reducer;