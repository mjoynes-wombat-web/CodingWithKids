import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './assets/styles/index.scss';

import StartGame from './scenes/StartGame';

import Crab from './components/crab';
import PleaseRotate from './scenes/Rotate';
import GameBoard from './scenes/GameBoard';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty: 1,
      fullscreen: false,
      gameInit: false,
      hidingSpots: [],
      rotate: false,
      points: 0,
      screenWidth: window.screen.width,
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.initGame = this.initGame.bind(this);
    this.enterFullscreen = this.enterFullscreen.bind(this);
    this.setHidable = this.setHidable.bind(this);
    this.setRotation = this.setRotation.bind(this);
    this.startGame = this.startGame.bind(this);
    this.addPoint = this.addPoint.bind(this);
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

  setHidable(spots) {
    const { difficulty } = this.state;
    const newSpots = spots;
    let percentHidden = 0;
    const numCols = newSpots.length;
    const numRows = newSpots[0].length;
    const minPercent = Math.min(0.5 * Math.max(difficulty * 0.33, 1), 1);
    const maxPercent = Math.min(0.66 * Math.max(difficulty * 0.33, 1), 1);
    for (let i = 0; i < numCols; i += 1) {
      for (let x = 0; x < numRows; x += 1) {
        if ((percentHidden + (1 / (numCols * numRows))) >= maxPercent) return newSpots;
        const isHidden = (Math.random() * difficulty > 0.66);
        newSpots[i][x].hideable = isHidden;
        if (isHidden) { percentHidden += (1 / (numCols * numRows)); }
      }
    }
    if (percentHidden < minPercent) return this.setHidable(newSpots);
    return newSpots;
  }

  initGame() {
    const { difficulty } = this.state;
    const crab = document.getElementById('crab');
    const crabDimensions = [crab.clientWidth, crab.clientHeight];
    const shellDimensions = crab.querySelector('.shell').getBoundingClientRect();
    const cols = Math.floor(window.screen.width
        / Math.max(
          shellDimensions.width * Math.round((5 - (difficulty / 1.75))),
          (shellDimensions.width * 2),
        ));
    const rows = Math.floor(window.screen.height / Math.max(
      shellDimensions.height
        * Math.round(6 - (difficulty / 1.75)),
      (shellDimensions.height * 4),
    ));

    const hidingSpots = [];
    for (let x = 0; x < cols; x += 1) {
      const colWidth = window.screen.width / cols;
      const colCenter = ((colWidth / 2) + (colWidth * (x + 1))) - colWidth;
      const colGroup = [];

      for (let i = 0; i < rows; i += 1) {
        const rowHeight = window.screen.height / rows;
        const rowCenter = ((rowHeight / 2) + (rowHeight * (i + 1))) - rowHeight;
        const spot = {
          coords: [
            colCenter,
            rowCenter,
          ],
        };
        colGroup.push(spot);
      }
      hidingSpots.push(colGroup);
    }
    return this.setState({
      hidingSpots: this.setHidable(hidingSpots),
      hidingSpotWidth: shellDimensions.width,
      crabDimensions,
      gameInit: true,
    });
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
    this.initGame(e);
  }

  addPoint() {
    const { points, difficulty } = this.state;
    const updatedPoints = points + 1;
    if (Math.ceil(points / 10) > difficulty) {
      this.setState({ points, difficulty: Math.ceil(points / 10) });
      return this.initGame();
    }
    return this.setState({ points: updatedPoints });
  }

  render() {
    const {
      screenWidth,
      rotate,
      fullscreen,
      gameInit,
      hidingSpots,
      hidingSpotWidth,
      crabDimensions,
      difficulty,
      points,
    } = this.state;
    const { className } = this.props;
    return (
      <main className={className}>
        <Crab
          id="crab"
          className="crab hidden"
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
        {!rotate && fullscreen && gameInit
          ? (
            <GameBoard
              hidingSpots={hidingSpots}
              hidingSpotWidth={hidingSpotWidth}
              enterFullscreen={this.enterFullscreen}
              fullscreen={fullscreen}
              addPoint={this.addPoint}
              crabDimensions={crabDimensions}
              difficult={difficulty}
              screenWidth={screenWidth}
            />
          )
          : null
        }
        <div className="state">
          <h2>
            Crab State
          </h2>
          <div className="details">
            <p>
              Game Difficulty:
              {difficulty}
            </p>
            <p>
              Fullscreen:
              {fullscreen.toString()}
            </p>
            <p>
              Game Init:
              {gameInit.toString()}
            </p>
            <p>
              Rotation:
              {rotate.toString()}
            </p>
            <p>
              Points:
              {points}
            </p>
          </div>
        </div>
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
