import { all, fork } from 'redux-saga/effects';

import userSaga from './user';

export function* rootSaga() {
  yield all([fork(userSaga)]);
}
