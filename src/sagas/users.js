import { call, put, takeLatest, delay } from 'redux-saga/effects';

import { FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from '../reducers/users';

import { getUsers } from '../services/Users';

function* fetchUsers() {
  while (true) {
    yield delay(1000);
    const response = yield call(getUsers);
    if (response.status === 200) {
      yield put({ type: FETCH_USERS_SUCCESS, payload: response.data });
    } else {
      yield put({ type: FETCH_USERS_ERROR, payload: response.data });
    }
  }
}

export default function* () {
  yield takeLatest(FETCH_USERS, fetchUsers);
}
