import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'normalize.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import StartGame from './scenes/StartGame';
import Crab from './components/Crab';
import PleaseRotate from './scenes/Rotate';
import GameBoard from './scenes/GameBoard';

import sand from './assets/images/sand.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStatus: 'ready',
      fullscreen: false,
      rotate: false,
      screenWidth: window.screen.width,
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.enterFullscreen = this.enterFullscreen.bind(this);
    this.setRotation = this.setRotation.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  componentDidMount() {
    document.title = 'Crab Trap';
    this.setRotation();
    window.addEventListener('resize', this.setRotation);
  }

  setRotation() {
    if (window.screen.orientation.type.includes('portrait')) return this.setState({ rotate: true });
    return this.setState({ rotate: false });
  }

  enterFullscreen(e) {
    e.preventDefault();

    if (document.webkitIsFullScreen) {
      setTimeout(() => {
        document.webkitExitFullscreen();
      }, 750);
      return this.setState({ fullscreen: false });
    }

    const main = document.querySelector('main');
    setTimeout(() => main.webkitRequestFullscreen(), 750);

    return this.setState({ fullscreen: true });
  }

  startGame(e) {
    this.enterFullscreen(e);
  }

  render() {
    const {
      screenWidth,
      rotate,
      fullscreen,
      hidingSpots,
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
        <TransitionGroup className="scenes">
          {rotate ? (
            <CSSTransition classNames="scene" timeout={{ enter: 2000, exit: 2000 }}>
              <PleaseRotate />
            </CSSTransition>
          ) : null}
          {!rotate && fullscreen
            ? (
              <CSSTransition component="div" classNames="game-board" timeout={{ enter: 2000, exit: 500 }}>
                <div>
                  <GameBoard
                    hidingSpots={hidingSpots}
                    hidingSpotWidth={hidingSpotWidth}
                    enterFullscreen={this.enterFullscreen}
                    fullscreen={fullscreen}
                    screenWidth={screenWidth}
                  />
                </div>
              </CSSTransition>
            )
            : null
          }
          {!fullscreen && !rotate
            ? (
              <CSSTransition classNames="scene" timeout={{ enter: 2000, exit: 500 }}>
                <StartGame
                  startGame={this.startGame}
                  screenWidth={screenWidth}
                />
              </CSSTransition>
            )
            : null}
        </TransitionGroup>
        <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" />
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

const colors = {
  darkOrange: '#FF5700',
  orange: '#FF8E00',
  gold: '#FFB828',
  brown: '#8D4A00',
  darkBrown: '#5a2f00',
};

export default styled(App)`
margin: 0;
padding: 0;
background: url(${sand});
display: flex;
flex-direction: column;
width: 100vw;
height: 100vh;

h1, h2 {
  color: ${colors.darkOrange};
  text-shadow: 0.125rem 0.125rem 0 ${colors.darkBrown};
  font-family: 'Lobster', Arnoldboecklin, cursive;
}

h1 {
  font-size: 4rem;
}
h2 {
  font-size: 3rem;
}

> * {
  flex: 0 1;
}

#startGame {
  background: url(${sand});
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

.buttons {
  position: absolute;
  z-index: 10000;
  top: 0;
  left: 0;
}

button {
  appearance: none;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem;
  background-color: ${colors.orange};
  color: white;
  outline: none;
  margin: 0.25rem;
  cursor: pointer;
  transition: background-color 0.25s;

  &:hover {
    background-color: ${colors.darkOrange};
  }

  &:active, &:active:hover {
    background-color: ${colors.gold};
  }

  &:disabled {
    background-color: #999;
  }

  svg.fa-expand, svg.fa-compress, svg.fa-walking {
    width: 1rem;
    height: 1rem;
  }
}
`;
