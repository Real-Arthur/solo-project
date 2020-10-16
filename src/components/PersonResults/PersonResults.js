
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Grid, Button, Container, Typography } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { withRouter } from 'react-router-dom';


class PersonResults extends Component {

  findFilmography = (personId, personName) => {
    console.log('Person id', personId, personName);
    this.props.dispatch({
      type: 'FETCH_FILMOGRAPHY',
      payload: {
        id: personId,
        name: personName
      }
    })
    this.props.history.push('/films')
  }

  render() {
    console.log('people list', );
    return (
      <Grid container direction="column" spacing={0}>
        {this.props.store.personReducer.map(person =>
        <Grid item xs={12} key={person.id}>
          <Grid container direction="row" justify="space-between" alignItems="center">
          <img src={`https://image.tmdb.org/t/p/w300${person.profile_path}`} />
          <Typography>{person.name}</Typography>
          <Button onClick={() => this.findFilmography(person.id, person.name)}><InfoIcon /></Button>
          </Grid>
          </Grid>
          )}
      </Grid>
    );
  }
}

export default connect(mapStoreToProps)(withRouter((PersonResults)));