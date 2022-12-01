import DashboardLayout from '../../common/dashboard';
import { Button, Card, CardContent, Container, Divider, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
const theme = createTheme();
const vanishTime = 100;

const FormLabelText = styled('p').attrs({})`
  width: 70px;
  margin: auto;
  margin-left: 0px;
  margin-right: 16px;
`;

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const jobTypes = [
  {
    value: '0',
    label: 'Full Time',
  },
  {
    value: '1',
    label: 'Part Time',
  },
];

const skillNames = ['Word', 'Excel', 'PowerPoint', 'Outlook', 'Visio'];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
  };
}

// function clearInput() {
//   setTimeout(() => {
//     document.getElementById('createFireName').value = '';
//     document.getElementById('createCounty').value = '';
//     document.getElementById('createStartDate').value = '';
//     document.getElementById('createComments').value = '';
//     document.getElementById('updateCounty').value = '';
//     document.getElementById('updateStartDate').value = '';
//     document.getElementById('updateComments').value = '';
//     document.getElementById('create_join').style.display = 'none';
//     document.getElementById('updateStartDate').disabled = false;
//     crCloseAlert();
//     upCloseAlert();
//   }, vanishTime);
// }

function PostJob() {
  const [values, setValues] = React.useState({
    companyName: '',
    emailaddress: '',
    role: 'developer',
    title: '',
    location: '',
    type: '0',
    description: '',
    portfolio: '',
    skill: [],
  });

  const handleChange = (prop) => (event) => {
    if (prop === 'skill') {
      const {
        target: { value },
      } = event;
      setValues({
        ...values,
        [prop]: typeof value === 'string' ? value.split(',') : value,
      });
    } else setValues({ ...values, [prop]: event.target.value });
  };

  const [check, setCheck] = React.useState(false);

  const handleSubmit = async () => {
    setCheck(true);
    if (
      ((values.role === 'designer' && values.portfolio !== '') ||
        (values.role === 'PM' && values.skill.length !== 0) ||
        values.role === 'developer') &&
      values.title !== '' &&
      values.location !== '' &&
      values.description !== ''
    )
      console.log('Submit', values.companyName); //values['role']

    axios
      .post('jobposting/postjob', {
        companyName: values.companyName,
        title: values.title,
        location: values.location,
        emailaddress: values.emailaddress,
        type: values.type,
        description: values.description,
        portfolio: values.portfolio,
        skill: values.skill,
        role: values.role,
        referrer: localStorage.getItem('username'),
      })
      .then(function (res) {
        // clearInput();
        console.log("success")
        window.href.location("/")
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <DashboardLayout>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography sx={{ mb: 3 }} variant="h4">
            Job Posting
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={2} md={6} xs={12}>
              <Card>
                <CardContent>
                  <Box
                    sx={{
                      alignItems: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      row
                      value={values.role}
                      onChange={handleChange('role')}
                    >
                      <FormControlLabel value="developer" control={<Radio />} label="Developer" />
                      <FormControlLabel value="designer" control={<Radio />} label="Designer" />
                      <FormControlLabel value="PM" control={<Radio />} label="PM" />
                    </RadioGroup>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={10} md={6} xs={12}>
              <form autoComplete="off" noValidate>
                <Card>
                  <CardContent>
                    <Grid container gap="16px" direction={'column'}>
                      <FormControl sx={{ m: 1, flexDirection: 'row' }} variant="outlined">
                        <FormLabelText id="outlined-title-helper-text">Company Name *</FormLabelText>
                        <OutlinedInput
                          id="outlined-adornment-title"
                          value={values.companyName}
                          error={check && values.companyName === ''}
                          onChange={handleChange('companyName')}
                          aria-describedby="outlined-title-helper-text"
                          inputProps={{
                            'aria-label': 'Company Name',
                          }}
                          sx={{ width: 'calc(100% - 102px)' }}
                        />
                      </FormControl>
                      <FormControl sx={{ m: 1, flexDirection: 'row' }} variant="outlined">
                        <FormLabelText id="outlined-title-helper-text">Your Email *</FormLabelText>
                        <OutlinedInput
                          id="outlined-adornment-title"
                          value={values.emailaddress}
                          error={check && values.emailaddress === ''}
                          onChange={handleChange('emailaddress')}
                          aria-describedby="outlined-title-helper-text"
                          inputProps={{
                            'aria-label': 'referrer email',
                          }}
                          sx={{ width: 'calc(100% - 102px)' }}
                        />
                      </FormControl>
                      <FormControl sx={{ m: 1, flexDirection: 'row' }} variant="outlined">
                        <FormLabelText id="outlined-title-helper-text">Job Title *</FormLabelText>
                        <OutlinedInput
                          id="outlined-adornment-title"
                          value={values.title}
                          error={check && values.title === ''}
                          onChange={handleChange('title')}
                          aria-describedby="outlined-title-helper-text"
                          inputProps={{
                            'aria-label': 'Job Title',
                          }}
                          sx={{ width: 'calc(100% - 102px)' }}
                        />
                      </FormControl>
                      <FormControl sx={{ m: 1, width: '100%', flexDirection: 'row' }} variant="outlined">
                        <FormLabelText id="outlined-location-helper-text">Location *</FormLabelText>
                        <OutlinedInput
                          id="outlined-adornment-location"
                          value={values.location}
                          error={check && values.location === ''}
                          onChange={handleChange('location')}
                          aria-describedby="outlined-location-helper-text"
                          inputProps={{
                            'aria-label': 'Location',
                          }}
                          sx={{ width: 'calc(100% - 102px)' }}
                        />
                      </FormControl>
                      <FormControl sx={{ m: 1 }}>
                        <TextField
                          id="outlined-select-job-type"
                          select
                          label="Job Type"
                          value={values.type}
                          sx={{ width: 'calc(100% - 16px)' }}
                          onChange={handleChange('type')}
                          // helperText="Please select your job type"
                        >
                          {jobTypes.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </FormControl>
                      <FormControl sx={{ m: 1 }}>
                        <TextField
                          id="outlined-multiline-static"
                          label="Job Description *"
                          placeholder="Please summary the essential responsibilities, activities, qualifications and skills"
                          multiline
                          rows={6}
                          value={values.description}
                          error={check && values.description === ''}
                          sx={{ width: 'calc(100% - 16px)' }}
                          onChange={handleChange('description')}
                        />
                      </FormControl>
                      {values.role === 'designer' && (
                        <FormControl sx={{ m: 1, flexDirection: 'row' }} variant="outlined">
                          <FormLabelText id="outlined-portfolio-helper-text">Portfolio Link *</FormLabelText>
                          <OutlinedInput
                            id="outlined-adornment-portfolio"
                            value={values.portfolio}
                            error={check && values.portfolio === ''}
                            onChange={handleChange('portfolio')}
                            aria-describedby="outlined-portfolio-helper-text"
                            inputProps={{
                              'aria-label': 'Portfolio Link',
                            }}
                            sx={{ width: 'calc(100% - 102px)' }}
                          />
                        </FormControl>
                      )}
                      {values.role === 'PM' && (
                        <FormControl sx={{ m: 1, width: 'calc(100% - 16px)' }}>
                          <InputLabel id="demo-multiple-chip-label">Skills</InputLabel>
                          <Select
                            labelId="multiple-chip-skill"
                            id="multiple-chip"
                            multiple
                            error={check && values.skill.length === 0}
                            value={values.skill}
                            onChange={handleChange('skill')}
                            input={<OutlinedInput id="select-multiple-chip" label="Skill" />}
                            renderValue={(selected) => (
                              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                  <Chip key={value} label={value} />
                                ))}
                              </Box>
                            )}
                            MenuProps={MenuProps}
                          >
                            {skillNames.map((name) => (
                              <MenuItem key={name} value={name} style={getStyles(name, values.skill, theme)}>
                                {name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      )}
                    </Grid>
                  </CardContent>
                  <Divider />
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      p: 2,
                      marginRight: '16px',
                    }}
                  >
                    <Button color="primary" variant="contained" onClick={handleSubmit}>
                      Submit
                    </Button>
                  </Box>
                </Card>
              </form>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </DashboardLayout>
    // <ThemeProvider theme={theme}>
    //   {

    //   }
    // </ThemeProvider>
  );
}

export default PostJob;
