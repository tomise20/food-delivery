import { GET_POSTS_SUCCESS, GET_POSTS_FAILED } from "./actionTypes";
import axios from "axios";

export const fetchPostSuccess = (posts) => {
	return {
		type: GET_POSTS_SUCCESS,
		payload: posts,
	};
};

export const fetchPostFiled = (error) => {
	return {
		type: GET_POSTS_FAILED,
		payload: error,
	};
};

export const getPosts = () => {
	return (dispatch) => {
		axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then((resp) => {
				dispatch(fetchPostSuccess(resp.data));
			})
			.catch((error) => {
				dispatch(fetchPostFiled(error.message));
			});
	};
};
