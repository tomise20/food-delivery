import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
	return (
		<div className="text-center my-5">
			<h1 className="text-center red-color font-weight-bold">404</h1>
			<h1 className="dark-color font-weight-bold">Page Not Found</h1>
			<Link to="/" className="red-color">
				Go To Home page
			</Link>
		</div>
	);
};

export default PageNotFound;
