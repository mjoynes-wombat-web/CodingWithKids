import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Crab from '../../components/Crab';
import SinglePlayerButton from './components/SinglePlayerButton';
// import MultiPlayerButton from './components/MultiPlayerButon';

const UnstyledStartGame = ({
  className, startGame, screenWidth,
}) => (
  <div className={className} id="startGame">
    <div className="ui">
      <h1>
        Crab Trap
      </h1>
      <SinglePlayerButton onClick={startGame} />
      {/* <MultiPlayerButton disabled /> */}
      <p className="note">
        Multiplayer Coming Soon!
      </p>
    </div>
    <Crab
      id="startScreenCrab"
      display
      screenWidth={screenWidth}
    />
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
align-items: center;
justify-content: space-around;
min-height: 100vh;
min-width: 100vw;

&.start-game-exit {
  opacity: 1;
  transition: 0.5s ease-in-out 0.25s;
  .crab-wrapper {
    transition: 0.75s ease-in-out !important;
    .left-legs {
      animation-direction: normal !important;
    }
    .right-legs {
      animation-direction: reverse !important;
    }
  }
  &.start-game-exit-active {
    opacity: 0;
    .crab-wrapper {
      transform: translateX(150%) !important;
    }
  }
}

&.start-game-enter {
  opacity: 0;
  transition: 0.5s ease-in-out 1.75s;
  .left-legs {
      animation-direction: reverse !important;
    }
  .right-legs {
    animation-direction: normal !important;
  }
  .crab-wrapper {
    transition: 0.75s ease-in-out 1.5s !important;
    transform: translateX(150%) !important;
  }
  &.start-game-enter-active {
    opacity: 1;
    .crab-wrapper {
      transform: translateX(0%) !important;
    }
  }
}
&.start-game-enter-done {
  .left-legs {
    animation-direction: reverse !important;
  }
  .right-legs {
    animation-direction: normal !important;
  }
}

.crab-wrapper {
  width: 60%;
  position: relative;
  bottom: 0;

  .crab {
    min-width: 175%!important;
    max-height: 95vh;
  }
}

.ui {
  text-align: center;
  min-height: 100vh;
  z-index: 1000;
  margin: 0 3rem;
  padding: 5% 0;

  .note {
    font-size: 1.5rem;
    margin: 1.8755rem;
  }
}
`;

export default StartGame;
