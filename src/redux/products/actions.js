import { MODIFY_ITEM } from "./actionTypes";

export const modifyItem = (itemId, products, action = true) => {
	let index = products.findIndex((data) => itemId === data.id);
	products[index].isCart = action;
	return {
		type: MODIFY_ITEM,
		payload: products,
	};
};
