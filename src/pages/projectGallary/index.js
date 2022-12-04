import React from 'react';
import HeaderLayout from '../../common/header';
import { Container, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import FeaturedPost from './FeaturePost';
import ImageSlider from './ImageSlider';

function ProjectGallary() {
  const slides = [
    { url: '/static/images/projects/renewable/AsahanHydroelectric.png', title: 'AsahanHydroElectric' },
    { url: '/static/images/projects/ocean/CleanOcean.png', title: 'CleanOcean' },
  ];

  const categories = [
    { image: '/static/images/projects/ocean.png', id: "ocean", title: 'Ocean', description: "invest in ocean health" },
    { image: '/static/images/projects/forest.png', id: "forest", title: 'Forest' , description: "fight deforestation"},
    { image: '/static/images/projects/renewable.png', id: "renewable", title: 'Renewable', description: "support renewable energy" },
  ];

  return (
    <HeaderLayout>
      <Container maxWidth="lg">
          <ImageSlider style={{ width: '100%' }} slides={slides} />
          <Typography variant="h5" color="black">
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
