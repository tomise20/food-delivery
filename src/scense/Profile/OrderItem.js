import React, { useState } from "react";
import { Tooltip } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const OrderItem = ({ order }) => {
	const [tooltipOpen, setTooltipOpen] = useState(false);

	const toggle = () => setTooltipOpen(!tooltipOpen);

	return (
		<div className="d-flex item-row py-3 px-4">
			<div className="order-item">#{order.id}</div>
			<div className="order-item">{order.created_at}</div>
			<div className="order-item">Completed</div>
			<div className="order-item">${order.price}</div>
			<div className="order-item actions text-center">
				<Tooltip placement="left" isOpen={tooltipOpen} target="tooltipView" toggle={toggle}>
					Details
				</Tooltip>
				<FontAwesomeIcon icon={faEye} id="tooltipView" />
			</div>
		</div>
	);
};

export default OrderItem;
