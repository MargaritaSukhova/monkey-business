import Container from "../Container/Container";
import { FooterStyled, FooterText } from "./Footer.styled";

const Footer = () => {
	return (
		<Container>
			<FooterStyled>
				<FooterText>© Yacht ape 2024 all rights reserved</FooterText>
			</FooterStyled>
		</Container>
	);
};

export default Footer;
