import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import turtle from '../../../../assets/images/turtle.png';

const UnstyledTurtle = ({ className }) => (
  <div className={className}>
    <img src={turtle} alt="Sea Turtle" />
  </div>
);

UnstyledTurtle.propTypes = {
  className: PropTypes.string,
};

UnstyledTurtle.defaultProps = {
  className: '',
};

const Turtle = styled(UnstyledTurtle)`
  img {
    width: 120%;
    pointer-events: all;
    position: absolute;
    left: -10%;
    margin-top: 17%;
  }
`;

export default Turtle;
