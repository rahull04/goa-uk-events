import { all, call, put, takeLatest } from 'redux-saga/effects';
// import { GET } from '../../lib/services';
import { loginUserSuccess } from '../action/user.action';
import { LOGIN_USER_REQUEST } from '../actionTypes/user';
import { UserProfile } from '../types/user.type';

// API Calls
const authenticateUser = async () => {
  return {
    username: 'rahulll',
    authToken: 'dhbsdwkdi2ur4nrjnfjnwfjjewfwmf',
    userType: 'user',
  };
};

// Actions
function* signInUserSaga(): Generator<unknown, void, UserProfile> {
  try {
    const response = yield call(authenticateUser);
    console.log('response', response);
    yield put(loginUserSuccess(response));
    // eslint-disable-next-line
  } catch (error: any) {
    console.log('Error while signing in user:', error);
  }
}

// Saga declaration
function* userSaga() {
  yield all([takeLatest(LOGIN_USER_REQUEST, signInUserSaga)]);
}

export default userSaga;
