import { createSelector } from 'reselect';
import { initialState } from 'containers/EventsProvider/reducer';

const selectEventsProviderDomain = state =>
  state.get('eventsProvider', initialState);

const makeSelectEventsProvider = () =>
  createSelector(selectEventsProviderDomain, substate => substate.toJS());

const makeSelectLoading = () =>
  createSelector(selectEventsProviderDomain, globalState =>
    globalState.get('loading'),
  );

const makeSelectError = () =>
  createSelector(selectEventsProviderDomain, globalState =>
    globalState.get('error'),
  );

const makeSelectEventsData = () =>
  createSelector(selectEventsProviderDomain, globalState =>
    globalState.get('events'),
  );

export default makeSelectEventsProvider;
export {
  selectEventsProviderDomain,
  makeSelectLoading,
  makeSelectError,
  makeSelectEventsData,
};
