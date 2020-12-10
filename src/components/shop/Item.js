import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

const Item = () => {
	return (
		<div className="item mb-3">
			<div className="d-flex align-items-stretch justify-content-between">
				<div className="text-content flex-grow-1 p-3">
					<div className="d-flex justify-content-between">
						<p className="font-weight-bold">Cheseburger with cola</p>
						<div className="raiting text-right">
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<span className="d-block">
								<small className="text-black-50">506 raitings</small>
							</span>
						</div>
					</div>
					<p className="mb-2 text-black-50">500-800 Cal.</p>
					<div className="d-flex justify-content-between align-items-center">
						<p className="text-black-50 text-sm mb-0">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...
						</p>
						<h5 className="font-weight-bold text-success mb-0">$6.20</h5>
					</div>
				</div>
				<div
					className="image"
					style={{
						backgroundImage:
							"url('https://cdn.pixabay.com/photo/2020/10/22/11/36/hamburger-5675844_960_720.jpg')",
					}}
				></div>
			</div>
		</div>
	);
};

export default Item;
