import React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
 

}))

export default function StartDate() {
  const classes = useStyles();
  return (
    <LocalizationProvider  dateAdapter={AdapterDayjs}  >
      <div className={classes.container}  style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <label>Start Date</label>
          <DemoContainer components={['DatePicker']}>
            <DatePicker />
          </DemoContainer>
        </div>
        <div>
          <label>End Date Date</label>
          <DemoContainer components={['DatePicker']}>
            <DatePicker />
          </DemoContainer>
        </div>
        
       
      </div>
      
    </LocalizationProvider>
  );
}