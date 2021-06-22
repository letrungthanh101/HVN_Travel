import { yupResolver } from '@hookform/resolvers/yup';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import InputField from '../../../Components/Form-control/InputField';
import PasswordField from '../../../Components/Form-control/PasswordField';

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
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function RegisterForm(props) {
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const classes = useStyles();

  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required('Please enter your full name')
      .test('Should has at least two words', 'Please enter min two word', (value) => {
        return value.split('').length >= 2;
      }),
    email: yup.string().required('Please enter your email').email('Please enter valid your email'),
    passWord: yup
      .string()
      .required('Please enter your password')
      .min(6, 'Please enter at least 6 character.')
      .max(50, 'Please enter up to 50 characters'),
    confirmPassword: yup
      .string()
      .required('Please retype password')
      .oneOf([yup.ref('passWord')], 'Password dose not match'),
    phoneNumber: yup
      .number()
      .required('Please enter you phone numbers')
      .typeError('Enter valid your phone number')
      .min(10, 'Your phone number invalid'),
    birthDay: yup.string().required('Please enter your birthday'),
    userName: yup.string().required('Please enter you user name')
  });
  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      passWord: '',
      confirmPassword: '',
      birthDay: '',
      userName:''
    },

    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
      console.log(values);
    }
    // form.reset();
  };
  // handleSubmit là func  có sẵn từ useForm
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} noValidate onSubmit={form.handleSubmit(handleSubmit)}>
          <InputField name="fullName" label="Full Name" form={form} />
          <InputField name="userName" label="User Name" form={form} />
          <InputField name="email" label="Email" form={form} />
          <InputField name="birthDay" label="Birth Day" form={form} />

          <InputField name="phoneNumber" label="Phone Number" form={form} />
          <PasswordField name="passWord" label="Password" form={form} />
          <PasswordField name="confirmPassword" label="Confirm Password" form={form} />

          <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />} label="I agree" />

          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Create account
          </Button>
          <Grid container justify="center">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
