import { MODIFY_ITEM } from "./actionTypes";
import products from "../../util/products";

const initialState = {
	loading: false,
	products: products,
	error: "",
};

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case MODIFY_ITEM:
			return {
				products: action.payload,
			};
		default:
			return state;
	}
};

export default productReducer;
