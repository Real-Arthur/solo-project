import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Invisible from './Invisible.jpg'


function PersonPhotos(props) {
    
    if(props.personPhoto !== null) {
        return ( <img src={`https://image.tmdb.org/t/p/w300${props.personPhoto}`} alt={`Name of ${props.personName}`}/> )
    } else {
        return ( <img src={Invisible} alt='Invisible Man stand in' /> )
    }
}

export default connect(mapStoreToProps)(withRouter((PersonPhotos)));