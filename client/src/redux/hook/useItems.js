// вернёт мемоизированную версию колбэка,
// который изменяется только,
// если изменяются значения одной из зависимостей.
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadData, asyncDelete, asyncCreate, asyncCheck, asyncUpdate,
} from '../actions/reqActions';

export default function useItems() {
  const items = useSelector((state) => state.items.items);
  const error = useSelector((state) => state.items.error);
  const loading = useSelector((state) => state.items.loading);
  const dispatch = useDispatch();

  const loadItems = useCallback(() => dispatch(loadData()), [dispatch]);
  const createTask = useCallback((data) => dispatch(asyncCreate(data)), [dispatch]);
  const checkItem = useCallback((id) => dispatch(asyncCheck(id)), [dispatch]);
  const updateItem = useCallback((id, text) => dispatch(asyncUpdate(id, text)), [dispatch]);
  const deleteTask = useCallback((id) => dispatch(asyncDelete(id)), [dispatch]);

  return {
    createTask,
    items,
    checkItem,
    updateItem,
    deleteTask,
    loadItems,
    error,
    loading,
  };
}
