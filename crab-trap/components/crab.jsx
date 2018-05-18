import Preact from 'preact';
import styled from 'styled-components';

import CrabSVG from '-!svg-react-loader!../assets/design/crab-final.svg';

const UnstyledCrab = ({ className, walk, direction='right', pincerAction }) => (
    <CrabSVG
      className={`
        ${className}
        ${pincerAction || ''}
        ${walk ? 'walking' : ''}
        ${direction}
      `} />
);

const Crab = styled(UnstyledCrab)`
  max-width: 400px;
  overflow: visible;
  cursor: pointer;

//******LEFT LEGS ANIMATIONS******//
// First Leg Animations
@keyframes moveLefts-firstLeg-firstPart {
  0% { transform: rotate(-14deg); }
  10% { transform: rotate(-14deg); }
  50% { transform: rotate(13deg); }
  100% { transform: rotate(-14deg); }
}

@keyframes moveLefts-firstLeg-secondPart {
  0% { transform: rotate(31deg); }
  35% { transform: rotate(-25deg); }
  50% { transform: rotate(-25deg); }
  100% { transform: rotate(31deg); }
}

@keyframes moveLefts-firstLeg-thirdPart {
  0% { transform: rotate(-17deg); }
  35% { transform: rotate(8deg); }
  50% { transform: rotate(12deg); }  
  100% { transform: rotate(-17deg); }
}

// Second Leg Animations
@keyframes moveLefts-secondLeg-firstPart {
  0% { transform: rotate(-15.5deg); }
  10% { transform: rotate(-15.5deg); }
  50% { transform: rotate(10deg); }
  100% { transform: rotate(-15.5deg); }
}

@keyframes moveLefts-secondLeg-secondPart {
  0% { transform: rotate(21deg); }
  35% { transform: rotate(-30deg); }
  50% { transform: rotate(-30deg); }
  100% { transform: rotate(21deg); }
}

@keyframes moveLefts-secondLeg-thirdPart {
  0% { transform: rotate(-16deg); }
  35% { transform: rotate(8deg); }
  50% { transform: rotate(12deg); }  
  100% { transform: rotate(-16deg); }
}

// Third Leg Animations
@keyframes moveLefts-thirdLeg-firstPart {
  0% { transform: rotate(-15.5deg); }
  10% { transform: rotate(-15.5deg); }
  50% { transform: rotate(10deg); }
  100% { transform: rotate(-15.5deg); }
}

@keyframes moveLefts-thirdLeg-secondPart {
  0% { transform: rotate(4deg); }
  35% { transform: rotate(-35deg); }
  50% { transform: rotate(-35deg); }
  100% { transform: rotate(4deg); }
}

@keyframes moveLefts-thirdLeg-thirdPart {
  0% { transform: rotate(3deg); }
  35% { transform: rotate(-3deg); }
  50% { transform: rotate(-3deg); }  
  100% { transform: rotate(3deg); }
}

// Fourth Leg Animations
@keyframes moveLefts-fourthLeg-firstPart {
  0% { transform: rotate(-11deg); }
  10% { transform: rotate(-11deg); }
  50% { transform: rotate(14deg); }
  100% { transform: rotate(-11deg); }
}

@keyframes moveLefts-fourthLeg-secondPart {
  0% { transform: rotate(3.5deg); }
  35% { transform: rotate(-35deg); }
  50% { transform: rotate(-35deg); }
  100% { transform: rotate(3.5deg); }
}

@keyframes moveLefts-fourthLeg-thirdPart {
  0% { transform: rotate(-15deg); }
  35% { transform: rotate(-45deg); }
  50% { transform: rotate(-45deg); }  
  100% { transform: rotate(-15deg); }
}

//******RIGHT LEGS ANIMATIONS******//
// First Leg Animations
@keyframes moveRights-firstLeg-firstPart {
  0% { transform: rotate(14deg); }
  10% { transform: rotate(14deg); }
  50% { transform: rotate(-13deg); }
  100% { transform: rotate(14deg); }
}

@keyframes moveRights-firstLeg-secondPart {
  0% { transform: rotate(-31deg); }
  35% { transform: rotate(25deg); }
  50% { transform: rotate(25deg); }
  100% { transform: rotate(-31deg); }
}

@keyframes moveRights-firstLeg-thirdPart {
  0% { transform: rotate(17deg); }
  35% { transform: rotate(-8deg); }
  50% { transform: rotate(-12deg); }  
  100% { transform: rotate(17deg); }
}

// Second Leg Animations
@keyframes moveRights-secondLeg-firstPart {
  0% { transform: rotate(15.5deg); }
  10% { transform: rotate(15.5deg); }
  50% { transform: rotate(-10deg); }
  100% { transform: rotate(15.5deg); }
}

@keyframes moveRights-secondLeg-secondPart {
  0% { transform: rotate(-21deg); }
  35% { transform: rotate(30deg); }
  50% { transform: rotate(30deg); }
  100% { transform: rotate(-21deg); }
}

@keyframes moveRights-secondLeg-thirdPart {
  0% { transform: rotate(16deg); }
  35% { transform: rotate(-8deg); }
  50% { transform: rotate(-12deg); }  
  100% { transform: rotate(16deg); }
}

// Third Leg Animations
@keyframes moveRights-thirdLeg-firstPart {
  0% { transform: rotate(15.5deg); }
  10% { transform: rotate(15.5deg); }
  50% { transform: rotate(-10deg); }
  100% { transform: rotate(15.5deg); }
}

@keyframes moveRights-thirdLeg-secondPart {
  0% { transform: rotate(-4deg); }
  35% { transform: rotate(35deg); }
  50% { transform: rotate(35deg); }
  100% { transform: rotate(-4deg); }
}

@keyframes moveRights-thirdLeg-thirdPart {
  0% { transform: rotate(-3deg); }
  35% { transform: rotate(3deg); }
  50% { transform: rotate(3deg); }  
  100% { transform: rotate(-3deg); }
}

// Fourth Leg Animations
@keyframes moveRights-fourthLeg-firstPart {
  0% { transform: rotate(11deg); }
  10% { transform: rotate(11deg); }
  50% { transform: rotate(-14deg); }
  100% { transform: rotate(11deg); }
}

@keyframes moveRights-fourthLeg-secondPart {
  0% { transform: rotate(-3.5deg); }
  35% { transform: rotate(35deg); }
  50% { transform: rotate(35deg); }
  100% { transform: rotate(-3.5deg); }
}

@keyframes moveRights-fourthLeg-thirdPart {
  0% { transform: rotate(15deg); }
  35% { transform: rotate(45deg); }
  50% { transform: rotate(45deg); }  
  100% { transform: rotate(15deg); }
}

@keyframes move-shell {
  33.33% { transform: rotate(0.5deg); }
  66.66% { transform: rotate(-0.5deg); }
}

.legs {
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
      .left-legs {
          .first-leg {
              animation-name: moveLefts-firstLeg-firstPart;
              animation-duration: 1s;
              animation-delay:0.125s;
              animation-iteration-count: infinite;
              animation-direction: ${props => (props.direction === 'right' ? 'normal' : 'reverse')};

              .second-part {
                  animation-name: moveLefts-firstLeg-secondPart;
                  animation-duration: 1s;
                  animation-delay:0.125s;
                  animation-iteration-count: infinite;
                  animation-direction: ${props => (props.direction === 'right' ? 'normal' : 'reverse')};

                  .third-part {
                      animation-name: moveLefts-firstLeg-thirdPart;
                      animation-duration: 1s;
                      animation-delay:0.125s;
                      animation-iteration-count: infinite;
                      animation-direction: ${props => (props.direction === 'right' ? 'normal' : 'reverse')};
                  }
              }
          }

          .second-leg {
              animation-name: moveLefts-secondLeg-firstPart;
              animation-duration: 1s;
              animation-delay:0.375s;
              animation-iteration-count: infinite;
              animation-direction: ${props => (props.direction === 'right' ? 'normal' : 'reverse')};

              .second-part {
                  animation-name: moveLefts-secondLeg-secondPart;
                  animation-duration: 1s;
                  animation-delay:0.375s;
                  animation-iteration-count: infinite;
                  animation-direction: ${props => (props.direction === 'right' ? 'normal' : 'reverse')};

                  .third-part {
                      animation-name: moveLefts-secondLeg-thirdPart;
                      animation-duration: 1s;
                      animation-delay:0.375s;
                      animation-iteration-count: infinite;
                      animation-direction: ${props => (props.direction === 'right' ? 'normal' : 'reverse')};
                  }
              }
          }

          .third-leg {
              animation-name: moveLefts-thirdLeg-firstPart;
              animation-duration: 1s;
              animation-iteration-count: infinite;
              animation-direction: ${props => (props.direction === 'right' ? 'normal' : 'reverse')};

              .second-part {
                  animation-name: moveLefts-thirdLeg-secondPart;
                  animation-duration: 1s;
                  animation-iteration-count: infinite;
                  animation-direction: ${props => (props.direction === 'right' ? 'normal' : 'reverse')};

                  .third-part {
                      animation-name: moveLefts-thirdLeg-thirdPart;
                      animation-duration: 1s;
                      animation-iteration-count: infinite;
                      animation-direction: ${props => (props.direction === 'right' ? 'normal' : 'reverse')};
                  }
              }
          }

          .fourth-leg {
              animation-name: moveLefts-fourthLeg-firstPart;
              animation-duration: 1s;
              animation-delay:0.25s;
              animation-iteration-count: infinite;
              animation-direction: ${props => (props.direction === 'right' ? 'normal' : 'reverse')};

              .second-part {
                  animation-name: moveLefts-fourthLeg-secondPart;
                  animation-duration: 1s;
                  animation-delay:0.25s;
                  animation-iteration-count: infinite;
                  animation-direction: ${props => (props.direction === 'right' ? 'normal' : 'reverse')};

                  .third-part {
                      animation-name: moveLefts-fourthLeg-thirdPart;
                      animation-duration: 1s;
                      animation-delay:0.25s;
                      animation-iteration-count: infinite;
                      animation-direction: ${props => (props.direction === 'right' ? 'normal' : 'reverse')};
                  }
              }
          }
      }

      .right-legs {
          .first-leg {
              animation-name: moveRights-firstLeg-firstPart;
              animation-duration: 1s;
              animation-delay:0.255s;
              animation-iteration-count: infinite;
              animation-direction: ${props => (props.direction === 'right' ? 'reverse' : 'normal')};

              .second-part {
                  animation-name: moveRights-firstLeg-secondPart;
                  animation-duration: 1s;
                  animation-delay:0.255s;
                  animation-iteration-count: infinite;
                  animation-direction: ${props => (props.direction === 'right' ? 'reverse' : 'normal')};

                  .third-part {
                      animation-name: moveRights-firstLeg-thirdPart;
                      animation-duration: 1s;
                      animation-delay:0.255s;
                      animation-iteration-count: infinite;
                      animation-direction: ${props => (props.direction === 'right' ? 'reverse' : 'normal')};
                  }
              }
          }

          .second-leg {
              animation-name: moveRights-secondLeg-firstPart;
              animation-duration: 1s;
              animation-delay:0.12s;
              animation-iteration-count: infinite;
              animation-direction: ${props => (props.direction === 'right' ? 'reverse' : 'normal')};

              .second-part {
                  animation-name: moveRights-secondLeg-secondPart;
                  animation-duration: 1s;
                  animation-delay:0.12s;
                  animation-iteration-count: infinite;
                  animation-direction: ${props => (props.direction === 'right' ? 'reverse' : 'normal')};

                  .third-part {
                      animation-name: moveRights-secondLeg-thirdPart;
                      animation-duration: 1s;
                      animation-delay:0.12s;
                      animation-iteration-count: infinite;
                      animation-direction: ${props => (props.direction === 'right' ? 'reverse' : 'normal')};
                  }
              }
          }

          .third-leg {
              animation-name: moveRights-thirdLeg-firstPart;
              animation-duration: 1s;
              animation-delay:0.37s;
              animation-iteration-count: infinite;
              animation-direction: ${props => (props.direction === 'right' ? 'reverse' : 'normal')};

              .second-part {
                  animation-name: moveRights-thirdLeg-secondPart;
                  animation-duration: 1s;
                  animation-delay:0.37s;
                  animation-iteration-count: infinite;
                  animation-direction: ${props => (props.direction === 'right' ? 'reverse' : 'normal')};

                  .third-part {
                      animation-name: moveRights-thirdLeg-thirdPart;
                      animation-duration: 1s;
                      animation-delay:0.37s;
                      animation-iteration-count: infinite;
                      animation-direction: ${props => (props.direction === 'right' ? 'reverse' : 'normal')};
                  }
              }
          }

          .fourth-leg {
              animation-name: moveRights-fourthLeg-firstPart;
              animation-duration: 1s;
              animation-delay:0.005s;
              animation-iteration-count: infinite;
              animation-direction: ${props => (props.direction === 'right' ? 'reverse' : 'normal')};

              .second-part {
                  animation-name: moveRights-fourthLeg-secondPart;
                  animation-duration: 1s;
                  animation-delay:0.005s;
                  animation-iteration-count: infinite;
                  animation-direction: ${props => (props.direction === 'right' ? 'reverse' : 'normal')};

                  .third-part {
                      animation-name: moveRights-fourthLeg-thirdPart;
                      animation-duration: 1s;
                      animation-delay:0.005s;
                      animation-iteration-count: infinite;
                      animation-direction: ${props => (props.direction === 'right' ? 'reverse' : 'normal')};
                  }
              }
          }
      }
    }

  .shell {
      transform-origin: 50% 85.07%;
      animation-name: move-shell;
      animation-duration: 2s;
      animation-iteration-count: infinite;
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
  .left-eye {
    transform: rotate(23deg);
    transform-origin: 59.88% 28.34%;
    animation-name: left-eye;
    animation-duration: 9s;
    animation-iteration-count: infinite;
    animation-direction: normal;
  }

  .right-eye {
    transform: rotate(-10deg);
    transform-origin: 40.13% 28.34%;
    animation-name: right-eye;
    animation-duration: 8.5s;
    animation-iteration-count: infinite;
    animation-direction: normal;
  }
}

// EATING ANIMATION
@keyframes eating-right-pincer {
  0% { transform: rotate(-20deg); }
  25% { transform: rotate(40deg); }
  50% { transform: rotate(-20deg); }
}

@keyframes eating-right-pincer-secondPart {
  0% { transform: rotate(20deg); }
  25% { transform: rotate(-30deg); }
  50% { transform: rotate(20deg); }
  70% { transform: rotate(70deg); }
  75% { transform: rotate(70deg); }
  100% { transform: rotate(20deg); }
}

@keyframes eating-right-pincer-thirdPart {
  0% { transform: rotate(20deg); }
  25% { transform: rotate(-10deg); }
  50% { transform: rotate(20deg); }
  70% { transform: rotate(40deg); }
  75% { transform: rotate(40deg); }
  100% { transform: rotate(20deg); }
}

@keyframes eating-right-pincer-close {
  0% { transform: rotate(5deg); }
  17% { transform: rotate(-5deg); }
  20% { transform: rotate(35deg); }
  50% { transform: rotate(35deg); }
  70% { transform: rotate(35deg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(5deg); }
}

@keyframes eating-left-pincer {
  0% { transform: rotate(20deg); }
  33.33% { transform: rotate(20deg); }
  46.66% { transform: rotate(5deg); }
  50% { transform: rotate(5deg); }
  60% { transform: rotate(0deg); }
  90% { transform: rotate(0deg); }
}

@keyframes eating-left-pincer-secondPart {
  0% { transform: rotate(-20deg); }
  33.33% { transform: rotate(-20deg); }
  46.66% { transform: rotate(-24deg); }
  50% { transform: rotate(-24deg); }
  60% { transform: rotate(-30deg); }
  90% { transform: rotate(-30deg); }
}

@keyframes eating-left-pincer-thirdPart {
  0% { transform: rotate(-75deg); }
  33.33% { transform: rotate(-75deg); }
  46.66% { transform: rotate(-75deg); }
  50% { transform: rotate(-75deg); }
  60% { transform: rotate(-80deg); }
  90% { transform: rotate(-80deg); }
}

@keyframes eating-left-pincer-close {
  0% { transform: rotate(5deg); }
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
    .right-pincer {
      animation-name: eating-right-pincer;
      animation-duration: 2s;
      animation-delay: 0.5s;
      animation-timing-function: ease-in-out;

      .second-part {
        animation-name: eating-right-pincer-secondPart;
        animation-duration: 2s;
        animation-delay: 0.5s;
        animation-timing-function: ease-in-out;

        .third-part {
          animation-name: eating-right-pincer-thirdPart;
          animation-duration: 2s;
          animation-delay: 0.5s;
          animation-timing-function: ease-in-out;

          .moving-pincer {
            animation-name: eating-right-pincer-close;
            animation-duration: 2s;
            animation-delay: 0.5s;
          }
        }
      }
    }

    .left-pincer {
      animation-name: eating-left-pincer;
      animation-duration: 3s;
      animation-delay: 0.5s;
      animation-timing-function: ease-in-out;

      .second-part {
        animation-name: eating-left-pincer-secondPart;
        animation-duration: 3s;
        animation-delay: 0.5s;
        animation-timing-function: ease-in-out;

        .third-part {
          animation-name: eating-left-pincer-thirdPart;
          animation-duration: 3s;
          animation-delay: 0.5s;
          animation-timing-function: ease-in-out;

          .moving-pincer {
            animation-name: eating-left-pincer-close;
            animation-duration: 3s;
            animation-delay: 0.5s;
          }
        }
      }
    }
  }

  .mouth {
    .outer-mouth {
      .right-mouth {
        animation-name: eating-right-mouth;
        animation-duration: 1s;
        animation-delay: 2.5s;
        animation-timing-function: ease-in-out;
      }

      .left-mouth {
        animation-name: eating-left-mouth;
        animation-duration: 1s;
        animation-delay: 2.5s;
        animation-timing-function: ease-in-out;
      }
    }
  }
}

//WAVING ANIMATION
@keyframes waving-right-pincer {
  0% { transform: rotate(-20deg); }
  25% { transform: rotate(40deg); }
  45% { transform: rotate(-40deg); }
  65% { transform: rotate(50deg); }
}

@keyframes waving-right-pincer-secondPart {
  0% { transform: rotate(20deg); }
  25% { transform: rotate(0deg); }
  90% { transform: rotate(0deg); }
}

@keyframes waving-right-pincer-thirdPart {
  0% { transform: rotate(20deg); }
  25% { transform: rotate(5deg); }
  90% { transform: rotate(5deg); }
}

@keyframes waving-left-pincer {
  0% { transform: rotate(20deg); }
  25% { transform: rotate(-30deg); }
  45% { transform: rotate(40deg); }
  65% { transform: rotate(-50deg); }
}

@keyframes waving-left-pincer-secondPart {
  0% { transform: rotate(-20deg); }
  25% { transform: rotate(5deg); }
  80% { transform: rotate(5deg); }
}

@keyframes waving-left-pincer-thirdPart {
  0% { transform: rotate(-75deg); }
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

      .second-part {
        animation-name: waving-right-pincer-secondPart;
        animation-duration: 2.5s;
        animation-delay: 0.5s;
        animation-timing-function: ease-in-out;

        .third-part {
          animation-name: waving-right-pincer-thirdPart;
          animation-duration: 2.5s;
          animation-delay: 0.5s;
          animation-timing-function: ease-in-out;
        }
      }
    }

    .left-pincer {
      animation-name: waving-left-pincer;
      animation-duration: 2.5s;
      animation-delay: 1s;
      animation-timing-function: ease-in-out;

      .second-part {
        animation-name: waving-left-pincer-secondPart;
        animation-duration: 2.5s;
        animation-delay: 1s;
        animation-timing-function: ease-in-out;

        .third-part {
          animation-name: waving-left-pincer-thirdPart;
          animation-duration: 2.5s;
          animation-delay: 1s;
          animation-timing-function: ease-in-out;
        }
      }
    }
  }
}

//SNAPPING ANIMATION
@keyframes snapping-right-pincer {
  0% { transform: rotate(-20deg); }
  10% { transform: rotate(-30deg); }
  90% { transform: rotate(-30deg); }
}

@keyframes snapping-right-pincer-secondPart {
  0% { transform: rotate(20deg); }
  10% { transform: rotate(0deg); }
  90% { transform: rotate(0deg); }
}

@keyframes snapping-right-pincer-thirdPart {
  0% { transform: rotate(20deg); }
  10% { transform: rotate(10deg); }
  90% { transform: rotate(10deg); }
}

@keyframes snapping-right-pincer-close {
  0% { transform: rotate(5deg); }
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
  0% { transform: rotate(20deg); }
  10% { transform: rotate(30deg); }
  90% { transform: rotate(30deg); }
}

@keyframes snapping-left-pincer-secondPart {
  0% { transform: rotate(-20deg); }
  10% { transform: rotate(0deg); }
  90% { transform: rotate(0deg); }
}

@keyframes snapping-left-pincer-thirdPart {
  0% { transform: rotate(-75deg); }
  10% { transform: rotate(-10deg); }
  90% { transform: rotate(-10deg); }
}

/*
R-LLR-L---B-B-
11.43 beat split */

@keyframes snapping-left-pincer-close {
  0% { transform: rotate(-5deg); }
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

      .second-part {
        animation-name: snapping-right-pincer-secondPart;
        animation-duration: 3s;
        animation-delay: 0.5s;
        animation-timing-function: ease-in-out;

        .third-part {
          animation-name: snapping-right-pincer-thirdPart;
          animation-duration: 3s;
          animation-delay: 0.5s;
          animation-timing-function: ease-in-out;

          .moving-pincer {
            animation-name: snapping-right-pincer-close;
            animation-duration: 3s;
            animation-delay: 0.5s;
          }
        }
      }
    }

    .left-pincer {
      animation-name: snapping-left-pincer;
      animation-duration: 3s;
      animation-delay: 0.5s;
      animation-timing-function: ease-in-out;

      .second-part {
        animation-name: snapping-left-pincer-secondPart;
        animation-duration: 3s;
        animation-delay: 0.5s;
        animation-timing-function: ease-in-out;

        .third-part {
          animation-name: snapping-left-pincer-thirdPart;
          animation-duration: 3s;
          animation-delay: 0.5s;
          animation-timing-function: ease-in-out;

          .moving-pincer {
            animation-name: snapping-left-pincer-close;
            animation-duration: 3s;
            animation-delay: 0.5s;
          }
        }
      }
    }
  }
}
`;

export default Crab;
