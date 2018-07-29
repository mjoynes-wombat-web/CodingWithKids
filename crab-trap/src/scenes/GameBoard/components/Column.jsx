import React from 'react';
import PropTypes from 'prop-types';

import HidingSpot from './HidingSpot';

const Column = ({ col, hidingSpotWidth }) => (
  <div className="column">
    {col.map(row => <HidingSpot row={row} hidingSpotWidth={hidingSpotWidth} key={row.id} />)}
  </div>
);

Column.propTypes = {
  col: PropTypes.arrayOf(PropTypes.shape({ row: PropTypes.object })).isRequired,
  hidingSpotWidth: PropTypes.number.isRequired,
};

export default Column;
