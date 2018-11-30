import {
  LOAD_EVENTS,
  LOAD_EVENTS_SUCCESS,
  LOAD_EVENTS_ERROR,
} from './constants';

export function loadEvents() {
  return {
    type: LOAD_EVENTS,
  };
}

export function eventsLoaded(events, username) {
  return {
    type: LOAD_EVENTS_SUCCESS,
    events,
    username,
  };
}

export function eventsLoadingError(error) {
  return {
    type: LOAD_EVENTS_ERROR,
    error,
  };
}
