import { all, call, put, takeLatest } from 'redux-saga/effects';
import { GET } from '../../lib/services';
import { fetchEventsFailure, fetchEventsSuccess } from '../stores/event.store';
import { Event } from '../types';
import { setLoaderRequest } from '../stores/common.store';

// API Calls
const getEvents = () => GET('/todos');

// Actions
// fetchEvents
function* fetchEventsSaga(): Generator<unknown, void, { data: Event[] }> {
  try {
    yield put(setLoaderRequest(true));
    const response = yield call(getEvents);
    yield put(fetchEventsSuccess(response.data));
  } catch (e: any) {
    yield put(fetchEventsFailure());
  } finally {
    yield put(setLoaderRequest(false));
  }
}

// Saga declaration
function* eventSaga() {
  yield all([takeLatest('event/fetchEventsRequest', fetchEventsSaga)]);
}

export default eventSaga;
