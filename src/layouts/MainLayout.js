import React, { Fragment, useEffect } from "react";
import Chat from "../components/Chat/Chat";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Snackbar from "../components/snackbar/Snackbar";
import { connect } from "react-redux";
import { getUser } from "../redux/auth/actions";
import { useCookies } from "react-cookie";

const MainLayout = ({ getUser, auth, children }) => {
	const [cookies, setCookie, removeCookie] = useCookies(["token"]);
	const token = cookies.token;

	useEffect(() => {
		async function checkUser() {
			if (token !== undefined && auth.isLoggedIn === false) {
				await getUser(token);
			}
		}
		checkUser();
	}, []);

	return (
		<Fragment>
			<Header />
			<Snackbar />
			<Chat />
			{children}
			<Footer />
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { getUser })(MainLayout);
