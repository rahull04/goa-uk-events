import { all, fork } from 'redux-saga/effects';

import eventSaga from './event.saga';
import userSaga from './user.saga';

export function* rootSaga() {
  yield all([fork(eventSaga), fork(userSaga)]);
}
