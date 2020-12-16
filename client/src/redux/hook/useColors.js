import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activate } from '../actions/actions';

export default function useColors() {
  const colors = useSelector((state) => state.colors.colors);
  const dispatch = useDispatch();

  const activateBtn = useCallback((color) => dispatch(activate(color)), [dispatch]);

  return {
    colors,
    activateBtn,
  };
}
