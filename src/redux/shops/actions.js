import { REQUEST_GET_SHOPS, SUCCESS_GET_SHOPS, FAILED_GET_SHOPS } from "./actionTypes";
import shops from "../../util/shops";
import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const requestGetShops = () => {
	return {
		type: REQUEST_GET_SHOPS,
	};
};

export const successGetShops = (user) => {
	return {
		type: SUCCESS_GET_SHOPS,
		payload: user,
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
		if (process.env.REACT_APP_DB_MODE == "true") {
			axios
				.get(`${SERVER_URL}/home`)
				.then((res) => {
					const shops = res.data;
					console.log(shops);
					dispatch(successGetShops(shops));
				})
				.catch((err) => {
					dispatch(failedGetShops(err.message));
				});
		} else {
			dispatch(successGetShops(shops));
		}
	};
};
