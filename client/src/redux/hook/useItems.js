// вернёт мемоизированную версию колбэка,
// который изменяется только,
// если изменяются значения одной из зависимостей.
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  initialize, create, checked, update, deleted,
} from '../actions/actions';

export default function useItems() {
  const items = useSelector((state) => state.items.items);
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
