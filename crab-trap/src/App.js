import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'normalize.css';

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
      document.webkitExitFullscreen();
      return this.setState({ fullscreen: false });
    }

    const main = document.querySelector('main');
    main.webkitRequestFullscreen();

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
        {rotate ? <PleaseRotate /> : null}
        {!fullscreen && !rotate
          ? (
            <StartGame
              startGame={this.startGame}
              screenWidth={screenWidth}
            />
          )
          : null}
        {!rotate && fullscreen
          ? (
            <GameBoard
              hidingSpots={hidingSpots}
              hidingSpotWidth={hidingSpotWidth}
              enterFullscreen={this.enterFullscreen}
              fullscreen={fullscreen}
              screenWidth={screenWidth}
            />
          )
          : null
        }
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

    h1 {
      color: ${colors.darkOrange};
      text-shadow: 0.125rem 0.125rem 0 ${colors.darkBrown};
      font-size: 4rem;
      font-family: 'Lobster', Arnoldboecklin, cursive;
    }
    
    > * {
      flex: 0 1;
    }

    .grid {
      position: absolute;
      min-width: 100vw;
      min-height: 100vh;
      display: flex;
      z-index: 1000;
      pointer-events: none;

      .column {
        flex: 1;
        display: flex;
        flex-direction: column;

        .row {
          flex: 1;
          padding: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;

          .hiding-spot {
            width: 12vw;
            height: 100%;
            background-color: red;
            opacity: 0.25;
            pointer-events: all;
          }
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
    .state {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      flex: 1;
      position: absolute;
      bottom: 0;
      width: 100%;
      * { margin: 0.125rem; }
      h2 { font-size: 0.75rem; }
      .details {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        text-align: left;
        p {
          font-size: 0.625rem;
          flex: 1;
        }
      }
    }
`;
