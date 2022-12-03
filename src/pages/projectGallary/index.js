import React from 'react';
import HeaderLayout from '../../common/header';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

// import flex from '@react-css/flex'

 
// const styles = {
//   row: {
//     display: flex,
//   },
  
//   column: {
//     flex: "33.33%",
//     padding: "5px",
//   },
// };

function ProjectGallary() {
  return (
    <HeaderLayout>
      {/* <h1>Project Gallery</h1> */}
    <div>
      <img style={{ width: "100%" }} src="/static/images/projects/proj_gal_topimgtxt.png" alt="glarrybanner"/>
    </div>

    <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
          m: 1,
        }}
      >
        <img src="/static/images/projects/proj_gal_img1.png" alt="forest" style={{ width: "33.33%" }}  />
        <Link href='#' style={{ width: "33.33%" }} onClick={() => {
    console.info("to a link");
  }}><img src="/static/images/projects/proj_gal_oceanimg.png" alt="ocean" style={{ width: "100%" }}  /> </Link>
        <img src="/static/images/projects/proj_gal_img3.png" alt="other" style={{ width: "33.33%" }}  />
      </Box>
      
    </HeaderLayout>
  );
}



export default ProjectGallary;
