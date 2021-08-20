import React, { Component } from 'react';
import NotesList from './NotesList/NotesList';

export class Notes extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Notes</h1>
        <NotesList />
      </React.Fragment>
    );
  }
}
