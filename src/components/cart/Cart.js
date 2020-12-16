import React from "react";

import "./styles.scss";
import Item from "./Item";
import { Link, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import { deleteItem } from "../../redux/cart/actions";
import { modifyItem } from "../../redux/products/actions";

const Cart = (props) => {
	var uri = useRouteMatch();

	const handleDeleteItem = (id) => {
		props.deleteItem(id, props.items);
		props.modifyItem(id, props.products, false);
	};

	return (
		<div className="cart">
			<div className="title px-3 py-2 font-weight-bold">Your Order</div>
			<hr className="mt-0" />
			<div className="order-list">
				{props.items.length > 0 &&
					props.items.map((item) => (
						<Item key={item.id} deleteItemAction={handleDeleteItem} product={item} />
					))}
			</div>
			{props.items.length > 0 ? (
				<>
					{uri.path !== "/cart" ? (
						<div className="d-flex justify-content-between p-3">
							<div className="text-black-50 font-weight-bold text-sm">Items subtotal:</div>
							<div className="text-black-50 font-weight-bold text-sm">
								${parseFloat(props.total).toFixed(2)}
							</div>
						</div>
					) : (
						<>
							<div className="d-flex justify-content-between px-3 pt-3 pb-1">
								<div className="text-black-50 font-weight-bold text-sm">Items subtotal:</div>
								<div className="text-black-50 font-weight-bold text-sm">
									${parseFloat(props.total).toFixed(2)}
								</div>
							</div>
							<div className="d-flex justify-content-between px-3 pb-1">
								<div className="text-black-50 font-weight-bold text-sm red-color">Delivery fee:</div>
								<div className="text-black-50 font-weight-bold text-sm red-color">free</div>
							</div>
							<div className="d-flex justify-content-between px-3 pb-1">
								<div className="text-black-50 font-weight-bold text-sm">Tax:</div>
								<div className="text-black-50 font-weight-bold text-sm">
									${parseFloat(props.total * 0.27).toFixed(2)}
								</div>
							</div>
							<div className="d-flex justify-content-between px-3 pt-3">
								<div className="red-color h5 font-weight-bold">Total:</div>
								<div className="red-color h5 font-weight-bold">
									${(parseFloat(props.total) + parseFloat(props.total * 0.27)).toFixed(2)}
								</div>
							</div>
						</>
					)}
					{uri.path !== "/cart" && (
						<>
							<hr className="mt-0" />
							<div className="px-3 pb-3">
								<Link to="/cart" className="cart-btn btn btn-block btn-success btn-sm">
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
	products: state.product.products,
});

export default connect(mapStateToProps, { deleteItem, modifyItem })(Cart);
