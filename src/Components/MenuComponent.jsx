import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@material-ui/core/styles';


const MenuComponent = ({ anchorEl, handleClose }) => {
  

  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
     
    >
      <MenuItem  
        onClick={handleClose}
        sx={{
          '&:hover': {
            backgroundColor: '#F0F8FF',
          },
        }}
        >Publish a poll
      </MenuItem>
      
      <MenuItem 
        onClick={handleClose}
        sx={{
          '&:hover': {
            backgroundColor: '#F0F8FF', 
          },
        }}
        >Schedule an event
      </MenuItem>
      
      <MenuItem 
        sx={{
          '&:hover': {
            backgroundColor: '#F0F8FF',
          },
        }}
        
        onClick={handleClose}
        >Make an announcement
      </MenuItem>
    </Menu>
  );
};

export default MenuComponent;
