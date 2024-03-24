import PropTypes from "prop-types";
import {  SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "../Card/Card";
import SliderButtons from "../SliderButtons/SliderButtons";
import { SwiperStyled } from "./Slider.styled";


const Slider = ({ cards, count }) => {
	return (
		<SwiperStyled
			spaceBetween={24}
			slidesPerView={count}
			// onSlideChange={() => console.log("slide change")}
			// onSwiper={(swiper) => console.log(swiper)}
		>
			{cards.map((card) => (
				<SwiperSlide key={card.id}>
					<Card card={card} />
				</SwiperSlide>
			))}
			<SliderButtons></SliderButtons>
		</SwiperStyled>
	);
};

Slider.propTypes = {
	cards: PropTypes.arrayOf(PropTypes.shape({})),
	count: PropTypes.number
};

export default Slider;
