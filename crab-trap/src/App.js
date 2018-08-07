import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'normalize.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import StartGame from './scenes/StartGame';
import Crab from './components/Crab';
import PleaseRotate from './scenes/Rotate';
import GameBoard from './scenes/GameBoard';

import colors from './helpers/colors';

import sand from './assets/images/sand.jpg';

import './assets/styles/index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullscreen: false,
      gameStarted: false,
      rotate: false,
      screenWidth: window.screen.width,
    };

    this.enterFullscreen = this.enterFullscreen.bind(this);
    this.checkScreenState = this.checkScreenState.bind(this);
    this.startGame = this.startGame.bind(this);
    this.exitGame = this.exitGame.bind(this);
  }

  componentDidMount() {
    this.checkScreenState();
    window.addEventListener('resize', this.checkScreenState);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkScreenState);
  }

  checkScreenState() {
    const rotate = window.screen.orientation.type.includes('portrait');
    const fullscreen = document.webkitIsFullScreen;
    this.setState({ rotate, fullscreen });
  }

  exitGame(e) {
    e.preventDefault();

    if (document.webkitIsFullScreen) {
      setTimeout(() => {
        document.webkitExitFullscreen();
      }, 750);
    }
    return this.setState({ fullscreen: false, gameStarted: false });
  }

  enterFullscreen(e) {
    e.preventDefault();

    const main = document.querySelector('main');
    setTimeout(() => main.webkitRequestFullscreen(), 1000);

    return this.setState({ gameStarted: true, fullscreen: true });
  }

  startGame(e) {
    this.enterFullscreen(e);
  }

  render() {
    const {
      screenWidth,
      fullscreen,
      gameStarted,
      hidingSpots,
      rotate,
      hidingSpotWidth,
    } = this.state;
    const { className } = this.props;
    return (
      <main className={className}>
        <Crab
          id="crab"
          hidden
          screenWidth={screenWidth}
          display
        />
        {rotate ? <PleaseRotate /> : null}
        <TransitionGroup className="scenes">
          {!gameStarted
            ? (
              <CSSTransition classNames="start-game" timeout={{ enter: 2250, exit: 1000 }}>
                <StartGame
                  startGame={this.startGame}
                  screenWidth={screenWidth}
                />
              </CSSTransition>
            )
            : null
          }
          {gameStarted
            ? (
              <CSSTransition component="div" classNames="game-board" timeout={{ enter: 1000, exit: 1000 }}>
                <div>
                  <GameBoard
                    hidingSpots={hidingSpots}
                    hidingSpotWidth={hidingSpotWidth}
                    enterFullscreen={this.enterFullscreen}
                    exitGame={this.exitGame}
                    fullscreen={fullscreen}
                    screenWidth={screenWidth}
                  />
                </div>
              </CSSTransition>
            )
            : null
            }
        </TransitionGroup>
        <link href="https://fonts.googleapis.com/css?family=Lobster|Lobster+Two" rel="stylesheet" />
      </main>
    );
  }
}

App.propTypes = {
  className: PropTypes.string,
};

App.defaultProps = {
  className: '',
};

export default styled(App)`
margin: 0;
padding: 0;
background: url(${sand});
display: flex;
flex-direction: column;
width: 100vw;
height: 100vh;
overflow: hidden;

h1, h2 {
  color: ${colors.darkOrange};
  text-shadow: 0.125rem 0.125rem 0 ${colors.darkBrown};
  font-family: 'Lobster', Arnoldboecklin, cursive;
}

h1 {
  font-size: 6rem;
  margin: 0 0 1.75rem 0;
}
h2 {
  font-size: 3rem;
}

p {
  font-size: 1rem;
  color: ${colors.brown};
  font-family: 'Lobster Two', Arnoldboecklin, cursive;
}

> * {
  flex: 0 1;
}

#startGame {
  position: relative;
  z-index: 10000;
  min-height: 100vh;
}

.scenes {
  position: relative;
  .game-board-enter {
    * {
      opacity: 0;
      transition: opacity 0.5s linear 1.5s;
    }
    &.game-board-enter-active * {
      opacity: 1;
    }
  }

  .game-board-exit {
    * {
      opacity: 1;
      transition: opacity 0.5s linear;
    }
    &.game-board-exit-active * {
      opacity: 0;
    }
  }
  .scene-enter {
    perspective: 1000;
    transition: all 0.5s linear 1.5s;
    transform: rotateX(180deg);
    opacity: 0;
    &.scene-enter-active {
      transform: rotateX(0deg);
      opacity: 1;
    }
  }
  .scene-exit {
    perspective: 1000;
    transition: all 0.5s linear;
    opacity: 1;
    transform: rotateX(0deg);
    &.scene-exit-active {
      opacity: 0;
      transform: rotateX(180deg);
    }
  }
}

button {
  border: none;
  outline: none;
  cursor: pointer;
}
`;
