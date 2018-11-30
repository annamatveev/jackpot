import { fromJS } from 'immutable';
import { SELECT_EVENT } from './constants';

export const initialState = fromJS({
  chosenEvent: {},
});

export default function selectEventReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_EVENT:
      return state.set('chosenEvent', action.event);
    default:
      return state;
  }
}
