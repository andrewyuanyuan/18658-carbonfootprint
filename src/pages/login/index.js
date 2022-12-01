import * as React from 'react';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import AlertDialog from './loginComponents/AlertDialog';
import { theme } from '../../theme/theme';

import { Box, Button, FormHelperText, Grid, TextField, Typography } from '@mui/material';
import Logo from '../../common/Logo';
import { useState } from 'react';

const SignIn = (props) => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  return (
    <Box height="100vh" display="flex" flexDirection="column">
      {props.modalType === null ? <></> : <AlertDialog username={username} password={password} />}
      <Box component="main" sx={{ display: 'flex', flex: '1 1 auto' }}>
        <Grid container sx={{ flex: '1 1 auto' }}>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              backgroundColor: 'neutral.50',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                p: 3,
              }}
            >
              <a>
                <Logo sx={{ height: 42, width: 42 }} />
              </a>
            </Box>

            <Box
              sx={{
                flex: '1 1 auto',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  maxWidth: 500,
                  px: 3,
                  py: '100px',
                  width: '100%',
                }}
              >
                <div>
                  <Typography sx={{ mb: 1 }} variant="h4">
                    Welcome
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 3 }} variant="body2">
                    Sign up / Log in to Employee 100
                  </Typography>

                  <Box component="form" onSubmit={(event) => props.login(event)} noValidate sx={{ mt: 1 }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="username"
                      label="User Name"
                      name="username"
                      autoComplete="username"
                      autoFocus
                      onChange={(event) => {
                        setusername(event.target.value);
                      }}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onChange={(event) => {
                        setpassword(event.target.value);
                      }}
                    />

                    <FormHelperText sx={{ mt: 1 }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </FormHelperText>

                    <Button fullWidth type="submit" size="large" sx={{ mt: 3 }} variant="contained">
                      Continue
                    </Button>
                    <Button href="/" fullWidth size="large" sx={{ mt: 3 }}>
                      Skip authentication
                    </Button>
                  </Box>
                </div>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              alignItems: 'center',
              background: 'radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)',
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              '& img': {
                maxWidth: '100%',
              },
            }}
          >
            <Box sx={{ p: 3 }}>
              <Typography
                align="center"
                color="inherit"
                sx={{
                  fontSize: '24px',
                  lineHeight: '32px',
                  mb: 1,
                }}
                variant="h1"
              >
                Employee 100
              </Typography>
              <Typography align="center" sx={{ mb: 3 }} variant="subtitle1">
                Please design a logo!
              </Typography>
              <img alt="" src="/static/logo512.png" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    modalType: state.getIn(['login', 'modalType']),
    modalProps: state.getIn(['login', 'modalProps']),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login(event) {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const username = data.get('username');
      const password = data.get('password');
      dispatch(actionCreators.login(username, password));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
