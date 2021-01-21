import React, { useState } from "react";
import {
	Container,
	Row,
	Col,
	Card,
	CardBody,
	CardTitle,
	CardText,
	Modal,
	ModalHeader,
	ModalBody,
	FormGroup,
	Input,
	Label,
	CustomInput,
} from "reactstrap";
import { connect } from "react-redux";
import { authSignOut, addAddress, setActiveAddress, deleteAddress } from "../../redux/auth/actions";

import "./styles.scss";
import Button from "../../components/shared/Button";
import OrderItem from "./OrderItem";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

const Profile = ({ auth, authSignOut, addAddress, setActiveAddress, deleteAddress }) => {
	const handleSignOut = () => {
		authSignOut();
	};

	const [address, setAddress] = useState({
		address_name: "",
		name: "",
		street: "",
		postcode: "",
		city: "",
		country: "",
		user_id: "",
		phone: "",
		is_active: false,
	});
	const [cookies] = useCookies(["token"]);
	const token = cookies.token;

	const handleChange = (e) => {
		setAddress({ ...address, [e.target.name]: e.target.value });
	};

	const handleChkBoxChange = (e) => {
		setAddress({
			...address,
			is_active: e.target.checked,
		});
	};

	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);

	if (!auth.isLoggedIn) {
		return <Redirect to="/" />;
	}

	const onSubmit = (e) => {
		e.preventDefault();
		setAddress({ ...address, user_id: auth.user.id });

		axios
			.post(`${process.env.REACT_APP_SERVER_URL}/user/store-address`, address, {
				headers: {
					Authorization: `Bearer ${auth.user.accessToken}`,
				},
			})
			.then((res) => {
				addAddress(res.data);
				setModal(false);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	const onSetActive = (addressId) => {
		setActiveAddress(auth.user.id, addressId, token);
	};

	const onEditAddress = async (editAdrIndex) => {
		const editAddress = await auth.user.addresses.find((addr, index) => index === editAdrIndex);
		setAddress(editAddress);
		setModal(true);
	};

	const onDeleteAddress = (addressId) => {
		deleteAddress(auth.user.addresses, addressId, token);
	};

	return (
		<div className="profile">
			<div className="account-image mb-5">
				<div className="text-content">My Account</div>
			</div>
			<Container>
				<Row>
					<Col lg={12}>
						<h1 className="font-weight-bold mb-3">Order history</h1>
						<div className="d-flex flex-column w-100">
							<div className="d-flex header">
								<div className="order-item">#</div>
								<div className="order-item">Date</div>
								<div className="order-item">Status</div>
								<div className="order-item">Total</div>
								<div className="order-item">Actions</div>
							</div>
							<OrderItem />
							<OrderItem />
							<OrderItem />
						</div>

						<div className="profile-info">
							<h1 className="font-weight-bold mb-4">My Dashboard</h1>
							<h4 className="mb-3">
								Hello, {auth.user.name} (not {auth.user.name}?{" "}
								<span className="text-danger sign-out" onClick={handleSignOut}>
									Sign out
								</span>
								)
							</h4>
							<p className="mb-5">
								From your account dashboard you can view your recent orders, manage your shipping and
								billing addresses and{" "}
								<span className="text-danger edit-details">edit your password and account details</span>
								.
							</p>
							<h2 className="font-weight-bold mb-4">My addresses</h2>
							<div className="addresses">
								<Row>
									{auth.user.addresses.map((address, index) => (
										<Col lg={6} key={index}>
											<Card className="mb-4">
												<CardBody>
													<CardTitle className="font-weight-bold">
														{address.address_name}
													</CardTitle>
													<CardText>
														<div>{address.name}</div>
														<div>{address.street}</div>
														<div>
															{address.postcode} {address.city}
														</div>
														<div>{address.country}</div>
														<div>{address.phone}</div>
														<div className="mt-3 d-flex align-items-center">
															<Button
																type="button"
																classes="btn btn-warning btn-sm px-4 mr-2"
																onclick={() => onEditAddress(index)}
															>
																Edit
															</Button>
															<Button
																type="button"
																classes="btn btn-danger btn-sm px-4"
																onclick={() => onDeleteAddress(address.id)}
															>
																Delete
															</Button>
															{address.is_active ? (
																<p className="text-success d-inline-block mb-0 ml-3">
																	Active
																</p>
															) : (
																<p
																	className="text-warning d-inline-block mb-0 ml-3 inactive"
																	onClick={() => onSetActive(address.id)}
																>
																	Inactive
																</p>
															)}
														</div>
													</CardText>
												</CardBody>
											</Card>
										</Col>
									))}
									<Col lg={12} className="mt-4">
										<Button type="button" classes="btn btn-info" onclick={() => toggle()}>
											Add new address
										</Button>
									</Col>
								</Row>
							</div>
						</div>
					</Col>
				</Row>
			</Container>

			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>Add new address</ModalHeader>
				<ModalBody>
					<form onSubmit={onSubmit}>
						<FormGroup>
							<Label>Address name</Label>
							<Input
								type="text"
								onChange={handleChange}
								placeholder="Home address"
								name="address_name"
								value={address.address_name}
								required
							/>
						</FormGroup>
						<Row form>
							<Col md={6}>
								<FormGroup>
									<Label>Full name</Label>
									<Input
										type="text"
										onChange={handleChange}
										name="name"
										placeholder="Jhon doe"
										value={address.name}
										required
									/>
								</FormGroup>
							</Col>
							<Col md={6}>
								<FormGroup>
									<Label>Street</Label>
									<Input
										type="text"
										onChange={handleChange}
										placeholder="Blue street"
										name="street"
										value={address.street}
										required
									/>
								</FormGroup>
							</Col>
						</Row>
						<Row form>
							<Col md={6}>
								<FormGroup>
									<Label>City</Label>
									<Input
										type="text"
										onChange={handleChange}
										name="city"
										placeholder="New York"
										value={address.city}
										required
									/>
								</FormGroup>
							</Col>
							<Col md={6}>
								<FormGroup>
									<Label>Postcode</Label>
									<Input
										type="text"
										onChange={handleChange}
										placeholder="123456"
										name="postcode"
										value={address.postcode}
										required
									/>
								</FormGroup>
							</Col>
						</Row>
						<Row form style={{ alignItems: "center" }}>
							<Col md={6}>
								<FormGroup>
									<Label>City</Label>
									<Input
										type="text"
										onChange={handleChange}
										name="country"
										placeholder="USA"
										value={address.country}
										required
									/>
								</FormGroup>
							</Col>
							<Col md={6}>
								<FormGroup check>
									<CustomInput
										type="checkbox"
										id="exampleCustomCheckbox"
										onChange={handleChkBoxChange}
										value={address.is_active}
										checked={address.is_active}
										label="Active address"
									/>
								</FormGroup>
							</Col>
						</Row>
						<Row form style={{ alignItems: "center" }}>
							<Col md={6}>
								<FormGroup>
									<Label>Phone</Label>
									<Input
										type="text"
										onChange={handleChange}
										name="phone"
										placeholder="+36 30 123 45 67"
										value={address.phone}
										required
									/>
								</FormGroup>
							</Col>
						</Row>
						<FormGroup>
							<Button type="submit" classes="btn btn-success">
								Save address
							</Button>
						</FormGroup>
					</form>
				</ModalBody>
			</Modal>
		</div>
	);
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { authSignOut, addAddress, setActiveAddress, deleteAddress })(Profile);
