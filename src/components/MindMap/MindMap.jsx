import useMediaRules from "../../hooks/useMediaRules";
import Container from "../Container/Container";
import Section from "../Section/Section";
import Slider from "../Slider/Slider";
import Title from "../Title/Title";
import cards from "../../data/mindMapCardsData";
import Card from "../Card/Card";
import { MindMapGrid } from "./MindMap.styled";

const MindMap = () => {
	const { isMobile, isTablet, isDesktop } = useMediaRules();
	return (
		<Container>
			<Section id="mindMap">
				<Title title="Mind Map"></Title>
				{isMobile && (
					<>
						<Slider cards={cards} count="1"></Slider>
					</>
				)}
				{(isTablet || isDesktop) && (
					<>
						<MindMapGrid>
							{cards.map((card) => (
								<li key={card.id}>
									<Card card={card} />
								</li>
							))}
						</MindMapGrid>
					</>
				)}
			</Section>
		</Container>
	);
};

export default MindMap;
