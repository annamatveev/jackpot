import React from 'react';
import styled from 'styled-components';
import EventPreview from 'components/EventPreview';
import EventsProvider from '../EventsProvider';
import ConnectedEventsDrops from '../ConnectedEventDrops';
import withChosenEvent from '../withChosenEvent';

const EventsPreviewWithChosenEvent = withChosenEvent(EventPreview);

const Header = styled.div`
  font-weight: 100;
  font-size: 40px;
  margin: 0 auto 20px;
  width: 140px;
`;
/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Header>Timeline</Header>
        <EventsProvider>
          <ConnectedEventsDrops />
        </EventsProvider>
        <EventsPreviewWithChosenEvent />
      </React.Fragment>
    );
  }
}
