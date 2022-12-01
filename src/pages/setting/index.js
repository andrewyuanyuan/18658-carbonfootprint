import { Box, Container, Typography } from '@mui/material';
import DashboardLayout from '../../common/dashboard';
import SettingsPassword from './components/SettingsPassword';

const Settings = () => (
  <DashboardLayout>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography sx={{ mb: 3 }} variant="h4">
          Settings
        </Typography>
        <Box sx={{ pt: 3 }}>
          <SettingsPassword />
        </Box>
      </Container>
    </Box>
  </DashboardLayout>
);

export default Settings;
