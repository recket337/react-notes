import React from "react";
import NotesForm from "./Form/NotesFormContainer";
import NotesList from "./NotesList/NotesListContainer";
import HashtagList from "./HashtagList/HashtagListContainer";
import s from "./Notes.module.scss";
import ButtonDownload from "./buttonDownload/ButtonDownloadContainer";
import gitLogo from "./../../assets/img/git.png"

export const Notes = (props) => {
  const url = "https://github.com/recket337";
  return (
    <>
      <header className={s.header}>
        <ButtonDownload />
        <h1 className={s.headline}>NOTES</h1>
        <a href={url}>
          <img className={s.gitLogo} src={gitLogo}/>
        </a>
      </header>
      <div className={s.wrapper}>
        <main className={s.main}>
          <section className={s.forms}>
            <NotesForm />
            <HashtagList />
          </section>
          <section className={s.notes}>
            <NotesList />
          </section>
        </main>
      </div>
    </>
  );
};
