import {
	FAILED_GET_POPULAR_PRODUCTS,
	MODIFY_ITEM,
	REQUEST_GET_POPULAR_PRODUCTS,
	SUCCESS_GET_POPULAR_PRODUCTS,
} from "./actionTypes";

const initialState = {
	loading: false,
	products: [],
	popularProducts: [],
	error: "",
};

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case MODIFY_ITEM:
			return {
				...state,
				products: action.payload,
			};
		case REQUEST_GET_POPULAR_PRODUCTS: {
			return {
				...state,
				loading: false,
			};
		}
		case SUCCESS_GET_POPULAR_PRODUCTS: {
			return {
				...state,
				loading: false,
				popularProducts: action.payload,
			};
		}
		case FAILED_GET_POPULAR_PRODUCTS: {
			return {
				...state,
				errror: action.error,
			};
		}
		default:
			return state;
	}
};

export default productReducer;
