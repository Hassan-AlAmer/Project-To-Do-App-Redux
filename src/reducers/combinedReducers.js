import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import selectedTaskReducer from "./selectedTaskReducer";

export default combineReducers({
  tasks: taskReducer,
  selectedtask: selectedTaskReducer
});
