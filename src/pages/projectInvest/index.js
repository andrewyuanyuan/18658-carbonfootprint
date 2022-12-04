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
import {v4 as uuid} from 'uuid';

function ProjectInvest() {
  let { category, id } = useParams();
  let projectDetail = JSON.parse(localStorage.getItem('projects'))[category][id];
  const [open, setOpen] = React.useState(false);
  const [snackOpen, setSnackOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [uinput, setUinput] = React.useState('');
  const handleClickOpen = (message) => {
    // if (!isInteger(message))
    let test = parseFloat(message)
    console.log(uinput - parseFloat(uinput))
    if(isNaN(uinput - parseFloat(uinput))){
      alert("Please enter a valid number")
    }
    else {
      setOpen(true);
    }
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
    let users = JSON.parse(localStorage.getItem('users'));
    let transactions = users["chrisjohnson"].transactions;
    let name_check = category + '/' + id
    let exisit_check = false;
    let set_amount = parseFloat(message);
    let current = new Date();
    let status = ['pending', 'delivered', 'refunded'];

    var char_result           = 'CDD';
    var characters       = '1234567890';
    var charactersLength = characters.length;
    let uid = uuid();
    for ( var i = 0; i < 3; i++ ) {
      char_result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }







    users["chrisjohnson"].transactions.push({'name':name_check,'amount':message, 'date': current.toLocaleDateString(),
    'time': current.toLocaleTimeString(), 'id': uid, 'ref': char_result, 'projectName':projectDetail.name,
      'type': status[Math.floor(Math.random() * status.length)]});
    for(let i =0; i < users["abbysmith"].projects.length; i++)
    {
      if(users["abbysmith"].projects[i].localeCompare(name_check) === 0) {
        users["abbysmith"].transactions.push({'name':name_check,'amount':message, 'date': current.toLocaleDateString(),
          'time' : current.toLocaleTimeString(),'id': uid, 'ref': char_result, 'projectName':projectDetail.name,
        'type' : 'deposit'});
      }
    }
    localStorage.setItem('users', JSON.stringify(users));
    setSnackOpen(true);
  };

  const amountConversion = (event) => {
    let price = projectDetail.pricing;
    let result = price.slice(1);
    let target_amount = parseFloat(event.target.value);
    setUinput(event.target.value);
    result = parseFloat(result.slice(0, -6));
    let final_price = target_amount * result;
    if (isNaN(event.target.value - parseFloat(event.target.value))) {
      final_price = 0;
    }
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
                onClick={() => handleClickOpen(message)}
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