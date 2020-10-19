const titleReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_SEARCHED_TITLE':
        return action.payload;
      case 'RESET_SEARCHED_TITLE':
        return [];
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default titleReducer;