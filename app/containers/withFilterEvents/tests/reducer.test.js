import { fromJS } from 'immutable';
import withFilterEventsReducer from '../reducer';

describe('withFilterEventsReducer', () => {
  it('returns the initial state', () => {
    expect(withFilterEventsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
