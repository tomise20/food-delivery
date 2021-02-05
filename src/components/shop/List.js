import React, { useState, useCallback } from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/actions";
import { addFlashMessage } from "../../redux/flash/actions";
import ShopModal from "./ShopModal";

const List = ({ items, addToCart, products, addFlashMessage }) => {
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

	const closeModal = () => setModal(false);

	const modifyItemQuantity = (quantity) => {
		setSelectedItem({
			...selectedItem,
			quantity: quantity,
		});
	};

	const handleAddToCart = () => {
		try {
			// throw new Error("asd");
			addToCart(selectedItem, items);
			addFlashMessage("Successfully added to cart!");
			setModal(false);
		} catch (error) {
			addFlashMessage(error.message, "warning");
		}
	};

	return (
		<>
			<div>
				{products.length > 0 &&
					products.map((item) => <Item key={item.id} item={item} toggle={onToggleModal} />)}
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
	items: state.cart.items,
});

export default connect(mapStateToProps, { addToCart, addFlashMessage })(List);
