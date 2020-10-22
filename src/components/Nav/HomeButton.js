import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from "@material-ui/core"
import HomeIcon from '@material-ui/icons/Home';

class HomeButton extends Component {

  home = () => {
      this.props.dispatch({
        type: 'RESET_CAST'
      })
      this.props.dispatch({
        type: 'RESET_MOVIE_DETAILS'
      }) 
      this.props.dispatch({
        type: 'RESET_FILMOGRAPHY'
      }) 
      this.props.dispatch({
        type: 'RESET_MATCHES'
      })
      this.props.dispatch({
        type: 'RESET_SEARCHED_TITLE'
      })
      this.props.dispatch({
        type: 'RESET_SEARCHED_PERSON'
      })
      this.props.history.push('/home')
  }

  render() {
    return (
      <Button onClick={() => this.home()}>
        <HomeIcon /> Home
      </Button>
    );
  }
}

export default connect()(withRouter(HomeButton));