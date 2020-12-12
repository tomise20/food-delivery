import { combineReducers } from "redux";
import post from "./posts/postReducer";
import cart from "./cart/cartReducer";
import product from "./products/productReducer";

const rootReducer = combineReducers({
	product,
	post,
	cart,
});

export default rootReducer;
