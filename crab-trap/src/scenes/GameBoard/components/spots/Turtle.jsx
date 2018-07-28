import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import turtle from '../../../../assets/images/turtle.png';

const UnstyledTurtle = ({ className }) => (
  <div
    className={className}
    alt="Sea Turtle"
  />
);

UnstyledTurtle.propTypes = {
  className: PropTypes.string,
};

UnstyledTurtle.defaultProps = {
  className: '',
};

const Turtle = styled(UnstyledTurtle)`
  background-image: url(${turtle});
`;

export default Turtle;
