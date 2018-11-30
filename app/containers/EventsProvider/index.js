import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { loadEvents } from './actions';

export class EventsProvider extends React.Component {
  static propTypes = {
    loadEvents: PropTypes.func.isRequired,
    children: PropTypes.node,
  };

  componentDidMount() {
    this.props.loadEvents();
  }

  render() {
    return this.props.children;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadEvents: () => {
      dispatch(loadEvents());
    },
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'eventsProvider', reducer });
const withSaga = injectSaga({ key: 'eventsProvider', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EventsProvider);
