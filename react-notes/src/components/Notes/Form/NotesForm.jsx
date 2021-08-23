import React from "react";
import s from './NotesForm.module.scss'

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
    <div className={s.form}>
      <h2 className={s.headline}>Add a Note</h2>
      <form onSubmit={handleSubmission}>
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
          value={props.content}
          onChange={handleChangeContent}
        ></textarea>
        <br />
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};
