import { REQUEST_GET_SHOPS, SUCCESS_GET_SHOPS, FAILED_GET_SHOPS } from "./actionTypes";

const initialState = {
	loading: false,
	shops: [],
	error: "",
};

const shopReducer = (state = initialState, action) => {
	switch (action.type) {
		case REQUEST_GET_SHOPS: {
			return {
				...state,
				loading: true,
			};
		}
		case SUCCESS_GET_SHOPS: {
			return {
				...state,
				loading: false,
				isLoggedIn: true,
				shops: action.payload,
			};
		}
		case FAILED_GET_SHOPS: {
			return {
				...state,
				loading: false,
				shops: [],
				error: action.payload,
			};
		}
		case MODIFY_ITEM:
			return {
				products: action.payload,
			};
		default:
			return state;
	}
};

export default shopReducer;
