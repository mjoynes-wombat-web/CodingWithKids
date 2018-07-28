import React from 'react';
import PropTypes from 'prop-types';

import Turtle from './spots/Turtle';
import SandCastle from './spots/SandCastle';

const pickSpot = (hidingSpotWidth) => {
  if (Math.random() > 0.5) {
    return (
      <Turtle
        className="hiding-spot"
        style={{
          width: `${hidingSpotWidth + 20}px`,
          height: `${(hidingSpotWidth * 1.25) + 20}px`,
        }}
      />
    );
  }
  return (
    <SandCastle
      className="hiding-spot"
      style={{
        width: `${hidingSpotWidth + 20}px`,
        height: `${(hidingSpotWidth * 1.25) + 20}px`,
      }}
    />
  );
};

const HidingSpot = ({ row, hidingSpotWidth }) => (
  <div className="row">
    {row.hideable
      ? pickSpot(hidingSpotWidth)
      : null
}
  </div>
);

HidingSpot.propTypes = {
  row: PropTypes.shape({
    hideable: PropTypes.bool,
  }).isRequired,
  hidingSpotWidth: PropTypes.number.isRequired,
};

export default HidingSpot;
