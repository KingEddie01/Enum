import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ImageIcon from '@mui/icons-material/Image'; 

const useStyles = makeStyles((theme) => ({
  dropzone: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    border: `2px dashed ${theme.palette.grey[500]}`,
    borderRadius: theme.shape.borderRadius,
    cursor: 'pointer',
    backgroundColor: theme.palette.background.paper,
    transition: 'background-color 0.3s ease',
    '&:hover': {
      borderColor: theme.palette.primary.main,
      backgroundColor: "#F0F8FF",
    },
    padding: theme.spacing(2),
  },
  icon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight: theme.spacing(1),
    color: theme.palette.grey[800],
  },
  text: {
    marginBottom: theme.spacing(1),
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.grey[500],
  },
  hiddenInput: {
    display: 'none',
  },
  span: {
    color: "#00BFFF",
  },
  text1: {
    paddingLeft: theme.spacing(3),
  },
  info1: {
    display: "flex",
    alignItems: 'center'
  },
  previewImage: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '50%',
  },
  placeholderIcon: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.grey[500],
  },
}));

const DragDrop = ({ onFileUpload }) => {
  const classes = useStyles();
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    handleFile(files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    handleFile(files[0]);
  };

  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      onFileUpload(reader.result); 
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    document.body.addEventListener('drop', handleDrop);
    document.body.addEventListener('dragover', handleDragOver);

    return () => {
      document.body.removeEventListener('drop', handleDrop);
      document.body.removeEventListener('dragover', handleDragOver);
    };
  }, []);

  return (
    <div style={{ paddingBottom: 5 }}>
      <Typography>Add a cohort avatar</Typography>
      <div className={classes.dropzone} onClick={handleClick}>
        {image ? (
          <img src={image} alt="Uploaded" className={classes.previewImage} />
        ) : (
          <div className={classes.placeholderIcon}>
            <ImageIcon style={{ fontSize: 50 }} />
          </div>
        )}
        <div>
          <p className={classes.text1}>Drag and drop or <span className={classes.span}>choose file</span></p>
          <p className={classes.text}>240x240 px Recommended, max size 1MB</p>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          className={classes.hiddenInput}
          onChange={handleFileChange}
        />
      </div>
      <div className={classes.info1}>
        <InfoOutlinedIcon sx={{ fontSize: "medium", paddingRight: 1, color: '#696969' }} />
        <Typography sx={{ fontSize: "15px", color: '#696969' }}>You can do this later</Typography>
      </div>
    </div>
  );
};

export default DragDrop;
