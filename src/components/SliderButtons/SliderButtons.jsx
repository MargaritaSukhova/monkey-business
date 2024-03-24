import { ButtonContainer, ButtonStyled } from "./SliderButtons.styled";
import { useSwiper } from "swiper/react";

const SliderButtons = () => {
	const swiper = useSwiper();

	return (
		<ButtonContainer>
			<ButtonStyled type="button" onClick={() => swiper.slidePrev()}>
				Prev
			</ButtonStyled>
			<ButtonStyled type="button" onClick={() => swiper.slideNext()}>
				Next
			</ButtonStyled>
		</ButtonContainer>
	);
};

export default SliderButtons;
