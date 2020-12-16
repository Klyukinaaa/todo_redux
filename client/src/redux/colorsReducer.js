import { ACTIVATE } from './types';

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
};

const colorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVATE: {
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
      };
    }
    default: return state;
  }
};

export default colorsReducer;
