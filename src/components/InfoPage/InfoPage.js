import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Grid, Button, Container, Typography, Box } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'


// const InfoPage = () => (
//   <div>
//     {JSON.stringify(movies)}
//   </div>
// );

// If you needed to add local state or other things,
// you can make it a class component like:


class InfoPage extends React.Component {
 state= {
   userData: 0
 }

  render() {
    console.log('info props', this.props.store);
    
    // return (
    //   <ul>
    //     {this.props.movies.map(movie => 
    //       <li>{movie.title}</li>
    //       )}
    //   </ul>
    // )
    return (
      <Grid container direction="column" spacing={0}>
        {this.props.movies.map((movie, i) =>
        <Button key={i}>
        <Grid item xs={12}>
          {/* <Grid container direction="row" justify="space-between" alignItems="center">
          <img src={`https://image.tmdb.org/t/p/w300${person.profile_path}`} /> */}
          <Typography>{movie.title}</Typography>
          {/* <Button onClick={() => this.findFilmography(person.id, person.name)}><InfoIcon /></Button> */}
          {/* </Grid> */}
          </Grid></Button>
          )}
      </Grid>
    )
  }
}

export default connect(mapStoreToProps)(InfoPage);
