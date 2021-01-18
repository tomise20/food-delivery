import React, { useState } from "react";
import { Tooltip } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const OrderItem = () => {
	const [tooltipOpen, setTooltipOpen] = useState(false);

	const toggle = () => setTooltipOpen(!tooltipOpen);

	return (
		<div className="d-flex item-row py-3">
			<div className="order-item">00003213</div>
			<div className="order-item">2020 January 10.</div>
			<div className="order-item">Completed</div>
			<div className="order-item">$18.50</div>
			<div className="order-item actions">
				<Tooltip placement="left" isOpen={tooltipOpen} target="tooltipView" toggle={toggle}>
					Details
				</Tooltip>
				<FontAwesomeIcon icon={faEye} id="tooltipView" />
			</div>
		</div>
	);
};

export default OrderItem;
