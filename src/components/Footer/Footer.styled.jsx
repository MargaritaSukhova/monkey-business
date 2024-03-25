import styled from "@emotion/styled";

export const FooterStyled = styled.footer`
	margin-top: 60px;
	margin-bottom: 24px;
`;

export const FooterText = styled.p`
	text-align: center;
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: 14px;
	text-transform: uppercase;

	@media screen and (min-width: 768px) {
		font-size: 14px;
		line-height: 14px;
	}

	@media screen and (min-width: 1280px) {
		font-size: 16px;
		line-height: 19px;
	}
`;
