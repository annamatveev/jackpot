import React from 'react';
import EventPreview from 'components/EventPreview';
import EventsProvider from '../EventsProvider';
import ConnectedEventsDrops from '../ConnectedEventDrops';
import withChosenEvent from '../withChosenEvent';

const EventsPreviewWithChosenEvent = withChosenEvent(EventPreview);

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <EventsProvider>
          <ConnectedEventsDrops />
        </EventsProvider>
        <EventsPreviewWithChosenEvent />
      </React.Fragment>
    );
  }
}
