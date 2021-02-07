import React, { useState } from "react";
import { Tooltip } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const OrderItem = ({ order }) => {
	const [tooltipOpen, setTooltipOpen] = useState(false);

	const toggle = () => setTooltipOpen(!tooltipOpen);

	return (
		<div className="d-flex flex-column flex-md-row item-row py-3 px-4">
			<div className="order-item">
				<span className="d-md-none">Id: </span>#{order.id}
			</div>
			<div className="order-item">
				<span className="d-md-none">Date: </span>
				{order.created_at}
			</div>
			<div className="order-item">
				<span className="d-md-none">Status: </span>
				Completed
			</div>
			<div className="order-item">
				<span className="d-md-none">Price: </span>${parseFloat(order.price).toFixed(2)}
			</div>
			<div className="order-item actions text-left text-md-center">
				<span className="d-md-none">Action: </span>
				<Tooltip placement="left" isOpen={tooltipOpen} target="tooltipView" toggle={toggle}>
					Details
				</Tooltip>
				<FontAwesomeIcon icon={faEye} id="tooltipView" />
			</div>
		</div>
	);
};

export default OrderItem;
