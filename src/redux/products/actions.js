import {
	FAILED_GET_POPULAR_PRODUCTS,
	MODIFY_ITEM,
	REQUEST_GET_POPULAR_PRODUCTS,
	SUCCESS_GET_POPULAR_PRODUCTS,
} from "./actionTypes";
import axios from "axios";

export const modifyItem = (itemId, products, action = true) => {
	let index = products.findIndex((data) => itemId === data.id);
	products[index].isCart = action;
	return {
		type: MODIFY_ITEM,
		payload: products,
	};
};

export const requestGetPopularProducts = () => {
	return {
		type: REQUEST_GET_POPULAR_PRODUCTS,
	};
};

export const successGetPopularProducts = (products) => {
	return {
		type: SUCCESS_GET_POPULAR_PRODUCTS,
		payload: products,
	};
};

export const failedGetPopularProducts = (err) => {
	return {
		type: FAILED_GET_POPULAR_PRODUCTS,
		payload: err,
	};
};

export const getPopularProducts = () => {
	return (dispatch) => {
		dispatch(requestGetPopularProducts());
		axios
			.get(`${process.env.REACT_APP_SERVER_URL}/shops/popular-products`)
			.then((res) => {
				const products = res.data;
				dispatch(successGetPopularProducts(products));
			})
			.catch((err) => {
				dispatch(failedGetPopularProducts(err.message));
			});
	};
};
