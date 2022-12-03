import PropTypes from 'prop-types';
import { Box, MenuItem, MenuList, Popover, Typography } from '@mui/material';
import axios from 'axios';
import ColorToggleButton from '../../../pages/postProject/component/roleSwitch';

function logout() {
  return axios.put('/users/logout', {}).then(function (response) {
    if (response.data.success === false) {
      alert('Logout failed.');
    }
    localStorage.clear();
    window.location.href = '/login';
  });
}

const roleMap = {
  owner: 'Project Owner',
  investor: 'Enterprise Investor',
};

const AccountPopover = (props) => {
  const { anchorEl, onClose, open, ...other } = props;

  const handleClickLogout = () => {
    logout();
  };

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom',
      }}
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: { width: '300px' },
      }}
      {...other}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2,
        }}
      >
        <Typography variant="overline">Account</Typography>
        <Typography>
          {roleMap[localStorage.getItem('currentrole')] + ': ' + localStorage.getItem('username')}
        </Typography>
        <Typography>Switch Your Role:</Typography>
        <ColorToggleButton></ColorToggleButton>
      </Box>

      <MenuList
        disablePadding
        sx={{
          '& > *': {
            '&:first-of-type': {
              borderTopColor: 'divider',
              borderTopStyle: 'solid',
              borderTopWidth: '1px',
            },
            padding: '12px 16px',
          },
        }}
      >
        <MenuItem onClick={handleClickLogout}>Sign out</MenuItem>
      </MenuList>
    </Popover>
  );
};

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
};

export default AccountPopover;
