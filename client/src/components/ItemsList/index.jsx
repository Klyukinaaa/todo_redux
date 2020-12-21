import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from '../TodoItem';
import useItems from '../../redux/hook/useItems';
import NotificationService from '../../screens/service';
import Loader from '../ Loading';

import './styles.css';

function ItemsList(props) {
  const { items, error, loading } = useItems();
  const { handleCheck, deleteItem, handleText } = props;

  if (error) {
    NotificationService.error(error.message);
  }

  if (loading) {
    return (
      <Loader />
    );
  }

  const listItems = items.map((item) => (
    <TodoItem
      handleText={handleText}
      key={item.id}
      color={item.color}
      check={item.completed}
      onclick={handleCheck}
      id={item.id}
      text={item.task}
      deleteItem={deleteItem}
    />
  ));

  return (
    <div>
      <ul className="todo item">
        <div>
          {listItems}
        </div>
      </ul>
    </div>
  );
}

ItemsList.propTypes = {
  handleCheck: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  handleText: PropTypes.func.isRequired,
};

export default ItemsList;
