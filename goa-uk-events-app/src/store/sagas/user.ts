import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchUserFailure, fetchUserSuccess } from '../action';
import { FETCH_USER_REQUEST } from '../actionTypes';
import { User } from '../types';

const getUsers = () => axios.get<User[]>('https://jsonplaceholder.typicode.com/todos');

function* fetchUserSaga(): any {
  try {
    const response = yield call(getUsers);
    yield put(
      fetchUserSuccess({
        users: response.data,
      }),
    );
  } catch (e: any) {
    yield put(
      fetchUserFailure({
        error: e.message,
      }),
    );
  }
}

function* userSaga() {
  yield all([takeLatest(FETCH_USER_REQUEST, fetchUserSaga)]);
}

export default userSaga;
