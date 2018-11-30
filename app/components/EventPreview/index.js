import React from 'react';
import PropTypes from 'prop-types';

function EventPreview({ event }) {
  return (
    <div>
      KAKI
      {event.message}
    </div>
  );
}

EventPreview.propTypes = {
  event: PropTypes.object.isRequired,
};

export default EventPreview;
