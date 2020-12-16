import {
  INITIALIZE_ITEMS, CREATE_ITEM, CHECK_ITEM, DELETE_ITEM, UPDATE_ITEM,
} from '../types/types';

const initialState = {
  items: [],
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_ITEMS:
      return { ...state, items: action.payload };
    case CREATE_ITEM:
      return { ...state, items: [...state.items, action.payload] };
    case CHECK_ITEM: {
      const { id } = action.payload;
      const newItems = [...state.items];
      const index = newItems.findIndex((item) => item.id === id);
      const itemToChange = newItems[index];
      newItems[index] = {
        ...itemToChange,
        completed: itemToChange.completed = !itemToChange.completed,
      };
      return { ...state, items: newItems };
    }
    case DELETE_ITEM: {
      const { id } = action.payload;
      const newItems = state.items.filter((item) => item.id !== id);
      return { ...state, items: newItems };
    }
    case UPDATE_ITEM: {
      const { id } = action.payload;
      const { text } = action.payload;
      const newItems = [...state.items];
      const newItem = newItems.find((el) => el.id === id);
      if (newItem) {
        newItem.task = text;
      }
      return { ...state, items: newItems };
    }
    default: return state;
  }
};

export default itemsReducer;
