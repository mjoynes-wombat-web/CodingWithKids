import React from 'react';
import PropTypes from 'prop-types';

import Turtle from './spots/Turtle';
import SandCastle from './spots/SandCastle';
import Rock from './spots/Rock';
import DriftWood from './spots/DriftWood';

const pickSpot = (hidingSpotWidth) => {
  const spot = Math.floor(Math.random() * 4);
  const spotProps = {
    className: 'hiding-spot',
    style: {
      width: `${hidingSpotWidth + 20}px`,
      height: `${(hidingSpotWidth * 1.25) + 20}px`,
    },
  };
  switch (spot) {
    case 0:
      return <Turtle {...spotProps} />;
    case 1:
      return <SandCastle {...spotProps} />;
    case 2:
      return <Rock {...spotProps} />;
    case 3:
      return <DriftWood {...spotProps} />;
    default:
      return (<Rock {...spotProps} />);
  }
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
