import { ADD_DATA, CREATE, CHECKED } from './types';

const initialState = {
  items: [],
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return { ...state, items: action.payload };
    case CREATE:
      return { ...state, items: [...state.items, action.payload] };
    case CHECKED: {
      const { item } = action.payload;
      if (item) {
        item.completed = !item.completed;
      }
      return { items: [...state.items] };
    }
    default: return state;
  }
};

export default itemsReducer;
