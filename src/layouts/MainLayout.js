import React, { Fragment } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Snackbar from "../components/snackbar/Snackbar";

const MainLayout = ({ children }) => {
	return (
		<Fragment>
			<Header />
			<Snackbar />
			{children}
			<Footer />
		</Fragment>
	);
};

export default MainLayout;
