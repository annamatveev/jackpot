import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import Moment from 'react-moment';
import 'react-fancybox/lib/fancybox.css';
import EventPreviewHeader from 'components/EventPreviewHeader';
import EventPreviewDetails from 'components/EventPreviewDetails';

const BoxWrapper = styled.div`
  width: 35%;
  height: 600px;
  border: 1px solid rgb(0, 255, 198);
  box-shadow: rgb(0, 255, 198) 0px 0px 10px 0px;
  background-color: #3b404d;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  font-weight: 100;
`;

const Date = styled.div`
  padding-left: 16px;
  padding-top: 8px;
  font-size: 12px;
  color: grey;
`;

export default class EventPreview extends React.PureComponent {
  state = { animation: false };

  componentDidUpdate() {
    this.state.animation = true;
  }

  render() {
    return (
      <BoxWrapper>
        <EventPreviewHeader text={this.props.event.type} />
        <Date>
          {/* <Moment format='DD-MM-YYYY HH:mm Z'> {this.props.event.date}</Moment> (<Moment fromNow>{this.props.event.date}</Moment>) */}
        </Date>
        <EventPreviewDetails event={this.props.event} />
      </BoxWrapper>
    );
  }
}

EventPreview.propTypes = {
  event: PropTypes.object.isRequired,
};
