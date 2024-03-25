import styled from "@emotion/styled";

export const CardStyled = styled.div`
	display: flex;
	width: 216px;
	height: 242px;
	padding: 24px 12px;
	flex-direction: column;
	justify-content: space-between;

	border-radius: 12px;
	background-color: #1e1e1e;

	@media (min-width: 768px) {
		width: 284px;
		height: 242px;
		padding: 24px;
	}

	@media (min-width: 1280px) {
		width: 504px;
		height: 480px;
	}
`;

export const CardText = styled.p`
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: 14px;
	text-transform: uppercase;

	@media (min-width: 768px) {
		width: 128px;
		margin-left: auto;
	}
	@media (min-width: 1280px) {
		width: 228px;
		font-size: 24px;
		line-height: 29px;
	}
`;

export const CardTitle = styled.h3`
	font-family: "Right Grotesk";
	font-size: 32px;
	font-style: normal;
	font-weight: 900;
	line-height: 32px;
	text-transform: uppercase;

	@media (min-width: 1280px) {
		font-size: 64px;
		line-height: 64px;
	}
`;

export const CardStyledLink = styled.div`
	width: 216px;
	height: 242px;

	border-radius: 12px;
	background-color: #dc3b5a;

	@media (min-width: 768px) {
		width: 284px;
		height: 242px;
		padding: 24px;
	}

	@media (min-width: 1280px) {
		width: 504px;
		height: 480px;
	}
`;

export const Icon = styled.img`
	width: 24px;
	height: 24px;
	margin-left: auto;

	@media (min-width: 768px) {
		width: 36px;
		height: 36px;
	}

	@media (min-width: 1280px) {
		width: 64px;
		height: 64px;
	}
`;

export const LinkStyled = styled.a`
	width: 100%;
	height: 100%;
	padding: 24px 12px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media (min-width: 768px) {
		padding: 0;
	}
`;

export const ImageContainer = styled.div`
	width: 216px;
	height: 256px;
	border-radius: 12px;
	overflow: hidden;

	@media (min-width: 768px) {
		width: 284px;
		height: 336px;
	}

	@media (min-width: 1280px) {
		width: 240px;
		height: 280px;
	}
`;

export const PictureStyled = styled.picture`
	border-radius: 12px;
	object-fit: cover;
`;

export const ImageStyled = styled.img`
	border-radius: 12px;
	object-fit: cover;
	width: 216px;
	height: 256px;

	@media (min-width: 768px) {
		width: 284px;
		height: 336px;
	}

	@media (min-width: 1280px) {
		width: 240px;
		height: 280px;
	}
`;
