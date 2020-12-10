import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./scense/home/Home";
import Header from "./components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

export default function App() {
	return (
		<Fragment>
			<Router>
				<Header />
				<Switch>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</Fragment>
	);
}
