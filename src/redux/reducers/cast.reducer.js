const castReducer = (state = [], action) => {
    console.log('action payload', action.payload);
    console.log('action type', action.type);
    
    switch (action.type) {
      case 'SET_CAST':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default castReducer;