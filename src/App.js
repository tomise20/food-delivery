import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./scense/home/Home";
import "./App.scss";
import MainLayout from "./layouts/MainLayout";
import Shop from "./scense/Shop/Shop";
import CartPage from "./scense/cart/CartPage";
import Login from "./scense/auth/Login";
import AuthLayout from "./layouts/AuthLayout";
import { Provider } from "react-redux";
import store from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";
import PageNotFound from "./scense/404/PageNotFound";

export default function App() {
	return (
		<Provider store={store}>
			<Router basename={process.env.REACT_APP_PUBLIC_URL}>
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
					<Route path="*" component={PageNotFound} />
				</Switch>
			</Router>
		</Provider>
	);
}
