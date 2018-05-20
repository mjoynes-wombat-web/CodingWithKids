import React from 'react';
import styled from 'styled-components';

const UnstyledPleaseRotate = ({ className }) => (
  <div id="pleaseRotate">
    <h1>Please Rotate Your Screen</h1>
  </div>
);

const PleaseRotate = styled(UnstyledPleaseRotate)`
`;

export default PleaseRotate;
