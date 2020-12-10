import { GET_POSTS_SUCCESS, GET_POSTS_FAILED } from "./actionTypes";

const initialState = {
	posts: [],
	error: "",
};

const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_POSTS_SUCCESS: {
			return {
				posts: action.payload,
			};
		}
		case GET_POSTS_FAILED: {
			return {
				posts: [],
				error: action.payload,
			};
		}
		default:
			return state;
	}
};

export default postReducer;
