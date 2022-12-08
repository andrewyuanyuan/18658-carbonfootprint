import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProjectCard(props) {
  let link = '/projects/' + props.category + '/' + props.id;
  let indexFirstSentence = props.description.indexOf('.') + 1
  let description = props.description.substring(0, indexFirstSentence);
  if (indexFirstSentence === -1) {
    description = props.description.substring(0, Math.min(props.description.substring.length, 50))
  }
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
        <Button size="medium">Share</Button>
        <Button size="medium" href={link}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
