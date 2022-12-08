import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function NotificationPop(props) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    localStorage.setItem('disableNotification', JSON.stringify(true));
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button
        color="secondary"
        size="small"
        onClick={() => {
          let cur = JSON.parse(localStorage.getItem('users'));
          cur[localStorage.getItem('currentuser')]['notification'] = false;
          localStorage.setItem('users', JSON.stringify(cur));
          window.location.href = '/Chat';
        }}
      >
        Details
      </Button>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Button onClick={handleClick}></Button>
      <Snackbar
        open={open}
        autoHideDuration={60000}
        onClose={handleClose}
        message={'You have a new message!'}
        action={action}
      />
    </div>
  );
}
