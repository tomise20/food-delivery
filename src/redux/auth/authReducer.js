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
	REQUEST_AUTH_REGISTER,
	SUCCESS_AUTH_REGISTER,
	FAILED_AUTH_REGISTER,
	REFRESH_ORDERS,
	ADD_ORDER,
	SUCCESS_GET_LOCATION,
	FAILED_GET_LOCATION,
	UPDATE_ADDRESS,
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
	location: "",
	isLoggedIn: false,
	successRegister: false,
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
		case SUCCESS_GET_LOCATION: {
			return {
				...state,
				location: action.payload,
			};
		}
		case FAILED_GET_LOCATION: {
			return {
				...state,
				error: action.payload,
			};
		}
		case REQUEST_AUTH_REGISTER: {
			return {
				...state,
				loading: true,
			};
		}
		case SUCCESS_AUTH_REGISTER: {
			return {
				...state,
				loading: false,
				successRegister: true,
				error: "",
			};
		}
		case FAILED_AUTH_REGISTER: {
			return {
				...state,
				loading: false,
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
				loading: false,
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
					addresses: action.payload,
				},
			};
		}
		case UPDATE_ADDRESS: {
			return {
				...state,
				user: {
					...state.user,
					addresses: action.payload,
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
		case REFRESH_ORDERS: {
			return {
				...state,
				loading: false,
				user: {
					...state.user,
					orders: action.payload,
				},
			};
		}
		case ADD_ORDER: {
			return {
				...state,
				user: {
					...state.user,
					orders: [...state.user.orders, action.payload],
				},
			};
		}
		default:
			return state;
	}
};

export default AuthReducer;
