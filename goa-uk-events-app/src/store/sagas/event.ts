import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchEventFailure, fetchEventSuccess } from '../action';
import { FETCH_EVENT_REQUEST } from '../actionTypes';
import { Event } from '../types';

const getEvents = () => axios.get<Event[]>('https://jsonplaceholder.typicode.com/todos');

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

function* eventSaga() {
  yield all([takeLatest(FETCH_EVENT_REQUEST, fetchEventsSaga)]);
}

export default eventSaga;
