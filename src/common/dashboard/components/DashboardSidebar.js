import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import CogIcon from '../../../icons/cog';
import LockIcon from '../../../icons/lock';
import SelectorIcon from '../../../icons/selector';
import NavItem from './NavItem';

const items = [
  // {
  //   href: '/customization',
  //   icon: <CogIcon fontSize="small" />,
  //   title: 'Customization',
  // },
  // {
  //   href: '/recent',
  //   icon: <CogIcon fontSize="small" />,
  //   title: 'Recent',
  // },
  // {
  //   href: '/transactions',
  //   icon: <CogIcon fontSize="small" />,
  //   title: 'Transactions',
  // },
  // {
  //   href: '/balance',
  //   icon: <CogIcon fontSize="small" />,
  //   title: 'Balance',
  // },
  // {
  //   href: '/emissionquota',
  //   icon: <CogIcon fontSize="small" />,
  //   title: 'Emission Quota',
  // },
  {
    href: '/test',
    icon: <CogIcon fontSize="small" />,
    title: 'Test Page',
  },
];

const loginItem = {
  href: '/login',
  icon: <LockIcon fontSize="small" />,
  title: 'Login / Register',
};

const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const [loginStatus, setloginStatus] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem('username');
    if (username) {
      setloginStatus(true);
    }
  }, []);

  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false,
  });

  const content = (
    <>
      <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div>
          <Box sx={{ px: 2 }}>
            {loginStatus ? (
              <Box
                sx={{
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  px: 3,
                  py: '11px',
                  borderRadius: 1,
                }}
              >
                <div>
                  <Typography color="inherit" variant="subtitle1">
                    {localStorage.getItem('username')}
                  </Typography>
                  <Typography color="neutral.400" variant="body2">
                    Your role : Referrer
                  </Typography>
                </div>
                <SelectorIcon
                  sx={{
                    color: 'neutral.500',
                    width: 14,
                    height: 14,
                  }}
                />
              </Box>
            ) : (
              <Button href={loginItem.href} startIcon={loginItem.icon} fullWidth color="primary" variant="contained">
                {loginItem.title}
              </Button>
            )}
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: '#2D3748',
            my: 3,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem key={item.title} icon={item.icon} href={item.href} title={item.title} />
          ))}
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            top: {
              lg: 64,
            },
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

export default DashboardSidebar;
