import { useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import HeaderNavbar from './components/HeaderNavbar';

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
      <HeaderNavbar onSidebarOpen={() => setSidebarOpen(true)} />
    </>
  );
};

export default HeaderLayout;
