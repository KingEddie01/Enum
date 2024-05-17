import { Typography, Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AppsIcon from '@mui/icons-material/Apps';
import { makeStyles } from '@material-ui/core';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  midcomp: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  thirdcomp: {
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(5)
  },
  item: { paddingTop: theme.spacing(2) },
  badges: {
    marginRight: theme.spacing(2)
  },
  bell: {
    height: "40px",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  singleLogo: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  doubleLogo: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  user: {
    height: "40px"
  },
  bellSingle: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  name: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  downarrow: {
    marginRight: 3,
    height: "40px",
    color: "grey",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  apps: {
    fontSize: "50px",
    height: "40px",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar position='fixed' color='default' sx={{ paddingLeft: 10, paddingRight: 7 }} >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <img src='src/assets/Group 13149.png' alt='onlylogo' className={classes.singleLogo} />
        <img src='/src/assets/logo.png' alt='logo' className={classes.doubleLogo} />

        <div className={classes.midcomp}>
          <Link to={"/"}>
            <Button sx={{
              textTransform: "none",
              color: "black", fontSize: 18,
              fontWeight: 400
            }}
              className={classes.homebtn}>
              Home
          </Button>
          </Link>
          <Button>
            <img src='/src/assets/nav-tab.png' alt='workSpace' className={classes.item} />
          </Button>
          <Button sx={{ textTransform: "none", color: "black", fontSize: 18, fontWeight: 400 }} >
            Resources Library
        </Button>
        </div>

        <div className={classes.thirdcomp}>
          <Button>
            <img src='src/assets/Group 48097083.png' alt='notification' className={classes.bell} />
            <img src='src/assets/notification.png' alt='bell' className={classes.bellSingle} />
          </Button>
          <Button>
            <img src='src/assets/Ellipse 131.png' alt='user' className={classes.user} />
          </Button>

          <Grid container alignItems="center" spacing={1} sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Grid item>
              <Typography sx={{ marginRight: 1 }} className={classes.name}>Onowomano</Typography>
            </Grid>
            <Grid item>
              <Button className={classes.downarrow}><KeyboardArrowDownIcon  /></Button>
            </Grid>
            <Grid item>
              <Button ><AppsIcon color='primary' sx={{fontSize:40}} /></Button>
            </Grid>
          </Grid>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
