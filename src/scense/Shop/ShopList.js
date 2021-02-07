import React, { useState, useEffect } from "react";
import { Col, Container, FormGroup, Row, CustomInput, Input, FormText } from "reactstrap";
import { connect } from "react-redux";
import ShopListItem from "../../components/shop/ShopListItem";
import { filterShops } from "../../services/shops";
import { useLocation } from "react-router-dom";

const ShopList = ({ shops, location }) => {
	const keyword = location.search.split("=");
	const { search } = useLocation();
	const [filteredShops, setFilteredShops] = useState(shops);
	const [filters, setFilters] = useState({
		search: keyword.length > 1 ? keyword[1] : "",
		freeDelivery: false,
		new: false,
	});

	const handleFeatureChange = (e) => {
		setFilters({ ...filters, [e.target.name]: e.target.checked });
	};

	const handleSearchChange = (e) => {
		setFilters({ ...filters, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		filterShops(shops, filters).then((res) => {
			setFilteredShops(res);
		});
	}, [filters]);

	useEffect(() => {
		setFilters({ ...filters, search: keyword[1] });
	}, [search]);

	return (
		<div className="shop-list">
			<Container fluid className="mt-5">
				<Row>
					<Col xs={12} lg={3}>
						<h2 className="font-weight-bold mb-4">Filters</h2>
						<form>
							<FormGroup>
								<Input
									type="search"
									name="search"
									placeholder="search"
									value={filters.search}
									onChange={handleSearchChange}
								/>
								<FormText color="muted">Minimum 3 character.</FormText>
							</FormGroup>
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
								<h2 className="font-weight-bold mb-4">{filteredShops.length} restaurant near you</h2>
							</Col>
							{filteredShops.length > 0 ? (
								filteredShops.map((shop) => (
									<Col lg={12}>
										<ShopListItem key={shop.id} shop={shop} />
									</Col>
								))
							) : (
								<Col xs={12}>
									<h4>Sorry, but no result.</h4>
								</Col>
							)}
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
