import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import faCompress from '@fortawesome/fontawesome-pro-light/faCompress';
import faExpand from '@fortawesome/fontawesome-pro-light/faExpand';

import Crab from '../../components/crab';

const GameBoard = ({
  hidingSpots,
  hidingSpotWidth,
  enterFullscreen,
  fullscreen,
  addPoint,
  crabDimensions,
  difficulty,
  screenWidth,
}) => (
  <div id="gameBoard">
    <div className="grid">
      {hidingSpots.map(col => (
        <div className="column">
          {col.map(row => (
            <div className="row">
              {row.hideable
                ? (
                  <div
                    className="hiding-spot"
                    style={`
                  width: ${hidingSpotWidth + 20}px;
                  height: ${(hidingSpotWidth * 1.25) + 20}px;
                `}
                  />
                )
                : null
            }
            </div>
          ))}
        </div>
      ))}
    </div>
    <div className="buttons">
      <button type="button" onClick={enterFullscreen}>
        {fullscreen
          ? <FAIcon icon={faCompress} />
          : <FAIcon icon={faExpand} />
      }
      </button>
    </div>
    <Crab
      id="testCrab"
      addPoint={addPoint}
      hidingSpots={hidingSpots}
      crabDimensions={crabDimensions}
      difficulty={difficulty}
      screenWidth={screenWidth}
    />
  </div>
);

GameBoard.propTypes = {

};

export default GameBoard;
