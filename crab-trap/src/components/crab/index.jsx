import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';

import CrabSVG from './CrabSVG';
import CrabWrapper from './Wrapper';

class Crab extends Component {
  constructor(props) {
    super(props);

    const direction = Math.random() < 0.5 ? 'right' : 'left';

    this.state = {
      pincerAction: 'eating',
      walkTime: 0,
      direction: props.direction || direction,
      paused: props.paused || false,
      currentPos: [0, 0],
      initialPos: [
        direction === 'left'
          ? window.screen.width + (((props.crabDimensions[0] * 1.66) - props.crabDimensions[0]) / 2)
          : -(props.crabDimensions[0] * 1.66),
        (window.screen.height * Math.random()) - props.crabDimensions[1],
      ],
      walking: props.display,
    };

    this.pincerActions = ['eating', 'waving', 'snapping'];

    this.changePincerAction = this.changePincerAction.bind(this);
    this.removePincerAction = this.removePincerAction.bind(this);
    this.walk = this.walk.bind(this);
    this.pauseWalking = this.pauseWalking.bind(this);
    this.pickSpot = this.pickSpot.bind(this);
    this.changePincerInterval = setInterval(
      this.changePincerAction,
      7000 + (Math.random() * 2000),
    );
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

  walk(e) {
    if (e) {
      const { target } = e;
      if (!target || !target.classList.contains('crab')) return null;
    }
    const { display } = this.props;
    if (display) return null;
    const { currentPos, moveTo, initialPos } = this.state;
    if (isEqual(currentPos, [0, 0]) && moveTo) return false;
    const { crabDimensions, difficulty } = this.props;
    const spot = this.pickSpot();
    const newMoveTo = [
      spot.coords[0] - (crabDimensions[0] / 2),
      spot.coords[1] - (crabDimensions[1] / 2),
    ];
    const walkTime = Math.hypot(
      Math.abs((currentPos[0] || initialPos[0]) - newMoveTo[0]),
      Math.abs((currentPos[1] || initialPos[0]) - newMoveTo[1]),
    )
    / 96 / (0.875 + (difficulty * 0.125));

    const direction = ((currentPos[0] || initialPos[0]) <= newMoveTo[0] ? 'right' : 'left');

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
    this.setState({ paused: true, currentPos: moveTo || [0, 0] });
  }

  pickSpot() {
    const { hidingSpots } = this.props;
    const cols = hidingSpots.length;
    const rows = hidingSpots[0].length;
    const spot = hidingSpots[Math.floor(Math.random() * cols)][Math.floor(Math.random() * rows)];

    if (spot.hideable) return spot;
    return this.pickSpot();
  }

  continueWalk(e) {
    const { target } = e;
    if (!target || !target.classList.contains('crab-wrapper')) return null;
    this.pauseWalking();
    return setTimeout(this.walk, Math.max(Math.random * 4000, 1000));
  }

  render() {
    const {
      paused, walking, walkTime, moveTo, direction, pincerAction, initialPos,
    } = this.state;
    const {
      addPoint, screenWidth, className, id, difficulty, hidden,
    } = this.props;
    return (
      <CrabWrapper
        initialPos={initialPos}
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
          id={id}
          addPoint={addPoint}
          removePincerAction={!hidden ? this.removePincerAction : () => null}
          data-iteration="0"
          className={`
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
  id: PropTypes.string,
  crabDimensions: PropTypes.arrayOf(PropTypes.number),
  direction: PropTypes.string,
  paused: PropTypes.bool,
  screenWidth: PropTypes.number,
  className: PropTypes.string,
  hidingSpots: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
    coords: PropTypes.arrayOf(PropTypes.number),
    hideable: PropTypes.bool,
  }))),
  difficulty: PropTypes.number,
  addPoint: PropTypes.func,
  display: PropTypes.bool,
  hidden: PropTypes.bool,
};

Crab.defaultProps = {
  id: '',
  crabDimensions: [0, 0],
  className: '',
  direction: '',
  difficulty: 1.25,
  paused: false,
  screenWidth: null,
  hidingSpots: null,
  addPoint: () => null,
  display: false,
  hidden: false,
};

export default Crab;
