import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const Logo = styled(() => (
  <Typography
    variant="h6"
    noWrap
    component="a"
    href="/"
    sx={{
      mr: 2,
      display: { xs: 'none', md: 'flex' },
      fontFamily: 'monospace',
      fontWeight: 700,
      letterSpacing: '.3rem',
      color: 'primary',
      textDecoration: 'none',
    }}
  >
    Cynance
  </Typography>
))``;

Logo.defaultProps = {
  variant: 'primary',
};

Logo.propTypes = {
  variant: PropTypes.oneOf(['light', 'primary']),
};

export default Logo;
