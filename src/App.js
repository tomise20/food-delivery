import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./scense/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import MainLayout from "./layouts/MainLayout";
import Shop from "./scense/Shop/Shop";
import CartPage from "./scense/cart/CartPage";
import Login from "./scense/auth/Login";
import AuthLayout from "./layouts/AuthLayout";

export default function App() {
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route exact path={["/", "/shop", "/cart"]}>
						<MainLayout>
							<Route path="/shop" component={Shop} />
							<Route path="/cart" component={CartPage} />
							<Route exact path="/" component={Home} />
						</MainLayout>
					</Route>

					<Route exact path={["/signin"]}>
						<AuthLayout>
							<Route path="/signin" component={Login} />
						</AuthLayout>
					</Route>
				</Switch>
			</Router>
		</Fragment>
	);
}
