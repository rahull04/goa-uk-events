import { UserActions, UserState } from '../types/user.type';
import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOG_OUT_USER_REQUEST } from '../actionTypes/user.action-type';
import { REHYDRATE } from 'redux-persist/lib/constants';

const initialState: UserState = {
  isAuthenticated: false,
  authenticating: false,
  profile: {},
};

const userReducer = (state = initialState, action: UserActions) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        authenticating: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        authenticating: false,
        isAuthenticated: true,
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        authenticating: false,
      };
    case LOG_OUT_USER_REQUEST:
      return {
        ...state,
        isAuthenticated: false,
        profile: {},
      };
    case REHYDRATE:
      return { ...state, ...action.payload?.user };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
