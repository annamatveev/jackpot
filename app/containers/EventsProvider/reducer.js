import { fromJS } from 'immutable';
import {
  LOAD_EVENTS_SUCCESS,
  LOAD_EVENTS,
  LOAD_EVENTS_ERROR,
} from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  events: [],
});

export default function eventsProviderReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_EVENTS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('events', []);
    case LOAD_EVENTS_SUCCESS:
      return state.set('events', action.events).set('loading', false);
    case LOAD_EVENTS_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}
