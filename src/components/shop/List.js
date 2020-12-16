import React, { useState, useCallback } from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { addToCart, incrementItemQuantity } from "../../redux/cart/actions";
import { modifyItem } from "../../redux/products/actions";
import { showSnackbar } from "../../redux/snackbar/actions";
import ShopModal from "./ShopModal";

const List = (props) => {
	const [modal, setModal] = useState(false);
	const [selectedItem, setSelectedItem] = useState({});

	const onToggleModal = useCallback(
		(data) => {
			setModal(!modal);

			data.quantity = 1;
			setSelectedItem(data);
		},
		[modal]
	);

	const closeModal = () => {
		setModal(false);
	};

	const modifyItemQuantity = (quantity) => {
		setSelectedItem({
			...selectedItem,
			quantity: quantity,
		});
	};

	const handleAddToCart = () => {
		if (selectedItem.isCart) {
			props.incrementItemQuantity(selectedItem, props.items);
			props.showSnackbar("You successfully added to cart!");
			setModal(!modal);
		} else {
			props.addToCart(selectedItem, props.items);
			props.modifyItem(selectedItem.id, props.products);
			props.showSnackbar("You successfully added to cart!");
			setModal(!modal);
		}
	};

	return (
		<>
			<div>
				{props.products.map((item) => (
					<Item key={item.id} data={item} toggle={onToggleModal} />
				))}
			</div>
			{modal && (
				<ShopModal
					toggle={modal}
					onCloseModal={closeModal}
					addCart={handleAddToCart}
					onItemQuantity={modifyItemQuantity}
					item={selectedItem}
				/>
			)}
		</>
	);
};

const mapStateToProps = (state) => ({
	products: state.product.products,
	items: state.cart.items,
});

export default connect(mapStateToProps, { addToCart, incrementItemQuantity, modifyItem, showSnackbar })(List);
