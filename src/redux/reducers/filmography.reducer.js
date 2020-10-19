const filmographyReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_FILMOGRAPHY':
        return action.payload;      
      case 'RESET_FILMOGRAPHY':
        return [];
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default filmographyReducer;