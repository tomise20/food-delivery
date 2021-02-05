import { ADD_TO_CART, DELETE_ITEM, INCREMENT_ITEM_QUANTITY } from "./actionTypes";

const initialState = {
	items: [],
	total: 0,
	loading: false,
	error: "",
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART: {
			return {
				...state,
				total: action.payload.total,
				items: action.payload.cartitems,
			};
		}
		case DELETE_ITEM: {
			return {
				...state,
				total: action.payload.total,
				items: action.payload.items,
			};
		}
		case INCREMENT_ITEM_QUANTITY: {
			return {
				...state,
				total: action.payload.total,
				items: action.payload.newList,
			};
		}
		default:
			return state;
	}
};

export default cartReducer;
