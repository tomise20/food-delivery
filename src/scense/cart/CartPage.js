import React, { useEffect, useState } from "react";
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
import { addFlashMessage } from "../../redux/flash/actions";
import { Link } from "react-router-dom";
import { submitOrder, checkFields } from "../../services/orders";
import { deleteCart } from "../../redux/cart/actions";
import { addOrder } from "../../redux/auth/actions";
import { useCookies } from "react-cookie";
import "./styles.scss";

const CartPage = (props) => {
	const [activeTab, setActiveTab] = useState("1");
	const [cookies] = useCookies(["token"]);
	const token = cookies.token;
	const [data, setData] = useState({
		payment_option: "credit-card",
		address: {
			address_name: "",
			name: "",
			street: "",
			phone: "",
			city: "",
			postcode: "",
			user_id: "",
		},
		note: "",
		promo_code: "",
		card: {
			number: "",
			expires: "",
			code: "",
			name: "",
		},
	});
	const [activeAddress, setActiveAddress] = useState(null);
	const { auth, cart } = props;

	useEffect(() => {
		if (auth.isLoggedIn) {
			async function loadActiveAddress() {
				if (auth.user.addresses !== undefined && auth.user.addresses.length > 0) {
					let active = await auth.user.addresses.find((address) => address.is_active === 1);
					console.log(active);
					setActiveAddress(active);
					delete active.is_active;

					setData({ ...data, address: active });
				} else {
					setData({
						...data,
						address: { ...data.address, user_id: auth.user.id },
					});
				}
			}
			loadActiveAddress();
		}
	}, [auth.isLoggedIn]);

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

	const onChangeAddress = (e) => {
		setData({ ...data, address: { ...data.address, [e.target.name]: e.target.value } });
	};

	const onHandleSubmit = (e) => {
		e.preventDefault();

		checkFields(data)
			.then(() => {
				submitOrder(cart, data, token).then((response) => {
					props.addFlashMessage("Successful order submission");
					setData({
						payment_option: "credit-card",
						address: {
							name: "",
							street: "",
							phone: "",
							city: "",
							postcode: "",
						},
						note: "",
						promo_code: "",
						card: {
							number: "",
							expires: "",
							code: "",
							name: "",
						},
					});
					props.addOrder(response);
					props.deleteCart();
				});
			})
			.catch((err) => {
				props.addFlashMessage(err.message, "error");
			});
	};

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	const onCheckSlash = (e) => {
		let value = data.card.expires;
		if (data.card.expires.length == 2 && e.key !== "Backspace") {
			value += "/";
			setData((prevState) => ({
				...prevState,
				card: {
					...data.card,
					expires: value,
				},
			}));
		}
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
										{activeAddress != null ? (
											<div className="user-info d-flex flex-column">
												<span className="mb-0 text-black-50 mb-2">{activeAddress.name}</span>
												<span className="font-weight-bold mb-1">
													{activeAddress.address_name}
												</span>
												<span className="text-black-50">
													{activeAddress.postcode} {activeAddress.city}
												</span>
												<span className="text-black-50">{activeAddress.street}</span>
												<span className="text-black-50">{activeAddress.phone}</span>
											</div>
										) : (
											<div>
												<Row form className="mb-3">
													<Col lg={6}>
														<Input
															type="text"
															name="name"
															value={data.address.name}
															placeholder="Full name"
															onChange={onChangeAddress}
														/>
													</Col>
													<Col lg={6}>
														<Input
															type="text"
															name="street"
															value={data.address.street}
															placeholder="Street"
															onChange={onChangeAddress}
														/>
													</Col>
												</Row>
												<Row form className="mb-3">
													<Col lg={6}>
														<Input
															type="text"
															name="postcode"
															value={data.address.postcode}
															placeholder="Postcode"
															onChange={onChangeAddress}
														/>
													</Col>
													<Col lg={6}>
														<Input
															type="text"
															name="city"
															value={data.address.city}
															placeholder="City"
															onChange={onChangeAddress}
														/>
													</Col>
												</Row>
												<Row form className="mb-3 align-items-center">
													<Col lg={6}>
														<Input
															type="text"
															name="phone"
															value={data.address.phone}
															placeholder="Phone number"
															onChange={onChangeAddress}
														/>
													</Col>
													{!auth.isLoggedIn && (
														<Col lg={6} className="text-center">
															<Link to="/signin" className="red-color">
																or Sign In
															</Link>
														</Col>
													)}
												</Row>
											</div>
										)}
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
										name="note"
										value={data.note}
										className="form-control"
										onChange={onHandleChange}
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
															value={data.promo_code}
															placeholder="ABC123"
															name="promo_code"
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
															value={data.card.number}
															name="number"
															id="card_number"
															placeholder="1234 5678 1234 5678"
															onChange={onHandleCardData}
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
															value={data.card.expires}
															name="expires"
															id="expires"
															placeholder="12/22"
															onChange={onHandleCardData}
															onKeyDown={onCheckSlash}
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
															value={data.card.code}
															name="code"
															id="card_code"
															placeholder="123"
															onChange={onHandleCardData}
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
															value={data.card.name}
															name="name"
															id="card_name"
															placeholder="Jhon Doe"
															onChange={onHandleCardData}
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
	auth: state.auth,
});

export default connect(mapStateToProps, { addFlashMessage, deleteCart, addOrder })(CartPage);
