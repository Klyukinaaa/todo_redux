import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncActive } from '../actions/reqActions';

export default function useColors() {
  const colors = useSelector((state) => state.colors.colors);
  const error = useSelector((state) => state.colors.error);
  const loading = useSelector((state) => state.colors.loading);
  const dispatch = useDispatch();

  const activateBtn = useCallback((color) => dispatch(asyncActive(color)), [dispatch]);

  return {
    colors,
    activateBtn,
    error,
    loading,
  };
}
