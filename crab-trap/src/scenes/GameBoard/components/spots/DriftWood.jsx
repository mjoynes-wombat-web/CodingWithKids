import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import driftWood from '../../../../assets/images/drift-wood.png';

const UnstyledDriftWood = ({ className }) => (
  <div className={className}>
    <img src={driftWood} alt="Drift Wood" />
  </div>
);

UnstyledDriftWood.propTypes = {
  className: PropTypes.string,
};

UnstyledDriftWood.defaultProps = {
  className: '',
};

const DriftWood = styled(UnstyledDriftWood)`
  img {
    width: 100%;
    pointer-events: all;
    margin-bottom: 10%;
  }
`;

export default DriftWood;
