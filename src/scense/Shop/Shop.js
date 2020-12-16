import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import List from "../../components/shop/List";
import Cart from "../../components/cart/Cart";
import Coupon from "../../components/shop/Coupon";

import "./styles.scss";

const Shop = () => {
	return (
		<div className="store">
			<div className="store-image"></div>
			<Container>
				<Row>
					<Col xs={12}>
						<div className="font-weight-bold dark-color mb-2 title small">Just Burger&Burger</div>
						<div className="h6">6700 Szeged Példa utca 22.</div>
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
			<hr className="mb-0" />
			<Container fluid className="pt-5 pb-4 main">
				<Row>
					<Col lg={12} xl={3}>
						<Coupon />
					</Col>
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
					<Col lg={6} xl={3}>
						<Cart />
					</Col>
				</Row>
			</Container>
			<Container className="py-5 store-info">
				<Row>
					<Col lg={6}>
						<div className="store-name font-weight-bold dark-color mb-3">Just Burger&Burger</div>
						<p className="tags red-color font-weight-light text-sm mb-1">
							Hungarian, Hamburgers, Coffee & Tea
						</p>
						<p className="dark-color font-weight-light">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ullamcorper libero. Ut
							ac interdum nunc, eget tempor mauris. Nulla auctor ultrices ultricies.
						</p>
						<div className="contact d-flex flex-column mt-4">
							<div className="d-flex align-items-center mb-3">
								<div className="icon-wrapper">
									<FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
								</div>
								<div className="text-sm dark-color">6700 Szeged Példa utca 22.</div>
							</div>
							<div className="d-flex align-items-center mb-3">
								<div className="icon-wrapper">
									<FontAwesomeIcon icon={faPhone} className="mr-2" />
								</div>
								<div className="text-sm dark-color">
									<a href="tel:+36303352266">+36 (30) 335-22-66</a>
								</div>
							</div>
							<div className="d-flex align-items-center mb-3">
								<div className="icon-wrapper">
									<FontAwesomeIcon icon={faEnvelope} className="mr-2" />
								</div>
								<div className="text-sm dark-color">
									<a href="mailto:vira.tamas97@gmail.com">vira.tamas97@gmail.com</a>
								</div>
							</div>
						</div>
					</Col>
					<Col lg={6}>
						<div className="open">
							<div className="title text-black-50 font-weight-bold p-2 mb-3">Hours</div>
							<div className="day dark-color d-flex justify-content-between mb-3">
								<div>Monday</div>
								<div>Delivery: 7:00 - 22:00</div>
							</div>
							<div className="day dark-color d-flex justify-content-between mb-3">
								<div>Tuesday</div>
								<div>Delivery: 7:00 - 22:00</div>
							</div>
							<div className="day dark-color d-flex justify-content-between mb-3">
								<div>Wednesday</div>
								<div>Delivery: 7:00 - 22:00</div>
							</div>
							<div className="day dark-color d-flex justify-content-between mb-3">
								<div>Thursday</div>
								<div>Delivery: 7:00 - 22:00</div>
							</div>
							<div className="day dark-color d-flex justify-content-between mb-3">
								<div>Friday</div>
								<div>Delivery: 7:00 - 22:00</div>
							</div>
							<div className="day dark-color d-flex justify-content-between mb-3">
								<div>Saturday</div>
								<div>closed</div>
							</div>
							<div className="day dark-color d-flex justify-content-between mb-3">
								<div>Sunday</div>
								<div>closed</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Shop;
