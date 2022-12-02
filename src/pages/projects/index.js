import React from 'react';
import ProjectCard from './component/ProjectCard';
import HeaderLayout from '../../common/header';
import { Grid } from '@mui/material';
import { useParams } from "react-router-dom";

function Projects() {
  let { category } = useParams();
  let projectList = JSON.parse(localStorage.getItem("projects"))[category]
  console.log(category)
  console.log(projectList)

  return (
    <HeaderLayout>
      <Grid container>
        {
          Array.isArray(projectList) &&
          projectList.map((project) => (
            <ProjectCard 
              name={project.name}
              description={project.description}
              image={project.image}
            />
          ))
        }
      </Grid>
    </HeaderLayout>
  );
}

export default Projects;
