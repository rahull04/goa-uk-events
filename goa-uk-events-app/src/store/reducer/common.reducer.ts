import { CommonActions, CommonState } from '../types/common.type';
import { SET_LOADER } from '../actionTypes/common.action-type';
import { REHYDRATE } from 'redux-persist/lib/constants';

const initialState: CommonState = {
  isLoading: false,
};

const commonReducer = (state = initialState, action: CommonActions) => {
  switch (action.type) {
    case SET_LOADER:
      return {
        ...state,
        isLoading: action.payload,
      };
    case REHYDRATE:
      return { ...state, ...action.payload.common };
    default:
      return state;
  }
};

export default commonReducer;
