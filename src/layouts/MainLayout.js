import React, { Fragment, useEffect } from "react";
import Chat from "../components/Chat/Chat";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { connect } from "react-redux";
import { getUser } from "../redux/auth/actions";
import { useCookies } from "react-cookie";
import { deleteFlashMessage } from "../redux/flash/actions";
import { fetchShops } from "../redux/shops/actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
const MainLayout = ({ getUser, auth, children, deleteFlashMessage, flash, shops, fetchShops }) => {
	const [cookies] = useCookies(["token"]);
	const token = cookies.token;

	useEffect(() => {
		async function checkUser() {
			if (token !== undefined && auth.isLoggedIn === false) {
				await getUser(token);
			}
		}
		checkUser();

		if (shops.length === 0) {
			fetchShops();
		}

		if (flash.length > 0) {
			flash.forEach(function (message, key) {
				if (message.type === "success") {
					toast.success(message.message, {
						position: toast.POSITION.TOP_RIGHT,
						onOpen: () => {
							deleteFlashMessage(flash, key);
						},
					});
				} else if (message.type == "warning") {
					toast.warn(message.message, {
						position: toast.POSITION.TOP_RIGHT,
						onOpen: () => {
							deleteFlashMessage(flash, key);
						},
					});
				} else if (message.type === "error") {
					toast.error(message.message, {
						position: toast.POSITION.TOP_RIGHT,
						onOpen: () => {
							deleteFlashMessage(flash, key);
						},
					});
				}
			});
		}
	}, [flash, shops]);

	return (
		<Fragment>
			<Header />
			<Chat />
			{children}
			<Footer />
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	flash: state.flash.messages,
	shops: state.shop.shops,
});

export default connect(mapStateToProps, { getUser, deleteFlashMessage, fetchShops })(MainLayout);
