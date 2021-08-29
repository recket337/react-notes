import React from "react";
import NotesForm from "./Form/NotesFormContainer";
import NotesList from "./NotesList/NotesListContainer";
import HashtagList from "./HashtagList/HashtagListContainer";
import s from "./Notes.module.scss";
import ButtonDownload from "./buttonDownload/ButtonDownloadContainer";
import gitLogo from "./../../assets/img/git.png";

export const Notes = () => {
  const url = "https://github.com/recket337";
  return (
    <div className={s.app}>
      <header className={s.app__header}>
        <ButtonDownload />
        <h1 className={s.app__header__headline}>NOTES</h1>
        <a href={url}>
          <img className={s.app__header__gitLink} src={gitLogo} />
        </a>
      </header>

      <main className={s.app__main}>
        <section className={s.app__main__forms}>
          <NotesForm />
          <HashtagList />
        </section>
        <section className={s.app__main__notes}>
          <NotesList />
        </section>
      </main>
    </div>
  );
};
