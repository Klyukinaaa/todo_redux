import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemsList from '../ItemsList';
import InputForm from '../InputForm';
import ItemsService from '../../services/ItemsService';
import NotificationService from '../../screens/service';
import {
  addData, checked, create, deleted, update,
} from '../../redux/actions';

function Container() {
  const token = useSelector((state) => state.auth.token);
  const colors = useSelector((state) => state.colors.colors);
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();
  const itemsService = new ItemsService(token);

  const [currentItem, setCurrentItem] = useState({
    task: '',
    completed: false,
    color: '',
  });

  useEffect(() => {
    async function requestItems() {
      try {
        const data = await itemsService.getItems();
        dispatch(addData(data.data));
      } catch (e) {
        const message = 'Not Found';
        NotificationService.error(message);
      }
    }
    requestItems();
  }, []);

  function getItemsColor() {
    const activeCheckbox = colors.find((item) => item.selected);
    const randomColors = colors[Math.floor(Math.random() * 6)].color;
    return activeCheckbox ? activeCheckbox.color : randomColors;
  }

  async function createItem() {
    try {
      const item = {
        ...currentItem,
        color: getItemsColor(),
      };
      const data = await itemsService.createItem(item);
      dispatch(create(data.data));
    } catch (e) {
      const message = 'Not Found';
      NotificationService.error(message);
    }
  }

  async function handleCheck(id) {
    try {
      dispatch(checked(id));
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
      dispatch(update(id, text));
      const item = items.find((el) => el.id === id);
      await itemsService.patchItem(id, item);
    } catch (e) {
      const message = 'Not Found';
      NotificationService.error(message);
    }
  }

  async function deleteItem(id) {
    try {
      await itemsService.deleteItem(id);
      dispatch(deleted(id));
    } catch (e) {
      const message = 'Not Found ';
      NotificationService.error(message);
    }
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
