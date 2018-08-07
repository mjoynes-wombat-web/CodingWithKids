import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../components/Button';

const MultiPlayerButton = ({ onClick }) => (
  <Button onClick={onClick} disabled>
      Multi Player
  </Button>
);

MultiPlayerButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MultiPlayerButton;
