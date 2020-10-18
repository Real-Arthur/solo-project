const matchesReducer = (state = [], action) => {
    switch (action.type) {
      case 'CREATE_MATCHES':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default matchesReducer;