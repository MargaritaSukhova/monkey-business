import PropTypes from "prop-types";
import { TitleStyled } from "./Title.styled";

const Title = ({ title }) => {
	return <TitleStyled>{title}</TitleStyled>;
};

Title.propTypes = {
	title: PropTypes.string,
};

export default Title;
