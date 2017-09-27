import { call, put, takeEvery, all, fork } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import {
	COUNT_INCREMENT_REQUEST,
	COUNT_DECREMENT_REQUEST,
	COUNT_FETCH_REQUEST,
	countRecieveSuccess
} from '../actions/counter'

import * as API from '../api'

function* increment() {
	try {
		const payload = yield call(API.increment)

		yield delay(250)

		yield put(countRecieveSuccess(payload))
	} catch(err) {
		console.log(err);
	}
}

function* watchIncrement() {
	yield takeEvery(COUNT_INCREMENT_REQUEST, increment)
}

function* decrement() {
	try {
		const payload = yield call(API.decrement)

		yield delay(250)

		yield put(countRecieveSuccess(payload))
	} catch(err) {
		console.log(err);
	}
}

function* watchDecrement() {
	yield takeEvery(COUNT_DECREMENT_REQUEST, decrement)
}

function* fetchCount() {
	try {
		const payload = yield call(API.get)

		yield delay(250)

		yield put(countRecieveSuccess(payload))
	} catch(err) {
		console.log(err);
	}
}

function* watchFetch() {
	yield takeEvery(COUNT_FETCH_REQUEST, fetchCount)
}

export default function* rootSaga() {
	yield fork(watchFetch)
	yield fork(watchIncrement)
	yield fork(watchDecrement)
}
