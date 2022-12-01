import { useEffect, useState } from 'react';
import { Box, Button, Container, Menu, Fade, MenuItem, Grid, Typography } from '@mui/material';
import { AccountProfile } from './components/AccountProfile';
import { AccountProfileDetails } from './components/AccountProfileDetails';
import { AccountCreateProfile } from './components/AccountCreateProfile';
import DashboardLayout from '../../common/dashboard';
import axios from 'axios';

const Profile = () => {
  const [basicprofile, setbasicprofile] = useState({});
  const [userProfile, setuserprofile] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCreateNewCareerProfile = async () => {
    await axios
      .put('users/createprofile')
      .then(function (response) {
        if (!alert('Create new career profile successfully!')) {
          window.location.reload();
        }
      })
      .catch(function (error) {
        alert('create new user profile failed!');
      });
  };

  const handleCloneExistingCareerProfile = async (careerProfile) => {
    await axios
      .put('users/cloneprofile', careerProfile)
      .then(function (response) {
        if (!alert('Clone existing user profile successfully!')) {
          window.location.reload();
        }
      })
      .catch(function (error) {
        alert('clone existing user profile failed!');
      });
  };

  const getBasicProfileData = async () => {
    await axios
      .get('users/profile')
      .then(function (response) {
        setbasicprofile(response.data.userBasicProfile);
      })
      .catch(function (error) {
        alert('Get user profile failed!');
      });
  };

  const getCareerProfileData = async () => {
    await axios
      .get('users/careerprofile')
      .then(function (response) {
        setuserprofile(response.data.userCareerProfile);
      })
      .catch(function (error) {
        alert('Get user career profile failed!');
      });
  };

  useEffect(() => {
    getBasicProfileData();
    getCareerProfileData();
  }, []);

  return (
    <DashboardLayout>
      <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
        <Container maxWidth="lg">
          <Typography sx={{ mb: 3 }} variant="h4">
            Career Profile
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              <AccountProfile />
            </Grid>
            <Grid item lg={8} md={6} xs={12}>
              <AccountProfileDetails basicprofile={basicprofile} />

              {userProfile.map((careerProfile) => (
                <Grid sx={{ mt: 3 }}>
                  <AccountCreateProfile userProfile={careerProfile} />
                </Grid>
              ))}

              <Grid sx={{ mt: 3 }}>
                <Button color="primary" variant="contained" onClick={handleClick}>
                  Create new profile
                </Button>
                <Menu
                  id="fade-menu"
                  MenuListProps={{
                    'aria-labelledby': 'fade-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={handleCreateNewCareerProfile}>New default Profile</MenuItem>
                  {userProfile.map(
                    (careerProfile) =>
                      careerProfile.profileName.trim() !== '' && (
                        <MenuItem
                          key={careerProfile._id}
                          onClick={() => handleCloneExistingCareerProfile(careerProfile)}
                        >
                          {careerProfile.profileName}
                        </MenuItem>
                      ),
                  )}
                </Menu>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </DashboardLayout>
  );
};

export default Profile;
