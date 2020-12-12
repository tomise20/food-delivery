import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Input,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
} from "reactstrap";
import Item from "../../components/cart/Item";

const Menu = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<>
			<Navbar color="light" className="sticky-nav bg-white" light expand="md">
				<Link to="/">Food Delivery</Link>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto align-items-center" navbar>
						<NavItem className="mr-3">
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
								/>
							</InputGroup>
						</NavItem>
						<NavItem className="mr-3">
							<NavLink className="red-color font-weight-bold" to="/components/">
								Order now
							</NavLink>
						</NavItem>
						<NavItem className="mr-3">
							<NavLink className="red-color font-weight-bold" to="/login">
								Sign In
							</NavLink>
						</NavItem>
						<NavItem className="shopping-cart">
							<NavLink to="https://github.com/reactstrap/reactstrap">
								<FontAwesomeIcon icon={faShoppingBag} id="shopping-cart-icon" />
							</NavLink>
							<div className="float-cart">
								<div className="py-3 font-weight-bold dark-color px-4">Your order</div>
								<hr className="mt-0" />
								{props.items.length > 0 &&
									props.items.map((item) => <Item small key={item.id} product={item} />)}
							</div>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</>
	);
};

const mapStateToProps = (state) => ({
	items: state.cart.items,
});

export default connect(mapStateToProps)(Menu);
