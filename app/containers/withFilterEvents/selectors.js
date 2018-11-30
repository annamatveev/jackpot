import { createSelector } from 'reselect';
import { initialState } from 'containers/withFilterEvents/reducer';

const selectFilteredEventsProviderDomain = state =>
  state.get('filterEventsProvider', initialState);

const makeSelectFilteredEventsProvider = () =>
  createSelector(selectFilteredEventsProviderDomain, substate =>
    substate.toJS(),
  );

const makeSelectFilteredEvents = () =>
  createSelector(selectFilteredEventsProviderDomain, globalState =>
    globalState.get('filteredEvents'),
  );

export default makeSelectFilteredEventsProvider;
export { selectFilteredEventsProviderDomain, makeSelectFilteredEvents };
