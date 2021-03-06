import React from 'react';
import useColors from '../../redux/hook/useColors';
import ItemColor from '../ItemColor';
import NotificationService from '../../screens/service';

import './styles.css';

function ColorBtns() {
  const { colors, error } = useColors();

  if (error) {
    NotificationService.error(error.message);
  }

  const itemsColor = colors.map((item) => (
    <ItemColor
      selected={item.selected}
      key={item.color}
      color={item.color}
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

export default ColorBtns;
