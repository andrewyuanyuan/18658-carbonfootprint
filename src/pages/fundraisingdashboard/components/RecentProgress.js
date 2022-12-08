import { formatDistanceToNow, subHours } from 'date-fns';
import { v4 as uuid } from 'uuid';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 10,
    backgroundColor: theme.palette.mode === 'light' ? '#50C86B' : '#40C80D',
  },
}));

const RecentProgress = (props) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users'));
    const allProjects = JSON.parse(localStorage.getItem('projects'));
    const curUserProject = [];
    const currentUser = localStorage.getItem('currentuser');
    let projectMap = new Map();
    for (let item of users[currentUser].projects) {
      let curProjectMap = item.split('/');
      projectMap.set(curProjectMap[1], curProjectMap[0]);
    }
    for (let item of projectMap) {
      let projectsUnderCategory = allProjects[item[1]];
      let curProject = projectsUnderCategory[item[0]];
      curUserProject.push(curProject);
    }
    setProjects(curUserProject);
  }, []);

  const handleProgress = (progress) => {
    return progress > 100 ? 100 : progress;
  };

  return (
    <Card {...props}>
      <CardHeader subtitle={`${projects.length} in total`} title="Recent Progress of Your Projects" />
      <Divider />
      <List>
        {projects.map((product, i) => (
          <Grid container alignItems="center">
            <Grid item xs={3}>
              <ListItem key={product.id}>
                <ListItemAvatar>
                  <img
                    alt={product.name}
                    src={product.image}
                    style={{
                      height: 48,
                      width: 48,
                    }}
                  />
                </ListItemAvatar>
                <ListItemText primary={product.name} secondary={product.city} />
              </ListItem>
            </Grid>
            <Grid item xs={9} pr={2}>
              <BorderLinearProgress
                variant="determinate"
                value={handleProgress(Math.floor((product.donationReceived / product.donationGoal) * 100))}
              />
              <Typography color="textPrimary">
                {`${handleProgress(
                  Math.floor((product.donationReceived / product.donationGoal) * 100),
                )}% Completed ( $${product.donationReceived} / $${product.donationGoal} )`}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </List>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2,
        }}
      >
        <Button color="primary" endIcon={<ArrowRightIcon />} size="small" variant="text">
          View all
        </Button>
      </Box>
    </Card>
  );
};

export default RecentProgress;
