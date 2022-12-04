import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState(localStorage.getItem('currentrole'));

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    const curUser = localStorage.getItem('currentuser');
    localStorage.setItem('currentrole', newAlignment);
    localStorage.setItem('currentuser', curUser === 'chrisjohnson' ? 'abbysmith' : 'chrisjohnson');
    console.log(localStorage.getItem('currentrole'));
    window.location.href = '/';
  };

  return (
    <ToggleButtonGroup color="primary" value={alignment} exclusive onChange={handleChange} aria-label="Platform">
      <ToggleButton value="investor">Industrial Investor</ToggleButton>
      <ToggleButton value="owner">Project Provider</ToggleButton>
    </ToggleButtonGroup>
  );
}
