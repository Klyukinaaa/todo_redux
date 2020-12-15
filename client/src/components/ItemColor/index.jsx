import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { activate } from '../../redux/actions';
import './styles.css';

function ItemColor(props) {
  const dispatch = useDispatch();
  const {
    item, selected, color,
  } = props;
  return (
    <span role="presentation" className={`btn ${selected ? 'active' : ' '}`} onClick={() => dispatch(activate(color))}>
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
