import React from 'react';
import AutoDirectionProvider from 'react-with-direction/dist/AutoDirectionProvider';
// import Moment from "react-moment";
import ReactFancyBox from 'react-fancybox';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const EventContent = styled.div`
  padding: 16px;
  overflow-y: scroll;
`;

const Key = styled.span`
  font-weight: bold;
  margin-right: 3px;
  text-transform: capitalize;

  &:after {
    content: ':';
  }
`;

function EventPreviewDetails({ event }) {
  return (
    <EventContent>
      {Object.keys(event).map(key => {
        switch (key) {
          case 'content':
            return (
              <AutoDirectionProvider text={event[key]}>
                <div>{event[key]}</div>
              </AutoDirectionProvider>
            );
          case 'date':
            return '';
          case 'type':
            return '';
          case 'path':
            return (
              <audio controls>
                <source src="horse.mp3" type="audio/mpeg" />
              </audio>
            );
          case 'start_time':
            return (
              <div>
                <Key>From</Key> {event.start_time}
              </div>
            );
          case 'end_time':
            return (
              <div>
                <Key>Until</Key> {event.end_time}
              </div>
            );
          case 'link':
            return (
              <ReactFancyBox
                thumbnail={'data:image/png;base64,' + event.link}
            image={`data:image/png;base64,${  event.link}`}/>;
          default:
            return (
              <div>
                <Key>{key}</Key>
                {event[key]}
              </div>
            );
        }
      })}
  </EventContent>
  );
}

EventPreviewDetails.propTypes = {};

export default EventPreviewDetails;
