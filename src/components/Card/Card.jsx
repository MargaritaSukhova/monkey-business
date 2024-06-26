import React from "react";
import PropTypes from "prop-types";
import {
	CardStyled,
	CardText,
	CardTitle,
	CardStyledLink,
	LinkStyled,
	Icon,
	ImageContainer,
	ImageStyled,
	PictureStyled,
} from "./Card.styled";

import Arrow from "../../assets/icons/arrow.svg";

const Card = ({ card }) => {
	switch (card.type) {
		case "text":
			return (
				<>
					<CardStyled>
						<CardText>{card.text}</CardText>
						<CardTitle>{card.title}</CardTitle>
					</CardStyled>
				</>
			);
		case "link":
			return (
				<CardStyledLink>
					<LinkStyled
						href="https://www.linkedin.com/in/margaryta-sukhova/"
						target="blank"
						rel="noopener noreferrer"
						aria-label="Link to Margaryta's LinkedIn"
					>
						<Icon src={Arrow} alt="Arrow icon" />
						<CardTitle>
							{Array.isArray(card.title)
								? card.title.map((part, index) => (
										<React.Fragment key={index}>
											{part}
											{index < card.title.length - 1 && <br />}
										</React.Fragment>
								  ))
								: card.title}
						</CardTitle>
					</LinkStyled>
				</CardStyledLink>
			);
		case "img":
			return (
				<ImageContainer>
					<PictureStyled>
						<source
							srcSet={`${card.sml} 1x, ${card.sml2} 2x`}
							media="(max-width: 480px)"
							type="image/jpeg"
						/>
						<source
							srcSet={`${card.lrg} 1x, ${card.lrg2} 2x`}
							media="(min-width: 481px)"
							type="image/jpeg"
						/>
						<ImageStyled src={card.sml} alt={card.alt} />
					</PictureStyled>
				</ImageContainer>
			);
	}
};

Card.propTypes = {
	card: PropTypes.shape({
		type: PropTypes.string,
		text: PropTypes.string,
		title: PropTypes.string,
		sml: PropTypes.string,
		sml2: PropTypes.string,
		lrg: PropTypes.string,
		lrg2: PropTypes.string,
		alt: PropTypes.string,
	}),
};

export default Card;
