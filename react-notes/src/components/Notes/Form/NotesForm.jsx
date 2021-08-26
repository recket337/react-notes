import React from "react";
import s from "./NotesForm.module.scss";

export const NotesForm = (props) => {
  const handleChangeTitle = (e) => {
    props.updateInputFormTitle(e.target.value);
  };

  const handleChangeContent = (e) => {
    props.updateInputFormContent(e.target.value);
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    props.addNote(props.title, props.content);
  };

  return (
    <>
      <h2 className={s.headline}>Create</h2>
      <form className={s.form} onSubmit={handleSubmission}>
        <input
          className={s.titleInput}
          placeholder="Title"
          type="text"
          name="title"
          value={props.title}
          onChange={handleChangeTitle}
        />

        <textarea
          className={s.textarea}
          name="content"
          placeholder="Note content..."
          value={props.content}
          onChange={handleChangeContent}
        ></textarea>
        <br />
        <button className={s.formButton} type="submit">
          Add Note
        </button>
      </form>
    </>
  );
};
