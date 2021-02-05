import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

const Product = ({ product }) => {
	return (
		<div className="product mb-3">
			<div className="product-image position-relative">
				<img src={product.image} alt={product.name} />
				<div className="add-to-wishlist">
					<FontAwesomeIcon icon={faHeart} />
				</div>
			</div>
			<div className="product-content p-3">
				<div className="d-flex align-items-start">
					<div className="flex-grow-1">
						<p className="font-weight-bold mb-2">{product.name}</p>
					</div>
					<span className="point-badge">4.5</span>
				</div>
				<small className="d-block mb-3">American, Fast food</small>
				<div className="d-flex">
					<div className="flex-grow-1">{product.preparation_time} min</div>
					<div>
						<FontAwesomeIcon icon={faStar} className="mr-1" />
						<FontAwesomeIcon icon={faStar} className="mr-1" />
						<FontAwesomeIcon icon={faStar} className="mr-1" />
						<FontAwesomeIcon icon={faStar} className="mr-1" />
					</div>
				</div>
				<div className="d-flex">
					<div className="text-black-50 flex-grow-1">$ {parseFloat(product.price).toFixed(2)}</div>
					<div className="text-black-50">380 raitings</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
