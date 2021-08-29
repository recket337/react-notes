import React, { Component } from "react";
import s from "./Note.module.scss";

export class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      content: this.props.content,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onRemoveNote = () => {
    this.props.removeNote(this.props.id);
  };

  onEditNote = () => {
    this.props.editNote(this.props.id);
  };

  onConfirmEdit = () => {
    this.props.submitEdit(this.props.id, this.state.title, this.state.content);
  };

  onCancelEdit = () => {
    this.props.cancelEdit(this.props.id);
  };

  render() {
    const lightHashtagsContent = this.props.content
      .split(" ")
      .map((item) =>
        item[0] === "#" ? <span className={s.hash}>{item}</span> : item+" "
      );
    return (
      <li className={s.noteItem}>
        {this.props.isEditing ? (
          <React.Fragment>
            <h3 className={s.noteItem__headline}>{this.props.title}</h3>
            <p className={s.noteItem__text}>{lightHashtagsContent}</p>
            <input
              className={s.noteItem__noteInput}
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="title"
            />
            <input
              className={s.noteItem__noteInput}
              name="content"
              value={this.state.content}
              onChange={this.handleChange}
              placeholder="content"
            />
            <div className={s.noteItem__buttonBlock}>
              <button className={s.noteItem__buttonSubmit} onClick={this.onConfirmEdit}>SUBMIT</button>
              <button className={s.noteItem__buttonCancel} onClick={this.onCancelEdit}>CANCEL</button>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className={s.noteItem__buttonsBlock}>
              {!this.props.isEditing && (
                <button
                  className={s.noteItem__buttonsBlock__buttonEdit}
                  disabled={this.props.editMode && !this.props.isEditing}
                  onClick={this.onEditNote}
                >
                  ✎
                </button>
              )}
              <h3 className={s.noteItem__headline}>{this.props.title}</h3>
              <button className={s.noteItem__buttonsBlock__buttonDelete} onClick={this.onRemoveNote}>
              &#x2715;
              </button>
            </div>
            <p className={s.noteItem__text}>{this.props.content}</p>
          </React.Fragment>
        )}
      </li>
    );
  }
}
