import PropTypes from "prop-types";
import { SectionStyled } from "./Section.styled";

const Section = ({ id, children }) => {
	return <SectionStyled id={id}>{children}</SectionStyled>;
};

Section.propTypes = {
	children: PropTypes.node,
};

export default Section;
