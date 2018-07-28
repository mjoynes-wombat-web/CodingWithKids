import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import sandCastle from '../../../../assets/images/sand-castle.png';

const UnstyledSandCastle = ({ className }) => (
  <div
    className={className}
    alt="Sand Castle"
  />
);

UnstyledSandCastle.propTypes = {
  className: PropTypes.string,
};

UnstyledSandCastle.defaultProps = {
  className: '',
};

const SandCastle = styled(UnstyledSandCastle)`
  background-image: url(${sandCastle});
`;

export default SandCastle;
