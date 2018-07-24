import React from 'react';
import PropTypes from 'prop-types';

import HidingSpot from './HidingSpot';

const Row = ({ col, hidingSpotWidth, index }) => (
  <div className="column">
    {col.map(row => <HidingSpot row={row} hidingSpotWidth={hidingSpotWidth} key={`hidingRow${index}:${row.coords.toString()}`} />)}
  </div>
);

Row.propTypes = {

};

export default Row;
