import { all, call, put, takeLatest } from 'redux-saga/effects';
import { GET } from '../../lib/services';
import { fetchEventFailure, fetchEventSuccess } from '../action';
import { FETCH_EVENT_REQUEST } from '../actionTypes';
import { Event } from '../types';

// API Calls
const getEvents = () => GET('/todos');

// Actions
// fetchEvents
function* fetchEventsSaga(): Generator<unknown, void, { data: Event[] }> {
  try {
    const response = yield call(getEvents);
    yield put(
      fetchEventSuccess({
        events: response.data,
      }),
    );
  } catch (e: any) {
    yield put(
      fetchEventFailure({
        error: e.message,
      }),
    );
  }
}

// Saga declaration
function* eventSaga() {
  yield all([takeLatest(FETCH_EVENT_REQUEST, fetchEventsSaga)]);
}

export default eventSaga;
