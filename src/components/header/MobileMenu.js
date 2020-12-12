import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faShoppingBag, faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const MobileMenu = ({ openCart }) => {
	return (
		<div className="mobile-menu pb-1 pt-2 px-2">
			<div className="d-flex justify-content-between align-items-center">
				<Link to="/" className="text-center active">
					<FontAwesomeIcon icon={faHome} />
					<div>Home</div>
				</Link>
				<Link to="/cart" className="text-center">
					<FontAwesomeIcon icon={faShoppingBag} />
					<div>Cart</div>
				</Link>
				<Link to="/profile" className="text-center">
					<FontAwesomeIcon icon={faUser} />
					<div>Profile</div>
				</Link>
			</div>

			<div className="float-cart-icon" onClick={() => openCart(true)}>
				<FontAwesomeIcon icon={faShoppingCart} />
			</div>
		</div>
	);
};

export default MobileMenu;
