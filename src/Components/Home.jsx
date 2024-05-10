import React from 'react'
import LeftBar from './LeftBar';
import MidBar from './MidBar'
import NavBar from './NavBar'
import Grid from '@mui/material/Grid';
import {makeStyles} from '@material-ui/core'
import LowerMidBar from './LowerMidBar';

const useStyles = makeStyles((theme)=>({
  container :{
    paddingLeft : theme.spacing(7)
    
  }

}))
const Home = () => {
  const classes = useStyles()
  return (
<>
  <NavBar/>
    <MidBar/>
    <Grid container className={classes.container}>
     <Grid >
       <LeftBar/>
     </Grid>
     <Grid >
         <LowerMidBar/>
     </Grid>
    
   </Grid>
</>
  )
}

export default Home