const detailsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_MOVIE_DETAILS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default detailsReducer;