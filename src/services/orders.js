import axios from "axios";

export const checkFields = async (data) => {
	if (data.address.name === "") throw new Error("Please enter the shipping name!");

	if (data.address.street === "") throw new Error("Please enter shipping street name!");

	if (data.address.phone === "") throw new Error("Please enter shipping phone number!");

	if (data.address.city === "") throw new Error("Please enter shipping city name!");

	if (data.address.postcode == "") throw new Error("Please enter shipping postcode!");

	if (data.payment_option === "credit-card") {
		if (data.card.number === "") {
			throw new Error("Credit card number is required!");
		} else if (data.card.number.length < 12) {
			throw new Error("the credit card number must be at least 12 digits!");
		}

		if (data.card.expires === "") throw new Error("Credit card expire is required!");

		if (data.card.code.length === 0) throw new Error("Credit card security code is required!");

		if (data.card.name === "") throw new Error("Credit card name is required!");
	} else {
		return true;
	}
};

export const submitOrder = async (cart, order, token) => {
	delete order.card;

	return await axios
		.post(
			`${process.env.REACT_APP_SERVER_URL}/order/store`,
			{
				orderitems: cart.items,
				total: cart.total,
				user: order,
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			throw new Error(err.message);
		});
};
