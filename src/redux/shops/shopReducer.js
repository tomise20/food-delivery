import {
	REQUEST_GET_SHOPS,
	SUCCESS_GET_SHOPS,
	FAILED_GET_SHOPS,
	REQUEST_FETCH_PRODUCTS,
	SUCCESS_FETCH_PRODUCTS,
	FAILED_FETCH_PRODUCTS,
} from "./actionTypes";

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
		case REQUEST_FETCH_PRODUCTS: {
			return {
				...state,
				loading: true,
			};
		}
		case SUCCESS_FETCH_PRODUCTS: {
			return {
				...state,
				loading: false,
				currentShop: action.payload,
			};
		}
		case FAILED_FETCH_PRODUCTS: {
			return {
				...state,
				loading: false,
				error: action.error,
			};
		}
		default:
			return state;
	}
};

export default shopReducer;
