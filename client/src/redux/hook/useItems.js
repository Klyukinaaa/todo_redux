import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  initialize, create, checked, update, deleted,
} from '../actions/actions';

const credentialsSelector = (state) => {
  if (state.items) {
    return { items: state.items };
  }
  return { items: [] };
};

export default function useItems() {
  const { items } = useSelector(credentialsSelector);
  const dispatch = useDispatch();

  const initializeItems = useCallback((data) => dispatch(initialize(data)), [dispatch]);
  const createTask = useCallback((data) => dispatch(create(data)), [dispatch]);
  const checkItem = useCallback((id) => dispatch(checked(id)), [dispatch]);
  const updateItem = useCallback((id, text) => dispatch(update(id, text)), [dispatch]);
  const deleteTask = useCallback((id) => dispatch(deleted(id)), [dispatch]);
  return {
    createTask,
    initializeItems,
    items,
    checkItem,
    updateItem,
    deleteTask,
  };
}
