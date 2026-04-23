import { call, put, takeLatest, takeEvery, select } from 'redux-saga/effects'
import axios from 'axios'
import {
  fetchListSuccess,
  fetchListFailure,
  setCount,
} from '../actions/listActions'

const getListFromServer = (offset, limit) =>
  axios.get(`http://localhost:8080/list/lim?offset=${offset}&limit=${limit}`)

const getCountFromServer = () =>
  axios.get('http://localhost:8080/list/all')

function* fetchListSaga() {
  try {
    const page = yield select((state) => state.page)
    const limit = yield select((state) => state.limit)
    const offset = (page - 1) * limit
    const response = yield call(getListFromServer, offset, limit)
    yield put(fetchListSuccess(response.data.list))
  } catch (error) {
    yield put(fetchListFailure(error.message))
  }
}

function* fetchCountSaga() {
  try {
    const response = yield call(getCountFromServer)
    yield put(setCount(response.data.count))
  } catch (error) {
    yield put(fetchListFailure(error.message))
  }
}

function* listSaga() {
  yield takeLatest('FETCH_LIST_REQUEST', fetchListSaga)
  yield takeEvery('FETCH_COUNT_REQUEST', fetchCountSaga)
}

export default listSaga