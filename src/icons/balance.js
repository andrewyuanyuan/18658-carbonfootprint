import { createSvgIcon } from '@mui/material/utils';
import React from 'react';

const BalanceIcon = createSvgIcon(
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path d="M3 19.5L11.5 11L7 8L9 0.5L0.5 9L5 12L3 19.5Z" fill="#818181" />
  </svg>,
  'balance',
);

export default BalanceIcon;
