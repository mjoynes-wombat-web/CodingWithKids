import React from 'react';
import styled from 'styled-components';

const UnstyledRotate = () => (
  <div id="pleaseRotate">
    <h1>
      Please Rotate Your Screen
    </h1>
  </div>
);

const Rotate = styled(UnstyledRotate)`
`;

export default Rotate;
