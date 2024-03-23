import PropTypes from "prop-types";
import {
	CardStyled,
	CardText,
	CardTitle,
	CardStyledLink,
} from "./MindMapCard.styled";

// import { ReactComponent as Arrow }  from "../../assets/icons/arrow.svg";
 import Arrow from "../../assets/icons/arrow.svg"

const MindMapCard = ({ card }) => {
	return (
		<div>
			{card.type === "text" ? (
				<CardStyled>
					<CardText>{card.text}</CardText>
					<CardTitle>{card.title}</CardTitle>
				</CardStyled>
			) : (
				<CardStyledLink>
					<img src={Arrow} alt="Arrow" style={{ width: 24, height: 24, marginLeft: "auto" }} />
					<a
						href="https://www.linkedin.com/in/margaryta-sukhova/"
						target="blank"
						rel="noopener noreferrer"
						aria-label="Link to Margarita's LinkedIn"
					>
						<CardTitle>{card.title}</CardTitle>
					</a>
				</CardStyledLink>
			)}
		</div>
	);
};

MindMapCard.propTypes = {
	card: PropTypes.shape({
		type: PropTypes.string,
		text: PropTypes.string,
		title: PropTypes.string,
	}),
};

export default MindMapCard;
