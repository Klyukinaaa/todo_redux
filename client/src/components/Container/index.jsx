import React, { useState, useEffect } from 'react';
import ItemsList from '../ItemsList';
import InputForm from '../InputForm';
import ItemsService from '../../services/ItemsService';
import NotificationService from '../../screens/service';
import useItems from '../../redux/hook/useItems';
import useColors from '../../redux/hook/useColors';
import useToken from '../../redux/hook/useToken';

function Container() {
  const { authToken } = useToken();
  const { colors } = useColors();
  const {
    updateItem, checkItem, createTask, deleteTask, items, loadItems,
  } = useItems();
  const itemsService = new ItemsService(authToken);

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

  async function handleCheck(id) {
    try {
      checkItem(id);
      const item = items.find((el) => el.id === id);
      await itemsService.patchItem(id, item);
    } catch (e) {
      const message = 'Not Found';
      NotificationService.error(message);
    }
  }

  async function handleText(id, event) {
    try {
      const text = event.target.value;
      updateItem(id, text);
      const item = items.find((el) => el.id === id);
      await itemsService.patchItem(id, item);
    } catch (e) {
      const message = 'Not Found';
      NotificationService.error(message);
    }
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
