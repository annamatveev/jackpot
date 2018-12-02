import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_EVENTS } from 'containers/EventsProvider/constants';
import {
  eventsLoaded,
  eventsLoadingError,
} from 'containers/EventsProvider/actions';

import request from 'utils/request';

export function* getEvents() {
  const requestURL = `http://192.168.85.16:3001/api/events`;

  try {
    const events = yield call(request, requestURL);
    yield put(eventsLoaded(events));
  } catch (err) {
    yield put(eventsLoadingError(err));
  }
}

export default function* eventsProviderSaga() {
  yield takeLatest(LOAD_EVENTS, getEvents);
}
