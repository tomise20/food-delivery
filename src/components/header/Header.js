import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { faShoppingBag, faSearch } from "@fortawesome/free-solid-svg-icons";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<>
			<Navbar color="light" className="sticky-nav bg-white" light expand="lg">
				<NavbarBrand href="/">Food Delivery</NavbarBrand>
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
						<NavItem>
							<NavLink to="https://github.com/reactstrap/reactstrap">
								<FontAwesomeIcon icon={faShoppingBag} id="shopping-cart-icon" />
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</>
	);
}
