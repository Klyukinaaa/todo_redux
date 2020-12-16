import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initialize } from '../actions/actions';

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
  return {
    initializeItems,
    items,
  };
}
