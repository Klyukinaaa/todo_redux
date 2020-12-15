import React from 'react';
import PropTypes from 'prop-types';
import ColorBtns from '../ColorBtns';

import './styles.css';

function InputForm(props) {
  const {
    handleSubmit,
    inputValue,
    onChange,
  } = props;
  return (
    <form id="text" onSubmit={handleSubmit}>
      <label htmlFor="add" className="new_item">
        <input
          onChange={onChange}
          value={inputValue}
          id="new-task"
          maxLength="100"
          type="text"
          size="35"
          placeholder="Add New Item"
        />
      </label>
      <ColorBtns />
    </form>
  );
}

InputForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputForm;
