import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./scense/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Shop from "./scense/Shop/Shop";
import Snackbar from "./components/snackbar/Snackbar";

export default function App() {
	return (
		<Fragment>
			<Router>
				<Header />
				<Snackbar />
				<Switch>
					<Route path="/shop">
						<Shop />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</Fragment>
	);
}
