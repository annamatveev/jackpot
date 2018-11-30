import { FILTER_EVENTS } from './constants';

export function filterEvents(filteredEvents) {
  return {
    type: FILTER_EVENTS,
    filteredEvents,
  };
}
