import { SET_LOADER } from '../actionTypes/common';
import { REHYDRATE } from 'redux-persist/lib/constants';

export interface CommonState {
  isLoading: boolean;
}

export type SetLoaderRequest = {
  type: typeof SET_LOADER;
  payload: boolean;
};

export type Rehydrate = {
  type: typeof REHYDRATE;
  payload: any;
};

export type CommonActions = SetLoaderRequest | Rehydrate;
