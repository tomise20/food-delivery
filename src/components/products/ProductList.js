import React from "react";
import { Row, Col } from "reactstrap";
import Product from "./Product";

const ProductList = () => {
	return (
		<div>
			<Row>
				<Col lg={4}>
					<Product />
				</Col>
				<Col lg={4}>
					<Product />
				</Col>
				<Col lg={4}>
					<Product />
				</Col>
				<Col lg={4}>
					<Product />
				</Col>
				<Col lg={4}>
					<Product />
				</Col>
				<Col lg={4}>
					<Product />
				</Col>
			</Row>
		</div>
	);
};

export default ProductList;
