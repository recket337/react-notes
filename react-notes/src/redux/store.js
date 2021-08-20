import { createStore } from 'redux';
import { noteReducer } from './reducers/noteReducer';

export default createStore(
  noteReducer,
);
