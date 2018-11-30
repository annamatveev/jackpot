import { fromJS } from 'immutable';
import { FILTER_EVENTS } from './constants';

export const initialState = fromJS({
  filteredEvents: [],
});

export default function filterEventsReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_EVENTS:
      return state.set('filteredEvents', action.filteredEvents);
    default:
      return state;
  }
}
