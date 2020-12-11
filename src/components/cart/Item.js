import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Item = () => {
	return (
		<div className="order-item">
			<div className="d-flex p-3 justify-content-between">
				<Link className="name">
					<span className="mr-2 font-weight-bold text-black-50">1</span>
					<p className="red-color font-weight-bold d-inline-block mb-1">Dupla burger with fanta</p>
					<small className="color-dark d-block">lorem ipsum dolor sit.</small>
				</Link>
				<div className="delete">
					<FontAwesomeIcon icon={faTrash} />
				</div>
				<div className="price text-black-50 text-sm">$8.50</div>
			</div>
		</div>
	);
};

export default Item;
