import React, { useState } from 'react';
import RegisterForm from '../RegisterForm';
Register.propTypes = {};

function Register(props) {
  const [loading, setLoading] = useState(false);
 
  const handleSubmit = async (values) => {
    console.log('form submit', values);
 

    setLoading(false);
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
