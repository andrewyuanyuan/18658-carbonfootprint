import { Grid, Box } from '@mui/material';
import React from 'react';
import HeaderLayout from '../../common/header';
import EditProjectDetail from './component/EditProjectDetail';


function PostProject() {
  const info = localStorage.getItem('FIXME');
  // TODO: find project info from given type&name
  // TODO: fix image in EditProjectDetail
  // TODO: cancel button in EditProjectDetail

  return (
    <Box component='main' sx={{ flexGrow: 1, py: 8, m: 4}}>
      <HeaderLayout>
        <Grid container xs={12}>
          <EditProjectDetail 
            name='cleanocean'
            type='ocean'
            pricing='pricing'
            country='China'
            city='city'
            image='/static/images/projects/ocean/CleanOcean.png'
            description='description'
            contact='contact'
          />
        </Grid>

      </HeaderLayout>
    </Box>
  );
}

export default PostProject;
