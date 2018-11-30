import { filterEvents } from '../actions';
import { FILTER_EVENTS } from '../constants';

describe('WithFilterEvents actions', () => {
  describe('Default Action', () => {
    it('has a type of FILTER_EVENTS', () => {
      const expected = {
        type: FILTER_EVENTS,
      };
      expect(filterEvents()).toEqual(expected);
    });
  });
});
