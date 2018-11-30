import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import EventDrops from '../../components/EventDrops';
import withEvents from '../withEvents';
import withSelectEvent from '../withSelectEvent';

const ConnectedEventsDrops = ({ events, onSelectEvent }) => (
  <EventDrops events={events} onDataPointHover={onSelectEvent} />
);

ConnectedEventsDrops.propTypes = {
  events: PropTypes.array.isRequired,
  onSelectEvent: PropTypes.func,
};

export default compose(
  withEvents,
  withSelectEvent,
)(ConnectedEventsDrops);
