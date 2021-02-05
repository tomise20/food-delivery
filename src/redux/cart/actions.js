import { ADD_TO_CART, DELETE_CART, DELETE_ITEM, INCREMENT_ITEM_QUANTITY } from "./actionTypes";

export const addToCart = (item, list) => {
	let total = 0;
	let temp = [];
	let cartitems = [];
	const index = list.some((cartitem) => cartitem.id === item.id);

	if (index) {
		cartitems = list.map((cartitem) => {
			if (cartitem.id === item.id) cartitem.quantity += item.quantity;

			return cartitem;
		});
	} else {
		temp = cartitems.concat(list);
		temp.push(item);
		cartitems = temp;
	}

	cartitems.forEach((item) => {
		total += item.quantity * parseFloat(item.price);
	});
	total = parseFloat(total).toFixed(2);

	return {
		type: ADD_TO_CART,
		payload: {
			cartitems,
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

export const deleteCart = () => {
	return {
		type: DELETE_CART,
	};
};
