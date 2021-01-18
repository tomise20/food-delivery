import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Input, Button } from "reactstrap";
import "swiper/swiper.scss";
import "./styles.scss";
import Cuisine from "../../components/cuisines/Cuisine";
import { connect } from "react-redux";
import { fetchShops } from "../../redux/shops/actions";

import introImage from "../../images/intro-image.jpg";
import ProductList from "../../components/products/ProductList";

const Home = ({ auth, fetchShops }) => {
	useEffect(() => {
		fetchShops();
	}, []);

	return (
		<div id="home">
			<div className="intro">
				<div className="intro-wrapper position-relative">
					<img src={introImage} id="intro-image" />
					<div className="transform-center">
						<Container>
							<Row>
								<Col lg={6} className="position-relative">
									<div className="intro-content py-4">
										<h2 className="font-weight-bold dark-color mb-3">
											Find Szeged city restaurants near you and order online for free.
										</h2>
										<p className="mb-0">find a location near you</p>
										<Row form className="align-items-center">
											<Col md={8} xs={12}>
												<Input
													placeholder="Békéscsaba Bartók Béla utca 21"
													className="mt-3 mt-md-0"
												/>
											</Col>
											<Col md={4} xs={12}>
												<Button className="btn red-btn px-4 py-2 mt-3 mt-md-0">
													Find food
												</Button>
											</Col>
										</Row>
									</div>
								</Col>
							</Row>
						</Container>
					</div>
				</div>
			</div>
			<Container>
				<Row className="my-5">
					<Col xs={12}>
						<h2 className="mb-4">Browse by shop</h2>
						<Cuisine />
					</Col>
				</Row>
			</Container>
			<hr />
			<Container>
				{auth.isLoggedIn && (
					<>
						<Row className="mt-5">
							<Col xs={12}>
								<h2 className="mb-4">Your previous orders</h2>
							</Col>
						</Row>
						<Row>
							<Col lg={3} xs={12} md={6}>
								<div className="order mb-3 mb-lg-0">
									<Link to="#">
										<img
											src="https://cdn.pixabay.com/photo/2018/04/13/17/14/vegetable-skewer-3317060_960_720.jpg"
											className="img-fluid"
										/>
										<div className="p-2">
											<p className="mb-0 font-weight-bold">Vegan Food</p>
											<small>Just Vegan, Szeged</small>
											<Link className="outline-btn btn-block btn mt-3 font-weight-bold">
												Track order
											</Link>
										</div>
									</Link>
								</div>
							</Col>
							<Col lg={3} xs={12} md={6}>
								<div className="order mb-3 mb-lg-0">
									<Link to="#">
										<img
											src="https://cdn.pixabay.com/photo/2019/01/29/18/05/burger-3962997_960_720.jpg"
											className="img-fluid"
											alt="Cheeseburger"
										/>
										<div className="p-2">
											<p className="mb-0 font-weight-bold">Cheeseburger</p>
											<small>Love meet, Szeged</small>
											<Link className="outline-btn btn-block btn mt-3 font-weight-bold">
												Track order
											</Link>
										</div>
									</Link>
								</div>
							</Col>
							<Col lg={3} xs={12} md={6}>
								<div className="order mb-3 mb-lg-0">
									<Link to="#">
										<img
											src="https://cdn.pixabay.com/photo/2015/04/10/00/41/food-715542_960_720.jpg"
											className="img-fluid"
											alt="Hot pasta"
										/>
										<div className="p-2">
											<p className="mb-0 font-weight-bold">Hot pasta</p>
											<small>Chinese king, Szeged</small>
											<Link className="outline-btn btn-block btn mt-3 font-weight-bold">
												Track order
											</Link>
										</div>
									</Link>
								</div>
							</Col>
							<Col lg={3} xs={12} md={6}>
								<div className="order mb-3 mb-lg-0">
									<Link to="#">
										<img
											src="https://cdn.pixabay.com/photo/2018/10/25/19/15/goulash-3773134_960_720.jpg"
											className="img-fluid"
											alt="Goulash soup"
										/>
										<div className="p-2">
											<p className="mb-0 font-weight-bold">Goulash soup</p>
											<small>Nice restaurent, Szeged</small>
											<Link className="outline-btn btn-block btn mt-3 font-weight-bold">
												Track order
											</Link>
										</div>
									</Link>
								</div>
							</Col>
						</Row>
					</>
				)}
			</Container>
			<Container className="my-5">
				<Row>
					<Col xs={12}>
						<div className="banner-wrapper position-relaitve">
							<img
								src="https://cdn.pixabay.com/photo/2016/03/05/20/07/abstract-1238657_960_720.jpg"
								alt="free delivery"
							/>
							<h5 className="text-white text font-weight-bold">Unlimited Free Delivery - Try 30 Days</h5>
						</div>
					</Col>
				</Row>
			</Container>
			<Container>
				<Row>
					<Col xs={12}>
						<h2 className="mb-4">Explore our collections</h2>
					</Col>
				</Row>
				<Row className="mb-4">
					<Col xs={12} md={6}>
						<div className="top-rated position-relative">
							<img
								src="https://cdn.pixabay.com/photo/2020/03/21/11/17/burger-4953465_960_720.jpg"
								className="img-fluid"
								alt="top rated product"
							/>
							<div className="font-weight-bold my-badge bottom">Top Rated</div>
						</div>
					</Col>
					<Col xs={12} md={6}>
						<div className="top-rated position-relative">
							<img
								src="https://cdn.pixabay.com/photo/2019/04/22/08/37/burger-4145977_960_720.jpg"
								className="img-fluid"
								alt="top rated product"
							/>
							<div className="font-weight-bold my-badge bottom">Top Rated</div>
						</div>
					</Col>
				</Row>
				<Row>
					<Col lg={3} className="d-none d-lg-flex position-relative">
						<div className="right-product-wrapper">
							<img
								src="https://cdn.pixabay.com/photo/2015/11/19/10/38/food-1050813_960_720.jpg"
								className="popular-right-image"
								alt="popular-product"
							/>
						</div>
					</Col>
					<Col lg={9} xs={12}>
						<ProductList />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { fetchShops })(Home);
