import s from './NotesList.module.scss'
import React from "react";

export const NotesList = (props) => {
  const onRemoveNote = (index) => {
    props.removeNote(index);
  };
  const onEditNote = (index) => {
    props.editNote(index);
  };

  const handleChangeTitle = (e) => {
    props.updateEditModeTitle(e.target.value);
  };

  const handleChangeContent = (e) => {
    props.updateEditModeContent(e.target.value);
  };

  console.log(props);

  const notesItems = props.notes.map((note, index) => (
    <li key={index}>
      {note.editMode ? (
        <React.Fragment>

          <input value={props.title} onChange={handleChangeTitle} placeholder="title" />
          <input value={props.content} onChange={handleChangeContent} placeholder="content" />

          <button
            onClick={() => props.confirmEdit(index, props.title, props.content)}
          >
            SUBMIT
          </button>
          <button onClick={() => props.toggleEditMode()}>CANCEL</button>

        </React.Fragment>
      ) : (
        <React.Fragment>
          <button onClick={() => onEditNote(index)}>O</button>

          <button onClick={() => onRemoveNote(index)}>x</button>
        </React.Fragment>
      )}
      <br />
      <b>{note.title}</b>
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
