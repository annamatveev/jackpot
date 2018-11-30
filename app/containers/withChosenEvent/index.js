import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectChosenEvent } from 'containers/withSelectEvent/selectors';

const mapStateToProps = createStructuredSelector({
  event: makeSelectChosenEvent(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default function withChosenEvent(WrappedComponent) {
  return compose(withConnect)(WrappedComponent);
}
