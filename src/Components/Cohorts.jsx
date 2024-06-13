import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createCohort, updateCohort, deleteCohort } from '../Slice/userSlice';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { makeStyles } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import NavBar from './NavBar';
import Container from '@mui/material/Container';
import { Search } from '@mui/icons-material';
import StartDate from './StartDate';
import DragDrop from './DragDrop';
import InputBase from '@mui/material/InputBase';
import CohortMenu from './CohortMenu';
import { format } from 'date-fns';
import ImageIcon from '@mui/icons-material/Image';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import LeftBar from './LeftBar';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  find: {
    display: 'flex',
    alignItems: 'center',
    marginTop:theme.spacing(6),
    position: 'relative',
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'grey',
    height: '44px',
    width: '400px',
    backgroundColor: alpha(theme.palette.common.white, 1.5),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
  },
  home: {
    paddingBottom: theme.spacing(5),
    paddingLeft: theme.spacing(5),
  },
  splash: {
    width: '100%',
    marginTop: theme.spacing(2),
    height: '180px',
    position: 'relative',
    zIndex: 1,
  },
  pic: {
    position: 'relative',
    paddingTop: theme.spacing(10),
  },
  top: {
    position: 'absolute',
    bottom: '17%',
    left: '5%',
    zIndex: 2,
    cursor: 'pointer',
  },
  total: {
    display: 'flex',
    gap: '15%',
    padding: theme.spacing(7),
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
  },
  firstRow: {
    
    
    
  },
  close: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: theme.spacing(4),
  },
  
  firstChild: {
    display: 'flex',
    gap: 20,
    
  },
  secondChild: {
    display: 'flex',
    gap: 40,
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
  },
  thirdChild: {
    display: 'grid',
    gridTemplateColumns: '1000px 1fr',
    gap: theme.spacing(2),
  },
  child: {
    display: 'flex',
    gap: 8,
    paddingTop: theme.spacing(5),
  },
  fourthChild: {
    display: 'flex',
    gap: 17,
    paddingTop: theme.spacing(2),
  },
  dept: {
    display: 'flex',
    flexDirection: 'column',
    gap: 7,
  },
  createCohortButton: {
    width:'200px',
    height:'50px',
    borderRadius:"200px",
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none',
    },
  },
}));

const Cohorts = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cohorts = useSelector((state) => state.user.cohorts);
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);
  const openPopover = Boolean(popoverAnchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

 
  const handlePopoverOpen = (event) => {
    setPopoverAnchorEl(event.currentTarget);
  };

 
  const handlePopoverClose = () => {
    setPopoverAnchorEl(null);
  };

  
  const handleOptionClick = (option) => {
   
    switch (option) {
      case 'Publish Poll':
       
        break;
      case 'Schedule Event':
       
        break;
      case 'Make Announcement':
        
        break;
      default:
        break;
    }
    handlePopoverClose(); 
  };

  const [cohortName, setCohortName] = useState('');
  const [description, setDescription] = useState('');
  const [program, setProgram] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleOpenModal = () => setOpenModal(true);

  const handleCloseModal = () => {
    setOpenModal(false);
    resetForm();
  };

  const resetForm = () => {
    setCohortName('');
    setDescription('');
    setProgram('');
    setStartDate(null);
    setEndDate(null);
    setFileUploaded(null);
    setIsEditMode(false);
    setEditIndex(null);
  };

  useEffect(() => {
    setIsFormValid(cohortName && description && program && startDate && endDate);
  }, [cohortName, description, program, startDate, endDate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formattedStartDate = startDate ? format(new Date(startDate), "do MMM yyyy") : null;
    const formattedEndDate = endDate ? format(new Date(endDate), "do MMM yyyy") : null;
    const newCohort = {
      cohortName,
      description,
      program,
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      fileUploaded,
    };
    if (isEditMode) {
      dispatch(updateCohort({ index: editIndex, updatedCohort: newCohort }));
    } else {
      dispatch(createCohort(newCohort));
    }
    handleCloseModal();
  };

  const handleEdit = (index) => {
    const cohort = cohorts[index];
    setCohortName(cohort.cohortName);
    setDescription(cohort.description);
    setProgram(cohort.program);
    setStartDate(cohort.startDate);
    setEndDate(cohort.endDate);
    setFileUploaded(cohort.fileUploaded);
    setEditIndex(index);
    setIsEditMode(true);
    handleOpenModal();
  };

  const handleDelete = (index) => {
    dispatch(deleteCohort(index));
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
    if (endDate && new Date(date) > new Date(endDate)) {
      setEndDate(null);
    }
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const filteredCohorts = cohorts.filter(cohort => cohort.cohortName.toLowerCase().includes(searchQuery.toLowerCase()));

  const renderCohorts = () => {
    return filteredCohorts.map((cohort, index) => (
      <Card key={index} sx={{ marginBottom: 4, boxShadow: "0 8px 16px 0px rgba(240, 249, 255, 0.5)", borderRadius: "8px", border: "1px #F6FCFF" }}>
        <CardContent sx={{display:'flex',justifyContent:'space-around' }}>
          <div className={classes.firstChild}>
            {cohort.fileUploaded ? (
              <img src={cohort.fileUploaded} alt='cohort image' style={{ width: '60px', height: '60px', objectFit: 'cover',}} />
            ) : (
              <div style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0', borderRadius: '50%' }}>
                <ImageIcon style={{ fontSize: 30, color: '#9e9e9e' }} />
              </div>
            )}
            <div className={classes.secondChild}>
              <div className={classes.dept}>
                <Typography variant='h5'>{cohort.cohortName}</Typography>
                <Typography variant="body2" color="text.secondary">{cohort.program}</Typography>
              </div>
              <div className={classes.child}>
                <img src='src/assets/user.png' alt='user icon' />
                <Typography variant="body2" color="text.secondary">25 Learners</Typography>
              </div>
            </div>
          </div>
          <div className={classes.fourthChild}>
            <Typography variant='body2' color='text.secondary'>{cohort.startDate}</Typography>
            <CohortMenu onEdit={() => handleEdit(index)} onDelete={() => handleDelete(index)} />
          </div>
        </CardContent>
      </Card>
    ));
  };

  return (
    <div>
      <NavBar />
      <div className={classes.pic}>
        <img className={classes.splash} src='src/assets/unsplash_LWfFfA5U5z8.png' alt='splash' />
        <img className={classes.top} src='src/assets/Company-Section.png' alt='section' />
      </div>
      <div>
        <div className={classes.total}>
          <div>
            <div className={classes.list}>
              <div className={classes.firstRow}>
                <div style={{display:'flex',gap:"70%"}}>
                <div style={{display:'flex',gap:'20%'}}>
                <Container className={classes.cover}>
        <div className={classes.home}>
          <div className={classes.home1} >
            <Button >
              <img src='src/assets/users.png' alt='doubleusers' className={classes.image}/>
              <Link to={"/cohorts"}>
              <img src='src/assets/Cohorts.png' alt='cohorts' className={classes.title1}/>
              </Link>
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
    </Container>
    <div style={{marginTop:'45px'}} >
            <div>
            <Typography
               sx={{fontSize:20,
               fontWeight:550,
               fontFamily:"fantasy"}}
              >Cohorts</Typography>
            
              </div>    
    
    
          <div className={classes.find}>
            

            <Search />
            <InputBase placeholder='Search' onChange={(e) => setSearchQuery(e.target.value)} />
            
           
          </div>
          </div>
                </div>
                
                
               
                <div style={{display:'flex',gap:10,marginTop:"12%"}}>
                  <div>
                    <Button variant='contained' sx={{borderRadius:2,textTransform:'none'}} className={classes.createCohortButton} onClick={handleOpenModal}>Create Cohort</Button>
                  </div>
                  <div>
                      <Button
                      variant='outlined'
                      sx={{ textTransform:'none', width: 200, height: 50, borderRadius: 2, color: "black" }}
                      onClick={handleMenuOpen}
                      >
                      More Actions
                      <MoreVertIcon sx={{ paddingLeft: 2 }} />
                    </Button>

                  </div>

                </div>
                </div>
                
                
                
                {/* Popover for More Actions */}
                <Popover
                  open={Boolean(anchorEl)}
                  anchorEl={anchorEl}
                  onClose={handleMenuClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                  <MenuItem onClick={() => handleOptionClick('Publish Poll')}>Publish a poll</MenuItem>
                  <MenuItem onClick={() => handleOptionClick('Schedule Event')}>Schedule an event</MenuItem>
                  <MenuItem onClick={() => handleOptionClick('Make Announcement')}>Make an announcement</MenuItem>
                </Popover>
              </div>
             
            </div>
            
          </div>
          
        </div>
        {renderCohorts()}
        
      </div>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Container
          sx={{
            position: 'absolute',
            backgroundColor: "white",
            width: "32%", height: "100%",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            margin: "auto",
            borderRadius: 3
          }}>
          <div className={classes.close}>
            <Typography sx={{ fontFamily: "inherit", fontWeight: 600, fontSize: 20 }}>
              {isEditMode ? 'Edit Cohort' : 'Create a Cohort'}
            </Typography>
            <button onClick={handleCloseModal} style={{ border: "none", backgroundColor: "transparent", cursor: "pointer" }}>
              <img src='src/assets/x.png' alt='x' />
            </button>
          </div>
          <form autoComplete='off' className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.item}>
              <label>Cohort Name</label>
              <input
                placeholder='Ex. Cohort 1'
                value={cohortName}
                onChange={(e) => setCohortName(e.target.value)}
                style={{ padding: '12px', borderRadius: '5px', borderWidth: "1px" }}
              />
            </div>
            <div className={classes.item}>
              <label>Description</label>
              <textarea
                placeholder='Ex. A space for python developers'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ padding: '10px', borderRadius: '5px', height: '150px' }}
              />
            </div>
            <div className={classes.item}>
              <label>Program</label>
              <select
                value={program}
                onChange={(e) => setProgram(e.target.value)}
                style={{ width: "100%", borderRadius: "5px", backgroundColor: "transparent", height: "43px" }}>
                <option value={""}></option>
                <option value={"frontend"}>FrontEnd</option>
                <option value={"backend"}>BackEnd</option>
                <option value={"datascience"}>DataScience</option>
                <option value={"productDesign"}>Product Design</option>
              </select>
            </div>
            <div className={classes.item}>
              <StartDate
                startDate={startDate}
                endDate={endDate}
                onStartDateChange={handleStartDateChange}
                onEndDateChange={handleEndDateChange}
              />
            </div>
            <div className={classes.item}>
              <label>Upload File</label>
              <DragDrop onFileUpload={setFileUploaded} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="outlined" onClick={handleCloseModal}>Cancel</Button>
              <Button variant="contained" disabled={!isFormValid} type="submit" sx={{ marginLeft: 2 }}>
                {isEditMode ? 'Update Cohort' : 'Create Cohort'}
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
    </div>
  );
};

export default Cohorts;

