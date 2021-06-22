import React from 'react';
import { Grid, Container, Paper, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import { makeStyles } from '@material-ui/core/styles';
import Images from '../../constant/Images';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  img:{
    width: '100%',
  }
}));
export default function DetailTour() {

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Grid xs={12} container>
          <Grid xs={12}>
            <img src={Images.img_vacation} alt="" className={classes.img} />
           <Typography variant="h4" align ="center"> Vacation Extras</Typography>
          </Grid>
          <Grid md={4} xs={12} container spacing={3}>
            <Grid item xs={12} md={8}>
              <Paper className={classes.paper}>
                <i class="fas fa-star"></i>
                <span> Vacation Extras</span>
              </Paper>
            </Grid>
            <Grid item xs={12} md={8} >
              <Paper className={classes.paper}>
                <i class="fas fa-gift"></i>
                <span> Vacation Extras</span>
              </Paper>
            </Grid>
            <Grid item xs={12} md={8}  >
              <Paper className={classes.paper}>
                <i class="fas fa-plus-circle"></i>
                <span> Vacation Extras</span>
              </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper className={classes.paper}>
                <i class="fas fa-exclamation-circle"></i>
                <span> Vacation Extras</span>
              </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper className={classes.paper}>
                <i class="fas fa-phone-alt"></i>
                <span> Vacation Extras</span>
              </Paper>
            </Grid>
          </Grid>
          <Grid md={8} xs={12} container spacing={3}>
            <Grid item xs={6}>
              <Typography variant="body1">Air condition</Typography>
              <Typography>Pool</Typography>
              <Typography> Fully equipped kitchen</Typography>
              <Typography>6 Regeneration Road, SE16 2NX, London</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>Consectetur adipisicing elit</Typography>
              <Typography> Enim similique</Typography>
              <Typography>Consectetur adipisicing elit</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
