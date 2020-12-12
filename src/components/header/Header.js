import React, { useState, useEffect } from "react";
import "./styles.scss";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { connect } from "react-redux";
import { deleteItem } from "../../redux/cart/actions";
import Button from "../shared/Button";
import Item from "../../components/cart/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
	const [windowDimension, setWindowDimension] = useState(null);
	const [isOpenCart, setIsOpenCart] = useState(false);

	useEffect(() => {
		setWindowDimension(window.innerWidth);
	}, []);

	useEffect(() => {
		function handleResize() {
			setWindowDimension(window.innerWidth);
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const isMobile = windowDimension <= 768;

	const onOpenCart = (operation) => {
		setIsOpenCart(operation);
	};

	const handleDeleteItem = (id) => {
		props.deleteItem(id, props.items);
	};

	return (
		<>
			{isMobile ? <MobileMenu openCart={onOpenCart} /> : <Menu openCart={onOpenCart} />}
			<div className={`float-cart ${isOpenCart ? "active" : ""}`}>
				<div className="d-flex justify-content-between align-items-center px-4">
					<div className="py-3 font-weight-bold dark-color">Your order</div>
					{isMobile && <FontAwesomeIcon icon={faTimes} size="1x" onClick={() => setIsOpenCart(false)} />}
				</div>
				<hr className="mt-0" />
				{props.items.length > 0 &&
					props.items.map((item) => (
						<Item small key={item.id} deleteItemAction={handleDeleteItem} product={item} />
					))}
				{props.items.length > 0 ? (
					<>
						<hr className="mb-0" />
						<div className="py-2 px-4">
							<Button block small classes="btn btn-success">
								Proceed to checkout
							</Button>
						</div>
					</>
				) : (
					<div className="red-color font-weight-bold text-center pb-3">Your cart is empty!</div>
				)}
			</div>
		</>
	);
};

const mapStateToProps = (state) => ({
	items: state.cart.items,
});

export default connect(mapStateToProps, { deleteItem })(Header);
