import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import sandCastle from '../../../../assets/images/sand-castle.png';

const UnstyledSandCastle = ({ className }) => (
  <div className={className}>
    <img src={sandCastle} alt="Sand Castle" />
  </div>
);

UnstyledSandCastle.propTypes = {
  className: PropTypes.string,
};

UnstyledSandCastle.defaultProps = {
  className: '',
};

const SandCastle = styled(UnstyledSandCastle)`
  img {
    width: 90%;
    pointer-events: all;
    margin-bottom: 20%;
  }
`;

export default SandCastle;
