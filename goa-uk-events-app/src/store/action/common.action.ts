import { SET_LOADER } from '../actionTypes/common.action-type';
import { SetLoaderRequest } from '../types/common.type';

export const setLoaderRequest = (payload: boolean): SetLoaderRequest => ({
  type: SET_LOADER,
  payload: payload,
});
