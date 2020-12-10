import React from "react";
import Product from "./Product";

const ProductList = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Product />
			<Product />
			<Product />
		</div>
	);
};

export default ProductList;
