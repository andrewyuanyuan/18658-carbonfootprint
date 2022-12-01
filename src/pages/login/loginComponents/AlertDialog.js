import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../theme/theme';

function AlertDialog(props) {
  const handleClose = () => {
    props.hideModal();
  };

  const registerString =
    "You do not have an account yet. By creating an account, you agree to our platform's Privacy Notice and Term of Use.";
  return (
    <ThemeProvider theme={theme}>
      <Dialog
        open={props.modalType !== null ? true : false}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {props.modalType === 'REGISTER_WARNING' ? 'Create an account?' : 'Wrong input'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.modalType === 'REGISTER_WARNING' ? registerString : props.modalProps.errorMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            {props.modalType === 'REGISTER_WARNING' ? 'Disagree' : 'Back'}
          </Button>
          {props.modalType === 'REGISTER_WARNING' ? (
            <Button onClick={() => props.register(props.username, props.password)}>Agree</Button>
          ) : (
            <></>
          )}
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    modalType: state.getIn(['login', 'modalType']),
    modalProps: state.getIn(['login', 'modalProps']),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal() {
      dispatch(actionCreators.hideModal());
    },
    register(username, password) {
      dispatch(actionCreators.registerSubmit(username, password));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertDialog);
