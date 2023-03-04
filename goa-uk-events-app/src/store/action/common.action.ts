import { SET_LOADER } from '../actionTypes/common';
import { SetLoaderRequest } from '../types/common.type';

export const setLoaderRequest = (payload: boolean): SetLoaderRequest => ({
  type: SET_LOADER,
  payload: payload,
});
