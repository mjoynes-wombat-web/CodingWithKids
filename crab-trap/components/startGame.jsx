import React from 'react';
import styled from 'styled-components';

import Crab from './crab';

const UnstyledStartGame = ({ className, startGame, screenWidth, width }) => (
  <div className={className} id="startGame">
    <Crab
      display={true}
      screenWidth={screenWidth}
      width={width}/>
    <button onClick={startGame}>Start Game</button>
  </div>
);

const StartGame = styled(UnstyledStartGame)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
min-height: 100vh;
min-width: 100vw;

.crab-wrapper {
  width: 75%;
  position: static;
  .crab{
    width: 100%;
  }
}

button {
  color: white;
  font-weight: bold;
  font-size: 2rem;
  line-height: initial;
  padding: 0.5rem 0.75rem;
}
`;

export default StartGame;
