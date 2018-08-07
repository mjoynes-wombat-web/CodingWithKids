import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../components/Button';

const SinglePlayerButton = ({ onClick }) => (
  <Button onClick={onClick}>
      Single Player
  </Button>
);

SinglePlayerButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SinglePlayerButton;
