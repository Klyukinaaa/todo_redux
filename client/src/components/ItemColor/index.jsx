import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import useColors from '../../redux/hook/useColors';

function ItemColor(props) {
  const { activateBtn } = useColors();
  const {
    item, selected, color,
  } = props;
  return (
    <span role="presentation" className={`btn ${selected ? 'active' : ' '}`} onClick={() => activateBtn(color)}>
      <input className="button" type="button" style={{ backgroundColor: item.color }} />
    </span>
  );
}

ItemColor.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object]).isRequired,
  selected: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

export default ItemColor;
