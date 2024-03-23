import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MindMapCard from "../MindMapCard/MindMapCard";


const Slider = ({ cards }) => {
	return (
		<Swiper
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
			{/* <SwiperSlide>Slide 1</SwiperSlide>
			<SwiperSlide>Slide 2</SwiperSlide>
			<SwiperSlide>Slide 3</SwiperSlide>
			<SwiperSlide>Slide 4</SwiperSlide> */}
		</Swiper>
	);
};

Slider.propTypes = {
	cards: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Slider;
