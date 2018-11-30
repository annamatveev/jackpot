import React from 'react';
import EventsProvider from '../EventsProvider';
import ConnectedEventsDrops from '../ConnectedEventDrops';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <EventsProvider>
          <ConnectedEventsDrops />
        </EventsProvider>
      </React.Fragment>
    );
  }
}
