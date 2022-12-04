import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProjectCard(props) {
  console.log(props);
  let link = '/projects/' + props.category + '/' + props.id;
  let description = props.description.substring(
    0,
    props.description.includes('.') ? props.description.indexOf('.') : props.description.length,
  );
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={props.image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" href={link}>
          Details
        </Button>
      </CardActions>
    </Card>
  );
}
