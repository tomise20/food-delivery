import { ADD_TO_CART, DELETE_ITEM, INCREMENT_ITEM_QUANTITY } from "./actionTypes";

export const addToCart = (item, list) => {
	let total = 0;
	list.forEach((item) => {
		total += item.quantity * parseFloat(item.price);
	});

	total += item.quantity * parseFloat(item.price);
	total = parseFloat(total).toFixed(2);

	return {
		type: ADD_TO_CART,
		payload: {
			item,
			total,
		},
	};
};

export const deleteItem = (id) => {
	return {
		type: DELETE_ITEM,
		payload: id,
	};
};

export const incrementItemQuantity = (item, list) => {
	let newList = list.map((data) => (item.id === data.id ? { ...data, quantity: data.quantity + 1 } : data));
	let total = 0;
	newList.forEach((item) => {
		total += item.quantity * parseFloat(item.price);
	});

	return {
		type: INCREMENT_ITEM_QUANTITY,
		payload: {
			newList,
			total,
		},
	};
};
