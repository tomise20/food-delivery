import React from "react";

import Item from "./Item";
import { Link, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import { deleteItem } from "../../redux/cart/actions";
import { addFlashMessage } from "../../redux/flash/actions";
import "./styles.scss";

const Cart = ({ deleteItem, addFlashMessage, total, items }) => {
	var uri = useRouteMatch();

	const handleDeleteItem = (id) => {
		deleteItem(id, items);
		addFlashMessage("Product successfully removed from cart!");
	};

	return (
		<div className="cart">
			<div className="title px-3 py-1 font-weight-bold">Your Order</div>
			<hr className="mt-0" />
			<div className="order-list">
				{items.length > 0 &&
					items.map((item) => <Item key={item.id} deleteItemAction={handleDeleteItem} product={item} />)}
			</div>
			{items.length > 0 ? (
				<>
					{uri.path !== "/cart" ? (
						<div className="d-flex justify-content-between p-3">
							<div className="text-black-50 font-weight-bold text-sm">Items subtotal:</div>
							<div className="text-black-50 font-weight-bold text-sm">
								${parseFloat(total).toFixed(2)}
							</div>
						</div>
					) : (
						<>
							<div className="d-flex justify-content-between px-3 pt-3 pb-1">
								<div className="text-black-50 font-weight-bold text-sm">Items subtotal:</div>
								<div className="text-black-50 font-weight-bold text-sm">
									${parseFloat(total).toFixed(2)}
								</div>
							</div>
							<div className="d-flex justify-content-between px-3 pb-1">
								<div className="text-black-50 font-weight-bold text-sm red-color">Delivery fee:</div>
								<div className="text-black-50 font-weight-bold text-sm red-color">free</div>
							</div>
							<div className="d-flex justify-content-between px-3 pb-1">
								<div className="text-black-50 font-weight-bold text-sm">Tax:</div>
								<div className="text-black-50 font-weight-bold text-sm">
									${parseFloat(total * 0.27).toFixed(2)}
								</div>
							</div>
							<div className="d-flex justify-content-between px-3 pt-3">
								<div className="red-color h5 font-weight-bold">Total:</div>
								<div className="red-color h5 font-weight-bold">
									${(parseFloat(total) + parseFloat(total * 0.27)).toFixed(2)}
								</div>
							</div>
						</>
					)}
					{uri.path !== "/cart" && (
						<>
							<hr className="mt-0" />
							<div className="px-3 pb-3">
								<Link to="/cart" className="cart-btn btn btn-block red-btn btn-sm">
									Proceed to checkout
								</Link>
							</div>
						</>
					)}
				</>
			) : (
				<div className="red-color font-weight-bold text-center pb-3">Your cart is empty!</div>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	items: state.cart.items,
	total: state.cart.total,
});

export default connect(mapStateToProps, { deleteItem, addFlashMessage })(Cart);
