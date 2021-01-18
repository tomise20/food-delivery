import React, { useState } from "react";
import { Container, Row, Col, Tooltip, Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCheck } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { authSignOut } from "../../redux/auth/actions";

import "./styles.scss";
import Button from "../../components/shared/Button";
import OrderItem from "./OrderItem";
import { Redirect } from "react-router-dom";

const Profile = ({ auth, authSignOut }) => {
	const handleSignOut = () => {
		authSignOut();
	};

	if (!auth.isLoggedIn) {
		return <Redirect to="/" />;
	}

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
									<Col lg={6}>
										<Card>
											<CardBody>
												<CardTitle className="font-weight-bold">Home address</CardTitle>
												<CardText>
													<div>Jhone Doe</div>
													<div>Blue Street</div>
													<div>12345 New York</div>
													<div>USA</div>
													<Button type="button" classes="btn btn-warning px-5 mt-3">
														Edit
													</Button>
												</CardText>
											</CardBody>
										</Card>
									</Col>
									<Col lg={6}>
										<Card>
											<CardBody>
												<CardTitle className="font-weight-bold">Office address</CardTitle>
												<CardText>
													<div>Jhone Doe</div>
													<div>Green Street</div>
													<div>12545 New York</div>
													<div>USA</div>
													<Button type="button" classes="btn btn-warning px-5 mt-3">
														Edit
													</Button>
													<Button type="button" classes="btn btn-success px-4 mt-3 ml-2">
														<FontAwesomeIcon icon={faCheck} /> Active
													</Button>
												</CardText>
											</CardBody>
										</Card>
									</Col>
								</Row>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { authSignOut })(Profile);
