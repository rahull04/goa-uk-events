import { LOGIN_USER_REQUEST, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOG_OUT_USER_REQUEST } from '../actionTypes/user';
import { LoginOutUserRequest, LoginUserFailure, LoginUserRequest, LoginUserSuccess, UserProfile } from '../types/user.type';

export const loginUserRequest = (): LoginUserRequest => ({
  type: LOGIN_USER_REQUEST,
});

export const loginUserSuccess = (payload: UserProfile): LoginUserSuccess => ({
  type: LOGIN_USER_SUCCESS,
  payload,
});

export const loginUserFailure = (): LoginUserFailure => ({
  type: LOGIN_USER_FAILURE,
});

export const logOutUserRequest = (): LoginOutUserRequest => ({
  type: LOG_OUT_USER_REQUEST,
});
