import React from 'react';
import DashboardLayout from '../../../common/dashboard';
import { Box, Container, Grid } from '@mui/material';
import Budget from '../components/Budget';
import LatestTransactions from '../components/LatestTransactions';
import LatestProjects from '../components/LatestProjects';
import Investment from '../components/Investment';
import QuotaStatus from '../components/QuotaStatus';
import TotalInvestments from '../components/TotalInvestments';
import TotalCarbonQuota from '../components/TotalCarbonQuota';
import InvestmentByCategory from '../components/InvestmentByCategory';

function Recent() {
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
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <LatestTransactions />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <LatestProjects sx={{ height: '100%' }} />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <Budget />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <TotalInvestments />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <QuotaStatus />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <TotalCarbonQuota sx={{ height: '100%' }} />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <Investment />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <InvestmentByCategory sx={{ height: '100%' }} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </DashboardLayout>
  );
}

export default Recent;
