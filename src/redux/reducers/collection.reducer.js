const collectionReducer = (state = [], action) => {
    console.log('action payload', action.payload);
    console.log('action type', action.type);
    
    switch (action.type) {
      case 'CREATE_COLLECTION':
        return action.payload; 
      case 'RESET_COLLECTION':
        return [];
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default collectionReducer;
  