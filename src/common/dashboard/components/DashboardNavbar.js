import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, Box, Button, IconButton, Toolbar, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BellIcon from '../../../icons/bell';
import UserCircleIcon from '../../../icons/user-circle';
import AccountPopover from './AccountPopover';
import Logo from '../../Logo';

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

function convert_flag() {
  let curUser = localStorage.getItem('currentuser');
  let cur = JSON.parse(localStorage.getItem('users'));
  cur[curUser]['notification'] = !cur[curUser]['notification'];
  localStorage.setItem('users', JSON.stringify(cur));
}

const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;
  const settingsRef = useRef(null);
  const [openAccountPopover, setOpenAccountPopover] = useState(false);
  const [activeNotification, switchNotification] = useState(
    JSON.parse(localStorage.getItem('users'))[localStorage.getItem('currentuser')]['notification'],
  );

  return (
    <>
      <DashboardNavbarRoot {...other}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none',
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>

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

          {localStorage.getItem('currentrole') === 'investor' ? (
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

          {localStorage.getItem('currentrole') === 'owner' ? (
            <Box sx={{ m: 1 }}>
              <Button href="\postProject" color="primary" variant="text">
                Post Project
              </Button>
            </Box>
          ) : (
            <></>
          )}

          {localStorage.getItem('currentrole') === 'owner' ? (
            <Box sx={{ m: 1 }}>
              <Button href="\myProjects" color="primary" variant="text">
                My Projects
              </Button>
            </Box>
          ) : (
            <></>
          )}

          <Box sx={{ m: 1 }}>
            <Button
              color="primary"
              variant="text"
              onClick={() => {
                let cur = JSON.parse(localStorage.getItem('users'));
                cur[localStorage.getItem('currentuser')]['notification'] = false;
                localStorage.setItem('users', JSON.stringify(cur));
                window.location.href = '/Chat';
              }}
            >
              Chatroom
            </Button>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <>
            <Tooltip title="Notifications">
              <IconButton sx={{ ml: 1 }}>
                <Badge badgeContent={activeNotification ? 1 : 0} color="primary" variant="dot">
                  <BellIcon
                    fontSize="small"
                    onClick={() => {
                      if (activeNotification) {
                        convert_flag();
                      }
                      window.location.href = 'Chat';
                    }}
                  />
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
              src={'/static/images/avatars/' + localStorage.getItem('currentuser') + '.png'}
            >
              <UserCircleIcon fontSize="small" />
            </Avatar>
          </>
        </Toolbar>
      </DashboardNavbarRoot>
      <AccountPopover
        anchorEl={settingsRef.current}
        open={openAccountPopover}
        onClose={() => setOpenAccountPopover(false)}
      />
    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};

export default DashboardNavbar;
