import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteItem } from "../../redux/cart/actions";

const Item = ({ product, deleteItem, small }) => {
	const handleDeleteItem = (id) => {
		deleteItem(id);
	};

	return (
		<div className="cart-item">
			<div className="d-flex p-3 justify-content-between">
				<Link>
					<div className="d-flex align-items-start">
						<span className="mr-1 font-weight-bold text-black-50 quantity">{product.quantity} x </span>
						<div className="flex-grow-1">
							<p
								className={`red-color name font-weight-bold d-inline-block mb-1 ${
									small ? "text-sm" : ""
								}`}
							>
								{product.name}
							</p>
							<small className="color-dark d-block">lorem ipsum dolor sit.</small>
						</div>
					</div>
				</Link>
				<div className="delete" onClick={() => handleDeleteItem(product.id)}>
					<FontAwesomeIcon icon={faTrash} />
				</div>
				<div className="price text-black-50 text-sm">${product.quantity * product.price}</div>
			</div>
		</div>
	);
};

export default connect(null, { deleteItem })(Item);
