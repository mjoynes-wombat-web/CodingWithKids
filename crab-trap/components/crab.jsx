import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CrabSVGRaw from '-!svg-react-loader!../assets/design/crab-final.svg';

function legRotateCSSAni(name, positions) {
  const rotateString = positions.reduce((posAccum, pos) =>
    `\
  ${posAccum}
  ${pos[0]}% { transform: rotate(${pos[1]}deg); }\
`, '');
  return `\
@keyframes ${name} {\
  ${rotateString}
}\
  `;
}

class LegAniObj {
  constructor(positions) {
    [this.firstPart, this.secondPart, this.thirdPart] = positions;
  }
}

const legRotations = {
  moveLefts: {
    firstLeg: new LegAniObj([
      [[10, -14], [50, 13]],
      [[35, -25], [50, -25]],
      [[35, 8], [50, 12]],
    ]),
    secondLeg: new LegAniObj([
      [[10, -15.5], [50, 10]],
      [[35, -30], [50, -30]],
      [[35, 8], [50, 12]],
    ]),
    thirdLeg: new LegAniObj([
      [[10, -15.5], [50, 10]],
      [[35, -35], [50, -35]],
      [[35, -3], [50, -3]],
    ]),
    fourthLeg: new LegAniObj([
      [[10, -11], [50, 14]],
      [[35, -35], [50, -35]],
      [[35, -45], [50, -45]],
    ]),
  },
  moveRights: {
    firstLeg: new LegAniObj([
      [[10, 14], [50, -13]],
      [[35, 25], [50, 25]],
      [[35, -8], [50, -12]],
    ]),
    secondLeg: new LegAniObj([
      [[10, 15.5], [50, -10]],
      [[35, 30], [50, 30]],
      [[35, -8], [50, -12]],
    ]),
    thirdLeg: new LegAniObj([
      [[10, 15.5], [50, -10]],
      [[35, 35], [50, 35]],
      [[35, 3], [50, 3]],
    ]),
    fourthLeg: new LegAniObj([
      [[10, 11], [50, -14]],
      [[35, 35], [50, 35]],
      [[35, 45], [50, 45]],
    ]),
  },
};

const UnstyledCrabWrapper = ({
  children, paused, walking, className, id,
}) => (
  <div
    id={id}
    className={`crab-wrapper 
      ${className}  ${paused ? 'paused' : ''} ${walking ? 'walking' : ''}`}
  >
    {children}
  </div>
);

UnstyledCrabWrapper.propTypes = {
  children: PropTypes.element,
  paused: PropTypes.bool.isRequired,
  walking: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
};

UnstyledCrabWrapper.defaultProps = {
  children: {},
  className: '',
  walking: false,
};

const CrabWrapper = styled(UnstyledCrabWrapper)`
display: flex;
justify-content: center;
width: ${props => props.screenWidth * 0.12 * 0.6}px;
overflow: visible;
align-items: flex-start;
position: absolute;
top: 0;
left: 0;
animation-fill-mode: both;
transition: transform ${props => props.walkTime}s;
transition-timing-function: cubic-bezier(1, 1.02, 0.76, 0.99);
cursor: pointer;
pointer-events: none;

&.hidden {
  position: absolute;
  top: -300px;
  left: -300px;
}

&.walking {
  pointer-events: all;
  transform: translate(${props => (props.moveTo ? `${props.moveTo[0]}px, ${props.moveTo[1]}px` : '0, 0')});
  &.paused {
    pointer-events: none;
  }
}

.crab {
overflow: visible;
min-width: ${props => Math.max(props.screenWidth * 0.12, props.width)}px;
pointer-events: none;

// Leg Animations
${
  Object.keys(legRotations)
    .map(sideName => Object.keys(legRotations[sideName])
      .map(legName => Object.keys(legRotations[sideName][legName])
        .map((partName) => {
          const name = `${sideName}-${legName}-${partName}`;
          return legRotateCSSAni(name, legRotations[sideName][legName][partName]);
        })))
}

@keyframes move-shell {
33.33% { transform: rotate(1deg); }
66.66% { transform: rotate(-1deg); }
}

.legs {
* { animation-fill-mode: both; }
.left-legs {
    .first-leg {
        transform: rotate(-14deg);
        transform-origin: 56.80% 61.33%;
        .second-part {
            transform: rotate(31deg);
            transform-origin: 73.13% 41.79%;
            .third-part {
                transform: rotate(-17deg);
                transform-origin: 88.45% 56.52%;
            }
        }
    }

    .second-leg {
        transform: rotate(-15.5deg);
        transform-origin: 56.20% 68.90%;
        .second-part {
            transform: rotate(21deg);
            transform-origin: 70.03% 53.45%;
            .third-part {
                transform: rotate(-16deg);
                transform-origin: 83.50% 66.55%;
            }
        }
    }

    .third-leg {
        transform: rotate(-15.5deg);
        transform-origin: 55.73% 75.86%;
        .second-part {
            transform: rotate(4deg);
            transform-origin: 67.48% 63.48%;
            .third-part {
                transform: rotate(3deg);
                transform-origin: 79.50% 75.40%;
            }
        }
    }

    .fourth-leg {
        transform: rotate(-11deg);
        transform-origin: 55.18% 81.89%;
        .second-part {
            transform: rotate(3.5deg);
            transform-origin: 65.50% 71.61%;
            .third-part {
                transform: rotate(-15deg);
                transform-origin: 76.55% 82.51%;
            }
        }
    }
}

.right-legs {
    .first-leg {
        transform: rotate(14deg);
        transform-origin: 43.20% 61.33%;
        .second-part {
            transform: rotate(-31deg);
            transform-origin: 26.87% 41.79%;
            .third-part {
                transform: rotate(17deg);
                transform-origin: 11.55% 56.52%;
            }
        }
    }

    .second-leg {
        transform: rotate(15.5deg);
        transform-origin: 43.80% 68.90%;
        .second-part {
            transform: rotate(-21deg);
            transform-origin: 29.97% 53.45%;
            .third-part {
                transform: rotate(16deg);
                transform-origin: 16.50% 66.55%;
            }
        }
    }

    .third-leg {
        transform: rotate(15.5deg);
        transform-origin: 44.27% 75.86%;
        .second-part {
            transform: rotate(-4deg);
            transform-origin: 32.52% 63.48%;
            .third-part {
                transform: rotate(-3deg);
                transform-origin: 20.50% 75.40%;
            }
        }
    }

    .fourth-leg {
        transform: rotate(11deg);
        transform-origin: 44.82% 81.89%;
        .second-part {
            transform: rotate(-3.5deg);
            transform-origin: 34.50% 71.61%;
            .third-part {
                transform: rotate(15deg);
                transform-origin: 23.45% 82.51%;
            }
        }
    }
}
}

&.walking {
  .legs {
    .left-legs *, .right-legs * {
      animation-duration: ${props => (1 / props.difficulty) * 1.5}s;
      animation-iteration-count: infinite;
    }
    .left-legs {
        * { animation-direction: ${props => (props.direction === 'right' ? 'normal' : 'reverse')}; }
        .first-leg {
            animation-name: moveLefts-firstLeg-firstPart;
            animation-delay:0.125s;
            * { animation-delay:0.125s; }
            .second-part {
                animation-name: moveLefts-firstLeg-secondPart;
                .third-part {
                    animation-name: moveLefts-firstLeg-thirdPart;
                }
            }
        }
        .second-leg {
            animation-name: moveLefts-secondLeg-firstPart;
            animation-delay:0.375s;
            * { animation-delay:0.375s; }
            .second-part {
                animation-name: moveLefts-secondLeg-secondPart;
                .third-part {
                    animation-name: moveLefts-secondLeg-thirdPart;
                }
            }
        }
        .third-leg {
            animation-name: moveLefts-thirdLeg-firstPart;
            .second-part {
                animation-name: moveLefts-thirdLeg-secondPart;
                .third-part {
                    animation-name: moveLefts-thirdLeg-thirdPart;
                }
            }
        }

        .fourth-leg {
            animation-name: moveLefts-fourthLeg-firstPart;
            animation-delay:0.25s;
            * { animation-delay:0.25s; }
            .second-part {
                animation-name: moveLefts-fourthLeg-secondPart;
                .third-part {
                    animation-name: moveLefts-fourthLeg-thirdPart;
                }
            }
        }
    }
    .right-legs {
        * { animation-direction: ${props => (props.direction === 'right' ? 'reverse' : 'normal')}; }
        .first-leg {
            animation-name: moveRights-firstLeg-firstPart;
            animation-delay:0.255s;
            * { animation-delay:0.255s; }
            .second-part {
                animation-name: moveRights-firstLeg-secondPart;
                .third-part {
                    animation-name: moveRights-firstLeg-thirdPart;
                }
            }
        }
        .second-leg {
            animation-name: moveRights-secondLeg-firstPart;
            animation-delay:0.12s;
            * { animation-delay:0.12s; }
            .second-part {
                animation-name: moveRights-secondLeg-secondPart;
                .third-part {
                    animation-name: moveRights-secondLeg-thirdPart;
                }
            }
        }
        .third-leg {
            animation-name: moveRights-thirdLeg-firstPart;
            animation-delay:0.37s;
            * { animation-delay:0.37s; }
            .second-part {
                animation-name: moveRights-thirdLeg-secondPart;
                .third-part {
                    animation-name: moveRights-thirdLeg-thirdPart;
                }
            }
        }

        .fourth-leg {
            animation-name: moveRights-fourthLeg-firstPart;
            animation-delay:0.005s;
            * { animation-delay:0.005s; }
            .second-part {
                animation-name: moveRights-fourthLeg-secondPart;
                .third-part {
                    animation-name: moveRights-fourthLeg-thirdPart;
                }
            }
        }
    }
}
.shell {
    transform-origin: 50% 85.07%;
    animation-name: move-shell;
    animation-duration: ${props => (2 / props.difficulty) * 1.25}s;
    animation-iteration-count: infinite;
    pointer-events: all;
    cursor: pointer;
}

&.paused {
  .legs *, .shell {
    animation-play-state: paused;
    pointer-events: none;
  }
}
}

.pincers {
.left-pincer {
  transform: rotate(20deg);
  transform-origin: 55.28% 54.88%;
  .second-part {
    transform: rotate(-20deg);
    transform-origin: 62.03% 43.22%;
    .third-part {
      transform: rotate(-75deg);
      transform-origin: 64.93% 32.28%;
      .moving-pincer {
        transform: rotate(5deg);
        transform-origin: 68.85% 19.08%;
      }
    }
  }
}
.right-pincer {
  transform: rotate(-20deg);
  transform-origin: 44.70% 54.88%;
  .second-part {
    transform: rotate(20deg);
    transform-origin: 37.65% 42.20%;
    .third-part {
      transform: rotate(20deg);
      transform-origin: 34.38% 29.77%;
      .moving-pincer {
        transform: rotate(5deg);
        transform-origin: 29.90% 14.78%;
      }
    }
  }
}
}

.mouth {
.outer-mouth {
  .right-mouth {
    transform-origin: 50% 45.01%;
  }
  .left-mouth {
    transform-origin: 50% 45.01%;
  }
}
}

@keyframes left-eye {
0% { transform: rotate(23deg); }
5% { transform: rotate(23deg); }
7% { transform: rotate(27deg); }
10% { transform: rotate(20deg); }
25% { transform: rotate(20deg); }
30% { transform: rotate(-10deg); }
45% { transform: rotate(-10deg); }
55% { transform: rotate(10deg); }
75% { transform: rotate(-10deg); }
80% { transform: rotate(-20deg); }
85% { transform: rotate(23deg); }
100% { transform: rotate(23deg); }
}

@keyframes right-eye {
0% { transform: rotate(-10deg); }
7% { transform: rotate(-15deg); }
10% { transform: rotate(10deg); }
14% { transform: rotate(29deg); }
29% { transform: rotate(2deg); }
33% { transform: rotate(-20deg); }
44% { transform: rotate(10deg); }
51% { transform: rotate(-20deg); }
73% { transform: rotate(-25deg); }
81% { transform: rotate(-4deg); }
86% { transform: rotate(-10deg); }
100% { transform: rotate(-10deg); }
}

.eyes {
* {
  animation-iteration-count: infinite;
  animation-direction: normal;
}
.left-eye {
  transform: rotate(23deg);
  transform-origin: 59.88% 28.34%;
  animation-name: left-eye;
  animation-duration: 9s;
}

.right-eye {
  transform: rotate(-10deg);
  transform-origin: 40.13% 28.34%;
  animation-name: right-eye;
  animation-duration: 8.5s;
}
}

// EATING ANIMATION
@keyframes eating-right-pincer {
25% { transform: rotate(40deg); }
50% { transform: rotate(-20deg); }
}

@keyframes eating-right-pincer-secondPart {
25% { transform: rotate(-30deg); }
50% { transform: rotate(20deg); }
70% { transform: rotate(70deg); }
75% { transform: rotate(70deg); }
}

@keyframes eating-right-pincer-thirdPart {
25% { transform: rotate(-10deg); }
50% { transform: rotate(20deg); }
70% { transform: rotate(40deg); }
75% { transform: rotate(40deg); }
}

@keyframes eating-right-pincer-close {
17% { transform: rotate(-5deg); }
20% { transform: rotate(35deg); }
50% { transform: rotate(35deg); }
70% { transform: rotate(35deg); }
75% { transform: rotate(-5deg); }
}

@keyframes eating-left-pincer {
33.33% { transform: rotate(20deg); }
46.66% { transform: rotate(5deg); }
50% { transform: rotate(5deg); }
60% { transform: rotate(0deg); }
90% { transform: rotate(0deg); }
}

@keyframes eating-left-pincer-secondPart {
33.33% { transform: rotate(-20deg); }
46.66% { transform: rotate(-24deg); }
50% { transform: rotate(-24deg); }
60% { transform: rotate(-30deg); }
90% { transform: rotate(-30deg); }
}

@keyframes eating-left-pincer-thirdPart {
33.33% { transform: rotate(-75deg); }
46.66% { transform: rotate(-75deg); }
50% { transform: rotate(-75deg); }
60% { transform: rotate(-80deg); }
90% { transform: rotate(-80deg); }
}

@keyframes eating-left-pincer-close {
46.66% { transform: rotate(5deg); }
50% { transform: rotate(-25deg); }
90% { transform: rotate(-25deg); }
}

@keyframes eating-right-mouth {
10% { transform: rotate(-4deg) skewX(4deg); }
20% { transform: rotate(-2deg) skewX(2deg); }
35% { transform: rotate(-4deg) skewX(4deg); }
45% { transform: rotate(-2deg) skewX(2deg); }
60% { transform: rotate(-4deg) skewX(4deg); }
65% { transform: rotate(-2deg) skewX(2deg); }
70% { transform: rotate(-4deg) skewX(4deg); }
80% { transform: rotate(-2deg) skewX(2deg); }
90% { transform: rotate(-4deg) skewX(4deg); }
}

@keyframes eating-left-mouth {
12% { transform: rotate(10deg) skewX(-10deg); }
22% { transform: rotate(2deg) skewX(-2deg); }
62% { transform: rotate(10deg) skewX(-10deg); }
67% { transform: rotate(2deg) skewX(-2deg); }
92% { transform: rotate(10deg) skewX(-10deg); }
}

&.eating {
.pincers {
  * { animation-timing-function: ease-in-out; }
  .right-pincer {
    animation-name: eating-right-pincer;
    animation-duration: 2s;
    animation-delay: 0.5s;
    * {
      animation-duration: 2s;
      animation-delay: 0.5s;
    }
    .second-part {
      animation-name: eating-right-pincer-secondPart;
      .third-part {
        animation-name: eating-right-pincer-thirdPart;
        .moving-pincer {
          animation-name: eating-right-pincer-close;
          animation-timing-function: linear;
        }
      }
    }
  }

  .left-pincer {
    animation-name: eating-left-pincer;
    animation-duration: 3s;
    animation-delay: 0.5s;
    * {
      animation-duration: 3s;
      animation-delay: 0.5s;
    }
    .second-part {
      animation-name: eating-left-pincer-secondPart;
      .third-part {
        animation-name: eating-left-pincer-thirdPart;
        .moving-pincer {
          animation-name: eating-left-pincer-close;
          animation-timing-function: linear;
        }
      }
    }
  }
}

.mouth {
  .outer-mouth {
    * {
      animation-duration: 1s;
      animation-delay: 2.5s;
      animation-timing-function: ease-in-out;
    }
    .right-mouth { animation-name: eating-right-mouth; }
    .left-mouth { animation-name: eating-left-mouth; }
  }
}
}

//WAVING ANIMATION
@keyframes waving-right-pincer {
/* 0% { transform: rotate(-20deg); } */
25% { transform: rotate(40deg); }
45% { transform: rotate(-40deg); }
65% { transform: rotate(50deg); }
}

@keyframes waving-right-pincer-secondPart {
25% { transform: rotate(0deg); }
90% { transform: rotate(0deg); }
}

@keyframes waving-right-pincer-thirdPart {
25% { transform: rotate(5deg); }
90% { transform: rotate(5deg); }
}

@keyframes waving-left-pincer {
25% { transform: rotate(-30deg); }
45% { transform: rotate(40deg); }
65% { transform: rotate(-50deg); }
}

@keyframes waving-left-pincer-secondPart {
25% { transform: rotate(5deg); }
80% { transform: rotate(5deg); }
}

@keyframes waving-left-pincer-thirdPart {
25% { transform: rotate(0deg); }
80% { transform: rotate(0deg); }
}

&.waving {
.pincers {
  .right-pincer {
    animation-name: waving-right-pincer;
    animation-duration: 2.5s;
    animation-delay: 0.5s;
    animation-timing-function: ease-in-out;
    * {
    animation-duration: 2.5s;
    animation-delay: 0.5s;
    animation-timing-function: ease-in-out;
    }
    .second-part {
      animation-name: waving-right-pincer-secondPart;
      .third-part {
        animation-name: waving-right-pincer-thirdPart;
      }
    }
  }

  .left-pincer {
    animation-name: waving-left-pincer;
    animation-duration: 2.5s;
    animation-delay: 1s;
    animation-timing-function: ease-in-out;
    * {
      animation-duration: 2.5s;
      animation-delay: 1s;
      animation-timing-function: ease-in-out;
    }
    .second-part {
      animation-name: waving-left-pincer-secondPart;
      .third-part {
        animation-name: waving-left-pincer-thirdPart;
      }
    }
  }
}
}

//SNAPPING ANIMATION
@keyframes snapping-right-pincer {
10% { transform: rotate(-30deg); }
90% { transform: rotate(-30deg); }
}

@keyframes snapping-right-pincer-secondPart {
10% { transform: rotate(0deg); }
90% { transform: rotate(0deg); }
}

@keyframes snapping-right-pincer-thirdPart {
10% { transform: rotate(10deg); }
90% { transform: rotate(10deg); }
}

@keyframes snapping-right-pincer-close {
17.43% { transform: rotate(5deg); }
21.43% { transform: rotate(35deg); }
25.43% { transform: rotate(5deg); }
40.29% { transform: rotate(5deg); }
44.29% { transform: rotate(35deg); }
48.29% { transform: rotate(5deg); }
63.15% { transform: rotate(5deg); }
67.15% { transform: rotate(35deg); }
71.15% { transform: rotate(5deg); }
74.58% { transform: rotate(5deg); }
78.58% { transform: rotate(35deg); }
82.58% { transform: rotate(5deg); }
}

@keyframes snapping-left-pincer {
10% { transform: rotate(30deg); }
90% { transform: rotate(30deg); }
}

@keyframes snapping-left-pincer-secondPart {
10% { transform: rotate(0deg); }
90% { transform: rotate(0deg); }
}

@keyframes snapping-left-pincer-thirdPart {
10% { transform: rotate(-10deg); }
90% { transform: rotate(-10deg); }
}

@keyframes snapping-left-pincer-close {
28.86% { transform: rotate(-5deg); }
32.86% { transform: rotate(-35deg); }
35.72% { transform: rotate(-5deg); }
38.58% { transform: rotate(-35deg); }
42.58% { transform: rotate(-5deg); }
51.72% { transform: rotate(-5deg); }
55.72% { transform: rotate(-35deg); }
59.72% { transform: rotate(-5deg); }
63.15% { transform: rotate(-5deg); }
67.15% { transform: rotate(-35deg); }
71.15% { transform: rotate(-5deg); }
74.58% { transform: rotate(-5deg); }
78.58% { transform: rotate(-35deg); }
82.58% { transform: rotate(-5deg); }
}

&.snapping {
.pincers {
  .right-pincer {
    animation-name: snapping-right-pincer;
    animation-duration: 3s;
    animation-delay: 0.5s;
    animation-timing-function: ease-in-out;
    * {
      animation-duration: 3s;
      animation-delay: 0.5s;
      animation-timing-function: ease-in-out;
    }
    .second-part {
      animation-name: snapping-right-pincer-secondPart;
      .third-part {
        animation-name: snapping-right-pincer-thirdPart;
        .moving-pincer {
          animation-name: snapping-right-pincer-close;
          animation-timing-function: linear;
        }
      }
    }
  }

  .left-pincer {
    animation-name: snapping-left-pincer;
    animation-duration: 3s;
    animation-delay: 0.5s;
    animation-timing-function: ease-in-out;
    * {
      animation-duration: 3s;
      animation-delay: 0.5s;
      animation-timing-function: ease-in-out;
    }
    .second-part {
      animation-name: snapping-left-pincer-secondPart;
      .third-part {
        animation-name: snapping-left-pincer-thirdPart;
        .moving-pincer {
          animation-name: snapping-left-pincer-close;
          animation-timing-function: linear;
        }
      }
    }
  }
}
}
}
`;

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
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.changePincerAction = this.changePincerAction.bind(this);
    this.removePincerAction = this.removePincerAction.bind(this);
    this.walk = this.walk.bind(this);
    this.pauseWalking = this.pauseWalking.bind(this);
    this.pickSpot = this.pickSpot.bind(this);
  }

  componentDidMount() {
    if (this.props.display) {
      return this.setState({
        walking: true,
      });
    }
    this.base.addEventListener('transitionend', () => {
      this.pauseWalking();
      setTimeout(this.walk, Math.max(Math.random * 4000, 1000));
    });
    this.base.addEventListener('click', this.props.addPoint);
    this.base.querySelector('.left-pincer').addEventListener('animationend', this.removePincerAction);

    const changePincerInterval = setInterval(
      this.changePincerAction,
      7000 + (Math.random() * 2000),
    );
    this.setState({ changePincerInterval });
    setTimeout(this.walk, 3000);
    return null;
  }

  componentWillUnmount() {
    this.base.removeEventListener('transitionend', this.pauseWalking);
    this.base.querySelector('.left-pincer').removeEventListener('animationend', this.removePincerAction);
    clearInterval(this.changePincerInterval);
  }

  changePincerAction() {
    const pincerAction = this.state.pincerActions[Math
      .floor(Math
        .random() * this.state.pincerActions.length)];
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
    / this.props.inch / ((this.props.difficulty / 3) + 0.6666);

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
        width={this.props.width}
        difficulty={this.props.difficulty || this.state.difficulty}
        direction={this.state.direction}
      >
        <CrabSVGRaw
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
  width: PropTypes.number,
  screenWidth: PropTypes.number,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  hidingSpots: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
    coords: PropTypes.arrayOf(PropTypes.number),
    hideable: PropTypes.bool,
  }))),
  difficulty: PropTypes.number,
  inch: PropTypes.number,
  addPoint: PropTypes.func,
  display: PropTypes.bool,
};

Crab.defaultProps = {
  crabDimensions: [0, 0],
  className: '',
  direction: 'right',
  difficulty: 1.25,
  paused: false,
  width: null,
  screenWidth: null,
  hidingSpots: null,
  inch: 96,
  addPoint: null,
  display: true,
};

export default Crab;
