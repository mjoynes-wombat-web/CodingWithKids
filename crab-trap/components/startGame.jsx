import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Crab from './crab';

const UnstyledStartGame = ({
  className, startGame, screenWidth,
}) => (
  <div className={className} id="startGame">
    <h1>Crab Trap</h1>
    <Crab
      id="startScreenCrab"
      display
      screenWidth={screenWidth}
    />
    <button onClick={startGame}>Start Game</button>
  </div>
);

UnstyledStartGame.propTypes = {
  className: PropTypes.string,
  startGame: PropTypes.func.isRequired,
  screenWidth: PropTypes.number.isRequired,
};

UnstyledStartGame.defaultProps = {
  className: '',
};

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
