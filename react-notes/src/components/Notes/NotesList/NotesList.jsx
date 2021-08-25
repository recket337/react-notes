import s from "./NotesList.module.scss";
import { Note } from "./Note/Note";
import React from "react";

export const NotesList = (props) => {
  console.log(props.filter);
  let notesItems = props.notes;

  if(props.filter) {
    notesItems = notesItems.filter((note) => note.hashtags.includes(props.filter))
  }

  notesItems = notesItems.map((note, index) => (
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

  return <ul className={s.notesList}>{notesItems}</ul>;
};
