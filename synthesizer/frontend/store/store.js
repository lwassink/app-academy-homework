import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';
import { applyMiddleware } 'redux';


const preloadedState = {
  notes: [],
  tracks: {},
  isRecording:false,
  isPlaying:false
}


const configureStore = (state = preloadedState) => (
  createStore(
    rootReducer,
    state,
    applyMiddleware(addLoggingToDispatch)
  )
);

const addLoggingToDispatch = store => next => action {
  console.log(store.getState());
  console.log(action);
  dispatch(action);
  console.log(store.getState());
}

export default configureStore;

