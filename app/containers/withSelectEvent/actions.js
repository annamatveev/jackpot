import { SELECT_EVENT } from './constants';

export function selectEvent(event) {
  return {
    type: SELECT_EVENT,
    event,
  };
}
