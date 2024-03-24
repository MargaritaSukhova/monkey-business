import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MindMapCard from "../MindMapCard/MindMapCard";
import SliderButtons from "../SliderButtons/SliderButtons";
import { SwiperStyled } from "./Slider.styled";


const Slider = ({ cards }) => {
	return (
		<SwiperStyled
			spaceBetween={24}
			slidesPerView={1}
			// onSlideChange={() => console.log("slide change")}
			// onSwiper={(swiper) => console.log(swiper)}
		>
			{cards.map((card) => (
				<SwiperSlide key={card.id}>
					<MindMapCard card={card} />
				</SwiperSlide>
			))}
			<SliderButtons></SliderButtons>
		</SwiperStyled>
	);
};

Slider.propTypes = {
	cards: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Slider;
