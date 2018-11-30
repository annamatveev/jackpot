import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectFilteredEvents } from 'containers/withFilterEvents/selectors';

const mapStateToProps = createStructuredSelector({
  filteredEvents: makeSelectFilteredEvents(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default function withEventsSection(WrappedComponent) {
  return compose(withConnect)(WrappedComponent);
}
