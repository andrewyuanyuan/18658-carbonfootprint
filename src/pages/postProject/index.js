import { Grid } from '@mui/material';
import React from 'react';
import HeaderLayout from '../../common/header';
import EditProjectDetail from './component/EditProjectDetail';


function PostProject() {
  const info = localStorage.getItem('FIXME');
  // TODO: find project info from given type&name
  // TODO: fix image in EditProjectDetail
  // TODO: cancel button in EditProjectDetail

  return (
    <>
      <HeaderLayout>
        <Grid container>
          <Grid xs={12}>
            <EditProjectDetail 
              name='cleanocean'
              type='ocean'
              pricing='pricing'
              country='China'
              city='city'
              image='image'
              description='description'
              contact='contact'
            />
          </Grid>
        </Grid>

      </HeaderLayout>
    </>
  );
}

export default PostProject;
