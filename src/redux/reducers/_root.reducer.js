import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import event from './event.reducer';
import temp from './temp.reducer';
import userEvent from './userEvent.reducer';
import tempPhase from './temp.phase.reducer';
import phase from './phase.reducer';
import post from './post.reducer';
import otherUsersReducer from './otherUsers.reducer';
import collaborators from './collaborators.reducer';
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user,
  event,// will have an id and username if someone is logged in
  temp,
  userEvent,
  tempPhase,
  phase,
  post,
  otherUsersReducer,
  collaborators
  
});

export default rootReducer;
