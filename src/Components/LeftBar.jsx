import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button';
import {makeStyles,Modal,FormLabel,TextField} from '@material-ui/core'
import {Typography} from '@mui/material';
import StartDate from './StartDate';
import ModalClose from '@mui/joy/ModalClose';



const useStyles = makeStyles((theme)=>({
  cover:{
   
    paddingTop : theme.spacing(2)
  },
  home:{
    marginTop: theme.spacing(5)
  },
  image:{
    marginRight:theme.spacing(2)
  },
  home1:{
    display:"flex",
    alignItems:"center"
  },
  title1:{
    marginRight: theme.spacing(25)
  },
  sleepingCloud:{
    display:"flex",
    flexDirection:"column",
    paddingLeft:theme.spacing(80),
   
  },
  sleeping:{
    width:"40%",
    marginLeft: theme.spacing(15),
    marginBottom:theme.spacing(5)
  },
  sleeping1:{
    marginBottom:theme.spacing(4)
  },
  addbutton:{
    paddingLeft:theme.spacing(96),

  }
  

}))


const LeftBar = () => {
  const classes = useStyles();
  const [open,setOpen] = useState(false)
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleOpen=()=>setOpen(true);
  const handleClose = () => setOpen(false);

  
  return (
    <>
    <Container className={classes.cover}>
      <div className={classes.home}>
        <div className={classes.home1} >
        <Button >
          <img src='src/assets/users.png' alt='doubleusers' className={classes.image}/>
          <img src='src/assets/Cohorts.png' alt='cohorts' className={classes.title1}/>
        </Button>
        <img src='src/assets/Frame 48097853.png'/>
      </div>
      
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
      <div className={classes.sleepingCloud}>
        <img src='src/assets/Group 598.png' alt='sleeping-Cloud' className={classes.sleeping}/>
        <img src='src/assets/Frame 48097982.png' alt='emptyspace' className={classes.sleeping1}/>
        </div>
        <div className={classes.addbutton}>
        <Button  onClick={handleOpen}>
          <img src='src/assets/Button.png' alt='button'/>
        </Button>
        <Modal open={open}>
          <Container 
            sx={{position:'absolute',
                backgroundColor:"white",
                width:"30%",height:"90%",
                top:0,
                bottom:0,
                right:0,
                left:0,
                margin:"auto",
                borderRadius:3}}> 
               <div>
                </div> 
          <ModalClose onClick={handleClose} onClose={handleClose}/> 
          <Typography  sx={{fontFamily:"inherit",paddingTop:4,fontWeight:600,fontSize:20}}>Create a Cohort</Typography>    
            <form autoComplete='off' className={classes.form}>
            <div className={classes.item}>
            <div>
              <label>Cohort Name</label>
              <TextField id="outlined-basic"  variant="outlined"  style={{width:"100%"}}/>
            </div>
            <div className={classes.item}>
              <label>Description</label>
              <TextField style={{width:"100%"}}
              variant="outlined"/>
               
            </div>
            <div>
              <label>Program</label>
              <TextField select
                  variant="outlined"
                  fullWidth/>
            </div>
            <div>
            <StartDate/>
            
            </div>
            
            </div>
            <div className={classes.item}>
              <FormLabel component="legend">Who can comment</FormLabel>
              
            </div>
            <div className={classes.item}>
              <Button  
              onClick={()=>setOPenAlert(true)}  
              variant='outlined' color='primary' 
              style={{marginRight:20}}>Create
              </Button>
              <Button 
              variant='outlined' 
              color='secondary' 
              onClick={()=>setOpen(false)}>Cancel</Button>
            </div>


          </form>
        </Container>
      </Modal>
        

        </div>
        
       
      
    </Container>
    </>
  )
}

export default LeftBar