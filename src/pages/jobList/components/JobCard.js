import { Avatar, Box, Card, CardActionArea, CardContent, Divider, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import ClockIcon from '../../../icons/clock';
import UserIcon from '../../../icons/user';
import JobDetail from './JobDeail';

const JobCard = ({ job, ...rest }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Fragment>
      <Card
        onClick={() => {
          console.log('Click Card');
          setOpen(true);
        }}
        key={job.id}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
        {...rest}
      >
        <CardActionArea>
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                pb: 3,
              }}
            >
              <Avatar alt="Job" src={job.media} variant="square" />
            </Box>
            <Typography align="center" color="textPrimary" gutterBottom variant="h5">
              {job.title}
            </Typography>
            <Typography align="center" color="textPrimary" variant="body1">
              {job.desc}
            </Typography>
          </CardContent>
          <Box sx={{ flexGrow: 1 }} />
          <Divider />
          <Box sx={{ p: 2 }}>
            <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
              <Grid
                item
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <ClockIcon color="action" />
                <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
                  {job.createdAt}
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <UserIcon color="action" />
                <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
                  Referrer: {job.referrer}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </CardActionArea>
      </Card>
      <JobDetail open={open} setOpen={setOpen} job={job}></JobDetail>
    </Fragment>
  );
};

JobCard.propTypes = {
  job: PropTypes.object.isRequired,
};

export default JobCard;
