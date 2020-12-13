import { combineReducers } from "redux";
import post from "./posts/postReducer";
import cart from "./cart/cartReducer";
import product from "./products/productReducer";
import snackbar from "./snackbar/snackbarReducer";
import auth from "./auth/authReducer";

const rootReducer = combineReducers({
	auth,
	snackbar,
	product,
	post,
	cart,
});

export default rootReducer;
