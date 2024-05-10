import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { makeStyles, Modal} from '@material-ui/core';
import { Typography } from '@mui/material';
import StartDate from './StartDate';
import Container from '@mui/material/Container';
import DragDrop from './DragDrop';


const useStyles = makeStyles((theme) => ({
  sleepingCloud: {
    display: "flex",
    flexDirection: "column",
    paddingTop: theme.spacing(30),
    paddingLeft: theme.spacing(40)
  },
  sleeping: {
    width: "40%",
    marginLeft: theme.spacing(15),
    marginBottom: theme.spacing(5)
  },
  sleeping1: {
    marginBottom: theme.spacing(4)
  },
  item: {
    display: "flex",
    flexDirection: "column",
    paddingBottom:theme.spacing(4)
  },
  close: {
    display: "flex",
    justifyContent:"space-between",
    paddingTop: theme.spacing(3),
    paddingBottom:theme.spacing(3)
  },
  off: {
    paddingTop: theme.spacing(4)
  },
  last:{
    justifyContent:"space-between"
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
        <Button onClick={handleOpen} >
          <img src='src/assets/Button.png' alt='button' />
        </Button>
      </div>

      <Modal open={open}>
        <Container
          sx={{
            position: 'absolute',
            backgroundColor: "white",
            width: "32%", height: "98%",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            margin: "auto",
            borderRadius: 3
          }}>
          <div className={classes.close}>
            <Typography sx={{ fontFamily: "inherit", fontWeight: 600, fontSize: 20 }}>Create a Cohort</Typography>
            <button onClick={handleClose} style={{border:"none",backgroundColor:"transparent", cursor:"pointer"}}> 
              <img src='src/assets/x.png' alt='x'/>
            </button>
          </div>
          <form autoComplete='off' className={classes.form}>
            <div className={classes.item}>
              <label>Cohort Name</label>
              <input
                placeholder='Ex. Cohort 1'
                style={{ padding: '12px', borderRadius: '5px',borderWidth:"1px" }} />
            </div>
            <div className={classes.item}>
              <label>Description</label>
              <textarea
                placeholder='Ex.A space for python developers'
                style={{ padding: '10px', borderRadius: '5px', height: '150px' }}
              />
            </div>
            <div className={classes.item}>
              <label>Program</label>
              <select style={{ width: "100%", borderRadius: "5px", backgroundColor: "transparent", height: "43px" }}>
                <option value={""}></option>
                <option value={"frontend"}>FrontEnd</option>
                <option value={"backend"}>BackEnd</option>
                <option value={"datascience"}>DataScience</option>
                <option value={"productDesign"}>Product Design</option>
              </select>
            </div>
            <div>
              <StartDate  className={classes.date}/>
              <DragDrop />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="outlined" onClick={handleClose}>Cancel</Button>
              <Button variant="contained" disabled sx={{marginLeft:2}}> Create Cohort</Button>
            </div>
           
          </form>
        </Container>
      </Modal>
    </Container>
  );
}

export default LowerMidBar;
