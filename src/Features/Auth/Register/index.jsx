import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';
import { register } from '../userSlice';
Register.propTypes = {};

function Register(props) {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    try {
   
     
      console.log('form submit', values);
      const action = register(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      console.log(user);
      const {closeDialog} = props;
      if (closeDialog) {
        closeDialog();
      }
      enqueueSnackbar('Register successfully !!! ',{variant:'success'})
    
    } catch (error) {
      console.log('failed to register', error.message);
      enqueueSnackbar(error.message,{variant: 'error'});
    }
    
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
