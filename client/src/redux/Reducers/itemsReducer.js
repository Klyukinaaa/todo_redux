import {
  ASYNC_LOAD_DATA_SUC, CREATE_ITEM, CHECK_ITEM, DELETE_ITEM, ASYNC_LOAD_DATA_REQ,
  ASYNC_LOAD_DATA_ERR, ASYNC_UPDATE_TASK_SUC,
} from '../types/types';

const initialState = {
  items: [],
  loading: false,
  error: {},
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASYNC_LOAD_DATA_REQ: {
      return { ...state, loading: true };
    }
    case ASYNC_LOAD_DATA_ERR: {
      const { code, message } = action.payload;
      return { ...state, loading: false, error: { message, code } };
    }
    case ASYNC_LOAD_DATA_SUC:
      return {
        ...state, items: action.payload, loading: false, error: {},
      };
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
    case ASYNC_UPDATE_TASK_SUC: {
      const { id, text } = action.payload;
      const newItems = [...state.items];
      const newItem = newItems.find((el) => el.id === id);
      if (newItem) {
        newItem.task = text;
      }
      return {
        ...state, items: newItems, loading: false, error: {},
      };
    }
    default: return state;
  }
};

export default itemsReducer;
