
import './App.css'
import LeftBar from './Components/LeftBar'
import MidBar from './Components/MidBar'
import NavBar from './Components/NavBar'
import Grid from '@mui/material/Grid';
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
  container :{
    paddingLeft : theme.spacing(7)
    
  }

}))

function App() {
  const classes = useStyles();

  return (
  <>
   <NavBar/>
   <MidBar/>
   <Grid container className={classes.container}>
    <Grid item >
      <LeftBar/>
    </Grid>
  </Grid>
  
   
   </>
  )
}

export default App
