import { put, takeEvery, call, all } from "redux-saga/effects";
import axios from "axios";
import { CHANGE_NAME, GET_NAME_ASYNC } from "../redux/actions";

const apiCall = () =>
  axios
    .get("https://uinames.com/api/?amount=1")
    .then(response => response.data.name)
    .catch(err => {
      throw err;
    });

function* getNameAsync() {
  const response = yield call(apiCall);
  yield put({ type: CHANGE_NAME, payload: response });
}

function* watchGetNameAsync() {
  yield takeEvery(GET_NAME_ASYNC, getNameAsync);
}

export default function* rootSaga() {
  yield all([watchGetNameAsync()]);
}
