import React, { useState } from "react";
import { connect } from "react-redux";
import { Label, Input, FormGroup } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import Button from "../../components/shared/Button";
import { authRegister } from "../../redux/auth/actions";

const Register = ({ auth, authRegister }) => {
	const [registerData, setRegisterData] = useState({
		name: "",
		username: "",
		password: "",
	});

	const onRegister = (e) => {
		e.preventDefault();
		authRegister(registerData);
	};

	const handleChange = (e) => setRegisterData({ ...registerData, [e.target.name]: e.target.value });

	if (auth.successRegister) return <Redirect to="/signin" />;

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
						<div className="login-card p-5">
							<div className="title font-weight-bold mb-4">Create your account</div>
							{auth.error && <div className="text-center red-color">{auth.error}</div>}
							<form onSubmit={(e) => onRegister(e)}>
								<FormGroup>
									<Label>Full name</Label>
									<Input type="text" name="name" onChange={handleChange} required />
								</FormGroup>
								<FormGroup>
									<Label>username</Label>
									<Input type="text" name="username" onChange={handleChange} required />
								</FormGroup>
								<FormGroup>
									<Label>E-mail</Label>
									<Input type="email" name="email" onChange={handleChange} required />
								</FormGroup>
								<FormGroup>
									<Label>Password</Label>
									<Input type="password" name="password" onChange={handleChange} required />
								</FormGroup>
								<FormGroup className="mt-3">
									<Button type="submit" block classes="btn red-btn text-white">
										Create your account
									</Button>
								</FormGroup>
								<FormGroup className="text-center">
									<span className="my-4">or</span>
								</FormGroup>
								<FormGroup className="text-center">
									Have an account?
									<Link to="/signin" className="red-color ml-2">
										Sign in
									</Link>
								</FormGroup>
								<small className="d-block text-center">
									By creating your Food Delivery account, you agree to the Terms of Use and Privacy
									Policy.
								</small>
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

export default connect(mapStateToProps, { authRegister })(Register);
