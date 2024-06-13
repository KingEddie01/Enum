// LowerMidBar.js
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CohortFormModal from './CohortFormModal';

const useStyles = makeStyles((theme) => ({
  sleepingCloud: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(30),
    paddingLeft: theme.spacing(50),
  },
  sleeping: {
    width: '40%',
    marginLeft: theme.spacing(15),
    marginBottom: theme.spacing(5),
  },
  sleeping1: {
    marginBottom: theme.spacing(4),
  },
  createCohortButton: {
    boxShadow: 'none', 
    '&:hover': {
      boxShadow: 'none', 
    },
  },
}));

const LowerMidBar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <Container>
      <div className={classes.sleepingCloud}>
        <img src='src/assets/Group 598.png' alt='sleeping-Cloud' className={classes.sleeping} />
        <img src='src/assets/Frame 48097982.png' alt='emptyspace' className={classes.sleeping1} />
        <Button className={classes.createCohortButton} onClick={handleOpen}>
          <img src='src/assets/Button.png' alt='button' />
        </Button>
      </div>

      <CohortFormModal open={open} handleClose={handleClose} />
    </Container>
  );
};

export default LowerMidBar;
