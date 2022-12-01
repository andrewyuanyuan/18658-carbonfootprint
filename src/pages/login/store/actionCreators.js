import axios from 'axios';
import * as constants from './constants';

export const login = (username, password) => {
  return (dispatch) => {
    axios
      .post('/users/join', {
        username: username,
        password: password,
      })
      .then(function (response) {
        if (response.data.success === false) {
          if (response.data.code === 1) {
            //Username does not exist, ask user if he/she wants to Register
            dispatch(showRegisterModal());
          }
        } else {
          //Successfully log in, back to main page
          localStorage.setItem('username', username);
          dispatch(hideModal());
          window.location.href = '/';
        }
      })
      .catch(function (error) {
        let errRes = error.response.data.msg;
        //If a user enter information doesn't meet requirements,
        //or username exists
        //output error message
        dispatch(showWrongInputPassword(errRes));
      });
  };
};

export const registerSubmit = (username, password) => {
  return (dispatch) => {
    axios
      .post('/users/register', {
        username: username,
        password: password,
      })
      .then(function (response) {
        if (response.data.success === true) {
          //Successfully register, go to share status explanation page
          localStorage.setItem('username', username);
          window.location.href = '/';
          dispatch(hideModal());
        }
      })
      .catch(function (error) {
        let errRes = error.response.data.msg;
        dispatch(showWrongInputPassword(errRes));
      });
  };
};

const showRegisterModal = () => ({
  type: constants.SHOW_MODAL,
  modalType: 'REGISTER_WARNING',
});

const showWrongInputPassword = (errMes) => ({
  type: constants.SHOW_MODAL,
  modalType: 'INPUT_WARNING',
  modalProps: {
    errorMessage: errMes,
  },
});

export const hideModal = () => ({
  type: constants.HIDE_MODAL,
});
