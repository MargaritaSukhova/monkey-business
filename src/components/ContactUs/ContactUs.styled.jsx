import styled from "@emotion/styled";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	align-items: center;

	@media screen and (min-width: 768px) {
		width: 397px;
		gap: 24px;
		margin: 0 auto;
	}

	@media screen and (min-width: 1280px) {
		width: 581px;
	}
`;

export const Icon = styled.img`
	width: 36px;
	height: 36px;
`;

export const Text = styled.p`
	text-align: center;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 19px;
	text-transform: uppercase;

	@media (min-width: 1280px) {
		font-size: 24px;
		line-height: 29px;
	}
`;
