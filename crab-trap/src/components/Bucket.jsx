import React from 'react';
import PropTypes from 'prop-types';

import bucket from '../assets/images/bucket.png';
import styled from '../../node_modules/styled-components';

const UnstyledBucket = ({ className }) => (
  <div className={`${className} bucket`}>
    <img src={bucket} alt="Bucket" />
  </div>
);

UnstyledBucket.propTypes = {
  className: PropTypes.string.isRequired,
};

const Bucket = styled(UnstyledBucket)`
opacity: 0;
pointer-events: none;
position: absolute;
top: -300%;
width: 100%;
bottom: 0;

img {
  width: 100%;
  height: auto;
}
`;
// -65% for covered;

export default Bucket;
