import Container from "../Container/Container";
import Slider from "../Slider/Slider";
import Title from "../Title/Title";
import cards from "../../data/artsCardData"

const Arts = () => {
	return (
		<Container>
			<Title title="Collection"></Title>
			<Slider cards={cards} count="1"></Slider>
		</Container>
	);
};

export default Arts;
