import { combineReducers, createStore } from 'redux';
import { notesReducer } from './reducers/notesReducer';

const reducersData=combineReducers({
  notes: notesReducer,
});

export let store = createStore(reducersData);

window.store = store;

