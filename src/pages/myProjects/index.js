import React from 'react';
import HeaderLayout from '../../common/header';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import MessageIcon from '@mui/icons-material/Message';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { useParams } from 'react-router-dom';
import users from '../../__mocks__/users';
import ProjectCard from './component/ProjectCard';

function MyProject() {
  let myProjects = JSON.parse(localStorage.getItem('myProjects'));
  const projectInfoList = [];
  const projectList = [];
  myProjects.forEach((x) => projectInfoList.push(x.split('/')));
  let projects = JSON.parse(localStorage.getItem('projects'));
  projectInfoList.forEach((x) => console.log(x[0], x[1]));
  projectInfoList.forEach((x) => {
    let proj = projects[x[0]][x[1]];
    if (proj !== undefined) {
      proj['category'] = x[0];
      proj['id'] = x[1];
      projectList.push(proj);
    }
  });
  console.log(projectInfoList, projectList);

  return (
    <HeaderLayout>
      <Container maxWidth="lg">
        <Box sx={{ pt: 6 }}>
          <Grid container spacing={3}>
            {Object.keys(projectList).map((id, _) => {
              if (projectList[id] !== undefined) {
                return (
                  <Grid item key={id} xs={3}>
                    <ProjectCard
                      id={projectList[id]['id']}
                      name={projectList[id].name}
                      description={projectList[id].description}
                      image={projectList[id].image}
                      category={projectList[id].category}
                    />
                  </Grid>
                );
              }
            })}
          </Grid>
        </Box>
      </Container>
    </HeaderLayout>
  );
}

export default MyProject;
