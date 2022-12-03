import { formatDistanceToNow, subHours } from 'date-fns';
import { v4 as uuid } from 'uuid';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const projects = [
  {
    id: uuid(),
    name: 'Ocean Power',
    imageUrl: '/static/images/projects/ocean/CleanOcean.png',
    updatedAt: subHours(Date.now(), 2),
  },
  {
    id: uuid(),
    name: 'Whale Defender',
    imageUrl: '/static/images/projects/ocean/WhaleDefender.png',
    updatedAt: subHours(Date.now(), 4),
  },
  
];

const LatestProjects = (props) => (
  <Card {...props}>
    <CardHeader subtitle={`${projects.length} in total`} title="Latest Projects" />
    <Divider />
    <List>
      {projects.map((product, i) => (
        <ListItem divider={i < projects.length - 1} key={product.id}>
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
          <IconButton edge="end" size="small">
            <MoreVertIcon />
          </IconButton>
        </ListItem>
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

export default LatestProjects;


