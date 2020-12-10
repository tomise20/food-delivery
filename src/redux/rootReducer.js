import { combineReducers } from "redux";
import todo from "./todo/todoReducer";
import post from './posts/postReducer';

const rootReducer = combineReducers({
	todo: todo,
	post: post,
});

export default rootReducer;
