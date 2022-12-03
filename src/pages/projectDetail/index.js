import React from 'react';
import HeaderLayout from '../../common/header';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import MessageIcon from '@mui/icons-material/Message';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { useParams } from 'react-router-dom';

function ProjectDetail() {
  let { category, id } = useParams();
  let projectDetail = JSON.parse(localStorage.getItem('projects'))[category][id];

  return (
    <HeaderLayout>
      <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
        <Container maxWidth="lg">
          <Typography sx={{ mb: 3 }} variant="h4">
            {projectDetail.name}
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia component="img" image={projectDetail.image} />
              </Card>
            </Grid>
            <Grid item lg={8} md={6} xs={12}>
              <Grid sx={{ mt: 3 }}>
                <Typography sx={{ mb: 4 }} variant="h6">
                  Project Name: {projectDetail.name}
                </Typography>
                <Typography sx={{ mb: 4 }} variant="h6">
                  City: {projectDetail.city}
                </Typography>
                <Typography sx={{ mb: 4 }} variant="h6">
                  Country: {projectDetail.country}
                </Typography>
                <Typography sx={{ mb: 4 }} variant="h6">
                  Pricing: {projectDetail.pricing}
                </Typography>
                <Typography sx={{ mb: 4 }} variant="h6">
                  Contact: {projectDetail.contact}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Typography sx={{ mt: 3, mb: 3 }} variant="body1">
            {projectDetail.description}
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              <Typography sx={{ mt: 6, mb: 3 }} variant="h5">
                Have Questions?
              </Typography>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Button
                component="a"
                startIcon={<MessageIcon fontSize="medium" />}
                sx={{ mt: 6, mb: 3 }}
                variant="contained"
                href="/"
              >
                Message the provider
              </Button>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              <Typography sx={{ mt: 6, mb: 3 }} variant="h5">
                Made up your mind?
              </Typography>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Button
                component="a"
                startIcon={<CurrencyExchangeIcon fontSize="medium" />}
                sx={{ mt: 6, mb: 3 }}
                variant="contained"
                href="/"
              >
                Make Investment
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </HeaderLayout>
  );
}

export default ProjectDetail;
