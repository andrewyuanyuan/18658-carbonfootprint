import React from 'react';
import HeaderLayout from '../../common/header';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import MessageIcon from '@mui/icons-material/Message';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';

function ProjectInvest() {
  let { category, id } = useParams();
  let projectDetail = JSON.parse(localStorage.getItem('projects'))[category][id];
  const [open, setOpen] = React.useState(false);
  const [snackOpen, setSnackOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSnackOpen(false);
  };
  const handleSnackClose = () => {
    setOpen(false);
  };
  const paymentAlert = (message) => {
    let all_project = JSON.parse(localStorage.getItem('projects'));
    let set_to = parseFloat(all_project[category][id].donationReceived) + parseFloat(message);
    all_project[category][id].donationReceived = set_to;
    localStorage.setItem('projects', JSON.stringify(all_project));
    console.log(JSON.parse(localStorage.getItem('projects'))[category][id].donationReceived);
    setSnackOpen(true);
    // setOpen(false);
  };

  const amountConversion = (event) => {
    let price = projectDetail.pricing;
    let result = price.slice(1);
    let target_amount = parseFloat(event.target.value);
    result = parseFloat(result.slice(0, -6));
    let final_price = target_amount * result;
    if (isNaN(final_price)) {
      final_price = 0;
    }
    setMessage(final_price.toFixed(2));

    console.log(final_price.toFixed(2));
  };
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
                  Pricing: {projectDetail.pricing}
                </Typography>
                <Typography sx={{ mb: 4 }} variant="h6">
                  How much Carbon do you want to offset today?
                </Typography>
                <TextField id="standard-basic" label="Amount/tCO2e" variant="standard" onChange={amountConversion} />
                <Typography sx={{ mb: 4 }} variant="h6">
                  Price: ${message}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              <Typography sx={{ mt: 6, mb: 3 }} variant="h5"></Typography>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Button
                onClick={handleClickOpen}
                component="a"
                startIcon={<CurrencyExchangeIcon fontSize="medium" />}
                sx={{ mt: 6, mb: 3 }}
                variant="contained"
                // href="/"
              >
                Make Payment
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{'Confirm Purchase'}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    You are making a payment of ${message} to {projectDetail.name} , do you want to proceed?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>No</Button>
                  <Button onClick={() => paymentAlert(message)} autoFocus>
                    Yes
                  </Button>
                  <Snackbar
                    sx={{ height: '70%' }}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                    open={snackOpen}
                    autoHideDuration={6000}
                    onClose={handleClose}
                  >
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                      Congratualations! You can check your transactions in accounting dashboard
                    </Alert>
                  </Snackbar>
                </DialogActions>
              </Dialog>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </HeaderLayout>
  );
}

export default ProjectInvest;
