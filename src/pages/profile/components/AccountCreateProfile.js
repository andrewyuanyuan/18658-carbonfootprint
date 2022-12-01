import { useState, useEffect } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField } from '@mui/material';
import axios from 'axios';

export const AccountCreateProfile = (props) => {
  const [values, setValues] = useState([]);
   const [show, setShow] = useState(true);

  useEffect(() => {
    setValues(props.userProfile);
  }, [props.userProfile]);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  console.log(values);

  return (
    <form autoComplete="off" noValidate {...props}>
      <Card>
        <CardHeader subheader="The information can be edited" title="Career Profile" />
        {/* <Button color="primary" variant="contained" onClick={() => setShow((prev) => !prev)}>
          Create New Profile
        </Button> */}
        <Divider />
        <CardContent>
          <>
            {show && (
              <Box>
                <Grid id="editJobType" sx={{ mb: 3 }}>
                  <TextField
                    fullWidth
                    label="Career Profile Name"
                    name="profileName"
                    onChange={handleChange}
                    required
                    value={values.profileName || ''}
                    variant="outlined"
                  />
                </Grid>
                <Grid>
                  <TextField
                    fullWidth
                    helperText="Add Skills"
                    label="Skills"
                    name="skills"
                    onChange={handleChange}
                    required
                    value={values.skills || ''}
                    variant="outlined"
                  />
                </Grid>
              </Box>
            )}
          </>
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
            sx={{ mr: 3 }}
            color="primary"
            variant="contained"
            onClick={async () => {
              await axios
                .put('users/deleteprofile', values)
                .then(function (response) {
                  if (!alert('delete user career profile successfully')) {
                    window.location.reload();
                  }
                })
                .catch(function (error) {
                  alert('delete user career profile failed!');
                });
            }}
          >
            Delete profile
          </Button>

          <Button
            color="primary"
            variant="contained"
            disabled={!values.profileName || !values.skills}
            onClick={() => {
              axios
                .put('users/careerprofile', values)
                .then(function (response) {
                  if (!alert('Your profile has been updated!')) {
                    window.location.reload();
                  }
                })
                .catch(function (error) {
                  alert('Update user career profile failed!');
                });
            }}
          >
            Update profile
          </Button>
        </Box>
      </Card>
    </form>
  );
};
