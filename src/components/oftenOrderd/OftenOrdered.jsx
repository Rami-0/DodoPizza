import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel,FreeMode } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import css from "./OftenOrdered.module.css";
import "./OftenOrdered.css";  

const OftenOrderedSwiper = () => {

	return (
		<div className={`${css.wrapper} OftenOrderedSwiper`}>
			<div className="container">
				<h2>Часто заказывают</h2>
			</div>

			<Swiper
        
        modules={[Mousewheel ,FreeMode]}
				freeMode={true}
				grabCursor={true}
				className={css.Swiper}
				slidesPerView={5.5}
				spaceBetween={30}
        mousewheel={true}


        >
        

				<SwiperSlide>
				</SwiperSlide>

				<SwiperSlide>
					<img src="https://picsum.photos/200" alt="" />
					<div>
						<p>Пепперони</p>
						<p>от 490 сом</p>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<img src="https://picsum.photos/200" alt="" />
					<div>
						<p>2 пиццы</p>
						<p>1095 сом</p>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<img src="https://picsum.photos/200" alt="" />
					<div>
						<p>Пепперони</p>
						<p>от 490 сом</p>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<img src="https://picsum.photos/200" alt="" />
					<div>
						<p>2 пиццы</p>
						<p>1095 сом</p>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<img src="https://picsum.photos/200" alt="" />
					<div>
						<p>Пепперони</p>
						<p>от 490 сом</p>
					</div>
				</SwiperSlide>
			</Swiper>

			<div className={css.halal}>
				<img
					src="https://dodopizza-a.akamaihd.net/site-static/dist/f30f1ab8cd7a7a54476d.svg"
					alt=""
				/>

				<div>
					<p>Без свинины</p>
					<p>Мы готовим из цыпленка и говядины</p>
				</div>
			</div>
		</div>
	);
};

export default OftenOrderedSwiper;
