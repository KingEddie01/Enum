import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createCohort, updateCohort } from '../Slice/userSlice';
import { format } from 'date-fns';
import { Modal, Container, Button, Typography } from '@mui/material';
import StartDate from './StartDate';
import DragDrop from './DragDrop';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: theme.spacing(4),
  },
  close: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  form: {
   
  },
  createCohortButton: {
    boxShadow: 'none', 
    '&:hover': {
      boxShadow: 'none',
    },
  },
}));

const CohortFormModal = ({ open, handleClose, cohort = {}, isEditMode = false, editIndex = null }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [cohortName, setCohortName] = useState(cohort.cohortName || '');
  const [description, setDescription] = useState(cohort.description || '');
  const [program, setProgram] = useState(cohort.program || '');
  const [startDate, setStartDate] = useState(cohort.startDate || null);
  const [endDate, setEndDate] = useState(cohort.endDate || null);
  const [fileUploaded, setFileUploaded] = useState(cohort.fileUploaded || null); 
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(cohortName && description && program && startDate && endDate);
  }, [cohortName, description, program, startDate, endDate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formattedStartDate = startDate ? format(new Date(startDate), "do MMM yyyy") : null;
    const formattedEndDate = endDate ? format(new Date(endDate), "do MMM yyyy") : null;
    const newCohort = {
      cohortName,
      description,
      program,
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      fileUploaded,
    };
    if (isEditMode) {
      dispatch(updateCohort({ index: editIndex, updatedCohort: newCohort }));
    } else {
      dispatch(createCohort(newCohort));
    }
    handleClose();
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
    if (endDate && new Date(date) > new Date(endDate)) {
      setEndDate(null);
    }
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleFileUpload = (imageData) => {
    setFileUploaded(imageData);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Container
        sx={{
          position: 'absolute',
          backgroundColor: 'white',
          width: '32%',
          height: '100%',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          margin: 'auto',
          borderRadius: 3,
        }}
      >
        <div className={classes.close}>
          <Typography sx={{ fontFamily: 'inherit', fontWeight: 600, fontSize: 20 }}>
            {isEditMode ? 'Edit Cohort' : 'Create a Cohort'}
          </Typography>
          <button
            onClick={handleClose}
            style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}
          >
            <img src='src/assets/x.png' alt='x' />
          </button>
        </div>
        <form autoComplete='off' className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.item}>
            <label>Cohort Name</label>
            <input
              placeholder='Ex. Cohort 1'
              value={cohortName}
              onChange={(e) => setCohortName(e.target.value)}
              style={{ padding: '12px', borderRadius: '5px', borderWidth: '1px' }}
            />
          </div>
          <div className={classes.item}>
            <label>Description</label>
            <textarea
              placeholder='Ex. A space for python developers'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{              padding: '10px', borderRadius: '5px', height: '150px' }}
              />
            </div>
            <div className={classes.item}>
              <label>Program</label>
              <select
                value={program}
                onChange={(e) => setProgram(e.target.value)}
                style={{
                  width: '100%',
                  borderRadius: '5px',
                  backgroundColor: 'transparent',
                  height: '43px',
                }}
              >
                <option value=''></option>
                <option value='frontend'>FrontEnd</option>
                <option value='backend'>BackEnd</option>
                <option value='datascience'>DataScience</option>
                <option value='productDesign'>Product Design</option>
              </select>
            </div>
            <div className={classes.item}>
              <StartDate
                startDate={startDate}
                endDate={endDate}
                onStartDateChange={handleStartDateChange}
                onEndDateChange={handleEndDateChange}
              />
            </div>
            <div className={classes.item}>
              <label>Upload File</label>
              <DragDrop onFileUpload={handleFileUpload} /> 
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant='outlined' onClick={handleClose}>
                Cancel
              </Button>
              <Button variant='contained' disabled={!isFormValid} type='submit' sx={{ marginLeft: 2 }}>
                {isEditMode ? 'Update Cohort' : 'Create Cohort'}
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
    );
  };
  
  export default CohortFormModal;
  
