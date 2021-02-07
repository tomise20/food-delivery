import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faShoppingBag, faUser, faShoppingCart, faStore } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

const MobileMenu = ({ openCart, auth }) => {
	return (
		<div className="mobile-menu pb-1 pt-2 px-2">
			<div className="d-flex justify-content-between align-items-center">
				<NavLink exact to="/" activeClassName="active" className="text-center">
					<FontAwesomeIcon icon={faHome} />
					<div>Home</div>
				</NavLink>
				<NavLink activeClassName="active" to="/shops" className="text-center">
					<FontAwesomeIcon icon={faStore} />
					<div>Shops</div>
				</NavLink>
				<NavLink to="/cart" activeClassName="active" className="text-center">
					<FontAwesomeIcon icon={faShoppingBag} />
					<div>Cart</div>
				</NavLink>
				{auth.isLoggedIn ? (
					<NavLink activeClassName="active" to="/profile" className="text-center">
						<FontAwesomeIcon icon={faUser} />
						<div>Profile</div>
					</NavLink>
				) : (
					<NavLink activeClassName="active" to="/signin" className="text-center">
						<FontAwesomeIcon icon={faUser} />
						<div>Sign in</div>
					</NavLink>
				)}
			</div>

			<div className="float-cart-icon" onClick={() => openCart(true)}>
				<FontAwesomeIcon icon={faShoppingCart} />
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(MobileMenu);
