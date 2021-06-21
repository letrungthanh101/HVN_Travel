import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm/';
import { login } from '../userSlice';

export default function Login(props) {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    try {
      //auto set username = email
      values.username = values.email;
      console.log('form submit', values);
      // const action = login(values);
      // const resultAction = await dispatch(action);
      // const user = unwrapResult(resultAction);
      // console.log(user);
      // // const { closeDialog } = props;
      // // if (closeDialog) {
      // //   closeDialog();
      // // }
      // enqueueSnackbar('Login successfully !!! ', { variant: 'success' });
    
    } catch (error) {
      console.log('failed to register', error.message);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  return (
    <div>
      {/* {console.log('hello')} */}
      <LoginForm onSubmit={() => handleSubmit} />
    </div>
  );
}
