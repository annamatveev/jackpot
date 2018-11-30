import { connect } from 'react-redux';
import { compose } from 'redux';
import { filterEvents } from './actions';
import injectReducer from '../../utils/injectReducer';
import reducer from './reducer';

function mapDispatchToProps(dispatch) {
  return {
    onFilterEvents: event => {
      dispatch(filterEvents(event));
    },
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'filterEventsProvider', reducer });

export default function withFilterEvents(WrappedComponent) {
  return compose(
    withReducer,
    withConnect,
  )(WrappedComponent);
}
