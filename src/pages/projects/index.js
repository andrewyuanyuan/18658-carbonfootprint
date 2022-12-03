import React from 'react';
import ProjectCard from './component/ProjectCard';
import HeaderLayout from '../../common/header';
import { Box, Container, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

function Projects() {
  let { category } = useParams();
  let projects = JSON.parse(localStorage.getItem('projects'))[category];
  return (
    <HeaderLayout>
      <Container maxWidth="lg">
        <Box sx={{ pt: 6 }}>
          <Grid container spacing={3}>
            {Object.keys(projects).map((id, _) => {
              return (
                <Grid item key={id} xs={3}>
                  <ProjectCard
                    id={id}
                    name={projects[id].name}
                    description={projects[id].description}
                    image={projects[id].image}
                    category={category}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </HeaderLayout>
  );
}

export default Projects;
