import { ADD_TO_CART, DELETE_ITEM, INCREMENT_ITEM_QUANTITY } from "./actionTypes";

export const addToCart = (item, list) => {
	let total = 0;
	if (list.length > 0) {
		list.forEach((item) => {
			total += item.quantity * parseFloat(item.price);
		});
	}

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

export const deleteItem = (id, list) => {
	let items = list.filter((item) => item.id !== id);
	let total = 0;

	if (items.length > 0) {
		items.forEach((item) => {
			total += item.quantity * parseFloat(item.price);
		});
	} else {
		total = 0;
	}

	return {
		type: DELETE_ITEM,
		payload: {
			total,
			items,
		},
	};
};

export const incrementItemQuantity = (item, list) => {
	let newList = list.map((data) =>
		item.id === data.id ? { ...data, quantity: data.quantity + item.quantity } : data
	);
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
