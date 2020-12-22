import {
  ASYNC_LOAD_DATA_SUC, ASYNC_LOAD_DATA_REQ, ASYNC_LOAD_DATA_ERR,
  ASYNC_CREATE_TASK_REQ, ASYNC_CREATE_TASK_ERR, ASYNC_CREATE_TASK_SUC,
  ASYNC_DELETE_TASK_REQ, ASYNC_DELETE_TASK_ERR, ASYNC_DELETE_TASK_SUC,
  ASYNC_CHECK_TASK_SUC, ASYNC_CHECK_TASK_ERR, ASYNC_CHECK_TASK_REQ,
  ASYNC_UPDATE_TASK_SUC, ASYNC_UPDATE_TASK_ERR, ASYNC_UPDATE_TASK_REQ,
} from '../types/types';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASYNC_LOAD_DATA_REQ: {
      return { ...state, loading: true, error: null };
    }
    case ASYNC_LOAD_DATA_ERR: {
      const { code, message } = action.payload;
      return { ...state, loading: false, error: { message, code } };
    }
    case ASYNC_LOAD_DATA_SUC:
      return {
        ...state, items: action.payload, loading: false, error: null,
      };
    case ASYNC_CREATE_TASK_SUC:
      return {
        ...state, items: [...state.items, action.payload], loading: false, error: null,
      };
    case ASYNC_CREATE_TASK_ERR: {
      const { code, message } = action.payload;
      return {
        ...state, loading: false, error: { message, code },
      };
    }
    case ASYNC_CREATE_TASK_REQ:
      return {
        ...state, loading: true, error: null,
      };
    case ASYNC_CHECK_TASK_SUC: {
      const { id } = action.payload;
      const newItems = [...state.items];
      const index = newItems.findIndex((item) => item.id === id);
      const itemToChange = newItems[index];
      newItems[index] = {
        ...itemToChange,
        completed: itemToChange.completed = !itemToChange.completed,
      };
      return {
        ...state, items: newItems, loading: false, error: null,
      };
    }
    case ASYNC_CHECK_TASK_ERR: {
      const { code, message } = action.payload;
      return {
        ...state, loading: false, error: { message, code },
      };
    }
    case ASYNC_CHECK_TASK_REQ:
      return {
        ...state, loading: true, error: {},
      };
    case ASYNC_DELETE_TASK_SUC: {
      const { id } = action.payload;
      const newItems = state.items.filter((item) => item.id !== id);
      return {
        ...state, items: newItems, loading: false, error: null,
      };
    }
    case ASYNC_DELETE_TASK_ERR: {
      const { code, message } = action.payload;
      return {
        ...state, loading: false, error: { message, code },
      };
    }
    case ASYNC_DELETE_TASK_REQ:
      return {
        ...state, loading: true, error: {},
      };
    case ASYNC_UPDATE_TASK_SUC: {
      const { id, text } = action.payload;
      const newItems = [...state.items];
      const newItem = newItems.find((el) => el.id === id);
      if (newItem) {
        newItem.task = text;
      }
      return {
        ...state, items: newItems, loading: false, error: null,
      };
    }
    case ASYNC_UPDATE_TASK_ERR: {
      const { code, message } = action.payload;
      return {
        ...state, loading: false, error: { message, code },
      };
    }
    case ASYNC_UPDATE_TASK_REQ:
      return {
        ...state, loading: true, error: null,
      };
    default: return state;
  }
};

export default itemsReducer;
