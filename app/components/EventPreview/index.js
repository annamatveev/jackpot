import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import posed from 'react-pose';

const BoxWrapper = styled.div`
  margin: 0 auto;
  width: 300px;
  height: 200px;
  border: 1px solid rgb(0, 255, 198);
  box-shadow: rgb(0, 255, 198) 0px 0px 10px 0px;
  background-color: #3b404d;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  background: rgba(5, 211, 240, 0.2)
    linear-gradient(
      -90deg,
      rgba(38, 46, 54, 0) 3%,
      rgba(53, 64, 75, 0.51),
      #3b404d
    );
  padding: 16px;
`;

const EventContent = styled.div`
  padding: 16px;
`;

const Date = styled.div`
  font-size: 12px;
  color: grey;
`;

const Box = posed.div({
  hidden: {
    y: -100,
    opacity: 0,
    transition: { duration: 200, ease: 'easeOut' },
  },
  visible: { y: 0, opacity: 1, transition: { duration: 200, ease: 'easeOut' } },
});

export default class EventPreview extends React.PureComponent {
  state = { animation: false };

  componentDidUpdate() {
    this.state.animation = true;
  }

  render() {
    return (
      <Box pose={this.state.animation ? 'visible' : 'hidden'}>
        <BoxWrapper>
          <Header>Facebook Message</Header>
          <EventContent>
            <Date>20.02.1989</Date>
            {this.props.event.message}
          </EventContent>
        </BoxWrapper>
      </Box>
    );
  }
}

EventPreview.propTypes = {
  event: PropTypes.object.isRequired,
};
