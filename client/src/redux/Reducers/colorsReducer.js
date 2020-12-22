import {
  ASYNC_ACTIVATE_SUC,
  ASYNC_ACTIVATE_ERR, ASYNC_ACTIVATE_REQ,
} from '../types/types';

const initialState = {
  colors:
    [
      {
        color: '#ef666c',
        selected: false,
      },
      {
        color: '#f171a2',
        selected: false,
      },
      {
        color: '#8f6ac8',
        selected: false,
      },
      {
        color: '#5eb1f3',
        selected: false,
      },
      {
        color: '#68d8e3',
        selected: false,
      },
      {
        color: '#fde087',
        selected: false,
      },
    ],
  loading: false,
  error: null,
};

const colorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASYNC_ACTIVATE_SUC: {
      const { color } = action.payload;
      return {
        ...state,
        colors: state.colors.map((item) => {
          const newItem = { ...item };
          if (item.color === color) {
            newItem.selected = !newItem.selected;
          } else newItem.selected = item.color === color;
          return newItem;
        }),
        loading: false,
        error: null,
      };
    }
    case ASYNC_ACTIVATE_ERR: {
      const { code, message } = action.payload;
      return { ...state, loading: false, error: { message, code } };
    }
    case ASYNC_ACTIVATE_REQ: {
      return { ...state, loading: true, error: null };
    }
    default: return state;
  }
};

export default colorsReducer;
