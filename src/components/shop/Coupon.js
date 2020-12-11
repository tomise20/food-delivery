import React from "react";
import { Button, FormGroup, Input, Label } from "reactstrap";

const Coupon = () => {
	return (
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
					<FormGroup>
						<Label>E-mail</Label>
						<Input type="email" name="email" />
					</FormGroup>
					<FormGroup>
						<Label>Postcode</Label>
						<Input type="number" name="postcode" />
					</FormGroup>
					<FormGroup>
						<Button type="button" className="btn-block coupon-btn btn-sm">
							Save $10 on your first order
						</Button>
					</FormGroup>
					<small className="text-center d-block">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tellus erat, placerat sit amet
						vestibulum a, imperdiet ut quam. Nunc quis elit ullamcorper, blandit ligula ac, laoreet nulla.
						Ut vitae vulputate felis.
					</small>
				</div>
			</div>
		</div>
	);
};

export default Coupon;
