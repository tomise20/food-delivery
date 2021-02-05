import { combineReducers } from "redux";
import post from "./posts/postReducer";
import cart from "./cart/cartReducer";
import product from "./products/productReducer";
import shop from "./shops/shopReducer";
import flash from "./flash/flashReducer";
import auth from "./auth/authReducer";

const rootReducer = combineReducers({
	auth,
	flash,
	product,
	post,
	cart,
	shop,
});

export default rootReducer;
