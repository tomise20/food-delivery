import React from "react";
import { Link } from "react-router-dom";
import { FormGroup, Input, Label, Row, Col } from "reactstrap";
import Button from "../../components/shared/Button";

import "./styles.scss";

const Login = () => {
	return (
		<div id="login">
			<div className="d-flex align-items-center">
				<div className="left-side w-50"></div>
				<div className="right-side w-50 position-relative">
					<div className="login-card p-4">
						<div className="title font-weight-bold mb-4">Sign in with your Quickmunch account</div>
						<form>
							<FormGroup>
								<Label>E-mail</Label>
								<Input type="email" name="email" />
							</FormGroup>
							<FormGroup>
								<Label>Password</Label>
								<Input type="password" name="password" />
							</FormGroup>
							<Row form>
								<Col md={6}>
									<FormGroup check>
										<Input type="checkbox" name="remember" id="remember" />
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
								<Button block classes="btn red-btn text-white">
									Sign In
								</Button>
							</FormGroup>
							<FormGroup className="text-center">
								<span className="my-4">or</span>
							</FormGroup>
							<FormGroup className="text-center">
								<Link to="#" className="red-color">
									Create your account
								</Link>
							</FormGroup>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
