
import React, { useState } from 'react';
import LoginForm from '../LoginForm/';
export default function Login(props) {
 
  const handleSubmit = async (values) => {

    console.log('form submit: ', values);
  
    
  };

  return (
    <div>
      <LoginForm onSubmit={()=>handleSubmit} />
    </div>
  );
}
