import React, { Component } from "react";
import NotesForm from "./Form/NotesFormContainer";
import NotesList from "./NotesList/NotesListContainer";
import HashtagList from "./HashtagList/HashtagListContainer";
import s from "./Notes.module.scss";

export class Notes extends Component {
  render() {
    return (
      <div className={s.wrapper}>
        <header className={s.header}>
          <h1 className={s.headline}>NOTES</h1>
        </header>
        <div className={s.main}>
          <section className={s.forms}>
            <NotesForm />
            <HashtagList />
          </section>
          <section className={s.notes}>
            <NotesList />
          </section>
        </div>
      </div>
    );
  }
}
