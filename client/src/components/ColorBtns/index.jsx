import React from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import ItemColor from '../ItemColor';

import './styles.css';

function ColorBtns(props) {
  const { colors, handleClickColor } = props;
  const itemsColor = colors.map((item, index) => (
    <ItemColor
      selected={item.selected}
      clickColor={handleClickColor}
      key={uuid()}
      i={index}
      item={item}
    />
  ));

  return (
    <span className="color_container">
      <div className="color_btns">
        {itemsColor}
      </div>
      <div className="text_btn">
        <button type="submit" id="add">Add</button>
      </div>
    </span>
  );
}

ColorBtns.propTypes = {
  colors: PropTypes.instanceOf(Array).isRequired,
  handleClickColor: PropTypes.func.isRequired,
};

export default ColorBtns;
