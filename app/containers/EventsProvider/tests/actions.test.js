import { defaultAction } from '../actions';
import { LOAD_EVENTS } from '../constants';

describe('EventsProvider actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: LOAD_EVENTS,
      };
      expect(defaultAction()).toEqual(expected);
    });
  });
});
