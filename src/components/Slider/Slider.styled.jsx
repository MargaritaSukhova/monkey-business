import styled from "@emotion/styled";
import { Swiper } from "swiper/react";

export const SwiperStyled = styled(Swiper)`
	display: flex;
	width: 216px;
	flex-direction: column;
	align-items: center;

	@media (min-width: 768px) {
		width: 592px;
	}

	@media (min-width: 1280px) {
		width: 1032px;
	}
`;
