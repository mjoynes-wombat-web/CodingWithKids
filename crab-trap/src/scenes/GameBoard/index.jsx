import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

import Crab from '../../components/Crab';
import Column from './components/Column';
import Menu from './components/Menu';
import Paused from './components/Paused';

function pickSpot() {
  const spot = Math.floor(Math.random() * 6);
  switch (spot) {
    case 0:
    case 1:
      return 'rock';
    case 2:
    case 3:
      return 'driftWood';
    case 4:
      return 'turtle';
    case 5:
      return 'sandCastle';
    default:
      return 'rock';
  }
}

class UnstyledGameBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      difficulty: 1,
      score: 0,
      hidingSpots: [],
      numCrabs: 3,
      boardInit: false,
      paused: false,
    };

    this.setHideable = this.setHideable.bind(this);
    this.initBoard = this.initBoard.bind(this);
    this.initCrabs = this.initCrabs.bind(this);
    this.addPoint = this.addPoint.bind(this);
    this.updateCrabs = this.updateCrabs.bind(this);
    this.pause = this.pause.bind(this);
    this.unpause = this.unpause.bind(this);
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
        if (isHidden) {
          newSpots[i][x].type = pickSpot();
          percentHidden += (1 / (numCols * numRows));
        }
      }
    }
    if (percentHidden < minPercent) return this.setHideable(newSpots);
    return newSpots;
  }

  initBoard(newDifficulty, updatedScore) {
    const { difficulty, score } = this.state;
    const crab = document.getElementById('crab');
    const crabBounding = crab.getBoundingClientRect();
    const crabDimensions = [crabBounding.width, crabBounding.height];
    const shell = crab.querySelector('.shell');
    const shellDimensions = shell.getBoundingClientRect();
    const numCrabs = Math.min(Math.ceil((newDifficulty || difficulty) * 0.26) + 2, 6);

    const cols = Math.floor(window.screen.width
      / Math.max(
        shellDimensions.width * Math.round((5 - (difficulty / 1.75))),
        (shellDimensions.width * 3),
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
          id: uniqueId('hidingSpot'),
        };
        colGroup.push(spot);
      }
      hidingSpots.push(colGroup);
    }

    this.initCrabs(numCrabs);

    return this.setState({
      hidingSpots: this.setHideable(hidingSpots),
      crabDimensions,
      hidingSpotWidth: shellDimensions.width * 1.5,
      boardInit: true,
      score: updatedScore || score,
      difficulty: newDifficulty || difficulty,
      numCrabs,
    });
  }

  initCrabs(newNumCrabs) {
    const { numCrabs } = this.state;
    const crabs = [...Array(newNumCrabs || numCrabs)].map(() => uniqueId('crab'));

    this.setState({ crabs });
  }

  updateCrabs(currentCrabs) {
    const { crabs } = this.state;
    const updatedCrabs = [...currentCrabs];
    if (updatedCrabs.length < crabs.length) [...Array(crabs.length - updatedCrabs.length)].forEach(() => updatedCrabs.push(uniqueId('crab')));
    return updatedCrabs;
  }

  addPoint(id) {
    const {
      score, difficulty, crabs, lastCrab,
    } = this.state;
    if (lastCrab === id) return null;
    const newCrabs = [...crabs];
    const crabIndex = newCrabs.findIndex(crab => crab === id);
    newCrabs.splice(crabIndex, 1);
    const updatedCrabs = this.updateCrabs(newCrabs);
    const updatedScore = score + 1;
    const newDifficulty = Math.ceil(updatedScore / 9.99);
    if (newDifficulty > difficulty) {
      return this.initBoard(newDifficulty, updatedScore);
    }
    return this.setState({ score: updatedScore, crabs: updatedCrabs, lastCrab: id });
  }

  unpause(e) {
    const { enterFullscreen, fullscreen } = this.props;
    if (!fullscreen) enterFullscreen(e);
    return this.setState({ paused: false });
  }

  pause() {
    return this.setState({ paused: true });
  }

  render() {
    const {
      exitGame,
      screenWidth,
      className,
      fullscreen,
    } = this.props;

    const {
      crabDimensions,
      difficulty,
      hidingSpots,
      hidingSpotWidth,
      boardInit,
      crabs,
      score,
      paused,
    } = this.state;

    if (!boardInit) {
      return (
        <h1>
          Loading
        </h1>
      );
    }

    return (
      <div id="gameBoard" className={className}>
        {paused || !fullscreen ? <Paused /> : null}
        <TransitionGroup component="h2" className="score">
          Score:
          <CSSTransition component="span" key={score} classNames="number" timeout={{ enter: 750, exit: 500 }}>
            <span className="number">
              {score}
            </span>
          </CSSTransition>
        </TransitionGroup>
        <div className="grid">
          {hidingSpots.map(col => <Column col={col} hidingSpotWidth={hidingSpotWidth} key={uniqueId('hidingRow')} />)}
        </div>
        <div className="buttons">
          <Menu
            paused={!fullscreen || paused}
            pause={this.pause}
            unpause={this.unpause}
            exit={exitGame}
          />
        </div>
        <TransitionGroup className="crabs">
          {crabs.map(crab => (
            <CSSTransition component="Crab" key={`${crab}Transition`} classNames="crab-transition" timeout={{ enter: 0, exit: 1250 }}>
              <Crab
                id={crab}
                key={crab}
                gamePaused={!fullscreen || paused}
                addPoint={this.addPoint}
                hidingSpots={hidingSpots}
                crabDimensions={crabDimensions}
                difficulty={difficulty}
                screenWidth={screenWidth}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  }
}

UnstyledGameBoard.propTypes = {
  enterFullscreen: PropTypes.func.isRequired,
  screenWidth: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  fullscreen: PropTypes.bool.isRequired,
};

const GameBoard = styled(UnstyledGameBoard)`
.crab-transition-exit {
  opacity: 1;
  transition: all 0.5s ease-in-out 0.75s !important;
  &.crab-transition-exit-active {
    opacity: 0;
  }
}
.crab-transition-exit.paused {
  transition: all 0.5s ease-in-out 0.75s !important;
  * {
    animation-play-state: paused;
  }

  .bucket {
    transition: all 0.5s linear 0.25s;
  }

  &.crab-transition-exit-active {
    opacity: 0;

    .bucket {
      transform: translateY(45%);
      opacity: 1;
    }
  }
}

.score {
  position: absolute;
  right: 1.5rem;
  top: 1rem;
  padding-right: 5rem;
  font-size: 3rem;
  margin: 0;
  z-index: 2000;
  pointer-events: none;

  .number {
    position: absolute;
    right: 0;
    display: inline-block;
    &.number-enter {
      transition: all 0.5s ease-in-out 0.25s;
      perspective: 1000;
      transform: rotateX(90deg);
      &.number-enter-active {
        transform: rotateX(0deg);
      }
    }
    &.number-exit {
      transition: all 0.5s;
      perspective: 1000;
      transform: rotateX(0deg);
      &.number-exit-active {
        transform: rotateX(-90deg);
      }
    }
  }
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
    align-items: center;

    .row {
      flex: 1;
      width: 100%;
      padding: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .hiding-spot {
        width: 100%;
        height: 100%;
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        position: relative;
      }
    }
  }
}
`;

export default GameBoard;
