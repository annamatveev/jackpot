import { createSelector } from 'reselect';
import { initialState } from 'containers/withSelectEvent/reducer';

const selectChosenEventProviderDomain = state =>
  state.get('selectEventProvider', initialState);

const makeSelectChosenEventProvider = () =>
  createSelector(selectChosenEventProviderDomain, substate => substate.toJS());

const makeSelectChosenEvent = () =>
  createSelector(selectChosenEventProviderDomain, globalState =>
    globalState.get('chosenEvent'),
  );

export default makeSelectChosenEventProvider;
export { selectChosenEventProviderDomain, makeSelectChosenEvent };
