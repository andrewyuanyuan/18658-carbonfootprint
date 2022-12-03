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

const projects = [
  {
    id: uuid(),
    name: 'Ocean Power',
    imageUrl: '/static/images/projects/ocean/CleanOcean.png',
    updatedAt: subHours(Date.now(), 2),
    totalAmount: 600,
    amountComplete: 450,
  },
  {
    id: uuid(),
    name: 'Whale Defender',
    imageUrl: '/static/images/projects/ocean/WhaleDefender.png',
    updatedAt: subHours(Date.now(), 4),
    totalAmount: 810,
    amountComplete: 720,
  },
  {
    id: uuid(),
    name: 'Green City',
    imageUrl: '/static/images/projects/forest/GreatBearForest.png',
    updatedAt: subHours(Date.now(), 8),
    totalAmount: 1000,
    amountComplete: 200,
  },
];

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

const RecentProgress = (props) => (
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
                  src={product.imageUrl}
                  style={{
                    height: 48,
                    width: 48,
                  }}
                />
              </ListItemAvatar>
              <ListItemText primary={product.name} secondary={`Updated ${formatDistanceToNow(product.updatedAt)}`} />
            </ListItem>
          </Grid>
          <Grid item xs={9} pr={2}>
            <BorderLinearProgress
              variant="determinate"
              value={Math.floor((product.amountComplete / product.totalAmount) * 100)}
            />
            <Typography color="textPrimary">
              {`${Math.floor((product.amountComplete / product.totalAmount) * 100)}% Completed (${
                product.amountComplete
              }k/${product.totalAmount}k)`}
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

export default RecentProgress;
