import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Item = ({ product, small, deleteItemAction }) => {
	return (
		<div className="cart-item">
			<div className="d-flex p-3 justify-content-between">
				<div className="d-flex align-items-start">
					<span className="mr-1 font-weight-bold text-black-50 quantity">{product.quantity} x </span>
					<div className="flex-grow-1">
						<p className={`red-color name font-weight-bold d-inline-block mb-1 ${small ? "text-sm" : ""}`}>
							{product.name}
						</p>
						<small className="color-dark d-block">lorem ipsum dolor sit.</small>
					</div>
				</div>
				<div className="delete" onClick={() => deleteItemAction(product.id)}>
					<FontAwesomeIcon icon={faTrash} />
				</div>
				<div className="price text-black-50 text-sm">
					${parseFloat(product.quantity * product.price).toFixed(2)}
				</div>
			</div>
		</div>
	);
};

export default Item;
