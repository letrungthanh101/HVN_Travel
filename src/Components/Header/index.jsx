import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import Register from "../../Features/Auth/Register"
import Login from "../../Features/Auth/Login"
import DetailTour from "../DetailTour"
Header.propTypes = {};

function Header(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Register
      </Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" disableBackdropClick disableEscapeKeyDown>
       
        <DialogContent>
         <Register/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
          Close
          </Button>
        </DialogActions>
      </Dialog>
    <Login/>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Login
      </Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" disableBackdropClick disableEscapeKeyDown>
       
        <DialogContent>
        <Login/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
          Close
          </Button>
        </DialogActions>
      </Dialog> */}
  <DetailTour/>


    </div>
  );
}

export default Header;
