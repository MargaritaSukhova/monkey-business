import styled from "@emotion/styled";

export const ButtonContainer = styled.div`
	display: flex;
	align-items: space-between;
	gap: 48px;
	margin-top: 24px;

	@media (min-width: 1280px) {
		margin-top: 45px;
	}
`;

export const ButtonStyled = styled.button`
	color: inherit;
	background-color: transparent;
	border: 0;
	font-family: "Biro Script Plus";
	font-size: 24px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px;
`;
