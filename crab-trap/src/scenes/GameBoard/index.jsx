import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import faCompress from '@fortawesome/fontawesome-pro-light/faCompress';
import faExpand from '@fortawesome/fontawesome-pro-light/faExpand';

import Crab from '../../components/Crab';
import Row from './components/Row';

class GameBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      difficulty: 1,
      points: 0,
      hidingSpots: [],
      numCrabs: 1,
      boardInit: false,
    };

    this.setHideable = this.setHideable.bind(this);
    this.initBoard = this.initBoard.bind(this);
    this.addPoint = this.addPoint.bind(this);
  }

  componentDidMount() {
    this.initBoard();
  }

  setHideable(spots) {
    const { difficulty } = this.state;
    const newSpots = spots;
    let percentHidden = 0;
    const numCols = newSpots.length;
    const numRows = newSpots[0].length;
    const minPercent = Math.min(0.5 * Math.max(difficulty * 0.33, 1), 0.85);
    const maxPercent = Math.min(0.66 * Math.max(difficulty * 0.33, 1), 0.92);
    for (let i = 0; i < numCols; i += 1) {
      for (let x = 0; x < numRows; x += 1) {
        if ((percentHidden + (1 / (numCols * numRows))) >= maxPercent) return newSpots;
        const isHidden = (Math.random() * difficulty > 0.66);
        newSpots[i][x].hideable = isHidden;
        if (isHidden) { percentHidden += (1 / (numCols * numRows)); }
      }
    }
    if (percentHidden < minPercent) return this.setHideable(newSpots);
    return newSpots;
  }

  initBoard() {
    const { difficulty } = this.state;
    const crab = document.getElementById('crab');
    const crabBounding = crab.getBoundingClientRect();
    const crabDimensions = [crabBounding.width, crabBounding.height];
    const shell = crab.querySelector('.shell');
    const shellDimensions = shell.getBoundingClientRect();

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
      hidingSpots: this.setHideable(hidingSpots),
      crabDimensions,
      hidingSpotWidth: shellDimensions.width,
      boardInit: true,
    });
  }

  addPoint() {
    const { points, difficulty } = this.state;
    const updatedPoints = points + 1;
    if (Math.ceil(points / 10) > difficulty) {
      this.setState({ points, difficulty: Math.ceil(points / 10) });
      return this.initBoard();
    }
    return this.setState({ points: updatedPoints });
  }

  render() {
    const {
      enterFullscreen,
      fullscreen,
      screenWidth,
    } = this.props;

    const {
      crabDimensions,
      difficulty,
      hidingSpots,
      hidingSpotWidth,
      boardInit,
    } = this.state;

    if (!boardInit) {
      return (
        <h1>
          Loading
        </h1>
      );
    }

    return (
      <div id="gameBoard">
        <div className="grid">
          {hidingSpots.map((col, i) => <Row col={col} hidingSpotWidth={hidingSpotWidth} key={`hidingRow${i}`} index={i} />)}
        </div>
        <div className="buttons">
          <button type="button" onClick={enterFullscreen}>
            {fullscreen
              ? <FAIcon icon={faCompress} />
              : <FAIcon icon={faExpand} />
      }
          </button>
        </div>
        <Crab
          id="testCrab"
          addPoint={this.addPoint}
          hidingSpots={hidingSpots}
          crabDimensions={crabDimensions}
          difficulty={difficulty}
          screenWidth={screenWidth}
        />
      </div>
    );
  }
}

GameBoard.propTypes = {
  enterFullscreen: PropTypes.func.isRequired,
  fullscreen: PropTypes.bool.isRequired,
  screenWidth: PropTypes.number.isRequired,
};

export default GameBoard;
