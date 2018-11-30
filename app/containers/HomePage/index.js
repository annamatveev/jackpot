import React from 'react';
import EventDrops from '../../components/EventDrops';
import EventsProvider from '../EventsProvider';
import withEvents from '../withEvents';

const EventsDropsWithEvents = withEvents(EventDrops);

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  selectEvent = event => {
    this.setState({ event });
  };

  logZoomData = zoomData => console.log(zoomData);

  render() {
    return (
      <React.Fragment>
        <EventsProvider>
          <EventsDropsWithEvents
            onDataPointHover={this.selectEvent}
            onZoom={this.logZoomData}
          />
        </EventsProvider>
      </React.Fragment>
    );
  }
}
