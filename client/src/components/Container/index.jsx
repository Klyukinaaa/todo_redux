import React, { useState, useEffect } from 'react';
import ItemsList from '../ItemsList';
import InputForm from '../InputForm';
import NotificationService from '../../screens/service';
import useItems from '../../redux/hook/useItems';
import useColors from '../../redux/hook/useColors';

function Container() {
  const { colors } = useColors();
  const {
    checkItem, createTask, deleteTask, items, loadItems, updateItem,
  } = useItems();

  const [currentItem, setCurrentItem] = useState({
    task: '',
    completed: false,
    color: '',
  });

  useEffect(() => {
    loadItems();
  }, []);

  function getItemsColor() {
    const activeCheckbox = colors.find((item) => item.selected);
    const randomColors = colors[Math.floor(Math.random() * 6)].color;
    return activeCheckbox ? activeCheckbox.color : randomColors;
  }

  function createItem() {
    const item = {
      ...currentItem,
      color: getItemsColor(),
    };
    createTask(item);
  }

  function handleCheck(id) {
    checkItem(id);
  }

  function handleText(id, event) {
    const text = event.target.value;
    updateItem(id, text);
  }

  function deleteItem(id) {
    deleteTask(id);
  }

  function handleTextInputChange(event) {
    setCurrentItem({
      task: event.target.value,
      completed: false,
      color: currentItem.color,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault(); // отменим стандартное поведение браузера
    if (currentItem.task !== '') {
      try {
        await createItem();
        setCurrentItem({
          task: '',
          completed: false,
          id: '',
          color: '',
        });
      } catch (e) {
        const message = 'Not Found ';
        NotificationService.error(message);
      }
    }
  }

  return (
    <div>
      <div id="container">
        <div className="page">
          <ItemsList
            deleteItem={deleteItem}
            handleCheck={handleCheck}
            items={items}
            handleText={handleText}
          />
          <InputForm
            createItem={createItem}
            handleSubmit={handleSubmit}
            inputValue={currentItem.task}
            onChange={handleTextInputChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Container;
