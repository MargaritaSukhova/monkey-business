import Container from "../Container/Container";
import Slider from "../Slider/Slider";
import Title from "../Title/Title";
import cards from "../../data/mindMapCardsData";

const MindMap = () => {
	return (
		<Container>
			<Title title="Mind Map"></Title>
			<Slider cards={cards} count="1"></Slider>
		</Container>
	);
};

export default MindMap;
