import {combineReducers} from "redux";
import taskReducres from "./taskReducer";

const rootReducer = combineReducers ({taskReducres})

export default rootReducer