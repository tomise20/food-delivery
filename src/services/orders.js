import axios from "axios";

export const submitOrder = async (cart, order, token) => {
	delete order.card;

	axios
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
			console.log(res.data);
		})
		.catch((err) => {
			console.log(err.message);
		});
};
