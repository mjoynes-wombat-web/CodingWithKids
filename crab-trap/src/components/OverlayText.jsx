import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const UnstyledRotate = ({ className, text, children }) => (
  <div className={`overlay ${className}`}>
    <h2>
      {text || children}
    </h2>
  </div>
);

const Rotate = styled(UnstyledRotate)`
&.overlay {
position: absolute;
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
z-index: 50000;
background-color: rgba(255, 255, 255, 0.25);

  h2 {
    font-size: 12rem;
    text-align: center;
    margin: 2rem;
  }
}
`;

UnstyledRotate.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string,
  children: PropTypes.string,
};

UnstyledRotate.defaultProps = {
  text: '',
  children: '',
};

export default Rotate;
