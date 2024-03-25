import Container from "../Container/Container";
import Section from "../Section/Section";
import Title from "../Title/Title";
import Cross from "../../assets/icons/cross.svg";
import { Wrapper, Icon, Text } from "./ContactUs.styled";
import ContactUsForm from "../ContactUsForm/ContactUsForm";

const ContactUs = () => {
	return (
		<Container id="container">
			<Section id="contactUs">
				<Title title="Are you in?"></Title>
				<Wrapper>
					<Icon src={Cross} alt="Cross icon" />
					<Text>
						Join the YACHT APE community to be one of the first to receive our
						limited edition NFT
					</Text>
					<ContactUsForm></ContactUsForm>
				</Wrapper>
			</Section>
		</Container>
	);
};

export default ContactUs;
