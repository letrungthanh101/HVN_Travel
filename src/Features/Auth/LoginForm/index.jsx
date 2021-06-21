import { yupResolver } from '@hookform/resolvers/yup';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import InputField from '../../../Components/Form-control/InputField';
import PasswordField from '../../../Components/Form-control/PasswordField';

import "./login.css"
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 33,
    padding: '0 30px',
  },
}));

function LoginForm(props) {
  const classes = useStyles();

  const schema = yup.object().shape({
    email: yup.string().required('Please enter your email').email('Please enter valid your email'),
    passWord: yup.string().required('Please enter your password')
    .min(6, 'Please enter at least 6 character.')
    .max(50, 'Please enter up to 50 characters'),
  });
  const form = useForm({
    defaultValues: {
      email: '',
      passWord: '',
    },

    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };

  return (
    <div className="login__form">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="email" label="Email" form={form} />
            <PasswordField name="passWord" label="Password" form={form} />
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              Sign In
            </Button>
          
            <Grid container>
              <Grid item xs={12}>
                <Link to="/resetpassword" variant="body2">
                  Reset password ?
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link to="/forgotpassword" variant="body2">
                  Forgot password ?
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link to="/sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default LoginForm;
