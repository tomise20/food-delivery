import { REQUEST_AUTH_LOGIN, SUCCESS_AUTH_LOGIN, FAILED_AUTH_LOGIN, AUTH_SIGN_OUT } from "./actionTypes";

const initialState = {
	user: {
		name: "",
		username: "",
		email: "",
		password: "",
	},
	isLoggedIn: false,
	loading: false,
	error: "",
};

const AuthReducer = (state = initialState, action) => {
	switch (action.type) {
		case REQUEST_AUTH_LOGIN: {
			return {
				...state,
				loading: true,
			};
		}
		case SUCCESS_AUTH_LOGIN: {
			return {
				...state,
				loading: false,
				isLoggedIn: true,
				user: action.payload,
			};
		}
		case FAILED_AUTH_LOGIN: {
			return {
				...state,
				loading: false,
				user: {},
				error: action.payload,
			};
		}
		case AUTH_SIGN_OUT: {
			return {
				...state,
				loading: false,
				user: {},
				isLoggedIn: false,
			};
		}
		default:
			return state;
	}
};

export default AuthReducer;
