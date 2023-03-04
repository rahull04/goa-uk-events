import { FETCH_EVENT_REQUEST, FETCH_EVENT_SUCCESS, FETCH_EVENT_FAILURE } from '../actionTypes';
import { EventActions, EventState } from '../types';
import { REHYDRATE } from 'redux-persist/lib/constants';

const initialState: EventState = {
  pending: false,
  events: [],
  error: null,
};

const eventReducer = (state = initialState, action: EventActions) => {
  switch (action.type) {
    case FETCH_EVENT_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_EVENT_SUCCESS:
      return {
        ...state,
        pending: false,
        events: action.payload.events,
        error: null,
      };
    case FETCH_EVENT_FAILURE:
      return {
        ...state,
        pending: false,
        events: [],
        error: action.payload.error,
      };
    case REHYDRATE:
      return { ...state, ...action.payload.event };
    default:
      return {
        ...state,
      };
  }
};

export default eventReducer;
