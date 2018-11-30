import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectEventsData,
  makeSelectLoading,
} from 'containers/EventsProvider/selectors';

const mapStateToProps = createStructuredSelector({
  events: makeSelectEventsData(),
  loading: makeSelectLoading(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default function withEvents(WrappedComponent) {
  return compose(withConnect)(WrappedComponent);
}
