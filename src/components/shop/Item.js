import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

const Item = (props) => {
	return (
		<div className="item mb-3" onClick={() => props.toggle(props.data)}>
			<div className="d-flex flex-column flex-md-row align-items-stretch justify-content-between">
				<div className="text-content flex-grow-1 p-3 order-2 order-md-1">
					<div className="d-flex flex-column flex-md-row justify-content-md-between">
						<p className="font-weight-bold mb-1 mb-md-0">{props.data.name}</p>
						<div className="raiting text-md-right mb-2 mb-md-0">
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<span className="d-block">
								<small className="text-black-50">{props.data.raiting} raitings</small>
							</span>
						</div>
					</div>
					<p className="mb-2 text-black-50">{props.data.cal} Cal.</p>
					<div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
						<p className="text-black-50 text-sm mb-0">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...
						</p>
						<h5 className="font-weight-bold text-success mb-0 mt-3 mt-md-0">
							${parseFloat(props.data.price).toFixed(2)}
						</h5>
					</div>
				</div>
				<div
					className="image order-1 order-md-2"
					style={{
						backgroundImage: `url(${props.data.img})`,
					}}
				></div>
			</div>
		</div>
	);
};

export default Item;
