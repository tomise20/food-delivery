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

export const requestGetUser = () => {
	return {
		type: REQUEST_GET_USER,
	};
};

export const successfullyGetUser = (user) => {
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
				console.log(res.data);
				dispatch(successAuthLogin(res.data));
			})
			.catch((error) => {
				const errorMsg = error.response.data.message;
				dispatch(failedGetUser(error.message));
			});
	};
};

export const addAddress = (address) => {
	return {
		type: ADD_ADDRESS,
		payload: address,
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

export const successfullyDeleteAddress = (addresses) => {
	return {
		type: DELETE_ADDRESS,
		payload: addresses,
	};
};

export const deleteAddress = (addresses, addressId, token) => {
	return (dispatch) => {
		axios
			.delete(`${process.env.REACT_APP_SERVER_URL}/user/${addressId}/delete-address`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => {
				const newAddresses = addresses.filter((address) => address.id !== addressId);
				dispatch(successfullyDeleteAddress(newAddresses));
			})
			.catch((err) => {
				console.log(err.message);
			});
	};
};

export const authSignOut = () => {
	return {
		type: AUTH_SIGN_OUT,
	};
};
