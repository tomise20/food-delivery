import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { FormGroup, Input, Label, Row, Col } from "reactstrap";
import Button from "../../components/shared/Button";
import { connect } from "react-redux";
import { authLogin } from "../../redux/auth/actions";

import "./styles.scss";

const Login = ({ authLogin, auth }) => {
	const [credentials, setCredentials] = useState({
		username: "",
		password: "",
		remember: 0,
	});

	const handleChange = (e) => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value,
		});
	};

	const onSignin = (e) => {
		e.preventDefault();
		authLogin(credentials.username, credentials.password);
	};

	return (
		<>
			{auth.isLoggedIn && <Redirect to="/" />}
			<div id="login">
				{auth.loading && (
					<div className="loading-layout">
						<h4 className="loading-text text-white">Please wait... the authentication is in progress.</h4>
					</div>
				)}
				<div className="d-flex align-items-center">
					<div className="left-side w-50 d-none d-lg-block"></div>
					<div className="right-side w-50 position-relative">
						<div className="login-card p-4">
							<div className="title font-weight-bold mb-3">Sign in with your account</div>
							{auth.error && <div className="text-center red-color">{auth.error}</div>}
							{auth.successRegister && (
								<div className="text-center text-success mb-3">Successfully regiter, please login.</div>
							)}
							<form onSubmit={(e) => onSignin(e)}>
								<FormGroup>
									<Label>E-mail</Label>
									<Input type="text" name="username" onChange={(e) => handleChange(e)} required />
								</FormGroup>
								<FormGroup>
									<Label>Password</Label>
									<Input type="password" name="password" onChange={(e) => handleChange(e)} required />
								</FormGroup>
								<Row form>
									<Col md={6}>
										<FormGroup check>
											<Input
												type="checkbox"
												onChange={(e) => handleChange(e)}
												name="remember"
												id="remember"
												value="1"
											/>
											<Label for="remember" check>
												Keep me signed in
											</Label>
										</FormGroup>
									</Col>
									<Col md={6} className="text-right">
										<Link to="#" className="red-color">
											Reset Password
										</Link>
									</Col>
								</Row>
								<FormGroup className="mt-3">
									<Button type="submit" block classes="btn red-btn text-white">
										Sign In
									</Button>
								</FormGroup>
								<FormGroup className="text-center">
									<span className="my-4">or</span>
								</FormGroup>
								<FormGroup className="text-center">
									<Link to="/signup" className="red-color">
										Create your account
									</Link>
								</FormGroup>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { authLogin })(Login);
