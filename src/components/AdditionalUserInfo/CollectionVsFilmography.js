import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles'
import Modal from '@material-ui/core/Modal';

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

function CollectionVsFilmography(props) {
  const classes = useStyles();
  // const [modalStyle] = useState(getModalStyle);
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true)
  };

  const handleClose = () => {
    setOpenModal(false)
  };

  const matchBarDetails = (
      <div className={classes.paper} container direction="column">        
        <h2>{props.movieTitle}</h2>

        <img src={`https://image.tmdb.org/t/p/w300${props.moviePosterPath}`} alt={props.movieTitle}/>
        <p>{props.movieOverview}</p>
        <p>{props.movieReleaseDate}</p>
       
      </div>
  );
 
  const overlap = props.store.filmography.findIndex(film => film.id === props.movieId)

  if(overlap !== -1) {
  return (
    <Grid item key={props.movieId}>
      <Button key={props.movieId} onClick={handleOpen}>
      <Typography>{props.movieTitle}</Typography>
      </Button>

      <Modal
      className={classes.modal}
      open={openModal}
      onClose={handleClose}
      >
        {matchBarDetails}
      </Modal>
    </Grid>
  );
  } else {
      return(
      <></>
      )
  }
}

export default connect(mapStoreToProps)(withRouter((CollectionVsFilmography)));
