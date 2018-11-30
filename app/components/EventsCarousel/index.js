import ItemsCarousel from 'react-items-carousel';
import React from 'react';
import EventPreview from 'components/EventPreview';
import PropTypes from 'prop-types';

export default class EventsCarousel extends React.Component {
  componentDidMount() {
    // this.setState({
    //   activeItemIndex: 0,
    // });
  }

  render() {
    if (this.props.filteredEvents.data) {
      return (
        <ItemsCarousel
          // Placeholder configurations
          enablePlaceholder
          numberOfPlaceholderItems={5}
          minimumPlaceholderTime={1000}
          placeholderItem={
            <div style={{ height: 200, background: '#900' }}>Placeholder</div>
          }
          // Carousel configurations
          numberOfCards={3}
          gutter={12}
          showSlither
          firstAndLastGutter
          freeScrolling={false}
          // Active item configurations
          // requestToChangeActive={this.changeActiveItem}
          // activeItemIndex={1}
          activePosition="center"
          chevronWidth={24}
          rightChevron={'>'}
          leftChevron={'<'}
          outsideChevron={false}
        >
          {this.props.filteredEvents.data.map(event => (
            <EventPreview key={event.sha} event={event} />
          ))}
        </ItemsCarousel>
      );
    }

    return <div>Zoom to view events</div>;
  }
}

EventsCarousel.propTypes = {
  filteredEvents: PropTypes.any,
};
