import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ItemsList from '../ItemsList';
import InputForm from '../InputForm';
import ItemsService from '../../services/ItemsService';
import NotificationService from '../../screens/service';

function Container() {
  const token = useSelector((state) => state.auth.token);
  const itemsService = new ItemsService(token);
  const [colors, setColors] = useState([
    {
      backgroundColor: '#ef666c',
      selected: false,
    },
    {
      backgroundColor: '#f171a2',
      selected: false,
    },
    {
      backgroundColor: '#8f6ac8',
      selected: false,
    },
    {
      backgroundColor: '#5eb1f3',
      selected: false,

    },
    {
      backgroundColor: '#68d8e3',
      selected: false,
    },
    {
      backgroundColor: '#fde087',
      selected: false,

    },
  ]);

  const [currentItem, setCurrentItem] = useState({
    task: '',
    completed: false,
    color: '',
  });

  const [items, setItems] = useState([]);

  useEffect(() => {
    async function requestItems() {
      try {
        const tasks = await itemsService.getItems();
        setItems(tasks.data);
      } catch (e) {
        const message = 'Not Found ';
        NotificationService.error(message);
      }
    }
    requestItems();
  }, []);

  function getItemsColor() {
    const activeCheckbox = colors.find((item) => item.selected);
    const randomColors = colors[Math.floor(Math.random() * 6)].backgroundColor;
    return activeCheckbox ? activeCheckbox.backgroundColor : randomColors;
  }

  async function createItem() {
    try {
      const item = {
        ...currentItem,
        color: getItemsColor(),
      };
      const data = await itemsService.createItem(item);
      setItems([...items, data.data]);
    } catch (e) {
      const message = 'Not Found ';
      NotificationService.error(message);
    }
  }

  async function handleCheck(id) {
    try {
      const item = items.find((el) => el.id === id);
      if (item) {
        item.completed = !item.completed;
      }
      await itemsService.patchItem(id, item);
      setItems([...items]);
    } catch (e) {
      const message = 'Not Found ';
      NotificationService.error(message);
    }
  }

  async function handleText(id, event) {
    try {
      const item = items.find((el) => el.id === id);
      if (item) {
        item.task = event.target.value;
      }
      await itemsService.patchItem(id, item);
      setItems([...items]);
    } catch (e) {
      const message = 'Not Found ';
      NotificationService.error(message);
    }
  }

  async function deleteItem(id) {
    try {
      await itemsService.deleteItem(id);
      const newItems = items.filter((item) => item.id !== id);
      setItems(newItems);
    } catch (e) {
      const message = 'Not Found ';
      NotificationService.error(message);
    }
  }

  function handleClickColor(i) {
    const newColors = [...colors];
    setColors(newColors.map((item, index) => {
      const newItem = item;
      if (i === index) {
        newItem.selected = !newItem.selected;
      } else newItem.selected = i === index;
      return newItem;
    }));
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
            colors={colors}
            handleClickColor={handleClickColor}
          />
        </div>
      </div>
    </div>
  );
}

export default Container;
