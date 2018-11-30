import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import EventDrops from 'components/EventDrops';
import withEvents from 'containers/withEvents';
import withSelectEvent from 'containers/withSelectEvent';
import withFilterEvents from 'containers/withFilterEvents';

const ConnectedEventsDrops = ({
  events,
  onSelectEvent,
  onFilterEvents,
  ...rest
}) => (
  <EventDrops
    events={events}
    onDataPointHover={onSelectEvent}
    onZoom={onFilterEvents}
    {...rest}
  />
);

ConnectedEventsDrops.propTypes = {
  events: PropTypes.any.isRequired,
  onSelectEvent: PropTypes.func,
  onFilterEvents: PropTypes.func,
};

export default compose(
  withEvents,
  withSelectEvent,
  withFilterEvents,
)(ConnectedEventsDrops);
