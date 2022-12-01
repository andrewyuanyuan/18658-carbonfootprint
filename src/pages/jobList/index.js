import { Box, Container, Grid, Pagination } from '@mui/material';
import JobListToolbar from './components/JobListToolbar';
import JobCard from './components/JobCard';
import DashboardLayout from '../../common/dashboard';
import React from 'react';
import { Component } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import jobs from '../../__mocks__/jobs';

// var jobs = [];

function JobList() {
  const [joblist, setJoblist] = useState({});

  useEffect(() => {
    axios
      .get('joblist/getjob')
      .then(function (response) {
        setJoblist(response.data);
        /*console.log(response.data);
        for (let job of response.data) {
          console.log('test');
          var tmp = {
            id: job._id,
            createdAt: job.created_at,
            description: job.desc,
            media: '',
            title: job.title,
            referrer: job.referrer,
          };
          jobs.push(tmp);
        }
        console.log(jobs);*/
      })
      .catch(function (error) {
        // console.log(error);
        // alert('Get job list failed!');
      });
  }, []);

  // state = {joblist: []}

  // componetDidMount = () => {
  //   this.getjoblist();
  // };

  // getjoblist = () => {
  //   axio.get("joblist/getjob")
  //     .then((res) => {
  //       const data = res.data;
  //       // setJoblist(data)
  //       // console.log(joblist)
  //       this.setState({ joblist: data });
  //       console.log('job list received');
  //       console.log(joblist)
  //     })
  //     .catch(() => {
  //       console.log('Error (data received)');
  //     });
  // }
  // this.getjoblist();
  return (
    <DashboardLayout>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <JobListToolbar />
          <Box sx={{ pt: 3 }}>
            <Grid container spacing={3}>
              {Array.isArray(joblist) &&
                joblist.map((job) => (
                  <Grid item key={job.id} lg={4} md={6} xs={12}>
                    <JobCard job={job} />
                  </Grid>
                ))}
            </Grid>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pt: 3,
            }}
          >
            <Pagination color="primary" count={3} size="small" />
          </Box>
        </Container>
      </Box>
    </DashboardLayout>
  );
}

export default JobList;
