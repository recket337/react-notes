import s from "./NotesList.module.scss";
import { Note } from "./../Note/Note";
import React from "react";

export const NotesList = (props) => {
  console.log(props);
  const notesItems = props.notes.map((note, index) => (
    <Note
      key={note + index}

      id={note.id}
      title={note.title}
      content={note.content}
      isEditing={note.isEditing}

      submitEdit={props.confirmEdit}
      removeNote={props.removeNote}
      editNote={props.editNote}
      cancelEdit={props.cancelEdit}
    />
  ));

  return <ul>{notesItems}</ul>;
};
