import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import StartDate from './StartDate';
import Container from '@mui/material/Container';
import DragDrop from './DragDrop';

const useStyles = makeStyles((theme) => ({
  sleepingCloud: {
    display: "flex",
    flexDirection: "column",
    paddingTop: theme.spacing(30),
    paddingLeft: theme.spacing(50)
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
    paddingBottom: theme.spacing(4)
  },
  close: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  off: {
    paddingTop: theme.spacing(4)
  },
  last: {
    justifyContent: "space-between"
  },
}));

const LowerMidBar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [cohortName, setCohortName] = useState('');
  const [description, setDescription] = useState('');
  const [program, setProgram] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (cohortName && description && program && startDate && endDate && fileUploaded) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [cohortName, description, program, startDate, endDate, fileUploaded]);

  return (
    <Container>
      <div className={classes.sleepingCloud}>
        <img src='src/assets/Group 598.png' alt='sleeping-Cloud' className={classes.sleeping} />
        <img src='src/assets/Frame 48097982.png' alt='emptyspace' className={classes.sleeping1} />
        <Button onClick={handleOpen}>
          <img src='src/assets/Button.png' alt='button' />
        </Button>
      </div>

      <Modal open={open} onClose={handleClose}>
        <Container
          sx={{
            position: 'absolute',
            backgroundColor: "white",
            width: "32%", height: "100%",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            margin: "auto",
            borderRadius: 3
          }}>
          <div className={classes.close}>
            <Typography sx={{ fontFamily: "inherit", fontWeight: 600, fontSize: 20 }}>Create a Cohort</Typography>
            <button onClick={handleClose} style={{ border: "none", backgroundColor: "transparent", cursor: "pointer" }}>
              <img src='src/assets/x.png' alt='x' />
            </button>
          </div>
          <form autoComplete='off' className={classes.form}>
            <div className={classes.item}>
              <label>Cohort Name</label>
              <input
                placeholder='Ex. Cohort 1'
                value={cohortName}
                onChange={(e) => setCohortName(e.target.value)}
                style={{ padding: '12px', borderRadius: '5px', borderWidth: "1px" }} />
            </div>
            <div className={classes.item}>
              <label>Description</label>
              <textarea
                placeholder='Ex.A space for python developers'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ padding: '10px', borderRadius: '5px', height: '150px' }}
              />
            </div>
            <div className={classes.item}>
              <label>Program</label>
              <select
                value={program}
                onChange={(e) => setProgram(e.target.value)}
                style={{ width: "100%", borderRadius: "5px", backgroundColor: "transparent", height: "43px" }}>
                <option value={""}></option>
                <option value={"frontend"}>FrontEnd</option>
                <option value={"backend"}>BackEnd</option>
                <option value={"datascience"}>DataScience</option>
                <option value={"productDesign"}>Product Design</option>
              </select>
            </div>
            <div className={classes.item}>
              <StartDate
                startDate={startDate}
                endDate={endDate}
                onStartDateChange={(date) => setStartDate(date)}
                onEndDateChange={(date) => setEndDate(date)}
              />
            </div>
            <div className={classes.item}>
              <label>Upload File</label>
              <DragDrop onFileUpload={() => setFileUploaded(true)} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="outlined" onClick={handleClose}>Cancel</Button>
              <Button variant="contained" disabled={!isFormValid} sx={{ marginLeft: 2 }}> Create Cohort</Button>
            </div>
          </form>
        </Container>
      </Modal>
    </Container>
  );
}

export default LowerMidBar;
