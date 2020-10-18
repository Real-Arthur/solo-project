import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import collectionReducer from './collection.reducer';
import titleReducer from './title.reducer';
import personReducer from './person.reducer';
import castReducer from './cast.reducer';
import currentReducer from './current.reducer';
import filmography from './filmography.reducer';
import detailsReducer from './details.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  collectionReducer, // will capture movie library of user
  titleReducer, // will capture title search results
  personReducer,
  castReducer,
  currentReducer,
  filmography,
  detailsReducer
});

export default rootReducer;
