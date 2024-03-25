import { useState } from "react";
import Container from "../Container/Container";
import Section from "../Section/Section";
import cardFaq from "../../data/faqCardsData";
import {
	FaqContainer,
	WrapItem,
	Item,
	ImageWrap,
	Image,
	Content,
	Title,
	Text,
} from "./Faq.styled";

const Faq = () => {
	const [activeItem, setActiveItem] = useState(1);

	return (
		<Section id="faq" title="FAQ">
			<Container>
				<FaqContainer>
					{cardFaq.map((card) => (
						<Item
							key={card.id}
							onClick={() => setActiveItem(card.id)}
							$active={activeItem === card.id}
						>
							<WrapItem>
								<ImageWrap>
									<Image
										srcSet={`${card.img} 1x, ${card.img2x} 2x`}
										src={card.img}
										alt={`"Card faq ${card.id}"`}
									/>
								</ImageWrap>
								<Content>
									<Title>{card.title}</Title>
									<Text>{card.text}</Text>
								</Content>
							</WrapItem>
						</Item>
					))}
				</FaqContainer>
			</Container>
		</Section>
	);
};

export default Faq;
