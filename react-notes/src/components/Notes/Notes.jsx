import React, { Component } from 'react';
import NotesForm from './Form/NotesFormContainer';
import NotesList from './NotesList/NotesListContainer';

export class Notes extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Notes</h1>
        <NotesForm />
        <NotesList />
      </React.Fragment>
    );
  }
}
