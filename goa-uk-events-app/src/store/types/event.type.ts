import { FETCH_EVENT_REQUEST, FETCH_EVENT_SUCCESS, FETCH_EVENT_FAILURE } from '../actionTypes';
import { REHYDRATE } from 'redux-persist/lib/constants';

export interface Event {
  id: number;
  name: string;
  type: string;
}

export interface EventState {
  pending: boolean;
  events: Event[];
  error: string | null;
  isLoading: boolean;
}

export interface FetchEventSuccessPayload {
  events: Event[];
}

export interface FetchEventFailurePayload {
  error: string;
}

export interface FetchEventRequest {
  type: typeof FETCH_EVENT_REQUEST;
}

export type FetchEventSuccess = {
  type: typeof FETCH_EVENT_SUCCESS;
  payload: FetchEventSuccessPayload;
};

export type FetchEventFailure = {
  type: typeof FETCH_EVENT_FAILURE;
  payload: FetchEventFailurePayload;
};

export type Rehydrate = {
  type: typeof REHYDRATE;
  payload: any;
};

export type EventActions = FetchEventRequest | FetchEventSuccess | FetchEventFailure | Rehydrate;
