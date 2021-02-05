import {
	REQUEST_GET_SHOPS,
	SUCCESS_GET_SHOPS,
	FAILED_GET_SHOPS,
	REQUEST_FETCH_PRODUCTS,
	SUCCESS_FETCH_PRODUCTS,
} from "./actionTypes";
import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const requestGetShops = () => {
	return {
		type: REQUEST_GET_SHOPS,
	};
};

export const successGetShops = (shops) => {
	return {
		type: SUCCESS_GET_SHOPS,
		payload: shops,
	};
};

export const failedGetShops = (error) => {
	return {
		type: FAILED_GET_SHOPS,
		payload: error,
	};
};

export const fetchShops = () => {
	return (dispatch) => {
		dispatch(requestGetShops());
		axios
			.get(`${SERVER_URL}/shops`)
			.then((res) => {
				const shops = res.data;
				dispatch(successGetShops(shops));
			})
			.catch((err) => {
				dispatch(failedGetShops(err.message));
			});
	};
};

export const requestFetchProducts = () => {
	return {
		type: REQUEST_FETCH_PRODUCTS,
	};
};

export const successFetchProducts = (shop) => {
	return {
		type: SUCCESS_FETCH_PRODUCTS,
		payload: shop,
	};
};

export const fetchProducts = (id) => {
	return (dispatch) => {
		dispatch(requestFetchProducts());
		axios
			.get(`${process.env.REACT_APP_SERVER_URL}/shops/${id}/products`)
			.then((res) => {
				dispatch(successFetchProducts(res.data));
			})
			.catch((err) => {
				console.log(err.message);
			});
	};
};
