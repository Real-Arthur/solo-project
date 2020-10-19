import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Grid, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import Modal from '@material-ui/core/Modal';



// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.


  
  const useStyles = makeStyles((theme) => ({
    modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
    },
    paper: {
      position: 'absolute',
      width: 400,
      border: '2px solid #000',
      backgroundColor: '#eceff1'
      // boxShadow: theme.shadows[5],
      // padding: theme.spacing(2, 4, 3),
    },
  }));


function SideBarLibraryDetails(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const classes = useStyles();
  // const [modalStyle] = useState(getModalStyle);
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true)
  };

  const handleClose = () => {
    setOpenModal(false)
  };

  const sideBarDetails = (
      <div className={classes.paper} container direction="column">        
        <h2>{props.movieTitle}</h2>

        <img src={`https://image.tmdb.org/t/p/w300${props.moviePosterPath}`} />
        <p>{props.movieOverview}</p>
        <p>{props.movieReleaseDate}</p>
       
      </div>
  );

  return (
    <Grid item key={props.movieId}>
        <Button key={props.movieId} onClick={handleOpen}>
        <Grid item xs={12}>
        <Typography>{props.movieTitle}</Typography>
        </Grid>
        
                
      </Button>
      
      <Modal
      className={classes.modal}
      open={openModal}
      onClose={handleClose}
      >
          {sideBarDetails}
      </Modal>
    </Grid>
  );
}

export default connect(mapStoreToProps)(withRouter((SideBarLibraryDetails)));