import { AppBar, Toolbar, Typography} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AppsIcon from '@mui/icons-material/Apps';
import {makeStyles} from '@material-ui/core'
import Button from '@mui/material/Button';


const useStyles = makeStyles((theme)=>({
  midcomp:{
    display:"flex",alignItems:"center",
    
  },
  thirdcomp:{display:"flex",alignItems:"center",marginRight:theme.spacing(5)
},
item:{marginRight:theme.spacing(4),marginLeft:theme.spacing(5),marginTop:theme.spacing(2)},
badges: {
  marginRight : theme.spacing(2)
},
bell:{
  height:"40px"
}

}))


const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar position='fixed' color='default' sx={{paddingLeft:10,paddingRight:7}} >
      <Toolbar  sx={{display:"flex",justifyContent:"space-between"}}>
        
          <img src='/src/assets/logo.png' alt='logo' />
      
        <div className={classes.midcomp}>
        <Button  sx={{textTransform:"none",color:"black",fontSize:18,fontWeight:400}}>
          Home
        </Button>
        <Button>
          <img src='/src/assets/nav-tab.png' alt='workSpace' className={classes.item}/>
        </Button>
        <Button sx={{textTransform:"none",color:"black",fontSize:18,fontWeight:400}} >
          Resources Library
        </Button>
      </div>

        <div className={classes.thirdcomp}>
          <Button>
            <img src='src/assets/Group 48097083.png' alt='notification'className={classes.bell} />
          </Button> 
          <Button>
            <img src='src/assets/Ellipse 131.png' alt='user'className={classes.bell} />
          </Button>
            
          <Typography sx={{marginRight:1}}>Onowomano</Typography>
          <Button><KeyboardArrowDownIcon sx={{marginRight:3,color:"grey"}} /></Button>
          <Button><AppsIcon color='primary' sx={{fontSize:"50px"}}/></Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
