import React from 'react';
import PropTypes from 'prop-types';

import Turtle from './spots/Turtle';
import SandCastle from './spots/SandCastle';
import Rock from './spots/Rock';
import DriftWood from './spots/DriftWood';

const getSpot = (type, hidingSpotWidth) => {
  const spots = {
    turtle: Turtle,
    sandCastle: SandCastle,
    rock: Rock,
    driftWood: DriftWood,
  };
  const spotProps = {
    className: 'hiding-spot',
    style: {
      width: `${hidingSpotWidth + 20}px`,
      height: `${(hidingSpotWidth * 1.25) + 20}px`,
    },
  };
  const Spot = spots[type];
  return <Spot {...spotProps} />;
};

const HidingSpot = ({ row, hidingSpotWidth }) => (
  <div className="row" style={{ maxWidth: `${hidingSpotWidth}px` }}>
    {row.hideable
      ? getSpot(row.type, hidingSpotWidth)
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
