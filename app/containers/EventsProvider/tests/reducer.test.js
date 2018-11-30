import { fromJS } from 'immutable';
import eventsProviderReducer from '../reducer';

describe('eventsProviderReducer', () => {
  it('returns the initial state', () => {
    expect(eventsProviderReducer(undefined, {})).toEqual(fromJS({}));
  });
});
