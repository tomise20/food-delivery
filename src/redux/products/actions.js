import { MODIFY_ITEM } from "./actionTypes";

export const modifyItem = (itemId, products) => {
	let index = products.findIndex((data) => itemId === data.id);
	products[index].isCart = true;
	return {
		type: MODIFY_ITEM,
		payload: products,
	};
};
