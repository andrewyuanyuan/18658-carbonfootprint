import React from 'react';
import ProjectCard from './component/ProjectCard';
import HeaderLayout from '../../common/header';
import { Box, Container, Grid } from '@mui/material';
import { useParams } from "react-router-dom";

function Projects() {
  let { category } = useParams();
  let projectList = JSON.parse(localStorage.getItem("projects"))[category]

  return (
    <HeaderLayout>
      <Container maxWidth={false}>
        <Box sx={{ pt: 3 }}>
          <Grid container spacing={3}>
            {
              Array.isArray(projectList) &&
              projectList.map((project) => (
                <Grid item key={project.id} xs={3}>
                  <ProjectCard 
                    id={project.id}
                    name={project.name}
                    description={project.description}
                    image={project.image}
                  />
                </Grid>
              ))
            }
          </Grid>
        </Box>
      </Container>
    </HeaderLayout>
  );
}

export default Projects;
