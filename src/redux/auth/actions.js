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
		if (username === "user" && password === "password") {
			const user = {
				name: "Jhone Doe",
				username: "user",
				email: "user@me.com",
				password: "password",
			};

			setTimeout(() => {
				dispatch(successAuthLogin(user));
			}, 3000);
		} else {
			const errorMsg = "The credentials data is invalid!";
			setTimeout(() => {
				dispatch(failedAuthLogin(errorMsg));
			}, 3000);
		}
	};
};

export const authSignOut = () => {
	return {
		type: AUTH_SIGN_OUT,
	};
};
