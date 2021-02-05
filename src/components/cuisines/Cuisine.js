import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { connect } from "react-redux";

const Cuisine = ({ shops }) => {
	return (
		<Swiper
			breakpoints={{
				320: {
					slidesPerView: 2,
				},
				400: {
					slidesPerView: 3,
				},
				640: {
					slidesPerView: 3,
				},
				// when window width is >= 768px
				768: {
					slidesPerView: 4,
				},
				1200: {
					slidesPerView: 7,
				},
			}}
			spaceBetween={30}
			onSlideChange={() => console.log("slide change")}
			onSwiper={(swiper) => console.log(swiper)}
		>
			{shops.map((shop) => (
				<SwiperSlide key={shop.id}>
					<Link to={`/shop/${shop.id}`}>
						<div className="cuisine-item text-center">
							<img src={shop.shop_image} className="mb-2" alt={shop.name} />
							<p>{shop.name}</p>
						</div>
					</Link>
				</SwiperSlide>
			))}
			{/* <SwiperSlide>
				<Link to="/shop">
					<div className="cuisine-item text-center">
						<img
							src="https://cdn.pixabay.com/photo/2014/01/14/22/14/tacos-245241_960_720.jpg"
							className="mb-2"
							alt="Mexican"
						/>
						<p>Mexican</p>
					</div>
				</Link>
			</SwiperSlide>
			<SwiperSlide>
				<Link to="/shop">
					<div className="cuisine-item text-center">
						<img
							src="https://cdn.pixabay.com/photo/2016/03/26/23/19/hamburger-1281855_960_720.jpg"
							className="mb-2"
							alt="American"
						/>
						<p>American</p>
					</div>
				</Link>
			</SwiperSlide>
			<SwiperSlide>
				<Link to="/shop">
					<div className="cuisine-item text-center">
						<img
							src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg"
							className="mb-2"
							alt="Italian"
						/>
						<p>Italian</p>
					</div>
				</Link>
			</SwiperSlide>
			<SwiperSlide>
				<Link to="/shop">
					<div className="cuisine-item text-center">
						<img
							src="https://cdn.pixabay.com/photo/2014/11/05/16/00/thai-food-518035_960_720.jpg"
							className="mb-2"
							alt="Thai"
						/>
						<p>Thai</p>
					</div>
				</Link>
			</SwiperSlide>
			<SwiperSlide>
				<Link to="/shop">
					<div className="cuisine-item text-center">
						<img
							src="https://cdn.pixabay.com/photo/2014/01/14/22/14/tacos-245241_960_720.jpg"
							className="mb-2"
							alt="Mexican"
						/>
						<p>Mexican</p>
					</div>
				</Link>
			</SwiperSlide>
			<SwiperSlide>
				<Link to="/shop">
					<div className="cuisine-item text-center">
						<img
							src="https://cdn.pixabay.com/photo/2016/03/26/23/19/hamburger-1281855_960_720.jpg"
							className="mb-2"
							alt="American"
						/>
						<p>American</p>
					</div>
				</Link>
			</SwiperSlide> */}
		</Swiper>
	);
};

const mapStateToProps = (state) => ({
	shops: state.shop.shops,
});

export default connect(mapStateToProps)(Cuisine);
