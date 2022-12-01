import { Box, Container } from '@mui/material';
import ReferRequestList from './components/ReferRequestList';
import ReferRequestListToolbar from './components/ReferRequestListToolbar';
import referRequests from '../../__mocks__/referRequest';
import DashboardLayout from '../../common/dashboard';

const ReferRequest = () => (
  <DashboardLayout>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <ReferRequestListToolbar />
        <Box sx={{ mt: 3 }}>
          <ReferRequestList referRequests={referRequests} />
        </Box>
      </Container>
    </Box>
  </DashboardLayout>
);

export default ReferRequest;
