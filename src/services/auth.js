import axios from "axios";

export const onSaveAddress = async (address, token) => {
	return await axios
		.post(`${process.env.REACT_APP_SERVER_URL}/user/store-address`, address, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			throw new Error(err.message);
		});
};

export const onUpdateAddress = async (address, token) => {
	return await axios
		.put(`${process.env.REACT_APP_SERVER_URL}/user/update-address`, address, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			throw new Error(err.message);
		});
};

export const onDeleteAddress = async (addressId, token) => {
	return await axios
		.delete(`${process.env.REACT_APP_SERVER_URL}/user/${addressId}/delete-address`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err.message);
			throw new Error(err.message);
		});
};

export const onRefreshOrders = async (token) => {
	return await axios
		.get(`${process.env.REACT_APP_SERVER_URL}/user/refresh-orders`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			throw new Error(err.message);
		});
};
