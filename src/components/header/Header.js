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
		<div>
			<Navbar color="light" className="bg-white" light expand="lg">
				<NavbarBrand href="/">Food Delivery</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem className="mr-3">
							<InputGroup className="rounded-0">
								<InputGroupAddon className="rounded-0" addonType="prepend">
									<InputGroupText className="rounded-0 bg-white border-right-0">
										<FontAwesomeIcon icon={faSearch} />
									</InputGroupText>
								</InputGroupAddon>
								<Input placeholder="Pizza, Burger" className="border-left-0" id="header-search-input" />
							</InputGroup>
						</NavItem>
						<NavItem className="mr-3">
							<NavLink className="red-color" href="/components/">
								Order now
							</NavLink>
						</NavItem>
						<NavItem className="mr-3">
							<NavLink className="red-color" href="/login">
								Login
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://github.com/reactstrap/reactstrap">
								<FontAwesomeIcon icon={faShoppingBag} />
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
}
