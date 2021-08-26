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
            <h3 className={s.noteHeadline}>{this.props.title}</h3>
            <p>{lightHashtagsContent}</p>
            <input
              className={s.noteInput}
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="title"
            />
            <input
              className={s.noteInput}
              name="content"
              value={this.state.content}
              onChange={this.handleChange}
              placeholder="content"
            />
            <div className={s.buttonBlock}>
              <button onClick={this.onConfirmEdit}>SUBMIT</button>
              <button onClick={this.onCancelEdit}>CANCEL</button>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className={s.buttonsBlock}>
              {!this.props.isEditing && (
                <button
                  className={s.buttonEdit}
                  disabled={this.props.editMode && !this.props.isEditing}
                  onClick={this.onEditNote}
                >
                  ✎
                </button>
              )}
              <button className={s.buttonDelete} onClick={this.onRemoveNote}>
                x
              </button>
            </div>
            <h3 className={s.noteHeadline}>{this.props.title}</h3>
            <p>{this.props.content}</p>
          </React.Fragment>
        )}
      </li>
    );
  }
}
