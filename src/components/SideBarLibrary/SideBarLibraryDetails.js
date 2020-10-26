import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Grid, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import Modal from '@material-ui/core/Modal';

import { ThemeProvider } from '@material-ui/styles';
import theme from '../Theme/Theme'

  
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
  const [review, setReview] = useState(props.movieReview)

  const handleOpen = () => {
    setOpenModal(true);
    setReview(props.movieReview)
  };

  const handleClose = () => {
    setOpenModal(false)
  };

  const sideBarDetails = (
      <div className={classes.paper} container direction="column">        
        <h2>{props.movieTitle}</h2>
        <img src={`https://image.tmdb.org/t/p/w300${props.moviePosterPath}`} alt={props.movieTitle}/>
        <p>{props.movieOverview}</p>
        <p>{props.movieReleaseDate}</p>
        <p>Favorite Part?</p>
       <textarea
       type="text"
       value={review}
       onChange={(event) => setReview(event.target.value)}
       />
       <Button onClick={() => props.changeReview(review, props.movieId)}>Save Changes</Button>
      </div>
  );

  return (
    <ThemeProvider theme={theme}>
    <Grid item key={props.movieId} style={{backgroundColor: '#EFF7F6'}}>
        <Button key={props.movieId} onClick={handleOpen}>
        <Grid item xs={12}>
        <Typography color="textSecondary">{props.movieTitle}</Typography>
        </Grid>
        
                
      </Button>
      
      <Modal
      className={classes.modal}
      open={openModal}
      onClose={handleClose}
      >
          {sideBarDetails}
      </Modal>
    </Grid></ThemeProvider>
  );
}

export default connect(mapStoreToProps)(withRouter((SideBarLibraryDetails)));