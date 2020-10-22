import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from "@material-ui/core"

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class HomeButton extends Component {
  state = {
    heading: 'Class Component',
  };

  library = () => {
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
      this.props.dispatch({
        type: 'RESET_CURRENT'
      })
      this.props.history.push('/library')
  }

  render() {
    return (
      <Button onClick={() => this.library()}>
        Library
      </Button>
    );
  }
}

export default connect()(withRouter(HomeButton));