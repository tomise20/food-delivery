import { combineReducers } from "redux";
import post from "./posts/postReducer";
import cart from "./cart/cartReducer";
import product from "./products/productReducer";
import snackbar from "./snackbar/snackbarReducer";

const rootReducer = combineReducers({
	snackbar,
	product,
	post,
	cart,
});

export default rootReducer;
