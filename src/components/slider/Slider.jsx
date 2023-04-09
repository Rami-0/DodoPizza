import React from "react";
import ReactSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from "./Slider.module.css";
import Card from "./card/Card";
import img1 from "../../assets/slidersPhotos/1.jpg";
import img2 from "../../assets/slidersPhotos/2.jpg";
import img3 from "../../assets/slidersPhotos/3.jpg";
import img4 from "../../assets/slidersPhotos/4.jpg";
import img5 from "../../assets/slidersPhotos/5.jpg";
import img6 from "../../assets/slidersPhotos/6.jpg";
import img7 from "../../assets/slidersPhotos/7.jpg";
import img8 from "../../assets/slidersPhotos/8.jpg";
import img9 from "../../assets/slidersPhotos/9.jpg";
import img10 from "../../assets/slidersPhotos/10.jpg";
import img11 from "../../assets/slidersPhotos/11.jpg";
import img12 from "../../assets/slidersPhotos/12.jpg";

function NextArrow(props) {
	const { className, onClick } = props;
	return (
		<button className={className} onClick={onClick}>
			<div className={css.icon + " " + css.iconReverse}  />
		</button>
	);
}

function PrevArrow(props) {
	const { className, onClick } = props;
	return (
		<button className={className} onClick={onClick}>
			<div className={css.icon}/>
		</button>
	);
}

const Slider = () => {
	const settings = {
		infinite: false,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 6,
		initialSlide: 0,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,

		responsive: [
			{
				breakpoint: 996,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 526,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className={css.wrapper + " container"} id={css.div}>
			<ReactSlider className={css.slider} {...settings}>
				<Card img={img1} />
				<Card img={img2} />
				<Card img={img3} />
				<Card img={img4} />
				<Card img={img5} />
				<Card img={img6} />
				<Card img={img7} />
				<Card img={img8} />
				<Card img={img9} />
				<Card img={img10} />
				<Card img={img11} />
				<Card img={img12} />
			</ReactSlider>
		</div>
	);
};

export default Slider;
