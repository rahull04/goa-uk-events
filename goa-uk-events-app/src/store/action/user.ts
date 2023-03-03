import { FETCH_USER_REQUEST, FETCH_USER_FAILURE, FETCH_USER_SUCCESS } from '../actionTypes/user';
import { FetchUserRequest, FetchUserSuccess, FetchUserSuccessPayload, FetchUserFailure, FetchUserFailurePayload } from '../types/user';

export const fetchUserRequest = (): FetchUserRequest => ({
  type: FETCH_USER_REQUEST,
});

export const fetchUserSuccess = (payload: FetchUserSuccessPayload): FetchUserSuccess => ({
  type: FETCH_USER_SUCCESS,
  payload,
});

export const fetchUserFailure = (payload: FetchUserFailurePayload): FetchUserFailure => ({
  type: FETCH_USER_FAILURE,
  payload,
});
