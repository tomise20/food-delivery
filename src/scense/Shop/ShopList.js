import React, { useState, useEffect } from "react";
import { Col, Container, FormGroup, Row, CustomInput } from "reactstrap";
import { connect } from "react-redux";
import ShopListItem from "../../components/shop/ShopListItem";
import { filterShops } from "../../services/shops";

const ShopList = ({ shops, location }) => {
	const search = location.search.split("=");
	const [filters, setFilters] = useState({
		search: search.length > 1 ? search[1] : "",
		freeDelivery: false,
		new: false,
	});

	const [filteredShops, setFilteredShops] = useState(shops);

	const handleFeatureChange = (e) => {
		setFilters({ ...filters, [e.target.name]: e.target.checked });
	};

	useEffect(() => {
		filterShops(shops, filters).then((res) => {
			setFilteredShops(res);
		});
	}, [filters]);

	return (
		<div className="shop-list">
			<Container fluid className="mt-5">
				<Row>
					<Col xs={12} lg={3}>
						<h2 className="font-weight-bold mb-4">Filters</h2>
						<form>
							<FormGroup>
								<div>
									<CustomInput
										type="switch"
										id="freeDelivery"
										name="freeDelivery"
										label="Free delivery"
										onChange={handleFeatureChange}
										className="mb-2"
									/>
									<CustomInput
										type="switch"
										id="new"
										name="new"
										label="New"
										onChange={handleFeatureChange}
										className="mb-2"
									/>
								</div>
							</FormGroup>
						</form>
					</Col>
					<Col xs={12} lg={9}>
						<Row>
							<Col xs={12}>
								<h2 className="font-weight-bold mb-4">{shops.length} restaurant near you</h2>
							</Col>
							{filteredShops.map((shop) => (
								<Col lg={12}>
									<ShopListItem key={shop.id} shop={shop} />
								</Col>
							))}
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

const mapStateToProps = (state) => ({
	shops: state.shop.shops,
});

export default connect(mapStateToProps)(ShopList);
