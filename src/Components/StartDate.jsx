import React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import 'dayjs/locale/en';

dayjs.locale('en');

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    paddingBottom: theme.spacing(2)
  },
  textField: {
    fontSize: "20px", 
    width: '100%' 
  },
  label: {
    marginBottom: theme.spacing(1) 
  },
}));

export default function StartDate({ startDate, endDate, onStartDateChange, onEndDateChange }) {
  const classes = useStyles();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={classes.container}>
        <div>
          <label className={classes.label}>Start Date</label>
          <DemoContainer components={['DatePicker']} sx={{ width: "200px", height: "60px", paddingRight: "25px" }}>
            <DatePicker
              value={startDate ? dayjs(startDate) : null} 
              onChange={(newStartDate) => {
                onStartDateChange(newStartDate ? newStartDate.toDate() : null); 
                if (endDate && dayjs(newStartDate).isAfter(dayjs(endDate))) {
                  onEndDateChange(null);
                }
              }}
              disablePast
              renderInput={(params) => (
                <TextField {...params} variant="standard" label="Start Date" className={classes.textField} />
              )}
              format="DD MMM YYYY"
            />
          </DemoContainer>
        </div>
        <div className='pl-5'>
          <label className={classes.label}>End Date</label>
          <DemoContainer components={['DatePicker']} sx={{ width: "200px" }}>
            <DatePicker
              value={endDate ? dayjs(endDate) : null} 
              onChange={(newEndDate) => onEndDateChange(newEndDate ? newEndDate.toDate() : null)} 
              disablePast
              minDate={startDate ? dayjs(startDate) : null} 
              renderInput={(params) => (
                <TextField {...params} variant="standard" label="End Date" className={classes.textField} />
              )}
              format="DD MMM YYYY"
            />
          </DemoContainer>
        </div>
      </div>
    </LocalizationProvider>
  );
}
