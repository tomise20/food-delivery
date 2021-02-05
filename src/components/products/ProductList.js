import React from "react";
import { Row, Col } from "reactstrap";
import Product from "./Product";

const ProductList = ({ products }) => {
	return (
		<div>
			<Row style={{ alignItems: "stretch" }}>
				{products.map((product) => (
					<Col key={product.id} lg={4} md={6} className="mb-3">
						<Product product={product} />
					</Col>
				))}
			</Row>
		</div>
	);
};

export default ProductList;
