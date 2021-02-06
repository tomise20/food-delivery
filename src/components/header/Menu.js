import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBag, faChevronDown, faUserCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { authSignOut } from "../../redux/auth/actions";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem,
	NavLink,
	Input,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
} from "reactstrap";

const Menu = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const [search, setSearch] = useState("");

	const onSignOut = () => {
		props.authSignOut();
	};

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<Navbar color="light" className="sticky-nav bg-white" light expand="md">
				<Link to="/" className="brand red-color">
					Food Delivery
				</Link>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto align-items-center" navbar>
						<NavItem className="mr-3">
							<form onSubmit={onSubmit}>
								<InputGroup className="rounded-0">
									<InputGroupAddon className="rounded-0" addonType="prepend">
										<InputGroupText className="rounded-0 bg-white border-right-0">
											<FontAwesomeIcon icon={faSearch} />
										</InputGroupText>
									</InputGroupAddon>
									<Input
										placeholder="Pizza, Burger"
										className="border-left-0 rounded-0"
										id="header-search-input"
										value={search}
										onChange={handleChange}
									/>
								</InputGroup>
							</form>
						</NavItem>
						<NavItem className="mr-3">
							<Link className="red-color font-weight-bold" to="/shops">
								Order now
							</Link>
						</NavItem>
						<NavItem className="mr-3">
							{props.auth.isLoggedIn ? (
								<div className="position-relative account">
									<Link className="red-color profile menu" to="/profile">
										<small className="red-color name">
											Hi, {props.auth.user.name.split(" ")[0]}{" "}
										</small>
										<FontAwesomeIcon icon={faChevronDown} className="ml-2 red-color" size="sm" />
									</Link>
									<div className="account-menu py-4 d-flex px-2 flex-column justify-content-center">
										<div className="text-center red-color account-item mb-3">
											<Link to="/profile" className="red-color">
												<FontAwesomeIcon icon={faUserCog} size="lg" />
												<br />
												Proflie
											</Link>
										</div>
										<div
											className="text-center red-color account-item mb-3"
											onClick={() => onSignOut()}
										>
											<FontAwesomeIcon icon={faSignOutAlt} size="lg" />
											<br />
											Sign out
										</div>
									</div>
								</div>
							) : (
								<Link className="red-color font-weight-bold" to="/signin">
									Sign In
								</Link>
							)}
						</NavItem>
						<NavItem
							className="shopping-cart"
							onMouseLeave={() => props.openCart(false)}
							onMouseEnter={() => props.openCart(true)}
						>
							<NavLink to="https://github.com/reactstrap/reactstrap">
								<FontAwesomeIcon icon={faShoppingBag} id="shopping-cart-icon" />
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</>
	);
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { authSignOut })(Menu);
