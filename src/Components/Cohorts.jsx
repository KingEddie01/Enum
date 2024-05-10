import React from 'react'
import Button from '@mui/material/Button';
import {makeStyles,alpha,CardContent} from '@material-ui/core'
import {Typography} from '@mui/material';
import NavBar from './NavBar'
import MidBar from './MidBar'
import Card from '@mui/material/Card';
import { useState } from 'react';
import { Search } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CohortList from "./CohortList"
import { InputBase } from '@mui/material';
import MenuComponent from './MenuComponent';



const useStyles = makeStyles((theme)=>({
  find:{
    display: "flex",
    alignItems: "center",
    position: "relative",
    borderRadius: 10,
    borderStyle:"solid",
    borderWidth:1,
    borderColor:"grey",
    height:"44px",
    width:"400px",
    
    backgroundColor: alpha(theme.palette.common.white, 1.50),
    '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    
  }
  },
  home:{
    paddingBottom:theme.spacing(5),
    paddingLeft:theme.spacing(5)
  },
  image:{
    marginRight:theme.spacing(2)
  },
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
  },
  total:{
    display:"flex",
    gap:"15%",
    padding:theme.spacing(7),

    
    
    
  },
  list:{
    display:"flex",
    flexDirection:"column"
  },
  firstRow:{
    display: "flex",
    gap:350,
    paddingBottom:theme.spacing(6)
    
  },
  last:{
    display:"flex",
    gap:30
  },
  drop:{
    paddingBottom:theme.spacing(6)
  },
  cardcover:{
    display:"flex",
    justifyContent:"space-between",
    
    
    
  },
  firstChild:{
    display:"flex",
    gap:20
  },
  secondChild:{
    display:"flex",
    gap:40
   
   
  },
  thirdChild:{
    display: 'grid',
    gridTemplateColumns: '1000px 1fr', 
    gap: theme.spacing(2), 
   
  },
  child:{
    display:"flex",
    gap:8,
    paddingTop: theme.spacing(5)
   
  },
  
  fourthChild:{
    display:"flex",
    gap: 17,
    paddingTop:theme.spacing(2)
  },
  dept:{
    display:"flex",
    flexDirection:"column",
    gap:7
  }
  
}))

const Cohorts = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  
  function renderCohorts() {
    return CohortList.map((cohort, index) => (
      <Card  key={index} 
      sx={{marginBottom:4,boxShadow: "0 8px 16px 0px rgba(240, 249, 255, 0.5)",borderRadius:"8px",border:"1px #F6FCFF"}}>
        <CardContent className={classes.cardcover}>
         
          <div className={classes.firstChild}>
            
              <img src={cohort.image} alt={cohort.cohortName} style={{ width: "sm" }} />
            
          <div className={classes.secondChild}>
              <div className={classes.dept}>
                <Typography variant='h5'>
                    {cohort.cohortName}
                </Typography>
                <div className={classes.icon}>
                <Typography variant="body2" color="text.secondary">
                  {cohort.departmant}
                </Typography>
              </div>
              </div>
                
              <div className={classes.child}>
               
                  <div>
                    <img src='src/assets/user.png'/>
                  </div>
                  <Typography variant="body2" color="text.secondary">
                    {cohort.numberOflearners} Learners
                  </Typography>
                
              </div>
            
          </div>
          </div>
          
          <div className={classes.fourthChild}>
            <div>
              <Typography variant="body2" color="text.secondary">
                Created Date: {cohort.createdDate}
              </Typography>
            </div>
            
            <MoreVertIcon/>
          </div>
        </CardContent>
      </Card>
    ));
  }
  return (
      <div>
          <NavBar/>
          <div className={classes.pic}>
              <img className={classes.splash} src='src/assets/unsplash_LWfFfA5U5z8.png' alt='splash'/>
              <img className={classes.top} src='src/assets/Company-Section.png' alt='section'/>
          </div>
          <div>
      <div className={classes.total}>
         
            <div>
            <div className={classes.home} >
              <Button >
                <img src='src/assets/users.png' alt='doubleusers' className={classes.image}/>
                <img src='src/assets/Cohorts.png' alt='cohorts' className={classes.title1}/>
              </Button>
              
              
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
      <div className={classes.list}>
      <div className={classes.drop}>
          <Typography sx={{fontSize:20,fontWeight:550,fontFamily:"fantasy"}}>Cohorts</Typography>
     </div>
         
        <div className={classes.firstRow}>
          
          <div className={classes.find}>
            <Search sx={{color:'gray'}}/>
            <InputBase placeholder='Search'/>
          </div>
          <div className={classes.last}>
            <Button variant='contained' 
            color='primary' 
            sx={{textTransform:'none',width:170,height:50,borderRadius:2}}>
              Create Cohort
              </Button>
            <Button 
              variant='outlined' 
              sx={{textTransform:'none',
              width:180,height:50,
              borderRadius:2,
              color:"black"}}
              onClick={handleMenuOpen}

              >
                More Actions 
                <MoreVertIcon sx={{paddingLeft:2}} />
            </Button>
            <MenuComponent anchorEl={anchorEl} handleClose={handleMenuClose} />
          </div>
        </div>
        {renderCohorts()}
      </div>
        
      </div>
          
      </div>
      
    </div>
  )
}

export default Cohorts