import { useState, useEffect } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField } from '@mui/material';
import axios from 'axios';

export const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({});

  useEffect(() => {
    setValues(props.basicprofile);
  }, [props.basicprofile]);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form autoComplete="off" noValidate {...props}>
      <Card>
        <CardHeader subheader="The information can be edited" title="Basic Information" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={(values && values.firstName) || ''}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={(values && values.lastName) || ''}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={(values && values.email) || ''}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phoneNumber"
                onChange={handleChange}
                type="number"
                value={(values && values.phoneNumber) || ''}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Country"
                name="country"
                onChange={handleChange}
                required
                value={(values && values.country) || ''}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2,
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              axios
                .put('users/profile', values)
                .then(function (response) {
                  alert('Update user profile successfully');
                })
                .catch(function (error) {
                  alert('Update user profile failed!');
                });
            }}
          >
            Update details
          </Button>
        </Box>
      </Card>
    </form>
  );
};
