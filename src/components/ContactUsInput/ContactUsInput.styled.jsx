import styled from "@emotion/styled";

export const InputContainer = styled.div`
	display: flex;
	align-items: flex-start;
	position: relative;
	height: 60px;

	@media screen and (min-width: 1280px) {
		height: 80px;
	}
`;

export const Icon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 8px 0 0 8px;
	padding: 10px;
	width: 48px;
	height: 48px;
	backdrop-filter: blur(6px);
	background-color: #1e1e1e;

	@media screen and (min-width: 1280px) {
		width: 64px;
		height: 64px;
		border-radius: 12px 0 0 12px;
	}
`;

export const Input = styled.input`
	border-radius: 0 8px 8px 0;
	padding: 22px 24px;
	width: 100%;
	height: 48px;
	border: 1px solid ${(props) => (props.$errors ? "#DC3B5A" : "#1e1e1e")};
	background-color: transparent;
	font-family: "Messina Sans Mono Regular";
	font-size: 12px;
	font-weight: 400;
	line-height: 1.17;
	text-transform: uppercase;
	color: ${(props) => (props.$errors ? "#DC3B5A" : "#fff")};

	&::placeholder {
		color: rgba(255, 255, 255, 0.24);
	}

	&:-webkit-autofill {
		-webkit-box-shadow: 0 0 0 1000px "#181818" inset;
		-webkit-text-fill-color: ${(props) => (props.$errors ? "#dc3b5a" : "#fff")};
	}

	&:focus {
		caret-color: "#fff";
		outline: none;
		border: 1px solid ${(props) => (props.$errors ? "#dc3b5a" : "#fff")};
	}

	@media screen and (min-width: 1280px) {
		border-radius: 0 12px 12px 0;
		height: 64px;
		font-size: 16px;
		line-height: 1.19;
	}
`;

export const Error = styled.p`
	position: absolute;
	bottom: 0;
	right: 0;
	font-family: "Messina Sans Mono Regular";
	font-size: 10px;
	font-weight: 400;
	line-height: 1.2;
	text-transform: uppercase;
	text-align: right;
	color: #dc3b5a;

	@media screen and (min-width: 1280px) {
		font-size: 12px;
		line-height: 14px;
	}
`;
