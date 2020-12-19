import axios from "axios";
import { REQUEST_AUTH_LOGIN, SUCCESS_AUTH_LOGIN, FAILED_AUTH_LOGIN, AUTH_SIGN_OUT } from "./actionTypes";

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
				console.log(res);
				let user = res.data.user;
				user.accessToken = res.data.access_token.token;
				delete user.password;
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

export const authSignOut = () => {
	return {
		type: AUTH_SIGN_OUT,
	};
};
