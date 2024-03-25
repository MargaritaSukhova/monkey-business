import styled from "@emotion/styled";

export const BanerContainer = styled.div`
	background-color: #dc3b5a;
	overflow: hidden;
	height: 52px;
	padding: 7px 0px 9px;
	@media (min-width: 1280px) {
		height: 86px;
		padding: 6px 0px 16px;
	}
`;

export const BanerStyled = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;
	white-space: nowrap;

	gap: 24px;

	animation: marquee 13s linear infinite;

	@keyframes marquee {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-100%);
		}

		@media (min-width: 1280px) {
			gap: 36px;
		}
	}
`;

export const BanerItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 24px;
	gap: 24px;
	font-family: "Right Grotesk";
	font-size: 36px;
	font-style: normal;
	font-weight: 900;
	line-height: 36px;
	text-transform: uppercase;
	@media (min-width: 1280px) {
		font-size: 64px;
		line-height: 64px;
		padding-left: 36px;
		gap: 36px;
	}
`;

export const Icon = styled.img`
	width: 36px;
	height: 36px;
`;
