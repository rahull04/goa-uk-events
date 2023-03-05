import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { StoreState } from '../../store/stores';
// import { StoreState } from '../../store/reducer';

export const useStore = () => {
  const states = useSelector((state: StoreState) => state);
  const dispatch = useDispatch();

  const updateState = (action: (state: unknown) => AnyAction, newState: unknown) => {
    dispatch(action(newState));
  };

  const dispatchAction = (action: () => AnyAction) => {
    dispatch(action());
  };

  return { states, updateState, dispatchAction };
};
