// вернёт мемоизированную версию колбэка,
// который изменяется только,
// если изменяются значения одной из зависимостей.
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../actions/actions';
import {
  loadData, asyncDelete, asyncCreate, asyncCheck,
} from '../actions/asyncActions';

export default function useItems() {
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();

  const loadItems = useCallback(() => dispatch(loadData()), [dispatch]);
  const createTask = useCallback((data) => dispatch(asyncCreate(data)), [dispatch]);
  const checkItem = useCallback((id) => dispatch(asyncCheck(id)), [dispatch]);
  const updateItem = useCallback((id, text) => dispatch(update(id, text)), [dispatch]);
  const deleteTask = useCallback((id) => dispatch(asyncDelete(id)), [dispatch]);

  return {
    createTask,
    items,
    checkItem,
    updateItem,
    deleteTask,
    loadItems,
  };
}
