import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOG_OUT_USER_REQUEST } from '../actionTypes/user';
import { REHYDRATE } from 'redux-persist/lib/constants';

export interface UserProfile {
  username?: string;
  authToken?: string;
  userType?: string;
}

export interface UserState {
  isAuthenticated: boolean;
  authenticating: boolean;
  profile: UserProfile;
}

export interface LoginUserRequest {
  type: typeof LOGIN_USER_REQUEST;
}

export type LoginUserSuccess = {
  type: typeof LOGIN_USER_SUCCESS;
  payload: UserProfile;
};

export type LoginUserFailure = {
  type: typeof LOGIN_USER_FAILURE;
};

export type LoginOutUserRequest = {
  type: typeof LOG_OUT_USER_REQUEST;
};

export type Rehydrate = {
  type: typeof REHYDRATE;
  payload: any;
};

export type UserActions = LoginUserRequest | LoginUserSuccess | LoginUserFailure | LoginOutUserRequest | Rehydrate;
