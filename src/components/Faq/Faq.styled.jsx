import styled from "styled-components";

export const FaqContainer = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export const WrapItem = styled.div`
	@media (min-width: 768px) {
		display: flex;
		align-items: center;
		gap: 20px;
    
	}
`;

export const Item = styled.li`
	display: flex;
	flex-direction: row;
	gap: 8px;
	position: relative;
	padding: 8px 8px 10px;
	cursor: pointer;
	counter-increment: list-counter;

	@media  (min-width: 768px) {
		width: 592px;
		margin: auto;
		padding: 24px;
		gap: 22px;
    justify-content: flex-end;
	}

	@media  (min-width: 1280px) {
		width: 1034px;
		margin: auto;
		padding: 18px 16px 24px 297px;
		gap: 22px;
	}

	&:before {
		content: "[ " counter(list-counter) " ]";
		padding-top: 8px;
		white-space: nowrap;
		font-family: "Biro Script Plus";
		font-size: 12px;
		font-weight: 400;
		line-height: 1;
		transition: "all 0.3s ease",
		color: #dc3b5a;

		@media  (min-width: 1280px) {
			padding-top: 14px;
			font-size: 24px;
			line-height: 1.67;
		}
	}

	&:hover::before {
		color: #fff;
	}

	${(props) =>
		props.$active &&
		`
    padding: 8px 8px 10px;
    border-radius: 12px;
    color: #dc3b5a;
    background-color: #1e1e1e;

    &:before {
    color: #fff;
  }
  > ${WrapItem} > ${Content} > ${Title} {
    color: #dc3b5a;
  }
  > ${WrapItem} > ${Content} > ${Text} {
    display: block;
    color: #fff;
  }
   > ${WrapItem}> ${ImageWrap} {
    @media  (min-width: 768px) {
      display: block;
  }

 `}
`;

export const ImageWrap = styled.div`
	display: none;

	@media (min-width: 768px) {
		position: absolute;
		z-index: 10;
		left: 20px;
		width: auto;
		height: 183px;
		border-radius: 16px;
		overflow: hidden;
		transform: rotate(-16deg);
	}

	@media (min-width: 1280px) {
		width: auto;
		height: 282px;
		border-radius: 24px;
		transform: rotate(-8deg);
	}
`;

export const Image = styled.img`
	object-fit: cover;
	height: 100%;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;

	@media (min-width: 768px) {
		width: 339px;
		gap: 12px;
	}

	@media (min-width: 1280px) {
		width: 635px;
		gap: 36px;
	}
`;


export const Title = styled.h3`
	font-family: "Right Grotesk";
	font-size: 20px;
	font-weight: 900;
	line-height: 1;
	text-transform: uppercase;
	color: "#fff";

	&:hover {
		color: #dc3b5a;
	}

	@media (min-width: 768px) {
		font-size: 32px;
	}

	@media (min-width: 1280px) {
		font-size: 64px;
	}
`;

export const Text = styled.p`
	display: none;
	font-family: Messina Sans Mono Regular;
	font-size: 12px;
	font-weight: 400;
	line-height: 14px;
	text-transform: uppercase;
	color: "#fff";

	@media (min-width: 1280px) {
		font-size: 16px;
		line-height: 19px;
	}
`;
