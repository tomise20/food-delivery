import React, { useState } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import Button from "../shared/Button";
import { connect } from "react-redux";
import { Modal, ModalBody } from "reactstrap";
import { addFlashMessage } from "../../redux/flash/actions";

const Coupon = ({ addFlashMessage }) => {
	const [data, setData] = useState({
		email: "",
		postcode: "",
	});

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const onSubscribe = (e) => {
		e.preventDefault();

		if (data.email !== "" && data.postcode !== "") {
			addFlashMessage("You successfully subscribed!");
			setData({
				email: "",
				postcode: "",
			});
			setModal(true);
		}
	};

	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<>
			<div className="coupon mb-3 mb-xk-0">
				<div className="d-flex flex-column flex-lg-row flex-xl-column">
					<div className="image py-3 text-center">
						<div className="title text-uppercase font-weight-bold text-white">get $10 off</div>
						<div className="subtitle text-white font-weight-bold mb-3">your order</div>
						<p className="text-sm text-white">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat mi magna, vel finibus
							lectus pellentesque at. Nunc condimentum faucibus blandit. Sed nec faucibus elit.
						</p>
					</div>
					<div className="p-3">
						<form onSubmit={(e) => onSubscribe(e)}>
							<FormGroup>
								<Label>E-mail</Label>
								<Input
									type="email"
									value={data.email}
									name="email"
									onChange={(e) => handleChange(e)}
									required
								/>
							</FormGroup>
							<FormGroup>
								<Label>Postcode</Label>
								<Input
									type="number"
									value={data.postcode}
									name="postcode"
									onChange={(e) => handleChange(e)}
									required
								/>
							</FormGroup>
							<FormGroup>
								<Button type="submit" small block classes="coupon-btn text-white btn">
									Save $10 on your first order
								</Button>
							</FormGroup>
						</form>
						<small className="text-center d-block">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tellus erat, placerat sit
							amet vestibulum a, imperdiet ut quam. Nunc quis elit ullamcorper, blandit ligula ac, laoreet
							nulla. Ut vitae vulputate felis.
						</small>
					</div>
				</div>
			</div>
			<Modal isOpen={modal} toggle={toggle}>
				<ModalBody className="p-0 coupon-modal">
					<img
						src="https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_960_720.jpg"
						className="img-fluid"
						alt="coupon"
					/>
					<div className="text-content">CODE: FIRSTORDER</div>
				</ModalBody>
			</Modal>
		</>
	);
};

export default connect(null, { addFlashMessage })(Coupon);
