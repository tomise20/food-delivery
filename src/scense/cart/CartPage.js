import React, { useState } from "react";
import { Container, Row, Col, Input } from "reactstrap";
import Cart from "../../components/cart/Cart";
import {
	UncontrolledCollapse,
	CardBody,
	Card,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
	FormGroup,
	Label,
} from "reactstrap";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/shared/Button";
import { connect } from "react-redux";
import { showSnackbar } from "../../redux/snackbar/actions";

import "./styles.scss";

const CartPage = (props) => {
	const [activeTab, setActiveTab] = useState("1");
	const [data, setData] = useState({
		payment_option: "credit-card",
		note: "",
		promo_code: "",
		card: {
			number: "",
			expires: "",
			code: "",
			name: "",
		},
	});

	const onHandleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const onHandlePayment = (payment_mode) => {
		setData({
			...data,
			payment_option: payment_mode,
		});
	};

	const onHandleCardData = (e) => {
		setData({
			...data,
			card: {
				...data.card,
				[e.target.name]: e.target.value,
			},
		});
	};

	const onHandleSubmit = (e) => {
		e.preventDefault();
		if (data.payment_option === "credit-card") {
			if (data.card.number === "") {
			}
		} else {
			setData({
				payment_option: "credit-card",
				note: "",
				promo_code: "",
				card: {
					number: "",
					expires: "",
					code: "",
					name: "",
				},
			});
		}
	};

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};
	return (
		<Container fluid className="mt-5" id="cart-page">
			<Row>
				<Col lg={8} xl={9} className="order-2 order-lg-1">
					<form onSubmit={(e) => onHandleSubmit(e)}>
						<div className="cart-wrapper p-4">
							<Row>
								<Col lg={6}>
									<div className="cart-info">
										<div className="title font-weight-bold dark-color mb-3">
											Review and place order
										</div>
										<div className="dark-color font-weight-bold mb-3">
											Review address, payments, and tip to complete your purchase
										</div>
										<h4 className="font-weight-bold mb-2">Your order setting</h4>
										<h6 className="font-weight-bold red-color mb-4">Delivery (50-60 min)</h6>
										<div className="user-info d-flex flex-column">
											<span className="mb-2">Jhone Doe</span>
											<span className="font-weight-bold mb-1">Home address</span>
											<span className="text-black-50">6700 Szeged Példa sugárút 46.</span>
											<span className="text-black-50 mb-2">2. emelet 8</span>
											<span className="text-black-50"> +36 (30) 123 45 67</span>
										</div>
									</div>
								</Col>
								<Col lg={6} className="d-none d-lg-flex">
									<img
										src="https://cdn.pixabay.com/photo/2020/08/05/19/32/beef-5466247_960_720.jpg"
										className="cart-image"
										alt="cart image"
									/>
								</Col>
							</Row>
							<Row className="mb-5 mt-4 mt-lg-0">
								<Col xs={12}>
									<div className="h4">Delivery Instructions</div>
									<textarea
										className="form-control"
										onChange={(e) => onHandleChange(e)}
										rows="6"
									></textarea>
								</Col>
							</Row>
							<Row className="mb-3 payment-info">
								<Col xs={12}>
									<div className="h2 font-weight-bold mb-4">Payment information</div>
									<div className="red-color font-weight-bold text-sm mb-2" id="toggler">
										<FontAwesomeIcon icon={faPlus} className="mr-2 " />
										Add a promo code
									</div>
									<UncontrolledCollapse toggler="#toggler">
										<Card className="border-0">
											<CardBody className="border-0 p-0">
												<div className="d-flex">
													<InputGroup className="promo py-1 px-2 mr-2">
														<InputGroupAddon addonType="prepend">
															<InputGroupText className="icon font-weight-bold text-white d-inline-block">
																promo
															</InputGroupText>
														</InputGroupAddon>
														<Input
															placeholder="ABC123"
															onChange={(e) => onHandleChange(e)}
															className="border-0"
														/>
													</InputGroup>
													<Button classes="apply-btn btn text-white">Apply</Button>
												</div>
											</CardBody>
										</Card>
									</UncontrolledCollapse>
								</Col>
								<Col xs={12} className="mt-3">
									<Nav tabs className="border-0">
										<NavItem>
											<NavLink
												className={`font-weight-bold ${classnames({
													active: activeTab === "1",
												})}`}
												onClick={() => {
													toggle("1");
													onHandlePayment("credit-card");
												}}
											>
												Credit card
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink
												className={`font-weight-bold ${classnames({
													active: activeTab === "2",
												})}`}
												onClick={() => {
													toggle("2");
													onHandlePayment("cash");
												}}
											>
												Cash
											</NavLink>
										</NavItem>
									</Nav>
									<TabContent activeTab={activeTab}>
										<TabPane tabId="1" className="mt-4">
											<Row form>
												<Col md={6} lg={4}>
													<FormGroup>
														<Label
															for="card_number"
															className="font-weight-bold text-black-50 mb-0"
														>
															Card number
														</Label>
														<Input
															type="text"
															required={
																data.payment_option === "credit-card" ? true : false
															}
															name="number"
															id="card_number"
															placeholder="1234 5678 1234 5678"
															onChange={(e) => onHandleCardData(e)}
														/>
													</FormGroup>
												</Col>
												<Col md={6} lg={2}>
													<FormGroup>
														<Label
															for="expires"
															className="font-weight-bold text-black-50 mb-0"
														>
															Expires on
														</Label>
														<Input
															type="text"
															required={
																data.payment_option === "credit-card" ? true : false
															}
															name="expires"
															id="expires"
															placeholder="12/22"
															onChange={(e) => onHandleCardData(e)}
														/>
													</FormGroup>
												</Col>
												<Col md={6} lg={3}>
													<FormGroup>
														<Label
															for="card_code"
															className="font-weight-bold text-black-50 mb-0"
														>
															Security code
														</Label>
														<Input
															type="text"
															required={
																data.payment_option === "credit-card" ? true : false
															}
															name="code"
															id="card_code"
															placeholder="123"
															onChange={(e) => onHandleCardData(e)}
														/>
													</FormGroup>
												</Col>
												<Col md={6} lg={3}>
													<FormGroup>
														<Label
															for="card_name"
															className="font-weight-bold text-black-50 mb-0"
														>
															Name
														</Label>
														<Input
															type="text"
															required={
																data.payment_option === "credit-card" ? true : false
															}
															name="name"
															id="card_name"
															placeholder="Jhon Doe"
															onChange={(e) => onHandleCardData(e)}
														/>
													</FormGroup>
												</Col>
											</Row>
										</TabPane>
										<TabPane tabId="2" className="mt-2">
											<Row>
												<Col xs={12}>
													<p className="dark-color">
														Have the cash ready when you receive your order.
													</p>
												</Col>
											</Row>
										</TabPane>
									</TabContent>
								</Col>
							</Row>
							<Row>
								<Col xs={12}>
									{props.cart.items.length > 0 ? (
										<Button small block classes="btn-success btn mb-3" type="submit">
											Place Your Order
										</Button>
									) : (
										<Button small block disabled classes="btn-success btn mb-3">
											Place Your Order
										</Button>
									)}
									<p className="text-center text-sm">
										By placing your order, you agree to Quickmunch's{" "}
										<span className="red-color">terms of use</span> and{" "}
										<span className="red-color">privacy agreement</span>
									</p>
								</Col>
							</Row>
						</div>
					</form>
				</Col>
				<Col lg={4} xl={3} className="order-1 order-lg-2 mb-3">
					<Cart />
				</Col>
			</Row>
		</Container>
	);
};

const mapStateToProps = (state) => ({
	cart: state.cart,
});

export default connect(mapStateToProps, { showSnackbar })(CartPage);
