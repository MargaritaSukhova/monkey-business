
import PropTypes from 'prop-types';

const MindMapCard = ({text, title}) => {
  return (
    <div>
      <p>{text}</p>
      <h3>{title}</h3>
    </div>
  );
};

MindMapCard.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
};

export default MindMapCard;