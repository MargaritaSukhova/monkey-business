import useMediaRules from "../../hooks/useMediaRules";
import Container from "../Container/Container";
import Section from "../Section/Section";
import Slider from "../Slider/Slider";
import Title from "../Title/Title";
import cards from "../../data/artsCardData";

const Arts = () => {
	const { isMobile, isTablet, isDesktop } = useMediaRules();
	
	let count;
	if (isMobile) {
		count = 1;
	} else if (isTablet) {
		count = 2;
	} else if (isDesktop) {
		count = 4;
	}

	return (
		<Container>
			<Section id="collection">
				<Title title="Collection"></Title>
				<Slider cards={cards} count={count}></Slider>
			</Section>
		</Container>
	);
};

export default Arts;
