import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { useState } from 'react';
import countryList from '../../../__mocks__/countryList';

function EditProjectDetail(props) {
  const projectTypes = ['ocean', 'forest', 'renewable']

  const [name, setName] = useState(props.name);
  const [projectType, setProjectType] = useState(props.type)
  const [pricing, setPricing] = useState(props.pricing);
  const [country, setCountry] = useState(props.country);
  const [location, setLocation] = useState(props.city);
  const [description, setDescription] = useState(props.description)

  const handleName = (e) => {
    setName(e.target.value);
  }
  const handleProjectType = (e) => {
    setProjectType(e.target.value);
  }
  const handlePricing = (e) => {
    setPricing(e.target.value);
  }
  const handleCountry = (e) => {
    setCountry(e.target.value);
    console.log(country)
  }
  const handleLocation = (e) => {
    setLocation(e.target.value);
  }
  const handelDescription = (e) => {
    setDescription(e.target.value);
  }
  const onSubmit = () => {
    let data = JSON.parse(localStorage.getItem('projects'));
    const jsonData = {
      name: name,
      city: location,
      country: country,
      pricing: pricing,
      contact: props.contact,
      image: 'FIXME',
      description: description
    }
    data[projectType][name] = jsonData

    localStorage.setItem('projects', JSON.stringify(data));
  }

  return (
    <>
      <Grid
        container
        direction="column"
        flex
        rowGap='50px'
        marginLeft='40px'
      >
        <Grid xs='auto'>
          <Typography variant="h4">
            Project Title
          </Typography>
          <Typography>
            Use words people would search for when looking for your project
          </Typography>
        </Grid>

        <Grid 
          container 
          spacing={8}
        >
          <Grid item xs={12}>
            <TextField
              required
              id='name'
              label='Project Name'
              fullWidth
              value={name}
              onChange={handleName}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField 
              required 
              id='projectType'
              label='Project Type'
              fullWidth 
              select
              value={projectType}
              onChange={handleProjectType}
              SelectProps={{
                native: true
              }}
            >
              {projectTypes.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField 
              required 
              id='pricing' 
              label='Pricing' 
              fullWidth 
              value={pricing}
              onClick={handlePricing}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField 
              required 
              id='country' 
              label='country'
              fullWidth 
              select
              value={country}
              onChange={handleCountry}
              SelectProps={{
                native: true
              }}
            >
              {countryList.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField 
              required 
              id='location' 
              label='Location' 
              fullWidth 
              value={location}
              onChange={handleLocation}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h4'>
              Project Image
            </Typography>
            <Card sx={{ maxWidth: 345}}>
              <CardMedia component='img' image={props.image} />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id='description'
              label='Description'
              value={description}
              fullWidth
              multiline
              rows={3}
              onChange={handelDescription}
            />
          </Grid>
        </Grid>

        
        <Grid>
          <Button
            component='a'
            sx={{ mt: 6, mb: 3, mr: 4}}
            variant='contained'
            onClick={onSubmit}
          >
            Save
          </Button>
          <Button
            component='a'
            sx={{ mt: 6, mb: 3}}
            variant='contained'
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default EditProjectDetail;