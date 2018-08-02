import React from 'react';
import PropTypes from 'prop-types';

import './style/style.css';

const crabWidthCSS = screenWidth => ({
  minWidth: `${screenWidth * 0.12 * 0.6}px`,
});

const transformCSS = (moveTo, initialPos, stopPos) => {
  let position;
  if (stopPos && stopPos[0] !== 0) {
    position = stopPos;
  } else if (moveTo && moveTo[0] !== 0) {
    position = moveTo;
  } else {
    position = initialPos;
  }
  return { transform: `translate3d(${position ? `${position[0]}px, ${position[1]}px` : '0, 0'}, 0)` };
};

const transitionTime = walkTime => ({
  transition: `all ${walkTime}s cubic-bezier(0.42, -0.07, 0.58, 0.74)`,
});

const CrabWrapper = ({
  children,
  paused,
  walking,
  className,
  id,
  continueWalk,
  screenWidth,
  moveTo,
  walkTime,
  initialPos,
  stopPos,
  display,
}) => (
  <div
    style={{
      ...crabWidthCSS(screenWidth),
      ...transformCSS(moveTo, initialPos, stopPos),
      ...transitionTime(walkTime),
    }}
    onTransitionEnd={continueWalk}
    id={id}
    className={`crab-wrapper 
    ${className} ${display ? 'display' : ''} ${paused ? 'paused' : ''} ${walking ? 'walking' : ''}`}
  >
    {children}
  </div>
);

CrabWrapper.propTypes = {
  continueWalk: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
  paused: PropTypes.bool.isRequired,
  walking: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  screenWidth: PropTypes.number.isRequired,
  moveTo: PropTypes.arrayOf(PropTypes.number),
  walkTime: PropTypes.number,
  initialPos: PropTypes.arrayOf(PropTypes.number),
  stopPos: PropTypes.arrayOf(PropTypes.number),
  display: PropTypes.bool,
};

CrabWrapper.defaultProps = {
  children: {},
  className: '',
  walking: false,
  moveTo: [0, 0],
  walkTime: 0,
  initialPos: [0, 0],
  stopPos: [0, 0],
  display: false,
};

export default CrabWrapper;
