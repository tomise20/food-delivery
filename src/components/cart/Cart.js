import React from "react";

import "./styles.scss";
import Item from "./Item";
import { Link } from "react-router-dom";

const Cart = () => {
	return (
		<div className="cart">
			<div className="title px-3 py-2 font-weight-bold">Your Order</div>
			<hr className="mt-0" />
			<div className="order-list">
				<Item />
				<Item />
				<Item />
			</div>
			<div className="d-flex justify-content-between p-3">
				<div className="text-black-50 font-weight-bold text-sm">Items subtotal:</div>
				<div className="text-black-50 font-weight-bold text-sm">$11.20</div>
			</div>
			<hr className="mt-0" />
			<div className="px-3 pb-3">
				<Link to="/cart" className="cart-btn btn btn-block btn-success btn-sm">
					Proceed to checkout
				</Link>
			</div>
		</div>
	);
};

export default Cart;
