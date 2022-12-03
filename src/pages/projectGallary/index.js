import React from 'react';
import HeaderLayout from '../../common/header';
 

function ProjectGallary() {
  return (
    <HeaderLayout>
      {/* <h1>Project Gallery</h1> */}
    <div>
      <img style={{ width: "100%" }} src="/static/images/projects/proj_gal_topimgtxt.png" alt="glarrybanner"/>
    </div>
    <div class="row">
  <div class="column">
    <img src="/static/images/projects/proj_gal_img1.png" alt="forest" style={{ width: "100%" }} />
  </div>
  <div class="column">
    <img src="/static/images/projects/proj_gal_oceanimg.png" alt="ocean" style={{ width: "100%" }} />
  </div>
  <div class="column">
    <img src="/static/images/projects/proj_gal_img3.png" alt="other" style={{ width: "100%" }} />
  </div>
</div>
      
    </HeaderLayout>
  );
}



export default ProjectGallary;
