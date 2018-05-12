import Preact from 'preact';
import styled from 'styled-components';

import CrabSVG from '-!svg-react-loader!../assets/design/crab-final.svg';

const UnstyledCrab = ({ className, walk, direction='right' }) => (
    <CrabSVG className={`${className} ${walk === true ? 'walking' : null} ${direction}`} />
);

const Crab = styled(UnstyledCrab)`
  width: 50%;
  overflow: visible;

//******LEFT LEGS ANIMATIONS******//
// First Leg Animations
@keyframes moveLefts-firstLeg-firstPart {
  0% {
    transform: rotate(-14deg);
  }

  10% {
    transform: rotate(-14deg);
  }

  50% {
    transform: rotate(13deg);
  }

  100% {
    transform: rotate(-14deg);
  }
}

@keyframes moveLefts-firstLeg-secondPart {
  0% {
    transform: rotate(31deg);
  }

  35% {
    transform: rotate(-25deg);
  }

  50% {
    transform: rotate(-25deg);
  }

  100% {
    transform: rotate(31deg);
  }
}

@keyframes moveLefts-firstLeg-thirdPart {
  0% {
    transform: rotate(-17deg);
  }

  35% {
    transform: rotate(8deg);
  }

  50% {
    transform: rotate(12deg);
  }
  
  100% {
    transform: rotate(-17deg);
  }
}

// Second Leg Animations
@keyframes moveLefts-secondLeg-firstPart {
  0% {
    transform: rotate(-15.5deg);
  }

  10% {
    transform: rotate(-15.5deg);
  }

  50% {
    transform: rotate(10deg);
  }

  100% {
    transform: rotate(-15.5deg);
  }
}

@keyframes moveLefts-secondLeg-secondPart {
  0% {
    transform: rotate(21deg);
  }

  35% {
    transform: rotate(-30deg);
  }

  50% {
    transform: rotate(-30deg);
  }

  100% {
    transform: rotate(21deg);
  }
}

@keyframes moveLefts-secondLeg-thirdPart {
  0% {
    transform: rotate(-16deg);
  }

  35% {
    transform: rotate(8deg);
  }

  50% {
    transform: rotate(12deg);
  }
  
  100% {
    transform: rotate(-16deg);
  }
}

// Third Leg Animations
@keyframes moveLefts-thirdLeg-firstPart {
  0% {
    transform: rotate(-15.5deg);
  }

  10% {
    transform: rotate(-15.5deg);
  }

  50% {
    transform: rotate(10deg);
  }

  100% {
    transform: rotate(-15.5deg);
  }
}

@keyframes moveLefts-thirdLeg-secondPart {
  0% {
    transform: rotate(4deg);
  }

  35% {
    transform: rotate(-35deg);
  }

  50% {
    transform: rotate(-35deg);
  }

  100% {
    transform: rotate(4deg);
  }
}

@keyframes moveLefts-thirdLeg-thirdPart {
  0% {
    transform: rotate(3deg);
  }

  35% {
    transform: rotate(-3deg);
  }

  50% {
    transform: rotate(-3deg);
  }
  
  100% {
    transform: rotate(3deg);
  }
}

// Fourth Leg Animations
@keyframes moveLefts-fourthLeg-firstPart {
  0% {
    transform: rotate(-11deg);
  }

  10% {
    transform: rotate(-11deg);
  }

  50% {
    transform: rotate(14deg);
  }

  100% {
    transform: rotate(-11deg);
  }
}

@keyframes moveLefts-fourthLeg-secondPart {
  0% {
    transform: rotate(3.5deg);
  }

  35% {
    transform: rotate(-35deg);
  }

  50% {
    transform: rotate(-35deg);
  }

  100% {
    transform: rotate(3.5deg);
  }
}

@keyframes moveLefts-fourthLeg-thirdPart {
  0% {
    transform: rotate(-15deg);
  }

  35% {
    transform: rotate(-45deg);
  }

  50% {
    transform: rotate(-45deg);
  }
  
  100% {
    transform: rotate(-15deg);
  }
}

//******RIGHT LEGS ANIMATIONS******//
// First Leg Animations
@keyframes moveRights-firstLeg-firstPart {
  0% {
    transform: rotate(14deg);
  }

  10% {
    transform: rotate(14deg);
  }

  50% {
    transform: rotate(-13deg);
  }

  100% {
    transform: rotate(14deg);
  }
}

@keyframes moveRights-firstLeg-secondPart {
  0% {
    transform: rotate(-31deg);
  }

  35% {
    transform: rotate(25deg);
  }

  50% {
    transform: rotate(25deg);
  }

  100% {
    transform: rotate(-31deg);
  }
}

@keyframes moveRights-firstLeg-thirdPart {
  0% {
    transform: rotate(17deg);
  }

  35% {
    transform: rotate(-8deg);
  }

  50% {
    transform: rotate(-12deg);
  }
  
  100% {
    transform: rotate(17deg);
  }
}

// Second Leg Animations
@keyframes moveRights-secondLeg-firstPart {
  0% {
    transform: rotate(15.5deg);
  }

  10% {
    transform: rotate(15.5deg);
  }

  50% {
    transform: rotate(-10deg);
  }

  100% {
    transform: rotate(15.5deg);
  }
}

@keyframes moveRights-secondLeg-secondPart {
  0% {
    transform: rotate(-21deg);
  }

  35% {
    transform: rotate(30deg);
  }

  50% {
    transform: rotate(30deg);
  }

  100% {
    transform: rotate(-21deg);
  }
}

@keyframes moveRights-secondLeg-thirdPart {
  0% {
    transform: rotate(16deg);
  }

  35% {
    transform: rotate(-8deg);
  }

  50% {
    transform: rotate(-12deg);
  }
  
  100% {
    transform: rotate(16deg);
  }
}

// Third Leg Animations
@keyframes moveRights-thirdLeg-firstPart {
  0% {
    transform: rotate(15.5deg);
  }

  10% {
    transform: rotate(15.5deg);
  }

  50% {
    transform: rotate(-10deg);
  }

  100% {
    transform: rotate(15.5deg);
  }
}

@keyframes moveRights-thirdLeg-secondPart {
  0% {
    transform: rotate(-4deg);
  }

  35% {
    transform: rotate(35deg);
  }

  50% {
    transform: rotate(35deg);
  }

  100% {
    transform: rotate(-4deg);
  }
}

@keyframes moveRights-thirdLeg-thirdPart {
  0% {
    transform: rotate(-3deg);
  }

  35% {
    transform: rotate(3deg);
  }

  50% {
    transform: rotate(3deg);
  }
  
  100% {
    transform: rotate(-3deg);
  }
}

// Fourth Leg Animations
@keyframes moveRights-fourthLeg-firstPart {
  0% {
    transform: rotate(11deg);
  }

  10% {
    transform: rotate(11deg);
  }

  50% {
    transform: rotate(-14deg);
  }

  100% {
    transform: rotate(11deg);
  }
}

@keyframes moveRights-fourthLeg-secondPart {
  0% {
    transform: rotate(-3.5deg);
  }

  35% {
    transform: rotate(35deg);
  }

  50% {
    transform: rotate(35deg);
  }

  100% {
    transform: rotate(-3.5deg);
  }
}

@keyframes moveRights-fourthLeg-thirdPart {
  0% {
    transform: rotate(15deg);
  }

  35% {
    transform: rotate(45deg);
  }

  50% {
    transform: rotate(45deg);
  }
  
  100% {
    transform: rotate(15deg);
  }
}

#left-legs {
    #first-leg {
        transform: rotate(-14deg);
        transform-origin: 56.71% 54.65%;

        #second-part {
            transform: rotate(31deg);
            transform-origin: 73.03% 33.13%;

            #third-part {
                transform: rotate(-17deg);
                transform-origin: 88.36% 49.33%;
            }
        }
    }

    #second-leg {
        transform: rotate(-15.5deg);
        transform-origin: 56.12% 62.95%;

        #second-part {
            transform: rotate(21deg);
            transform-origin: 69.94% 45.98%;

            #third-part {
                transform: rotate(-16deg);
                transform-origin: 83.4% 60.38%;
            }
        }
    }

    #third-leg {
        transform: rotate(-15.5deg);
        transform-origin: 55.63% 70.63%;

        #second-part {
            transform: rotate(4deg);
            transform-origin: 67.48% 57%;

            #third-part {
                transform: rotate(3deg);
                transform-origin: 79.41% 70.08%;
            }
        }
    }

    #fourth-leg {
        transform: rotate(-11deg);
        transform-origin: 55.08% 77.28%;

        #second-part {
            transform: rotate(3.5deg);
            transform-origin: 65.42% 65.93%;

            #third-part {
                transform: rotate(-15deg);
                transform-origin: 76.48% 77.93%;
            }
        }
    }
}

.right-legs {
    #first-leg {
        transform: rotate(14deg);
        transform-origin: 43.29% 54.65%;

        #second-part {
            transform: rotate(-31deg);
            transform-origin: 26.97% 33.13%;

            #third-part {
                transform: rotate(17deg);
                transform-origin: 11.64% 49.33%;
            }
        }
    }

    #second-leg {
        transform: rotate(15.5deg);
        transform-origin: 43.88% 62.95%;

        #second-part {
            transform: rotate(-21deg);
            transform-origin: 30.06% 45.98%;

            #third-part {
                transform: rotate(16deg);
                transform-origin: 16.6% 60.38%;
            }
        }
    }

    #third-leg {
        transform: rotate(15.5deg);
        transform-origin: 44.37% 70.63%;

        #second-part {
            transform: rotate(-4deg);
            transform-origin: 32.52% 57%;

            #third-part {
                transform: rotate(-3deg);
                transform-origin: 20.59% 70.08%;
            }
        }
    }

    #fourth-leg {
        transform: rotate(11deg);
        transform-origin: 44.92% 77.28%;

        #second-part {
            transform: rotate(-3.5deg);
            transform-origin: 34.58% 65.93%;

            #third-part {
                transform: rotate(15deg);
                transform-origin: 23.52% 77.93%;
            }
        }
    }
}

&.walking {
    #left-legs {
        #first-leg {
            animation-name: moveLefts-firstLeg-firstPart;
            animation-duration: 1s;
            animation-delay:0.125s;
            animation-iteration-count: infinite;
            animation-direction: ${props => (props.direction === 'right' ? 'normal' : 'reverse')};

            #second-part {
                animation-name: moveLefts-firstLeg-secondPart;
                animation-duration: 1s;
                animation-delay:0.125s;
                animation-iteration-count: infinite;
                animation-direction: ${props => (props.direction === 'right' ? 'normal' : 'reverse')};

                #third-part {
                    animation-name: moveLefts-firstLeg-thirdPart;
                    animation-duration: 1s;
                    animation-delay:0.125s;
                    animation-iteration-count: infinite;
                    animation-direction: ${props => (props.direction === 'right' ? 'normal' : 'reverse')};
                }
            }
        }

        #second-leg {
            animation-name: moveLefts-secondLeg-firstPart;
            animation-duration: 1s;
            animation-delay:0.375s;
            animation-iteration-count: infinite;
            animation-direction: ${props => (props.direction === 'right' ? 'normal' : 'reverse')};

            #second-part {
                animation-name: moveLefts-secondLeg-secondPart;
                animation-duration: 1s;
                animation-delay:0.375s;
                animation-iteration-count: infinite;
                animation-direction: ${props => (props.direction === 'right' ? 'normal' : 'reverse')};

                #third-part {
                    animation-name: moveLefts-secondLeg-thirdPart;
                    animation-duration: 1s;
                    animation-delay:0.375s;
                    animation-iteration-count: infinite;
                    animation-direction: ${props => (props.direction === 'right' ? 'normal' : 'reverse')};
                }
            }
        }

        #third-leg {
            animation-name: moveLefts-thirdLeg-firstPart;
            animation-duration: 1s;
            animation-iteration-count: infinite;
            animation-direction: ${props => (props.direction === 'right' ? 'normal' : 'reverse')};

            #second-part {
                animation-name: moveLefts-thirdLeg-secondPart;
                animation-duration: 1s;
                animation-iteration-count: infinite;
                animation-direction: ${props => (props.direction === 'right' ? 'normal' : 'reverse')};

                #third-part {
                    animation-name: moveLefts-thirdLeg-thirdPart;
                    animation-duration: 1s;
                    animation-iteration-count: infinite;
                    animation-direction: ${props => (props.direction === 'right' ? 'normal' : 'reverse')};
                }
            }
        }

        #fourth-leg {
            animation-name: moveLefts-fourthLeg-firstPart;
            animation-duration: 1s;
            animation-delay:0.25s;
            animation-iteration-count: infinite;
            animation-direction: ${props => (props.direction === 'right' ? 'normal' : 'reverse')};

            #second-part {
                animation-name: moveLefts-fourthLeg-secondPart;
                animation-duration: 1s;
                animation-delay:0.25s;
                animation-iteration-count: infinite;
                animation-direction: ${props => (props.direction === 'right' ? 'normal' : 'reverse')};

                #third-part {
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
        #first-leg {
            animation-name: moveRights-firstLeg-firstPart;
            animation-duration: 1s;
            animation-delay:0.255s;
            animation-iteration-count: infinite;
            animation-direction: ${props => (props.direction === 'right' ? 'reverse' : 'normal')};

            #second-part {
                animation-name: moveRights-firstLeg-secondPart;
                animation-duration: 1s;
                animation-delay:0.255s;
                animation-iteration-count: infinite;
                animation-direction: ${props => (props.direction === 'right' ? 'reverse' : 'normal')};

                #third-part {
                    animation-name: moveRights-firstLeg-thirdPart;
                    animation-duration: 1s;
                    animation-delay:0.255s;
                    animation-iteration-count: infinite;
                    animation-direction: ${props => (props.direction === 'right' ? 'reverse' : 'normal')};
                }
            }
        }

        #second-leg {
            animation-name: moveRights-secondLeg-firstPart;
            animation-duration: 1s;
            animation-delay:0.12s;
            animation-iteration-count: infinite;
            animation-direction: ${props => (props.direction === 'right' ? 'reverse' : 'normal')};

            #second-part {
                animation-name: moveRights-secondLeg-secondPart;
                animation-duration: 1s;
                animation-delay:0.12s;
                animation-iteration-count: infinite;
                animation-direction: ${props => (props.direction === 'right' ? 'reverse' : 'normal')};

                #third-part {
                    animation-name: moveRights-secondLeg-thirdPart;
                    animation-duration: 1s;
                    animation-delay:0.12s;
                    animation-iteration-count: infinite;
                    animation-direction: ${props => (props.direction === 'right' ? 'reverse' : 'normal')};
                }
            }
        }

        #third-leg {
            animation-name: moveRights-thirdLeg-firstPart;
            animation-duration: 1s;
            animation-delay:0.37s;
            animation-iteration-count: infinite;
            animation-direction: ${props => (props.direction === 'right' ? 'reverse' : 'normal')};

            #second-part {
                animation-name: moveRights-thirdLeg-secondPart;
                animation-duration: 1s;
                animation-delay:0.37s;
                animation-iteration-count: infinite;
                animation-direction: ${props => (props.direction === 'right' ? 'reverse' : 'normal')};

                #third-part {
                    animation-name: moveRights-thirdLeg-thirdPart;
                    animation-duration: 1s;
                    animation-delay:0.37s;
                    animation-iteration-count: infinite;
                    animation-direction: ${props => (props.direction === 'right' ? 'reverse' : 'normal')};
                }
            }
        }

        #fourth-leg {
            animation-name: moveRights-fourthLeg-firstPart;
            animation-duration: 1s;
            animation-delay:0.005s;
            animation-iteration-count: infinite;
            animation-direction: ${props => (props.direction === 'right' ? 'reverse' : 'normal')};

            #second-part {
                animation-name: moveRights-fourthLeg-secondPart;
                animation-duration: 1s;
                animation-delay:0.005s;
                animation-iteration-count: infinite;
                animation-direction: ${props => (props.direction === 'right' ? 'reverse' : 'normal')};

                #third-part {
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
`;

export default Crab;
