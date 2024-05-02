import React from 'react'
import {makeStyles} from '@material-ui/core'
const useStyles = makeStyles((theme)=>({
  splash :{
    width:"100%",
    marginTop:theme.spacing(2),
    height:"180px",
    position:"relative",
    zIndex:1
  },
  pic:{
    position:"relative",
    paddingTop: theme.spacing(10)
  },
  top:{
    position:"absolute",
    bottom:"17%",
    left: "5%",
    zIndex:2,
    cursor:"pointer",
  }

}))

const MidBar = () => {
  const classes = useStyles();
  return (
  <div className={classes.pic}>
    <img className={classes.splash} src='src/assets/unsplash_LWfFfA5U5z8.png' alt='splash'/>
    <img className={classes.top} src='src/assets/Company-Section.png' alt='section'/>
  </div>
  
   
   
  
   

  
  )
}

export default MidBar