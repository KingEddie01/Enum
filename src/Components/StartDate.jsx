import React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { makeStyles } from '@material-ui/core';
import TextField from '@mui/material/TextField'; // Import TextField
import dayjs from 'dayjs';
import 'dayjs/locale/en';

dayjs.locale('en');

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    paddingBottom: theme.spacing()
  },
  textField: {
    fontSize:"20px", 
  },
}));

export default function StartDate() {
  const classes = useStyles();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={classes.container}>
        <div>
          <label>Start Date</label>
          <DemoContainer components={['DatePicker']} sx={{width:"200px",height:"60px",paddingRight:"25px"}}>
            <DatePicker
              disablePast
              renderInput={(params) => (
                <TextField {...params} variant="standard" label="Start Date" className={classes.textField} /> // Apply custom style
              )}
              format="DD MMM YYYY" 
            />
          </DemoContainer>
        </div>
        <div className='pl-5'>
          <label>End Date</label>
          <DemoContainer components={['DatePicker']} sx={{width:"200px"}}>
            <DatePicker
              disablePast
              renderInput={(params) => (
                <TextField {...params} variant="standard" label="End Date" className={classes.textField} /> // Apply custom style
              )}
              format="DD MMM YYYY" 
            />
          </DemoContainer>
        </div>
      </div>
    </LocalizationProvider>
  );
}
