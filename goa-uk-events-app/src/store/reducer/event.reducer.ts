import { FETCH_EVENT_REQUEST, FETCH_EVENT_SUCCESS, FETCH_EVENT_FAILURE } from '../actionTypes';
import { EventActions, EventState } from '../types';
import { REHYDRATE } from 'redux-persist/lib/constants';

const initialState: EventState = {
  pending: false,
  events: [],
  error: null,
  isLoading: false,
};

const eventReducer = (state = initialState, action: EventActions): EventState => {
  switch (action.type) {
    case FETCH_EVENT_REQUEST:
      return {
        ...state,
        pending: true,
        isLoading: true,
      };
    case FETCH_EVENT_SUCCESS:
      return {
        ...state,
        pending: false,
        events: action.payload.events,
        error: null,
        isLoading: false,
      };
    case FETCH_EVENT_FAILURE:
      return {
        ...state,
        pending: false,
        events: [],
        error: action.payload.error,
        isLoading: false,
      };
    case REHYDRATE:
      return { ...state, ...action.payload?.event };
    default:
      return {
        ...state,
      };
  }
};

export default eventReducer;
