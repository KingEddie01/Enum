import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button';
import {makeStyles} from '@material-ui/core'
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'






const useStyles = makeStyles((theme)=>({
  
  cover:{
   
    paddingTop : theme.spacing(2),
    
  },
  home:{
    marginTop: theme.spacing(5)
  },
  image:{
    marginRight:theme.spacing(2)
  },
  home1:{
    display:"flex",
    gap:120
  }
  
}))


const LeftBar = () => {
 
  
  const classes = useStyles();

  
  
  return (
    <>
    <Container className={classes.cover}>
        <div className={classes.home}>
          <div className={classes.home1} >
            <Button >
              <img src='src/assets/users.png' alt='doubleusers' className={classes.image}/>
              <Link to={"/cohorts"}>
              <img src='src/assets/Cohorts.png' alt='cohorts' className={classes.title1}/>
              </Link>
            </Button>
              <Typography
               sx={{fontSize:20,
               fontWeight:550,
               fontFamily:"fantasy"}}
              >Cohorts</Typography>
          </div>
        <div className={classes.home}>
        <Button>
          <img src='src/assets/book-open.png' alt='openBook' className={classes.image}/>
          
          <img src='src/assets/Programs.png' alt='programs' className={classes.title}/>
        </Button>
      </div>
      <div className={classes.home}>
        <Button>
          <img src='src/assets/briefcase.png' alt='briefCase' className={classes.image}/>
          <img src='src/assets/Label.png' alt='instructors' className={classes.title}/>
        </Button>
      </div>
      <div className={classes.home}>
        <Button>
          <img src='src/assets/user.png' alt='user' className={classes.image}/>
          <img src='src/assets/Label (1).png' alt='learner' className={classes.title}/>
        </Button>
      </div>
     </div>
    </Container>
    </>
  )
}

export default LeftBar