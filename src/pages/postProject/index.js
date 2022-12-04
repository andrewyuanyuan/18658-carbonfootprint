import { Grid, Box } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import HeaderLayout from '../../common/header';
import EditProjectDetail from './component/EditProjectDetail';


function PostProject() {
  // TODO: edit entry connection
  const { category, id } = useParams();
  let props = {};

  if (category === undefined) {
    props = {
      name: '',
      type: '',
      pricing: '',
      country: '',
      city: '',
      image: '/static/images/projects/ocean/WhaleDefender.png',
      description: ''
    }
  } else {
    const currProject = JSON.parse(localStorage.getItem('projects'))[category][id];
    console.log(currProject);
    props = {
      name: id,
      type: category,
      pricing: currProject.pricing,
      country: currProject.country,
      city: currProject.city,
      image: currProject.image,
      description: currProject.description
    }
  }

  return (
    <Box component='main' sx={{ flexGrow: 1, py: 8, m: 4}}>
      <HeaderLayout>
        <Grid container xs={12}>
          <EditProjectDetail 
            name={props.name}
            type={props.type}
            pricing={props.pricing}
            country={props.country}
            city={props.city}
            image={props.image}
            description={props.description}
          />
        </Grid>
      </HeaderLayout>
    </Box>
  );
}

export default PostProject;
