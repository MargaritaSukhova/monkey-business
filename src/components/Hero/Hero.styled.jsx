import styled from "@emotion/styled";

export const HeroSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 54px 8px 60px 8px;
	padding-top: 36px;
	padding-bottom: 19px;
	border-radius: 12px;
	background: #dc3b5a;

	@media (min-width: 768px) {
		position: relative;
		margin: 54px 16px 80px 16px;
		padding: 35px 0 0 0;
	}
	@media (min-width: 1280px) {
		position: relative;
		margin: 16px 16px 120px 16px;
		// padding: 65px 195px 0 194px;
	}
`;

export const HeroContainer = styled.div`
	@media (min-width: 768px) {
		margin: 0 auto;
	}
`;

export const HeroWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: 768px) {
		justify-content: center;
	}
`;

export const TitleContainer = styled.div`
	@media (min-width: 768px) {
		position: absolute;
		top: 124px;
	}
	@media (min-width: 1280px) {
		left: 195px;
		top: 197px;
	}
`;
export const HeroText = styled.p`
	color: #1e1e1e;
	font-family: "Biro Script Plus";
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 27px;

	@media (min-width: 768px) {
		font-size: 20px;
		line-height: 33px;
	}
`;

export const HeroTitle = styled.h1`
	color: #1e1e1e;
	font-family: "Right Grotesk";
	font-size: 44px;
	font-style: normal;
	font-weight: 900;
	line-height: 44px;
	letter-spacing: 0.44px;
	margin-bottom: 8px;

	@media (min-width: 768px) {
		font-size: 92px;
		line-height: 92px;
		letter-spacing: 0.92px;
		width: 591px;
		display: flex;
		justify-content: space-between;
	}

	@media (min-width: 1280px) {
		text-align: center;
		font-size: 164px;
		line-height: 164px;
		width: 1019px;
	}
`;

export const HeroPicture = styled.picture`
	margin-top: 6px;

	@media (min-width: 768px) {
		margin: 0;
		position: relative;
		left: -20px;
	}
	@media (min-width: 1280px) {
		position: relative;
		left: -28px;
	}
`;

export const HeroButton = styled.button`
	display: flex;
	width: 216px;
	padding: 10px 70px 12px 70px;
	justify-content: center;
	align-items: center;
	border: 0;
	border-radius: 8px;
	background: rgba(30, 30, 30, 0.1);
	backdrop-filter: blur(6px);
	position: relative;
	margin-top: -5px;

	@media (min-width: 768px) {
		position: absolute;
		right: 72px;
		bottom: 35px;
		width: 190px;
		padding: 10px 61px 12px 61px;
		border-radius: 12px;
	}

	@media (min-width: 1280px) {
		right: 192px;
		bottom: 81px;
		width: 337px;
		height: 70px;
		padding: 16px 110px 20px 109px;
	}
`;

export const HeroButtonText = styled.a`
	display: inline-block;
	color: #1e1e1e;
	font-family: "Right Grotesk";
	font-size: 16px;
	font-style: normal;
	font-weight: 900;
	line-height: 19px;

	@media (min-width: 1280px) {
		font-size: 28px;
		line-height: 34px;
	}
`;

export const HeroPargaraph = styled.p`
	color: #1e1e1e;
	text-align: center;
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: 14px;
	text-transform: uppercase;
	margin: 12px 64px 0 64px;

	@media (min-width: 768px) {
		position: absolute;
		right: 72px;
		bottom: 92px;
		width: 190px;
		margin: 0;
		text-align: justify;
		text-indent: 77px;
	}
	@media (min-width: 1280px) {
		right: 192px;
		bottom: 179px;
		width: 337px;
		text-indent: 84px;
		font-size: 16px;
		line-height: 19px;
	}
`;
