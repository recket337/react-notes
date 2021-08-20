import React from "react";

export const NotesList = (props) => {
  const onRemoveNote = (index) => {
    props.removeNote(index);
  };
  console.log(props);

  const notesItems = props.notes.map((note, index) => (
    <li key={index}>
      <b>{note.title}</b>
      {/* <button onClick={() => this.editNote(index)}>-</button> */}
      <button onClick={() => onRemoveNote(index)}>x</button>
      <br />
      <span>{note.content}</span>
    </li>
  ));

  return (
    <React.Fragment>
      <h3>All Notes</h3>
      <ul>{notesItems}</ul>
    </React.Fragment>
  );
};
