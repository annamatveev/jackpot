import { createSelector } from 'reselect';
import { initialState } from 'containers/EventsProvider/reducer';

const selectChosenEventProviderDomain = state =>
  state.get('selectEventProvider', initialState);

const makeSelectEventProvider = () =>
  createSelector(selectChosenEventProviderDomain, substate => substate.toJS());

const makeSelectChosenEvent = () =>
  createSelector(selectChosenEventProviderDomain, globalState =>
    globalState.get('chosenEvent'),
  );

export default makeSelectEventProvider;
export { selectChosenEventProviderDomain, makeSelectChosenEvent };
