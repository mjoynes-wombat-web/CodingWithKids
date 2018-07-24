import React from 'react';
import PropTypes from 'prop-types';

const HidingSpot = ({ row, hidingSpotWidth }) => (
  <div className="row">
    {row.hideable
      ? (
        <div
          className="hiding-spot"
          style={{
            width: `${hidingSpotWidth + 20}px`,
            height: `${(hidingSpotWidth * 1.25) + 20}px`,
          }}
        />
      )
      : null
}
  </div>
);

HidingSpot.propTypes = {

};

export default HidingSpot;
