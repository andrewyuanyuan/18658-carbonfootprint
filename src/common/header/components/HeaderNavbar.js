import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, Box, Button, IconButton, Toolbar, Tooltip } from '@mui/material';
import BellIcon from '../../../icons/bell';
import UserCircleIcon from '../../../icons/user-circle';
import AccountPopover from '../../dashboard/components/AccountPopover';
import Logo from '../../Logo';

const HeaderNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const HeaderNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;
  const settingsRef = useRef(null);
  const [openAccountPopover, setOpenAccountPopover] = useState(false);
  const [loginStatus, setloginStatus] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem('username');
    if (username) {
      setloginStatus(true);
    }
  }, []);

  return (
    <>
      <HeaderNavbarRoot {...other}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
          }}
        >
          <Box sx={{ p: 2 }}>
            <a>
              <Logo sx={{ height: 42, width: 42 }} />
            </a>
          </Box>

          <Box sx={{ m: 1 }}>
            <Button href="\" color="primary" variant="text">
              Project Gallery
            </Button>
          </Box>

          {localStorage.getItem('role') === 'investor' ? (
            <Box sx={{ m: 1 }}>
              <Button href="\dashboard" color="primary" variant="text">
                Accounting Dashboard
              </Button>
            </Box>
          ) : (
            <Box sx={{ m: 1 }}>
              <Button href="\dashboard-fundrasing" color="primary" variant="text">
                Fund Raising Dashboard
              </Button>
            </Box>
          )}

          <Box sx={{ flexGrow: 1 }} />

          {loginStatus ? (
            <>
              <Tooltip title="Notifications">
                <IconButton sx={{ ml: 1 }}>
                  <Badge badgeContent={4} color="primary" variant="dot">
                    <BellIcon fontSize="small" />
                  </Badge>
                </IconButton>
              </Tooltip>
              <Avatar
                onClick={() => setOpenAccountPopover(true)}
                ref={settingsRef}
                sx={{
                  cursor: 'pointer',
                  height: 40,
                  width: 40,
                  ml: 1,
                }}
                src="/static/images/avatars/avatar_13.png"
              >
                <UserCircleIcon fontSize="small" />
              </Avatar>
            </>
          ) : (
            <></>
          )}
        </Toolbar>
      </HeaderNavbarRoot>

      <AccountPopover
        anchorEl={settingsRef.current}
        open={openAccountPopover}
        onClose={() => setOpenAccountPopover(false)}
      />
    </>
  );
};

HeaderNavbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};

export default HeaderNavbar;
