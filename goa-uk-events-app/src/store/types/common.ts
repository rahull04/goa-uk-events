import { SET_LOADER } from '../actionTypes/common';

export interface CommonState {
  isLoading: boolean;
}

export type SetLoaderRequest = {
  type: typeof SET_LOADER;
  payload: boolean;
};

export type CommonActions = SetLoaderRequest;
