import { CommonActions, CommonState } from '../types/common';
import { SET_LOADER } from '../actionTypes/common';

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
    default:
      return state;
  }
};

export default commonReducer;
