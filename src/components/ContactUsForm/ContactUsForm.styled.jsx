import styled from "@emotion/styled";

export const FormStyled = styled.form`
	display: flex;
	flex-direction: column;
	gap: 4px;

	@media screen and (min-width: 768px) {
		width: 248px;
		margin: 0 auto;
	}

	@media screen and (min-width: 1280px) {
		width: 397px;
		gap: 8px;
	}
`;

export const Button = styled.button`
	color: #fff;
	font-family: "Right Grotesk";
	font-size: 16px;
	font-style: normal;
	font-weight: 900;
	line-height: 19px;
	display: flex;
	justify-content: center;
	border-radius: 8px;
	padding: 10px 91px 12px 92px;
	height: 41px;
	backdrop-filter: blur(12px);
	border: none;
	background-color: #dc3b5a;

	&:hover {
		color: #1e1e1e;
	}

	@media screen and (min-width:1280px) {
		border-radius: 12px;
		padding: 16px 20px;
		height: 70px;
		font-size: 28px;
		line-height: 1.21;
	}
`;
