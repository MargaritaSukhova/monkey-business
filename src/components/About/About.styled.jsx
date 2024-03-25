import styled from "@emotion/styled";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	margin-bottom: 36px;

	@media (min-width: 768px) {
		margin-bottom: 68px;
		flex-direction: row;
		gap: 48px;
	}
	@media (min-width: 1280px) {
		margin-bottom: 56px;
		gap: 85px;
	}
`;

export const SecondWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 768px) {
		flex-direction: row;
		position: relative;
	}
`;

export const ThirdWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const TitleStyled = styled.h2`
	font-family: "Right Grotesk";
	font-size: 40px;
	font-style: normal;
	font-weight: 900;
	line-height: 40px;
	text-transform: uppercase;

	@media (min-width: 768px) {
		width: 269px;
		font-size: 60px;
		line-height: 60px;
	}
	@media (min-width: 1280px) {
		width: 538px;
		font-size: 120px;
		line-height: 120px;
	}
`;

export const Span = styled.span`
	color: #dc3b5a;
	width: 170px;

	@media (min-width: 435px) {
		& > br {
			display: none;
		}
	}
`;

export const TextStyled = styled.p`
	color: #fff;
	text-align: right;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 19px;
	text-transform: uppercase;
	text-indent: 145px;

	@media (min-width: 768px) {
		width: 275px;
		position: relative;
		top: 11px;
	}
	@media (min-width: 1280px) {
		width: 409px;
		font-size: 24px;
		line-height: 29px;
		top: 24px;
	}
`;

export const SecondTextStyled = styled.p`
	text-align: center;
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: 14px;
	text-transform: uppercase;
	margin-top: 16px;
	margin-bottom: 40px;

	@media (min-width: 768px) {
		width: 269px;
		margin-top: 24px;
		margin-bottom: 36px;
		font-size: 16px;
		line-height: 19px;
	}

	@media (min-width: 1280px) {
		width: 418px;
		margin-top: 36px;
		margin-bottom: 40px;
		font-size: 24px;
		line-height: 29px;
	}
`;

export const ImageStyled = styled.img`
	width: 216px;
	height: 284px;

	@media (min-width: 768px) {
		width: 313px;
		height: 422px;
		position: absolute;
		right: 0;
		bottom: 0;
	}

	@media (min-width: 1280px) {
		width: 492px;
		height: 662px;
	}
`;

export const Icon = styled.img`
	width: 24px;
	height: 24px;
	@media (min-width: 1280px) {
		width: 36px;
		height: 36px;
	}
`;
