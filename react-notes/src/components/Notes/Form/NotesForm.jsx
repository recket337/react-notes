import React from "react";

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
    <React.Fragment>
      <h3>Add a Note</h3>

      <form onSubmit={handleSubmission}>
        Title: <br />
        <input
          type="text"
          name="title"
          value={props.title}
          onChange={handleChangeTitle}
        />
        <br />
        Content: <br />
        <textarea
          name="content"
          value={props.content}
          onChange={handleChangeContent}
        ></textarea>
        <br />
        <button type="submit">Add Note</button>
      </form>
    </React.Fragment>
  );
};
