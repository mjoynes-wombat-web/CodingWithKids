import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import rock from '../../../../assets/images/rock.png';

const UnstyledRock = ({ className }) => (
  <div
    className={className}
    alt="Sea Rock"
  />
);

UnstyledRock.propTypes = {
  className: PropTypes.string,
};

UnstyledRock.defaultProps = {
  className: '',
};

const Rock = styled(UnstyledRock)`
  background-image: url(${rock});
`;

export default Rock;
