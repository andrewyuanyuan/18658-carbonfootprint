import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState(localStorage.getItem('currentrole'));

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    localStorage.setItem('currentrole', newAlignment);
    console.log(localStorage.getItem('currentrole'));
    window.location.href = '/';
  };

  return (
    <ToggleButtonGroup color="primary" value={alignment} exclusive onChange={handleChange} aria-label="Platform">
      <ToggleButton value="investor">Industrial Investor</ToggleButton>
      <ToggleButton value="owner">Project Owner</ToggleButton>
    </ToggleButtonGroup>
  );
}
