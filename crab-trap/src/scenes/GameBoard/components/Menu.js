import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faEllipsisV from '@fortawesome/fontawesome-pro-light/faEllipsisV';
import faPause from '@fortawesome/fontawesome-pro-regular/faPause';
import faPlay from '@fortawesome/fontawesome-pro-regular/faPlay';
import faTimes from '@fortawesome/fontawesome-pro-regular/faTimes';

import colors from '../../../helpers/colors';

class UnstyledMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    const { open } = this.state;
    return this.setState({ open: !open });
  }

  render() {
    const {
      className, pause, exit, paused, unpause,
    } = this.props;
    const { open } = this.state;
    return (
      <nav className={`${open ? 'open' : ''} ${className}`}>
        <button type="button" className="menu-button" onClick={this.toggleOpen}>
          <FontAwesomeIcon icon={faEllipsisV} />
        </button>
        <div className="menu-list">
          <button type="button" className="close" onClick={this.toggleOpen}>
            <span className="icon">
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </button>
          <ul>
            <li>
              {paused
                ? (
                  <button type="button" onClick={(e) => { this.toggleOpen(); unpause(e); }}>
                    <span className="icon">
                      <FontAwesomeIcon icon={faPlay} />
                    </span>
                    <span className="text">
                      Continue
                    </span>
                  </button>
                )
                : (
                  <button type="button" onClick={(e) => { this.toggleOpen(); pause(e); }}>
                    <span className="icon">
                      <FontAwesomeIcon icon={faPause} />
                    </span>
                    <span className="text">
                      Pause
                    </span>
                  </button>
                )}

            </li>
            <li>
              <button type="button" onClick={exit}>
                <span className="icon">
                  <FontAwesomeIcon icon={faTimes} />
                </span>
                <span className="text">
                  Exit Game
                </span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

UnstyledMenu.propTypes = {
  className: PropTypes.string.isRequired,
  pause: PropTypes.func.isRequired,
  unpause: PropTypes.func.isRequired,
  exit: PropTypes.func.isRequired,
  paused: PropTypes.bool,
};

UnstyledMenu.defaultProps = {
  paused: false,
};

const Menu = styled(UnstyledMenu)`
position: absolute;
z-index: 50001
;
top: 0;
left: 0;
height: 100%;
width: 15rem;

button {
  background-color: transparent;
}

.menu-button {
  height: 3rem;
  padding: 1rem 1rem;
  box-sizing: content-box;

  .fa-ellipsis-v {
    height: 100%;
    width: auto;
    color: ${colors.darkOrange};
    filter: drop-shadow(0.125rem 0.125rem 0 ${colors.darkBrown});
    transition: color 0.5s, transform 0.5s;
  }

  &:hover .fa-ellipsis-v {
      color: ${colors.orange};
      transform: scale3d(1.375, 1.375, 1);
  }

  &:active .fa-ellipsis-v, &:active:hover .fa-ellipsis-v {
    color: ${colors.darkOrange};
    transform: scale3d(1.125,1.125,1);
  }
}

.menu-list {
  width: 100%;
  position: absolute;
  z-index: 3000;
  transform: translateX(-100%);
  transition: all 0.5s;
  top: 0;
  height: 100vh;
  background-color: ${colors.turquoise};
  border-right: 0.125rem solid ${colors.darkTeal};
  color: white;
  font-family: 'Lobster Two', Arnoldboecklin, cursive;

  button {
    color: white;
    padding: 1rem 1.25rem 1.125rem 1.25rem;
    text-align: right;
    font-size: 1.0625rem;
    transition: transform 0.5s;

    &.close {
      float: right;
    }

    &:hover {
      transform: scale3d(1.1, 1.1, 1);
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    button {
      padding: 1.125rem;
      text-align: left;
      font-size: 1.375rem;
      transform-origin: left;
      width: 100%;

      .icon {
        margin: 0 0.5rem 0 0;
        .fa-pause, .fa-play {
          font-size: 1.125rem;
        }
      }
    }
  }
}

&.open .menu-list {
  transform: translateX(0);
}
`;

export default Menu;
