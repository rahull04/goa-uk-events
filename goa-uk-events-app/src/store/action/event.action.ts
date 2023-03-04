import { FETCH_EVENT_REQUEST, FETCH_EVENT_FAILURE, FETCH_EVENT_SUCCESS } from '../actionTypes/event.action-type';
import { FetchEventRequest, FetchEventSuccess, FetchEventSuccessPayload, FetchEventFailure, FetchEventFailurePayload } from '../types/event.type';

export const fetchEventRequest = (): FetchEventRequest => ({
  type: FETCH_EVENT_REQUEST,
});

export const fetchEventSuccess = (payload: FetchEventSuccessPayload): FetchEventSuccess => ({
  type: FETCH_EVENT_SUCCESS,
  payload,
});

export const fetchEventFailure = (payload: FetchEventFailurePayload): FetchEventFailure => ({
  type: FETCH_EVENT_FAILURE,
  payload,
});
