import React from "react";
import { Link } from "react-router-dom";

const ShopListItem = ({ shop }) => {
	return (
		<Link to={`shops/${shop.id}`}>
			<div className="shop-item d-flex flex-column flex-lg-row justify-content-start">
				<img src={shop.shop_image} className="mr-4" />
				<div className="d-flex flex-column w-100">
					<div className="d-flex flex-column flex-lg-row justify-content-between w-100">
						<div className="shop-name mt-3 mt-lg-0">
							<h6 className="mb-0 font-weight-bold">{shop.name}</h6>
							<small className="shop-type">{shop.type}</small>
						</div>
						<div className="shop-raiting  mt-2 mt-lg-0">
							<small>{shop.raitings} raitings</small>
						</div>
						<div className="shop-delivery text-left text-lg-right">
							<small>delivery: {shop.delivery_time} min.</small>
						</div>
						<div className="shop-order text-left text-lg-right">
							${shop.minimum_order}
							<br />
							<small>Minimum</small>
						</div>
					</div>
					<div className="shop-desc mt-3">{shop.description.slice(0, 150)}</div>
				</div>
			</div>
		</Link>
	);
};

export default ShopListItem;
