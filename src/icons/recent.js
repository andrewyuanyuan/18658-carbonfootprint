import { createSvgIcon } from '@mui/material/utils';
import React from 'react';

const RecentIcon = createSvgIcon(
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path d="M13 4L18 12H8L13 4Z" fill="#0F56B3" />
    <path d="M10.4714 4.75426L7.5 0L0 12H5.94282L10.4714 4.75426Z" fill="#0F56B3" />
  </svg>,
  'recent',
);

export default RecentIcon;
