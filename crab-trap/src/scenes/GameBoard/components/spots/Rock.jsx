import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import rock from '../../../../assets/images/rock.png';

const UnstyledRock = ({ className }) => (
  <div className={className}>
    <img src={rock} alt="Rock" />
  </div>
);

UnstyledRock.propTypes = {
  className: PropTypes.string,
};

UnstyledRock.defaultProps = {
  className: '',
};

const Rock = styled(UnstyledRock)`
  img {
    width: 92%;
    pointer-events: all;
    margin-bottom: 5%;
  }
`;

export default Rock;
