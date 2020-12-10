import React from "react";
import { Col, Container, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faTruck, faComments, faMobileAlt } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="mt-5 footer mb-5 mb-md-0">
			<div className="footer-info mb-4">
				<Container fluid>
					<Row className="justify-content-around">
						<Col xs={6} lg={2} className="text-center">
							<FontAwesomeIcon icon={faCreditCard} size="2x" />
							<p className="font-weight-light mt-3">100% Paymnent scured</p>
						</Col>
						<Col xs={6} lg={2} className="text-center">
							<FontAwesomeIcon icon={faTruck} size="2x" />
							<p className="font-weight-light mt-3">Fast delivery</p>
						</Col>
						<Col xs={6} lg={2} className="text-center">
							<FontAwesomeIcon icon={faComments} size="2x" />
							<p className="font-weight-light mt-3">24/7 Support</p>
						</Col>
						<Col xs={6} lg={2} className="text-center">
							<FontAwesomeIcon icon={faMobileAlt} size="2x" />
							<p className="font-weight-light mt-3">Mobile app ready</p>
						</Col>
					</Row>
				</Container>
			</div>
			<div className="footer-copy py-4">
				<Container fluid>
					<Row>
						<Col lg={4} xs={12} className="text-center text-lg-left">
							<div>Food Delivery</div>
						</Col>
						<Col lg={4} xs={12} className="text-center">
							<div>
								Made with{" "}
								<Link to="https://github.com/tomise20" target="_blank" className="red-color">
									Vira Tamás
								</Link>
							</div>
						</Col>
						<Col lg={4} xs={12} className="text-center text-lg-right">
							<div>&copy; Food Delivery - 2020 | All Right Reserved</div>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default Footer;
