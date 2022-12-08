import { useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import HeaderNavbar from './components/HeaderNavbar';
import NotificationPop from './components/NotificationPop';

const HeaderLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
}));

const HeaderLayout = (props) => {
  const { children } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <HeaderLayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          {children}
        </Box>
      </HeaderLayoutRoot>
      {JSON.parse(localStorage.getItem('users'))[localStorage.getItem('currentuser')]['notification'] &&
      !JSON.parse(localStorage.getItem('disableNotification')) ? (
        <NotificationPop />
      ) : (
        <></>
      )}

      <HeaderNavbar onSidebarOpen={() => setSidebarOpen(true)} />
    </>
  );
};

export default HeaderLayout;
