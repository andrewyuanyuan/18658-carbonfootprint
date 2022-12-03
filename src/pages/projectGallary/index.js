import React from 'react';
import HeaderLayout from '../../common/header';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { Container } from '@mui/material';
import ImageSlider from "./ImageSlider";


function ProjectGallary() {
  const slides = [
    { url: "/static/images/projects/proj_gal_topimgtxt.png", title: "beach" },
    { url: "/static/images/projects/ocean/CleanOcean.png", title: "oceanProtector" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };


  return (
    <HeaderLayout>
    <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
          m: 1,
        }}
      > <Container maxWidth="lg">
          <ImageSlider style={{ width: "100%" }} slides={slides} />
        <Button href="\projects/forest" style={{ width: "33.33%" }}>
          <img src="/static/images/projects/proj_gal_img1.png" alt="forest" style={{ width: "100%" }} />
        </Button>
        
        <Button href="\projects/ocean" style={{ width: "33.33%" }}>
          <img src="/static/images/projects/proj_gal_oceanimg.png" alt="ocean" style={{ width: "100%" }}/>
        </Button>

        <Button href="\projects/renewable" style={{ width: "33.33%" }}>
          <img src="/static/images/projects/proj_gal_img3.png" alt="other" style={{ width: "100%" }} />
        </Button>
        </Container>
    </Box>
     
    </HeaderLayout>
  );
}


export default ProjectGallary;
