import { Box, Container } from '@mui/material';
import MyApplicationList from './components/MyApplicationList';
import MyApplicationToolbar from './components/MyApplicationToolbar';
import myJobApplications from '../../__mocks__/myJobApplication';
import DashboardLayout from '../../common/dashboard';

const MyApplication = () => (
  <DashboardLayout>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <MyApplicationToolbar />
        <Box sx={{ mt: 3 }}>
          <MyApplicationList applications={myJobApplications} />
        </Box>
      </Container>
    </Box>
  </DashboardLayout>
);

export default MyApplication;
