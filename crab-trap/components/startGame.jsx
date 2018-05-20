import React from 'react';
import styled from 'styled-components';

import CrabSVG from '-!svg-react-loader!../assets/design/crab-final.svg';

const UnstyledStartGame = ({ className, startGame }) => (
  <div id="startGame">
    <CrabSVG />
    <button onClick={startGame}>Ready Player One</button>
  </div>
);

const StartGame = styled(UnstyledStartGame)`
`;

export default StartGame;
