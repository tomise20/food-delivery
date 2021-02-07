import axios from "axios";
import {
	REQUEST_AUTH_LOGIN,
	SUCCESS_AUTH_LOGIN,
	FAILED_AUTH_LOGIN,
	AUTH_SIGN_OUT,
	ADD_ADDRESS,
	SET_ACTIVE_ADDRESS,
	REQUEST_GET_USER,
	SUCCESSFULLY_GET_USER,
	FAILED_GET_USER,
	DELETE_ADDRESS,
	REQUEST_AUTH_REGISTER,
	SUCCESS_AUTH_REGISTER,
	FAILED_AUTH_REGISTER,
	REFRESH_ORDERS,
	ADD_ORDER,
	SUCCESS_GET_LOCATION,
	FAILED_GET_LOCATION,
	UPDATE_ADDRESS,
} from "./actionTypes";

export const requestAuthLogin = () => {
	return {
		type: REQUEST_AUTH_LOGIN,
	};
};

export const successAuthLogin = (user) => {
	return {
		type: SUCCESS_AUTH_LOGIN,
		payload: user,
	};
};

export const failedAuthLogin = (error) => {
	return {
		type: FAILED_AUTH_LOGIN,
		payload: error,
	};
};

export const authLogin = (username, password) => {
	return (dispatch) => {
		dispatch(requestAuthLogin());
		const credentials = { email: username, password: password };
		axios
			.post(`${process.env.REACT_APP_SERVER_URL}/login`, credentials)
			.then((res) => {
				let user = res.data.user;
				user.accessToken = res.data.access_token.token;
				delete user.password;
				let expire = new Date();
				expire.setTime(expire.getTime() * 3600 * 1000 * 24 * 365 * 10);
				document.cookie = `token=${user.accessToken}; expires=${expire.toUTCString()}; path="/";`;
				dispatch(successAuthLogin(user));
			})
			.catch((error) => {
				const errorMsg = error.response.data.message;
				if (error.response.status === 401) {
					console.log("lefut");
					dispatch(failedAuthLogin(errorMsg));
				}
			});
	};
};

export const successGetUserLocation = (location) => {
	return {
		type: SUCCESS_GET_LOCATION,
		payload: location,
	};
};

export const failedGetUserLocation = () => {
	return {
		type: FAILED_GET_LOCATION,
		payload: "Location determination failed",
	};
};

export const getUserLocation = () => {
	return (dispatch) => {
		axios
			.get(`${process.env.REACT_APP_SERVER_URL}/get-iplocation`)
			.then((res) => {
				dispatch(successGetUserLocation(res.data));
			})
			.catch((err) => {
				dispatch(failedGetUserLocation());
			});
	};
};

export const requestAuthRegister = () => {
	return {
		type: REQUEST_AUTH_REGISTER,
	};
};

export const successAuthRegister = () => {
	return {
		type: SUCCESS_AUTH_REGISTER,
	};
};

export const failedAuthRegister = (error) => {
	return {
		type: FAILED_AUTH_REGISTER,
		payload: error,
	};
};

export const authRegister = (data) => {
	return (dispatch) => {
		dispatch(requestAuthRegister());

		axios
			.post(`${process.env.REACT_APP_SERVER_URL}/register`, data)
			.then((res) => {
				dispatch(successAuthRegister());
			})
			.catch((err) => {
				dispatch(failedAuthRegister(err.response.data));
			});
	};
};

export const requestGetUser = () => {
	return {
		type: REQUEST_GET_USER,
	};
};

export const successfulGetUser = (user) => {
	return {
		type: SUCCESSFULLY_GET_USER,
		payload: user,
	};
};

export const failedGetUser = (error) => {
	return {
		type: FAILED_GET_USER,
		payload: error,
	};
};

export const getUser = (token) => {
	return (dispatch) => {
		dispatch(requestGetUser());

		axios
			.get(`${process.env.REACT_APP_SERVER_URL}/user/get-user`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => {
				dispatch(successfulGetUser(res.data));
			})
			.catch((error) => {
				const errorMsg = error.response.data.message;
				dispatch(failedGetUser(error.message));
			});
	};
};

export const addAddress = (addresses) => {
	return {
		type: ADD_ADDRESS,
		payload: addresses,
	};
};

export const successfullySetActiveAddress = (addresses) => {
	return {
		type: SET_ACTIVE_ADDRESS,
		payload: addresses,
	};
};

export const setActiveAddress = (userId, addressId, token) => {
	return (dispatch) => {
		axios
			.post(
				`${process.env.REACT_APP_SERVER_URL}/user/set-active-address`,
				{
					user_id: userId,
					address_id: addressId,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
			.then((res) => {
				const addresses = res.data.addresses;
				dispatch(successfullySetActiveAddress(addresses));
			})
			.catch((err) => {
				console.log(err.message);
			});
	};
};

export const deleteAddress = (addresses) => {
	return {
		type: DELETE_ADDRESS,
		payload: addresses,
	};
};

export const authSignOut = () => {
	return {
		type: AUTH_SIGN_OUT,
	};
};

export const updateAddress = (addresses, address) => {
	const newAddresses = addresses.map((item) => {
		if (item.id === address.id) {
			item = address;
		}

		return item;
	});

	return {
		type: UPDATE_ADDRESS,
		payload: newAddresses,
	};
};

export const refreshOrders = (orders) => {
	return {
		type: REFRESH_ORDERS,
		payload: orders,
	};
};

export const addOrder = (order) => {
	return {
		type: ADD_ORDER,
		payload: order,
	};
};
