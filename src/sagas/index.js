import { all, fork } from "redux-saga/effects";
import homePageWatcher from  '../Containers/HomePage/saga';
import searchPageWatcher from "../Containers/SearchPage/saga"

export default function* rootSaga() {
  yield all([
    fork(homePageWatcher),
    fork(searchPageWatcher)
  ]);
}
