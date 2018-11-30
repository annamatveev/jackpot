import { connect } from 'react-redux';
import { compose } from 'redux';
import { selectEvent } from './actions';
import injectReducer from '../../utils/injectReducer';
import reducer from './reducer';

function mapDispatchToProps(dispatch) {
  return {
    onSelectEvent: event => {
      dispatch(selectEvent(event));
    },
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'selectEventProvider', reducer });

export default function withSelectEvent(WrappedComponent) {
  return compose(
    withReducer,
    withConnect,
  )(WrappedComponent);
}
