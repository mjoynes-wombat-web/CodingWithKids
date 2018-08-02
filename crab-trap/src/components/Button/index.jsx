import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../../helpers/colors';

const UnstyledButton = ({
  className, children, disabled, onClick,
}) => (
  <button className={className} type="button" disabled={disabled} onClick={onClick}>
    {children}
  </button>
);

UnstyledButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

UnstyledButton.defaultProps = {
  disabled: false,
};

const Button = styled(UnstyledButton)`
  background-color: ${colors.turquoise};
  box-shadow: 0.125rem 0.125rem 0 ${colors.darkTeal};
  font-family: 'Lobster Two', Arnoldboecklin, cursive;
  line-height: normal;
  color: white;
  font-size: 2rem;
  padding: 0.75rem 1rem;
  appearance: none;
  border: none;
  border-radius: 0.25rem;
  outline: none;
  margin: 1rem 1rem;
  cursor: pointer;
  transition: transform 0.5s, background-color 0.5s, box-shadow 0.5s;
  display: inline-block;

  &:hover {
    background-color: ${colors.teal};
    transform: scale3d(1.08, 1.08, 1);
    box-shadow: 0.375rem 0.375rem 0 ${colors.darkTeal};
  }

  &:active, &:active:hover {
    background-color: ${colors.darkTeal};
    transform: scale3d(1.02,1.02,1);
  }

  &:disabled {
    background-color: #999;
    box-shadow: 0.125rem 0.125rem 0 black;
    cursor: not-allowed;

    &:hover {
      background-color: #999;
      transform: none;
      box-shadow: 0.125rem 0.125rem 0 black;
    }
  }

  svg.fa-expand, svg.fa-compress, svg.fa-walking {
    width: 1rem;
    height: 1rem;
  }
`;

export default Button;
