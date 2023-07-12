import { combineReducers } from "@reduxjs/toolkit";
import todos from "./todo.reducer";
import filter from "./filter.reducer";

export default combineReducers({
	todos,
	filter,
});
