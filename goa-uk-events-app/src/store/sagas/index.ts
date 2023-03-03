import { all, fork } from 'redux-saga/effects';

import eventSaga from './event';

export function* rootSaga() {
  yield all([fork(eventSaga)]);
}
