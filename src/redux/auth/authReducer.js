import {
	REQUEST_AUTH_LOGIN,
	SUCCESS_AUTH_LOGIN,
	FAILED_AUTH_LOGIN,
	AUTH_SIGN_OUT,
	ADD_ADDRESS,
	SET_ACTIVE_ADDRESS,
	REQUEST_GET_USER,
	SUCCESSFULLY_GET_USER,
	FAILED_GET_USER,
	DELETE_ADDRESS,
} from "./actionTypes";

const initialState = {
	user: {
		id: "",
		accessToken: "",
		name: "",
		username: "",
		email: "",
		updated_at: "",
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
				error: "",
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
		case REQUEST_GET_USER: {
			return {
				...state,
				loading: true,
			};
		}
		case SUCCESSFULLY_GET_USER: {
			return {
				...state,
				user: action.payload,
				isLoggedIn: true,
			};
		}
		case FAILED_GET_USER: {
			return {
				...state,
				error: action.error,
			};
		}
		case DELETE_ADDRESS: {
			return {
				...state,
				user: {
					...state.user,
					addresses: action.payload,
				},
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
		case ADD_ADDRESS: {
			return {
				...state,
				user: {
					...state.user,
					addresses: [...state.user.addresses, action.payload.address],
				},
			};
		}
		case SET_ACTIVE_ADDRESS: {
			return {
				...state,
				user: {
					...state.user,
					addresses: action.payload,
				},
			};
		}
		default:
			return state;
	}
};

export default AuthReducer;
