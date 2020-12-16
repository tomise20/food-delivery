import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupAddon, Input } from "reactstrap";

const ShopModal = ({ item, onItemQuantity, onCloseModal, addCart }) => {
	const handleQuantity = (operation = null, e = null) => {
		if (operation === "add") {
			onItemQuantity(item.quantity + 1);
		} else if (operation === "subtraction") {
			if (item.quantity > 1) {
				onItemQuantity(item.quantity - 1);
			}
		} else {
			onItemQuantity(e.target.value);
		}
	};

	return (
		<Modal isOpen={true} className="modal-lg item-modal" toggle={() => onCloseModal()}>
			<ModalHeader toggle={() => onCloseModal()} className="p-0">
				<img src="https://cdn.pixabay.com/photo/2016/05/25/10/43/hamburger-1414422_960_720.jpg" alt="food" />
			</ModalHeader>
			<ModalBody>
				<div className="name dark-color font-weight-bold mb-1">{item.name}</div>
				<h5 className="dark-color mb-3">${item.price}</h5>
				<p className="text-black-50">{item.cal} Cal</p>
				<div className="d-flex align-items-center">
					<span className="font-weight-bold dark-color mr-3">Quantity</span>
					<InputGroup className="mb-0">
						<InputGroupAddon
							addonType="prepend"
							onClick={() => handleQuantity("subtraction")}
							className="border-right-0"
						>
							-
						</InputGroupAddon>
						<Input
							className="border-left-0 border-right-0 text-center"
							min={0}
							max={100}
							type="text"
							step="1"
							value={item.quantity}
							onChange={(e) => handleQuantity(null, e)}
						/>
						<InputGroupAddon addonType="append" onClick={() => handleQuantity("add")}>
							+
						</InputGroupAddon>
					</InputGroup>
				</div>
			</ModalBody>
			<ModalFooter className="justify-content-start">
				<Button className="add-to-cart" size="sm" onClick={() => addCart()}>
					Add to cart : ${parseFloat(item.price * item.quantity).toFixed(2)}
				</Button>
			</ModalFooter>
		</Modal>
	);
};

export default ShopModal;
