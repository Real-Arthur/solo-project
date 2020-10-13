const personReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_SEARCHED_PERSON':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default personReducer;