import React, { Component } from 'react';
import FAIcon from '@fortawesome/react-fontawesome';
import faCompress from '@fortawesome/fontawesome-pro-light/faCompress';
import faExpand from '@fortawesome/fontawesome-pro-light/faExpand';
import PropTypes from 'prop-types';

import './assets/styles/index.scss';

import Crab from './components/crab';
import PleaseRotate from './components/pleaseRotate';
import StartGame from './components/startGame';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inch: null,
      difficulty: 1,
      fullscreen: false,
      gameInit: false,
      hidingSpots: [],
      rotate: false,
      points: 0,
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
    const inch = document.getElementById('inch').clientHeight;
    return this.setState({ inch, screenWidth: window.screen.width });
  }

  setRotation() {
    if (window.screen.orientation.type.includes('portrait')) return this.setState({ rotate: true });
    return this.setState({ rotate: false });
  }

  setHidable(spots) {
    const newSpots = spots;
    let percentHidden = 0;
    const numCols = newSpots.length;
    const numRows = newSpots[0].length;
    const minPercent = Math.min(0.5 * Math.max(this.state.difficulty * 0.33, 1), 1);
    const maxPercent = Math.min(0.66 * Math.max(this.state.difficulty * 0.33, 1), 1);
    for (let i = 0; i < numCols; i += 1) {
      for (let x = 0; x < numRows; x += 1) {
        if ((percentHidden + (1 / (numCols * numRows))) >= maxPercent) return newSpots;
        const isHidden = (Math.random() * this.state.difficulty > 0.66);
        newSpots[i][x].hideable = isHidden;
        if (isHidden) { percentHidden += (1 / (numCols * numRows)); }
      }
    }
    if (percentHidden < minPercent) return this.setHidable(newSpots);
    return newSpots;
  }

  initGame() {
    const crab = document.getElementById('crab');
    const crabDimensions = [crab.clientWidth, crab.clientHeight];
    const shellDimensions = crab.querySelector('.shell').getBoundingClientRect();
    const cols = Math.floor(window.screen.width
        / Math.max(
          shellDimensions.width * Math.round((5 - (this.state.difficulty / 1.75))),
          (shellDimensions.width * 2),
        ));
    const rows = Math.floor(window.screen.height / Math.max(
      shellDimensions.height
        * Math.round(6 - (this.state.difficulty / 1.75)),
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
    const points = this.state.points + 1;
    if (Math.ceil(points / 10) > this.state.difficulty) {
      this.setState({ points, difficulty: Math.ceil(points / 10) });
      return this.initGame();
    }
    return this.setState({ points });
  }

  render() {
    return (
      <main className={this.props.className}>
        <div id="inch" />
        <Crab
          id="crab"
          className="crab hidden"
          width={this.state.inch}
          screenWidth={this.state.screenWidth}
          display
        />
        {this.state.rotate ? <PleaseRotate /> : null}
        {!this.state.fullscreen && !this.state.rotate
          ? <StartGame
            startGame={this.startGame}
            screenWidth={this.state.screenWidth}
            width={this.state.inch}
          />
          : null}
        {!this.state.rotate && this.state.fullscreen && this.state.gameInit
          ? (
            <div id="gameBoard">
              <div className="grid">
                {this.state.hidingSpots.map(col => (
                  <div className="column">
                    {col.map(row => (
                      <div className="row">
                        {row.hideable
                          ? <div
                            className="hiding-spot"
                            style={`
                              width: ${this.state.hidingSpotWidth + 20}px;
                              height: ${(this.state.hidingSpotWidth * 1.25) + 20}px;
                            `}
                          />
                          : null
                        }
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="buttons">
                <button onClick={this.enterFullscreen}>
                  {this.state.fullscreen
                    ? <FAIcon icon={faCompress} />
                    : <FAIcon icon={faExpand} />
                  }
                </button>
              </div>
              <Crab
                id="testCrab"
                addPoint={this.addPoint}
                hidingSpots={this.state.hidingSpots}
                crabDimensions={this.state.crabDimensions}
                width={this.state.inch}
                difficulty={this.state.difficulty}
                inch={this.state.inch}
                screenWidth={this.state.screenWidth}
              />
              <div className="state">
                <h2>Crab State</h2>
                <div className="details">
                  <p>Game Difficulty: {this.state.difficulty}</p>
                  <p>Fullscreen: {this.state.fullscreen.toString()}</p>
                  <p>Game Init: {this.state.gameInit.toString()}</p>
                  <p>Rotation: {this.state.rotate.toString()}</p>
                  <p> Points: {this.state.points}</p>
                </div>
              </div>
            </div>
          )
          : null
        }
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
