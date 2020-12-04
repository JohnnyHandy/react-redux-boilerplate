import { all, call, takeLatest, put } from 'redux-saga/effects'

import * as actions from './actions'
import * as services from './services'

export function * signIn ({ payload }) {
  try {
    const userData = yield call(services.signIn, payload)
    yield put(actions.SIGN_IN_SUCCESSFUL(userData))
  } catch (error) {
    yield put(actions.SIGN_IN_FAILURE(error))
  }
}

// Watchers
export function * watchSignIn () {
  yield takeLatest(actions.SIGN_IN, signIn)
}

export default function * authSagas () {
  yield all([watchSignIn()])
}
