import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import BusterKeaton from './BusterKeaton.jpg'

function PosterDefault(props) {
 
    if(props.moviePoster === null) {
         return ( <img src={BusterKeaton} alt='Buster Keaton on a pile of film' /> )
    } else {
       return ( <img src={`https://image.tmdb.org/t/p/w300${props.moviePoster}`} alt={`Name of ${props.movieTitle}`}/> )
    }
}


export default connect(mapStoreToProps)(withRouter((PosterDefault)));