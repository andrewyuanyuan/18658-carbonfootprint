import React from 'react';
import DashboardLayout from '../../../common/dashboard';
import { Box, Container, Grid } from '@mui/material';
import SaleChange from '../components/SaleChange';
import BankActivity from '../components/BankActivity';
import RecentProgress from '../components/RecentProgress';
import Sales from '../components/Sales';
import OngoingProject from '../components/OngoingProject';

function FundrasingRecent() {
  return (
    <DashboardLayout>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item lg={6} sm={6} xl={3} xs={12}>
              <SaleChange />
            </Grid>
            <Grid item xl={6} lg={6} sm={6} xs={12}>
              <OngoingProject />
            </Grid>
            <Grid item lg={12} md={12} xl={9} xs={12}>
              <Sales />
            </Grid>
            <Grid item lg={12} md={6} xl={3} xs={12}>
              <RecentProgress sx={{ height: '100%' }} />
            </Grid>
            <Grid item lg={12} md={12} xl={9} xs={12}>
              <BankActivity />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </DashboardLayout>
  );
}

export default FundrasingRecent;
