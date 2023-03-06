import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Logger } from '../../lib/utils';
import { loginUserSuccess } from '../stores/user.store';
// import { GET } from '../../lib/services';
import { UserProfile } from '../types/user.type';

const logger = new Logger('UserSaga');

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
    logger.log('Signing in user');
    const response = yield call(authenticateUser);
    logger.log('Signed in user', response);
    yield put(loginUserSuccess(response));
  } catch (error: any) {
    logger.error('Error while signing in user:', error);
  }
}

// Saga declaration
function* userSaga() {
  yield all([takeLatest('user/loginUserRequest', signInUserSaga)]);
}

export default userSaga;
