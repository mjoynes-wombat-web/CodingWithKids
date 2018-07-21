import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CrabSVG from './CrabSVG';
import CrabWrapper from './wrapper';

class Crab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pincerActions: ['eating', 'waving', 'snapping'],
      pincerAction: 'eating',
      walkTime: 0,
      direction: 'right',
      paused: false,
      currentPos: [0, 0],
      walking: props.display,
    };

    this.componentDidMount = this.componentDidMount.bind(this);
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

  componentDidMount() {
    const { addPoint } = this.props;
    this.base.addEventListener('transitionend', () => {
      this.pauseWalking();
      setTimeout(this.walk, Math.max(Math.random * 4000, 1000));
    });
    this.base.addEventListener('click', addPoint);
    this.base.querySelector('.left-pincer').addEventListener('animationend', this.removePincerAction);
    setTimeout(this.walk, 3000);
    return null;
  }

  componentWillUnmount() {
    this.base.removeEventListener('transitionend', this.pauseWalking);
    this.base.querySelector('.left-pincer').removeEventListener('animationend', this.removePincerAction);
    clearInterval(this.changePincerInterval);
  }

  changePincerAction() {
    const { pincerActions } = this.state;
    const pincerAction = pincerActions[Math
      .floor(Math
        .random() * pincerActions.length)];
    return this.setState({ pincerAction });
  }

  removePincerAction() {
    this.setState({ pincerAction: null });
  }

  walk() {
    const spot = this.pickSpot();
    const moveTo = [
      spot.coords[0] - (this.props.crabDimensions[0] / 2),
      spot.coords[1] - (this.props.crabDimensions[1] / 2),
    ];

    const walkTime = Math.hypot(
      Math.abs(this.state.currentPos[0] - moveTo[0]),
      Math.abs(this.state.currentPos[1] - moveTo[1]),
    )
    / 96 / ((this.props.difficulty / 3) + 0.6666);

    const direction = (this.state.currentPos[0] <= moveTo[0] ? 'right' : 'left');

    if (moveTo[0] === this.state.currentPos[0]
      && moveTo[1] === this.state.currentPos[1]) return this.walk();
    return this.setState({
      walking: true,
      direction,
      paused: false,
      moveTo,
      walkTime,
    });
  }

  pauseWalking() {
    this.setState({ paused: true, currentPos: this.state.moveTo });
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
    return (
      <CrabWrapper
        paused={this.state.paused}
        walking={this.state.walking}
        id={this.props.id}
        className={this.props.className}
        screenWidth={this.props.screenWidth}
        walkTime={this.state.walkTime}
        moveTo={this.state.moveTo}
        difficulty={this.props.difficulty || this.state.difficulty}
        direction={this.state.direction}
      >
        <CrabSVG
          data-iteration="0"
          className={`
            crab
            ${this.state.pincerAction || ''}
            ${this.state.walking ? 'walking' : ''}
            ${this.props.paused ? 'paused' : ''}
            ${this.props.direction}
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
