import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";
import List from "../../components/shop/List";

const Shop = () => {
	return (
		<div className="store">
			<div className="store-image"></div>
			<Container>
				<Row>
					<Col xs={12}>
						<div className="font-weight-bold dark-color mb-2 title">Just Burger&Burger</div>
						<div className="h6">6700 Szeged Szivárvány u. 52</div>
						<div className="d-flex">
							<div className="stars mr-2">
								<FontAwesomeIcon icon={faStar} className="mr-1" />
								<FontAwesomeIcon icon={faStar} className="mr-1" />
								<FontAwesomeIcon icon={faStar} className="mr-1" />
								<FontAwesomeIcon icon={faStar} />
							</div>
							<div className="mr-4">
								<small>35 raiting</small>
							</div>
							<div>85% Food was good</div>
						</div>
					</Col>
				</Row>
			</Container>
			<hr />
			<Container>
				<Row className="py-1 align-items-center">
					<Col xs={12} md={6}>
						<p className="mb-1 font-weight-light text-sm">Delivery (40-50m)</p>
						<p className="text-black-50 mb-0">
							<span className="text-success font-weight-bold text-sm">No minimum</span>, Free Delivery
						</p>
					</Col>
					<Col xs={12} md={6} className="text-left text-md-center">
						<p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Col>
				</Row>
			</Container>
			<hr />
			<Container fluid className="mt-5">
				<Row>
					<Col lg={3}></Col>
					<Col lg={6}>
						<div className="banner position-relative mb-4">
							<img
								src="https://cdn.pixabay.com/photo/2015/04/20/13/25/burger-731298_960_720.jpg"
								className="banner-img"
								alt="fast food"
							/>
							<div className="banner-text">
								<h5 className="font-weight-bold text-white">Get $15 off your first order!</h5>
								<p className="text-sm text-white mb-0">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</p>
							</div>
						</div>
						<h2 className="font-weight-bold mb-3">Most popular</h2>
						<List />
					</Col>
					<Col lg={3}></Col>
				</Row>
			</Container>
		</div>
	);
};

export default Shop;
