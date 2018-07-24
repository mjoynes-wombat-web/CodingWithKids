import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.changePincerAction = this.changePincerAction.bind(this);
    this.removePincerAction = this.removePincerAction.bind(this);
    this.walk = this.walk.bind(this);
    this.pauseWalking = this.pauseWalking.bind(this);
    this.pickSpot = this.pickSpot.bind(this);
    this.changePincerInterval = setInterval(
      this.changePincerAction,
      7000 + (Math.random() * 2000),
    );
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

  removePincerAction() {
    this.setState({ pincerAction: null });
  }

  walk() {
    const { crabDimensions, difficulty } = this.props;
    const { currentPos } = this.state;
    const spot = this.pickSpot();
    const moveTo = [
      spot.coords[0] - (crabDimensions[0] / 2),
      spot.coords[1] - (crabDimensions[1] / 2),
    ];

    const walkTime = Math.hypot(
      Math.abs(currentPos[0] - moveTo[0]),
      Math.abs(currentPos[1] - moveTo[1]),
    )
    / 96 / ((difficulty / 3) + 0.6666);

    const direction = (currentPos[0] <= moveTo[0] ? 'right' : 'left');

    if (moveTo[0] === currentPos[0]
      && moveTo[1] === currentPos[1]) return this.walk();
    return this.setState({
      walking: true,
      direction,
      paused: false,
      moveTo,
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

  render() {
    const {
      paused, walking, walkTime, moveTo, direction, pincerAction,
    } = this.state;
    const {
      addPoint, screenWidth, className, id, difficulty,
    } = this.props;
    return (
      <CrabWrapper
        transitionEnd={() => {
          this.pauseWalking();
          setTimeout(this.walk, Math.max(Math.random * 4000, 1000));
        }}
        paused={paused}
        walking={walking}
        id={id}
        className={className}
        screenWidth={screenWidth}
        walkTime={walkTime}
        moveTo={moveTo}
        difficulty={difficulty}
        direction={direction}
      >
        <CrabSVG
          addPoint={addPoint}
          removePincerAction={this.removePincerAction}
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
  addPoint: null,
  display: true,
};

export default Crab;
