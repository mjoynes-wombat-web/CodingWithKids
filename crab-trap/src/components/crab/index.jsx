import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';

import CrabSVG from './CrabSVG';
import CrabWrapper from './Wrapper';

class Crab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pincerAction: 'eating',
      walkTime: 0,
      direction: props.direction || 'right',
      paused: props.paused || false,
      currentPos: [0, 0],
      walking: props.display,
    };

    this.pincerActions = ['eating', 'waving', 'snapping'];

    this.changePincerAction = this.changePincerAction.bind(this);
    this.removePincerAction = this.removePincerAction.bind(this);
    this.walk = this.walk.bind(this);
    this.pauseWalking = this.pauseWalking.bind(this);
    this.pickSpot = this.pickSpot.bind(this);
    // this.changePincerInterval = setInterval(
    //   // this.changePincerAction,
    //   // 7000 + (Math.random() * 2000),
    // );
    this.continueWalk = this.continueWalk.bind(this);
  }

  componentWillUnmount() {
    clearInterval(this.changePincerInterval);
  }

  changePincerAction() {
    const { pincerActions } = this;
    const pincerAction = pincerActions[Math
      .floor(Math
        .random() * pincerActions.length)];
    return this.setState({ pincerAction });
  }

  removePincerAction(e) {
    const { target } = e;
    if (target.classList.value === 'left-pincer') this.setState({ pincerAction: null });
  }

  walk() {
    const { display } = this.props;
    if (display) return null;
    const { currentPos, moveTo } = this.state;
    if (isEqual(currentPos, [0, 0]) && moveTo) return false;
    const { crabDimensions, difficulty } = this.props;
    const spot = this.pickSpot();
    const newMoveTo = [
      spot.coords[0] - (crabDimensions[0] / 2),
      spot.coords[1] - (crabDimensions[1] / 2),
    ];

    const walkTime = Math.hypot(
      Math.abs(currentPos[0] - newMoveTo[0]),
      Math.abs(currentPos[1] - newMoveTo[1]),
    )
    / 96 / ((difficulty / 3) + 0.6666);

    const direction = (currentPos[0] <= newMoveTo[0] ? 'right' : 'left');

    if (newMoveTo[0] === currentPos[0]
      && newMoveTo[1] === currentPos[1]) return this.walk();
    return this.setState({
      walking: true,
      direction,
      paused: false,
      moveTo: newMoveTo,
      walkTime,
    });
  }

  pauseWalking() {
    const { moveTo } = this.state;
    this.setState({ paused: true, currentPos: moveTo });
  }

  pickSpot() {
    const { hidingSpots } = this.props;
    const cols = hidingSpots.length;
    const rows = hidingSpots[0].length;
    const spot = hidingSpots[Math.floor(Math.random() * cols)][Math.floor(Math.random() * rows)];

    if (spot.hideable) return spot;
    return this.pickSpot();
  }

  continueWalk() {
    this.pauseWalking();
    setTimeout(this.walk, Math.max(Math.random * 4000, 1000));
  }

  render() {
    const {
      paused, walking, walkTime, moveTo, direction, pincerAction,
    } = this.state;
    const {
      addPoint, screenWidth, className, id, difficulty, display, hidden
    } = this.props;
    return (
      <CrabWrapper
        continueWalk={this.continueWalk}
        paused={paused}
        walking={walking}
        id={id}
        className={[className, hidden ? 'hidden' : ''].join(' ')}
        screenWidth={screenWidth}
        walkTime={walkTime}
        moveTo={moveTo}
        difficulty={difficulty}
        direction={direction}
      >
        <CrabSVG
          walk={this.walk}
          addPoint={addPoint}
          removePincerAction={!hidden ? this.removePincerAction : () => null}
          data-iteration="0"
          className={`
            crab
            ${pincerAction || ''}
            ${walking ? 'walking' : ''}
            ${paused ? 'paused' : ''}
            ${direction}
          `}
        />
      </CrabWrapper>
    );
  }
}

Crab.propTypes = {
  crabDimensions: PropTypes.arrayOf(PropTypes.number),
  direction: PropTypes.string,
  paused: PropTypes.bool,
  screenWidth: PropTypes.number,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  hidingSpots: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
    coords: PropTypes.arrayOf(PropTypes.number),
    hideable: PropTypes.bool,
  }))),
  difficulty: PropTypes.number,
  addPoint: PropTypes.func,
  display: PropTypes.bool,
};

Crab.defaultProps = {
  crabDimensions: [0, 0],
  className: '',
  direction: 'right',
  difficulty: 1.25,
  paused: false,
  screenWidth: null,
  hidingSpots: null,
  addPoint: () => null,
  display: false,
};

export default Crab;
