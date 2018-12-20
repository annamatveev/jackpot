import React from 'react';
import styled from 'styled-components';
import EventPreview from 'components/EventPreview';
import EventsProvider from '../EventsProvider';
import ConnectedEventsDrops from '../ConnectedEventDrops';
import withChosenEvent from '../withChosenEvent';

const EventPreviewWithChosenEvent = withChosenEvent(EventPreview);

const Header = styled.div`
  font-weight: 100;
  font-size: 40px;
  margin: 0 auto 20px;
  width: 140px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EventDropsWrapper = styled.div`
  width: 65%;
  min-width: 400px;
  padding: 0 24px 0 24px;
`;
/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Header>Timeline</Header>
        <EventsProvider>
          <Content>
            <EventDropsWrapper>
              <ConnectedEventsDrops />
            </EventDropsWrapper>
            <EventPreviewWithChosenEvent />
          </Content>
        </EventsProvider>
      </React.Fragment>
    );
  }
}
