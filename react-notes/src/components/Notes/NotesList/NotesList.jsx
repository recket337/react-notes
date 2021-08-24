import s from "./NotesList.module.scss";
import { Note } from "./../Note/Note"
import React from "react";



export const NotesList = (props) => {
  console.log(props);
  const notesItems = props.notes.map((note, index) => <Note key={index} />);

  return <ul>{notesItems}</ul>;
}


