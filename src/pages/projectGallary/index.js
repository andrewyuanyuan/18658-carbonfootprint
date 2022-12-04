import React from 'react';
import HeaderLayout from '../../common/header';
import { Container, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import FeaturedPost from './FeaturePost';
import MainSlider from './MainSlider';

function ProjectGallary() {
  const slides = [
    { 
      imgPath: '/static/images/projects/renewable/AsahanHydroelectric.png', 
      label: 'AsahanHydroElectric',
      description : 'Asahan 1 Hydroelectric Power Plant 2 x 90 MW Project, developed by PT Bajradaya Sentranusa, is a runof-river hydroelectric power project in North Sumatera Province in Indonesia.',
      title: "Asahan Hydroelectric Power Plant",
      category: "renewable",
      id: "asahanhydroelectric"
    },
    { 
      imgPath: '/static/images/projects/ocean/CleanOcean.png', 
      label: 'CleanOcean',
      description : 'The Ocean Cleanup, a non-profit organization, is developing and scaling technologies to rid the world’s oceans of plastic. Our aim is to put ourselves out of business once the oceans are clean.',
      title: "Clean Ocean Group",
      category: "ocean",
      id: "cleanocean"
    },
  ];

  const categories = [
    { image: '/static/images/projects/ocean.png', id: "ocean", title: 'Ocean', description: "invest in ocean health" },
    { image: '/static/images/projects/forest.png', id: "forest", title: 'Forest' , description: "fight deforestation"},
    { image: '/static/images/projects/renewable.png', id: "renewable", title: 'Renewable', description: "support renewable energy" },
  ];
  
  return (
    <HeaderLayout>
      <Container maxWidth="lg">
          <Typography sx={{mt: 2, mb: 2}} variant="h5" color="black">
            Highlight of the day
          </Typography>
          <MainSlider slides={slides} />
          <Typography sx={{mt: 2, mb: 2}} variant="h5" color="black">
            Explore Category
          </Typography>
          <Grid container spacing={2}>
            {categories.map((post) => (
              <Grid item xs={4}>
                <FeaturedPost key={post.title} post={post} />
              </Grid>
            ))}
          </Grid>
      </Container>
    </HeaderLayout>
  );
}

export default ProjectGallary;
